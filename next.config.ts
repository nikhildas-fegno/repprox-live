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
};

export default nextConfig;
