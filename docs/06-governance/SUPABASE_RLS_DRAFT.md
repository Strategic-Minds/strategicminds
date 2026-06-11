# Supabase RLS Draft

RLS draft migration: `supabase/migrations/202606110001_preview_rls_draft.sql`.

The draft enables RLS on core scaffold tables and intentionally creates no broad anon/authenticated policies. This preserves default deny until real ownership columns, Supabase Auth sessions, and admin roles are finalized.

Do not apply this migration to production without operator approval and a rollback receipt.
