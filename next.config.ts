import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // One canonical host: send www to the bare domain with a permanent redirect.
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.ajcreationz.co.uk" }],
        destination: "https://ajcreationz.co.uk/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
