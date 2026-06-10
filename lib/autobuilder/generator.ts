import { BUILD_BACKLOG, getNextBuildItem } from './backlog';
import { runAutobuilderTick } from './runtime';

export type GeneratedBuildPlan = {
  ok: boolean;
  mode: 'dry_run';
  selectedTask: ReturnType<typeof getNextBuildItem>;
  backlog: typeof BUILD_BACKLOG;
  generatedFiles: string[];
  instructions: string[];
};

export function generateNextFrontendBuildPlan(): GeneratedBuildPlan {
  const tick = runAutobuilderTick();
  const selectedTask = getNextBuildItem();

  return {
    ok: tick.ok,
    mode: 'dry_run',
    selectedTask,
    backlog: BUILD_BACKLOG,
    generatedFiles: selectedTask.files,
    instructions: [
      'Generate the selected frontend module as static Next.js UI first.',
      'Keep all forms non-destructive and dry-run only.',
      'Use validation, approval, rollback, and receipt contracts for every workflow action.',
      'Do not enable live payments, SMS, credential writes, or production mutations.',
      'Commit feature work to auto/full-system-build and validate with Vercel preview.'
    ]
  };
}
