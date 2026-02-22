import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/webp", "image/avif"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
  },
  compress: true,
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
