const journey = ['Choose Your Package','Secure Payment','Schedule Your Call','Share Your Idea','We Plan Your System','MVP Development','Review & Feedback','Launch Your System','Automated Updates','Scale & Optimize'];
const packages = [
  ['1. Business Planning Consultation','$497',['90 Min Strategy Call','Business Audit','Custom Action Plan','Recommendations']],
  ['2. Workflow Automation Package','$1,497',['Workflow Audit','Automation Setup','System Integrations','Training & Support']],
  ['3. MVP System Build Package','$2,997',['Custom MVP Build','Database & Backend','Frontend / Website','2 Revisions Included']],
  ['4. Full Business System Package','$5,997+',['Everything in MVP','Advanced Automations','Team Training','Priority & Support']]
];
const workspace = ['Gmail','Google Drive','Google Calendar','Google Sheets','Google Docs','Google Meet'];

export default function HomePage() {
  return (
    <main style={{ background: '#f8fbff', color: '#06122b', fontFamily: 'Arial, sans-serif', minHeight: '100vh' }}>
      <nav style={{ height: 76, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 44px', background: 'white' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, fontWeight: 900 }}><span style={{ fontSize: 28 }}>◎</span><span>STRATEGIC MINDS<br/><small style={{ letterSpacing: 4 }}>ADVISORY</small></span></div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 28, fontSize: 12, fontWeight: 800 }}>
          {['HOME','SERVICES','PACKAGES','HOW IT WORKS','ABOUT'].map((item) => <a key={item}>{item}</a>)}
          <a href="/schedule" style={{ background: '#1557d8', color: 'white', padding: '14px 22px', borderRadius: 8 }}>SCHEDULE A CALL</a>
          <a href="/dashboard" style={{ border: '1px solid #cbd5e1', padding: '13px 20px', borderRadius: 8 }}>CLIENT LOGIN</a>
        </div>
      </nav>
      <section style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1.8fr', gap: 34, padding: '42px 58px 34px', alignItems: 'center' }}>
        <div>
          <p style={{ display: 'inline-block', background: '#eaf1ff', color: '#1557d8', borderRadius: 12, padding: '9px 14px', fontSize: 12, fontWeight: 900 }}>AI-POWERED. AUTOMATED. RESULTS DRIVEN.</p>
          <h1 style={{ fontSize: 50, lineHeight: 1.08, margin: '24px 0 18px', fontWeight: 900 }}>We Turn Ideas Into <span style={{ color: '#1557d8' }}>Automated, AI-Powered</span> Business Systems.</h1>
          <p style={{ color: '#334155', fontSize: 18, lineHeight: 1.6 }}>From planning to automation, we build your systems, workflows, websites, and content engines so you can focus on growth.</p>
          <div style={{ display: 'flex', gap: 18, marginTop: 26 }}><a style={{ background: '#1557d8', color: 'white', padding: '16px 30px', borderRadius: 8, fontWeight: 900 }}>SCHEDULE A CALL</a><a style={{ background: 'white', border: '1px solid #cbd5e1', padding: '16px 30px', borderRadius: 8, fontWeight: 900 }}>VIEW PACKAGES</a></div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ width: 230, height: 230, margin: '0 auto', border: '2px dashed #c7d2fe', borderRadius: '50%', display: 'grid', placeItems: 'center', background: 'white' }}><div style={{ width: 120, height: 120, border: '5px solid #1557d8', borderRadius: 28, display: 'grid', placeItems: 'center', fontSize: 56 }}>🧠</div></div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginTop: 10, fontWeight: 800, fontSize: 12 }}><span>Strategy & Planning</span><span>Build & Automate</span><span>Optimize & Scale</span><span>Deliver & Launch</span></div>
        </div>
        <div>
          <h2 style={{ textAlign: 'center', fontSize: 24, marginBottom: 32 }}>THE 10 STEP CLIENT JOURNEY</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(10, 1fr)', gap: 10 }}>
            {journey.map((step, i) => <div key={step} style={{ textAlign: 'center' }}><div style={{ margin: '0 auto 10px', width: 46, height: 46, borderRadius: '50%', background: i < 3 ? '#1fb06b' : '#1557d8', color: 'white', display: 'grid', placeItems: 'center', fontWeight: 900 }}>{i+1}</div><strong style={{ display: 'block', fontSize: 12 }}>{step}</strong><p style={{ color: '#475569', fontSize: 11, lineHeight: 1.35 }}>{i === 0 ? 'Select the right package.' : i === 1 ? 'Make payment to start.' : i === 2 ? 'Pick a time.' : 'Move through the system.'}</p></div>)}
          </div>
        </div>
      </section>
      <section style={{ margin: '20px 38px', background: 'white', border: '1px solid #dbe3ef', borderRadius: 16, padding: 26 }}>
        <h2 style={{ textAlign: 'center', fontSize: 18, marginBottom: 26 }}>CHOOSE THE RIGHT PACKAGE FOR YOUR BUSINESS</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 18 }}>
          {packages.map((p, i) => <article key={p[0] as string} style={{ border: '1px solid #dbe3ef', borderRadius: 14, padding: 24, boxShadow: '0 14px 40px rgba(15,23,42,.06)', position: 'relative' }}>{i===2 && <span style={{ position: 'absolute', top: -14, left: '30%', background: '#1557d8', color: 'white', borderRadius: 20, padding: '7px 18px', fontSize: 11, fontWeight: 900 }}>MOST POPULAR</span>}<div style={{ fontSize: 30 }}>▣</div><h3 style={{ minHeight: 50, fontSize: 16 }}>{p[0]}</h3><h2>{p[1]}</h2><p style={{ color: '#475569', minHeight: 50, fontSize: 13 }}>Automated systems and advisory support.</p>{(p[2] as string[]).map((x) => <p key={x} style={{ fontSize: 13 }}>✅ {x}</p>)}<button style={{ width: '100%', marginTop: 16, padding: 14, borderRadius: 8, border: '1px solid #cbd5e1', background: i===2 ? '#1557d8' : 'white', color: i===2 ? 'white' : '#06122b', fontWeight: 900 }}>GET STARTED</button></article>)}
        </div>
      </section>
      <section style={{ margin: '20px 38px', background: 'white', border: '1px solid #dbe3ef', borderRadius: 16, padding: 28, textAlign: 'center' }}>
        <h3 style={{ fontSize: 12, letterSpacing: 1 }}>FULLY INTEGRATED WITH GOOGLE WORKSPACE</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 18, marginTop: 26 }}>{workspace.map((x) => <div key={x}><div style={{ fontSize: 36 }}>📄</div><strong>{x}</strong><p style={{ color: '#64748b', fontSize: 12 }}>Automation</p></div>)}</div>
      </section>
      <section style={{ margin: '20px 38px 38px', background: '#061a38', color: 'white', borderRadius: 16, padding: 28, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 22 }}>{['Fully Automated','Transparent Process','On-Time Delivery','Ongoing Support'].map((x) => <div key={x}><h3>{x}</h3><p style={{ color: '#cbd5e1' }}>Built for clear execution, automation, and client visibility.</p></div>)}</section>
    </main>
  );
}
