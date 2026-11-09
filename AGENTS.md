# davidlarsen.me

Nuxt 4 static site. Pushes to `main` deploy to GitHub Pages. There is no application server.

## Update the blog

This is the usual task. One markdown file is one post.

1. Copy `content/blog/_template.md` to `content/blog/<slug>.md`.
2. The filename is the URL. `content/blog/my-post.md` becomes `/blog/my-post`. Do not add a Vue page.
3. Put images in `public/images/`. `image` is the card. Set `banner` only when the article hero differs.
4. Write Markdown under the frontmatter. Raw HTML is allowed for a figure or a lede.
5. Run `npm run check:blog`.

`draft: true` (unquoted) keeps a file out of the index and the production build.

Listing, search, and the article layout read these files through `utils/blog.js`. There is no second metadata file.

## Layout

- `pages/` routes, except blog posts.
- `content/blog/` posts.
- `components/` shared Vue components.
- `public/` files copied into the deployed site. Everything here is public.
- `archive/` the retired playbooks page. It is not a route. Its images are in `archive/images/` and are not deployed. To put that page back, move it to `pages/` and move those images to `public/images/`.
- `/projects` redirects to `/` via `nuxt.config.ts`. Generate emits a tiny HTML refresh because GitHub Pages does not run Nitro. Do not recreate `pages/projects.vue`.
- Tailwind plugins live in `nuxt.config.ts` under `postcss.plugins`. The build does not read `postcss.config.cjs`.
- `package.json` `overrides` pin `glob`, `minimatch`, and `deepmerge`. Nitro still asks for the vulnerable releases. `deepmerge` 4.1.2 is the last release outside CVE-2026-93753. Leave the overrides in place. `npm audit fix --force` downgrades Nuxt and brings back high-severity issues.

## Do not

- Do not commit `.nuxt/`, `.output/`, or `node_modules/`.
- Do not put secrets, tokens, customer data, or private notes in the repo. It is public, and the git history stays public.
- Do not turn on Nuxt DevTools. `devtools.enabled` is false because DevTools has had unauthenticated dev-server command execution.
- Do not describe the Nitro security headers as live on davidlarsen.me. GitHub Pages does not send them. The CSP meta tag in `nuxt.config.ts` is what the browser enforces.

## Commands

Node 22. Use `npm ci` so the lockfile stays the source of truth.

- `npm run check:blog`
- `npm run dev`
- `npm run generate`
