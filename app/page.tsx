const journey = ['Choose Package','Payment','Schedule Call','Share Idea','Plan System','MVP Build','Review','Launch','Updates','Scale'];
const packages = [
  ['1. Business Planning Consultation','$497','90 Min Strategy Call','Business Audit','Custom Action Plan','Recommendations'],
  ['2. Workflow Automation Package','$1,497','Workflow Audit','Automation Setup','System Integrations','Training & Support'],
  ['3. MVP System Build Package','$2,997','Custom MVP Build','Database & Backend','Frontend / Website','2 Revisions Included'],
  ['4. Full Business System Package','$5,997+','Everything in MVP','Advanced Automations','Team Training','Priority & Support']
];
const workspace = ['Gmail','Google Drive','Google Calendar','Google Sheets','Google Docs','Google Meet'];
const trust = ['Fully Automated','Transparent Process','On-Time Delivery','Ongoing Support'];

export default function HomePage() {
  return (
    <main style={{ background: '#eef5ff', color: '#07172f', fontFamily: 'Arial, sans-serif', minHeight: '100vh', padding: 22 }}>
      <div style={{ maxWidth: 1800, margin: '0 auto', background: '#ffffff', borderRadius: 18, overflow: 'hidden', border: '1px solid #d6e2f2', boxShadow: '0 28px 90px rgba(15,23,42,.10)' }}>
        <nav style={{ height: 78, display: 'grid', gridTemplateColumns: '300px 1fr 330px', alignItems: 'center', padding: '0 34px', borderBottom: '1px solid #e2e8f0' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, fontWeight: 900, color: '#0b1b36' }}><div style={{ width: 36, height: 36, borderRadius: 12, background: '#1557d8', color: '#fff', display: 'grid', placeItems: 'center' }}>◎</div><span>STRATEGIC MINDS<br/><small style={{ letterSpacing: 4, color: '#64748b' }}>ADVISORY</small></span></div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 30, fontSize: 12, fontWeight: 900, color: '#334155' }}>{['HOME','SERVICES','PACKAGES','HOW IT WORKS','ABOUT'].map((item) => <a key={item}>{item}</a>)}</div>
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 12 }}><a href="/schedule" style={{ background: '#1557d8', color: 'white', padding: '14px 20px', borderRadius: 8, fontSize: 12, fontWeight: 900 }}>SCHEDULE A CALL</a><a href="/dashboard" style={{ border: '1px solid #cbd5e1', padding: '13px 18px', borderRadius: 8, fontSize: 12, fontWeight: 900 }}>CLIENT LOGIN</a></div>
        </nav>
        <section style={{ display: 'grid', gridTemplateColumns: '1.05fr .8fr 1.75fr', gap: 34, padding: '42px 46px 28px', alignItems: 'center' }}>
          <div>
            <p style={{ display: 'inline-block', background: '#eaf1ff', color: '#1557d8', borderRadius: 999, padding: '10px 16px', fontSize: 12, fontWeight: 900 }}>AI-POWERED • AUTOMATED • RESULTS DRIVEN</p>
            <h1 style={{ fontSize: 54, lineHeight: 1.02, margin: '24px 0 18px', fontWeight: 900, letterSpacing: '-.04em' }}>We Turn Ideas Into <span style={{ color: '#1557d8' }}>Automated, AI-Powered</span> Business Systems.</h1>
            <p style={{ color: '#475569', fontSize: 18, lineHeight: 1.55, maxWidth: 560 }}>From planning to automation, we build your systems, workflows, websites, and content engines so you can focus on growth.</p>
            <div style={{ display: 'flex', gap: 14, marginTop: 28 }}><a style={{ background: '#1557d8', color: 'white', padding: '16px 28px', borderRadius: 8, fontWeight: 900 }}>SCHEDULE A CALL</a><a style={{ background: 'white', border: '1px solid #cbd5e1', padding: '16px 28px', borderRadius: 8, fontWeight: 900 }}>VIEW PACKAGES</a></div>
          </div>
          <div style={{ display: 'grid', placeItems: 'center', minHeight: 320 }}>
            <div style={{ position: 'relative', width: 300, height: 300 }}>
              <div style={{ position: 'absolute', inset: 16, border: '2px dashed #bcd1fb', borderRadius: '50%' }} />
              <div style={{ position: 'absolute', top: 10, left: 110, background: '#fff', border: '1px solid #dbe3ef', borderRadius: 999, padding: '8px 12px', fontSize: 11, fontWeight: 900 }}>STRATEGY</div>
              <div style={{ position: 'absolute', right: 0, top: 132, background: '#fff', border: '1px solid #dbe3ef', borderRadius: 999, padding: '8px 12px', fontSize: 11, fontWeight: 900 }}>AUTOMATE</div>
              <div style={{ position: 'absolute', bottom: 8, left: 100, background: '#fff', border: '1px solid #dbe3ef', borderRadius: 999, padding: '8px 12px', fontSize: 11, fontWeight: 900 }}>SCALE</div>
              <div style={{ position: 'absolute', left: 0, top: 132, background: '#fff', border: '1px solid #dbe3ef', borderRadius: 999, padding: '8px 12px', fontSize: 11, fontWeight: 900 }}>BUILD</div>
              <div style={{ position: 'absolute', inset: 82, borderRadius: 32, background: '#1557d8', color: 'white', display: 'grid', placeItems: 'center', fontSize: 58, boxShadow: '0 24px 50px rgba(21,87,216,.25)' }}>🧠</div>
            </div>
          </div>
          <div style={{ background: '#f8fbff', border: '1px solid #dbe3ef', borderRadius: 16, padding: 22 }}>
            <h2 style={{ textAlign: 'center', fontSize: 22, margin: '0 0 28px' }}>THE 10 STEP CLIENT JOURNEY</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(10,1fr)', gap: 10 }}>{journey.map((step, i) => <div key={step} style={{ textAlign: 'center' }}><div style={{ margin: '0 auto 9px', width: 42, height: 42, borderRadius: '50%', background: i < 3 ? '#19a867' : '#1557d8', color: 'white', display: 'grid', placeItems: 'center', fontWeight: 900 }}>{i+1}</div><strong style={{ display: 'block', fontSize: 11, lineHeight: 1.15 }}>{step}</strong><p style={{ color: '#64748b', fontSize: 10, lineHeight: 1.25 }}>{i<3?'Start phase':'Build phase'}</p></div>)}</div>
          </div>
        </section>
        <section style={{ margin: '12px 36px', background: '#ffffff', border: '1px solid #dbe3ef', borderRadius: 16, padding: 26 }}>
          <h2 style={{ textAlign: 'center', fontSize: 18, letterSpacing: '.03em', margin: '0 0 26px' }}>CHOOSE THE RIGHT PACKAGE FOR YOUR BUSINESS</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 18 }}>{packages.map((p, i) => <article key={p[0]} style={{ border: '1px solid #dbe3ef', borderRadius: 14, padding: 22, minHeight: 315, boxShadow: '0 14px 34px rgba(15,23,42,.06)', position: 'relative' }}>{i===2 && <span style={{ position: 'absolute', top: -13, left: '50%', transform: 'translateX(-50%)', background: '#1557d8', color: 'white', borderRadius: 999, padding: '7px 18px', fontSize: 10, fontWeight: 900 }}>MOST POPULAR</span>}<div style={{ color: '#1557d8', fontSize: 30 }}>▣</div><h3 style={{ minHeight: 44, fontSize: 16 }}>{p[0]}</h3><h2 style={{ margin: '8px 0 12px' }}>{p[1]}</h2>{p.slice(2).map((x) => <p key={x} style={{ fontSize: 13, color: '#334155' }}>✓ {x}</p>)}<button style={{ width: '100%', marginTop: 12, padding: 14, borderRadius: 8, border: '1px solid #cbd5e1', background: i===2 ? '#1557d8' : '#fff', color: i===2 ? '#fff' : '#07172f', fontWeight: 900 }}>GET STARTED</button></article>)}</div>
        </section>
        <section style={{ margin: '18px 36px', background: '#fff', border: '1px solid #dbe3ef', borderRadius: 16, padding: 26, textAlign: 'center' }}><h3 style={{ fontSize: 12, letterSpacing: '.1em' }}>FULLY INTEGRATED WITH GOOGLE WORKSPACE</h3><div style={{ display: 'grid', gridTemplateColumns: 'repeat(6,1fr)', gap: 18, marginTop: 24 }}>{workspace.map((x) => <div key={x} style={{ borderRight: x==='Google Meet' ? 'none' : '1px solid #e2e8f0' }}><div style={{ fontSize: 34 }}>{x.includes('Calendar')?'📅':x.includes('Sheets')?'📊':x.includes('Meet')?'🎥':'📄'}</div><strong>{x}</strong><p style={{ color: '#64748b', fontSize: 12 }}>Connected Workflow</p></div>)}</div></section>
        <section style={{ margin: '18px 36px 36px', background: '#061a38', color: 'white', borderRadius: 16, padding: 26, display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 22 }}>{trust.map((x) => <div key={x}><h3 style={{ marginTop: 0 }}>✓ {x}</h3><p style={{ color: '#cbd5e1', marginBottom: 0 }}>Clear execution, automation, delivery tracking, and visibility.</p></div>)}</section>
      </div>
    </main>
  );
}
