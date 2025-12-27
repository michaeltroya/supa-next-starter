import { TutorialStep } from './tutorial-step'

export function ConnectSupabaseSteps() {
  return (
    <ol className="flex flex-col gap-6">
      <TutorialStep title="Create Supabase project">
        <p>
          Head over to{' '}
          <a
            href="https://app.supabase.com/project/_/settings/api"
            target="_blank"
            className="text-foreground/80 font-bold hover:underline"
            rel="noreferrer"
          >
            database.new
          </a>{' '}
          and create a new Supabase project.
        </p>
      </TutorialStep>

      <TutorialStep title="Declare environment variables">
        <p>
          Rename the{' '}
          <span className="bg-muted text-secondary-foreground relative rounded border px-[0.3rem] py-[0.2rem] font-mono text-xs font-medium">
            .env.example
          </span>{' '}
          file in your Next.js app to{' '}
          <span className="bg-muted text-secondary-foreground relative rounded border px-[0.3rem] py-[0.2rem] font-mono text-xs font-medium">
            .env.local
          </span>{' '}
          and populate with values from{' '}
          <a
            href="https://app.supabase.com/project/_/settings/api"
            target="_blank"
            className="text-foreground/80 font-bold hover:underline"
            rel="noreferrer"
          >
            your Supabase project&apos;s API Settings
          </a>
          .
        </p>
      </TutorialStep>

      <TutorialStep title="Restart your Next.js development server">
        <p>
          You may need to quit your Next.js development server and run{' '}
          <span className="bg-muted text-secondary-foreground relative rounded border px-[0.3rem] py-[0.2rem] font-mono text-xs font-medium">
            npm run dev
          </span>{' '}
          again to load the new environment variables.
        </p>
      </TutorialStep>

      <TutorialStep title="Refresh the page">
        <p>
          You may need to refresh the page for Next.js to load the new
          environment variables.
        </p>
      </TutorialStep>
    </ol>
  )
}
