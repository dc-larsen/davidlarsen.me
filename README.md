# David Larsen

Personal site for David Larsen, built with Astro and Tailwind and deployed as a static site on Vercel from an Origin repository.

## Develop

Node.js 22.

```bash
git clone https://origin.cursor.com/<namespace>/davidlarsen.me.git
cd davidlarsen.me
npm ci
npm run dev
```

- `npm run dev` starts the dev server
- `npm run check:blog` checks post frontmatter and images
- `npm run build` writes the static site to `dist/`
- `npm run preview` serves that build locally

To add a blog post, copy `src/content/blog/_template.md`. The filename is the URL. Details are in `AGENTS.md`.

## Security

The live site is static hosting on Vercel. `vercel.json` sends Content-Security-Policy, `X-Frame-Options`, and the other response headers. See `SECURITY.md`.

## Project structure

```
src/content/blog/      # one markdown file per post
src/pages/             # routes other than individual posts
src/components/        # shared Astro components
public/                # files copied to the deployed site
archive/               # retired playbooks page, not routed
astro.config.mjs       # site URL, fonts, markdown, /projects redirect
vercel.json            # response headers and the /projects redirect
```

`/projects` redirects to `/`. The old playbooks page is in `archive/`.

## Deployment

Vercel builds this Origin repository. A push to the production branch deploys production. Other branches and pull requests get preview URLs. The domain is `davidlarsen.me`. Do not commit `dist/` or `.astro/`. See `DEPLOYMENT.md`.

## Credits

Special thanks to [Tyler Howard](https://github.com/tylernhoward) for the original inspiration.

This site started as a template from Tyler's work.

## License

MIT. See `LICENSE`.
