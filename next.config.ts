import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  images: {
    domains: ['localhost', 'gmmdabd.github.io'],
    unoptimized: true,
  },
};

export default nextConfig;
