import { NextRequest, NextResponse } from 'next/server';

const planConfig: Record<string, { priceEnv: string; label: string }> = {
  audit: {
    priceEnv: 'STRIPE_PRICE_AI_AUDIT',
    label: 'AI Opportunity Audit'
  },
  sprint: {
    priceEnv: 'STRIPE_PRICE_AUTOMATION_SPRINT',
    label: 'Workflow Automation Sprint'
  },
  mvp: {
    priceEnv: 'STRIPE_PRICE_MVP_BUILD',
    label: 'MVP System Build'
  },
  'operating-system': {
    priceEnv: 'STRIPE_PRICE_OPERATING_SYSTEM',
    label: 'Full AI Operating System'
  }
};

function redirectTo(request: NextRequest, path: string) {
  return NextResponse.redirect(new URL(path, request.url), { status: 303 });
}

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const plan = String(formData.get('plan') ?? '');
  const email = String(formData.get('email') ?? '').trim();
  const config = planConfig[plan];
  const stripeSecret = process.env.STRIPE_SECRET_KEY;
  const origin = new URL(request.url).origin;

  if (!config) {
    return redirectTo(request, '/payment?status=error');
  }

  const priceId = process.env[config.priceEnv];

  if (!stripeSecret || !priceId) {
    return redirectTo(request, `/payment?status=setup-required&plan=${encodeURIComponent(plan)}`);
  }

  const body = new URLSearchParams();
  body.set('mode', 'payment');
  body.set('line_items[0][price]', priceId);
  body.set('line_items[0][quantity]', '1');
  body.set('success_url', `${origin}/payment/success?session_id={CHECKOUT_SESSION_ID}`);
  body.set('cancel_url', `${origin}/payment?status=cancelled&plan=${encodeURIComponent(plan)}`);
  body.set('allow_promotion_codes', 'true');
  body.set('customer_creation', 'if_required');
  body.set('metadata[plan]', plan);
  body.set('metadata[package]', config.label);

  if (email) {
    body.set('customer_email', email);
  }

  const checkoutResponse = await fetch('https://api.stripe.com/v1/checkout/sessions', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${stripeSecret}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body
  });

  if (!checkoutResponse.ok) {
    return redirectTo(request, '/payment?status=error');
  }

  const session = await checkoutResponse.json() as { url?: string };

  if (!session.url) {
    return redirectTo(request, '/payment?status=error');
  }

  return NextResponse.redirect(session.url, { status: 303 });
}
