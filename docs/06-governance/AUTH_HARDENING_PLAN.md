# Auth Hardening Plan

## Preview Guard

Client routes under `/client/*` require `sm_client_preview_session` matching `PREVIEW_AUTH_BYPASS_TOKEN`.

Admin routes under `/admin/*` return `401 admin_auth_required` unless `sm_admin_preview_session` matches `PREVIEW_AUTH_BYPASS_TOKEN`.

## Release Requirement

Before merge approval, replace preview-cookie bypass with Supabase Auth session checks and role-backed admin authorization. Do not use user-editable metadata for authorization decisions.

## Blocked Production Actions

No production deploy, live Stripe, email, SMS, social publishing, spend, destructive database action, or customer-facing AI action is approved by this scaffold.
