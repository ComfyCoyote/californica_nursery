/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    deviceSizes: [640, 750, 1080, 1920],
    imageSizes: [16, 32, 64, 128],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'd4ixhj8jfp690.cloudfront.net',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig



