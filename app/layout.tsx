import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://compro-globe.robokomputer.workers.dev'),
  title: 'RoboKomputer — Solusi Digital untuk Bisnis Modern',
  description: 'Aplikasi web, desktop, dashboard realtime, dan service laptop untuk membantu bisnis tumbuh lebih cepat.',
  icons: {
    icon: '/icon.svg',
  },
  openGraph: {
    title: 'RoboKomputer — Solusi Digital untuk Bisnis Modern',
    description: 'Aplikasi web, desktop, dashboard realtime, dan service laptop untuk membantu bisnis tumbuh lebih cepat.',
    url: 'https://compro-globe.robokomputer.workers.dev',
    siteName: 'RoboKomputer',
    images: [
      {
        url: '/placeholder_t.jpg',
        width: 1200,
        height: 630,
        alt: 'RoboKomputer Preview',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RoboKomputer — Solusi Digital untuk Bisnis Modern',
    description: 'Aplikasi web, desktop, dashboard realtime, dan service laptop untuk membantu bisnis tumbuh lebih cepat.',
    images: ['/placeholder_t.jpg'],
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
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
