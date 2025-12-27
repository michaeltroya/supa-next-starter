import { redirect } from 'next/navigation'

import { createClient } from '@/supabase/server'
import { InfoIcon } from 'lucide-react'
import { FetchDataSteps } from '@/components/tutorial/fetch-data-steps'
import { Suspense } from 'react'

async function UserDetails() {
  const supabase = await createClient()
  const { data, error } = await supabase.auth.getClaims()

  if (error || !data?.claims) {
    redirect('/auth/login')
  }

  return JSON.stringify(data.claims, null, 2)
}

export default function ProtectedPage() {
  return (
    <div className="flex w-full flex-1 flex-col gap-12">
      <div className="w-full">
        <div className="bg-accent text-foreground flex items-center gap-3 rounded-md p-3 px-5 text-sm">
          <InfoIcon size="16" strokeWidth={2} />
          This is a protected page that you can only see as an authenticated
          user
        </div>
      </div>
      <div className="flex flex-col items-start gap-2">
        <h2 className="mb-4 text-2xl font-bold">Your user details</h2>
        <pre className="max-h-32 overflow-auto rounded border p-3 font-mono text-xs">
          <Suspense>
            <UserDetails />
          </Suspense>
        </pre>
      </div>
      <div>
        <h2 className="mb-4 text-2xl font-bold">Next steps</h2>
        <FetchDataSteps />
      </div>
    </div>
  )
}
