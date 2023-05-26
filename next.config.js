/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    domains: [
      'p3-smartisantv.byteimg.com',
      'smartisan.com',
      'qcc.com'
    ]
  }
}

const withMDX = require('@next/mdx')({
  providerImportSource: '@mdx-js/react',
});
module.exports = withMDX(nextConfig)
