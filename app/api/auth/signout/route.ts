import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const response = NextResponse.redirect(new URL('/auth?status=signed-out', request.url), { status: 303 });
  response.cookies.delete('sm-supabase-access-token');
  response.cookies.delete('sm-supabase-refresh-token');
  response.headers.set('Cache-Control', 'private, no-store');
  return response;
}
