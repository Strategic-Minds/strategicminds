const sidebarItems = ['Dashboard', 'My Journey', 'Schedule', 'Approvals', 'Files', 'Messages'];

const journeySteps = [
  ['Intake', 'Tell us about the business'],
  ['Strategy', 'Business plan and first docs'],
  ['Discovery', 'Market and competitor research'],
  ['Brand Packs', 'Five concepts for approval'],
  ['Gate 1', 'Approve direction and payment'],
  ['Build', 'AUTO BUILDER creates the OS'],
  ['Testing', 'QA, soft launch, bug fixes'],
  ['Reveal', 'Live walkthrough and tutorial'],
  ['Final Files', 'Handoff, warranty, reviews'],
  ['Growth', 'Auto Social and referral plan'],
];

const visibleProgress = [
  ['Onboarding answers', 'Received', 'Your answers are saved to your project file.'],
  ['Business strategy docs', 'Building', 'Strategist Agent is preparing your first planning packet.'],
  ['Discovery report', 'Next', 'Discovery Agent will map market examples and recommendations.'],
  ['Brand concepts', 'Queued', 'Branding Agent prepares five approval-ready website packs.'],
];

const approvalPacks = [
  'Business strategy and plan',
  'Discovery and market recommendations',
  'Five brand and website concepts',
  'Automation, Auto Social, and cost plan',
];

export default function ClientDashboardPage() {
  return (
    <main className="client-dashboard-shell simple-client-shell">
      <aside className="dashboard-sidebar simple-sidebar" aria-label="Client dashboard navigation">
        <img src="/brand/strategic-minds-logo.svg" alt="Strategic Minds Advisory" />
        {sidebarItems.map((item, index) => (
          <a className={index === 0 ? 'active' : ''} href={index === 0 ? '/client' : `/client/${item.toLowerCase().replaceAll(' ', '-')}`} key={item}>{item}</a>
        ))}
      </aside>

      <section className="dashboard-main simple-dashboard" aria-labelledby="client-dashboard-title">
        <div className="dashboard-topline simple-topline">
          <div>
            <p className="eyebrow small-eyebrow">Client workspace</p>
            <h1 id="client-dashboard-title">Your Strategic Minds Journey</h1>
            <p>Everything important is here. We keep the builder agents, folders, testing, and launch work behind the scenes.</p>
          </div>
          <div className="dashboard-actions">
            <a className="button primary" href="/schedule">Schedule a Call</a>
            <a className="button secondary" href="/signup">Update Intake</a>
          </div>
        </div>

        <div className="client-focus-grid">
          <article className="focus-panel primary-focus">
            <small>Current step</small>
            <strong>Strategy Packet</strong>
            <span>We are turning your answers into the first business docs.</span>
          </article>
          <article className="focus-panel">
            <small>Next approval</small>
            <strong>Gate 1</strong>
            <span>Review strategy, discovery, brand packs, website packs, and cost plan.</span>
          </article>
          <article className="focus-panel">
            <small>Next call</small>
            <strong>Schedule when ready</strong>
            <span>Use the schedule button when you want a walkthrough.</span>
          </article>
        </div>

        <section className="dashboard-card journey-card simple-journey-card" aria-labelledby="journey-title">
          <div className="section-heading tight-heading">
            <p className="eyebrow small-eyebrow">Progress</p>
            <h2 id="journey-title">The Simple 10 Step Journey</h2>
            <p>You only see the milestones that need your attention. The operating system work happens in the background.</p>
          </div>
          <div className="journey-progress-row simple-journey-row">
            {journeySteps.map(([step, note], index) => (
              <div className={index < 1 ? 'journey-node done' : index === 1 ? 'journey-node current' : 'journey-node'} key={step}>
                <span>{index + 1}</span>
                <strong>{step}</strong>
                <small>{note}</small>
              </div>
            ))}
          </div>
        </section>

        <div className="simple-dashboard-grid">
          <article className="dashboard-card">
            <h2>Progress Reports</h2>
            <div className="progress-list">
              {visibleProgress.map(([title, status, note]) => (
                <div key={title}>
                  <span className="status-dot" />
                  <div>
                    <strong>{title}</strong>
                    <small>{status}</small>
                    <p>{note}</p>
                  </div>
                </div>
              ))}
            </div>
          </article>

          <article className="dashboard-card approval-card">
            <h2>Gate 1 Approval Folder</h2>
            <p className="muted-copy">Before payment, you will receive a clean approval folder with only the decision materials.</p>
            <ul className="plain-list">
              {approvalPacks.map((item) => <li key={item}>{item}</li>)}
            </ul>
            <a className="button secondary" href="/client/files">View Files</a>
          </article>
        </div>

        <section className="dashboard-card backstage-card">
          <div>
            <p className="eyebrow small-eyebrow">Backstage workflow</p>
            <h2>What happens after you approve Gate 1</h2>
            <p>Payment unlocks the build lane: builder docs go to AUTO BUILDER, Vercel Workflow builds the site or store, Drive and Git are created, QA runs, soft launch starts, and your reveal call gets scheduled.</p>
          </div>
          <a className="button primary" href="/schedule">Schedule Review</a>
        </section>
      </section>
    </main>
  );
}
