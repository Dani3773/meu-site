import { NextResponse } from 'next/server';

export async function GET() {
  const robots = `User-agent: *
Disallow:

Sitemap: https://meu-site.com/sitemap.xml`;

  return new NextResponse(robots, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}
