# Strategic Minds AI Gateway Architecture

## Mode

Default mode is dry-run. Production-sensitive actions require approval.

## Agent Runtime

The Strategic Minds control plane routes work through these governed agents:

- Concierge Agent
- Builder Agent
- Validation Agent
- Billing Agent
- Scheduling Agent
- Documents Agent
- Workflow Agent
- Auto Social Agent

## Execution Loop

1. Vercel Cron calls `/api/autobuilder/tick`.
2. Tick endpoint calls `runAutobuilderTick()`.
3. Runtime chooses the safest next task.
4. Validation checks dry-run, payments, SMS, secrets, approval, and rollback gates.
5. Receipt is generated.
6. Production-sensitive work is blocked until approved.
7. Safe dry-run planning continues.

## AI Gateway Contract

Environment variables required before live AI routing:

- `AI_GATEWAY_API_KEY`
- `AI_GATEWAY_DEFAULT_MODEL`
- `CRON_SECRET`

No API keys are stored in code.

## Safety Gates

Blocked without approval:

- Live payment activation
- SMS sending
- Production deployment mutation
- Domain or DNS changes
- Credential updates
- Data deletion

## Frontend Build Target

The frontend should expose:

- PWA installable shell
- Light and dark mode
- Client dashboard
- Agent chat workspace
- Project tracker
- Documents center
- Billing test-mode panel
- Scheduling panel
- Workflow receipt log

## Deployment Rule

The system may create plans, receipts, and dry-run outputs automatically. Production actions require an approval receipt.