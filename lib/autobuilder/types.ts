export type WorkflowStatus = 'queued' | 'running' | 'blocked' | 'approved' | 'completed' | 'failed' | 'rolled_back';
export type WorkflowRisk = 'low' | 'medium' | 'high' | 'critical';
export type ApprovalState = 'not_required' | 'required' | 'approved' | 'rejected';

export type WorkflowReceipt = {
  id: string;
  createdAt: string;
  updatedAt: string;
  status: WorkflowStatus;
  risk: WorkflowRisk;
  approval: ApprovalState;
  agentId: string;
  title: string;
  summary: string;
  requestedAction: string;
  validation: ValidationResult;
  rollback: RollbackPlan;
  logs: string[];
};

export type ValidationResult = {
  passed: boolean;
  checks: Array<{
    id: string;
    label: string;
    passed: boolean;
    detail: string;
  }>;
};

export type RollbackPlan = {
  available: boolean;
  strategy: string;
  target: string;
  requiresApproval: boolean;
};

export type AgentRunInput = {
  agentId: string;
  prompt: string;
  dryRun?: boolean;
};
