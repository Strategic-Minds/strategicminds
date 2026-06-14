import { NextResponse } from 'next/server';

const handoffStages = [
  'Create client file in Drive Projects folder',
  'Route answers to Business Builder Strategist Agent',
  'Generate initial business strategy, plan, financial strategy, automation strategy, and Auto Social plan',
  'Route strategy packet to Discovery Agent for market and benchmark analysis',
  'Route strategy plus discovery to Branding Agent for five approval-ready brand and website concepts',
  'Place Gate 1 approval materials in the client dashboard',
  'Wait for approval and payment before AUTO BUILDER or Vercel Workflow execution',
];

export async function POST(request: Request) {
  const payload = await request.json().catch(() => null);

  return NextResponse.json({
    status: 'preview_handoff_created',
    message: 'Preview handoff created. Live Drive, email, SMS, payment, and agent execution still require approval.',
    clientFile: {
      targetFolder: 'Google Drive / Projects / [Client Name]',
      contactCaptured: Boolean(payload?.contact?.email || payload?.contact?.phone),
      answerCount: payload?.answers ? Object.values(payload.answers).filter(Boolean).length : 0,
    },
    routedTo: [
      'Business Builder Strategist Agent',
      'Discovery Agent',
      'Branding Agent',
      'Auto Social Planner',
      'AUTO BUILDER approval queue',
    ],
    handoffStages,
    safety: {
      mode: 'preview_only',
      liveEmail: 'approval_required',
      liveSms: 'approval_required',
      driveWrite: 'approval_required',
      payment: 'approval_required',
      vercelBuild: 'approval_required',
    },
  });
}

export async function GET() {
  return NextResponse.json({
    status: 'ok',
    mode: 'preview',
    purpose: 'Strategic Minds client intake handoff route',
    handoffStages,
  });
}
