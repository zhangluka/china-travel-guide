import Link from 'next/link'
import type { Metadata } from 'next'
import { getSurvivalGuides } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Survival Guide — What You Need Before Visiting China',
  description: 'Essential guides for foreign tourists: payment setup, VPN, apps, SIM cards, and navigation in China.',
}

const guideMeta: Record<string, { number: string; urgency: string; badgeClass: string }> = {
  'alipay-setup': { number: '01', urgency: 'Essential', badgeClass: 'badge-essential' },
  'vpn-guide': { number: '02', urgency: 'Essential', badgeClass: 'badge-essential' },
  'must-have-apps': { number: '03', urgency: 'Essential', badgeClass: 'badge-essential' },
  'sim-card-vs-esim': { number: '04', urgency: 'Recommended', badgeClass: 'badge-recommended' },
  'maps-navigation': { number: '05', urgency: 'Recommended', badgeClass: 'badge-recommended' },
  '240-hour-visa-free-transit': { number: '06', urgency: 'Essential', badgeClass: 'badge-essential' },
}

export default function SurvivalPage() {
  const guides = getSurvivalGuides()

  return (
    <div>
      <section className="section">
        <div className="section-center">
          <nav className="breadcrumb">
            <Link href="/">Home</Link>
            <span className="breadcrumb-sep">/</span>
            <span style={{ color: 'var(--text)' }}>Survival Guide</span>
          </nav>

          <div className="section-label">Essential Reading</div>
          <h1 className="section-title">Read Before You Fly</h1>
          <p className="section-subtitle">
            China is incredible — but it operates on a completely different digital ecosystem.
            Read these guides <strong>before your trip</strong>. They&apos;ll save you hours of frustration.
          </p>

          <div className="warning-card" style={{ marginBottom: '3rem' }}>
            <div className="warning-card-title">Critical: Do these BEFORE you fly</div>
            <ul className="warning-card-content" style={{ listStyle: 'none', padding: 0, margin: '0.5rem 0 0' }}>
              <li style={{ padding: '0.25rem 0' }}>Download a VPN (you can&apos;t access Google/WhatsApp without one)</li>
              <li style={{ padding: '0.25rem 0' }}>Set up Alipay with your foreign credit card</li>
              <li style={{ padding: '0.25rem 0' }}>Download offline maps and translation apps</li>
              <li style={{ padding: '0.25rem 0' }}>Get an eSIM or plan your SIM card purchase</li>
            </ul>
          </div>

          <div className="guides-grid">
            {guides.map((guide) => {
              const info = guideMeta[guide.slug] || { number: '--', urgency: '', badgeClass: 'badge-useful' }
              return (
                <Link
                  key={guide.slug}
                  href={`/survival/${guide.slug}/`}
                  className="guide-card"
                >
                  <div className="guide-number">{info.number}</div>
                  <h3>{guide.meta.title}</h3>
                  <p>{guide.meta.description}</p>
                  {info.urgency && (
                    <span className={`guide-badge ${info.badgeClass}`}>{info.urgency}</span>
                  )}
                </Link>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
