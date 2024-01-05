import NextLogo from './NextLogo'
import SupabaseLogo from './SupabaseLogo'

export default function Header() {
  return (
    <div className="flex flex-col items-center gap-16">
      <div className="flex items-center justify-center gap-8">
        <a
          href="https://supabase.com/?utm_source=create-next-app&utm_medium=template&utm_term=nextjs"
          target="_blank"
          rel="noreferrer"
        >
          <SupabaseLogo />
        </a>
        <span className="h-6 rotate-45 border-l" />
        <a href="https://nextjs.org/" target="_blank" rel="noreferrer">
          <NextLogo />
        </a>
      </div>
      <h1 className="sr-only">Supabase and Next.js Starter Template</h1>
      <p className="mx-auto max-w-xl text-center text-3xl !leading-tight lg:text-4xl">
        The fastest way to build apps with{' '}
        <a
          href="https://supabase.com/?utm_source=create-next-app&utm_medium=template&utm_term=nextjs"
          target="_blank"
          className="font-bold hover:underline"
          rel="noreferrer"
        >
          Supabase
        </a>{' '}
        and{' '}
        <a
          href="https://nextjs.org/"
          target="_blank"
          className="font-bold hover:underline"
          rel="noreferrer"
        >
          Next.js
        </a>
      </p>
      <div className="my-8 w-full bg-gradient-to-r from-transparent via-foreground/10 to-transparent p-[1px]" />
    </div>
  )
}
