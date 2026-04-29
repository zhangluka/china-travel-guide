import Link from 'next/link'

export default function Nav() {
  return (
    <nav className="nav">
      <Link href="/" className="nav-logo">ChinaTravel</Link>
      <ul className="nav-links">
        <li><Link href="/survival/">Survival Guide</Link></li>
        <li><Link href="/city/chengdu/">Chengdu</Link></li>
        <li><Link href="/city/shanghai/">Shanghai</Link></li>
        <li><Link href="/city/beijing/">Beijing</Link></li>
        <li><Link href="/about/">About</Link></li>
      </ul>
    </nav>
  )
}
