/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    basePath: '/app',
    assetPrefix: '/app/',
    output:"export",
  },
}

module.exports = nextConfig
