import { NextResponse } from 'next/server'

const refused = ['credential', 'secret', 'production deploy', 'live stripe', 'send email', 'send sms', 'destructive database', 'spend']

export async function POST() { return NextResponse.json({ status: 'refusal_rules_active', mode: 'preview', refusedCategories: refused, message: 'AI Gateway placeholder refuses unsafe or approval-gated requests.' }) }
export async function GET() { return NextResponse.json({ status: 'ok', mode: 'preview', refusedCategories: refused }) }
