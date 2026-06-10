export default function DashboardPage() {
  const cards = ['Client Intake', 'Stripe Test Mode', 'AUTO_BUILDER Queue', 'Validation Gate'];

  return (
    <main style={{ minHeight: '100vh', background: '#050816', color: '#f8fafc', fontFamily: 'Arial, sans-serif', padding: '48px 24px' }}>
      <section style={{ maxWidth: '1120px', margin: '0 auto' }}>
        <p style={{ color: '#60a5fa', fontSize: '12px', fontWeight: 700, letterSpacing: '0.28em', textTransform: 'uppercase' }}>Command Center</p>
        <h1 style={{ fontSize: '44px', marginTop: '16px', marginBottom: '16px' }}>Strategic Minds Dashboard</h1>
        <p style={{ color: '#cbd5e1', maxWidth: '720px', lineHeight: 1.7 }}>Preview-only operating interface for onboarding clients, collecting test payments, scheduling, validating workflows, and tracking delivery.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px', marginTop: '32px' }}>
          {cards.map((card) => (
            <div key={card} style={{ border: '1px solid #1e293b', background: '#0f172a', borderRadius: '24px', padding: '20px' }}>
              <h2 style={{ margin: 0, fontSize: '18px' }}>{card}</h2>
              <p style={{ marginBottom: 0, color: '#94a3b8' }}>Queued for governed automation.</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
