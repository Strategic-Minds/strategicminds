const packages = [
  {
    name: 'Business Planning Consultation',
    price: '$497',
    summary: 'A focused planning session for founders who need clarity before building.',
    includes: ['Business direction map', 'Offer and audience review', 'Recommended next steps'],
  },
  {
    name: 'Workflow Automation Package',
    price: '$1,497',
    summary: 'A practical automation plan for teams that need smoother operations.',
    includes: ['Workflow audit', 'Automation plan', 'Tool and cost recommendations'],
  },
  {
    name: 'MVP System Build Package',
    price: '$2,997',
    summary: 'The best starting build for a site, dashboard, Drive, docs, and launch path.',
    includes: ['Client portal structure', 'Builder docs', 'Vercel site path', 'Launch checklist'],
    featured: true,
  },
  {
    name: 'Full Business System Package',
    price: '$5,997+',
    summary: 'A deeper build for clients who need a complete website, store, workflow, and handoff.',
    includes: ['Website or Shopify path', 'Drive and Git structure', 'QA and soft launch', 'Reveal and handoff'],
  },
];

export default function PackagesPage() {
  return (
    <main className="site-shell">
      <header className="site-header" aria-label="Strategic Minds Advisory navigation">
        <a className="brand-lockup" href="/" aria-label="Strategic Minds Advisory home">
          <img src="/brand/strategic-minds-logo.svg" alt="Strategic Minds Advisory" />
        </a>
        <nav className="site-nav" aria-label="Primary navigation">
          <a href="/">Home</a>
          <a href="/signup">Start Intake</a>
          <a href="/client">Client Dashboard</a>
          <a href="/schedule">Schedule</a>
        </nav>
        <div className="header-actions">
          <a className="button primary" href="/signup">Start Intake</a>
        </div>
      </header>

      <section className="hero-stage" aria-labelledby="packages-title">
        <div className="hero-copy">
          <p className="eyebrow">Packages</p>
          <h1 id="packages-title">Start with the right level of strategy, automation, and build support.</h1>
          <p className="hero-subcopy">Every package starts with intake and planning. Bigger builds move through Gate 1 approval before any full implementation work begins.</p>
          <div className="hero-actions">
            <a className="button primary" href="/signup">Start Intake</a>
            <a className="button secondary" href="/schedule">Talk Through Options</a>
          </div>
        </div>
        <div className="hero-dashboard-card">
          <div className="preview-topbar"><span>Recommended path</span><strong>Gate 1</strong></div>
          <p className="muted-copy">Intake first. Strategy second. Approval third. Build only after the client signs off.</p>
          <div className="preview-progress">
            <div className="active"><span />MVP System Build</div>
            <div><span />Full Business System</div>
            <div><span />Auto Social Strategy</div>
          </div>
        </div>
      </section>

      <section className="package-section" aria-labelledby="package-options-title">
        <div className="section-heading">
          <p className="eyebrow">Options</p>
          <h2 id="package-options-title">Client-ready packages</h2>
        </div>
        <div className="package-grid">
          {packages.map((item) => (
            <article className={item.featured ? 'package-card featured' : 'package-card'} key={item.name}>
              {item.featured ? <span className="popular">Best fit</span> : null}
              <h3>{item.name}</h3>
              <p className="price">{item.price}</p>
              <p>{item.summary}</p>
              <ul className="plain-list">
                {item.includes.map((include) => <li key={include}>{include}</li>)}
              </ul>
              <a className="button secondary" href="/signup">Start Intake</a>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
