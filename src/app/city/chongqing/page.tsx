import Link from 'next/link'
import type { Metadata } from 'next'
import { getCityContent } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Chongqing Travel Guide 2026 — The 8D Mountain City',
  description: 'Complete Chongqing travel guide for foreign tourists. The 8D cyberpunk city, hotpot capital of China, Yangtze River, and Wulong Karst day trips.',
  alternates: {
    canonical: 'https://chinabound.online/city/chongqing/',
  },
}

export default function ChongqingPage() {
  const { overview, attractions, food, transport } = getCityContent('chongqing')

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
            <span style={{ color: 'var(--text)' }}>Chongqing</span>
          </nav>
          <div className="section-label">City Guide</div>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '0.5rem' }}>🏙️ Chongqing</h1>
          <p className="section-subtitle" style={{ marginBottom: '0' }}>
            The 8D mountain city. Cyberpunk architecture, the birthplace of hotpot,
            and the most mind-bending urban landscape on Earth.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '2rem' }}>
        <div className="section-center">
          {/* Quick Facts */}
          <div className="quick-facts">
            <div className="fact">
              <span className="fact-label">Population</span>
              <span className="fact-value">32M</span>
            </div>
            <div className="fact">
              <span className="fact-label">Best Time</span>
              <span className="fact-value">Mar – May, Sep – Nov</span>
            </div>
            <div className="fact">
              <span className="fact-label">Daily Budget</span>
              <span className="fact-value">¥250–500</span>
            </div>
            <div className="fact">
              <span className="fact-label">English Level</span>
              <span className="fact-value">Very Low</span>
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
                    href={`/city/chongqing/${item.slug}/`}
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
                    href={`/city/chongqing/${item.slug}/`}
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
                Chongqing is the <strong>birthplace of hotpot</strong>. The food here is intense, oily, and absolutely incredible.
              </p>
              <div className="list-grid">
                {food.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/city/chongqing/${item.slug}/`}
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
              We recommend <strong>3 days</strong> for Chongqing city, plus <strong>1 day</strong> for Wulong Karst.
              Combine with <Link href="/city/chengdu/" className="link-accent">Chengdu</Link> (1.5 hours by train) for the ultimate trip.
            </p>
            <Link href="/city/chongqing/itinerary-3-days/" className="btn btn-filled">
              See Our 3-Day Itinerary
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
