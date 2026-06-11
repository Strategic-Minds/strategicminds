-- Strategic Minds Advisory Auth/RLS policy draft.
-- Source-controlled only. Do not run against production without operator approval.

alter table if exists public.clients add column if not exists user_id uuid references auth.users(id) on delete cascade;

alter table if exists public.clients enable row level security;
alter table if exists public.projects enable row level security;
alter table if exists public.approvals enable row level security;
alter table if exists public.receipts enable row level security;
alter table if exists public.workflow_runs enable row level security;

create policy "clients_select_own" on public.clients
  for select
  to authenticated
  using (user_id = auth.uid());

create policy "clients_update_own" on public.clients
  for update
  to authenticated
  using (user_id = auth.uid())
  with check (user_id = auth.uid());

create policy "projects_select_own" on public.projects
  for select
  to authenticated
  using (
    exists (
      select 1 from public.clients
      where clients.id = projects.client_id
      and clients.user_id = auth.uid()
    )
  );

create policy "approvals_select_own" on public.approvals
  for select
  to authenticated
  using (
    exists (
      select 1
      from public.projects
      join public.clients on clients.id = projects.client_id
      where projects.id = approvals.project_id
      and clients.user_id = auth.uid()
    )
  );

create policy "receipts_select_own" on public.receipts
  for select
  to authenticated
  using (
    exists (
      select 1
      from public.projects
      join public.clients on clients.id = projects.client_id
      where projects.id = receipts.project_id
      and clients.user_id = auth.uid()
    )
  );

create policy "workflow_runs_select_own" on public.workflow_runs
  for select
  to authenticated
  using (
    exists (
      select 1
      from public.projects
      join public.clients on clients.id = projects.client_id
      where projects.id = workflow_runs.project_id
      and clients.user_id = auth.uid()
    )
  );

create policy "admin_read_clients" on public.clients
  for select
  to authenticated
  using ((auth.jwt() -> 'app_metadata' ->> 'role') = 'admin');

create policy "admin_read_projects" on public.projects
  for select
  to authenticated
  using ((auth.jwt() -> 'app_metadata' ->> 'role') = 'admin');

create policy "admin_read_approvals" on public.approvals
  for select
  to authenticated
  using ((auth.jwt() -> 'app_metadata' ->> 'role') = 'admin');

create policy "admin_read_receipts" on public.receipts
  for select
  to authenticated
  using ((auth.jwt() -> 'app_metadata' ->> 'role') = 'admin');

create policy "admin_read_workflow_runs" on public.workflow_runs
  for select
  to authenticated
  using ((auth.jwt() -> 'app_metadata' ->> 'role') = 'admin');

-- Writes beyond the user profile update path remain server-side only until approval workflows are finalized.
