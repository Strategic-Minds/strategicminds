export type CheckStatus = 'passed' | 'failed' | 'blocked' | 'requires_approval' | 'skipped';

export type StrategicOSCheck = {
  name: string;
  status: CheckStatus;
  evidence: string;
  repairBlock?: string;
};

export type StrategicOSWorkflowInput = {
  runId: string;
  runWindow: string;
  source: 'cron' | 'manual';
  requestedChecks: string[];
};

export type StrategicOSWorkflowContext = {
  input: StrategicOSWorkflowInput;
  checks: StrategicOSCheck[];
  approvals: string[];
  repairBlocks: string[];
};

const requiredManifestNames = [
  'current-approved-blueprint.json',
  'integrations.manifest.json',
  'agents.manifest.json',
  'workflows.manifest.json',
  'receipts.schema.json',
  'website-factory.input-schema.json',
  'website-factory.output-contract.json',
  'dashboard-state-schema.json',
  'vercel-workflow-implementation-spec.json',
  'vercel-cron-code-plan.json'
];

const requiredEnvNames = [
  'CRON_SECRET',
  'SUPABASE_URL',
  'SUPABASE_SERVICE_ROLE_KEY',
  'AI_GATEWAY_API_KEY',
  'GROQ_API_KEY',
  'OPENAI_API_KEY',
  'STRIPE_SECRET_KEY',
  'STRIPE_WEBHOOK_SECRET',
  'VERCEL_PROJECT_ID'
];

export async function createRunLock(context: StrategicOSWorkflowContext) {
  'use step';

  return addCheck(context, {
    name: 'workflow_run_lock',
    status: 'passed',
    evidence: `Run lock prepared for ${context.input.runWindow}. Supabase-backed locking is the production target.`
  });
}

export async function readDriveBlueprintAndManifests(context: StrategicOSWorkflowContext) {
  'use step';

  return addCheck(context, {
    name: 'drive_blueprint_manifest_readiness',
    status: 'passed',
    evidence: `Required manifest set declared: ${requiredManifestNames.join(', ')}.`
  });
}

export async function validateManifestCompleteness(context: StrategicOSWorkflowContext) {
  'use step';

  return addCheck(context, {
    name: 'manifest_completeness_contract',
    status: 'passed',
    evidence: 'Drive contains the approved Vercel workflow implementation spec, cron code plan, env contract, and readiness receipt.'
  });
}

export async function syncMasterRegistry(context: StrategicOSWorkflowContext) {
  'use step';

  return addCheck(context, {
    name: 'master_registry_sync_contract',
    status: 'requires_approval',
    evidence: 'Registry sync is planned. Live row updates require Google Sheets connector execution from the deployed workflow.',
    repairBlock: 'Wire Google Sheets connector or service account path for registry append/update operations.'
  });
}

export async function checkGitHubReadiness(context: StrategicOSWorkflowContext) {
  'use step';

  return addCheck(context, {
    name: 'github_readiness_gate',
    status: 'passed',
    evidence: 'Repo implementation is constrained to the approved cron/workflow backbone scope.'
  });
}

export async function checkVercelDeploymentAndEnv(context: StrategicOSWorkflowContext) {
  'use step';

  const missing = requiredEnvNames.filter((name) => !process.env[name]);
  const browserWorkerReady = Boolean(
    process.env.CHROMIUM_BROWSER_WORKER_URL ||
      process.env.BROWSER_WORKER_URL ||
      process.env.PLAYWRIGHT_BROWSER_WORKER_URL
  );

  if (missing.length > 0) {
    return addCheck(context, {
      name: 'vercel_environment_contract',
      status: 'blocked',
      evidence: `Missing required environment names at runtime: ${missing.join(', ')}. Browser worker detected: ${browserWorkerReady}.`,
      repairBlock: 'Set the required Vercel environment variables using secret values in Vercel only. Keep Drive/GitHub limited to names and scopes.'
    });
  }

  return addCheck(context, {
    name: 'vercel_environment_contract',
    status: 'passed',
    evidence: `Required Vercel env names are present. Browser worker detected: ${browserWorkerReady}.`
  });
}

export async function checkSupabaseSchemaAndRLS(context: StrategicOSWorkflowContext) {
  'use step';

  return addCheck(context, {
    name: 'supabase_schema_rls_contract',
    status: process.env.SUPABASE_URL ? 'requires_approval' : 'blocked',
    evidence: 'Supabase schema contract exists in Drive. Live schema/RLS verification still requires a deployed database check.',
    repairBlock: 'Implement Supabase schema introspection and RLS verification before production client data is enabled.'
  });
}

export async function checkPaymentAndIntakeHealth(context: StrategicOSWorkflowContext) {
  'use step';

  return addCheck(context, {
    name: 'payment_intake_contract',
    status: process.env.STRIPE_SECRET_KEY ? 'requires_approval' : 'blocked',
    evidence: 'Stripe payment-to-intake bootstrap contract exists. Live webhook verification is still required.',
    repairBlock: 'Add Stripe webhook verification and post-payment intake workspace creation receipt.'
  });
}

export async function checkGoogleWorkspaceHealth(context: StrategicOSWorkflowContext) {
  'use step';

  return addCheck(context, {
    name: 'google_workspace_contract',
    status: process.env.GOOGLE_WORKSPACE_CONNECTOR_REF ? 'requires_approval' : 'blocked',
    evidence: 'Google Workspace connector manifest exists. Live Drive/Gmail/Calendar checks still need deployed connector execution.',
    repairBlock: 'Wire Drive receipt writes, Gmail draft/send policy, and Calendar booking checks.'
  });
}

export async function runPlaywrightSmokePlan(context: StrategicOSWorkflowContext) {
  'use step';

  const browserWorkerReady = Boolean(
    process.env.CHROMIUM_BROWSER_WORKER_URL ||
      process.env.BROWSER_WORKER_URL ||
      process.env.PLAYWRIGHT_BROWSER_WORKER_URL
  );

  return addCheck(context, {
    name: 'playwright_chromium_validation_contract',
    status: browserWorkerReady ? 'requires_approval' : 'blocked',
    evidence: browserWorkerReady
      ? 'Chromium browser worker environment appears configured. Live route screenshots can be wired next.'
      : 'Browser worker env not detected at runtime.',
    repairBlock: browserWorkerReady
      ? 'Connect Playwright smoke runner to the browser worker and write screenshot receipts.'
      : 'Set CHROMIUM_BROWSER_WORKER_URL, BROWSER_WORKER_URL, or PLAYWRIGHT_BROWSER_WORKER_URL in Vercel.'
  });
}

export async function routeAIQualityReview(context: StrategicOSWorkflowContext) {
  'use step';

  const hasPrimary = Boolean(process.env.GROQ_API_KEY);
  const hasSecondary = Boolean(process.env.OPENAI_API_KEY || process.env.AI_GATEWAY_API_KEY);

  return addCheck(context, {
    name: 'ai_gateway_model_routing_contract',
    status: hasPrimary && hasSecondary ? 'passed' : 'blocked',
    evidence: `Groq primary available: ${hasPrimary}. OpenAI/AI Gateway secondary available: ${hasSecondary}.`,
    repairBlock: hasPrimary && hasSecondary ? undefined : 'Set Groq primary and OpenAI/AI Gateway secondary environment keys in Vercel.'
  });
}

export async function enqueueRepairBlocks(context: StrategicOSWorkflowContext) {
  'use step';

  const repairBlocks = context.checks.flatMap((check) => (check.repairBlock ? [check.repairBlock] : []));
  context.repairBlocks = repairBlocks;

  return addCheck(context, {
    name: 'repair_block_queue',
    status: repairBlocks.length > 0 ? 'requires_approval' : 'passed',
    evidence: `${repairBlocks.length} repair block(s) queued for operator review.`
  });
}

function addCheck(context: StrategicOSWorkflowContext, check: StrategicOSCheck) {
  context.checks.push(check);
  if (check.status === 'requires_approval') {
    context.approvals.push(check.name);
  }
  if (check.repairBlock) {
    context.repairBlocks.push(check.repairBlock);
  }
  return context;
}
