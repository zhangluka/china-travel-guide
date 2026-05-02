import Link from 'next/link'
import type { Metadata } from 'next'
import { getCityContent } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Shanghai Travel Guide — The Bund, Food & Urban Adventures',
  description: 'Complete Shanghai travel guide for foreign tourists. The Bund, Oriental Pearl Tower, French Concession, food, and practical tips from a local.',
  alternates: {
    canonical: 'https://chinabound.online/city/shanghai/',
  },
}

export default function ShanghaiPage() {
  const { overview, attractions, food, transport } = getCityContent('shanghai')

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
            <span style={{ color: 'var(--text)' }}>Shanghai</span>
          </nav>
          <div className="section-label">City Guide</div>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '0.5rem' }}>🌃 Shanghai</h1>
          <p className="section-subtitle">
            Where old and new China collide in the most international city on earth.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '2rem' }}>
        <div className="section-center">
          {/* Quick Facts */}
          <div className="quick-facts">
            <div className="fact">
              <span className="fact-label">Population</span>
              <span className="fact-value">24M</span>
            </div>
            <div className="fact">
              <span className="fact-label">Best Time</span>
              <span className="fact-value">Mar – May, Sep – Nov</span>
            </div>
            <div className="fact">
              <span className="fact-label">Daily Budget</span>
              <span className="fact-value">¥500–1,000</span>
            </div>
            <div className="fact">
              <span className="fact-label">English Level</span>
              <span className="fact-value">High</span>
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
                    href={`/city/shanghai/${item.slug}/`}
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
                    href={`/city/shanghai/${item.slug}/`}
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
                Shanghai&apos;s food scene is a collision of <strong>Shanghainese classics</strong>, <strong>international cuisines</strong>, and <strong>boundary-pushing fine dining</strong>.
              </p>
              <div className="list-grid">
                {food.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/city/shanghai/${item.slug}/`}
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
              We recommend <strong>3–5 days</strong> for Shanghai city. The city rewards slow exploration — don&apos;t rush it.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
