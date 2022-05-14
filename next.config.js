/** @type {import('next').NextConfig} */
const withPlugins = require('next-compose-plugins')
const optimizedImages = require('next-optimized-images')

const nextConfig = {
  reactStrictMode: true,
  assetPrefix: './',
  images: {
    disableStaticImages: true
  }
}

module.exports = withPlugins([
  [optimizedImages, {
    handleImages: ['jpeg', 'png', 'svg', 'ico']
  }]
], nextConfig)
