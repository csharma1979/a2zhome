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
    appDir: true,
    routeCache: true,
    scrollRestoration: true,
    optimizeCss: true,
    serverActions: true,
  },
  staticPageGenerationTimeout: 120,
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
}

module.exports = nextConfig