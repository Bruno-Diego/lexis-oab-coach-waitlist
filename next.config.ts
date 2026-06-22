import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/lexis-oab-coach-waitlist",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
