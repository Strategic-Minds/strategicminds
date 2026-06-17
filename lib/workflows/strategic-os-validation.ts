import { syncStrategicOSDashboardState } from '../dashboard/sync-dashboard-state';
import { writeStrategicOSReceipt } from '../receipts/write-receipt';
import {
  checkGitHubReadiness,
  checkGoogleWorkspaceHealth,
  checkPaymentAndIntakeHealth,
  checkSupabaseSchemaAndRLS,
  checkVercelDeploymentAndEnv,
  createRunLock,
  enqueueRepairBlocks,
  readDriveBlueprintAndManifests,
  routeAIQualityReview,
  runPlaywrightSmokePlan,
  syncMasterRegistry,
  validateManifestCompleteness,
  type StrategicOSWorkflowContext,
  type StrategicOSWorkflowInput
} from './steps/strategic-os-steps';

export type StrategicOSWorkflowResult = {
  runId: string;
  runWindow: string;
  status: 'accepted' | 'completed';
  receiptId: string;
  approvalCount: number;
  repairBlockCount: number;
  persistence: {
    driveReceipt: boolean;
    supabaseReceipt: boolean;
    dashboardEvent: boolean;
  };
};

export async function startStrategicOSValidationWorkflow(input: StrategicOSWorkflowInput): Promise<StrategicOSWorkflowResult> {
  // This wrapper is the repo-safe start point. On Vercel Workflows, the function below is promoted
  // to durable execution by the platform integration while keeping this route contract stable.
  return strategicOSValidationWorkflow(input);
}

export async function strategicOSValidationWorkflow(input: StrategicOSWorkflowInput): Promise<StrategicOSWorkflowResult> {
  'use workflow';

  const context: StrategicOSWorkflowContext = {
    input,
    checks: [],
    approvals: [],
    repairBlocks: []
  };

  await createRunLock(context);
  await readDriveBlueprintAndManifests(context);
  await validateManifestCompleteness(context);
  await syncMasterRegistry(context);
  await checkGitHubReadiness(context);
  await checkVercelDeploymentAndEnv(context);
  await checkSupabaseSchemaAndRLS(context);
  await checkPaymentAndIntakeHealth(context);
  await checkGoogleWorkspaceHealth(context);
  await runPlaywrightSmokePlan(context);
  await routeAIQualityReview(context);
  await enqueueRepairBlocks(context);

  const receipt = await writeStrategicOSReceipt(input, context.checks);
  const dashboardState = await syncStrategicOSDashboardState(receipt, context.approvals);

  return {
    runId: input.runId,
    runWindow: input.runWindow,
    status: 'completed',
    receiptId: receipt.receipt_id,
    approvalCount: context.approvals.length,
    repairBlockCount: context.repairBlocks.length,
    persistence: {
      driveReceipt: Boolean(receipt.persistence?.drive?.ok),
      supabaseReceipt: Boolean(receipt.persistence?.receipt?.ok),
      dashboardEvent: Boolean(dashboardState.persistence?.dashboardEvent?.ok)
    }
  };
}
