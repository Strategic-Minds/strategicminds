export type AgentAutonomy = 'dry_run' | 'approval_required' | 'production_allowed';

export type StrategicMindsAgent = {
  id: string;
  name: string;
  purpose: string;
  owner: string;
  autonomy: AgentAutonomy;
  tools: string[];
  approvalRequiredFor: string[];
  blockedActions: string[];
  outputs: string[];
  fallback: string;
};

export const AGENT_REGISTRY: StrategicMindsAgent[] = [
  {
    id: 'concierge',
    name: 'Concierge Agent',
    purpose: 'Routes client requests to the correct specialist agent and creates a clear next action receipt.',
    owner: 'Strategic Minds Advisory',
    autonomy: 'dry_run',
    tools: ['chat', 'routing', 'receipts'],
    approvalRequiredFor: ['client-facing commitments', 'production actions'],
    blockedActions: ['live payments', 'sms', 'secret access'],
    outputs: ['route', 'summary', 'next_action'],
    fallback: 'Escalate to Jeremy for approval.'
  },
  {
    id: 'builder',
    name: 'Builder Agent',
    purpose: 'Plans implementation tasks, scaffolds safe code changes, and records build receipts.',
    owner: 'Strategic Minds Advisory',
    autonomy: 'dry_run',
    tools: ['github', 'vercel-preview'],
    approvalRequiredFor: ['merge to main', 'production deployment'],
    blockedActions: ['force deploy', 'delete production data', 'secret writes'],
    outputs: ['implementation_plan', 'commit_receipt', 'validation_tasks'],
    fallback: 'Create a GitHub issue with blocker details.'
  },
  {
    id: 'validation',
    name: 'Validation Agent',
    purpose: 'Checks routes, build status, runtime logs, safety gates, and health receipts.',
    owner: 'Strategic Minds Advisory',
    autonomy: 'dry_run',
    tools: ['vercel', 'github', 'health'],
    approvalRequiredFor: ['production rollback', 'production promotion'],
    blockedActions: ['alter live customer workflows'],
    outputs: ['health_receipt', 'risk_report', 'rollback_note'],
    fallback: 'Mark the release blocked and keep the current production version.'
  },
  {
    id: 'billing',
    name: 'Billing Agent',
    purpose: 'Prepares package, invoice, and checkout instructions in test mode only.',
    owner: 'Strategic Minds Advisory',
    autonomy: 'dry_run',
    tools: ['stripe-test-mode', 'shopify-readonly'],
    approvalRequiredFor: ['live checkout', 'invoice sending', 'refunds'],
    blockedActions: ['live payments', 'refunds', 'discount activation'],
    outputs: ['test_checkout_plan', 'invoice_model', 'billing_receipt'],
    fallback: 'Return payment setup instructions without activating checkout.'
  },
  {
    id: 'scheduling',
    name: 'Scheduling Agent',
    purpose: 'Plans call booking and calendar handoffs without sending messages or changing calendars unless approved.',
    owner: 'Strategic Minds Advisory',
    autonomy: 'dry_run',
    tools: ['calendar-read', 'booking-plan'],
    approvalRequiredFor: ['calendar writes', 'client notifications'],
    blockedActions: ['sms', 'unapproved email sends'],
    outputs: ['availability_plan', 'booking_receipt'],
    fallback: 'Provide manual booking link placeholder.'
  },
  {
    id: 'documents',
    name: 'Documents Agent',
    purpose: 'Organizes briefs, roadmaps, invoices, and deliverables into governed document records.',
    owner: 'Strategic Minds Advisory',
    autonomy: 'dry_run',
    tools: ['google-drive', 'supabase-dry-run'],
    approvalRequiredFor: ['sharing files externally', 'deleting files'],
    blockedActions: ['public sharing without approval', 'secret exposure'],
    outputs: ['document_index', 'document_receipt'],
    fallback: 'Create an internal-only document checklist.'
  },
  {
    id: 'workflow',
    name: 'Workflow Agent',
    purpose: 'Maps automations, project steps, status transitions, and handoffs across the client journey.',
    owner: 'Strategic Minds Advisory',
    autonomy: 'dry_run',
    tools: ['workflow-map', 'receipts'],
    approvalRequiredFor: ['activating automations', 'external notifications'],
    blockedActions: ['unapproved webhooks', 'sms', 'live payments'],
    outputs: ['workflow_blueprint', 'automation_queue'],
    fallback: 'Keep workflow in planning mode.'
  },
  {
    id: 'auto-social',
    name: 'Auto Social Agent',
    purpose: 'Drafts social content and distribution plans without publishing.',
    owner: 'Strategic Minds Advisory',
    autonomy: 'dry_run',
    tools: ['content-drafts', 'brand-rules'],
    approvalRequiredFor: ['publishing', 'ad spend', 'brand claims'],
    blockedActions: ['auto-posting', 'paid ads', 'unverified claims'],
    outputs: ['drafts', 'content_calendar', 'approval_queue'],
    fallback: 'Save drafts only.'
  }
];

export function getAgentById(id: string) {
  return AGENT_REGISTRY.find((agent) => agent.id === id);
}
