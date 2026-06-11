import { NextResponse } from 'next/server'

export async function POST() { return NextResponse.json({ status: 'approval_required', mode: 'preview', started: false, message: 'AI call placeholder refuses live customer-facing calls without approval.' }) }
export async function GET() { return NextResponse.json({ status: 'ok', mode: 'preview' }) }
