import { NextRequest, NextResponse } from 'next/server';
import {locales, defaultLocale} from './src/i18n/routing';

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  if (pathnameIsMissingLocale) {
    const locale = defaultLocale;
    console.log('Redirecting to default locale:', locale);
    return NextResponse.redirect(new URL(`/${locale}${pathname}`, req.url));
  }

  console.log('Middleware executed for path:', pathname);
  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|.*\\.[\\w]+).*)']
};

console.log('Middleware initialized with locales:', locales, 'and defaultLocale:', defaultLocale);
