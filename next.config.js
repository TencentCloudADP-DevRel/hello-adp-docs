/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: '/hello-adp-docs',
  assetPrefix: '/hello-adp-docs/',
}

module.exports = nextConfig