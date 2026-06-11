export const previewAuth = {
  clientCookie: 'sm_client_preview_session',
  adminCookie: 'sm_admin_preview_session',
  tokenEnv: 'PREVIEW_AUTH_BYPASS_TOKEN',
  productionStatus: 'replace_with_real_supabase_auth_before_release',
} as const;

export function getPreviewAuthStatus() {
  return {
    mode: 'preview_guard',
    clientCookie: previewAuth.clientCookie,
    adminCookie: previewAuth.adminCookie,
    requiresTokenEnv: previewAuth.tokenEnv,
    productionStatus: previewAuth.productionStatus,
  };
}
