import { NextResponse } from 'next/server';

export const runtime = 'edge';

export function getRobots() {
  const robots = `User-agent: *
Disallow:

Sitemap: ${process.env.NEXT_PUBLIC_SITE_URL}/sitemap.xml`;

  return new NextResponse(robots, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}
