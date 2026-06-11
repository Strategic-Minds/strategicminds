import { NextResponse } from 'next/server'

export async function POST() { return NextResponse.json({ status: 'draft_only', message: 'Preview-safe release receipt placeholder. Production release requires approval.' }) }
export async function GET() { return NextResponse.json({ status: 'ok', mode: 'preview' }) }
