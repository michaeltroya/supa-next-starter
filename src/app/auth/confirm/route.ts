import { createClient } from '@/supabase/server'
import { type EmailOtpType } from '@supabase/supabase-js'
import { redirect } from 'next/navigation'
import { type NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const token_hash = searchParams.get('token_hash')
  const type = searchParams.get('type') as EmailOtpType | null
  const next = searchParams.get('next') ?? '/'
  let redirectTo = new URL('/', request.url)
  try {
    const destination = new URL(next, request.url)
    if (destination.origin === redirectTo.origin) redirectTo = destination
  } catch {
    // Malformed redirect destinations fall back to the app's home page.
  }

  if (token_hash && type) {
    const supabase = await createClient()

    const { error } = await supabase.auth.verifyOtp({
      type,
      token_hash,
    })
    if (!error) {
      // redirect user to specified redirect URL or root of app
      redirect(redirectTo.href)
    } else {
      // redirect the user to an error page with some instructions
      redirect(`/auth/error?${new URLSearchParams({ error: error.message })}`)
    }
  }

  // redirect the user to an error page with some instructions
  redirect(`/auth/error?error=No token hash or type`)
}
