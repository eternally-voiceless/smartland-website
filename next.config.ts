/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/smartland-website' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/smartland-website/' : '',
}

module.exports = nextConfig