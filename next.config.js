/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    appName: 'Aloel.Dev',
    version: '1.0.0',
    linkCv: 'https://drive.google.com/file/d/1_d1SVFAGtgWh_-nfMwQ-_BHYexonlJcd/view?usp=drive_link'
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ik.imagekit.io',
        port: '',
        pathname: '/0nln4zk3z/aloel-blog/**',
      },
    ],
  },
}

module.exports = nextConfig
