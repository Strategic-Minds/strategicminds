# Approved Backend Manifest

## Status

Backend implementation manifest for PR #5. This reflects Drive source truth, current PR diff, Vercel preview inspection, and read-only Supabase inspection.

## Approved Stack

- Next.js on Vercel
- Supabase Auth and database
- Stripe checkout and invoices in test mode only until approval
- Google Workspace placeholders: Drive, Calendar, Docs, Sheets, Meet, Gmail
- Twilio queue placeholder only; no SMS send
- Vercel AI Gateway with refusal rules
- Vercel Cron every five minutes
- Validation agent pattern

## API Routes

Required by PR/source truth:

- `/api/auth/status`
- `/api/stripe/checkout`
- `/api/stripe/webhook`
- `/api/agent/validate`
- `/api/ai/chat`
- `/api/ai/call`
- `/api/google/drive-sync`
- `/api/contact`
- `/api/intake`
- `/api/admin/approve`
- `/api/release/receipt`
- `/api/cron/client-ops`

Bootstrap source also names `/api/twilio/queue`; this is not present in current PR and remains required if Twilio queue is kept in scope.

## Auth Requirements

- Client routes must require Supabase Auth.
- Admin routes must require Supabase Auth plus admin role.
- Admin role must come from `app_metadata` or equivalent server-owned role mapping, not user-editable metadata.
- Service role must never be exposed to browser code.
- Current preview reports Supabase public env is not configured, so auth cannot be fully verified in preview.

## Supabase Schema Draft Requirements

Source-controlled PR draft currently defines:

- `public.clients`
- `public.projects`
- `public.approvals`
- `public.receipts`
- `public.workflow_runs`

Required relationships:

- `clients.user_id` references `auth.users(id)`.
- `projects.client_id` references `clients(id)`.
- `approvals.project_id`, `receipts.project_id`, and `workflow_runs.project_id` reference `projects(id)`.

## Supabase RLS Requirements

- Enable RLS on all public tables in the approved schema.
- Authenticated users can read their own client row.
- Authenticated users can read project/approval/receipt/workflow rows connected to their own client row.
- Admin users can read operational tables using server-owned role metadata.
- No broad anonymous read/write policies.
- Non-profile writes remain server-side and approval-gated until workflows are finalized.

## Supabase Live Inspection Receipt

Read-only inspection of connected project `prhppuuwcnmfdhwsagug` found:

- Project name: Strategic Minds Advisory
- Region: `us-east-2`
- Status: `ACTIVE_HEALTHY`
- No PR #5-specific dev branch found.
- Proposed PR tables `clients`, `projects`, `approvals`, `receipts`, `workflow_runs` are not live.
- Security advisor reports `public.autobuilder_run_receipts` has RLS enabled with no policies; this is outside the PR draft tables but must be tracked.

## Stripe Test-Mode Requirements

- Checkout route must block `sk_live_` keys.
- Checkout route may create sessions only with `sk_test_` keys and `STRIPE_TEST_CHECKOUT_ENABLED=true`.
- Preview inspection showed Stripe status `configuration_required`, `mode: test_only`, `liveStripe: false`, `checkoutCreated: false`, `testCheckoutEnabled: false`, `hasTestPrice: false`.
- No live Stripe activation is authorized.

## AI Gateway Refusal Rules

AI routes must refuse or gate:

- credentials or secrets
- production deploys
- live Stripe/payment activation
- email sending
- SMS sending
- destructive database actions
- spend or purchasing
- social publishing
- unapproved customer-facing calls

## Cron Requirements

- Vercel config must schedule `/api/cron/client-ops` every five minutes: `*/5 * * * *`.
- Runtime route must require `Authorization: Bearer ${CRON_SECRET}`.
- Unsigned preview request was verified as `401`.
- Safe checks only: queues, approvals, validation, receipts, Stripe unpaid, missing project/folder, scheduled call without journey update, draft invoices, payment milestones, AI escalations, Drive receipts.

## Release Checklist

Do not merge until all are receipt-backed:

- Approved Drive source reviewed and reflected in manifests.
- GitHub PR diff reviewed and incorrect generated assets quarantined.
- Vercel preview commit matches PR head after final manifest/front-end commits.
- Preview route coverage passes.
- Supabase non-production branch exists and RLS/auth tests pass.
- Stripe test checkout passes with test key and test price only.
- AI refusal rules tested.
- PWA manifest/icons validated.
- Playwright coverage includes public, client, admin, API, cron, PWA routes.

## Rollback Checklist

- Keep PR draft until merge approval.
- Revert branch commits if preview breaks.
- Do not promote or deploy production.
- Do not apply production migrations.
- Keep Supabase branch isolated until approved.
- Keep Stripe test mode only.
- Preserve a receipt for every validation run.
