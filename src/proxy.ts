import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { ADMIN_COOKIE, jetonGecerliMi } from "@/lib/admin-token";

/**
 * /admin altındaki her sayfayı korur.
 *
 * Bu yalnızca ilk savunma hattıdır — server action'lar proxy'den
 * geçmeden de çağrılabildiği için her yönetim işlemi ayrıca
 * `yetkiGerekli()` ile kendini korur.
 */
export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Giriş sayfasının kendisi korumasız olmalı
  if (pathname === "/admin/giris") return NextResponse.next();

  const gecerli = await jetonGecerliMi(request.cookies.get(ADMIN_COOKIE)?.value);
  if (gecerli) return NextResponse.next();

  const url = request.nextUrl.clone();
  url.pathname = "/admin/giris";
  url.search = pathname === "/admin" ? "" : `?devam=${encodeURIComponent(pathname)}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: "/admin/:path*",
};
