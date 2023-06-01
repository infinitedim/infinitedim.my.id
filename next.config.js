/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  reactStrictMode: true,
  experimental: {
    appDir: true,
    optimizeCss: true,
  },
};

module.exports = nextConfig;
