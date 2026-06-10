const phases = ['Intake', 'Payment', 'Schedule', 'Plan', 'Build', 'Validate', 'Launch'];

export default function HomePage() {
  return (
    <main style={{ minHeight: '100vh', background: '#050816', color: '#f8fafc', fontFamily: 'Arial, sans-serif' }}>
      <section style={{ maxWidth: '1120px', margin: '0 auto', padding: '64px 24px', minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
        <div style={{ display: 'grid', gap: '40px', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', width: '100%' }}>
          <div>
            <p style={{ marginBottom: '16px', fontSize: '12px', fontWeight: 700, letterSpacing: '0.28em', textTransform: 'uppercase', color: '#60a5fa' }}>Strategic Minds Advisory</p>
            <h1 style={{ margin: 0, fontSize: 'clamp(40px, 8vw, 72px)', lineHeight: 1, fontWeight: 800 }}>Client Operating System powered by AUTO_BUILDER.</h1>
            <p style={{ marginTop: '24px', maxWidth: '680px', fontSize: '18px', lineHeight: 1.7, color: '#cbd5e1' }}>
              A governed intake, payment, planning, build, validation, and approval interface for launching client systems without legacy-code drift.
            </p>
            <div style={{ marginTop: '32px', display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              <a href="/dashboard" style={{ borderRadius: '999px', background: '#2563eb', padding: '12px 24px', fontSize: '14px', fontWeight: 700, color: '#ffffff' }}>Open Dashboard</a>
              <a href="/api/health" style={{ borderRadius: '999px', border: '1px solid #334155', padding: '12px 24px', fontSize: '14px', fontWeight: 700, color: '#e2e8f0' }}>Health Check</a>
            </div>
          </div>
          <div style={{ borderRadius: '28px', border: '1px solid #1e293b', background: '#0f172a', padding: '20px' }}>
            <div style={{ marginBottom: '20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span style={{ fontSize: '14px', fontWeight: 700, color: '#cbd5e1' }}>Workflow Status</span>
              <span style={{ borderRadius: '999px', background: 'rgba(37, 99, 235, 0.18)', padding: '4px 12px', fontSize: '12px', fontWeight: 700, color: '#93c5fd' }}>Preview Only</span>
            </div>
            <div style={{ display: 'grid', gap: '12px' }}>
              {phases.map((phase, index) => (
                <div key={phase} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderRadius: '18px', border: '1px solid #1e293b', background: '#111827', padding: '12px 16px' }}>
                  <span style={{ fontSize: '14px', color: '#e2e8f0' }}>{index + 1}. {phase}</span>
                  <span style={{ fontSize: '12px', color: '#94a3b8' }}>Queued</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
