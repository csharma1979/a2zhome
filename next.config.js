/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'],
    formats: ['image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  env: {
    MONGODB_URL: process.env.MONGODB_URL,
  },
  experimental: {
    turbo: true
  },
  webpack: (config) => {
    config.resolve.fallback = { fs: false };
    return config;
  },
  sassOptions: {
    includePaths: ['./styles'],
  }
}

module.exports = nextConfig