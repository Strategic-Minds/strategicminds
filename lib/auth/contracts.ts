export type UserRole = 'admin' | 'client' | 'agent' | 'viewer';

export type AuthSessionContract = {
  userId: string;
  email: string;
  role: UserRole;
  clientId?: string;
  projectIds: string[];
  expiresAt: string;
};

export const AUTH_CONTRACTS = {
  provider: 'supabase_auth',
  sessionMode: 'server_verified',
  defaultRole: 'client',
  protectedRoutes: ['/dashboard', '/api/autobuilder/tick'],
  publicRoutes: ['/', '/api/health'],
  roles: {
    admin: ['read_all', 'write_all', 'approve_sensitive_actions'],
    client: ['read_own_projects', 'read_own_documents', 'read_own_receipts'],
    agent: ['create_planning_receipts', 'read_allowed_context'],
    viewer: ['read_public']
  },
  approvalRequired: ['payments', 'sms', 'deployment', 'credential_changes', 'data_removal']
} as const;

export function canAccessRoute(role: UserRole, route: string) {
  if ((AUTH_CONTRACTS.publicRoutes as readonly string[]).includes(route)) return true;
  if (role === 'admin') return true;
  if (route.startsWith('/dashboard')) return role === 'client' || role === 'agent';
  return false;
}
