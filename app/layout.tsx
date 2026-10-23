import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { SmoothScroll } from '@/components/smooth-scroll'
import './globals.css'

export const metadata: Metadata = {
  title: 'Atelier North — Architecture, Interiors & Landscape',
  description: 'Atelier North is an independent design studio shaping considered environments for modern living.',
  icons: {
    icon: '/icon.svg',
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
