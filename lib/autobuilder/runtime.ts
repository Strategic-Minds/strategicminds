import { AGENT_REGISTRY } from '../agents/registry';
import type { AgentRunInput, WorkflowReceipt } from './types';
import { createWorkflowReceipt } from './receipts';

export type AgentRunResult = {
  ok: boolean;
  mode: 'dry_run';
  receipt: WorkflowReceipt;
  agent: {
    id: string;
    name: string;
    autonomy: string;
  } | null;
  nextActions: string[];
};

export function runAgent(input: AgentRunInput): AgentRunResult {
  const agent = AGENT_REGISTRY.find((item) => item.id === input.agentId) ?? AGENT_REGISTRY[0];
  const receipt = createWorkflowReceipt({
    agentId: agent.id,
    title: 'Autonomous control plane tick',
    summary: input.prompt,
    requestedAction: 'dry-run plan and validate next build step',
    risk: 'medium'
  });

  return {
    ok: receipt.validation.passed,
    mode: 'dry_run',
    receipt,
    agent: {
      id: agent.id,
      name: agent.name,
      autonomy: agent.autonomy
    },
    nextActions: [
      'read backlog',
      'select safest next task',
      'generate implementation plan',
      'validate risk gates',
      'wait for approval before production-sensitive action'
    ]
  };
}

export function runAutobuilderTick() {
  return runAgent({
    agentId: 'builder',
    prompt: 'Inspect the Strategic Minds roadmap and prepare the next safe dry-run build action.',
    dryRun: true
  });
}
