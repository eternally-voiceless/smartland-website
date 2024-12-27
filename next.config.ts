/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/smartland-website',
  assetPrefix: '/smartland-website/',
}

module.exports = nextConfig
