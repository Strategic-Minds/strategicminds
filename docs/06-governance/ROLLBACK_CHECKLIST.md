# Rollback Checklist

- Keep this PR draft until preview validation is complete.
- Do not merge to main without operator approval.
- If preview fails, close or update the draft PR; do not promote the preview.
- Do not run destructive database actions.
- Do not activate live Stripe, email, SMS, social publishing, or spend.
- Revert by abandoning the feature branch or opening a follow-up rollback PR before any production release.
