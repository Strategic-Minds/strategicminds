const journey = [
  'Choose package',
  'Secure payment',
  'Schedule call',
  'Share idea',
  'Plan system',
  'Build MVP',
  'Review',
  'Launch',
  'Automate',
  'Scale'
];

const offers = [
  {
    name: 'Business Planning Consultation',
    price: '$497',
    text: 'A focused strategy session with a build map, offer direction, and priority execution path.'
  },
  {
    name: 'Workflow Automation',
    price: '$1,497',
    text: 'A governed automation layer for intake, follow-up, project movement, and admin visibility.'
  },
  {
    name: 'MVP System Build',
    price: '$2,997',
    text: 'A launchable first system with website, dashboard structure, validation gates, and handoff docs.',
    featured: true
  },
  {
    name: 'Business In A Box',
    price: '$5,997+',
    text: 'A complete operating package with source truth, client portal, automations, and launch support.'
  }
];

const modules = [
  ['Client Dashboard', 'Project progress, payments, documents, meetings, deliverables, and requests in one portal.'],
  ['Admin Control Plane', 'Leads, clients, approvals, agents, receipts, workflow health, and release queue visibility.'],
  ['Five-Minute Ops Loop', 'Cron checks queue status, missing receipts, validation blockers, and pending approvals.'],
  ['Governed AI Gateway', 'Scoped assistant behavior with refusal rules, source-truth grounding, and approval gates.']
];

export default function HomePage() {
  return (
    <main className="site-shell">
      <nav className="nav">
        <a className="brand" href="/">
          Strategic Minds Advisory
          <span>Intelligence In Motion</span>
        </a>
        <div className="nav-links">
          <a href="#packages">Packages</a>
          <a href="#workflow">Workflow</a>
          <a href="/client">Client</a>
          <a href="/admin">Admin</a>
          <a className="btn primary" href="#start">Start</a>
        </div>
      </nav>

      <section className="hero">
        <div>
          <span className="eyebrow">AI-powered business systems</span>
          <h1>Strategic Minds Advisory</h1>
          <p>
            We turn ideas into automated operating systems: websites, client portals, admin command centers,
            source-truth workflows, and validation loops that keep the work moving.
          </p>
          <div className="actions">
            <a className="btn primary" href="#packages">Choose a package</a>
            <a className="btn" href="/client">View client dashboard</a>
            <a className="btn" href="/admin">Open admin control plane</a>
          </div>
          <div className="proof-strip" aria-label="Operating proof points">
            <div><strong>10</strong><span>step client journey</span></div>
            <div><strong>5 min</strong><span>ops check cadence</span></div>
            <div><strong>0</strong><span>unsafe live actions without approval</span></div>
          </div>
        </div>

        <div className="system-preview" aria-label="Strategic Minds system preview">
          <div className="preview-header">
            <strong>Live Operating System</strong>
            <span className="pulse">Preview ready</span>
          </div>
          <div className="preview-grid">
            <div className="rail">
              <span className="active">Overview</span>
              <span>Clients</span>
              <span>Projects</span>
              <span>Approvals</span>
              <span>Receipts</span>
              <span>Release queue</span>
            </div>
            <div className="live-panel">
              <div className="row-between">
                <strong>Command Status</strong>
                <span className="badge green">Healthy</span>
              </div>
              <div className="metrics">
                <div className="metric"><strong>14</strong><span>active checks</span></div>
                <div className="metric"><strong>8</strong><span>client modules</span></div>
                <div className="metric"><strong>3</strong><span>approval gates</span></div>
              </div>
              <div className="task-line"><span>Payment path</span><strong>Test mode</strong></div>
              <div className="task-line"><span>Drive receipts</span><strong>Queued</strong></div>
              <div className="task-line"><span>Release policy</span><strong>Approval gated</strong></div>
            </div>
          </div>
        </div>
      </section>

      <section id="workflow" className="section light-band">
        <span className="eyebrow">Client journey</span>
        <h2 className="section-title">A clear path from idea to operational system.</h2>
        <p className="section-copy">
          Every engagement moves through the same visible pipeline so the client can see progress and the
          operator can keep approvals, receipts, and release decisions under control.
        </p>
        <div className="workflow">
          {journey.map((step, index) => (
            <div key={step}>
              <strong>{String(index + 1).padStart(2, '0')}</strong>
              <p>{step}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="packages" className="section light-band">
        <span className="eyebrow">Packages</span>
        <h2 className="section-title">Choose the operating depth your business needs now.</h2>
        <div className="offer-grid">
          {offers.map((offer) => (
            <article className={`offer ${offer.featured ? 'featured' : ''}`} key={offer.name}>
              <div>
                <h3>{offer.name}</h3>
                <p>{offer.text}</p>
              </div>
              <div>
                <div className="price">{offer.price}</div>
                <a className={`btn ${offer.featured ? 'primary' : 'dark'}`} href="#start">Get started</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section dark-band">
        <div className="ops-split">
          <div>
            <span className="eyebrow">Operating stack</span>
            <h2 className="section-title">Website, dashboard, command center, and automation loop in one system.</h2>
            <p className="section-copy" style={{ color: '#c7d3e9' }}>
              Strategic Minds is structured as a governed client delivery machine: intake, planning, build,
              payment, documents, agent checks, admin summaries, release receipts, and rollback readiness.
            </p>
          </div>
          <div className="module-grid">
            {modules.map(([title, text]) => (
              <div className="module" key={title}>
                <strong>{title}</strong>
                <span className="muted">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="start" className="section final-cta">
        <div>
          <span className="eyebrow">Ready when you are</span>
          <h2 className="section-title">Build the next business system with approval-gated automation.</h2>
          <div className="actions">
            <a className="btn primary" href="mailto:strategicmindsadvisory@gmail.com">Request a build</a>
            <a className="btn" href="/admin">Review admin view</a>
          </div>
        </div>
      </section>
    </main>
  );
}
