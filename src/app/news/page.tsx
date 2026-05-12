import Link from 'next/link'
import type { Metadata } from 'next'
import { getAllContentInDir } from '@/lib/content'

export const metadata: Metadata = {
  title: 'China Travel News & Alerts 2026',
  description: 'Latest travel news, health alerts, and safety updates for China travel. Stay informed about outbreaks, visa changes, and travel advisories.',
  alternates: {
    canonical: 'https://chinabound.online/news/',
  },
}

export default function NewsPage() {
  const articles = getAllContentInDir('news')

  return (
    <div>
      <section className="section">
        <div className="section-center">
          <nav className="breadcrumb">
            <Link href="/">Home</Link>
            <span className="breadcrumb-sep">/</span>
            <span style={{ color: 'var(--text)' }}>News</span>
          </nav>

          <div className="section-label">Travel Alerts</div>
          <h1 className="section-title">News &amp; Safety Updates</h1>
          <p className="section-subtitle">
            Health alerts, travel advisories, and breaking news that affects China travel.
            We cover what matters — no panic, just facts.
          </p>

          <div className="guides-grid">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/news/${article.slug}/`}
                className="guide-card"
              >
                <h3>{article.meta.title}</h3>
                <p>{article.meta.description}</p>
                {article.meta.date ? (
                  <span className="guide-badge badge-useful">{String(article.meta.date)}</span>
                ) : null}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
