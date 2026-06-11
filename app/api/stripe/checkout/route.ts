import { NextResponse } from 'next/server';
import Stripe from 'stripe';

export const dynamic = 'force-dynamic';

type CheckoutRequest = {
  priceId?: string;
  quantity?: number;
  successUrl?: string;
  cancelUrl?: string;
};

function getStripeKeyMode(value: string | undefined) {
  if (!value) return 'missing';
  if (value.startsWith('sk_test_')) return 'test';
  if (value.startsWith('sk_live_')) return 'live';
  return 'unknown';
}

function getBaseUrl(request: Request) {
  return process.env.NEXT_PUBLIC_SITE_URL || new URL(request.url).origin;
}

export async function POST(request: Request) {
  const keyMode = getStripeKeyMode(process.env.STRIPE_SECRET_KEY);

  if (keyMode === 'live') {
    return NextResponse.json(
      { status: 'blocked', mode: 'test_only', liveStripe: true, checkoutCreated: false, error: 'live_stripe_key_blocked' },
      { status: 403 }
    );
  }

  if (keyMode !== 'test') {
    return NextResponse.json({
      status: 'configuration_required',
      mode: 'test_only',
      liveStripe: false,
      checkoutCreated: false,
      error: 'missing_or_invalid_test_key',
    });
  }

  if (process.env.STRIPE_TEST_CHECKOUT_ENABLED !== 'true') {
    return NextResponse.json({
      status: 'test_checkout_disabled',
      mode: 'test_only',
      liveStripe: false,
      checkoutCreated: false,
      message: 'Set STRIPE_TEST_CHECKOUT_ENABLED=true in preview/test only to create test checkout sessions.',
    });
  }

  const body = (await request.json().catch(() => ({}))) as CheckoutRequest;
  const baseUrl = getBaseUrl(request);
  const priceId = body.priceId || process.env.STRIPE_TEST_PRICE_ID;
  const successUrl = body.successUrl || process.env.STRIPE_TEST_SUCCESS_URL || `${baseUrl}/client/payments?checkout=success`;
  const cancelUrl = body.cancelUrl || process.env.STRIPE_TEST_CANCEL_URL || `${baseUrl}/packages?checkout=cancelled`;

  if (!priceId) {
    return NextResponse.json({
      status: 'configuration_required',
      mode: 'test_only',
      liveStripe: false,
      checkoutCreated: false,
      error: 'missing_test_price_id',
    });
  }

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
  const session = await stripe.checkout.sessions.create({
    mode: 'payment',
    line_items: [{ price: priceId, quantity: body.quantity || 1 }],
    success_url: successUrl,
    cancel_url: cancelUrl,
    metadata: {
      system: 'strategic_minds_workflow_os',
      environment: 'preview_test_only',
    },
  });

  return NextResponse.json({
    status: 'test_checkout_created',
    mode: 'test_only',
    liveStripe: false,
    checkoutCreated: true,
    sessionId: session.id,
    url: session.url,
  });
}

export async function GET() {
  const keyMode = getStripeKeyMode(process.env.STRIPE_SECRET_KEY);

  return NextResponse.json({
    status: keyMode === 'test' ? 'test_ready' : 'configuration_required',
    mode: 'test_only',
    liveStripe: keyMode === 'live',
    checkoutCreated: false,
    testCheckoutEnabled: process.env.STRIPE_TEST_CHECKOUT_ENABLED === 'true',
    hasTestPrice: Boolean(process.env.STRIPE_TEST_PRICE_ID),
  });
}
