import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["lastfm.freetls.fastly.net"],
  },
};

export default nextConfig;
