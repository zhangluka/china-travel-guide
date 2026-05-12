import Link from 'next/link'
import type { Metadata } from 'next'
import { getCityContent } from '@/lib/content'

export const metadata: Metadata = {
  title: "Zhangjiajie Travel Guide 2026 — Avatar Mountains & Glass Bridge",
  description: "Complete Zhangjiajie travel guide for foreign tourists. Avatar Mountains, glass bridge, Tianmen Mountain, and practical tips from locals.",
  alternates: {
    canonical: 'https://chinabound.online/city/zhangjiajie/',
  },
}

export default function ZhangjiajiePage() {
  const { overview, attractions, food, transport } = getCityContent('zhangjiajie')

  return (
    <div>
      <section className="section" style={{ background: 'var(--warm-bg)', paddingBottom: '2rem' }}>
        <div className="section-center">
          <nav className="breadcrumb">
            <Link href="/">Home</Link>
            <span className="breadcrumb-sep">/</span>
            <Link href="/city/">Cities</Link>
            <span className="breadcrumb-sep">/</span>
            <span style={{ color: 'var(--text)' }}>Zhangjiajie</span>
          </nav>
          <div className="section-label">City Guide</div>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '0.5rem' }}>🏔️ Zhangjiajie</h1>
          <p className="section-subtitle" style={{ marginBottom: '0' }}>
            The Avatar Mountains. 3,000 sandstone pillars rising from misty forests —
            one of the most extraordinary landscapes on Earth.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '2rem' }}>
        <div className="section-center">
          <div className="quick-facts">
            <div className="fact">
              <span className="fact-label">Location</span>
              <span className="fact-value">Hunan</span>
            </div>
            <div className="fact">
              <span className="fact-label">Best Time</span>
              <span className="fact-value">Apr – Jun, Sep – Nov</span>
            </div>
            <div className="fact">
              <span className="fact-label">Daily Budget</span>
              <span className="fact-value">¥300–600</span>
            </div>
            <div className="fact">
              <span className="fact-label">English Level</span>
              <span className="fact-value">Very Low</span>
            </div>
          </div>

          {transport.length > 0 && (
            <div style={{ marginBottom: '3rem' }}>
              <h2 className="section-title" style={{ fontSize: '1.5rem', marginBottom: '1.25rem' }}>Getting Around</h2>
              <div className="list-grid">
                {transport.map((item) => (
                  <Link key={item.slug} href={`/city/zhangjiajie/${item.slug}/`} className="card-link">
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
                  <Link key={item.slug} href={`/city/zhangjiajie/${item.slug}/`} className="card-link">
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
              We recommend <strong>3 days</strong> for Zhangjiajie: National Forest Park + Tianmen Mountain + Glass Bridge.
              Add 1 day for <strong>Fenghuang Ancient Town</strong> if you have time.
            </p>
            <Link href="/city/zhangjiajie/itinerary-3-days/" className="btn btn-filled">
              See Our 3-Day Itinerary
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
