import Link from 'next/link'
import type { Metadata } from 'next'
import { getCityContent } from '@/lib/content'

export const metadata: Metadata = {
  title: "Guilin Travel Guide 2026 — Karst Mountains & Li River Cruise",
  description: "Complete Guilin travel guide for foreign tourists. Li River cruise, Yangshuo cycling, Longji Rice Terraces, and practical tips.",
  alternates: {
    canonical: 'https://chinabound.online/city/guilin/',
  },
}

export default function GuilinPage() {
  const { overview, attractions, food, transport } = getCityContent('guilin')

  return (
    <div>
      <section className="section" style={{ background: 'var(--warm-bg)', paddingBottom: '2rem' }}>
        <div className="section-center">
          <nav className="breadcrumb">
            <Link href="/">Home</Link>
            <span className="breadcrumb-sep">/</span>
            <Link href="/city/">Cities</Link>
            <span className="breadcrumb-sep">/</span>
            <span style={{ color: 'var(--text)' }}>Guilin</span>
          </nav>
          <div className="section-label">City Guide</div>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '0.5rem' }}>⛰️ Guilin</h1>
          <p className="section-subtitle" style={{ marginBottom: '0' }}>
            China's most beautiful landscape. Karst mountains, Li River cruise,
            and the stunning Longji Rice Terraces.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '2rem' }}>
        <div className="section-center">
          <div className="quick-facts">
            <div className="fact">
              <span className="fact-label">Population</span>
              <span className="fact-value">5M</span>
            </div>
            <div className="fact">
              <span className="fact-label">Best Time</span>
              <span className="fact-value">Apr – Oct</span>
            </div>
            <div className="fact">
              <span className="fact-label">Daily Budget</span>
              <span className="fact-value">¥200–400</span>
            </div>
            <div className="fact">
              <span className="fact-label">English Level</span>
              <span className="fact-value">Moderate</span>
            </div>
          </div>

          {transport.length > 0 && (
            <div style={{ marginBottom: '3rem' }}>
              <h2 className="section-title" style={{ fontSize: '1.5rem', marginBottom: '1.25rem' }}>Getting Around</h2>
              <div className="list-grid">
                {transport.map((item) => (
                  <Link key={item.slug} href={`/city/guilin/${item.slug}/`} className="card-link">
                    <h3>{item.meta.title}</h3>
                    <p>{item.meta.description}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {attractions.length > 0 && (
            <div style={{ marginBottom: '3rem' }}>
              <h2 className="section-title" style={{ fontSize: '1.5rem', marginBottom: '1.25rem' }}>Top Attractions</h2>
              <div className="list-grid">
                {attractions.map((item) => (
                  <Link key={item.slug} href={`/city/guilin/${item.slug}/`} className="card-link">
                    <h3>{item.meta.title}</h3>
                    <p>{item.meta.description}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}

          <div className="callout-box">
            <h2>How Many Days?</h2>
            <p>
              We recommend <strong>3 days</strong> for Guilin: Li River Cruise + Yangshuo cycling + Longji Rice Terraces.
              Stay longer in <strong>Yangshuo</strong> if you love cycling and outdoor activities.
            </p>
            <Link href="/city/guilin/itinerary-3-days/" className="btn btn-filled">
              See Our 3-Day Itinerary
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
