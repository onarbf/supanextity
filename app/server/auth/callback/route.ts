import { NextResponse } from 'next/server'
import { supabaseFromServer } from '../../supabase/from-server'

export async function GET(request: Request) {
  console.log('callback punched')
  const { searchParams, origin } = new URL(request.url)
  const code = searchParams.get('code')
  console.log('origin',origin)
  
  // if "next" is in param, use it as the redirect URL
  const next = searchParams.get('next') ?? '/'
  console.log('next',next)
  if (code) {
    const supabase = supabaseFromServer();

    const { error } = await supabase.auth.exchangeCodeForSession(code)
    if (!error) {
      return NextResponse.redirect(`https://supanextity.vercel.app/`)
    }
  }

  // return the user to an error page with instructions
  return NextResponse.redirect(`https://supanextity.vercel.app/auth/auth-code-error`)
}