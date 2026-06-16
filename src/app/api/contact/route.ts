import { NextResponse } from "next/server";
import { z } from "zod";

import { contactFormSchema } from "@/lib/validations";
import { db } from "@/lib/db";
import { slotToUtc } from "@/lib/scheduling";

export const runtime = "nodejs";

const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const requestLog = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (requestLog.get(ip) ?? []).filter((ts) => now - ts < RATE_LIMIT_WINDOW_MS);
  recent.push(now);
  requestLog.set(ip, recent);
  return recent.length > RATE_LIMIT_MAX_REQUESTS;
}

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Please try again in a minute." },
      { status: 429 },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  // Honeypot — silently succeed so bots don't adapt.
  const rawBody = body as Record<string, unknown>;
  if (rawBody.company_website) {
    return NextResponse.json({ ok: true });
  }

  const result = contactFormSchema.safeParse(body);
  if (!result.success) {
    return NextResponse.json(
      { error: "Validation failed.", issues: z.flattenError(result.error).fieldErrors },
      { status: 422 },
    );
  }

  const { ...submission } = result.data;

  try {
    await db.$transaction(async (tx) => {
      const lead = await tx.demoLead.create({
        data: {
          firstName: submission.firstName,
          lastName: submission.lastName,
          email: submission.email,
          company: submission.company,
          country: submission.country,
          teamSize: submission.teamSize,
          painPoints: submission.painPoints,
          message: submission.message ?? null,
        },
      });

      if (submission.date && submission.time && submission.timezone) {
        const scheduledAt = slotToUtc(submission.date, submission.time, submission.timezone);
        await tx.demoMeeting.create({
          data: {
            leadId: lead.id,
            scheduledAt,
            timezone: submission.timezone,
          },
        });
      }
    });
  } catch (err: unknown) {
    // P2002 = unique constraint violation → slot already booked
    if (
      err &&
      typeof err === "object" &&
      "code" in err &&
      (err as { code: string }).code === "P2002"
    ) {
      return NextResponse.json(
        { error: "This time slot was just booked. Please choose another." },
        { status: 409 },
      );
    }
    console.error("[contact] db error", err);
    return NextResponse.json({ error: "Failed to save. Please try again." }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
