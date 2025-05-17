// client/app/api/trades/route.ts

import { NextResponse } from 'next/server';


export async function GET() {
  return NextResponse.json("Hello world");
}
// export async function POST(request: Request) {