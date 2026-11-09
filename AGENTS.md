# davidlarsen.me

Static Astro site. Pushes to the production branch deploy on Vercel from the Origin repository. There is no application server.

## Update the blog

This is the usual task. One markdown file is one post.

1. Copy `src/content/blog/_template.md` to `src/content/blog/<slug>.md`.
2. The filename is the URL. `src/content/blog/my-post.md` becomes `/blog/my-post`. Do not add a page.
3. Put images in `public/images/`. `image` is the card. Set `banner` only when the article hero differs.
4. Write Markdown under the frontmatter. Raw HTML is allowed for a figure or a lede.
5. Run `npm run check:blog`.

`draft: true` (unquoted) keeps a file out of the index and the production build.

Listing, search, and the article layout read these files through `src/content.config.ts`. There is no second metadata file.

## Layout

- `src/pages/` routes, except individual blog posts.
- `src/content/blog/` posts.
- `src/components/` shared Astro components.
- `public/` files copied into the deployed site. Everything here is public.
- `archive/` the retired playbooks page. It is not a route. Its images are in `archive/images/` and are not deployed. To put that page back, move it to `src/pages/` and move those images to `public/images/`.
- `/projects` redirects to `/` in `astro.config.mjs` and `vercel.json`. Do not recreate a projects page.
- Tailwind 4 is loaded from `src/styles/global.css` through the Vite plugin in `astro.config.mjs`. There is no `tailwind.config` file.
- Response headers live in `vercel.json`. Vercel sends them. A meta tag is not a substitute for `frame-ancestors`.

## Do not

- Do not commit `dist/`, `.astro/`, or `node_modules/`.
- Do not put secrets, tokens, customer data, or private notes in the repo. It is public once deployed, and the git history stays.
- Do not add a server adapter. The site is static.
- Do not describe GitHub Pages as the host. Vercel sends the headers in `vercel.json`.

## Commands

Node 22. Use `npm ci` so the lockfile stays the source of truth.

- `npm run check:blog`
- `npm run dev`
- `npm run build`
