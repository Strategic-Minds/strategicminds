import { NextResponse } from 'next/server';
import { hasAdminRole } from '../../../../lib/auth/admin';
import { createSupabaseServerClient, hasSupabasePublicConfig } from '../../../../lib/supabase/server';

export const dynamic = 'force-dynamic';

export async function GET() {
  if (!hasSupabasePublicConfig()) {
    return NextResponse.json({
      mode: 'supabase_auth',
      configured: false,
      authenticated: false,
      admin: false,
      releaseStatus: 'blocked_until_supabase_env_is_configured',
    });
  }

  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return NextResponse.json({
    mode: 'supabase_auth',
    configured: true,
    authenticated: Boolean(user),
    admin: hasAdminRole(user),
    userId: user?.id ?? null,
  });
}
