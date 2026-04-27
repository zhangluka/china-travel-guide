import type { Metadata } from 'next'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: {
    default: 'ChinaTravel — Your China Trip, Decoded',
    template: '%s | ChinaTravel',
  },
  description: 'Practical travel guides for foreign tourists visiting China. Survival tips, city guides, food recommendations, and itinerary planning. Written by locals.',
  keywords: ['China travel', 'China guide', 'visit China', 'Chengdu travel', 'China tips', 'China for foreigners'],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'ChinaTravel Guide',
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
