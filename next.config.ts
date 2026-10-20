import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // acesso ao dev server pela rede local (celular, outro computador)
  allowedDevOrigins: ["192.168.18.15"],
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
