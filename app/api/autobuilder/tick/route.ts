import { NextResponse } from 'next/server';
import { runAutobuilderTick } from '../../../../lib/autobuilder/runtime';

export const dynamic = 'force-dynamic';

export function GET(request: Request) {
  const authHeader = request.headers.get('authorization');
  const cronSecret = process.env.CRON_SECRET;
  const isVercelCron = request.headers.get('x-vercel-cron') === '1';

  if (cronSecret && !isVercelCron && authHeader !== `Bearer ${cronSecret}`) {
    return NextResponse.json({ ok: false, error: 'unauthorized' }, { status: 401 });
  }

  const result = runAutobuilderTick();

  return NextResponse.json({
    ok: result.ok,
    mode: result.mode,
    agent: result.agent,
    receipt: result.receipt,
    nextActions: result.nextActions,
    safety: {
      productionActions: 'approval_required',
      payments: 'disabled',
      sms: 'disabled',
      secrets: 'not_exposed'
    }
  });
}
