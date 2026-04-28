import Link from 'next/link'
import type { Metadata } from 'next'
import { getCityContent } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Beijing Travel Guide — Forbidden City, Great Wall & Imperial History',
  description: 'Complete Beijing travel guide for foreign tourists. Forbidden City, Great Wall, hutongs, Peking duck, and practical tips from a local.',
}

export default function BeijingPage() {
  const { overview, attractions, food, transport } = getCityContent('beijing')

  return (
    <div>
      {/* Hero */}
      <section className="section" style={{ background: 'var(--warm-bg)', paddingBottom: '2rem' }}>
        <div className="section-center">
          <nav className="breadcrumb">
            <Link href="/">Home</Link>
            <span className="breadcrumb-sep">/</span>
            <Link href="/city/">Cities</Link>
            <span className="breadcrumb-sep">/</span>
            <span style={{ color: 'var(--text)' }}>Beijing</span>
          </nav>
          <div className="section-label">City Guide</div>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '0.5rem' }}>🏯 Beijing</h1>
          <p className="section-subtitle">
            A thousand years of imperial history, and one of the world&apos;s greatest cities.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '2rem' }}>
        <div className="section-center">
          {/* Quick Facts */}
          <div className="quick-facts">
            <div className="fact">
              <span className="fact-label">Population</span>
              <span className="fact-value">21M</span>
            </div>
            <div className="fact">
              <span className="fact-label">Best Time</span>
              <span className="fact-value">Apr – Jun, Sep – Oct</span>
            </div>
            <div className="fact">
              <span className="fact-label">Daily Budget</span>
              <span className="fact-value">¥400–800</span>
            </div>
            <div className="fact">
              <span className="fact-label">English Level</span>
              <span className="fact-value">Medium</span>
            </div>
          </div>

          {/* Getting Around */}
          {transport.length > 0 && (
            <div style={{ marginBottom: '3rem' }}>
              <h2 className="section-title" style={{ fontSize: '1.5rem', marginBottom: '1.25rem' }}>Getting Around</h2>
              <div className="list-grid">
                {transport.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/city/beijing/${item.slug}/`}
                    className="card-link"
                  >
                    <h3>{item.meta.title}</h3>
                    <p>{item.meta.description}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Attractions */}
          {attractions.length > 0 && (
            <div style={{ marginBottom: '3rem' }}>
              <h2 className="section-title" style={{ fontSize: '1.5rem', marginBottom: '1.25rem' }}>Top Attractions</h2>
              <div className="list-grid">
                {attractions.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/city/beijing/${item.slug}/`}
                    className="card-link"
                  >
                    <h3>{item.meta.title}</h3>
                    <p>{item.meta.description}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Food */}
          {food.length > 0 && (
            <div style={{ marginBottom: '3rem' }}>
              <h2 className="section-title" style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Food &amp; Drink</h2>
              <p style={{ color: 'var(--muted)', marginBottom: '1.25rem' }}>
                Beijing&apos;s food scene is defined by <strong>Peking duck</strong>, imperial court cuisine, and hearty northern cooking. It&apos;s bold, unapologetic, and unforgettable.
              </p>
              <div className="list-grid">
                {food.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/city/beijing/${item.slug}/`}
                    className="card-link"
                  >
                    <h3>{item.meta.title}</h3>
                    <p>{item.meta.description}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Itinerary CTA */}
          <div className="callout-box">
            <h2>How Many Days?</h2>
            <p>
              We recommend <strong>4–6 days</strong> for Beijing. The city is massive and each site deserves time. Don&apos;t rush the Forbidden City.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
