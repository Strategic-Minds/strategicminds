import styles from '../../access.module.css';

export default function PaymentCancelPage() {
  return (
    <main className={styles.shell}>
      <nav className={styles.nav}>
        <a className={styles.brand} href="/">
          Strategic Minds Advisory
          <span>Payment Cancelled</span>
        </a>
        <div className={styles.navLinks}>
          <a href="/payment">Packages</a>
          <a href="/">Website</a>
        </div>
      </nav>
      <section className={`${styles.hero} ${styles.compactPage}`}>
        <div>
          <span className={styles.eyebrow}>Payment gate paused</span>
          <h1>No payment was completed.</h1>
          <p className={styles.muted}>You can return to the package page when you are ready to restart secure checkout.</p>
          <a className={`${styles.button} ${styles.primary}`} href="/payment">Return to Packages</a>
        </div>
      </section>
    </main>
  );
}
