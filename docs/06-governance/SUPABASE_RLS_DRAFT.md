# Supabase RLS Draft

RLS migrations:

- `supabase/migrations/202606110001_preview_rls_draft.sql`
- `supabase/migrations/202606110002_auth_rls_policy_draft.sql`

## Implemented Policy Shape

- `public.clients.user_id` maps client records to `auth.users.id`.
- Authenticated users can read their own client row.
- Authenticated users can read projects, approvals, receipts, and workflow runs connected to their own client row.
- Admin users can read operational tables when `auth.jwt()->app_metadata->>role = 'admin'`.
- Broad anonymous read/write policies are not created.
- Non-profile writes remain server-side only until approval workflows are finalized.

## Release Requirement

Apply and test these migrations only on a non-production Supabase branch/project first. Production migration remains gated until RLS smoke receipts and rollback evidence exist.
