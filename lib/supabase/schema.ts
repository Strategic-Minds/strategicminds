export const SUPABASE_SCHEMA_CONTRACTS = {
  clients: {
    table: 'clients',
    columns: ['id', 'owner_id', 'name', 'email', 'company', 'status', 'created_at', 'updated_at'],
    rls: 'owner_id must match authenticated user or admin role'
  },
  projects: {
    table: 'projects',
    columns: ['id', 'client_id', 'name', 'package_type', 'status', 'current_step', 'created_at', 'updated_at'],
    rls: 'client_id must belong to authenticated user or admin role'
  },
  milestones: {
    table: 'milestones',
    columns: ['id', 'project_id', 'title', 'status', 'sort_order', 'due_at', 'completed_at'],
    rls: 'project must belong to authenticated user or admin role'
  },
  documents: {
    table: 'documents',
    columns: ['id', 'project_id', 'title', 'url', 'type', 'status', 'created_at'],
    rls: 'project must belong to authenticated user or admin role'
  },
  invoices: {
    table: 'invoices',
    columns: ['id', 'project_id', 'amount_cents', 'currency', 'status', 'provider', 'provider_id', 'created_at'],
    rls: 'project must belong to authenticated user or admin role'
  },
  agent_receipts: {
    table: 'agent_receipts',
    columns: ['id', 'agent_id', 'project_id', 'status', 'risk', 'approval', 'payload', 'created_at'],
    rls: 'admin only for writes; client can read receipts attached to own project'
  }
} as const;

export const SUPABASE_SQL_DRAFT = `
create table if not exists clients (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid,
  name text not null,
  email text,
  company text,
  status text not null default 'active',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists projects (
  id uuid primary key default gen_random_uuid(),
  client_id uuid references clients(id),
  name text not null,
  package_type text,
  status text not null default 'planning',
  current_step integer not null default 1,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists milestones (
  id uuid primary key default gen_random_uuid(),
  project_id uuid references projects(id),
  title text not null,
  status text not null default 'queued',
  sort_order integer not null default 0,
  due_at timestamptz,
  completed_at timestamptz
);

create table if not exists documents (
  id uuid primary key default gen_random_uuid(),
  project_id uuid references projects(id),
  title text not null,
  url text,
  type text,
  status text not null default 'draft',
  created_at timestamptz not null default now()
);

create table if not exists invoices (
  id uuid primary key default gen_random_uuid(),
  project_id uuid references projects(id),
  amount_cents integer not null default 0,
  currency text not null default 'usd',
  status text not null default 'test_mode',
  provider text,
  provider_id text,
  created_at timestamptz not null default now()
);

create table if not exists agent_receipts (
  id text primary key,
  agent_id text not null,
  project_id uuid references projects(id),
  status text not null,
  risk text not null,
  approval text not null,
  payload jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);
`;
