import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'City Guides — ChinaTravel',
  description: 'Detailed city guides for traveling in China. Chengdu, Shanghai, Beijing, and more — written by locals who actually live there.',
  alternates: {
    canonical: 'https://chinabound.online/city/',
  },
}

const cities = [
  {
    slug: 'chengdu',
    name: 'Chengdu',
    emoji: '🐼',
    tagline: 'Pandas, hotpot, and the most relaxed major city in China',
    available: true,
    facts: { population: '21M', bestTime: 'Mar – May, Sep – Nov', dailyBudget: '¥300–600' },
  },
  {
    slug: 'shanghai',
    name: 'Shanghai',
    emoji: '🌃',
    tagline: 'The Bund, skyscrapers, and the rhythm of a global city',
    available: true,
    facts: { population: '24M', bestTime: 'Mar – May, Sep – Nov', dailyBudget: '¥500–1000' },
  },
  {
    slug: 'beijing',
    name: 'Beijing',
    emoji: '🏯',
    tagline: 'Forbidden City, Great Wall, and 1,000 years of history',
    available: true,
    facts: { population: '21M', bestTime: 'Apr – Jun, Sep – Oct', dailyBudget: '¥400–800' },
  },
  {
    slug: 'xian',
    name: "Xi'an",
    emoji: '⚔️',
    tagline: "Terracotta Warriors and China's best street food",
    available: false,
    facts: { population: '13M', bestTime: 'Mar – May, Sep – Nov', dailyBudget: '¥250–500' },
  },
  {
    slug: 'guilin',
    name: 'Guilin',
    emoji: '⛰️',
    tagline: 'Karst mountains and Li River cruises',
    available: false,
    facts: { population: '5M', bestTime: 'Apr – Oct', dailyBudget: '¥200–400' },
  },
  {
    slug: 'chongqing',
    name: 'Chongqing',
    emoji: '🔥',
    tagline: 'Hotpot capital of China, the vertical city',
    available: false,
    facts: { population: '32M', bestTime: 'Mar – May, Sep – Nov', dailyBudget: '¥250–500' },
  },
  {
    slug: 'hangzhou',
    name: 'Hangzhou',
    emoji: '🍃',
    tagline: 'West Lake, tea plantations, and ancient canals',
    available: false,
    facts: { population: '12M', bestTime: 'Mar – May, Sep – Nov', dailyBudget: '¥300–600' },
  },
]

export default function CitiesPage() {
  return (
    <div>
      {/* Hero */}
      <section className="section" style={{ background: 'var(--warm-bg)', paddingBottom: '2rem' }}>
        <div className="section-center">
          <nav className="breadcrumb">
            <Link href="/">Home</Link>
            <span className="breadcrumb-sep">/</span>
            <span style={{ color: 'var(--text)' }}>Cities</span>
          </nav>
          <div className="section-label">City Guides</div>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '0.5rem' }}>
            Explore China by City
          </h1>
          <p className="section-subtitle">
            Each city is a different China. Pick your next destination.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="section-center">
          <div className="cities-grid">
            {cities.map((city) => (
              city.available ? (
                <Link
                  key={city.slug}
                  href={`/city/${city.slug}/`}
                  className="city-card city-card-available"
                >
                  <div className="city-emoji">{city.emoji}</div>
                  <h2 className="city-name">{city.name}</h2>
                  <p className="city-tagline">{city.tagline}</p>
                  <div className="city-facts">
                    <span className="fact-label">Pop.</span> {city.facts.population}
                    <span className="fact-sep">·</span>
                    <span className="fact-label">Best</span> {city.facts.bestTime}
                    <span className="fact-sep">·</span>
                    <span className="fact-label">Budget</span> {city.facts.dailyBudget}
                  </div>
                  <span className="available-badge">Available</span>
                </Link>
              ) : (
                <div key={city.slug} className="city-card city-card-locked">
                  <div className="city-emoji">{city.emoji}</div>
                  <h2 className="city-name">{city.name}</h2>
                  <p className="city-tagline">{city.tagline}</p>
                  <div className="city-facts">
                    <span className="fact-label">Pop.</span> {city.facts.population}
                    <span className="fact-sep">·</span>
                    <span className="fact-label">Best</span> {city.facts.bestTime}
                    <span className="fact-sep">·</span>
                    <span className="fact-label">Budget</span> {city.facts.dailyBudget}
                  </div>
                  <span className="coming-soon-badge">Coming Soon</span>
                </div>
              )
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
