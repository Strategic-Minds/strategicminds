import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export function GET() {
  return NextResponse.json({
    ok: true,
    system: 'strategicminds-client-os',
    environment: 'production',
    safety: {
      payments: 'disabled',
      sms: 'disabled',
      secrets: 'not_exposed'
    },
    routes: {
      home: '/',
      dashboard: '/dashboard',
      health: '/api/health'
    },
    timestamp: new Date().toISOString()
  });
}
