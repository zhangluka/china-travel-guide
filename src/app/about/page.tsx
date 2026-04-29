import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Who we are, why we built ChinaTravel Guide, and how we use AI to create practical travel content for foreigners visiting China.',
  alternates: {
    canonical: 'https://chinabound.online/about/',
  },
}

export default function AboutPage() {
  return (
    <div className="page-container-narrow">
      <nav className="breadcrumb">
        <Link href="/">Home</Link>
        <span className="breadcrumb-sep">/</span>
        <span style={{ color: 'var(--text)' }}>About</span>
      </nav>

      <article className="prose">
        <h1>About ChinaTravel Guide</h1>

        <p>
          We&apos;re a small team in Chengdu building practical tools for travelers in China.
          We use AI to create content that&apos;s actually useful — not generic, not outdated,
          not written by people who visited once. If it doesn&apos;t work on the ground,
          we don&apos;t publish it.
        </p>

        <h2>Why We Built This</h2>

        <p>
          China is one of the most fascinating countries on earth. But for foreign tourists,
          it&apos;s also one of the most frustrating to navigate. Cash is dead — even street
          vendors use QR codes. Google Maps doesn&apos;t work. WhatsApp is blocked. The
          travel advice you find online is often years out of date.
        </p>

        <p>
          We live here. We deal with this every day. So we decided to write the guide we
          wished existed — practical, honest, and updated for 2026.
        </p>

        <h2>How We Work</h2>

        <p>
          We combine local knowledge with AI tools to produce content faster and keep it
          current. Every guide is written or reviewed by someone who actually lives in
          the city. AI helps us scale, but ground truth comes from being here.
        </p>

        <p>
          We&apos;re not a travel agency. We don&apos;t take commissions from hotels or
          tour operators. Our only goal is to make your trip to China smoother.
        </p>

        <h2>What&apos;s Next</h2>

        <p>
          Right now we cover Chengdu (our home base), Shanghai, and Beijing. We&apos;re
          expanding to Xi&apos;an, Guilin, Hangzhou, and more. We&apos;re also building
          tools to help you plan trips, translate on the go, and navigate China&apos;s
          digital ecosystem.
        </p>

        <p>
          If you have suggestions, corrections, or want to contribute — we&apos;d love to
          hear from you.
        </p>

        <h2>Connect With Us</h2>

        <ul>
          <li>🐦 <a href="https://x.com/grainrain_young" target="_blank" rel="noopener noreferrer">X (Twitter) @grainrain_young</a></li>
          <li>📧 <a href="mailto:bob8ynwl@gmail.com">bob8ynwl@gmail.com</a></li>
        </ul>
      </article>
    </div>
  )
}
