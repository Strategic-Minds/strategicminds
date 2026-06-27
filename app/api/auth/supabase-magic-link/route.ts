import { NextRequest, NextResponse } from 'next/server';

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
  const { url, key } = getSupabaseConfig();
  const origin = new URL(request.url).origin;

  if (!url || !key) {
    return redirectTo(request, '/auth?status=supabase-not-configured');
  }

  const response = await fetch(`${url}/auth/v1/otp`, {
    method: 'POST',
    headers: {
      apikey: key,
      Authorization: `Bearer ${key}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email,
      create_user: true,
      options: {
        email_redirect_to: `${origin}/client?auth=supabase`
      }
    })
  });

  if (!response.ok) {
    return redirectTo(request, '/auth?status=auth-failed');
  }

  const redirect = redirectTo(request, '/auth?status=magic-link-sent');
  redirect.headers.set('Cache-Control', 'private, no-store');
  return redirect;
}
