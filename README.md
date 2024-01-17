![image](https://github.com/michaeltroya/supa-next-starter/assets/38507347/2ea40874-98de-49ec-ab6a-74c816e6ca22)

<h1 align="center">⚡ SupaNext Starter Kit ⚡</h1>

<p align="center">
 The Last Next.js and Supabase Starter You Will Ever Need
</p>

<div align="center">

<img alt="GitHub License" src="https://img.shields.io/github/license/michaeltroya/supa-next-starter">

  <a href="https://twitter.com/intent/follow?screen_name=michaeltroya_">
   <img alt="X (formerly Twitter) Follow" src="https://img.shields.io/twitter/follow/michaeltroya_">
  </a>
</div>

<div align="center">
  <sub>Created by <a href="https://twitter.com/michaeltroya_">Michael Troya</a>
</div>

<br/>

<p align="center">
  <a href="#features"><strong>Features</strong></a> ·
  <a href="#clone-and-run-locally"><strong>Clone and run locally</strong></a> ·
  <a href="#documentation"><strong>Documentation</strong></a> ·
  <a href="#feedback-and-issues"><strong>Feedback and issues</strong></a>
</p>
<br/>

## Features

- ⚡️ Next.js 14 (App Router)
- 💚 Supabase w/ supabase-ssr - Works across the entire [Next.js](https://nextjs.org) stack (App Router, Pages Router, Client, Server, Middleware, It just works!)
- ⚛️ React 18
- ⛑ TypeScript
- 📦 [pnpm](https://pnpm.io/) - Fast, disk space efficient package manager
- 🎨 [Tailwind](https://tailwindcss.com/)
- 🔌 [shadcn/ui](https://ui.shadcn.com/) - Beautifully designed components that you can copy and paste into your apps.
- 🧪 Jest w/SWC + React Testing Library - Unit tests for all of your code.
- 🎛️ [MSW](https://mswjs.io/)v2 - Intercept requests inside your tests (set up for testing only)
- 🪝[TanStackQuery](https://tanstack.com/query/v5)v5 - The best way to fetch data on the client
- 📏 ESLint — To find and fix problems in your code
- 💖 Prettier — Code Formatter for consistent style
- 🐶 Husky — For running scripts before committing
- 🚫 lint-staged — Run ESLint and Prettier against staged Git files
- 👷 Github Actions — Run Type Checks, Tests, and Linters on Pull Requests
- 🗂 Path Mapping — Import components or images using the `@` prefix
- ⚪⚫ Dark mode - Toggle theme modes with [next-themes](https://github.com/pacocoursey/next-themes)
- ✨ Next Top Loader - Render a pleasent top loader on navigation with [nextjs-toploader](https://github.com/TheSGJ/nextjs-toploader)
- 🔋 Lots Extras - Next Bundle Analyzer, Vercel Analytics, Vercel Geist Font

## Clone and run locally

1. You'll first need a Supabase project which can be made [via the Supabase dashboard](https://database.new)

2. Create a Next.js app using the Supabase Starter template npx command

   ```bash
   pnpm create next-app -e https://github.com/michaeltroya/supa-next-starter
   # or
   npx create-next-app -e https://github.com/michaeltroya/supa-next-starter
   ```

3. Use `cd` to change into the app's directory

   ```bash
   cd name-of-new-app
   ```

4. Rename `.env.local.example` to `.env.local` and update the following:

   ```
   NEXT_PUBLIC_SUPABASE_URL=[INSERT SUPABASE PROJECT URL]
   NEXT_PUBLIC_SUPABASE_ANON_KEY=[INSERT SUPABASE PROJECT API ANON KEY]
   ```

   Both `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` can be found in [your Supabase project's API settings](https://app.supabase.com/project/_/settings/api)

5. You can now run the Next.js local development server:

   ```bash
   pnpm run dev
   ```

   The starter kit should now be running on [localhost:3000](http://localhost:3000/).

> Check out [the docs for Local Development](https://supabase.com/docs/guides/getting-started/local-development) to also run Supabase locally.

## Showcase

Websites started using this template:

- [mainspring.pro](https://www.mainspring.pro/)
- [Add yours](https://github.com/michaeltroya/supa-next-starter/edit/main/README.md)

# Documentation

### Requirements

- Node.js >= 18.17.0
- pnpm 8

### Scripts

- `pnpm dev` — Starts the application in development mode at `http://localhost:3000`.
- `pnpm build` — Creates an optimized production build of your application.
- `pnpm start` — Starts the application in production mode.
- `pnpm type-check` — Validate code using TypeScript compiler.
- `pnpm lint` — Runs ESLint for all files in the `src` directory.
- `pnpm format-check` — Runs Prettier and checks if any files have formatting issues.
- `pnpm format` — Runs Prettier and formats files.
- `pnpm test` — Runs all the jest tests in the project.
- `pnpm test:ci` — Runs all the jest tests in the project, Jest will assume it is running in a CI environment.
- `pnpm analyze` — Builds the project and opens the bundle analyzer.

### Paths

TypeScript is pre-configured with custom path mappings. To import components or files, use the `@` prefix.

```tsx
import { Button } from '@/components/ui/Button'

// To import images or other files from the public folder
import avatar from '@/public/avatar.png'
```

### Switch to Yarn/npm

This starter uses pnpm by default, but this choice is yours. If you'd like to switch to Yarn/npm, delete the `pnpm-lock.yaml` file, install the dependencies with Yarn/npm, change the CI workflow, and Husky Git hooks to use Yarn/npm commands.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for more information.

## Feedback and issues

Please file feedback and issues [here](https://github.com/michaeltroya/supa-next-starter/issues).
