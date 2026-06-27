import styles from './homepage.module.css';

const cx = (...classes: Array<string | false | undefined>) => classes.filter(Boolean).join(' ');

const outcomes = [
  ['Look trustworthy fast', 'A sharp first impression makes people feel safer reaching out.'],
  ['Make the next step obvious', 'Visitors know what you do, who you help, and how to contact you.'],
  ['Stop losing follow-up', 'Your dashboard keeps requests, calls, and next steps in one place.']
];

const steps = [
  ['01', 'Tell us what you sell'],
  ['02', 'Review your preview'],
  ['03', 'Launch when approved']
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
          <a href="#outcomes">What You Get</a>
          <a href="#process">How It Works</a>
          <a href="/client">Client Login</a>
          <a className={cx(styles.btn, styles.primary)} href="mailto:strategicmindsadvisory@gmail.com?subject=Website%20strategy%20call">
            Book a Call
          </a>
        </div>
      </nav>

      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <span className={styles.eyebrow}>Websites for business owners</span>
          <h1>Strategic Minds Advisory</h1>
          <p className={styles.promise}>
            A clean, high-tech website that helps people understand your business, trust you faster, and book the next call.
          </p>
          <div className={styles.actions}>
            <a className={cx(styles.btn, styles.primary)} href="mailto:strategicmindsadvisory@gmail.com?subject=Build%20my%20website%20funnel">
              Book a Free Strategy Call
            </a>
            <a className={styles.btn} href="#outcomes">
              See What Changes
            </a>
          </div>
        </div>

        <div className={styles.heroVisual} aria-label="Simple website funnel">
          <div className={styles.signalLine}>
            <span>Clear offer</span>
            <strong>People get it fast.</strong>
          </div>
          <div className={styles.signalLine}>
            <span>Stronger trust</span>
            <strong>Your business looks ready.</strong>
          </div>
          <div className={styles.signalLine}>
            <span>Booked calls</span>
            <strong>The next step is easy.</strong>
          </div>
        </div>
      </section>

      <section id="outcomes" className={styles.outcomes}>
        <div className={styles.sectionIntro}>
          <span className={styles.eyebrow}>What changes</span>
          <h2>Less confusion. More confidence. More people ready to talk.</h2>
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
          <h2>Built on Vercel. Previewed first. Launched only when you approve.</h2>
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
        <span className={styles.eyebrow}>Ready for a cleaner site?</span>
        <h2>Make your business easier to understand and easier to contact.</h2>
        <a className={cx(styles.btn, styles.primary)} href="mailto:strategicmindsadvisory@gmail.com?subject=Start%20my%20Strategic%20Minds%20website">
          Start My Website
        </a>
      </section>
    </main>
  );
}
