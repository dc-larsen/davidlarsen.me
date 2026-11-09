# Security

This is a static site. The deployed pages are HTML, CSS, and JavaScript on Vercel. There is no login, no database, and no server to patch in production.

## What is enforced on davidlarsen.me

Vercel sends the headers in `vercel.json` on every response:

- Content-Security-Policy, including `frame-ancestors 'none'`
- `X-Frame-Options: DENY`
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy` with camera, microphone, and geolocation disabled

Scripts are files from this origin. Styles allow `'unsafe-inline'` because Astro's font loader writes a style block. `script-src` does not.

## What runs in development

`astro dev` is local only. Dependencies are locked. Run `npm audit` before a dependency change.

Report a vulnerability by emailing the address on the GitHub profile for dc-larsen. Please do not open a public issue with exploit detail.
