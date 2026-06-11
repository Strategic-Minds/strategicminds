# Hardening Pass Receipt

## Scope

Draft PR #5 hardening pass for auth, Supabase RLS, Stripe test checkout, and Playwright route coverage.

## Implemented

- Supabase Auth middleware for `/client/*` routes.
- Supabase Auth plus app-metadata admin role middleware for `/admin/*` routes.
- Auth status endpoint using Supabase server session state.
- Stripe checkout route that blocks live keys and only creates sessions with a `sk_test_` key, `STRIPE_TEST_CHECKOUT_ENABLED=true`, and a configured test price.
- Source-controlled RLS policy draft with user-owned reads and admin-role reads.
- Playwright route coverage spec backed by `tests/preview-route-manifest.json`.
- CI source-truth checks for auth, Stripe live-key refusal, RLS policy, and route coverage files.

## Not Performed

- No merge to `main`.
- No production deployment.
- No live Stripe activation.
- No live Supabase migration.
- No email, SMS, social publishing, spend, or destructive database action.

## Remaining Merge Gates

- Configure non-production Supabase env vars and test users.
- Run Supabase Auth login/session/role smoke tests.
- Apply RLS draft only to a non-production Supabase branch/project and record receipts.
- Configure Stripe test keys and test price, then create a test checkout session only in test mode.
- Run full Playwright route coverage against the latest Vercel preview and attach evidence.
- Operator must explicitly approve merge readiness.
