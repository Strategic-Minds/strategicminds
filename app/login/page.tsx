export default function LoginPage() {
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
          <a href="/schedule">Schedule</a>
        </nav>
        <div className="header-actions">
          <a className="button primary" href="/client">Preview Dashboard</a>
        </div>
      </header>

      <section className="hero-stage" aria-labelledby="login-title">
        <div className="hero-copy">
          <p className="eyebrow">Client access</p>
          <h1 id="login-title">Your Strategic Minds portal keeps the build simple.</h1>
          <p className="hero-subcopy">Client authentication can be connected after the approved account provider is selected. For this preview, use the dashboard preview to review the client-facing experience.</p>
          <div className="hero-actions">
            <a className="button primary" href="/client">Open Dashboard Preview</a>
            <a className="button secondary" href="/signup">Start Intake</a>
          </div>
        </div>
        <div className="hero-dashboard-card">
          <div className="preview-topbar"><span>Portal view</span><strong>Preview</strong></div>
          <p className="muted-copy">The live version should show only each client's journey, schedule, progress reports, approvals, and files after secure sign-in is enabled.</p>
          <div className="preview-progress">
            <div className="active"><span />Dashboard</div>
            <div><span />Journey</div>
            <div><span />Approvals</div>
            <div><span />Files</div>
          </div>
        </div>
      </section>
    </main>
  );
}
