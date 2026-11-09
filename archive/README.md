# Archive

`projects.vue` is the old playbooks page. Nothing in this directory is a route.

Card images live in `archive/images/` so they are not copied to the live site. The Vue file still refers to `/images/...`. To restore the page, move `projects.vue` back under `src/pages/` and move `archive/images/*` to `public/images/`.
