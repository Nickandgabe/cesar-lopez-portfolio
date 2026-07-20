import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: "standalone",
    async rewrites() {
          return [
            {
                      source: "/myproductdashboard",
                      destination: "/myproductdashboard.html",
            },
                ];
    },
};

export default nextConfig;
