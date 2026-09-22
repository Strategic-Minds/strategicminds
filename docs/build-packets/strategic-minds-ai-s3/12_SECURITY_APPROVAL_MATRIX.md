# 12 SECURITY / APPROVAL MATRIX
READ: automatic.
DRAFT: automatic.
BRANCH_WRITE: allowed on feature branch with receipt.
PROTECTED: operator approval required.

PROTECTED includes:
- merge to main
- production deploy/promotion
- strategicmindsai.com DNS/domain changes
- production Supabase migration
- secret/key change
- payment/billing/spend
- customer email/SMS
- destructive delete
- privilege change

This packet authorizes branch/preview work only.
