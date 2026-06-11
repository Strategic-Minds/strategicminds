import { NextResponse } from 'next/server'

export async function POST() { return NextResponse.json({ status: 'test_only', mode: 'preview', liveStripe: false, message: 'Stripe checkout placeholder is test-path only. Live Stripe requires approval.' }) }
export async function GET() { return NextResponse.json({ status: 'test_only', mode: 'preview', liveStripe: false }) }
