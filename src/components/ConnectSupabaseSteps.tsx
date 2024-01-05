import Step from './Step'

export default function ConnectSupabaseSteps() {
  return (
    <ol className="flex flex-col gap-6">
      <Step title="Create Supabase project">
        <p>
          Head over to{' '}
          <a
            href="https://app.supabase.com/project/_/settings/api"
            target="_blank"
            className="font-bold text-foreground/80 hover:underline"
            rel="noreferrer"
          >
            database.new
          </a>{' '}
          and create a new Supabase project.
        </p>
      </Step>

      <Step title="Declare environment variables">
        <p>
          Rename the{' '}
          <span className="rounded-md bg-foreground/20 px-2 py-1 text-foreground/80">
            .env.example
          </span>{' '}
          file in your Next.js app to{' '}
          <span className="rounded-md bg-foreground/20 px-2 py-1 text-foreground/80">
            .env.local
          </span>{' '}
          and populate with values from{' '}
          <a
            href="https://app.supabase.com/project/_/settings/api"
            target="_blank"
            className="font-bold text-foreground/80 hover:underline"
            rel="noreferrer"
          >
            your Supabase project&apos;s API Settings
          </a>
          .
        </p>
      </Step>

      <Step title="Restart your Next.js development server">
        <p>
          You may need to quit your Next.js development server and run{' '}
          <span className="rounded-md bg-foreground/20 px-2 py-1 text-foreground/80">
            npm run dev
          </span>{' '}
          again to load the new environment variables.
        </p>
      </Step>

      <Step title="Refresh the page">
        <p>
          You may need to refresh the page for Next.js to load the new
          environment variables.
        </p>
      </Step>
    </ol>
  )
}
