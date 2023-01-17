/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true
  },
  images: {
    remotePatterns: [{
      hostname: "cdn.myanimelist.net"
    }]
  }
}

module.exports = nextConfig
