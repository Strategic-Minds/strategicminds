import styles from './homepage.module.css';

const cx = (...classes: Array<string | false | undefined>) => classes.filter(Boolean).join(' ');

const outcomes = [
  'More qualified leads',
  'More booked calls',
  'Less manual follow-up',
  'A website you can proudly send people to'
];

const services = [
  ['High-converting website', 'A clean homepage that explains what you do, why it matters, and how to take the next step.'],
  ['Client-ready dashboard', 'A simple place for clients to see progress, requests, meetings, documents, and next steps.'],
  ['Smart follow-up system', 'Automated reminders, request tracking, and lead follow-up so fewer opportunities fall through.'],
  ['Launch and growth plan', 'A practical plan for offers, content, calls, and next improvements after the site goes live.']
];

const steps = [
  ['1', 'Tell us what you sell', 'We learn your offer, ideal customer, current bottlenecks, and what you want the site to do.'],
  ['2', 'We design the funnel', 'Your page gets clear sections, simple words, strong calls to action, and a lead path.'],
  ['3', 'We build it on Vercel', 'You get a fast website, installable app experience, dashboard, and admin workspace.'],
  ['4', 'You approve launch', 'Nothing goes live until you review the preview and approve the final release.']
];

const packages = [
  ['Website Fix', 'For owners who need a better homepage now.', 'Homepage strategy, clearer copy, stronger call-to-action, and Vercel preview.'],
  ['Website + Dashboard', 'For service businesses that want a smoother client experience.', 'Homepage, client dashboard, admin workspace, request flow, and launch checklist.'],
  ['Business System', 'For owners ready to automate follow-up and delivery.', 'Website funnel, dashboard, admin console, automations, PWA setup, and operating guide.']
];

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
          <a href="#services">What You Get</a>
          <a href="#process">How It Works</a>
          <a href="#packages">Packages</a>
          <a href="/client">Client Login</a>
          <a className={cx(styles.btn, styles.primary)} href="mailto:strategicmindsadvisory@gmail.com?subject=Website%20strategy%20call">Book a Call</a>
        </div>
      </nav>

      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <span className={styles.eyebrow}>Websites and automation for business owners</span>
          <h1>A website that turns visitors into booked calls.</h1>
          <p>
            We build clean, high-tech websites that explain your value fast, make your business look trustworthy,
            and guide people to contact you without confusion.
          </p>
          <div className={styles.actions}>
            <a className={cx(styles.btn, styles.primary)} href="mailto:strategicmindsadvisory@gmail.com?subject=I%20want%20a%20website%20that%20gets%20more%20leads">Book a Free Strategy Call</a>
            <a className={styles.btn} href="#packages">See Packages</a>
          </div>
          <div className={styles.heroBadges} aria-label="Business outcomes">
            {outcomes.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>

        <div className={styles.heroVisual} aria-label="Lead funnel preview">
          <div className={styles.funnelCard}>
            <span>New Website Visitor</span>
            <strong>They understand your offer in 5 seconds.</strong>
          </div>
          <div className={cx(styles.funnelCard, styles.funnelCardTwo)}>
            <span>Clear Next Step</span>
            <strong>They book a call or send a request.</strong>
          </div>
          <div className={cx(styles.funnelCard, styles.funnelCardThree)}>
            <span>Automatic Follow-Up</span>
            <strong>Your dashboard tracks the lead and next action.</strong>
          </div>
          <div className={styles.signalPanel}>
            <span>Simple Funnel</span>
            <strong>Visit -&gt; Trust -&gt; Contact -&gt; Follow-up -&gt; Sale</strong>
          </div>
        </div>
      </section>

      <section id="services" className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.eyebrow}>What you get</span>
          <h2>Your business explained clearly, beautifully, and built to capture real opportunities.</h2>
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

      <section id="process" className={styles.processBand}>
        <div className={styles.sectionHeader}>
          <span className={styles.eyebrow}>How it works</span>
          <h2>A simple path from idea to a working website system.</h2>
        </div>
        <div className={styles.stepGrid}>
          {steps.map(([number, title, text]) => (
            <div className={styles.stepItem} key={title}>
              <strong>{number}</strong>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="packages" className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.eyebrow}>Packages</span>
          <h2>Pick the level that matches where your business is today.</h2>
        </div>
        <div className={styles.packageGrid}>
          {packages.map(([title, fit, text], index) => (
            <article className={cx(styles.packageCard, index === 1 && styles.featuredPackage)} key={title}>
              <span>{fit}</span>
              <h3>{title}</h3>
              <p>{text}</p>
              <a className={cx(styles.btn, index === 1 && styles.primary)} href={`mailto:strategicmindsadvisory@gmail.com?subject=${encodeURIComponent(title + ' package')}`}>
                Ask About This
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.finalCta}>
        <div>
          <span className={styles.eyebrow}>Ready for a better first impression?</span>
          <h2>Let your website explain the value, build trust, and bring the next client closer.</h2>
          <p>Send a quick message and we will map the first version of your website funnel.</p>
          <div className={styles.actions}>
            <a className={cx(styles.btn, styles.primary)} href="mailto:strategicmindsadvisory@gmail.com?subject=Build%20my%20website%20funnel">Start My Website Funnel</a>
            <a className={styles.btn} href="/client">View Client Dashboard</a>
          </div>
        </div>
      </section>
    </main>
  );
}
