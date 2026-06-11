const approvedSourceUrl = 'https://drive.google.com/uc?export=view&id=1rmDliv93X2UznD0FEqG1Ll66ONcMgskG';

const journeySteps = [
  'Choose Your Package',
  'Secure Payment',
  'Schedule Your Call',
  'Share Your Idea',
  'We Plan Your System',
  'MVP Development',
  'Review & Feedback',
  'Launch Your System',
  'Automated Updates',
  'Scale & Optimize',
];

const packages = [
  {
    name: 'Business Planning Consultation',
    price: '$497',
    features: ['90 Min Strategy Call', 'Business Audit', 'Custom Action Plan', 'Recommendations'],
  },
  {
    name: 'Workflow Automation Package',
    price: '$1,497',
    features: ['Workflow Audit', 'Automation Setup', 'System Integrations', 'Training & Support'],
  },
  {
    name: 'MVP System Build Package',
    price: '$2,997',
    featured: true,
    features: ['Custom MVP Build', 'Database & Backend', 'Frontend / Website', '2 Revisions Included'],
  },
  {
    name: 'Full Business System Package',
    price: '$5,997+',
    features: ['Everything in MVP', 'Advanced Automations', 'Team Training', 'Priority & Support'],
  },
];

const workspace = ['Gmail', 'Google Drive', 'Google Calendar', 'Google Sheets', 'Google Docs', 'Google Meet'];

export default function HomePage() {
  return (
    <main className="site-shell">
      <header className="site-header" aria-label="Strategic Minds Advisory navigation">
        <a className="brand-lockup" href="/" aria-label="Strategic Minds Advisory home">
          <span className="brand-mark">SM</span>
          <span>
            <strong>Strategic Minds</strong>
            <small>Advisory</small>
          </span>
        </a>
        <nav className="site-nav" aria-label="Primary navigation">
          <a href="/">Home</a>
          <a href="/services">Services</a>
          <a href="/packages">Packages</a>
          <a href="/how-it-works">How It Works</a>
          <a href="/about">About</a>
        </nav>
        <div className="header-actions">
          <a className="button primary" href="/schedule">Schedule a Call</a>
          <a className="button secondary" href="/login">Client Login</a>
        </div>
      </header>

      <section className="hero-grid" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">AI-powered. Automated. Results driven.</p>
          <h1 id="hero-title">We Turn Ideas Into Automated, AI-Powered Business Systems.</h1>
          <p className="hero-subcopy">
            From planning to automation, we build your systems, workflows, websites, and content engines so you can focus on growth.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="/schedule">Schedule a Call</a>
            <a className="button secondary" href="/packages">View Packages</a>
          </div>
        </div>

        <div className="system-orbit" aria-label="Strategy, planning, build, launch, optimize, and improve system map">
          <div className="orbit-center">AI</div>
          <span>Strategy & Planning</span>
          <span>Build & Automate</span>
          <span>Deliver & Launch</span>
          <span>Optimize & Scale</span>
          <span>Monitor & Improve</span>
        </div>

        <div className="journey-panel" aria-label="The 10 Step Client Journey">
          <h2>The 10 Step Client Journey</h2>
          <div className="journey-strip">
            {journeySteps.map((step, index) => (
              <article className="journey-step" key={step}>
                <span>{index + 1}</span>
                <strong>{step}</strong>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="package-section" aria-labelledby="packages-title">
        <h2 id="packages-title">Choose the Right Package for Your Business</h2>
        <div className="package-grid">
          {packages.map((pkg, index) => (
            <article className={pkg.featured ? 'package-card featured' : 'package-card'} key={pkg.name}>
              {pkg.featured ? <span className="popular">Most Popular</span> : null}
              <span className="package-number">{index + 1}</span>
              <h3>{pkg.name}</h3>
              <p className="price">{pkg.price}</p>
              <ul>
                {pkg.features.map((feature) => <li key={feature}>{feature}</li>)}
              </ul>
              <a className="button secondary" href="/packages">Get Started</a>
            </article>
          ))}
        </div>
      </section>

      <section className="workspace-strip" aria-label="Fully integrated with Google Workspace">
        <p>Fully integrated with Google Workspace</p>
        <div>
          {workspace.map((item) => <span key={item}>{item}</span>)}
        </div>
      </section>

      <section className="approved-preview" aria-labelledby="approved-source-title">
        <div>
          <p className="eyebrow">Approved Drive Source</p>
          <h2 id="approved-source-title">Exact approved website and dashboard reference</h2>
          <p>
            This preview is wired to the inspected Drive source so the next build pass follows the approved logo, dashboard, package layout, and visual hierarchy.
          </p>
        </div>
        <img src={approvedSourceUrl} alt="Approved Strategic Minds Advisory website and client dashboard composite from Drive source" />
      </section>

      <section className="value-band" aria-label="Strategic Minds operating promises">
        <article><strong>Fully Automated</strong><span>We handle the tech so you can focus on your business.</span></article>
        <article><strong>Transparent Process</strong><span>See every step, update, and payment.</span></article>
        <article><strong>On-Time Delivery</strong><span>Clear milestones and communication.</span></article>
        <article><strong>Ongoing Support</strong><span>Updates, improvements, and support.</span></article>
      </section>
    </main>
  );
}
