export function TipCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="tip-card">
      <div className="tip-card-title">Tip</div>
      <div className="tip-card-content">{children}</div>
    </div>
  )
}

export function WarningCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="warning-card">
      <div className="warning-card-title">Important</div>
      <div className="warning-card-content">{children}</div>
    </div>
  )
}

export function CostTable({ items }: { items: Array<{ item: string; cost: string; note?: string }> }) {
  return (
    <table className="prose" style={{ width: '100%', margin: '1rem 0' }}>
      <thead>
        <tr>
          <th style={{ textAlign: 'left', padding: '0.5rem 0.75rem', background: 'var(--warm-bg)', fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '0.04em', fontWeight: 600 }}>Item</th>
          <th style={{ textAlign: 'left', padding: '0.5rem 0.75rem', background: 'var(--warm-bg)', fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '0.04em', fontWeight: 600 }}>Cost (CNY)</th>
          <th style={{ textAlign: 'left', padding: '0.5rem 0.75rem', background: 'var(--warm-bg)', fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '0.04em', fontWeight: 600 }}>Note</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, i) => (
          <tr key={i} style={{ borderBottom: '1px solid var(--border)' }}>
            <td style={{ padding: '0.5rem 0.75rem' }}>{item.item}</td>
            <td style={{ padding: '0.5rem 0.75rem', fontFamily: "'JetBrains Mono', monospace" }}>{item.cost}</td>
            <td style={{ padding: '0.5rem 0.75rem', color: 'var(--muted)' }}>{item.note || ''}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
