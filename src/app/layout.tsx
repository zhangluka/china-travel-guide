import type { Metadata } from 'next'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  metadataBase: new URL('https://chinabound.online'),
  title: {
    default: 'China Travel Guide 2026: Practical Tips from Locals',
    template: '%s | ChinaBound',
  },
  description: 'Practical China travel guides written by locals — Alipay setup, VPN, visa-free entry, city guides for Beijing, Chengdu, Shanghai. Everything you need before your trip.',
  keywords: ['China travel', 'China travel guide', 'visit China', 'China tips', 'Beijing travel', 'Shanghai travel', 'Chengdu travel', 'China for foreigners', 'China visa', 'Alipay for foreigners', 'is it safe to travel to China'],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'ChinaBound',
    url: 'https://chinabound.online',
    title: 'China Travel Guide 2026: Practical Tips from Locals',
    description: 'Practical China travel guides written by locals — Alipay, VPN, visa, city guides. Everything you need before your trip.',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@grainrain_young',
    creator: '@grainrain_young',
    title: 'China Travel Guide 2026: Practical Tips from Locals',
    description: 'Practical China travel guides written by locals — Alipay, VPN, visa, city guides. Everything you need before your trip.',
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
