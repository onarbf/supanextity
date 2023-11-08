import { NextRequest, NextResponse } from 'next/server';
import createMiddleware from 'next-intl/middleware';
import {locales, defaultLocale} from '@/app/constants/locale';


export  default function middleware(request: NextRequest) {
  const intlMiddleware = createMiddleware({
  // A list of all locales that are supported
  locales,
  // If this locale is matched, pathnames work without a prefix (e.g. `/about`)
  defaultLocale 
});
const response = intlMiddleware(request)
response.headers.set('x-url', request.nextUrl.pathname)

return response
}

export const config = {
  // Skip all paths that should not be internationalized. This example skips
  // certain folders and all pathnames with a dot (e.g. favicon.ico)
  matcher: ['/((?!api|_next|_vercel|studio|.*\\..*).*)']
};