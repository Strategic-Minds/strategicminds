# Approved Asset Manifest

## Status

Canonical asset manifest for PR #5. This supersedes the prior generated image manifest wherever there is a conflict.

## Approved Asset Source

Primary approved asset:

- File: `ChatGPT Image Jun 9, 2026, 09_18_27 PM.png`
- Drive ID: `1rmDliv93X2UznD0FEqG1Ll66ONcMgskG`
- MIME: `image/png`
- Dimensions: `1536x1024`
- Role: full approved website, logo, dashboard, and visual hierarchy source.

## Exact Logo Requirement

- Extract logo from the approved PNG top-left area or request/provide the source logo file from Drive before final implementation.
- Logo content: brain/thinking-profile mark plus `STRATEGIC MINDS ADVISORY` wordmark.
- Do not use the generated PWA icon from the prior receipt as the brand logo.

## Exact Dashboard Requirement

- Client dashboard must match the right-side approved Drive composite, not generated V2 dashboard assets.
- Required dashboard sidebar: Dashboard, My Journey, Calls, Payments, Invoices, Documents, Updates, Messages, Settings, Logout.
- Required dashboard panels: welcome state, current step, next call, project status, amount paid, 10-step journey, recent updates, project progress, documents, payment schedule, bottom schedule CTA.

## Required Asset Map

| Asset ID | Approved source | Implementation rule |
| --- | --- | --- |
| `approved-source-composite` | Drive PNG `1rmDliv93X2UznD0FEqG1Ll66ONcMgskG` | Preserve as visual reference and optional source image. |
| `logo-primary` | Extract from approved PNG or source logo file in Drive | Required before final visual implementation. |
| `hero-system-diagram` | Approved PNG center AI system diagram | Recreate in HTML/CSS/icons or extract only if quality is sufficient. |
| `client-journey-strip` | Approved PNG 10-step journey | Recreate responsively with exact step names. |
| `package-card-set` | Approved PNG package section | Recreate as responsive cards with exact package hierarchy. |
| `workspace-integration-strip` | Approved PNG Google Workspace row | Use real product names/icons only where legally safe. |
| `client-dashboard-preview` | Approved PNG right-side dashboard | Recreate UI; do not use prior generated dashboard image. |
| `pwa-icon-set` | Must be generated from approved logo-primary | Required sizes: 192x192 and 512x512 PNG, maskable-safe. |
| `open-graph-home` | Must be based on approved brand/logo/hero | Do not use wrong generated assets. |

## Incorrect Generated Assets To Quarantine

The following prior generated assets are not approved as source truth:

- `/workspace/output/strategic-minds-hero-command-center.webp`
- `/workspace/output/strategic-minds-client-dashboard-preview.webp`
- `/workspace/output/strategic-minds-admin-control-plane-preview.webp`
- `/workspace/output/strategic-minds-pwa-icon-512.png`
- `/workspace/output/strategic-minds-pwa-icon-192.png`

They must not be copied into `public/images/generated` or `public/icons` unless the operator explicitly approves them after comparing against the Drive source.

## PWA Manifest Requirements

- `public/manifest.json` must include non-empty icons before merge readiness.
- Icons must be derived from approved `logo-primary`.
- Current preview manifest has `icons: []`, so PWA icon validation is not complete.

## Validation Receipts Required

- Asset source receipt proving approved Drive PNG was inspected.
- Logo extraction or source logo receipt.
- Dashboard implementation screenshot compared to approved Drive PNG.
- PWA icon file receipt with sizes and source.
- Playwright visual route screenshots for desktop and mobile.
- Confirmation that no quarantined generated assets are referenced.
