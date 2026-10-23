import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { SmoothScroll } from '@/components/smooth-scroll'
import './globals.css'

export const metadata: Metadata = {
  title: 'Atelier North — Architecture, Interiors & Landscape',
  description: 'Atelier North is an independent design studio shaping considered environments for modern living.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        <SmoothScroll />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
