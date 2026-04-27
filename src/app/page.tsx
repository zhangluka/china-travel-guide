import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ChinaTravel — Your China Trip, Decoded',
  description: 'Practical guides written by locals. Not travel agencies. Payment, VPN, navigation, food, and city guides that actually work.',
}

export default function HomePage() {
  return (
    <div>
      {/* ═══ HERO ═══ */}
      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1>Your China trip, decoded.</h1>
          <p>Practical guides written by locals. Not travel agencies.</p>
          <div className="hero-btns">
            <Link href="/survival/" className="btn btn-filled">Survival Guide</Link>
            <Link href="/city/chengdu/" className="btn btn-outline">Explore Chengdu</Link>
          </div>
        </div>
      </section>

      {/* ═══ PROBLEM SECTION ═══ */}
      <section className="section">
        <div className="section-center">
          <div className="section-label">The Problem</div>
          <h2 className="section-title" style={{ marginBottom: '2.5rem' }}>China is amazing. But it&apos;s not easy.</h2>

          <div className="problem-cards">
            <div className="problem-card">
              <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
                <line x1="1" y1="10" x2="23" y2="10" />
              </svg>
              <h3>Cash is dead</h3>
              <p>Even street vendors use QR codes. Without Alipay or WeChat Pay, you can&apos;t pay for anything.</p>
            </div>

            <div className="problem-card">
              <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0110 0v4" />
              </svg>
              <h3>The Great Firewall</h3>
              <p>Google, WhatsApp, Instagram — all blocked without a VPN. Set it up before you land.</p>
            </div>

            <div className="problem-card">
              <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" />
                <line x1="8" y1="2" x2="8" y2="18" />
                <line x1="16" y1="6" x2="16" y2="22" />
              </svg>
              <h3>Google Maps doesn&apos;t work</h3>
              <p>You need Amap or Baidu Maps. They&apos;re in Chinese. We&apos;ll walk you through it.</p>
            </div>
          </div>

          <p className="problem-footer">We built this guide so you don&apos;t have to figure it out alone.</p>
        </div>
      </section>

      {/* ═══ SURVIVAL GUIDES ═══ */}
      <section className="section" style={{ background: '#fff' }} id="guides">
        <div className="section-center">
          <div className="section-label">Essential Reading</div>
          <h2 className="section-title">Read Before You Fly</h2>
          <p className="section-subtitle">5 essential guides that will save you hours of frustration</p>

          <div className="guides-grid">
            <Link href="/survival/alipay-setup/" className="guide-card">
              <div className="guide-number">01</div>
              <h3>Alipay Setup</h3>
              <p>How to set up mobile payments as a foreign tourist. Step-by-step, with screenshots.</p>
              <span className="guide-badge badge-essential">Essential</span>
            </Link>

            <Link href="/survival/vpn-guide/" className="guide-card">
              <div className="guide-number">02</div>
              <h3>VPN Guide</h3>
              <p>Which VPNs actually work in China in 2025. Download and configure before departure.</p>
              <span className="guide-badge badge-essential">Essential</span>
            </Link>

            <Link href="/survival/must-have-apps/" className="guide-card">
              <div className="guide-number">03</div>
              <h3>Must-Have Apps</h3>
              <p>The 8 apps every visitor needs: WeChat, Amap, translation tools, and more.</p>
              <span className="guide-badge badge-essential">Essential</span>
            </Link>

            <Link href="/survival/sim-card-vs-esim/" className="guide-card">
              <div className="guide-number">04</div>
              <h3>SIM Card vs eSIM</h3>
              <p>Get connected the moment you land. Physical SIM, eSIM, or pocket WiFi — what&apos;s best.</p>
              <span className="guide-badge badge-recommended">Recommended</span>
            </Link>

            <Link href="/survival/maps-navigation/" className="guide-card">
              <div className="guide-number">05</div>
              <h3>Maps &amp; Navigation</h3>
              <p>Amap, Baidu Maps, and how to get around without Google. Includes saved location trick.</p>
              <span className="guide-badge badge-recommended">Recommended</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ CHENGDU ═══ */}
      <section className="section chengdu-section" id="chengdu">
        <div className="section-center">
          <div className="section-label">City Guide</div>
          <h2 className="section-title" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>🐼 Chengdu</h2>
          <p className="section-subtitle">Pandas, hotpot, and the most relaxed city in China</p>

          <div className="quick-facts">
            <div className="fact">
              <span className="fact-label">Population</span>
              <span className="fact-value">21M</span>
            </div>
            <div className="fact">
              <span className="fact-label">Best Time</span>
              <span className="fact-value">Mar – May</span>
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

          <div className="chengdu-blocks">
            <div className="chengdu-block">
              <h3>Top Attractions</h3>
              <ul>
                <li>Giant Panda Base</li>
                <li>Jinli Ancient Street</li>
                <li>Kuanzhai Alley</li>
                <li>Leshan Giant Buddha</li>
              </ul>
            </div>

            <div className="chengdu-block">
              <h3>Must-Eat Food</h3>
              <ul>
                <li>Sichuan Hotpot</li>
                <li>Dan Dan Noodles</li>
                <li>Rabbit Head</li>
                <li>Mapo Tofu</li>
              </ul>
            </div>

            <div className="chengdu-block">
              <h3>Day Trips</h3>
              <ul>
                <li>Leshan Giant Buddha</li>
                <li>Dujiangyan Irrigation</li>
                <li>Mount Qingcheng</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CITIES COMING SOON ═══ */}
      <section className="section">
        <div className="section-center">
          <div className="section-label">Expanding Soon</div>
          <h2 className="section-title">More Cities</h2>
          <p className="section-subtitle">We&apos;re building detailed guides for these destinations</p>

          <div className="cities-grid">
            <div className="city-placeholder">
              <div className="city-name">Shanghai</div>
              <div className="city-tagline">The Bund, skyscrapers, and old-world charm</div>
              <span className="coming-soon-badge">Coming Soon</span>
            </div>
            <div className="city-placeholder">
              <div className="city-name">Beijing</div>
              <div className="city-tagline">Forbidden City, Great Wall, hutong alleys</div>
              <span className="coming-soon-badge">Coming Soon</span>
            </div>
            <div className="city-placeholder">
              <div className="city-name">Xi&apos;an</div>
              <div className="city-tagline">Terracotta Warriors and the best street food</div>
              <span className="coming-soon-badge">Coming Soon</span>
            </div>
            <div className="city-placeholder">
              <div className="city-name">Guilin</div>
              <div className="city-tagline">Karst mountains and Li River cruises</div>
              <span className="coming-soon-badge">Coming Soon</span>
            </div>
            <div className="city-placeholder">
              <div className="city-name">Chongqing</div>
              <div className="city-tagline">Hotpot capital of China, vertical city</div>
              <span className="coming-soon-badge">Coming Soon</span>
            </div>
            <div className="city-placeholder">
              <div className="city-name">Hangzhou</div>
              <div className="city-tagline">West Lake and tea plantations</div>
              <span className="coming-soon-badge">Coming Soon</span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ COMPARISON ═══ */}
      <section className="section" style={{ background: '#fff' }}>
        <div className="section-center">
          <div className="section-label">Why Us</div>
          <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '3rem' }}>Why This Guide Is Different</h2>

          <div className="comparison">
            <div>
              <h3 style={{ color: 'var(--muted)' }}>Other travel sites</h3>
              <ul>
                <li><span className="cross">✕</span> Generic tips copied from other blogs</li>
                <li><span className="cross">✕</span> Outdated payment advice (&quot;just use cash&quot;)</li>
                <li><span className="cross">✕</span> No VPN or firewall guidance</li>
                <li><span className="cross">✕</span> Written by people who visited once</li>
                <li><span className="cross">✕</span> Focus on tourist traps</li>
              </ul>
            </div>
            <div>
              <h3 style={{ color: 'var(--green)' }}>ChinaTravel Guide</h3>
              <ul>
                <li><span className="check">✓</span> Written by locals living in China</li>
                <li><span className="check">✓</span> Alipay/WeChat Pay walkthroughs</li>
                <li><span className="check">✓</span> Tested VPN recommendations</li>
                <li><span className="check">✓</span> Updated monthly for accuracy</li>
                <li><span className="check">✓</span> Where locals actually eat and go</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
