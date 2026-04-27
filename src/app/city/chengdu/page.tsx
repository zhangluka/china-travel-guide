import Link from 'next/link'
import type { Metadata } from 'next'
import { getCityContent } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Chengdu Travel Guide — Pandas, Food & Everything You Need',
  description: 'Complete Chengdu travel guide for foreign tourists. Giant pandas, Sichuan hotpot, hidden restaurants, day trips, and practical tips from a local.',
}

export default function ChengduPage() {
  const { overview, attractions, food, transport } = getCityContent('chengdu')

  return (
    <div>
      {/* Hero */}
      <section className="section" style={{ background: 'var(--warm-bg)', paddingBottom: '2rem' }}>
        <div className="section-center">
          <nav className="breadcrumb">
            <Link href="/">Home</Link>
            <span className="breadcrumb-sep">/</span>
            <span style={{ color: 'var(--text)' }}>Chengdu</span>
          </nav>
          <div className="section-label">City Guide</div>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '0.5rem' }}>🐼 Chengdu</h1>
          <p className="section-subtitle" style={{ marginBottom: '0' }}>
            The most relaxed major city in China. World-class food, adorable pandas,
            and a pace of life that makes you wonder why you live anywhere else.
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
              <span className="fact-value">Mar – May, Sep – Nov</span>
            </div>
            <div className="fact">
              <span className="fact-label">Daily Budget</span>
              <span className="fact-value">¥300–600</span>
            </div>
            <div className="fact">
              <span className="fact-label">English Level</span>
              <span className="fact-value">Low</span>
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
                    href={`/city/chengdu/${item.slug}/`}
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
                    href={`/city/chengdu/${item.slug}/`}
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
                Chengdu is a <strong>UNESCO City of Gastronomy</strong>. The food here alone is worth the trip.
              </p>
              <div className="list-grid">
                {food.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/city/chengdu/food/${item.slug}/`}
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
              We recommend <strong>3–5 days</strong> for Chengdu city, plus <strong>2–3 days</strong> if you want to visit Jiuzhaigou or Western Sichuan.
            </p>
            <Link href="/city/chengdu/itinerary-3-days/" className="btn btn-filled">
              See Our 3-Day Itinerary
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
