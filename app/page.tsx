import styles from './homepage.module.css';

const cx = (...classes: Array<string | false | undefined>) => classes.filter(Boolean).join(' ');

const services = [
  ['Business Planning', 'Strategy, positioning, offer structure, and execution path.'],
  ['Workflow Automation', 'Automate intake, follow-up, approvals, and admin movement.'],
  ['MVP System Build', 'Build and launch your first Vercel-powered website system.'],
  ['Business In A Box', 'Website, portal, workflow, handoff, and launch support.']
];

const workflow = [
  ['Lead Capture', 'Forms, calendar, chat widget'],
  ['Auto Onboarding', 'Client intake and setup'],
  ['Auto Builder', 'Discovery, docs, build, validate'],
  ['Workflow Engine', 'Vercel workflow automation'],
  ['5-Min Cron', 'System health and approvals'],
  ['AI Gateway', 'Safe agent actions'],
  ['Notifications', 'Email drafts and alerts'],
  ['Receipts & Logs', 'Audit proof and release records']
];

const stack = ['Next.js', 'Vercel', 'Supabase', 'Resend', 'Stripe Ready', 'PWA', 'Tailwind CSS'];

const dashboardRows = ['Discovery', 'Brand & Strategy', 'Documentation', 'Build Phase', 'Validation', 'Release'];

export default function HomePage() {
  return (
    <main className={styles.siteShell}>
      <nav className={styles.siteNav} aria-label="Main navigation">
        <a className={styles.brand} href="/">
          <span className={styles.logoMark} aria-hidden="true" />
          <span className={styles.brandText}>
            <strong>Strategic Minds</strong>
            <span>Advisory</span>
          </span>
        </a>
        <div className={styles.navLinks}>
          <a href="#packages">Packages</a>
          <a href="#solutions">Solutions</a>
          <a href="#workflow">Workflow</a>
          <a href="/client">Dashboard</a>
          <a className={cx(styles.btn, styles.primary)} href="mailto:strategicmindsadvisory@gmail.com">Book a Call</a>
        </div>
      </nav>

      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <span className={styles.eyebrow}>Strategic Minds Advisory</span>
          <h1>
            Intelligence
            <span>In Motion</span>
          </h1>
          <p>
            We build automated websites, intelligent workflows, and scalable business systems that run on Vercel.
          </p>
          <div className={styles.actions}>
            <a className={cx(styles.btn, styles.primary)} href="#packages">Explore Packages</a>
            <a className={styles.btn} href="mailto:strategicmindsadvisory@gmail.com">Book a Call</a>
          </div>
          <div className={styles.heroBadges} aria-label="Included capabilities">
            <span>Built for scale</span>
            <span>Automation first</span>
            <span>AI powered</span>
            <span>Results driven</span>
          </div>
        </div>

        <div className={styles.heroVisual} aria-hidden="true">
          <div className={styles.aiHead} />
          <div className={styles.motionLines} />
          <div className={styles.orbit}>
            <span>SM</span>
          </div>
        </div>
      </section>

      <section id="packages" className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.eyebrow}>Our Core Services</span>
          <h2>Five-star systems without the heavy agency drag.</h2>
        </div>
        <div className={styles.serviceGrid}>
          {services.map(([title, text]) => (
            <article className={styles.serviceCard} key={title}>
              <span className={styles.cardIcon} />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="solutions" className={cx(styles.section, styles.dashboardSection)}>
        <div className={styles.sectionHeader}>
          <span className={styles.eyebrow}>Client Dashboard Preview</span>
          <h2>Website, portal, workflow, and approvals in one operating view.</h2>
        </div>
        <div className={styles.dashboard}>
          <aside className={styles.dashboardRail}>
            {['Dashboard', 'Projects', 'Tasks', 'Documents', 'Payments', 'Messages', 'Settings'].map((item, index) => (
              <span className={index === 0 ? styles.active : ''} key={item}>{item}</span>
            ))}
          </aside>
          <div className={styles.dashboardMain}>
            <div className={styles.progressRing}>
              <strong>75%</strong>
              <span>Project Progress</span>
            </div>
            <div className={styles.projectList}>
              {dashboardRows.map((row, index) => (
                <div key={row}>
                  <span>{row}</span>
                  <strong>{index < 4 ? 'Ready' : 'Queued'}</strong>
                </div>
              ))}
            </div>
            <div className={styles.meetingCard}>
              <span>Upcoming Meeting</span>
              <strong>Strategy Call</strong>
              <p>Review package, scope, and Vercel preview path.</p>
              <a href="mailto:strategicmindsadvisory@gmail.com">View Calendar</a>
            </div>
          </div>
          <div className={styles.statRow}>
            <div><strong>12</strong><span>Total Projects</span></div>
            <div><strong>7</strong><span>Active Projects</span></div>
            <div><strong>$96,320</strong><span>Revenue Pipeline</span></div>
            <div><strong>18</strong><span>Open Tasks</span></div>
          </div>
        </div>
      </section>

      <section id="workflow" className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.eyebrow}>Vercel Workflow Automation</span>
          <h2>Every build includes the pieces needed to launch, operate, and improve.</h2>
        </div>
        <div className={styles.workflowGrid}>
          {workflow.map(([title, text]) => (
            <div className={styles.workflowItem} key={title}>
              <span className={styles.cardIcon} />
              <strong>{title}</strong>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.bottomGrid} aria-label="Technology and features">
        <div className={styles.stackPanel}>
          <span className={styles.eyebrow}>Tech Stack</span>
          <div className={styles.stackList}>
            {stack.map((item) => (
              <strong key={item}>{item}</strong>
            ))}
          </div>
        </div>
        <div className={styles.featurePanel}>
          <span className={styles.eyebrow}>Global Features</span>
          <ul>
            <li>Light and dark mode ready</li>
            <li>PWA-ready Vercel deployment</li>
            <li>Secure, scalable workflow path</li>
            <li>SEO and speed optimized</li>
            <li>AI-powered automation direction</li>
          </ul>
        </div>
        <div className={styles.brandPanel}>
          <span className={styles.logoMark} aria-hidden="true" />
          <strong>Strategic Minds</strong>
          <span>Advisory</span>
          <p>Intelligence In Motion</p>
        </div>
      </section>
    </main>
  );
}
