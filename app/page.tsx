import styles from './homepage.module.css';

const cx = (...classes: Array<string | false | undefined>) => classes.filter(Boolean).join(' ');

const outcomes = [
  ['Save time every week', 'We find the repetitive work AI can handle first, so your team can focus on higher-value work.'],
  ['Capture more leads', 'Simple AI workflows can help with intake, follow-up, reminders, and missed opportunities.'],
  ['See the business clearly', 'Clean dashboards make calls, clients, tasks, and next steps easier to track.']
];

const steps = [
  ['01', 'Choose package'],
  ['02', 'Secure payment'],
  ['03', 'Build and approve'],
  ['04', 'Launch and optimize']
];

export default function HomePage() {
  return (
    <main className={styles.siteShell}>
      <nav className={styles.siteNav} aria-label="Main navigation">
        <a className={styles.brand} href="/">
          <span className={styles.logoMark} aria-hidden="true" />
          <span>
            <strong>Strategic Minds</strong>
            <small>AI Consulting</small>
          </span>
        </a>
        <div className={styles.navLinks}>
          <a href="#work">Work</a>
          <a href="#process">Process</a>
          <a href="/payment">Payment</a>
          <a href="/auth">Sign In</a>
          <a href="/client">Client Portal</a>
          <a className={cx(styles.btn, styles.primary)} href="mailto:strategicmindsadvisory@gmail.com?subject=AI%20strategy%20call">
            Book a Call
          </a>
        </div>
      </nav>

      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <span className={styles.eyebrow}>Strategic Minds Advisory</span>
          <h1>AI Consulting for Business Owners</h1>
          <p className={styles.promise}>
            We help you use AI to save time, follow up faster, clean up operations, and launch simple systems your team can actually use.
          </p>
          <div className={styles.actions}>
            <a className={cx(styles.btn, styles.primary)} href="mailto:strategicmindsadvisory@gmail.com?subject=Book%20my%20AI%20strategy%20call">
              Book an AI Strategy Call
            </a>
            <a className={styles.btn} href="#work">
              See What We Fix
            </a>
          </div>
        </div>

        <div className={styles.heroVisual} aria-label="AI consulting focus">
          <img className={styles.heroImage} src="/strategic-ai-hero.svg" alt="Electric AI profile with ten-step gated client journey" />
        </div>
      </section>

      <section id="work" className={styles.outcomes}>
        <div className={styles.sectionIntro}>
          <span className={styles.eyebrow}>What we fix</span>
          <h2>Less busywork. Faster response. Better visibility.</h2>
        </div>
        <div className={styles.outcomeGrid}>
          {outcomes.map(([title, text]) => (
            <article className={styles.outcome} key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="process" className={styles.process}>
        <div className={styles.sectionIntro}>
          <span className={styles.eyebrow}>Simple process</span>
          <h2>A gated path from idea to paid build to launch.</h2>
        </div>
        <div className={styles.stepRail}>
          {steps.map(([number, title]) => (
            <div className={styles.step} key={title}>
              <span>{number}</span>
              <strong>{title}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.finalCta}>
        <span className={styles.eyebrow}>Ready to make AI useful?</span>
        <h2>Choose your package, secure your spot, and move through the build one gate at a time.</h2>
        <a className={cx(styles.btn, styles.primary)} href="/payment">
          View Packages
        </a>
      </section>
    </main>
  );
}
