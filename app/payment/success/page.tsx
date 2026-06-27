import styles from '../../access.module.css';

export default function PaymentSuccessPage() {
  return (
    <main className={styles.shell}>
      <nav className={styles.nav}>
        <a className={styles.brand} href="/">
          Strategic Minds Advisory
          <span>Payment Complete</span>
        </a>
        <div className={styles.navLinks}>
          <a href="/client">Client Journey</a>
          <a href="/auth">Sign In</a>
        </div>
      </nav>
      <section className={`${styles.hero} ${styles.compactPage}`}>
        <div>
          <span className={styles.eyebrow}>Gate cleared</span>
          <h1>Payment received.</h1>
          <p className={styles.muted}>Your secure payment step is complete. The next gate is scheduling the strategy call and sharing your build brief.</p>
          <div className={styles.actionRow}>
            <a className={`${styles.button} ${styles.primary}`} href="/client">Open Client Journey</a>
            <a className={styles.button} href="/auth">Sign In</a>
          </div>
        </div>
      </section>
    </main>
  );
}
