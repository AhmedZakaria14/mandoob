import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const destination = new URL('/', req.url);
  return NextResponse.redirect(destination, 301);
}

export async function HEAD(req: NextRequest) {
  const destination = new URL('/', req.url);
  return NextResponse.redirect(destination, 301);
}
