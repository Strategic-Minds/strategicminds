import type { RollbackPlan, WorkflowRisk } from './types';

export function createRollbackPlan(action: string, risk: WorkflowRisk): RollbackPlan {
  const productionSensitive = ['deploy', 'production', 'domain', 'database', 'payment', 'sms', 'secret'].some((keyword) =>
    action.toLowerCase().includes(keyword)
  );

  return {
    available: true,
    strategy: productionSensitive ? 'restore_last_ready_deployment_or_block_action' : 'discard_dry_run_receipt',
    target: productionSensitive ? 'last_known_ready_vercel_deployment' : 'dry_run_only',
    requiresApproval: productionSensitive || risk === 'high' || risk === 'critical'
  };
}
