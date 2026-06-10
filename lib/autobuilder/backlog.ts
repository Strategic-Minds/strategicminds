export type BuildBacklogItem = {
  id: string;
  title: string;
  area: 'frontend' | 'pwa' | 'agents' | 'auth' | 'database' | 'workflow';
  status: 'queued' | 'blocked' | 'ready';
  risk: 'low' | 'medium' | 'high';
  files: string[];
};

export const BUILD_BACKLOG: BuildBacklogItem[] = [
  { id: 'frontend-dashboard', title: 'Complete client dashboard modules', area: 'frontend', status: 'ready', risk: 'medium', files: ['app/dashboard/page.tsx'] },
  { id: 'agent-chat-ui', title: 'Build advanced agent chat workspace', area: 'agents', status: 'ready', risk: 'medium', files: ['app/agents/page.tsx'] },
  { id: 'pwa-theme', title: 'Complete PWA light and dark mode', area: 'pwa', status: 'ready', risk: 'low', files: ['app/globals.css', 'components/ThemeToggle.tsx'] },
  { id: 'auth-ui', title: 'Build login and protected route shell', area: 'auth', status: 'queued', risk: 'medium', files: ['app/login/page.tsx', 'middleware.ts'] },
  { id: 'workflow-ui', title: 'Build workflow receipts and automation console', area: 'workflow', status: 'ready', risk: 'medium', files: ['app/workflows/page.tsx'] },
  { id: 'database-wiring', title: 'Wire Supabase after credentials are available', area: 'database', status: 'blocked', risk: 'high', files: ['lib/supabase/client.ts'] }
];

export function getNextBuildItem() {
  return BUILD_BACKLOG.find((item) => item.status === 'ready') ?? BUILD_BACKLOG[0];
}
