const journey = [
  { title: 'Sign Up', text: 'Client creates a simple profile and contact record.' },
  { title: 'Intake', text: 'Client answers 10-15 guided questions by portal, email, or text.' },
  { title: 'Strategy', text: 'Business Builder Strategist turns answers into first planning docs.' },
  { title: 'Discovery', text: 'Discovery Agent researches market, competitors, systems, and site patterns.' },
  { title: 'Brand Packs', text: 'Branding Agent prepares five client-ready brand and website directions.' },
  { title: 'Gate 1', text: 'Client approves the plan and makes payment before build starts.' },
  { title: 'Build', text: 'AUTO BUILDER sends builder docs into the Vercel Workflow build lane.' },
  { title: 'Test', text: 'QA, soft launch, bug fixes, reveal, handoff, warranty, and referral path.' },
];

const deliverables = [
  'Business strategy and business plan',
  'Financial strategy and operating cost estimate',
  'Market discovery and similar-system report',
  'Five brand and website concept packs',
  'Automation, workflow, Auto Social, and cost plan',
  'Gate 1 approval folder connected to the project Drive',
];

const packages = [
  { name: 'Business Planning Consultation', price: '$497', text: 'A focused strategy session, business direction, and next-step action map.' },
  { name: 'Workflow Automation Package', price: '$1,497', text: 'Automation strategy, workflow design, and a practical setup path.' },
  { name: 'MVP System Build Package', price: '$2,997', text: 'Website, client portal, builder docs, Drive structure, and launch plan.', featured: true },
  { name: 'Full Business System Package', price: '$5,997+', text: 'Complete operating system, website or Shopify store, testing, and handoff.' },
];

export default function HomePage() {
  return (
    <main className="site-shell">
      <header className="site-header" aria-label="Strategic Minds Advisory navigation">
        <a className="brand-lockup" href="/" aria-label="Strategic Minds Advisory home">
          <img src="/brand/strategic-minds-logo.svg" alt="Strategic Minds Advisory" />
        </a>
        <nav className="site-nav" aria-label="Primary navigation">
          <a href="/packages">Packages</a>
          <a href="/signup">Start Intake</a>
          <a href="/client">Client Dashboard</a>
          <a href="/schedule">Schedule</a>
        </nav>
        <div className="header-actions">
          <a className="button secondary" href="/login">Login</a>
          <a className="button primary" href="/signup">Start Intake</a>
        </div>
      </header>

      <section className="hero-stage" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">Strategic Minds Advisory</p>
          <h1 id="hero-title">We turn ideas into automated, AI-powered business systems.</h1>
          <p className="hero-subcopy">Clients see a clean journey: intake, strategy, discovery, approval, build, test, reveal, and handoff. The agents, Drive folders, Git, Vercel Workflow, Shopify, and QA stay organized behind the scenes.</p>
          <div className="hero-actions">
            <a className="button primary" href="/signup">Start Your Intake</a>
            <a className="button secondary" href="/client">Preview Client Dashboard</a>
          </div>
        </div>
        <div className="hero-dashboard-card" aria-label="Client dashboard preview">
          <div className="preview-topbar">
            <span>Client Portal</span>
            <strong>Gate 1</strong>
          </div>
          <div className="preview-progress">
            <div><span />Intake Received</div>
            <div className="active"><span />Strategy Packet</div>
            <div><span />Discovery Report</div>
            <div><span />Brand Packs</div>
          </div>
          <div className="preview-stat-grid">
            <article><strong>5</strong><span>brand and website packs</span></article>
            <article><strong>1</strong><span>approval folder</span></article>
            <article><strong>10</strong><span>journey milestones</span></article>
          </div>
        </div>
      </section>

      <section className="journey-section" aria-labelledby="journey-title">
        <div className="section-heading">
          <p className="eyebrow">The journey</p>
          <h2 id="journey-title">Simple for the client. Structured for the build team.</h2>
        </div>
        <div className="journey-grid">
          {journey.map((step, index) => (
            <article key={step.title}>
              <span>{index + 1}</span>
              <strong>{step.title}</strong>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="split-band" aria-labelledby="gate-title">
        <div>
          <p className="eyebrow">Gate 1 approval</p>
          <h2 id="gate-title">The client receives decision-ready strategy before the build begins.</h2>
          <p className="muted-copy">The dashboard stays clean: schedule, progress, approvals, and files. The deeper AUTO BUILDER and Auto Social workflow remains internal until it is time to present results.</p>
        </div>
        <ul className="deliverable-list">
          {deliverables.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </section>

      <section className="package-section" aria-labelledby="packages-title">
        <div className="section-heading">
          <p className="eyebrow">Packages</p>
          <h2 id="packages-title">Choose the starting level. Upgrade as the system proves itself.</h2>
        </div>
        <div className="package-grid">
          {packages.map((item) => (
            <article className={item.featured ? 'package-card featured' : 'package-card'} key={item.name}>
              {item.featured ? <span className="popular">Best fit</span> : null}
              <h3>{item.name}</h3>
              <p className="price">{item.price}</p>
              <p>{item.text}</p>
              <a className="button secondary" href="/signup">Start Intake</a>
            </article>
          ))}
        </div>
      </section>

      <section className="portal-preview-band" aria-labelledby="portal-title">
        <div className="section-heading">
          <p className="eyebrow">Client dashboard</p>
          <h2 id="portal-title">Only the pieces the client needs to see.</h2>
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
          <div className="mini-preview-main">
            <div className="mini-preview-header">
              <div>
                <small>Current step</small>
                <h3>Strategy Packet</h3>
              </div>
              <a className="button primary" href="/client">Open Preview</a>
            </div>
            <div className="mini-progress"><span /></div>
            <div className="mini-grid">
              <article><strong>Progress Reports</strong><span>Clean milestone updates</span></article>
              <article><strong>Approval Folder</strong><span>Gate 1 decision materials</span></article>
              <article><strong>Schedule</strong><span>Reveal and review calls</span></article>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
