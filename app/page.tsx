import styles from './homepage.module.css';

const cx = (...classes: Array<string | false | undefined>) => classes.filter(Boolean).join(' ');

const services = [
  {
    name: 'Website Launch',
    price: 'From $497',
    text: 'A focused Vercel site with sharp positioning, responsive pages, contact routing, and a clean launch checklist.'
  },
  {
    name: 'Workflow Automation',
    price: 'From $1,497',
    text: 'Intake, follow-up, project movement, approvals, and receipt paths mapped into a practical operating flow.'
  },
  {
    name: 'Client Portal',
    price: 'From $2,997',
    text: 'A private client workspace for progress, files, requests, meetings, approvals, and next-step visibility.',
    featured: true
  },
  {
    name: 'Business System Build',
    price: 'Scoped build',
    text: 'A full website, portal, admin view, automation plan, and handoff packet for a launch-ready business system.'
  }
];

const setupItems = [
  ['Homepage', 'A polished first impression with clear offer, CTA, and mobile-first layout.'],
  ['Intake Flow', 'Lead capture and request routing prepared for the next automation step.'],
  ['Client Portal', 'A simple place for progress, documents, requests, and approvals.'],
  ['Workflow Layer', 'Preview-safe automation logic for handoffs, receipts, and review gates.'],
  ['Vercel Preview', 'Branch-safe changes can be reviewed before production release.'],
  ['Launch Handoff', 'A checklist for DNS, forms, analytics, payment readiness, and rollback.']
];

const process = [
  ['01', 'Clarify', 'We turn the idea, offer, and audience into a focused website plan.'],
  ['02', 'Build', 'The homepage, portal path, and core workflow are assembled on Vercel.'],
  ['03', 'Review', 'You approve copy, layout, routing, launch gates, and client-facing details.'],
  ['04', 'Launch', 'Production release happens only after the preview is checked and approved.']
];

export default function HomePage() {
  return (
    <main className={styles.siteShell}>
      <nav className={styles.siteNav} aria-label="Main navigation">
        <a className={styles.brand} href="/">
          Strategic Minds Advisory
          <span>Vercel Website Systems</span>
        </a>
        <div className={styles.navLinks}>
          <a href="#services">Services</a>
          <a href="#setup">Setup</a>
          <a href="#process">Process</a>
          <a href="/client">Client Portal</a>
          <a className={cx(styles.btn, styles.primary)} href="#contact">Start</a>
        </div>
      </nav>

      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <span className={styles.eyebrow}>Vercel-first website setup</span>
          <h1>Strategic Minds Advisory</h1>
          <p>
            Websites, client portals, and automation-ready workflows for service businesses that need a cleaner path from idea to launch.
          </p>
          <div className={styles.actions}>
            <a className={cx(styles.btn, styles.primary)} href="mailto:strategicmindsadvisory@gmail.com">Request a build</a>
            <a className={styles.btn} href="#services">View services</a>
          </div>
          <div className={styles.heroProof} aria-label="Delivery principles">
            <span>Preview-first builds</span>
            <span>Approval-gated launches</span>
            <span>Client-ready handoff</span>
          </div>
        </div>
      </section>

      <section id="services" className={cx(styles.section, styles.lightBand)}>
        <span className={styles.eyebrow}>Services</span>
        <h2 className={styles.sectionTitle}>A website that can become the operating layer for the business.</h2>
        <p className={styles.sectionCopy}>
          Start with the homepage and grow into the portal, intake, approvals, documents, and automation paths as the business gets traction.
        </p>
        <div className={styles.offerGrid}>
          {services.map((service) => (
            <article className={cx(styles.offer, service.featured && styles.featured)} key={service.name}>
              <div>
                <h3>{service.name}</h3>
                <p>{service.text}</p>
              </div>
              <div>
                <div className={styles.price}>{service.price}</div>
                <a className={cx(styles.btn, service.featured ? styles.primary : styles.dark)} href="#contact">Start here</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="setup" className={cx(styles.section, styles.setupBand)}>
        <div className={styles.setupCopy}>
          <span className={styles.eyebrow}>Website setup</span>
          <h2 className={styles.sectionTitle}>Built for Vercel previews, clean handoff, and safe launch decisions.</h2>
          <p className={styles.sectionCopy}>
            The stack stays simple on the outside and governed behind the scenes: website, portal, intake, workflow notes, and launch readiness in one path.
          </p>
        </div>
        <div className={styles.setupGrid}>
          {setupItems.map(([title, text]) => (
            <div className={styles.setupItem} key={title}>
              <strong>{title}</strong>
              <span>{text}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="process" className={cx(styles.section, styles.lightBand)}>
        <span className={styles.eyebrow}>Process</span>
        <h2 className={styles.sectionTitle}>Move from idea to working website without losing control of the launch.</h2>
        <div className={styles.processGrid}>
          {process.map(([number, title, text]) => (
            <div className={styles.processStep} key={number}>
              <span>{number}</span>
              <strong>{title}</strong>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className={cx(styles.section, styles.finalCta)}>
        <div>
          <span className={styles.eyebrow}>Start the build</span>
          <h2 className={styles.sectionTitle}>Set up the website, then connect the workflow that helps it run.</h2>
          <p className={styles.sectionCopy}>
            Send the idea, the offer, or the current site problem. The next step is a preview-safe homepage and setup path.
          </p>
          <div className={styles.actions}>
            <a className={cx(styles.btn, styles.primary)} href="mailto:strategicmindsadvisory@gmail.com">Email Strategic Minds</a>
            <a className={styles.btn} href="/client">Open client portal</a>
          </div>
        </div>
      </section>
    </main>
  );
}
