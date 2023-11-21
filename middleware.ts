import { NextRequest, NextResponse } from 'next/server';
import createMiddleware from 'next-intl/middleware';
import {locales, defaultLocale} from '@/app/constants/locale';
import { supabaseFromMiddleware } from './app/server/supabase/from-middleware';


export default async function middleware(request: NextRequest) {
  const supabaseResponse = NextResponse.next({
    request: {headers: request.headers}
  })

  const supabase = supabaseFromMiddleware(request, supabaseResponse);
  await supabase.auth.getSession()
  //creating the translations middleware for next-intl. It defines what languages are active and what is the default.
  const intlMiddleware = createMiddleware({
    // A list of all locales that are supported
    locales,
    // If this locale is matched, pathnames work without a prefix (e.g. `/about`)
    defaultLocale,
    localePrefix: 'as-needed'
  });
  
  let response = intlMiddleware(request)
  //we add this header to make the metadata dynamic as we need diferent metadata for each culture, and as we are using the generateMetadata in the layout, we will work the path params inside of it. 


  response.headers.set('x-url', request.nextUrl.pathname)
  return response
}

export const config = {
  // Skip all paths that should not be internationalized. This example skips
  // certain folders and all pathnames with a dot (e.g. favicon.ico)
  matcher: ['/((?!api|_next|_vercel|studio|server|.*\\..*).*)']
};