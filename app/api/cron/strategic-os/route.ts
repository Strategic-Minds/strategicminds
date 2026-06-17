import { NextResponse } from 'next/server';
import { startStrategicOSValidationWorkflow } from '../../../../lib/workflows/strategic-os-validation';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  const configuredSecret = process.env.CRON_SECRET;
  const authHeader = request.headers.get('authorization');

  if (!configuredSecret) {
    return NextResponse.json(
      {
        ok: false,
        error: 'cron_secret_not_configured',
        message: 'Set CRON_SECRET in Vercel before enabling the Strategic OS cron.'
      },
      { status: 500 }
    );
  }

  if (authHeader !== `Bearer ${configuredSecret}`) {
    return NextResponse.json(
      {
        ok: false,
        error: 'unauthorized'
      },
      { status: 401 }
    );
  }

  const now = new Date();
  const runWindow = getFiveMinuteRunWindow(now);
  const runId = `${runWindow}-${crypto.randomUUID()}`;

  const result = await startStrategicOSValidationWorkflow({
    runId,
    runWindow,
    source: 'cron',
    requestedChecks: [
      'drive',
      'registry',
      'github',
      'vercel',
      'supabase',
      'payments',
      'google_workspace',
      'ai_gateway',
      'playwright',
      'dashboard'
    ]
  });

  return NextResponse.json(
    {
      ok: true,
      workflow: 'strategicOSValidationWorkflow',
      runId: result.runId,
      runWindow: result.runWindow,
      receiptId: result.receiptId,
      approvalCount: result.approvalCount,
      repairBlockCount: result.repairBlockCount
    },
    { status: 202 }
  );
}

function getFiveMinuteRunWindow(date: Date) {
  const copy = new Date(date);
  copy.setUTCSeconds(0, 0);
  copy.setUTCMinutes(Math.floor(copy.getUTCMinutes() / 5) * 5);
  return copy.toISOString();
}
