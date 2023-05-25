/** @type {import('next').NextConfig} */
const nextConfig = {}

const withMDX = require('@next/mdx')({
  providerImportSource: '@mdx-js/react',
});
module.exports = withMDX(nextConfig)
