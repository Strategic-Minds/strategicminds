import { writeSupabaseRow, type SupabaseWriteResult } from './rest';
import type { StrategicOSDashboardState } from '../dashboard/sync-dashboard-state';
import type { StrategicOSReceipt } from '../receipts/write-receipt';

export type PersistenceResult = {
  ok: boolean;
  target: string;
  status: number;
  error?: string;
};

export async function persistWorkflowRun(receipt: StrategicOSReceipt): Promise<PersistenceResult> {
  const result = await writeSupabaseRow('workflow_runs', {
    workflow_id: receipt.workflow_id,
    status: receipt.status,
    input_ref: receipt.input_ref,
    output_ref: {
      receipt_id: receipt.receipt_id,
      check_count: receipt.checks.length
    },
    started_at: receipt.created_at,
    finished_at: new Date().toISOString()
  });

  return toPersistenceResult('supabase.workflow_runs', result);
}

export async function persistReceipt(receipt: StrategicOSReceipt, driveUrl?: string): Promise<PersistenceResult> {
  const result = await writeSupabaseRow('receipts', {
    receipt_type: 'strategic_os_validation',
    status: receipt.status,
    drive_url: driveUrl ?? null,
    payload: receipt,
    created_at: receipt.created_at
  });

  return toPersistenceResult('supabase.receipts', result);
}

export async function persistDashboardState(state: StrategicOSDashboardState): Promise<PersistenceResult> {
  const result = await writeSupabaseRow('dashboard_events', {
    event_type: 'strategic_os_dashboard_sync',
    title: `Strategic OS ${state.current_phase}`,
    body: JSON.stringify({
      phases: state.phases,
      approvals: state.approvals,
      receipts: state.receipts,
      links: state.links
    }),
    status: state.current_phase,
    evidence_url: state.links.latestReceipt ?? null,
    created_at: state.updated_at
  });

  return toPersistenceResult('supabase.dashboard_events', result);
}

function toPersistenceResult(target: string, result: SupabaseWriteResult): PersistenceResult {
  return {
    ok: result.ok,
    target,
    status: result.status,
    error: result.error
  };
}
