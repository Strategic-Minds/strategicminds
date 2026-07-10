import Link from 'next/link';

export default function Page() {
  return (
    <main style={wrap}>
      <section style={card}>
        <div style={eyebrow}>ADMIN CONTROL PLANE</div>
        <h1 style={title}>Strategic Minds Operations</h1>
        <p style={copy}>Preview-safe admin workspace for client operations, approvals, and release gating.</p>
        <div style={links}>
          <Link href="/services" style={primary}>View services</Link>
          <Link href="/payment" style={secondary}>Open payment preview</Link>
        </div>
      </section>
    </main>
  );
}

const wrap = { minHeight: '100vh', background: '#000', color: '#fff', display: 'grid', placeItems: 'center', padding: 24 } as const;
const card = { width: 'min(960px, 100%)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 18, background: '#090909', padding: 24, boxShadow: '0 24px 90px rgba(0,0,0,0.35)' } as const;
const eyebrow = { color: '#ff0abc', fontSize: 11, fontWeight: 800, letterSpacing: 3, marginBottom: 8 } as const;
const title = { margin: 0, fontSize: 34, lineHeight: 1.04 } as const;
const copy = { color: '#b9b9c2', lineHeight: 1.6, marginTop: 12, marginBottom: 0 } as const;
const links = { display: 'flex', gap: 10, flexWrap: 'wrap', marginTop: 20 } as const;
const primary = { borderRadius: 999, padding: '11px 14px', background: '#ff0abc', color: '#fff', textDecoration: 'none', fontWeight: 800, border: '1px solid rgba(255,10,188,0.6)' } as const;
const secondary = { ...primary, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.12)' } as const;
