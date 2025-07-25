import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "rukminim2.flixcart.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "static-assets-web.flixcart.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
