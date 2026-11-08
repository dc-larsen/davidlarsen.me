import { readdirSync, readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = dirname(fileURLToPath(import.meta.url))

// Published posts are prerendered from the filename, same rule as utils/blog.js:
// skip `_template.md` and any file with an unquoted `draft: true`.
// GitHub Pages will not discover a markdown file on its own.
function publishedBlogRoutes() {
  const dir = join(root, 'content/blog')
  return readdirSync(dir)
    .filter(name => name.endsWith('.md') && !name.startsWith('_'))
    .filter(name => !/^draft:\s*true\s*$/m.test(readFileSync(join(dir, name), 'utf8')))
    .map(name => `/blog/${name.replace(/\.md$/, '')}`)
}

// GitHub Pages serves the generated HTML and ignores Nitro response headers.
// The meta tag is what actually reaches the browser. The routeRules copy
// still applies to `nuxt preview` and to any host that runs Nitro.
// frame-ancestors is ignored inside a meta tag, so clickjacking protection
// only exists on a host that sends the header below.
const contentSecurityPolicy = [
  "default-src 'self'",
  // Nuxt's static hydration snippet is inline. A nonce is not practical on GitHub Pages.
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data:",
  "font-src 'self'",
  "connect-src 'self'",
  "base-uri 'self'",
  "form-action 'self'",
  "object-src 'none'",
  "frame-ancestors 'none'"
].join('; ')

export default defineNuxtConfig({
  // Nuxt 4 defaults srcDir to app/. This repo keeps pages/, components/,
  // and layouts/ at the root so a blog update stays a markdown file plus an image.
  srcDir: '.',
  // DevTools has had unauthenticated dev-server RCEs. This site does not use them.
  devtools: { enabled: false },

  runtimeConfig: {
    public: {
      siteUrl: 'https://davidlarsen.me'
    }
  },

  app: {
    head: {
      titleTemplate: (titleChunk) => titleChunk ? `${titleChunk} – David Larsen` : 'David Larsen',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Customer support & success leader in Baltimore. Supporting teams, building processes, and solving problems.' },
        { name: 'referrer', content: 'strict-origin-when-cross-origin' },
        { 'http-equiv': 'Content-Security-Policy', content: contentSecurityPolicy },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'David Larsen' },
        { property: 'og:description', content: 'Customer support & success leader in Baltimore. Supporting teams, building processes, and solving problems.' },
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:site', content: '@davidlarsen' },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg?v=7' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico?v=7' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicon.svg?v=7' }
      ]
    }
  },

  css: ['@/assets/css/main.css'],

  // Nuxt copies this list into Vite and ignores postcss.config.cjs.
  // Tailwind has to be here or @apply ships to the browser uncompiled.
  // The PostCSS transformer (not Lightning CSS) is what understands Tailwind 3.
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  vite: {
    css: {
      transformer: 'postcss'
    }
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/projects', ...publishedBlogRoutes()]
    },
    routeRules: {
      // /projects used to be the playbooks page. GitHub Pages does not run
      // Nitro, so generate turns this into a tiny meta-refresh HTML file.
      // Keep the rule. Do not recreate pages/projects.vue.
      '/projects': { redirect: { to: '/', statusCode: 302 } },
      '/projects/**': { redirect: { to: '/', statusCode: 302 } },
      '/**': {
        headers: {
          'Content-Security-Policy': contentSecurityPolicy,
          'X-Frame-Options': 'DENY',
          'X-Content-Type-Options': 'nosniff',
          'Referrer-Policy': 'strict-origin-when-cross-origin',
          'Permissions-Policy': 'camera=(), microphone=(), geolocation=()'
        }
      }
    }
  },

  compatibilityDate: '2026-11-08'
})
