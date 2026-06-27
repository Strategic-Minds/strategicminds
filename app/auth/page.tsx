import styles from '../access.module.css';

const statusMessages: Record<string, string> = {
  'supabase-not-configured': 'Supabase is not configured yet. Add the project URL and publishable key in Vercel to activate sign in.',
  'magic-link-sent': 'Magic link requested. Check your email for the secure login link.',
  'auth-failed': 'Sign in did not complete. Check the email and password or request a magic link.',
  'signed-out': 'You have been signed out of the preview session.'
};

export const dynamic = 'force-dynamic';

export default async function AuthPage({ searchParams }: { searchParams?: Promise<{ status?: string }> }) {
  const params = await searchParams;
  const status = params?.status;
  const message = status ? statusMessages[status] : null;

  return (
    <main className={styles.shell}>
      <nav className={styles.nav}>
        <a className={styles.brand} href="/">
          Strategic Minds Advisory
          <span>Supabase Auth</span>
        </a>
        <div className={styles.navLinks}>
          <a href="/">Website</a>
          <a href="/payment">Payment</a>
          <a href="/client">Client Journey</a>
        </div>
      </nav>

      <section className={styles.hero}>
        <div>
          <span className={styles.eyebrow}>Secure client access</span>
          <h1>Sign in to your gated AI build.</h1>
          <p className={styles.muted}>Supabase Auth will manage client access once the project URL and publishable key are added in Vercel.</p>
        </div>

        <div className={styles.panel}>
          {message ? <div className={styles.notice}>{message}</div> : null}

          <form className={styles.form} action="/api/auth/supabase-login" method="post">
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" placeholder="you@company.com" required />

            <label htmlFor="password">Password</label>
            <input id="password" name="password" type="password" placeholder="Your password" required />

            <button className={`${styles.button} ${styles.primary}`} type="submit">Sign In</button>
          </form>

          <form className={`${styles.form} ${styles.compact}`} action="/api/auth/supabase-magic-link" method="post">
            <label htmlFor="magic-email">Or send a magic link</label>
            <input id="magic-email" name="email" type="email" placeholder="you@company.com" required />
            <button className={styles.button} type="submit">Send Magic Link</button>
          </form>
        </div>
      </section>
    </main>
  );
}
