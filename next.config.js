/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Ensure static export is enabled
  eslint: {
    ignoreDuringBuilds: true, // Optional: skip ESLint during build
  },
  images: { unoptimized: true }, // Optional: handle images without optimization
};

module.exports = nextConfig;
