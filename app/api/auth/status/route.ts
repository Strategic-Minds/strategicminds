import { NextResponse } from 'next/server';
import { getPreviewAuthStatus } from '../../../../lib/auth/preview-guards';

export async function GET() {
  return NextResponse.json(getPreviewAuthStatus());
}
