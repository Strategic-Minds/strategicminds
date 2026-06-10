const phases = ['Intake', 'Payment', 'Schedule', 'Plan', 'Build', 'Validate', 'Launch'];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#050816] text-slate-50">
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-blue-400">Strategic Minds Advisory</p>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">Client Operating System powered by AUTO_BUILDER.</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              A governed intake, payment, planning, build, validation, and approval interface for launching client systems without legacy-code drift.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="/dashboard" className="rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-950/40 hover:bg-blue-500">Open Dashboard</a>
              <a href="/api/health" className="rounded-full border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-200 hover:border-blue-400">Health Check</a>
            </div>
          </div>
          <div className="rounded-3xl border border-slate-800 bg-slate-950/70 p-5 shadow-2xl shadow-blue-950/20">
            <div className="mb-5 flex items-center justify-between">
              <span className="text-sm font-semibold text-slate-300">Workflow Status</span>
              <span className="rounded-full bg-blue-500/15 px-3 py-1 text-xs font-semibold text-blue-300">Preview Only</span>
            </div>
            <div className="space-y-3">
              {phases.map((phase, index) => (
                <div key={phase} className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-900/80 px-4 py-3">
                  <span className="text-sm text-slate-200">{index + 1}. {phase}</span>
                  <span className="text-xs text-slate-400">Queued</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
