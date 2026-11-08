# Security

This is a static site. The deployed pages are HTML, CSS, and JavaScript on GitHub Pages. There is no login, no database, and no server to patch in production.

## What is enforced on davidlarsen.me

GitHub Pages does not apply custom response headers. A Content-Security-Policy meta tag is rendered into each page from `nuxt.config.ts`. It allows this origin, plus the inline script and style Nuxt needs to hydrate.

`X-Frame-Options` and `frame-ancestors` need a real response header. A meta tag cannot set them. Clickjacking protection is not available while the site stays on GitHub Pages.

## What runs in development and CI

`nuxt dev` is local only. Nuxt DevTools are disabled. Dependencies are locked and `npm audit --audit-level=high` runs in GitHub Actions.

Report a vulnerability by emailing the address on the GitHub profile for dc-larsen. Please do not open a public issue with exploit detail.
