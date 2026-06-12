const stats = [
  ['Pipeline value', '$42,970', '+18% this week', 'green'],
  ['Open approvals', '7', '3 payment-gated', 'amber'],
  ['Active builds', '12', '4 in validation', 'green'],
  ['Release blockers', '2', 'needs review', 'red']
];

const projects = [
  ['MVP System Build', 'Avery Stone', 'Validation', '82%'],
  ['Workflow Automation', 'Northline Studio', 'Build', '64%'],
  ['Business In A Box', 'Carter Ops', 'Planning', '38%'],
  ['Consultation', 'Mira Holt', 'Intake', '16%']
];

const queue = [
  ['Approve Stripe test webhook receipt', 'Payment path', 'High'],
  ['Review Google Drive folder draft', 'Workspace', 'Medium'],
  ['Validate client dashboard access copy', 'Client portal', 'Medium'],
  ['Create release receipt for preview', 'Release', 'High']
];

export default function AdminPage() {
  return (
    <main className="app-shell">
      <nav className="app-nav">
        <a className="brand" href="/">
          Strategic Minds Advisory
          <span>Admin Control Plane</span>
        </a>
        <div className="nav-links" style={{ color: '#34445c' }}>
          <a href="/">Website</a>
          <a href="/client">Client view</a>
          <span className="status-pill">Operator mode</span>
        </div>
      </nav>

      <div className="app-layout">
        <aside className="side-nav" aria-label="Admin navigation">
          <span className="active">Overview</span>
          <span>Leads</span>
          <span>Clients</span>
          <span>Projects</span>
          <span>Payments</span>
          <span>Workflows</span>
          <span>Agents</span>
          <span>Approvals</span>
          <span>Receipts</span>
          <span>Releases</span>
        </aside>

        <section className="workspace">
          <header className="workspace-header">
            <div>
              <span className="eyebrow">Today command status</span>
              <h1>Admin Control Plane</h1>
              <p className="muted">Monitor clients, approvals, workflow health, validation receipts, and release readiness.</p>
            </div>
            <a className="btn primary" href="mailto:strategicmindsadvisory@gmail.com">Send operator update</a>
          </header>

          <div className="status-row">
            {stats.map(([label, value, note, color]) => (
              <div className="dashboard-panel" key={label}>
                <span className={`badge ${color}`}>{note}</span>
                <h2 style={{ marginTop: 18 }}>{value}</h2>
                <span className="muted">{label}</span>
              </div>
            ))}
          </div>

          <div className="main-grid">
            <div className="data-table">
              <div className="table-row header">
                <span>Project</span>
                <span>Client</span>
                <span>Stage</span>
                <span>Progress</span>
              </div>
              {projects.map(([project, client, stage, progress]) => (
                <div className="table-row" key={`${project}-${client}`}>
                  <strong>{project}</strong>
                  <span>{client}</span>
                  <span className="badge green">{stage}</span>
                  <div>
                    <strong>{progress}</strong>
                    <div className="progress" aria-label={`${progress} complete`}>
                      <span style={{ width: progress }} />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="dashboard-panel">
              <div className="row-between">
                <h2>Approval Queue</h2>
                <span className="badge amber">4 waiting</span>
              </div>
              <div className="queue">
                {queue.map(([title, area, priority]) => (
                  <div className="queue-item" key={title}>
                    <div className="row-between">
                      <strong>{title}</strong>
                      <span className={priority === 'High' ? 'badge red' : 'badge amber'}>{priority}</span>
                    </div>
                    <span className="muted">{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="main-grid">
            <div className="dashboard-panel">
              <h2>Automation Health</h2>
              <div className="status-grid">
                <div><span className="badge green">Ready</span><p>Signed cron verification active</p></div>
                <div><span className="badge green">Ready</span><p>Autobuilder receipt persistence active</p></div>
                <div><span className="badge amber">Draft only</span><p>Stripe invoice send remains approval-gated</p></div>
                <div><span className="badge amber">Draft only</span><p>Google Workspace folder creation waits for operator approval</p></div>
              </div>
            </div>
            <div className="dashboard-panel">
              <h2>Release Gate</h2>
              <p className="muted">Production actions stay blocked until website, client dashboard, admin controls, payments, cron, receipts, and rollback checks pass.</p>
              <div className="progress" aria-label="release readiness">
                <span style={{ width: '76%' }} />
              </div>
              <p><strong>76%</strong> preview readiness</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
