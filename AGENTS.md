# AGENTS.md

## Quick commands
- `yarn dev` — dev server (`http://localhost:3000`)
- `yarn build` — production build
- `yarn lint` — ESLint (`next lint`)
- **No test suite exists** — do not try to run tests.

## Architecture

**Next.js 13 App Router** (`src/app/`), single app, no monorepo.

### Routes (all under `src/app/`)
| Route | File | Type |
|---|---|---|
| `/` | `page.js` | Server Component |
| `/posts` | `posts/page.js` | Server Component |
| `/posts/[slug]` | `posts/[slug]/page.js` | Client Component |
| `/api/posts/[slug]` | `api/posts/[slug]/route.js` | API Route |
| `/tasbih` | `tasbih/page.js` | Client Component |

### Blog content (MDX)
- Posts stored in `src/app/data/` (3 posts in Indonesian).
- Frontmatter parsed via `gray-matter` in `src/app/lib/mdx.js`.
- API route reads from filesystem, processes with `next-mdx-remote` + `rehype-code-titles` + `rehype-prism-plus`.
- Post page fetches content client-side via `SWR` hitting `/api/posts/[slug]`.
- `src/app/lib/mdx2html.js` exists but is **unused** — do not modify or rely on it.

### Components
- All components exported from barrel `src/app/components/index.js`.
- `@headlessui/react` used only for the Navbar dropdown (Menu + Transition).

### Styling
- Tailwind CSS 3.3 (custom sans font: `var(--my-font)`).
- Custom local font: GT Walsheim Light, loaded via `next/font/local` in layout.
- CSS modules for MDX styles (`mdx-style.module.css`) and Prism themes.
- Google Material Symbols icon font loaded via external CSS in `globalicons.css`.

### Path alias
- `@/*` → `src/*` (configured in `jsconfig.json`).

## Environment variables
- All env vars hardcoded in `next.config.js` (`env` key): `appName`, `version`, `linkCv`.
- Accessed via `process.env.*` in source. **No `.env` files exist.**
- `linkCv` is a Google Drive link — do not change without the owner.

## Remote images
- `next.config.js` allows `ik.imagekit.io` for `next/image` (profile images).

## Gotchas
- `src/app/layout.js` sets `lang="id"` (Indonesian) — content is in Bahasa Indonesia.
- No CI, no Docker, no pre-commit hooks, no tests.
- Package manager is **Yarn** (use `yarn`, not `npm`).
