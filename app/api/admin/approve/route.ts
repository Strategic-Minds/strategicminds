import { NextResponse } from 'next/server'

export async function POST() { return NextResponse.json({ status: 'draft_only', approvalRecorded: false, message: 'Admin approval placeholder only. No production action performed.' }) }
export async function GET() { return NextResponse.json({ status: 'ok', mode: 'preview' }) }
