# Auth Hardening Plan

## Implemented In PR #5 Draft

Client routes under `/client/*` now require a Supabase Auth session through middleware.

Admin routes under `/admin/*` require a Supabase Auth session plus an admin role in `user.app_metadata.role` or `user.app_metadata.roles`.

If Supabase public env vars are missing, client routes redirect to `/login` and admin routes return `401 supabase_auth_not_configured`.

## Required Environment

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

Do not expose `SUPABASE_SERVICE_ROLE_KEY` to the browser. Service-role use remains server-side only and approval-gated.

## Release Requirement

Before merge approval, validate login, logout, session refresh, client isolation, and admin role assignment on a non-production Supabase project or branch. Do not use user-editable metadata for authorization decisions.

## Blocked Production Actions

No production deploy, live Stripe, email, SMS, social publishing, spend, destructive database action, or customer-facing AI action is approved by this scaffold.
