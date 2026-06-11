# Approved Frontend Manifest

## Status

Frontend implementation manifest for PR #5. This must be treated as canonical before rewriting any pages.

## Approved Visual Hierarchy

Use the approved Drive PNG as the visual source of truth.

1. Header: logo/wordmark left, compact navigation center/right, Schedule a Call primary CTA, Client Login secondary CTA.
2. First viewport: left hero copy and CTAs, center AI thinking-profile system diagram, right 10-step client journey timeline.
3. Package section: four package cards in a light, bordered grid with a `Most Popular` marker on MVP System Build Package.
4. Integration section: Google Workspace strip with Gmail, Drive, Calendar, Sheets, Docs, Meet.
5. Trust/value band: dark navy horizontal band with automation, process, delivery, and support signals.
6. Client dashboard preview: dark left sidebar, white dashboard surface, top welcome state, metric cards, 10-step journey, recent updates, project progress, documents, payment schedule, bottom CTA.

## Exact Approved Logo Source

- Source: Drive image `ChatGPT Image Jun 9, 2026, 09_18_27 PM.png`.
- Drive ID: `1rmDliv93X2UznD0FEqG1Ll66ONcMgskG`.
- Logo treatment: brain/thinking-profile icon plus stacked `STRATEGIC MINDS ADVISORY` wordmark.
- Do not replace with abstract generated icon or unrelated logo.

## Exact Approved Dashboard Mockup Source

- Source: same approved Drive PNG, right-side client dashboard composite.
- The current PR `/client` route placeholder does not match this approved dashboard.
- Client dashboard modules required by Drive spec: Overview, 10 Step Journey, Projects, Documents, Payments, Invoices, Meetings, Messages, AI Assistant, AI Call, Settings.

## Style Rules

- Colors: `#FBFBFC`, `#08172C`, `#1256D7`, `#B5C8D4`, `#575D6C`, `#4BA062`, `#424DC5`.
- Typography: compact sans-serif, 0 letter spacing, large hero only in public hero.
- Radius: 8px or less.
- Layout: restrained SaaS/advisory dashboard, no decorative orbs, no purple/beige/brown theme.
- Use lucide or existing icon library for UI icons unless exact logo asset is being extracted from the Drive source.

## Public Routes

- `/`
- `/services`
- `/packages`
- `/how-it-works`
- `/about`
- `/schedule`
- `/contact`
- `/signup`
- `/login`
- `/terms`
- `/privacy`
- `/refund-policy`

## Public Page Content Requirements

Homepage must include:

- Brand: Strategic Minds Advisory
- Tagline: Intelligence In Motion
- Eyebrow: AI-powered, automated, results driven.
- Hero headline: We Turn Ideas Into Automated, AI-Powered Business Systems.
- Support copy about planning, automation, systems, workflows, websites, and content engines.
- CTAs: Schedule a Call, View Packages.
- 10-step journey with exact approved step names.
- Package cards matching the approved PNG.
- Google Workspace integration strip.

## Client Dashboard Routes

- `/client`
- `/client/journey`
- `/client/projects`
- `/client/documents`
- `/client/payments`
- `/client/invoices`
- `/client/meetings`
- `/client/messages`
- `/client/ai-assistant`
- `/client/ai-call`
- `/client/settings`

Client routes must be protected by Supabase Auth before merge approval. Placeholder data must remain synthetic.

## Admin Control Plane Routes

- `/admin`
- `/admin/leads`
- `/admin/clients`
- `/admin/projects`
- `/admin/payments`
- `/admin/invoices`
- `/admin/workflows`
- `/admin/agents`
- `/admin/reports`
- `/admin/approvals`
- `/admin/receipts`
- `/admin/releases`
- `/admin/settings`

Admin modules required by Drive spec: Leads, Clients, Projects, Payments, Workflows, Agents, Approvals, Reports, Receipts, Releases.

Admin routes must reject unauthenticated users and require admin role via safe app metadata, not user-editable metadata.

## PWA Requirements

- Manifest must include approved app name, short name, display mode, start URL, theme/background colors, and icons generated from the approved logo source.
- Current `public/manifest.json` is incomplete because `icons` is empty.
- Service worker/offline shell remains required before merge readiness.

## Validation Receipts Required Before Merge

- Build passes.
- Full public routes pass.
- Client routes redirect or authenticate correctly.
- Admin routes require admin role.
- Approved logo/dashboard source is used or directly extracted into assets.
- PWA icons render from approved source.
- Playwright screenshots confirm no overlap and match approved visual hierarchy.
- No generated/quarantined wrong assets are referenced.
