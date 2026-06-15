import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (!pathname.startsWith("/admin")) return NextResponse.next();
  if (pathname.startsWith("/admin/login")) return NextResponse.next();

  const token = req.cookies.get("admin_session")?.value;
  const loginUrl = new URL("/admin/login", req.url);
  const isApiRoute = pathname.startsWith("/admin/api/");

  if (!token) {
    if (isApiRoute) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    return NextResponse.redirect(loginUrl);
  }

  // Full JWT verification happens in getSession() inside layouts and API routes.
  // Middleware only gates on cookie presence to avoid Edge runtime bundling issues.
  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
