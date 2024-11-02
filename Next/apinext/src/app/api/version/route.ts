import { NextResponse } from 'next/server';

export async function GET() {
  const version = process.env.APP_VERSION || "1.0.1";

  return NextResponse.json({ version });
}
