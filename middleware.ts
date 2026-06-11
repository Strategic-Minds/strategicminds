import { NextResponse, type NextRequest } from 'next/server';

const clientRoute = /^\/client(?:\/|$)/;
const adminRoute = /^\/admin(?:\/|$)/;

function hasPreviewSession(request: NextRequest, cookieName: string) {
  const expected = process.env.PREVIEW_AUTH_BYPASS_TOKEN;
  const cookieValue = request.cookies.get(cookieName)?.value;
  return Boolean(expected && cookieValue === expected);
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (clientRoute.test(pathname) && !hasPreviewSession(request, 'sm_client_preview_session')) {
    const loginUrl = new URL('/login', request.url);
    loginUrl.searchParams.set('next', pathname);
    return NextResponse.redirect(loginUrl);
  }

  if (adminRoute.test(pathname) && !hasPreviewSession(request, 'sm_admin_preview_session')) {
    return NextResponse.json(
      { error: 'admin_auth_required', mode: 'preview_guard' },
      { status: 401 }
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/client/:path*', '/admin/:path*'],
};
