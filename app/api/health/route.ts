import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export function GET() {
  return NextResponse.json({
    ok: true,
    system: 'strategicminds-client-os',
    mode: 'preview_only',
    timestamp: new Date().toISOString()
  });
}
