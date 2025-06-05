import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Free Image to PDF Converter | Batch Processing | Drag & Drop',
  description: 'Free online image to PDF converter. Convert JPG, PNG, WEBP to PDF instantly. Batch processing, drag & drop reordering, no upload required. Secure & private.',
  keywords: 'free image to PDF converter, batch image converter, JPG to PDF, PNG to PDF, drag drop PDF, secure PDF converter, no upload required',
  authors: [{ name: 'Image to PDF Converter' }],
  creator: 'Image to PDF Converter',
  publisher: 'Image to PDF Converter',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://pdf.pullvideo.com'),
  alternates: {
    canonical: '/',
    languages: {
      'en': '/',
      'zh': '/?lang=zh',
      'es': '/?lang=es',
      'fr': '/?lang=fr',
    },
  },
  openGraph: {
    title: 'Free Image to PDF Converter | Batch Processing | Drag & Drop',
    description: 'Free online image to PDF converter. Convert JPG, PNG, WEBP to PDF instantly. Batch processing, drag & drop reordering, no upload required. Secure & private.',
    url: 'https://pdf.pullvideo.com',
    siteName: 'Image to PDF Converter',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Image to PDF Converter - Free Image to PDF Converter',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Image to PDF Converter | Batch Processing | Drag & Drop',
    description: 'Free online image to PDF converter. Convert JPG, PNG, WEBP to PDF instantly. Batch processing, drag & drop reordering, no upload required.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#ef4444" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Image to PDF Converter" />
      </head>
      <body className="min-h-screen bg-gray-50">
        {children}
      </body>
    </html>
  )
} 