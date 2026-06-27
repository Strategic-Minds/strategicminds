import styles from '../access.module.css';

const plans = [
  {
    id: 'audit',
    name: 'AI Opportunity Audit',
    price: '$497',
    detail: 'Find the best first AI workflow for your business.',
    bullets: ['90-minute strategy call', 'Workflow audit', 'Priority opportunity map', 'Next-step action plan']
  },
  {
    id: 'sprint',
    name: 'Workflow Automation Sprint',
    price: '$1,497',
    detail: 'Automate one practical workflow and train your team.',
    bullets: ['Automation setup', 'Lead or intake workflow', 'Team walkthrough', 'Support checklist']
  },
  {
    id: 'mvp',
    name: 'MVP System Build',
    price: '$2,997',
    detail: 'Build the first usable system behind your AI offer.',
    bullets: ['Website or workflow MVP', 'Client dashboard path', 'Two revision rounds', 'Launch checklist']
  },
  {
    id: 'operating-system',
    name: 'Full AI Operating System',
    price: '$5,997+',
    detail: 'Build, launch, automate, and improve the full system.',
    bullets: ['Everything in MVP', 'Advanced automations', 'Admin workflow', 'Priority support']
  }
];

const statusMessages: Record<string, string> = {
  'setup-required': 'Stripe is not configured yet. Add STRIPE_SECRET_KEY and the matching Stripe Price ID env vars in Vercel to activate checkout.',
  cancelled: 'Checkout was cancelled. Choose a package when you are ready.',
  error: 'Stripe checkout could not start. Check the Stripe configuration and price IDs.'
};

export const dynamic = 'force-dynamic';

export default async function PaymentPage({ searchParams }: { searchParams?: Promise<{ status?: string }> }) {
  const params = await searchParams;
  const status = params?.status;
  const message = status ? statusMessages[status] : null;

  return (
    <main className={styles.shell}>
      <nav className={styles.nav}>
        <a className={styles.brand} href="/">
          Strategic Minds Advisory
          <span>Stripe Checkout</span>
        </a>
        <div className={styles.navLinks}>
          <a href="/">Website</a>
          <a href="/auth">Sign In</a>
          <a href="/client">Client Journey</a>
        </div>
      </nav>

      <section className={styles.paymentHero}>
        <span className={styles.eyebrow}>Secure payment gate</span>
        <h1>Choose the package that starts your AI build.</h1>
        <p className={styles.muted}>Stripe Checkout will collect payment once the live or test Stripe environment variables are configured.</p>
        {message ? <div className={styles.notice}>{message}</div> : null}
      </section>

      <section className={styles.paymentGrid} aria-label="AI consulting packages">
        {plans.map((plan, index) => (
          <article className={index === 2 ? `${styles.planCard} ${styles.featured}` : styles.planCard} key={plan.id}>
            <span className={styles.badge}>{index === 2 ? 'Most popular' : `Gate ${index + 1}`}</span>
            <h2>{plan.name}</h2>
            <strong>{plan.price}</strong>
            <p>{plan.detail}</p>
            <ul>
              {plan.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
            <form action="/api/payments/checkout" method="post">
              <input type="hidden" name="plan" value={plan.id} />
              <label htmlFor={`${plan.id}-email`}>Receipt email</label>
              <input id={`${plan.id}-email`} name="email" type="email" placeholder="you@company.com" />
              <button className={`${styles.button} ${styles.primary}`} type="submit">Start Secure Checkout</button>
            </form>
          </article>
        ))}
      </section>
    </main>
  );
}
