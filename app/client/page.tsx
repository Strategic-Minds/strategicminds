const steps = [
  ['Intake complete', 'Your goals, offer, workflow needs, and starting assets are captured.'],
  ['System plan', 'Strategic Minds turns the idea into a scoped build packet and approval path.'],
  ['MVP build', 'Website, client portal, automations, and admin visibility are assembled in preview.'],
  ['Validation', 'Payments, auth, cron, receipts, AI scope, and rollback checks are verified.'],
  ['Launch review', 'You approve final release, handoff, support path, and scale recommendations.']
];

const documents = [
  ['Project Brief', 'Ready'],
  ['Build Packet', 'In review'],
  ['Payment Receipt', 'Draft'],
  ['Launch Checklist', 'Pending']
];

const requests = [
  ['Upload brand assets', 'Client action'],
  ['Confirm package scope', 'Needs approval'],
  ['Schedule build review', 'Ready to book']
];

export default function ClientPage() {
  return (
    <main className="app-shell">
      <nav className="app-nav">
        <a className="brand" href="/">
          Strategic Minds Advisory
          <span>Client Dashboard</span>
        </a>
        <div className="nav-links" style={{ color: '#34445c' }}>
          <a href="/">Website</a>
          <a href="/admin">Admin</a>
          <span className="status-pill">Preview account</span>
        </div>
      </nav>

      <div className="app-layout">
        <aside className="side-nav" aria-label="Client navigation">
          <span className="active">Overview</span>
          <span>Progress</span>
          <span>Documents</span>
          <span>Meetings</span>
          <span>Payments</span>
          <span>Messages</span>
          <span>Requests</span>
          <span>AI Assistant</span>
          <span>Deliverables</span>
          <span>Settings</span>
        </aside>

        <section className="workspace">
          <header className="workspace-header">
            <div>
              <span className="eyebrow">Client workspace</span>
              <h1>Your Build Dashboard</h1>
              <p className="muted">Track progress, approve decisions, review documents, and stay aligned from intake to launch.</p>
            </div>
            <a className="btn primary" href="mailto:strategicmindsadvisory@gmail.com">Send request</a>
          </header>

          <div className="status-row">
            <div className="dashboard-panel"><span className="badge green">On track</span><h2>MVP System Build</h2><span className="muted">Current package</span></div>
            <div className="dashboard-panel"><span className="badge amber">Next</span><h2>System Plan</h2><span className="muted">Current milestone</span></div>
            <div className="dashboard-panel"><span className="badge green">4 ready</span><h2>Documents</h2><span className="muted">Source-truth files</span></div>
            <div className="dashboard-panel"><span className="badge amber">2 open</span><h2>Approvals</h2><span className="muted">Client decisions</span></div>
          </div>

          <div className="client-grid">
            <div className="client-tile">
              <div className="row-between">
                <h2>Project Progress</h2>
                <span className="badge green">42% complete</span>
              </div>
              <div className="progress" aria-label="42 percent complete">
                <span style={{ width: '42%' }} />
              </div>
              <div className="timeline" style={{ marginTop: 22 }}>
                {steps.map(([title, text], index) => (
                  <div className="timeline-item" key={title}>
                    <div className="timeline-index">{index + 1}</div>
                    <div>
                      <strong>{title}</strong>
                      <p className="muted" style={{ marginTop: 4 }}>{text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="client-tile">
              <h2>Requests</h2>
              <div className="queue">
                {requests.map(([title, status]) => (
                  <div className="queue-item" key={title}>
                    <div className="row-between">
                      <strong>{title}</strong>
                      <span className="badge amber">{status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="client-grid">
            <div className="client-tile">
              <h2>Documents</h2>
              <div className="document-list">
                {documents.map(([title, status]) => (
                  <div key={title}>
                    <strong>{title}</strong>
                    <span className={status === 'Ready' ? 'badge green' : 'badge amber'}>{status}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="client-tile">
              <h2>AI Assistant</h2>
              <p className="muted">The assistant answers from your project source truth, explains next steps, and refuses payment, launch, or cross-client actions without approval.</p>
              <div className="queue-item">
                <strong>Suggested prompt</strong>
                <p className="muted">What needs my approval before the build can move to validation?</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
