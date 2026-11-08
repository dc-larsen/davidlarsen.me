# Archive

`projects.vue` is the old playbooks page. Nuxt does not route anything in this directory.

Card images live in `archive/images/` so they are not copied to the live site. The Vue file still refers to `/images/...`. To restore the page, move `projects.vue` back under `pages/` and move `archive/images/*` to `public/images/`.
