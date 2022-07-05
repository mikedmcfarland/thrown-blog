/** @type {import('next').NextConfig} */
const withTM = require('next-transpile-modules')(["react-syntax-highlighter"])
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['placekitten.com']
  }
}

module.exports = withTM(nextConfig)
