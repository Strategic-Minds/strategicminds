const agents = [
  ['Concierge Agent', 'Routes client requests and creates next-action receipts.', 'READY'],
  ['Builder Agent', 'Plans safe implementation batches and build receipts.', 'READY'],
  ['Validation Agent', 'Checks routes, logs, risks, and rollback readiness.', 'READY'],
  ['Billing Agent', 'Prepares test-mode billing plans only.', 'DRY RUN'],
  ['Scheduling Agent', 'Plans booking handoffs without SMS.', 'DRY RUN'],
  ['Documents Agent', 'Indexes briefs, invoices, and deliverables.', 'READY'],
  ['Workflow Agent', 'Maps project steps and automation queues.', 'READY'],
  ['Auto Social Agent', 'Drafts content plans without publishing.', 'DRY RUN']
];

const messages = [
  ['system', 'Strategic Minds agent runtime online in dry-run mode.'],
  ['builder', 'Next safest build task: frontend dashboard module.'],
  ['validation', 'Payments disabled. SMS disabled. Production actions approval-gated.']
];

export default function AgentsPage() {
  return (
    <main className="app-shell">
      <section className="panel" style={{ maxWidth: 1500, margin: '0 auto', padding: 28 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: 20, alignItems: 'center', marginBottom: 24 }}>
          <div>
            <span className="badge">ADVANCED CHAT AGENT SYSTEM</span>
            <h1 style={{ fontSize: 42, margin: '16px 0 8px' }}>Strategic Minds Agent Command Center</h1>
            <p className="muted" style={{ maxWidth: 760 }}>Governed multi-agent workspace for planning, validating, and routing build work. All production-sensitive actions remain approval-gated.</p>
          </div>
          <a className="btn btn-primary" href="/workflows">Open Workflow Console</a>
        </div>
        <div className="grid-2">
          <section className="card">
            <h2>Agent Chat</h2>
            <div style={{ display: 'grid', gap: 12, marginTop: 18 }}>
              {messages.map(([role, text]) => (
                <div key={role + text} style={{ border: '1px solid var(--line)', borderRadius: 14, padding: 14 }}>
                  <strong style={{ textTransform: 'uppercase', color: 'var(--brand)', fontSize: 12 }}>{role}</strong>
                  <p style={{ margin: '8px 0 0' }}>{text}</p>
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', gap: 10, marginTop: 18 }}>
              <input aria-label="agent prompt" placeholder="Ask the agents to plan the next safe build step..." style={{ flex: 1, border: '1px solid var(--line)', borderRadius: 10, padding: 13, background: 'var(--surface)', color: 'var(--text)' }} />
              <button className="btn btn-primary">Dry Run</button>
            </div>
          </section>
          <section className="card">
            <h2>Agent Registry</h2>
            <div style={{ display: 'grid', gap: 10, marginTop: 18 }}>
              {agents.map(([name, purpose, status]) => (
                <div key={name} style={{ border: '1px solid var(--line)', borderRadius: 14, padding: 14, display: 'flex', justifyContent: 'space-between', gap: 16 }}>
                  <div><strong>{name}</strong><p className="muted" style={{ margin: '6px 0 0', fontSize: 13 }}>{purpose}</p></div>
                  <span className="badge">{status}</span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
