type SupabaseRequestOptions = {
  method?: 'GET' | 'POST' | 'PATCH';
  body?: unknown;
  prefer?: string;
};

export type SupabaseWriteResult = {
  ok: boolean;
  status: number;
  table: string;
  error?: string;
};

export function hasSupabaseServerConfig() {
  return Boolean(process.env.SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY);
}

export async function writeSupabaseRow(table: string, row: Record<string, unknown>): Promise<SupabaseWriteResult> {
  return requestSupabase(table, {
    method: 'POST',
    body: row,
    prefer: 'return=minimal'
  });
}

async function requestSupabase(table: string, options: SupabaseRequestOptions): Promise<SupabaseWriteResult> {
  const url = process.env.SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !serviceRoleKey) {
    return {
      ok: false,
      status: 0,
      table,
      error: 'supabase_env_not_configured'
    };
  }

  const endpoint = `${url.replace(/\/$/, '')}/rest/v1/${encodeURIComponent(table)}`;
  const response = await fetch(endpoint, {
    method: options.method ?? 'POST',
    headers: {
      apikey: serviceRoleKey,
      authorization: `Bearer ${serviceRoleKey}`,
      'content-type': 'application/json',
      ...(options.prefer ? { prefer: options.prefer } : {})
    },
    body: options.body ? JSON.stringify(options.body) : undefined,
    cache: 'no-store'
  });

  if (!response.ok) {
    const errorText = await response.text().catch(() => 'unknown_supabase_error');
    return {
      ok: false,
      status: response.status,
      table,
      error: errorText.slice(0, 500)
    };
  }

  return {
    ok: true,
    status: response.status,
    table
  };
}
