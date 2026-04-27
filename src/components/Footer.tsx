export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">ChinaTravel Guide</div>
        <p>Practical travel guides for foreign tourists visiting China.</p>
        <p style={{ marginTop: '0.75rem', fontSize: '0.8rem', color: 'rgba(255,255,255,0.45)' }}>
          Updated regularly. Not affiliated with any travel agency.
        </p>
        <div className="footer-find-me">
          <span className="footer-find-me-label">Find Me</span>
          <a href="mailto:bob8ynwl@gmail.com">bob8ynwl@gmail.com</a>
        </div>
      </div>
    </footer>
  )
}
