# Repository Guidelines

## Project Structure & Module Organization
- `app/` hosts the Next.js App Router; the `[lang]/` segment drives the locale landing page and `docs/` under each locale renders MDX guides.
- `components/` contains reusable UI (analytics hook-up, docs widgets, MDX helpers); prefer co-locating feature-specific variants under nested folders.
- `content/docs/<lang>/` stores source-of-truth prose in MDX plus `meta.json` descriptors consumed by Fumadocs; keep filenames kebab-cased.
- `lib/` holds shared utilities such as i18n glue and Fumadocs bindings; reuse via the `@/*` path alias defined in `tsconfig.json`.
- Static assets live under `public/`; add new media there and reference with absolute `/` paths.

## Build, Test, and Development Commands
- `yarn install` — installs dependencies and runs the `postinstall` step that syncs Fumadocs metadata.
- `yarn dev` — launches the Next.js dev server on localhost:3000.
- `yarn build` — produces an optimized production build; run before submitting substantial changes.
- `yarn start` — serves the compiled output locally for smoke tests.
- `npx tsc --noEmit` — optional type-only check; keep the project warning-free because `tsconfig.json` is `strict`.

## Coding Style & Naming Conventions
- Use TypeScript and React function components; follow 2-space indentation and Prettier defaults.
- Export UI modules with PascalCase filenames (`CustomDocsPage.tsx`), hooks with `use` prefixes, and utility modules in camelCase.
- Reference shared modules via the `@/*` alias, and keep locale keys consistent with definitions in `lib/i18n.ts`.
- Run `next lint` once configured; until then, rely on editor-integrated ESLint/Prettier.

## Documentation & Content Authoring
- Place new articles in `content/docs/<lang>/` with frontmatter that matches the schemas declared in `source.config.ts`.
- Update each locale’s `meta.json` to surface content in navigation.
- Use MDX components from `components/docs/` for callouts, diagrams (`mdx/mermaid.tsx`), and interactive embeds.

## Testing Guidelines
- No automated test suite ships yet; perform manual smoke tests against the localized routes (`/docs/en`, `/docs/zh`) before opening a PR.
- When introducing critical logic, add colocated `*.test.ts(x)` files using Vitest + React Testing Library (preferred stack for Next 15) and document new scripts in `package.json`.

## Commit & Pull Request Guidelines
- Follow concise, imperative commit subjects (e.g., `Add mermaid diagram component`), matching the existing history.
- Squash work before pushing unless reviewers request otherwise; keep lockfiles in sync with Yarn.
- PRs should outline scope, mention affected locales/docs, attach screenshots or recordings of UI changes, and link the relevant issue or task tracker entry.
