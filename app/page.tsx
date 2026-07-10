import Link from 'next/link';

const pillars = [
  { title: 'Advisory systems', body: 'Strategy, content direction, and operating cadence built for growth without chaos.' },
  { title: 'Campaign delivery', body: 'Structured launch support for pages, assets, and approvals that stay preview-safe.' },
  { title: 'Client clarity', body: 'A simple control surface for journeys, documents, and next steps.' },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <section className="mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-center px-6 py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-fuchsia-400">Strategic Minds Advisory</p>
        <h1 className="mt-5 max-w-3xl text-5xl font-semibold tracking-tight text-balance sm:text-7xl">
          Clean advisory delivery for clients who want momentum without noise.
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-8 text-neutral-300 sm:text-lg">
          We keep the experience focused on strategy, campaign execution, and client operations. Production actions stay gated,
          preview paths stay visible, and the site stays easy to trust.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link className="rounded-full bg-fuchsia-500 px-5 py-3 text-sm font-semibold text-white" href="/services">
            Explore services
          </Link>
          <Link className="rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white" href="/login">
            Client login
          </Link>
          <Link className="rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white" href="/payment">
            Payment preview
          </Link>
        </div>
        <div className="mt-16 grid gap-4 sm:grid-cols-3">
          {pillars.map((pillar) => (
            <article key={pillar.title} className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-lg font-semibold">{pillar.title}</h2>
              <p className="mt-3 text-sm leading-6 text-neutral-300">{pillar.body}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
