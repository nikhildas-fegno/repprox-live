import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";

function getSecret() {
  const secret = process.env.SESSION_SECRET;
  if (!secret || secret.length < 32) {
    // Refuse to serve admin routes if secret is missing/too short
    return null;
  }
  return new TextEncoder().encode(secret);
}

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (!pathname.startsWith("/admin")) return NextResponse.next();
  if (pathname.startsWith("/admin/login")) return NextResponse.next();

  const loginUrl = new URL("/admin/login", req.url);
  const secret = getSecret();

  // Misconfigured secret — block all admin access
  if (!secret) return NextResponse.redirect(loginUrl);

  const isApiRoute = pathname.startsWith("/admin/api/");
  const token = req.cookies.get("admin_session")?.value;
  if (!token) {
    if (isApiRoute) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    return NextResponse.redirect(loginUrl);
  }

  try {
    await jwtVerify(token, secret);
    return NextResponse.next();
  } catch {
    if (isApiRoute) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    // Expired or tampered token — clear it and redirect
    const res = NextResponse.redirect(loginUrl);
    res.cookies.delete("admin_session");
    return res;
  }
}

export const config = {
  matcher: ["/admin/:path*"],
};
