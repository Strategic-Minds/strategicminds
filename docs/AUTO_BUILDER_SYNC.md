# AUTO_BUILDER Sync Contract

## Purpose
Strategic-Minds/strategicminds is the clean Strategic Minds Advisory target repository controlled by Strategic-Minds/AUTO_BUILDER through governed build packets and Vercel Workflow.

## Legacy Boundary
The legacy repo XPS-IINTELLIGENCE-SYSTEMS/strategic-minds-advisory is quarantined and must not be used as the active build target.

## Scope
This document does not build or modify website UI. It defines the sync boundary only.

## Control Plane
- Control repo: Strategic-Minds/AUTO_BUILDER
- Target repo: Strategic-Minds/strategicminds
- Target branch: main until a dedicated feature branch is created by AUTO_BUILDER
- Mode: preview only

## Allowed
- Receive approved build packet metadata.
- Report validation results.
- Preserve Drive/GitHub/Vercel receipts.
- Keep production gated.

## Blocked
- Legacy code migration without review.
- Main production release without approval.
- Live SMS.
- Live payment processing.
- Secret commits.

## Completion Rule
This repo is synchronized only when AUTO_BUILDER registration, workflow contract, validation contract, release gate, rollback gate, and env contract exist and validation confirms safe mode.
