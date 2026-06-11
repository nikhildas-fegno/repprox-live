import { NextResponse } from "next/server";
import { z } from "zod";

import { meetingSchema } from "@/lib/validations";

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

  const result = meetingSchema.safeParse(body);
  if (!result.success) {
    return NextResponse.json(
      { error: "Validation failed.", issues: z.flattenError(result.error).fieldErrors },
      { status: 422 },
    );
  }

  const { company_website, ...submission } = result.data;

  if (company_website) {
    return NextResponse.json({ ok: true });
  }

  console.info("[meeting] new booking request", {
    company: submission.company,
    email: submission.email,
    date: submission.date,
    time: submission.time,
    timezone: submission.timezone,
  });

  return NextResponse.json({ ok: true });
}
