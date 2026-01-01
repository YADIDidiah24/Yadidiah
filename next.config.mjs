/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: 'dist',
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'yadidiah.vercel.app' },
      { protocol: 'https', hostname: 'randomuser.me' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
    ],
  },
  env: {
    NEXT_PUBLIC_EMAILJS_SERVICE: process.env.NEXT_PUBLIC_EMAILJS_SERVICE || process.env.VITE_SERVICE,
    NEXT_PUBLIC_EMAILJS_TEMPLATE: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE || process.env.VITE_TEMPLATE,
    NEXT_PUBLIC_EMAILJS_KEY: process.env.NEXT_PUBLIC_EMAILJS_KEY || process.env.VITE_KEY,
    NEXT_PUBLIC_EMAIL_TO: process.env.NEXT_PUBLIC_EMAIL_TO || process.env.VITE_CC,
  },
}

export default nextConfig
