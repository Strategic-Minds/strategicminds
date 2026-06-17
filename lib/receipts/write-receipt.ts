import { writeDriveReceipt, type DriveReceiptResult } from '../drive/write-drive-receipt';
import { persistReceipt, persistWorkflowRun, type PersistenceResult } from '../supabase/receipt-store';
import type { StrategicOSCheck, StrategicOSWorkflowInput } from '../workflows/steps/strategic-os-steps';

export type StrategicOSReceipt = {
  receipt_id: string;
  created_at: string;
  system: 'strategic-minds-os';
  workflow_id: string;
  input_ref: {
    run_id: string;
    run_window: string;
    source: string;
  };
  status: 'passed' | 'failed' | 'blocked' | 'requires_approval' | 'skipped';
  checks: StrategicOSCheck[];
  persistence?: {
    workflowRun?: PersistenceResult;
    receipt?: PersistenceResult;
    drive?: DriveReceiptResult;
  };
  next_action: string;
};

export async function writeStrategicOSReceipt(input: StrategicOSWorkflowInput, checks: StrategicOSCheck[]): Promise<StrategicOSReceipt> {
  'use step';

  const status = summarizeStatus(checks);
  const receipt: StrategicOSReceipt = {
    receipt_id: `strategic-os-${input.runWindow}-${input.runId}`,
    created_at: new Date().toISOString(),
    system: 'strategic-minds-os',
    workflow_id: 'strategicOSValidationWorkflow',
    input_ref: {
      run_id: input.runId,
      run_window: input.runWindow,
      source: input.source
    },
    status,
    checks,
    next_action: status === 'passed' ? 'Continue monitoring on the next cron window.' : 'Review repair blocks and approval queue before release.'
  };

  const drive = await writeDriveReceipt(receipt);
  const workflowRun = await persistWorkflowRun(receipt);
  const persistedReceipt = await persistReceipt(receipt, drive.url);

  return {
    ...receipt,
    persistence: {
      workflowRun,
      receipt: persistedReceipt,
      drive
    }
  };
}

function summarizeStatus(checks: StrategicOSCheck[]): StrategicOSReceipt['status'] {
  if (checks.some((check) => check.status === 'failed')) return 'failed';
  if (checks.some((check) => check.status === 'blocked')) return 'blocked';
  if (checks.some((check) => check.status === 'requires_approval')) return 'requires_approval';
  if (checks.length === 0) return 'skipped';
  return 'passed';
}
