import type { Metadata } from 'next'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  metadataBase: new URL('https://chinabound.online'),
  title: {
    default: 'ChinaTravel — Your China Trip, Decoded',
    template: '%s | ChinaTravel',
  },
  description: 'Practical travel guides for foreign tourists visiting China. Survival tips, city guides, food recommendations, and itinerary planning. Written by locals.',
  keywords: ['China travel', 'China guide', 'visit China', 'Chengdu travel', 'Beijing travel', 'Shanghai travel', 'China tips', 'China for foreigners', 'China survival guide'],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'ChinaTravel Guide',
    url: 'https://chinabound.online',
    title: 'ChinaTravel — Your China Trip, Decoded',
    description: 'Practical travel guides for foreign tourists visiting China. Written by locals.',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@grainrain_young',
    creator: '@grainrain_young',
    title: 'ChinaTravel — Your China Trip, Decoded',
    description: 'Practical travel guides for foreign tourists visiting China. Written by locals.',
  },
  alternates: {
    canonical: 'https://chinabound.online',
    types: {
      'text/plain': 'https://chinabound.online/llms.txt',
    },
  },
  icons: {
    icon: '/icon.svg',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&family=DM+Serif+Display&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Nav />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
