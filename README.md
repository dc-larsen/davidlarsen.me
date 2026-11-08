# David Larsen

Personal site for David Larsen, built with Nuxt and Tailwind and deployed as a static site on GitHub Pages.

## Develop

Node.js 22.

```bash
git clone https://github.com/dc-larsen/davidlarsen.me.git
cd davidlarsen.me
npm ci
npm run dev
```

- `npm run dev` starts the dev server
- `npm run check:blog` checks post frontmatter and images
- `npm run generate` builds the static site into `.output/public`
- `npm run preview` serves that build locally, including the Nitro headers
- `npm audit` checks dependencies

To add a blog post, copy `content/blog/_template.md`. The filename is the URL. Details are in `AGENTS.md`.

## Security

The live site is static hosting. GitHub Pages does not send custom response headers, so `X-Frame-Options` and the other Nitro headers in `nuxt.config.ts` are not on https://davidlarsen.me. Each page does include a Content-Security-Policy meta tag.

Nuxt DevTools are disabled. `npm audit --audit-level=high` runs in GitHub Actions. See `SECURITY.md`.

## Project structure

```
content/blog/          # one markdown file per post
pages/                 # routes other than individual posts
components/            # shared Vue components
public/                # files copied to the deployed site
archive/               # retired playbooks page, not routed
nuxt.config.ts         # CSP, redirects, prerender routes
.github/workflows/     # deploy and dependency audit
```

`/projects` redirects to `/`. The old playbooks page is in `archive/`.

## Deployment

A push to `main` runs `.github/workflows/deploy.yml` and publishes `.output/public`. The domain is `public/CNAME`. Do not commit `.output/` or `.nuxt/`. See `DEPLOYMENT.md`.

## Credits

Special thanks to [Tyler Howard](https://github.com/tylernhoward) for the original inspiration.

This site started as a template from Tyler's work.

## License

MIT. See `LICENSE`.
