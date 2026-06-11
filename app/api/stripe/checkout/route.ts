import { NextResponse } from 'next/server';

function isTestModeKey(value: string | undefined) {
  return Boolean(value && value.startsWith('sk_test_'));
}

export async function POST() {
  const hasAllowedTestKey = isTestModeKey(process.env.STRIPE_SECRET_KEY);

  return NextResponse.json({
    status: 'test_only',
    mode: 'preview',
    liveStripe: false,
    checkoutCreated: false,
    hasAllowedTestKey,
    message: 'Stripe checkout placeholder is test-path only. Live Stripe requires approval.',
  });
}

export async function GET() {
  return NextResponse.json({
    status: 'test_only',
    mode: 'preview',
    liveStripe: false,
    checkoutCreated: false,
  });
}
