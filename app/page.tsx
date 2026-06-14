const publicJourney = [
  ['Sign Up', 'Create your client file and contact profile.'],
  ['Answer Intake', 'Complete 10-15 onboarding questions by form, email, or text.'],
  ['Strategy + Discovery', 'We prepare business docs, market research, and recommendations.'],
  ['Brand Packs', 'You review five brand and website directions.'],
  ['Gate 1 Approval', 'Approve the plan and make payment before build begins.'],
  ['Build + Launch', 'AUTO BUILDER creates, tests, soft launches, and hands off the system.'],
];

const gateOneDeliverables = [
  'Business strategy and business plan',
  'Financial strategy and operating cost estimate',
  'Market discovery and similar-system report',
  'Five branding and website concept packs',
  'Automation, workflow, and Auto Social plan',
];

const packages = [
  ['Business Planning Consultation', '$497', 'Strategy session and focused action map.'],
  ['Workflow Automation Package', '$1,497', 'Simple automation plan and setup path.'],
  ['MVP System Build Package', '$2,997', 'Website, dashboard, docs, and launch plan.', true],
  ['Full Business System Package', '$5,997+', 'Complete OS, website or store, and handoff.'],
];

export default function HomePage() {
  return (
    <main className="site-shell simplified-site">
      <header className="site-header" aria-label="Strategic Minds Advisory navigation">
        <a className="brand-lockup" href="/" aria-label="Strategic Minds Advisory home">
          <img src="/brand/strategic-minds-logo.svg" alt="Strategic Minds Advisory" />
        </a>
        <nav className="site-nav" aria-label="Primary navigation">
          <a href="/packages">Packages</a>
          <a href="/how-it-works">How It Works</a>
          <a href="/client">Client Dashboard</a>
        </nav>
        <div className="header-actions">
          <a className="button primary" href="/signup">Start Intake</a>
          <a className="button secondary" href="/schedule">Schedule a Call</a>
        </div>
      </header>

      <section className="simple-hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">AI consultant business systems</p>
          <h1 id="hero-title">A simple client journey. A powerful build system behind it.</h1>
          <p className="hero-subcopy">Clients answer the right questions, approve the right plan, then we build the website, workflow, store, Drive, Git, and operating system after approval.</p>
          <div className="hero-actions">
            <a className="button primary" href="/signup">Start Intake</a>
            <a className="button secondary" href="/client">Preview Dashboard</a>
          </div>
        </div>
        <div className="hero-panel">
          <small>Current client view</small>
          <strong>Journey, schedule, progress, approvals, files.</strong>
          <span>No admin noise. No backend complexity. No live payment action before approval.</span>
        </div>
      </section>

      <section className="simple-section" aria-labelledby="journey-title">
        <div className="section-heading tight-heading">
          <p className="eyebrow">How it works</p>
          <h2 id="journey-title">The simple Strategic Minds workflow</h2>
        </div>
        <div className="simple-steps">
          {publicJourney.map(([title, text], index) => (
            <article key={title}>
              <span>{index + 1}</span>
              <strong>{title}</strong>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="simple-section split-section" aria-labelledby="gate-title">
        <div>
          <p className="eyebrow">Gate 1</p>
          <h2 id="gate-title">The client approves the plan before the build starts.</h2>
          <p className="hero-subcopy">The client only sees polished recommendations and approval materials. AUTO BUILDER, Discovery, Branding, Vercel Workflow, Drive, Git, and QA stay backstage.</p>
        </div>
        <ul className="deliverable-list">
          {gateOneDeliverables.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </section>

      <section className="simple-section" aria-labelledby="packages-title">
        <div className="section-heading tight-heading">
          <p className="eyebrow">Packages</p>
          <h2 id="packages-title">Start with the right build depth.</h2>
        </div>
        <div className="package-grid simple-package-grid">
          {packages.map(([name, price, text, featured]) => (
            <article className={featured ? 'package-card featured' : 'package-card'} key={name as string}>
              {featured ? <span className="popular">Most Popular</span> : null}
              <h3>{name}</h3>
              <p className="price">{price}</p>
              <p>{text}</p>
              <a className="button secondary" href="/signup">Get Started</a>
            </article>
          ))}
        </div>
      </section>

      <section className="dashboard-preview-section simplified-preview" aria-labelledby="dashboard-preview-title">
        <div className="section-heading tight-heading">
          <p className="eyebrow">Client portal</p>
          <h2 id="dashboard-preview-title">Simple dashboard, clean approvals, clear progress.</h2>
        </div>
        <div className="mini-client-preview">
          <aside>
            <img src="/brand/strategic-minds-logo.svg" alt="Strategic Minds Advisory" />
            <span className="active">Dashboard</span>
            <span>Journey</span>
            <span>Schedule</span>
            <span>Approvals</span>
            <span>Files</span>
          </aside>
          <div>
            <h3>Your Strategic Minds Journey</h3>
            <p>Current step: Strategy Packet</p>
            <div className="mini-progress"><span /></div>
            <div className="mini-grid">
              <article><strong>Progress</strong><span>4 active reports</span></article>
              <article><strong>Gate 1</strong><span>Approval folder pending</span></article>
              <article><strong>Next Call</strong><span>Schedule when ready</span></article>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
