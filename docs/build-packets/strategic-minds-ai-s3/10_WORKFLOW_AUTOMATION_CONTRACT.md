# 10 WORKFLOW / AUTOMATION CONTRACT
Vercel Cron remains the deterministic heartbeat.

Schedule:
`*/5 * * * *` -> `/api/reconcile`

Each run:
1. Read canonical GitHub SHA.
2. Read BuildPacket/version.
3. Read validation and approval state.
4. Inspect Vercel deployment identity.
5. Inspect Supabase connector health if configured.
6. Classify SYNCED / SOURCE_CHANGED / DRIFT / VALIDATION_FAILED / APPROVAL_REQUIRED.
7. Queue only safe next actions.
8. Write receipt.

No cron-triggered production promotion, DNS change, secret mutation, payment, customer message, or destructive database action.
