import { NextResponse } from "next/server";

/**
 * This domain used to run a WordPress/WooCommerce shop. Google still lists those URLs, so they are answered with
 * 410 Gone (a stronger "removed" signal than 404) while the few with a real equivalent are redirected in next.config.ts.
 * The matcher is limited to the old paths so every normal request skips this function.
 */
export function proxy() {
  return new NextResponse("Gone", {
    status: 410,
    headers: { "Content-Type": "text/plain; charset=utf-8", "X-Robots-Tag": "noindex" },
  });
}

export const config = {
  matcher: [
    "/product/:path*",
    "/product-category/:path*",
    "/product-tag/:path*",
    "/shop/:path*",
    "/cart/:path*",
    "/checkout/:path*",
    "/my-account/:path*",
    "/wishlist/:path*",
    "/wp-content/:path*",
    "/wp-includes/:path*",
    "/wp-admin/:path*",
    "/wp-json/:path*",
    "/wp-login.php",
    "/xmlrpc.php",
    "/category/:path*",
    "/tag/:path*",
    "/author/:path*",
    "/sample-page/:path*",
    "/blog-2/:path*",
  ],
};
