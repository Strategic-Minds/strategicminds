const sidebarItems = ['Dashboard', 'My Journey', 'Calls', 'Payments', 'Invoices', 'Documents', 'Updates', 'Messages', 'Settings', 'Logout'];
const journeySteps = ['Choose Package', 'Payment Confirmed', 'Call Scheduled', 'Share Your Idea', 'We Plan System', 'MVP Build', 'Review & Feedback', 'Launch System', 'Automated Updates', 'Scale & Optimize'];

export default function ClientDashboardPage() {
  return (
    <main className="client-dashboard-shell">
      <aside className="dashboard-sidebar full-sidebar" aria-label="Client dashboard navigation">
        <img src="/brand/strategic-minds-logo.svg" alt="Strategic Minds Advisory" />
        {sidebarItems.map((item, index) => (
          <a className={index === 0 ? 'active' : ''} href={index === 0 ? '/client' : `/client/${item.toLowerCase().replaceAll(' ', '-').replace('&', 'and')}`} key={item}>{item}</a>
        ))}
      </aside>

      <section className="dashboard-main full-dashboard" aria-labelledby="client-dashboard-title">
        <div className="dashboard-topline">
          <div>
            <h1 id="client-dashboard-title">Welcome back, John!</h1>
            <p>Here is what is happening with your project.</p>
          </div>
          <div className="dashboard-actions">
            <a className="button primary" href="/schedule">Schedule a Call</a>
            <span className="dashboard-bell" aria-label="Notifications">1</span>
            <span className="dashboard-avatar" aria-label="Client profile">J</span>
          </div>
        </div>

        <div className="dashboard-stat-grid">
          <article><small>Current Step</small><strong>4 of 10</strong><span>Share Your Idea</span><a href="/client/journey">View Journey</a></article>
          <article><small>Next Call</small><strong>May 30, 2025</strong><span>2:00 PM EST</span><a href="/client/meetings">Join Call</a></article>
          <article><small>Project Status</small><strong>In Progress</strong><span>On Track</span><a href="/client/projects">View Project</a></article>
          <article><small>Amount Paid</small><strong>$2,997</strong><span>MVP System Build</span><a href="/client/invoices">View Invoices</a></article>
        </div>

        <section className="dashboard-card journey-card" aria-labelledby="journey-title">
          <h2 id="journey-title">Your 10 Step Journey</h2>
          <div className="journey-progress-row">
            {journeySteps.map((step, index) => (
              <div className={index < 3 ? 'journey-node done' : index === 3 ? 'journey-node current' : 'journey-node'} key={step}>
                <span>{index + 1}</span>
                <strong>{step}</strong>
              </div>
            ))}
          </div>
        </section>

        <div className="dashboard-panel-grid">
          <article className="dashboard-card">
            <h2>Recent Updates</h2>
            <p>We received your project brief. <small>May 24, 2025</small></p>
            <p>Your call has been scheduled. <small>May 23, 2025</small></p>
            <p>Payment received successfully. <small>May 23, 2025</small></p>
            <a href="/client/messages">View All Updates</a>
          </article>
          <article className="dashboard-card">
            <h2>Project Progress</h2>
            <div className="progress"><span /></div>
            <p>Discovery & Planning</p>
            <p>Strategy & Blueprint</p>
            <p>MVP Development</p>
            <p className="muted">Review & Feedback</p>
            <p className="muted">Launch & Automate</p>
            <a href="/client/projects">View Full Progress</a>
          </article>
          <article className="dashboard-card">
            <h2>Documents</h2>
            <p>Project Brief <small>May 24, 2025</small></p>
            <p>Strategy Blueprint <small>May 24, 2025</small></p>
            <p>MVP Roadmap <small>Due Jun 20, 2025</small></p>
            <a href="/client/documents">View All Documents</a>
          </article>
          <article className="dashboard-card">
            <h2>Payment Schedule</h2>
            <p>Deposit Paid <strong>$1,497</strong></p>
            <p>MVP Build Milestone <strong>$1,500</strong></p>
            <p>Final Payment <strong>$0</strong></p>
            <a href="/client/invoices">View All Invoices</a>
          </article>
        </div>

        <section className="dashboard-card ready-card">
          <div>
            <h2>Ready to get started?</h2>
            <p>Schedule a call with us today and let us build your system.</p>
          </div>
          <a className="button primary" href="/schedule">Schedule a Call</a>
        </section>
      </section>
    </main>
  );
}
