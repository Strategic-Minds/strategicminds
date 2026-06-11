import { expect, test } from '@playwright/test';
import manifest from './preview-route-manifest.json';

async function expectOk(path: string, request: Parameters<Parameters<typeof test>[1]>[0]['request']) {
  const response = await request.get(path);
  expect(response.status(), path).toBe(200);
}

test.describe('public routes', () => {
  for (const route of manifest.publicRoutes) {
    test(`${route} returns 200`, async ({ request }) => {
      await expectOk(route, request);
    });
  }
});

test.describe('not found routes', () => {
  for (const route of manifest.notFoundRoutes) {
    test(`${route} returns 404`, async ({ request }) => {
      const response = await request.get(route);
      expect(response.status(), route).toBe(404);
    });
  }
});

test.describe('client dashboard auth', () => {
  for (const route of manifest.clientRoutes) {
    test(`${route} requires Supabase auth`, async ({ page }) => {
      await page.goto(route);
      await expect(page).toHaveURL(/\/login(?:\?|$)/);
    });
  }
});

test.describe('admin control plane auth', () => {
  for (const route of manifest.adminRoutes) {
    test(`${route} rejects unauthenticated access`, async ({ request }) => {
      const response = await request.get(route);
      expect([401, 403], route).toContain(response.status());
    });
  }
});

test.describe('api placeholders', () => {
  for (const route of manifest.apiRoutes) {
    test(`${route} responds safely`, async ({ request }) => {
      const response = await request.get(route);
      expect(response.status(), route).toBe(200);
    });
  }

  test('Stripe checkout remains test-mode only', async ({ request }) => {
    const response = await request.get('/api/stripe/checkout');
    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(body.mode).toBe('test_only');
    expect(body.checkoutCreated).toBe(false);
    expect(body.liveStripe).not.toBe(true);
  });
});

test.describe('cron auth', () => {
  for (const route of manifest.cronRoutes) {
    test(`${route} rejects unsigned cron request`, async ({ request }) => {
      const response = await request.get(route);
      expect(response.status(), route).toBe(401);
    });
  }
});
