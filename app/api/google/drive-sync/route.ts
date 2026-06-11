import { NextResponse } from 'next/server'

export async function POST() { return NextResponse.json({ status: 'draft_only', synced: false, message: 'Google Drive sync placeholder. No live mutation performed.' }) }
export async function GET() { return NextResponse.json({ status: 'ok', mode: 'preview' }) }
