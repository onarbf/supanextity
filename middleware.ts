import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from "next/server";
import {locales, defaultLocale} from './lib/constants/localeConfig';

export default createMiddleware({
  // A list of all locales that are supported
  locales,
  // If this locale is matched, pathnames work without a prefix (e.g. `/about`)
  defaultLocale 
});

export const config = {
  // Skip all paths that should not be internationalized. This example skips
  // certain folders and all pathnames with a dot (e.g. favicon.ico)
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};