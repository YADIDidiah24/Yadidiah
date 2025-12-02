/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'yadidiah.vercel.app',
      },
      {
        protocol: 'https',
        hostname: 'randomuser.me',
      },
    ],
  },
  env: {
    NEXT_PUBLIC_VITE_SERVICE: process.env.VITE_SERVICE,
    NEXT_PUBLIC_VITE_TEMPLATE: process.env.VITE_TEMPLATE,
    NEXT_PUBLIC_VITE_KEY: process.env.VITE_KEY,
    NEXT_PUBLIC_VITE_CC: process.env.VITE_CC,
  },
}

export default nextConfig
