-- Strategic Minds Advisory preview RLS draft.
-- Review and apply only after operator approval. Do not run against production automatically.

alter table if exists public.clients enable row level security;
alter table if exists public.projects enable row level security;
alter table if exists public.approvals enable row level security;
alter table if exists public.receipts enable row level security;
alter table if exists public.workflow_runs enable row level security;

-- Default deny is preserved until real Supabase Auth ownership columns and roles are finalized.
-- Service-role server routes may write during approved backend operations.
-- No anon or authenticated broad read/write policies are created in this draft.

comment on table public.clients is 'RLS enabled draft. Add owner/user mapping before exposing client data.';
comment on table public.projects is 'RLS enabled draft. Add owner/user mapping before exposing project data.';
comment on table public.approvals is 'RLS enabled draft. Approval writes remain gated server-side.';
comment on table public.receipts is 'RLS enabled draft. Receipt reads require approved access model.';
comment on table public.workflow_runs is 'RLS enabled draft. Workflow runs remain private until observability policy is approved.';
