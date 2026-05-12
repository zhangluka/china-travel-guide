import Link from 'next/link'
import type { Metadata } from 'next'
import { getItineraries } from '@/lib/content'

export const metadata: Metadata = {
  title: 'China Itineraries 2026 — 10-Day and 2-Week Trip Plans',
  description: 'Ready-made China trip itineraries for first-time visitors. 10-day and 2-week routes covering Beijing, Xi\'an, Chengdu, Chongqing, and Shanghai.',
  alternates: {
    canonical: 'https://chinabound.online/itineraries/',
  },
}

export default function ItinerariesPage() {
  const itineraries = getItineraries()

  return (
    <div>
      <section className="section">
        <div className="section-center">
          <nav className="breadcrumb">
            <Link href="/">Home</Link>
            <span className="breadcrumb-sep">/</span>
            <span style={{ color: 'var(--text)' }}>Itineraries</span>
          </nav>

          <div className="section-label">Trip Planning</div>
          <h1 className="section-title">China Itineraries</h1>
          <p className="section-subtitle">
            Ready-made trip plans for first-time visitors. Pick your duration, follow the route, enjoy the trip.
          </p>

          <div className="guides-grid">
            {itineraries.map((itinerary) => (
              <Link
                key={itinerary.slug}
                href={`/itineraries/${itinerary.slug}/`}
                className="guide-card"
              >
                <h3>{itinerary.meta.title}</h3>
                <p>{itinerary.meta.description}</p>
              </Link>
            ))}
          </div>

          <div className="callout-box" style={{ marginTop: '3rem' }}>
            <h2>Need Help Planning?</h2>
            <p>
              Start with our <Link href="/survival/" className="link-accent">Survival Guides</Link> to prepare
              for the practical side of China travel, then pick an itinerary that fits your schedule.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
