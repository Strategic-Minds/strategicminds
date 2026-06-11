# Strategic Minds Advisory Canonical Image Manifest

## Purpose

This is the image source of truth for website and brand-pack generation. A generator should create or request these assets before producing final public, client, and admin UI.

Structured generator file: `docs/01-builder-docs/generator-image-manifest.json`.

## Global Image Rules

Use:

- realistic or polished bitmap imagery
- premium advisory/business-system context
- crisp SaaS workflow interfaces
- synthetic placeholder data only
- blue/cyan accents on ink, white, and mist foundations
- clear subjects that explain the page purpose

Avoid:

- generic robot mascots
- abstract gradient-only hero art
- dark unreadable stock photos
- purple blobs/orbs
- fake revenue screenshots
- fake customer logos
- real customer data
- secret keys or real infrastructure screenshots

Accessibility:

- Every image needs descriptive alt text.
- Critical messaging must exist in HTML, not only inside the image.

## Required Assets

| ID | Priority | Route | Placement | Ratio | Purpose |
| --- | --- | --- | --- | --- | --- |
| hero-command-center | Critical | `/` | First viewport hero | 16:9 | Establish Strategic Minds as a governed AI business command center |
| services-system-map | High | `/services` | Services overview | 4:3 | Explain modular AI automation systems |
| packages-offer-stack | High | `/packages` | Offer comparison support | 3:2 | Show package tiers as system layers |
| how-it-works-pipeline | High | `/how-it-works` | Process timeline | 16:9 | Show discover, validate, build, launch, optimize |
| about-operator-advisory | Medium | `/about` | Editorial support | 4:5 | Humanize the advisory/operator layer |
| schedule-consultation | Medium | `/schedule` | Scheduling support | 3:2 | Reinforce consultation and roadmap planning |
| client-dashboard-preview | Critical | `/client` | Dashboard preview/empty state | 16:10 | Show secure client operating system |
| admin-control-plane-preview | Critical | `/admin` | Admin preview/empty state | 16:10 | Show approvals, workflows, receipts, releases |
| ai-refusal-governance | Medium | `/client/ai-assistant` | AI safety state | 16:9 | Show refusal categories and approval gates |
| payment-test-mode | Medium | `/client/payments` | Payment test state | 16:9 | Show test-mode checkout/invoice status |
| release-rollback-checklist | Medium | `/admin/releases` | Release governance panel | 16:9 | Show release checklist and rollback control |
| pwa-icon-set | High | Global | Manifest icons | 1:1 | App icon at 192 and 512 sizes |
| open-graph-home | Medium | `/` | Social preview | 1.91:1 | Share preview image with brand/tagline |

## Naming Convention

Directory:

```text
public/images/generated
```

Pattern:

```text
strategic-minds-{id}.{ext}
```

Examples:

```text
public/images/generated/strategic-minds-hero-command-center.webp
public/images/generated/strategic-minds-pwa-icon-set-512.png
```

## Generator Instruction

Before rendering the final website, generate or attach the critical assets first:

1. `hero-command-center`
2. `client-dashboard-preview`
3. `admin-control-plane-preview`
4. `pwa-icon-set`

Then generate the remaining route-specific support images.

Do not block development on final photography, but do not ship a polished public website with generic gradients or abstract placeholders where the subject should be inspectable.
