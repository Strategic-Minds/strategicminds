const nav = ['Dashboard','My Journey','Calls','Payments','Invoices','Documents','Updates','Messages','Settings','Logout'];
const topCards = [['Current Step','4 of 10','Share Your Idea','View Journey'],['Next Call','May 30, 2025','2:00 PM EST','Join Call'],['Project Status','In Progress','On Track','View Project'],['Amount Paid','$2,997','MVP System Build','View Invoices']];
const journey = ['Choose Package','Payment Confirmed','Call Scheduled','Share Your Idea','We Plan System','MVP Build','Review & Feedback','Launch System','Automated Updates','Scale & Optimize'];
const updates = ['We received your project brief.','Your call has been scheduled.','Payment received successfully.'];
const progress = ['Discovery & Planning','Strategy & Blueprint','MVP Development','Review & Feedback','Launch & Automate'];
const docs = ['Project Brief','Strategy Blueprint','MVP Roadmap'];
const payments = [['Deposit Paid','$1,497'],['MVP Build Milestone','$1,500'],['Final Payment','$0']];

export default function DashboardPage() {
  return (
    <main style={{ minHeight: '100vh', background: '#f8fbff', color: '#06122b', fontFamily: 'Arial, sans-serif', padding: 32 }}>
      <div style={{ display: 'grid', gridTemplateColumns: '250px 1fr', maxWidth: 1480, margin: '0 auto', background: 'white', border: '1px solid #dbe3ef', borderRadius: 18, overflow: 'hidden', boxShadow: '0 24px 80px rgba(15,23,42,.08)' }}>
        <aside style={{ background: 'linear-gradient(180deg,#061a38,#06122b)', color: 'white', minHeight: 860, padding: 24 }}>
          <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 34, fontWeight: 900 }}><span style={{ fontSize: 28 }}>◎</span><span>STRATEGIC MINDS<br/><small style={{ letterSpacing: 4 }}>ADVISORY</small></span></div>
          <nav style={{ display: 'grid', gap: 10 }}>{nav.map((item, i) => <a key={item} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '14px 16px', borderRadius: 9, background: i===0 ? '#1557d8' : 'transparent', color: 'white', fontWeight: 800, fontSize: 14 }}><span>{i===0?'▣':'◻'}</span>{item}</a>)}</nav>
        </aside>
        <section style={{ padding: 34 }}>
          <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 32 }}>
            <div><h1 style={{ margin: 0, fontSize: 28 }}>Welcome back, John! 👋</h1><p style={{ color: '#475569' }}>Here's what's happening with your project.</p></div>
            <div style={{ display: 'flex', gap: 20, alignItems: 'center' }}><a style={{ background: '#1557d8', color: 'white', borderRadius: 8, padding: '14px 24px', fontWeight: 900 }}>SCHEDULE A CALL</a><span>🔔</span><span style={{ width: 34, height: 34, borderRadius: '50%', background: '#dbeafe', display: 'grid', placeItems: 'center' }}>👤</span></div>
          </header>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 18 }}>
            {topCards.map((c) => <article key={c[0]} style={{ border: '1px solid #dbe3ef', borderRadius: 14, padding: 22 }}><div style={{ color: '#1557d8', fontSize: 26 }}>▣</div><small>{c[0]}</small><h2 style={{ margin: '8px 0' }}>{c[1]}</h2><p style={{ color: '#475569' }}>{c[2]}</p><a style={{ color: '#1557d8', fontWeight: 900 }}>{c[3]}</a></article>)}
          </div>
          <section style={{ marginTop: 26, border: '1px solid #dbe3ef', borderRadius: 14, padding: 24 }}>
            <h3>Your 10 Step Journey</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(10, 1fr)', gap: 8, alignItems: 'start' }}>{journey.map((j, i) => <div key={j} style={{ textAlign: 'center' }}><div style={{ width: 42, height: 42, borderRadius: '50%', margin: '0 auto 10px', background: i<3 ? '#1fb06b' : i===3 ? '#1557d8' : '#cbd5e1', color: 'white', display: 'grid', placeItems: 'center', fontWeight: 900 }}>{i<3?'✓':i+1}</div><strong style={{ fontSize: 12 }}>{j.split(' ')[0]}</strong><p style={{ fontSize: 11, color: i===3 ? '#1557d8' : '#475569' }}>{j.replace(j.split(' ')[0],'')}</p></div>)}</div>
          </section>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 18, marginTop: 26 }}>
            <section style={{ border: '1px solid #dbe3ef', borderRadius: 14, padding: 22 }}><h3>Recent Updates</h3>{updates.map((u) => <p key={u} style={{ color: '#475569', lineHeight: 1.5 }}>▣ {u}<br/><small>May 24, 2025</small></p>)}<a style={{ color: '#1557d8', fontWeight: 900 }}>View All Updates</a></section>
            <section style={{ border: '1px solid #dbe3ef', borderRadius: 14, padding: 22 }}><h3>Project Progress</h3><div style={{ height: 8, background: '#dbeafe', borderRadius: 20 }}><div style={{ width: '40%', height: 8, background: '#1557d8', borderRadius: 20 }} /></div><strong>40%</strong>{progress.map((p,i) => <p key={p} style={{ color: '#475569' }}>{i<3?'✅':'○'} {p}</p>)}</section>
            <section style={{ border: '1px solid #dbe3ef', borderRadius: 14, padding: 22 }}><h3>Documents</h3>{docs.map((d) => <p key={d} style={{ color: '#475569' }}>📄 {d}<br/><small>May 24, 2025</small></p>)}<a style={{ color: '#1557d8', fontWeight: 900 }}>View All Documents</a></section>
            <section style={{ border: '1px solid #dbe3ef', borderRadius: 14, padding: 22 }}><h3>Payment Schedule</h3>{payments.map((p,i) => <p key={p[0]} style={{ display: 'flex', justifyContent: 'space-between', color: '#475569' }}><span>{i===0?'✅':i===1?'●':'○'} {p[0]}</span><strong>{p[1]}</strong></p>)}<a style={{ color: '#1557d8', fontWeight: 900 }}>View All Invoices</a></section>
          </div>
          <section style={{ marginTop: 26, border: '1px solid #dbe3ef', borderRadius: 14, padding: 24, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}><div><h2>Ready to get started?</h2><p style={{ color: '#475569' }}>Schedule a call with us today and let's build your system.</p></div><a style={{ background: '#1557d8', color: 'white', borderRadius: 8, padding: '16px 32px', fontWeight: 900 }}>SCHEDULE A CALL</a></section>
        </section>
      </div>
    </main>
  );
}
