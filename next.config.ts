import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // Отключаем проверку ESLint при сборке
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Отключаем строгую проверку TypeScript при сборке
    ignoreBuildErrors: true,
  },
};

export default nextConfig;