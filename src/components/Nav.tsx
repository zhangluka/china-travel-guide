import Link from 'next/link'

export default function Nav() {
  return (
    <nav className="nav">
      <Link href="/" className="nav-logo">ChinaTravel</Link>
      <ul className="nav-links">
        <li><Link href="/survival/">Survival Guide</Link></li>
        <li><Link href="/city/chengdu/">Chengdu</Link></li>
        <li><span className="soon">Shanghai</span></li>
        <li><span className="soon">Beijing</span></li>
      </ul>
    </nav>
  )
}
