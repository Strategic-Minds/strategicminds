import type { WorkflowReceipt } from './types';

export type PersistenceStatus = 'disabled' | 'persisted' | 'failed';

export type PersistenceResult = {
  status: PersistenceStatus;
  table: 'autobuilder_run_receipts';
  receiptId: string;
  error?: string;
};

type PersistenceContext = {
  source: string;
  deploymentUrl?: string | null;
};

function persistenceEnabled() {
  return process.env.AUTONOMOUS_CONTROL_PLANE_PERSISTENCE_ENABLED === '1';
}

function getSupabaseConfig() {
  return {
    url: process.env.SUPABASE_URL ?? process.env.NEXT_PUBLIC_SUPABASE_URL,
    serviceKey: process.env.SUPABASE_SERVICE_ROLE_KEY ?? process.env.SUPABASE_SERVICE_KEY
  };
}

function cleanUrl(url: string) {
  return url.replace(/\/$/, '');
}

export async function persistWorkflowReceipt(
  receipt: WorkflowReceipt,
  context: PersistenceContext
): Promise<PersistenceResult> {
  const table = 'autobuilder_run_receipts' as const;

  if (!persistenceEnabled()) {
    return { status: 'disabled', table, receiptId: receipt.id };
  }

  const { url, serviceKey } = getSupabaseConfig();

  if (!url || !serviceKey) {
    return {
      status: 'failed',
      table,
      receiptId: receipt.id,
      error: 'missing_supabase_service_configuration'
    };
  }

  try {
    const response = await fetch(`${cleanUrl(url)}/rest/v1/${table}`, {
      method: 'POST',
      headers: {
        apikey: serviceKey,
        authorization: `Bearer ${serviceKey}`,
        'content-type': 'application/json',
        prefer: 'return=minimal'
      },
      body: JSON.stringify({
        id: receipt.id,
        agent_id: receipt.agentId,
        status: receipt.status,
        risk: receipt.risk,
        approval: receipt.approval,
        title: receipt.title,
        requested_action: receipt.requestedAction,
        receipt,
        source: context.source,
        deployment_url: context.deploymentUrl ?? null,
        created_at: receipt.createdAt,
        updated_at: receipt.updatedAt
      })
    });

    if (!response.ok) {
      return {
        status: 'failed',
        table,
        receiptId: receipt.id,
        error: `supabase_http_${response.status}`
      };
    }

    return { status: 'persisted', table, receiptId: receipt.id };
  } catch {
    return {
      status: 'failed',
      table,
      receiptId: receipt.id,
      error: 'supabase_request_failed'
    };
  }
}
