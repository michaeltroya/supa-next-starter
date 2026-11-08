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

- ⚡️ Next.js 16 (App Router)
- 💚 Supabase w/ supabase-ssr - Works across the entire [Next.js](https://nextjs.org) stack (App Router, Pages Router, Client, Server, Middleware, It just works!)
- ⚛️ React 19
- ⛑ TypeScript 6
- 📦 [pnpm](https://pnpm.io/) - Fast, disk space efficient package manager
- 🎨 [Tailwind](https://tailwindcss.com/)
- 🔌 [shadcn/ui](https://ui.shadcn.com/) - Beautifully designed components that you can copy and paste into your apps.
- 🧪 Vitest 5 + React Testing Library - Unit tests for all of your code.
- 🎛️ [MSW](https://mswjs.io/) v3 - Intercept requests inside your tests (set up for testing only)
- 🪝[TanStackQuery](https://tanstack.com/query/v5)v5 - The best way to fetch data on the client
- 📏 ESLint 9 — To find and fix problems in your code
- 💖 Prettier — Code Formatter for consistent style
- 🐶 Husky — For running scripts before committing
- 🚫 lint-staged — Run ESLint and Prettier against staged Git files
- 👷 GitHub Actions — Run type checks, tests, linting, production builds, and dependency audits on pull requests
- 🗂 Path Mapping — Import components or images using the `@` prefix
- ⚪⚫ Dark mode - Toggle theme modes with [next-themes](https://github.com/pacocoursey/next-themes)
- ✨ Next Top Loader - Render a pleasent top loader on navigation with [nextjs-toploader](https://github.com/TheSGJ/nextjs-toploader)
- 🔋 Lots Extras - Next Bundle Analyzer, Vercel Analytics, Vercel Geist Font

## Clone and run locally

1. You'll first need a Supabase project which can be made [via the Supabase dashboard](https://database.new)

2. Install [fnm](https://github.com/Schniz/fnm#installation) and configure your shell as described under [Requirements](#requirements), then create a Next.js app using the template:

   ```bash
   fnm install 26.13.0
   fnm use 26.13.0
   npm install --global pnpm@12.18.0
   pnpm create next-app -e https://github.com/michaeltroya/supa-next-starter
   # or
   npx create-next-app -e https://github.com/michaeltroya/supa-next-starter
   ```

3. Use `cd` to change into the app's directory

   ```bash
   cd name-of-new-app
   ```

4. Copy `.env.example` to `.env.local` and update the following:

   ```bash
   cp .env.example .env.local
   ```

   ```
   NEXT_PUBLIC_SUPABASE_URL=[INSERT SUPABASE PROJECT URL]
   NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=[INSERT SUPABASE PUBLISHABLE KEY]
   ```

   Both `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` can be found in [your Supabase project's API settings](https://app.supabase.com/project/_/settings/api)

5. Configure Supabase Auth before testing sign-up and password recovery:
   - Set the Site URL to your app's URL and allow its `/protected` and `/auth/update-password` redirect URLs in [URL Configuration](https://supabase.com/dashboard/project/_/auth/url-configuration).
   - Set the Confirm signup email link to `{{ .SiteURL }}/auth/confirm?token_hash={{ .TokenHash }}&type=email&next=/protected`.
   - Set the Reset Password email link to `{{ .SiteURL }}/auth/confirm?token_hash={{ .TokenHash }}&type=recovery&next=/auth/update-password`.
   - Use `http://localhost:3000` locally and your HTTPS domain in production. Keep service role and secret keys out of `NEXT_PUBLIC_*` variables.

6. You can now run the Next.js local development server:

   ```bash
   pnpm run dev
   ```

   The starter kit should now be running on [localhost:3000](http://localhost:3000/).

> Check out [the docs for Local Development](https://supabase.com/docs/guides/getting-started/local-development) to also run Supabase locally.

## Showcase

Websites started using this template:

- [Add yours](https://github.com/michaeltroya/supa-next-starter/edit/main/README.md)

# Documentation

### Requirements

- Node.js >= 26.13.0 (LTS; pinned in `.nvmrc`)
- pnpm 12.18.0 (pinned in `package.json`)

Use [fnm](https://github.com/Schniz/fnm) to manage Node.js versions. On macOS, install it with Homebrew:

```bash
brew install fnm
```

For zsh, add the following to `~/.zshrc` and open a new terminal:

```sh
eval "$(fnm env --use-on-cd --shell zsh)"
```

For other platforms and shells, follow the [fnm installation and shell setup instructions](https://github.com/Schniz/fnm#installation).

For an existing clone, install and select the pinned Node.js version, then install dependencies:

```bash
fnm install
fnm use
pnpm install --frozen-lockfile
```

The `.nvmrc` file is supported by both fnm and nvm, so contributors who already use nvm can keep using it.

ESLint stays on 9.39.5 and TypeScript on 6.0.3 until Next.js's lint plugins support ESLint 10 and TypeScript 7. The lockfile includes a patched minimatch override for transitive dependencies; review it when upgrading those plugins.

### Scripts

- `pnpm dev` — Starts the application in development mode at `http://localhost:3000`.
- `pnpm build` — Creates an optimized production build of your application.
- `pnpm start` — Starts the application in production mode.
- `pnpm type-check` — Generate Next.js route types and validate code using the TypeScript compiler.
- `pnpm lint` — Runs ESLint across the project.
- `pnpm format-check` — Runs Prettier and checks if any files have formatting issues.
- `pnpm format` — Runs Prettier and formats files.
- `pnpm test` — Runs all the vitest tests in the project.
- `pnpm test:ci` — Runs all the vitest tests in the project, Vitest will assume it is running in a CI environment.
- `pnpm test:ui` — Runs Vitest with the UI interface.
- `pnpm analyze` — Analyzes production bundles with Next.js's built-in Turbopack analyzer.
- `pnpm audit` — Checks production and development dependencies for known vulnerabilities.

### Paths

TypeScript is pre-configured with custom path mappings. To import components or files, use the `@` prefix.

```tsx
import { Button } from '@/components/ui/button'

// Files in public are served from the root URL.
const avatarUrl = '/avatar.png'
```

### Switch to Yarn/npm

This starter uses pnpm by default, but this choice is yours. If you'd like to switch to Yarn/npm, delete the `pnpm-lock.yaml` file, install the dependencies with Yarn/npm, change the CI workflow, and Husky Git hooks to use Yarn/npm commands.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for more information.

## Feedback and issues

Please file feedback and issues [here](https://github.com/michaeltroya/supa-next-starter/issues).
