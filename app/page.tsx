const journey = ['Choose Package','Payment','Schedule Call','Share Idea','Plan System','MVP Build','Review','Launch','Updates','Scale'];
const packages = [
  ['Business Planning Consultation','$497'],
  ['Workflow Automation Package','$1,497'],
  ['MVP System Build Package','$2,997'],
  ['Full Business System Package','$5,997+']
];
const workspace = ['Gmail','Google Drive','Google Calendar','Google Sheets','Google Docs','Google Meet'];

export default function HomePage() {
  return (
    <main style={{ background: '#eef5ff', color: '#07172f', fontFamily: 'Arial, sans-serif', minHeight: '100vh', padding: 22 }}>
      <div style={{ maxWidth: 1800, margin: '0 auto', background: '#ffffff', borderRadius: 18, overflow: 'hidden', border: '1px solid #d6e2f2' }}>
        <nav style={{ height: 78, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 34px', borderBottom: '1px solid #e2e8f0' }}>
          <strong>STRATEGIC MINDS ADVISORY</strong>
          <div style={{ display: 'flex', gap: 18, fontSize: 12, fontWeight: 900 }}>
            <a>HOME</a><a>SERVICES</a><a>PACKAGES</a><a>HOW IT WORKS</a><a>ABOUT</a>
            <a href="/dashboard" style={{ background: '#1557d8', color: 'white', padding: '12px 18px', borderRadius: 8 }}>CLIENT LOGIN</a>
          </div>
        </nav>
        <section style={{ display: 'grid', gridTemplateColumns: '1fr 320px 1.4fr', gap: 34, padding: '42px 46px 28px', alignItems: 'center' }}>
          <div>
            <p style={{ display: 'inline-block', background: '#eaf1ff', color: '#1557d8', borderRadius: 999, padding: '10px 16px', fontSize: 12, fontWeight: 900 }}>AI-POWERED AUTOMATED RESULTS DRIVEN</p>
            <h1 style={{ fontSize: 54, lineHeight: 1.02, margin: '24px 0 18px', fontWeight: 900 }}>We Turn Ideas Into <span style={{ color: '#1557d8' }}>Automated AI-Powered</span> Business Systems.</h1>
            <p style={{ color: '#475569', fontSize: 18, lineHeight: 1.55 }}>From planning to automation, we build your systems, workflows, websites, and content engines so you can focus on growth.</p>
          </div>
          <div style={{ display: 'grid', placeItems: 'center' }}>
            <div style={{ width: 220, height: 220, borderRadius: '50%', border: '2px dashed #bcd1fb', display: 'grid', placeItems: 'center' }}>
              <div style={{ width: 110, height: 110, borderRadius: 28, background: '#1557d8', color: 'white', display: 'grid', placeItems: 'center', fontSize: 52 }}>AI</div>
            </div>
          </div>
          <div style={{ background: '#f8fbff', border: '1px solid #dbe3ef', borderRadius: 16, padding: 22 }}>
            <h2 style={{ textAlign: 'center', fontSize: 22, margin: '0 0 28px' }}>THE 10 STEP CLIENT JOURNEY</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(10,1fr)', gap: 10 }}>{journey.map((step, i) => <div key={step} style={{ textAlign: 'center' }}><div style={{ margin: '0 auto 9px', width: 42, height: 42, borderRadius: '50%', background: i < 3 ? '#19a867' : '#1557d8', color: 'white', display: 'grid', placeItems: 'center', fontWeight: 900 }}>{i+1}</div><strong style={{ display: 'block', fontSize: 11 }}>{step}</strong></div>)}</div>
          </div>
        </section>
        <section style={{ margin: '12px 36px', background: '#ffffff', border: '1px solid #dbe3ef', borderRadius: 16, padding: 26 }}>
          <h2 style={{ textAlign: 'center', fontSize: 18, margin: '0 0 26px' }}>CHOOSE THE RIGHT PACKAGE FOR YOUR BUSINESS</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 18 }}>{packages.map((p, i) => <article key={p[0]} style={{ border: '1px solid #dbe3ef', borderRadius: 14, padding: 22 }}><h3>{p[0]}</h3><h2>{p[1]}</h2><p>Built for clear execution and client visibility.</p><button style={{ width: '100%', padding: 14, borderRadius: 8, border: '1px solid #cbd5e1', background: i===2 ? '#1557d8' : '#fff', color: i===2 ? '#fff' : '#07172f', fontWeight: 900 }}>GET STARTED</button></article>)}</div>
        </section>
        <section style={{ margin: '18px 36px', background: '#fff', border: '1px solid #dbe3ef', borderRadius: 16, padding: 26, textAlign: 'center' }}><h3>FULLY INTEGRATED WITH GOOGLE WORKSPACE</h3><div style={{ display: 'grid', gridTemplateColumns: 'repeat(6,1fr)', gap: 18, marginTop: 24 }}>{workspace.map((x) => <div key={x}><strong>{x}</strong><p style={{ color: '#64748b', fontSize: 12 }}>Connected Workflow</p></div>)}</div></section>
      </div>
    </main>
  );
}
