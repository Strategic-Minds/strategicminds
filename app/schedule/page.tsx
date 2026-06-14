const reviewItems = [
  'Review your business idea, audience, offer, and first version goal.',
  'Confirm whether the build should be a Vercel site, Shopify store, portal, automation system, or full OS.',
  'Decide what must be included in the Gate 1 approval folder.',
  'Set the next client milestone and communication preference.',
];

export default function SchedulePage() {
  return (
    <main className="site-shell">
      <header className="site-header" aria-label="Strategic Minds Advisory navigation">
        <a className="brand-lockup" href="/" aria-label="Strategic Minds Advisory home">
          <img src="/brand/strategic-minds-logo.svg" alt="Strategic Minds Advisory" />
        </a>
        <nav className="site-nav" aria-label="Primary navigation">
          <a href="/">Home</a>
          <a href="/packages">Packages</a>
          <a href="/signup">Start Intake</a>
          <a href="/client">Client Dashboard</a>
        </nav>
        <div className="header-actions">
          <a className="button primary" href="/signup">Start Intake</a>
        </div>
      </header>

      <section className="hero-stage" aria-labelledby="schedule-title">
        <div className="hero-copy">
          <p className="eyebrow">Schedule a call</p>
          <h1 id="schedule-title">Book the right conversation for the next decision.</h1>
          <p className="hero-subcopy">Use this page as the simple scheduling lane for intake, Gate 1 review, build reveal, and handoff conversations. A live calendar embed can be connected when the scheduling provider is approved.</p>
          <div className="hero-actions">
            <a className="button primary" href="mailto:strategicmindsadvisory@gmail.com?subject=Strategic Minds Call Request">Request By Email</a>
            <a className="button secondary" href="/signup">Complete Intake First</a>
          </div>
        </div>
        <div className="hero-dashboard-card">
          <div className="preview-topbar"><span>Call types</span><strong>Next step</strong></div>
          <div className="preview-progress">
            <div className="active"><span />Intake Review</div>
            <div><span />Gate 1 Approval</div>
            <div><span />Client Reveal</div>
            <div><span />Final Handoff</div>
          </div>
        </div>
      </section>

      <section className="split-band" aria-labelledby="review-title">
        <div>
          <p className="eyebrow">What we cover</p>
          <h2 id="review-title">The call stays focused on the client decision.</h2>
          <p className="muted-copy">The client does not need to understand the full internal agent stack. They need clarity, timing, approvals, and next steps.</p>
        </div>
        <ul className="deliverable-list">
          {reviewItems.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </section>
    </main>
  );
}
