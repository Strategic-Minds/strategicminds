# 08 DATA ENTITY CONTRACT
Planned Supabase entities, schema-only until approved migration:
- profiles
- organizations
- organization_members
- inquiries
- research_briefs
- research_sources
- intelligence_signals
- signal_snapshots
- projects
- project_updates
- client_documents
- approvals
- validation_receipts

Rules:
- organization_id on tenant-owned tables.
- RLS on every exposed table.
- Authorization uses membership tables or app_metadata, never user_metadata.
- No service role key in browser code.
