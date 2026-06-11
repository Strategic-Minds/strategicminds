# Approved Source Truth Manifest

## Status

Canonical source-truth manifest for PR #5 on `feature/strategic-minds-vercel-workflow-os`.

This manifest supersedes generated-asset assumptions until an operator approves a newer source.

## Approved Drive Sources

Primary approved visual source:

- Drive file: `ChatGPT Image Jun 9, 2026, 09_18_27 PM.png`
- Drive ID: `1rmDliv93X2UznD0FEqG1Ll66ONcMgskG`
- MIME type: `image/png`
- Dimensions verified locally: `1536x1024`
- Parent folder: `1rjOt7prvOCaUNgCmcY8Ce605cIv2FuSY`
- Role: approved full website and client dashboard composite, including logo, navigation, hero, 10-step journey, packages, Google Workspace strip, value bar, and client dashboard preview.

Supporting approved text sources:

- `strategic_minds_bootstrap_docs.md`, Drive ID `1DOhLKD6FjNclCgbd0ILM6tS8jufQurg4`
- `Strategic_Minds_End_to_End_System_Master.md`, Drive ID `1-XQ1SBiWGu7SBn4lCuaTJWyRmFVS4T0Z`
- `brand-lock.md`, Drive ID `181Al9kZFmCUzse9Cy7tLBCA1VeEGNaq_`
- `client-dashboard-spec.md`, Drive ID `1ZOGjUWT67LHTQvVbLEd-7Pksh1sRJtN3`
- `admin-control-plane-spec.md`, Drive ID `197iJBvSA-CvFgV8VyiBgd1sd2TYUdxL5`
- `pwa-spec.md`, Drive ID `1BeTHqI6R_WIsFFTY8-qIE6ECBobNHLM0`

## Locked Brand Facts

- Brand name: Strategic Minds Advisory
- Tagline: Intelligence In Motion
- Visual identity: AI-enhanced thinking profile; electric blue, black/navy, white, light and dark mode.
- Locked website direction: Option 1 dark mode, Option 2 light mode.
- End-to-end master also references: Option 4 AI-enhanced thinking profile, black background, electric blue, futuristic operational consulting brand.
- Mode: preview/branch build only until approved.

## Visual Facts Extracted From Approved PNG

- Correct logo: brain/thinking-profile icon plus `STRATEGIC MINDS ADVISORY` wordmark in the top-left of the composite.
- Primary hero copy: `We Turn Ideas Into Automated, AI-Powered Business Systems.`
- Eyebrow: `AI-POWERED. AUTOMATED. RESULTS DRIVEN.`
- Primary CTAs: `SCHEDULE A CALL`, `VIEW PACKAGES`, `CLIENT LOGIN`.
- Primary navigation: Home, Services, Packages, How It Works, About, Schedule a Call, Client Login.
- 10-step client journey: Choose Your Package, Secure Payment, Schedule Your Call, Share Your Idea, We Plan Your System, MVP Development, Review & Feedback, Launch Your System, Automated Updates, Scale & Optimize.
- Package cards: Business Planning Consultation, Workflow Automation Package, MVP System Build Package, Full Business System Package.
- Google Workspace strip: Gmail, Google Drive, Google Calendar, Google Sheets, Google Docs, Google Meet.
- Client dashboard preview: dark left sidebar, light dashboard body, dashboard nav, journey, calls, payments, invoices, documents, updates, messages, settings, logout.

## Extracted Color Anchors From Approved PNG

Use these as implementation anchors; final CSS should be visually checked against the approved PNG:

- Near-white surface: `#FBFBFC`
- Deep navy sidebar/text: `#08172C`
- Electric blue CTA/accent: `#1256D7`
- Soft border/rail: `#B5C8D4`
- Muted text: `#575D6C`
- Success green: `#4BA062`
- Secondary blue: `#424DC5`

## PR Source Review Findings

- PR #5 is open, draft, and unmerged.
- Latest inspected head SHA: `74b16e1fd889b65bbe29049e1693fdbe3332e304`.
- Current PR app routes are mostly placeholders and do not yet implement the approved PNG UI.
- `docs/06-governance/CRITICAL_ASSET_GENERATION_RECEIPT.md` references generated assets that are not the approved dashboard/logo source.
- `public/manifest.json` currently has no icons.

## Vercel Source Review Findings

- Project: `strategicminds`, project ID `prj_DfKbw4bxNrw6comaiOsdwHAQbrCP`.
- Latest inspected preview deployment: `dpl_6e4mT5YUkZS7HppPG4DVrcC7yeWj`.
- Preview URL: `https://strategicminds-209h5vkj7-strategic-minds-advisory.vercel.app`.
- Deployment commit matches PR head `74b16e1fd889b65bbe29049e1693fdbe3332e304`.

## Supabase Source Review Findings

- Connected project: `Strategic Minds Advisory`, project ref `prhppuuwcnmfdhwsagug`, region `us-east-2`.
- No PR #5-specific Supabase branch was found.
- The PR schema tables `clients`, `projects`, `approvals`, `receipts`, and `workflow_runs` are not live on the inspected project.
- Source-controlled Supabase schema and RLS remain drafts until tested on a non-production branch.

## Source Truth Rules

- Do not use generated hero/dashboard/logo assets that conflict with the approved Drive PNG.
- Do not infer a different dashboard layout from the placeholder PR pages.
- Do not treat source-controlled migrations as live database state.
- Do not treat Vercel preview placeholder rendering as final UI approval.
- Use preview/dev/test paths only until all required receipts pass.
