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
          <img src="/brand/strategic-minds-logo.svg" alt="Strategic Minds Advisory" />
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

      <section className="hero-grid approved-home" aria-labelledby="hero-title">
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

      <section className="dashboard-preview-section" aria-labelledby="dashboard-preview-title">
        <div className="section-heading">
          <p className="eyebrow">Client Portal Preview</p>
          <h2 id="dashboard-preview-title">Approved Strategic Minds client dashboard</h2>
          <p>Structured to match the approved Drive composite: sidebar navigation, step cards, journey tracker, documents, updates, payments, and schedule call prompt.</p>
        </div>
        <div className="dashboard-frame compact-dashboard" aria-label="Approved client dashboard preview">
          <aside className="dashboard-sidebar">
            <img src="/brand/strategic-minds-logo.svg" alt="Strategic Minds Advisory" />
            {['Dashboard', 'My Journey', 'Calls', 'Payments', 'Invoices', 'Documents', 'Updates', 'Messages', 'Settings', 'Logout'].map((item, index) => (
              <span className={index === 0 ? 'active' : ''} key={item}>{item}</span>
            ))}
          </aside>
          <div className="dashboard-main">
            <div className="dashboard-topline">
              <div>
                <h3>Welcome back, John!</h3>
                <p>Here is what is happening with your project.</p>
              </div>
              <a className="button primary" href="/schedule">Schedule a Call</a>
            </div>
            <div className="dashboard-stat-grid">
              <article><small>Current Step</small><strong>4 of 10</strong><span>Share Your Idea</span></article>
              <article><small>Next Call</small><strong>May 30, 2025</strong><span>2:00 PM EST</span></article>
              <article><small>Project Status</small><strong>In Progress</strong><span>On Track</span></article>
              <article><small>Amount Paid</small><strong>$2,997</strong><span>MVP System Build</span></article>
            </div>
            <div className="dashboard-journey-mini">
              {journeySteps.map((step, index) => (
                <span className={index < 3 ? 'done' : index === 3 ? 'current' : ''} key={step}>{index + 1}</span>
              ))}
            </div>
            <div className="dashboard-panel-grid">
              <article><h4>Recent Updates</h4><p>We received your project brief.</p><p>Your call has been scheduled.</p><p>Payment received successfully.</p></article>
              <article><h4>Project Progress</h4><div className="progress"><span /></div><p>Discovery & Planning</p><p>Strategy & Blueprint</p><p>MVP Development</p></article>
              <article><h4>Documents</h4><p>Project Brief</p><p>Strategy Blueprint</p><p>MVP Roadmap</p></article>
              <article><h4>Payment Schedule</h4><p>Deposit Paid $1,497</p><p>MVP Build Milestone $1,500</p><p>Final Payment $0</p></article>
            </div>
          </div>
        </div>
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
