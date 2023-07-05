/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        port: ''
      }
    ],
  },
  async redirects() {
    return [
      {
        source: '/techsafar',
        destination: 'https://oiiosmwbmyy.typeform.com/to/otje05wJ',
        permanent: false
      },
      {
        source: '/core-recruitment',
        destination: 'https://form.typeform.com/to/kXxzuS94',
        permanent: false
      },
    ]
  }
}

module.exports = nextConfig
