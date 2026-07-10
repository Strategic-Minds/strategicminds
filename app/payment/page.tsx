import Link from 'next/link';

export default function PaymentPage() {
  return (
    <main className="min-h-screen bg-neutral-950 px-6 py-20 text-white">
      <section className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-white/5 p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-fuchsia-400">Payment Preview</p>
        <h1 className="mt-4 text-4xl font-semibold">Preview-only payment flow.</h1>
        <p className="mt-4 text-neutral-300">
          Live Stripe charging stays disabled. This route exists for preview navigation and test-only checkout validation.
        </p>
        <div className="mt-8 flex gap-3">
          <Link className="rounded-full bg-fuchsia-500 px-5 py-3 text-sm font-semibold text-white" href="/api/stripe/checkout">
            Open checkout endpoint
          </Link>
          <Link className="rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white" href="/packages">
            View packages
          </Link>
        </div>
      </section>
    </main>
  );
}
