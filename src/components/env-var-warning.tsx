import { Badge } from './ui/badge'
import { Button } from './ui/button'

export function EnvVarWarning() {
  return (
    <div className="flex items-center gap-4">
      <Badge variant={'outline'} className="font-normal">
        Supabase environment variables required
      </Badge>
      <div className="flex gap-2">
        <Button size="sm" variant={'outline'} disabled>
          Sign in
        </Button>
        <Button size="sm" variant={'default'} disabled>
          Sign up
        </Button>
      </div>
    </div>
  )
}
