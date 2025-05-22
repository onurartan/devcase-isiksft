import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.trymagic.xyz",
        port: "",
        pathname: "/**",
      },
       {
        protocol: "https",
        hostname: "isiksoft-app-space.fra1.digitaloceanspaces.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
