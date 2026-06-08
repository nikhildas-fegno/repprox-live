import { NextResponse } from "next/server";

/**
 * Content-Security-Policy is intentionally without per-request nonces: this is
 * a static marketing site with no user-generated HTML and a small, known set
 * of script/style origins, so a fixed allowlist is simpler to maintain and
 * just as effective at blocking injected third-party script execution.
 *
 * 'unsafe-eval' is added only outside production — Next.js dev mode relies on
 * eval() for HMR and stack-frame reconstruction, but React (and our build)
 * never uses it once compiled for production, so the real deployment stays strict.
 */
const isDev = process.env.NODE_ENV !== "production";

const CONTENT_SECURITY_POLICY = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""}`,
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "img-src 'self' data: blob:",
  "font-src 'self' https://fonts.gstatic.com",
  "connect-src 'self'",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "object-src 'none'",
  "upgrade-insecure-requests",
].join("; ");

const SECURITY_HEADERS: [string, string][] = [
  ["Content-Security-Policy", CONTENT_SECURITY_POLICY],
  ["X-Frame-Options", "DENY"],
  ["X-Content-Type-Options", "nosniff"],
  ["Referrer-Policy", "strict-origin-when-cross-origin"],
  ["Permissions-Policy", "camera=(), microphone=(), geolocation=(), interest-cohort=()"],
  ["Strict-Transport-Security", "max-age=63072000; includeSubDomains; preload"],
  ["X-DNS-Prefetch-Control", "on"],
];

export function proxy() {
  const response = NextResponse.next();

  for (const [key, value] of SECURITY_HEADERS) {
    response.headers.set(key, value);
  }

  return response;
}

export const config = {
  matcher: [
    /*
     * Apply to everything except Next internals and static assets,
     * which are served with their own caching/headers.
     */
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};
