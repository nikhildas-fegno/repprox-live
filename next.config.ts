import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  turbopack: {
    // Pin the workspace root to this project — a parent directory also
    // contains a lockfile, which would otherwise make Next.js guess wrong.
    root: path.join(__dirname),
  },
};

export default nextConfig;
