# Deployment

Origin is the source of truth. Vercel is connected to that Origin repository and builds the static Astro site on every push.

- A push or merge to the production branch (`main`) deploys production and updates `davidlarsen.me`.
- Any other branch, and each pull request, gets a preview deployment. Vercel reports the preview URL on the Origin pull request.
- The build command is `npm run build`. The output directory is `dist/`. Vercel detects Astro, so no adapter is required.

`vercel.json` sends the security headers and redirects `/projects` to `/`.

Do not commit `dist/` or `.astro/`. Those directories are generated and gitignored.

## Domain

`davidlarsen.me` is a Vercel project domain. DNS for the apex and `www` points at Vercel. GitHub Pages is not the host.

## Check a deploy

Open the Vercel project for this repository and confirm the latest production deployment is Ready. Then:

```bash
curl -I https://davidlarsen.me
```

The response should include `x-frame-options: DENY`. A broken asset path usually means the Vercel build failed, not that a generated file needs to be committed.
