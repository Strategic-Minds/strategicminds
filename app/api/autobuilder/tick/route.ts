import { NextResponse } from 'next/server';
import { runAutobuilderTick } from '../../../../lib/autobuilder/runtime';
import { persistWorkflowReceipt } from '../../../../lib/autobuilder/persistence';

export const dynamic = 'force-dynamic';

function getAcceptedCronSecrets() {
  return [
    process.env.CRON_SECRET,
    process.env.AUTONOMOUS_CONTROL_PLANE_CRON_SECRET
  ].filter((value): value is string => Boolean(value));
}

export async function GET(request: Request) {
  const authHeader = request.headers.get('authorization');
  const isVercelCron = request.headers.get('x-vercel-cron') === '1';
  const acceptedSecrets = getAcceptedCronSecrets();
  const hasMatchingSecret = acceptedSecrets.some((secret) => authHeader === `Bearer ${secret}`);

  if (acceptedSecrets.length > 0 && !isVercelCron && !hasMatchingSecret) {
    return NextResponse.json({ ok: false, error: 'unauthorized' }, { status: 401 });
  }

  const result = runAutobuilderTick();
  const persistence = await persistWorkflowReceipt(result.receipt, {
    source: isVercelCron ? 'vercel_cron' : 'signed_request',
    deploymentUrl: process.env.VERCEL_URL ?? null
  });

  return NextResponse.json({
    ok: result.ok,
    mode: result.mode,
    agent: result.agent,
    receipt: result.receipt,
    persistence,
    nextActions: result.nextActions,
    safety: {
      productionActions: 'approval_required',
      payments: 'disabled',
      sms: 'disabled',
      secrets: 'not_exposed'
    }
  });
}
