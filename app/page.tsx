import styles from './homepage.module.css';

const cx = (...classes: Array<string | false | undefined>) => classes.filter(Boolean).join(' ');

const services = [
  ['AI Automation', 'Replace repetitive follow-up, intake, reminders, and admin work with simple AI workflows.'],
  ['Websites & Funnels', 'Launch a clear website that explains your offer, builds trust, and turns visitors into booked calls.'],
  ['Client Dashboards', 'Give clients one clean place to see progress, payments, documents, meetings, and next steps.'],
  ['Business Systems', 'Connect the pieces: planning, payment, delivery, approvals, reports, and ongoing support.']
];

const journey = [
  ['01', 'Choose Package'],
  ['02', 'Secure Payment'],
  ['03', 'Schedule Call'],
  ['04', 'Share Your Idea'],
  ['05', 'We Plan'],
  ['06', 'MVP Build'],
  ['07', 'Review'],
  ['08', 'Launch'],
  ['09', 'Updates'],
  ['10', 'Scale']
];

const packages = [
  ['Starter', '$497', 'AI strategy call, workflow audit, and a clear action plan.'],
  ['Growth', '$1,497', 'Automation setup for intake, follow-up, and client communication.', true],
  ['Pro', '$2,997', 'Website, dashboard structure, backend plan, and launch-ready MVP.'],
  ['Enterprise', '$5,997+', 'Full business system with gated workflow, admin visibility, and support.']
];

const reasons = [
  ['Clear strategy', 'You know what we are building, why it matters, and what happens next.'],
  ['Approval gates', 'Nothing important goes live until it is reviewed and approved.'],
  ['Useful AI', 'No confusing tech theater. Just systems that save time and help you grow.'],
  ['Ongoing improvement', 'The system keeps getting cleaner, faster, and easier to operate.']
];

export default function HomePage() {
  return (
    <main className={styles.siteShell}>
      <nav className={styles.siteNav} aria-label="Main navigation">
        <a className={styles.brand} href="/">
          <span className={styles.logoMark} aria-hidden="true" />
          <span>
            <strong>Strategic Minds</strong>
            <small>Advisory</small>
          </span>
        </a>
        <div className={styles.navLinks}>
          <a href="#services">Services</a>
          <a href="#packages">Packages</a>
          <a href="#process">How It Works</a>
          <a href="/auth">Client Login</a>
          <a className={cx(styles.btn, styles.primary)} href="mailto:strategicmindsadvisory@gmail.com?subject=Book%20my%20AI%20strategy%20call">
            Schedule a Call
          </a>
        </div>
      </nav>

      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <span className={styles.eyebrow}>AI-powered. Automated. Results driven.</span>
          <h1>We Build AI Systems That Grow Your Business.</h1>
          <p className={styles.promise}>
            We help business owners save time, capture more leads, follow up faster, and launch clean websites, dashboards, and automations their teams can actually use.
          </p>
          <div className={styles.actions}>
            <a className={cx(styles.btn, styles.primary)} href="mailto:strategicmindsadvisory@gmail.com?subject=Schedule%20my%20AI%20strategy%20call">
              Schedule a Call
            </a>
            <a className={styles.btn} href="#packages">
              View Packages
            </a>
          </div>
          <div className={styles.heroBadges} aria-label="Strategic Minds highlights">
            <span>AI Automation</span>
            <span>Fast Delivery</span>
            <span>Clear Process</span>
            <span>Built for Growth</span>
          </div>
        </div>

        <div className={styles.heroVisual} aria-label="Electric AI profile">
          <img className={styles.heroImage} src="/strategic-ai-hero.svg" alt="Electric blue AI human profile" />
        </div>
      </section>

      <section id="services" className={styles.section}>
        <div className={styles.centerIntro}>
          <span className={styles.eyebrow}>What we do</span>
          <h2>AI solutions that drive real business results.</h2>
          <p>Simple systems for the places where businesses lose time, leads, and clarity.</p>
        </div>
        <div className={styles.cardGrid}>
          {services.map(([title, text]) => (
            <article className={styles.card} key={title}>
              <span className={styles.iconDot} />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="process" className={cx(styles.section, styles.processSection)}>
        <div className={styles.centerIntro}>
          <span className={styles.eyebrow}>Our proven process</span>
          <h2>Your 10 step journey to automation.</h2>
          <p>You always know where the project stands, what is approved, and what happens next.</p>
        </div>
        <div className={styles.journeyRail}>
          {journey.map(([number, label]) => (
            <div className={styles.journeyStep} key={label}>
              <span>{number}</span>
              <strong>{label}</strong>
            </div>
          ))}
        </div>
      </section>

      <section id="packages" className={styles.section}>
        <div className={styles.centerIntro}>
          <span className={styles.eyebrow}>Pick the right package</span>
          <h2>Simple. Transparent. Powerful.</h2>
        </div>
        <div className={styles.packageGrid}>
          {packages.map(([name, price, text, featured]) => (
            <article className={cx(styles.packageCard, featured && styles.featured)} key={name as string}>
              {featured && <span className={styles.popular}>Most Popular</span>}
              <h3>{name}</h3>
              <strong>{price}</strong>
              <p>{text}</p>
              <a className={cx(styles.btn, featured && styles.primary)} href="/payment">
                Get Started
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className={cx(styles.section, styles.whySection)}>
        <div className={styles.centerIntro}>
          <span className={styles.eyebrow}>Why businesses choose us</span>
          <h2>Built to be clear, useful, and approved one gate at a time.</h2>
        </div>
        <div className={styles.reasonGrid}>
          {reasons.map(([title, text]) => (
            <article className={styles.reason} key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.finalCta}>
        <span className={styles.iconDot} />
        <h2>Ready to transform your business?</h2>
        <p>Schedule a free strategy call and let’s map your automated future.</p>
        <a className={cx(styles.btn, styles.primary)} href="mailto:strategicmindsadvisory@gmail.com?subject=Schedule%20my%20AI%20strategy%20call">
          Schedule a Call
        </a>
      </section>

      <footer className={styles.footer}>
        <a className={styles.brand} href="/">
          <span className={styles.logoMark} aria-hidden="true" />
          <span>
            <strong>Strategic Minds</strong>
            <small>Advisory</small>
          </span>
        </a>
        <p>AI-powered systems, websites, dashboards, and automations for growing businesses.</p>
        <div>
          <a href="/auth">Client Login</a>
          <a href="/payment">Payments</a>
          <a href="/client">Client Portal</a>
        </div>
      </footer>
    </main>
  );
}
