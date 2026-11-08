# Deployment

Pushes to `main` run `.github/workflows/deploy.yml`. The workflow installs from the lockfile, checks the blog posts, runs `npm run generate`, and deploys `.output/public` to GitHub Pages.

The custom domain is `public/CNAME` (`davidlarsen.me`). `public/.nojekyll` keeps GitHub from running Jekyll on the generated files.

Do not commit `.output/` or `.nuxt/`. Those directories are generated and gitignored.

## Check a deploy

```bash
gh run list --workflow="Deploy Nuxt site to GitHub Pages" --limit 5
curl -I https://davidlarsen.me
```

A broken asset path usually means the workflow failed, not that a generated file needs to be committed.
