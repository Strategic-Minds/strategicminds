# Strategic Minds OS Vercel Workflow Implementation

Date: 2026-06-17
Repo: Strategic-Minds/strategicminds
Drive spec: https://docs.google.com/document/d/1kuzazI2tfnl1tDdj9LCQsXXAvTKx4VFfdWOWvwjbuhI/edit

## Scope Implemented

This commit series implements only the approved cron/workflow backbone from the Drive spec.

Implemented files:

- `vercel.json`
- `app/api/cron/strategic-os/route.ts`
- `lib/workflows/strategic-os-validation.ts`
- `lib/workflows/steps/strategic-os-steps.ts`
- `lib/receipts/write-receipt.ts`
- `lib/dashboard/sync-dashboard-state.ts`
- `tests/strategic-os-cron.spec.ts`

## Cron

Vercel cron path:

```json
{
  "path": "/api/cron/strategic-os",
  "schedule": "*/5 * * * *"
}
```

The existing `/api/autobuilder/tick` hourly cron was preserved.

## Security

The route requires:

```http
Authorization: Bearer $CRON_SECRET
```

If `CRON_SECRET` is missing, the route returns `500` with `cron_secret_not_configured`.
If the bearer token is wrong or missing, the route returns `401`.

No secret values are returned in the response body.

## Workflow Backbone

The workflow uses the Vercel-compatible directive structure from the Drive spec:

- `"use workflow"` in `strategicOSValidationWorkflow`
- `"use step"` in isolated workflow steps

Current steps:

1. Create run lock
2. Read Drive blueprint/manifests contract
3. Validate manifest completeness
4. Sync master registry contract
5. Check GitHub readiness
6. Check Vercel deployment/env contract
7. Check Supabase schema/RLS contract
8. Check payment/intake contract
9. Check Google Workspace contract
10. Check Playwright/Chromium validation contract
11. Check AI Gateway/Groq/OpenAI routing contract
12. Queue repair blocks
13. Write receipt
14. Sync dashboard state

## Chromium Browser Worker Note

The workflow checks for any of these env names at runtime:

- `CHROMIUM_BROWSER_WORKER_URL`
- `BROWSER_WORKER_URL`
- `PLAYWRIGHT_BROWSER_WORKER_URL`

This records the user note that a Chromium browser worker has been installed in Vercel and env has been set. The next implementation pass should wire this into actual Playwright route screenshots and receipt storage.

## Remaining Work

This is the backbone, not the complete production system. Remaining items:

- Wire true Vercel Workflow SDK/package integration if required by the final Vercel project setup.
- Persist receipts to Supabase and Google Drive.
- Implement live registry sync through Google Sheets/Drive connector.
- Implement Supabase schema introspection and RLS verification.
- Implement Stripe/Shopify webhook verification.
- Implement Gmail and Calendar connector checks.
- Implement Playwright/Chromium screenshot execution through the Vercel browser worker.
- Add CI once package manager/lockfile strategy is confirmed.

## Status

Repo implementation: completed for approved cron/workflow backbone only.
Production launch: still blocked by release gate and live validation receipts.
