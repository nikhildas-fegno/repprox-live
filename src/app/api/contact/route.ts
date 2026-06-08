import { NextResponse } from "next/server";
import { z } from "zod";

import { contactFormSchema } from "@/lib/validations";

export const runtime = "nodejs";

// Simple in-memory rate limit per IP. Resets on deploy/restart — adequate for
// deterring casual abuse on a marketing contact form without adding infra.
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

  const result = contactFormSchema.safeParse(body);
  if (!result.success) {
    return NextResponse.json(
      { error: "Validation failed.", issues: z.flattenError(result.error).fieldErrors },
      { status: 422 },
    );
  }

  const { company_website, ...submission } = result.data;

  // Honeypot tripped — silently report success so bots don't learn to adapt.
  if (company_website) {
    return NextResponse.json({ ok: true });
  }

  // In production this would enqueue a CRM/email notification. Logging keeps
  // the marketing site self-contained without requiring third-party secrets.
  console.info("[contact] new inquiry", {
    company: submission.company,
    teamSize: submission.teamSize,
    email: submission.email,
  });

  return NextResponse.json({ ok: true });
}
