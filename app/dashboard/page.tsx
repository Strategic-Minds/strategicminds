import Link from 'next/link';
import type { LucideIcon } from 'lucide-react';
import { AlertTriangle, CheckCircle2, Clock, Image, Lock, WandSparkles } from 'lucide-react';

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <section className="dashboard">
        <div className="dash-head">
          <p className="eyebrow">Admin preview</p>
          <h1>Approval control plane.</h1>
          <p>Operator review for wardrobe, content, avatar video, membership access, and campaign release gates.</p>
        </div>
        <div className="queue-grid">
          {(
            [
              ['Image review', '18 assets waiting', Image],
              ['Closet looks', '7 style presets', WandSparkles],
              ['Video scripts', '4 HeyGen drafts', Clock],
              ['Release lock', 'Production blocked', Lock],
            ] as Array<[string, string, LucideIcon]>
          ).map(([title, detail, Icon]) => (
            <article key={title}>
              <Icon />
              <span>{title as string}</span>
              <strong>{detail as string}</strong>
            </article>
          ))}
        </div>
        <section className="approval-table">
          <div>
            <CheckCircle2 /> Approved: brand pack, route map, client site assets
          </div>
          <div>
            <Clock /> Pending: Stripe test checkout, Supabase entitlements
          </div>
          <div>
            <AlertTriangle /> Blocked: live publishing, payments, production deploy
          </div>
        </section>
        <Link className="btn primary" href="/payment">
          Review payment preview
        </Link>
      </section>
    </main>
  );
}
