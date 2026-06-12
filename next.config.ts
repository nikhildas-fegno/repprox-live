import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fegno-development.s3.ap-south-1.amazonaws.com",
        pathname: "/repprox/**",
      },
    ],
  },
  turbopack: {
    // Pin the workspace root — a parent directory also contains a lockfile
    // which would otherwise make Next.js guess wrong.
    root: path.join(__dirname),
  },
};

export default nextConfig;
