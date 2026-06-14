const sidebarItems = ['Dashboard', 'My Journey', 'Schedule', 'Approvals', 'Files', 'Messages'];

const journeySteps = [
  { step: 'Intake', note: 'Answers and contact profile' },
  { step: 'Strategy', note: 'Business plan and first docs' },
  { step: 'Discovery', note: 'Market and similar-system report' },
  { step: 'Brand Packs', note: 'Five concepts for approval' },
  { step: 'Gate 1', note: 'Approve direction and payment' },
  { step: 'Build', note: 'AUTO BUILDER creates the OS' },
  { step: 'Testing', note: 'QA, soft launch, bug fixes' },
  { step: 'Reveal', note: 'Live walkthrough and tutorial' },
  { step: 'Handoff', note: 'Files, access, warranty, review' },
  { step: 'Growth', note: 'Auto Social and referral plan' },
];

const progressReports = [
  { title: 'Onboarding answers', status: 'Received', note: 'Your answers are saved to your project file and ready for strategy.' },
  { title: 'Business strategy docs', status: 'In progress', note: 'The Strategist lane is preparing your first planning packet.' },
  { title: 'Discovery report', status: 'Next', note: 'The market report will compare existing systems, sites, offers, and workflows.' },
  { title: 'Brand concepts', status: 'Queued', note: 'You will receive five clean brand and website pack directions for Gate 1.' },
];

const approvalFolder = [
  'Business strategy and business plan',
  'Discovery report and recommendations',
  'Five brand and website design packs',
  'Financial strategy and operating cost plan',
  'Automation, workflow, and Auto Social plan',
];

const backstage = [
  'Client answers route to the Business Builder Strategist Agent.',
  'Strategy docs move to Discovery for market and system recommendations.',
  'Discovery plus strategy moves to Branding for approval-ready concepts.',
  'Approved Gate 1 builder docs move into AUTO BUILDER and Vercel Workflow.',
];

export default function ClientDashboardPage() {
  return (
    <main className="client-dashboard-shell">
      <aside className="dashboard-sidebar" aria-label="Client dashboard navigation">
        <img src="/brand/strategic-minds-logo.svg" alt="Strategic Minds Advisory" />
        {sidebarItems.map((item, index) => (
          <a className={index === 0 ? 'active' : ''} href={index === 0 ? '/client' : `/client/${item.toLowerCase().replaceAll(' ', '-')}`} key={item}>{item}</a>
        ))}
      </aside>

      <section className="dashboard-main" aria-labelledby="client-dashboard-title">
        <div className="mobile-client-brand">
          <img src="/brand/strategic-minds-logo.svg" alt="Strategic Minds Advisory" />
          <span>Client Portal</span>
        </div>

        <div className="dashboard-topline">
          <div>
            <p className="eyebrow">Client workspace</p>
            <h1 id="client-dashboard-title">Your Strategic Minds Journey</h1>
            <p>Simple updates, clear approvals, and no back-office clutter. The build team handles the agents, Drive, Git, Vercel, Shopify, QA, and launch work behind the scenes.</p>
          </div>
          <div className="dashboard-actions">
            <a className="button primary" href="/schedule">Schedule Review</a>
            <a className="button secondary" href="/signup">Update Intake</a>
          </div>
        </div>

        <div className="client-focus-grid">
          <article className="focus-panel primary-focus">
            <small>Current step</small>
            <strong>Strategy Packet</strong>
            <span>Your intake answers are being turned into the first business docs.</span>
          </article>
          <article className="focus-panel">
            <small>Next approval</small>
            <strong>Gate 1</strong>
            <span>Review strategy, discovery, five brand packs, website packs, and costs.</span>
          </article>
          <article className="focus-panel">
            <small>Next call</small>
            <strong>Schedule when ready</strong>
            <span>Book a walkthrough when the Gate 1 folder is ready to review.</span>
          </article>
        </div>

        <section className="dashboard-card journey-card" aria-labelledby="journey-title">
          <div className="section-heading compact">
            <p className="eyebrow">Progress</p>
            <h2 id="journey-title">The 10 Step Client Journey</h2>
            <p>You only see the milestones that need your attention. The deeper operating system work stays internal until it is ready to present.</p>
          </div>
          <div className="journey-progress-row">
            {journeySteps.map((item, index) => (
              <div className={index === 0 ? 'journey-node done' : index === 1 ? 'journey-node current' : 'journey-node'} key={item.step}>
                <span>{index + 1}</span>
                <strong>{item.step}</strong>
                <small>{item.note}</small>
              </div>
            ))}
          </div>
        </section>

        <div className="simple-dashboard-grid">
          <article className="dashboard-card">
            <div className="card-heading-row">
              <h2>Progress Reports</h2>
              <span>Gate 1 prep</span>
            </div>
            <div className="progress-list">
              {progressReports.map((item) => (
                <div key={item.title}>
                  <span className="status-dot" />
                  <div>
                    <strong>{item.title}</strong>
                    <small>{item.status}</small>
                    <p>{item.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </article>

          <article className="dashboard-card approval-card">
            <div className="card-heading-row">
              <h2>Gate 1 Approval Folder</h2>
              <span>Decision pack</span>
            </div>
            <p className="muted-copy">Before payment, the client gets one clean folder with the materials needed to approve the build direction.</p>
            <ul className="plain-list">
              {approvalFolder.map((item) => <li key={item}>{item}</li>)}
            </ul>
            <a className="button secondary" href="/client/files">View Folder Preview</a>
          </article>
        </div>

        <section className="dashboard-card backstage-card">
          <div>
            <p className="eyebrow">Backstage workflow</p>
            <h2>What happens behind the scenes</h2>
            <ul className="plain-list backstage-list">
              {backstage.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
          <a className="button primary" href="/schedule">Schedule Gate 1 Review</a>
        </section>
      </section>
    </main>
  );
}
