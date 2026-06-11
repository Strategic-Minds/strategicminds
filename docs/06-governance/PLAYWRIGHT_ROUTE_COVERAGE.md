# Playwright Route Coverage

Preview route coverage is defined in `tests/preview-route-manifest.json` and executable with:

```bash
PREVIEW_URL=https://your-preview-url npm run test:routes
```

The lighter fetch-only validator remains available with:

```bash
npm run validate:preview -- https://your-preview-url
```

Coverage groups:

- Public routes should return 200, except `/not-found` should return 404.
- Client dashboard routes should redirect unauthenticated users to `/login`.
- Admin control plane routes should reject unauthenticated access with 401 or non-admin access with 403.
- API placeholders should return preview-safe JSON.
- Stripe checkout GET must report `mode: test_only` and must not create checkout sessions.
- Cron route should return 401 without `CRON_SECRET`.

No live credentials are required for unauthenticated route coverage. Authenticated client/admin browser journeys require test Supabase users on a non-production Supabase project or branch.
