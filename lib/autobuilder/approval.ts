import type { ApprovalState, WorkflowRisk } from './types';

export type ApprovalDecision = {
  required: boolean;
  state: ApprovalState;
  reason: string;
};

export function getApprovalDecision(risk: WorkflowRisk, requestedAction: string): ApprovalDecision {
  const productionKeywords = ['production', 'deploy', 'payment', 'sms', 'delete', 'domain', 'secret'];
  const isProductionSensitive = productionKeywords.some((keyword) => requestedAction.toLowerCase().includes(keyword));
  const required = risk === 'high' || risk === 'critical' || isProductionSensitive;

  return {
    required,
    state: required ? 'required' : 'not_required',
    reason: required
      ? 'Approval is required before this workflow can perform production-sensitive actions.'
      : 'Workflow is allowed to continue in dry-run planning mode.'
  };
}
