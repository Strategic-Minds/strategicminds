import type { WorkflowReceipt, WorkflowRisk } from './types';
import { getApprovalDecision } from './approval';
import { createRollbackPlan } from './rollback';
import { validateAutobuilderTick } from './validation';

export function createWorkflowReceipt(params: {
  agentId: string;
  title: string;
  summary: string;
  requestedAction: string;
  risk?: WorkflowRisk;
}): WorkflowReceipt {
  const now = new Date().toISOString();
  const risk = params.risk ?? 'medium';
  const approvalDecision = getApprovalDecision(risk, params.requestedAction);

  return {
    id: 'wf_' + Date.now().toString(),
    createdAt: now,
    updatedAt: now,
    status: approvalDecision.required ? 'blocked' : 'queued',
    risk,
    approval: approvalDecision.state,
    agentId: params.agentId,
    title: params.title,
    summary: params.summary,
    requestedAction: params.requestedAction,
    validation: validateAutobuilderTick(),
    rollback: createRollbackPlan(params.requestedAction, risk),
    logs: ['receipt_created', 'dry_run:true']
  };
}
