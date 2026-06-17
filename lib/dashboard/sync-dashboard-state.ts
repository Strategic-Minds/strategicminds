import type { StrategicOSReceipt } from '../receipts/write-receipt';

export type DashboardPhaseStatus = 'not_started' | 'queued' | 'running' | 'blocked' | 'requires_approval' | 'complete';

export type DashboardPhase = {
  id: string;
  label: string;
  status: DashboardPhaseStatus;
  progress: number;
  evidence_url?: string;
};

export type StrategicOSDashboardState = {
  client_id: string;
  project_id: string;
  current_phase: string;
  phases: DashboardPhase[];
  approvals: string[];
  receipts: string[];
  links: Record<string, string>;
  updated_at: string;
};

export async function syncStrategicOSDashboardState(receipt: StrategicOSReceipt, approvals: string[]): Promise<StrategicOSDashboardState> {
  'use step';

  const blocked = receipt.status === 'blocked' || receipt.status === 'failed';
  const requiresApproval = receipt.status === 'requires_approval';

  return {
    client_id: 'strategic-minds-internal',
    project_id: 'strategic-minds-os',
    current_phase: blocked ? 'repair' : requiresApproval ? 'approval' : 'monitoring',
    phases: [
      { id: 'drive', label: 'Drive control plane', status: 'complete', progress: 100 },
      { id: 'workflow', label: 'Vercel workflow loop', status: blocked ? 'blocked' : 'running', progress: blocked ? 50 : 75 },
      { id: 'validation', label: 'Validation and receipts', status: requiresApproval ? 'requires_approval' : blocked ? 'blocked' : 'running', progress: receipt.status === 'passed' ? 100 : 70 },
      { id: 'release', label: 'Release gate', status: 'requires_approval', progress: 40 }
    ],
    approvals,
    receipts: [receipt.receipt_id],
    links: {
      driveSpec: 'https://docs.google.com/document/d/1kuzazI2tfnl1tDdj9LCQsXXAvTKx4VFfdWOWvwjbuhI/edit',
      githubRepo: 'https://github.com/Strategic-Minds/strategicminds'
    },
    updated_at: new Date().toISOString()
  };
}
