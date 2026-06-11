# Playwright Route Coverage

Preview route coverage is defined in `tests/preview-route-manifest.json` and executable with `npm run validate:preview -- <preview-url>`.

Coverage groups:
- Public routes should return 200, except `/not-found` should return 404.
- Client routes should redirect to `/login` without the preview session cookie.
- Admin routes should return 401 without the preview admin cookie.
- API placeholders should return preview-safe JSON.
- Cron route should return 401 without `CRON_SECRET`.

No live credentials are required for this validation.
