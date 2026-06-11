-- Strategic Minds Advisory schema draft
create table if not exists clients (id uuid primary key default gen_random_uuid(), email text unique, name text, created_at timestamptz default now());
create table if not exists projects (id uuid primary key default gen_random_uuid(), client_id uuid references clients(id), package_name text, status text default 'intake', current_step int default 1, created_at timestamptz default now());
create table if not exists approvals (id uuid primary key default gen_random_uuid(), project_id uuid references projects(id), approval_type text, status text default 'pending', created_at timestamptz default now());
create table if not exists receipts (id uuid primary key default gen_random_uuid(), project_id uuid references projects(id), receipt_type text, content jsonb, created_at timestamptz default now());
create table if not exists workflow_runs (id uuid primary key default gen_random_uuid(), project_id uuid references projects(id), run_type text, status text, log jsonb, created_at timestamptz default now());
