import { NextResponse } from 'next/server'

export async function POST() { return NextResponse.json({ status: 'draft_only', message: 'Stripe webhook placeholder. No live Stripe activation authorized.' }) }
export async function GET() { return NextResponse.json({ status: 'ok', mode: 'preview' }) }
