import { NextResponse } from 'next/server';

export const runtime = 'edge';

const baseUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000').replace(/\/+$/, '');

export function getRobots() {
  const robots = `User-agent: *
Disallow:

Sitemap: ${baseUrl}/sitemap.xml`;

  return new NextResponse(robots, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}

export default function handler() {
  return getRobots();
}
