import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '../ThemeContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Yadidiah Kanaparthi | AI/ML Engineer & Data Scientist Portfolio',
  description: 'AI/ML Engineer, Data Scientist & LLM Specialist. Expert in Deep Learning, NLP, Computer Vision, MLOps, and RAG systems. Published researcher with 3 IEEE & Springer papers. Explore my projects, certifications & publications.',
  keywords: 'AI Engineer, Machine Learning, Data Science, LLM, RAG, NLP, Deep Learning, MLOps, TensorFlow, PyTorch, Python, Computer Vision, Data Analytics',
  authors: [{ name: 'Yadidiah Kanaparthi' }],
  robots: 'index, follow',
  openGraph: {
    title: 'Yadidiah Kanaparthi | AI/ML Engineer & Data Scientist',
    description: 'AI/ML Engineer specializing in Deep Learning, NLP, and MLOps. Published researcher with expertise in LLM fine-tuning, RAG systems, and Computer Vision.',
    url: 'https://yadidiah.vercel.app/',
    siteName: 'Yadidiah Kanaparthi Portfolio',
    images: [
      {
        url: 'https://yadidiah.vercel.app/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Yadidiah Kanaparthi Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yadidiah Kanaparthi | AI/ML Engineer & Data Scientist',
    description: 'AI/ML Engineer specializing in Deep Learning, NLP, and MLOps. Published researcher with expertise in LLM fine-tuning, RAG systems, and Computer Vision.',
    images: ['https://yadidiah.vercel.app/og-image.png'],
    creator: '@yadidiahk',
  },
  themeColor: '#050816',
  manifest: '/manifest.json',
  alternates: {
    canonical: 'https://yadidiah.vercel.app/',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-primary text-text-primary`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
