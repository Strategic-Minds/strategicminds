import { NextRequest, NextResponse } from 'next/server';

type SupabasePasswordResponse = {
  access_token?: string;
  refresh_token?: string;
  expires_in?: number;
};

function getSupabaseConfig() {
  return {
    url: process.env.NEXT_PUBLIC_SUPABASE_URL,
    key: process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ?? process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  };
}

function redirectTo(request: NextRequest, path: string) {
  return NextResponse.redirect(new URL(path, request.url), { status: 303 });
}

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const email = String(formData.get('email') ?? '').trim();
  const password = String(formData.get('password') ?? '');
  const { url, key } = getSupabaseConfig();

  if (!url || !key) {
    return redirectTo(request, '/auth?status=supabase-not-configured');
  }

  const response = await fetch(`${url}/auth/v1/token?grant_type=password`, {
    method: 'POST',
    headers: {
      apikey: key,
      Authorization: `Bearer ${key}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  });

  if (!response.ok) {
    return redirectTo(request, '/auth?status=auth-failed');
  }

  const session = await response.json() as SupabasePasswordResponse;
  const redirect = redirectTo(request, '/client?auth=supabase');
  const secure = process.env.NODE_ENV === 'production';

  if (session.access_token) {
    redirect.cookies.set('sm-supabase-access-token', session.access_token, {
      httpOnly: true,
      sameSite: 'lax',
      secure,
      path: '/',
      maxAge: session.expires_in ?? 3600
    });
  }

  if (session.refresh_token) {
    redirect.cookies.set('sm-supabase-refresh-token', session.refresh_token, {
      httpOnly: true,
      sameSite: 'lax',
      secure,
      path: '/',
      maxAge: 60 * 60 * 24 * 30
    });
  }

  redirect.headers.set('Cache-Control', 'private, no-store');
  return redirect;
}
