import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * HTTP Basic auth in front of /admin.
 *
 * Note this is the `proxy` file convention — `middleware` is deprecated and was
 * renamed to `proxy` in this version of Next.
 *
 * The bookings dashboard exposes lead names, emails and phone numbers, so it
 * must never be publicly reachable. Fails closed: if ADMIN_PASSWORD isn't set,
 * nobody gets in.
 */
function unauthorized() {
  return new NextResponse("Unauthorized", {
    status: 401,
    headers: { "WWW-Authenticate": 'Basic realm="iCoop Admin"' },
  });
}

export function proxy(request: NextRequest) {
  if (!request.nextUrl.pathname.startsWith("/admin")) {
    return NextResponse.next();
  }

  const expected = process.env.ADMIN_PASSWORD;
  if (!expected) return unauthorized();

  const authHeader = request.headers.get("authorization");
  if (!authHeader?.startsWith("Basic ")) return unauthorized();

  try {
    const decoded = Buffer.from(authHeader.slice(6), "base64").toString("utf-8");
    const separatorIndex = decoded.indexOf(":");
    if (separatorIndex === -1) return unauthorized();

    const user = decoded.slice(0, separatorIndex);
    const password = decoded.slice(separatorIndex + 1);

    if (user === "admin" && password === expected) {
      return NextResponse.next();
    }
  } catch {
    // Malformed header — fall through to 401.
  }

  return unauthorized();
}

export const config = {
  matcher: ["/admin/:path*"],
};
