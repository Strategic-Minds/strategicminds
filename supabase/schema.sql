-- Strategic Minds Advisory schema draft.
-- Source-controlled only. Apply to production only after operator approval and rollback receipt.

create table if not exists public.clients (
  id uuid primary key default gen_random_uuid(),
  user_id uuid unique references auth.users(id) on delete cascade,
  email text unique,
  name text,
  created_at timestamptz default now()
);

create table if not exists public.projects (
  id uuid primary key default gen_random_uuid(),
  client_id uuid references public.clients(id) on delete cascade,
  package_name text,
  status text default 'intake',
  current_step int default 1,
  created_at timestamptz default now()
);

create table if not exists public.approvals (
  id uuid primary key default gen_random_uuid(),
  project_id uuid references public.projects(id) on delete cascade,
  approval_type text,
  status text default 'pending',
  created_at timestamptz default now()
);

create table if not exists public.receipts (
  id uuid primary key default gen_random_uuid(),
  project_id uuid references public.projects(id) on delete cascade,
  receipt_type text,
  content jsonb,
  created_at timestamptz default now()
);

create table if not exists public.workflow_runs (
  id uuid primary key default gen_random_uuid(),
  project_id uuid references public.projects(id) on delete cascade,
  run_type text,
  status text,
  log jsonb,
  created_at timestamptz default now()
);

alter table public.clients enable row level security;
alter table public.projects enable row level security;
alter table public.approvals enable row level security;
alter table public.receipts enable row level security;
alter table public.workflow_runs enable row level security;
