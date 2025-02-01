import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: "/",
        destination: "/en",
        permanent: true, // 301 redirect
      },
    ];
  },
};

export default nextConfig;
