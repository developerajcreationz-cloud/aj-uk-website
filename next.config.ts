import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV !== "production";

/**
 * Blocks scripts, frames and form posts from anywhere but this site and Google Analytics (loaded only after consent).
 * 'unsafe-inline' is needed for Next's inline hydration scripts: a nonce would force every page to render per request
 * and lose static caching. The host adds upgrade-insecure-requests itself.
 */
const csp = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""} https://www.googletagmanager.com`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https://www.google-analytics.com https://www.googletagmanager.com",
  "font-src 'self' data:",
  "connect-src 'self' https://www.google-analytics.com https://*.google-analytics.com https://*.analytics.google.com https://www.googletagmanager.com",
  "media-src 'self'",
  "worker-src 'self' blob:",
  "manifest-src 'self'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'self'",
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: csp },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  { key: "Strict-Transport-Security", value: "max-age=31536000" },
];

const nextConfig: NextConfig = {
  // Every URL ends in a slash (redirects the slash-less form with a 308).
  trailingSlash: true,
  poweredByHeader: false,
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
  // One canonical host: send www to the bare domain with a permanent redirect.
  async redirects() {
    return [
      // Pages from the previous site that have a direct equivalent here.
      { source: "/about-us", destination: "/about/", permanent: true },
      { source: "/contact-us", destination: "/contact/", permanent: true },
      { source: "/home-2", destination: "/", permanent: true },
      {
        source: "/",
        has: [{ type: "host", value: "www.ajcreationz.co.uk" }],
        destination: "https://ajcreationz.co.uk/",
        permanent: true,
      },
      // Keep the trailing slash in the destination so www URLs reach the canonical page in one hop.
      {
        source: "/:path+",
        has: [{ type: "host", value: "www.ajcreationz.co.uk" }],
        destination: "https://ajcreationz.co.uk/:path+/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
