# 09 BACKEND API CONTRACT
Preview-safe endpoints:
- POST /api/contact
- GET /api/research
- GET /api/signals/demo
- GET /api/health
- POST /api/client/session
- POST /api/reconcile

Invariants:
- Zod validation at boundaries.
- Rate limit public write endpoints.
- Structured error envelopes.
- No secrets in client payloads or logs.
- Demo signal data must be synthetic or clearly labeled sample data.
