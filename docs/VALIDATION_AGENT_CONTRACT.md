# Validation Agent Contract

## Purpose
Define the evidence required before Strategic-Minds/strategicminds accepts output routed from AUTO_BUILDER.

## Source of Agent
AUTO_BUILDER owns the validation agent. Strategic-Minds/strategicminds receives validation status and stores the contract.

## Required Checks
1. New target repo is Strategic-Minds/strategicminds.
2. Legacy repo is not used as active build target.
3. No secret values in commits.
4. Production not deployed by this workflow.
5. SMS not sent by this workflow.
6. Live payments not processed by this workflow.
7. Vercel preview or workflow receipt exists before promotion.
8. Drive receipt exists before promotion.
9. AUTO_BUILDER project registration exists.
10. Operator approval exists for any gated production action.

## Result Shape
- status: pass | warning | fail
- repo: target repository
- branch: feature or preview branch
- changed_files: list
- blockers: list
- receipts: list
- production_ready: false unless operator approved

## Failure Rule
Any failed safety check keeps the workflow blocked and requires operator review.
