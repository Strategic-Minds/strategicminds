import { createServerClient } from '@supabase/ssr';
import { NextResponse, type NextRequest } from 'next/server';
import { hasAdminRole } from './lib/auth/admin';

const clientRoute = /^\/client(?:\/|$)/;
const adminRoute = /^\/admin(?:\/|$)/;

function hasSupabasePublicConfig() {
  return Boolean(process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
}

function redirectToLogin(request: NextRequest) {
  const loginUrl = new URL('/login', request.url);
  loginUrl.searchParams.set('next', request.nextUrl.pathname);
  return NextResponse.redirect(loginUrl);
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const isClientRoute = clientRoute.test(pathname);
  const isAdminRoute = adminRoute.test(pathname);

  if (!isClientRoute && !isAdminRoute) {
    return NextResponse.next();
  }

  if (!hasSupabasePublicConfig()) {
    if (isAdminRoute) {
      return NextResponse.json(
        { error: 'supabase_auth_not_configured', mode: 'auth_required' },
        { status: 401 }
      );
    }

    return redirectToLogin(request);
  }

  let response = NextResponse.next({ request });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value));
          response = NextResponse.next({ request });
          cookiesToSet.forEach(({ name, value, options }) => response.cookies.set(name, value, options));
        },
      },
    }
  );

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return isAdminRoute
      ? NextResponse.json({ error: 'auth_required', mode: 'supabase_auth' }, { status: 401 })
      : redirectToLogin(request);
  }

  if (isAdminRoute && !hasAdminRole(user)) {
    return NextResponse.json({ error: 'admin_role_required', mode: 'supabase_auth' }, { status: 403 });
  }

  return response;
}

export const config = {
  matcher: ['/client/:path*', '/admin/:path*'],
};
