import type { User } from '@supabase/supabase-js';

type RoleMetadata = {
  role?: unknown;
  roles?: unknown;
};

export function hasAdminRole(user: User | null) {
  if (!user) return false;

  const metadata = user.app_metadata as RoleMetadata;
  if (metadata.role === 'admin') return true;

  if (Array.isArray(metadata.roles)) {
    return metadata.roles.includes('admin');
  }

  return false;
}
