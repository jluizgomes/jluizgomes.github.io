/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  basePath: isProd ? '/jluizgomes.github.io' : '',
  assetPrefix: isProd ? '/jluizgomes.github.io/' : '',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
