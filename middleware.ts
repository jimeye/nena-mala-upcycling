import { NextResponse, type NextRequest } from 'next/server';

const PUBLIC_FILE = /\.(.*)$/;
const locales = ['en', 'fr', 'mx'] as const;
type Locale = typeof locales[number];
const LOCALE_COOKIE = 'nm-lang';

function getPreferredLocale(req: NextRequest): Locale {
  const cookie = req.cookies.get(LOCALE_COOKIE)?.value as Locale | undefined;
  if (cookie && locales.includes(cookie)) return cookie;
  const header = req.headers.get('accept-language') || '';
  const lower = header.toLowerCase();
  if (lower.includes('fr')) return 'fr';
  if (lower.includes('es') || lower.includes('mx')) return 'mx';
  return 'en';
}

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Ignore next internals and public files
  if (
    pathname.startsWith('/_next') ||
    pathname.includes('/api/') ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next();
  }

  // Already has a locale
  const hasLocale = locales.some((loc) => pathname === `/${loc}` || pathname.startsWith(`/${loc}/`));
  if (hasLocale) {
    return NextResponse.next();
  }

  const locale = getPreferredLocale(req);
  const url = req.nextUrl.clone();
  url.pathname = `/${locale}${pathname}`;
  const res = NextResponse.redirect(url);
  res.cookies.set(LOCALE_COOKIE, locale, { path: '/', maxAge: 60 * 60 * 24 * 365 });
  return res;
}

export const config = {
  matcher: ['/((?!_next|favicon.ico|images|fonts|public).*)'],
};


