import { defineConfig, fontProviders } from 'astro/config'
import { satteri } from '@astrojs/markdown-satteri'
import sitemap from '@astrojs/sitemap'
import tailwindcss from '@tailwindcss/vite'
import { slugify } from './src/lib/slugify.mjs'

export default defineConfig({
  site: 'https://davidlarsen.me',
  output: 'static',
  trailingSlash: 'never',
  integrations: [sitemap()],
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: 'Source Sans 3',
      cssVariable: '--font-source-sans',
      weights: [400, 600, 700],
      styles: ['normal', 'italic'],
      subsets: ['latin'],
    },
    {
      provider: fontProviders.fontsource(),
      name: 'Source Serif 4',
      cssVariable: '--font-source-serif',
      weights: [600, 700],
      styles: ['normal', 'italic'],
      subsets: ['latin'],
    },
  ],
  markdown: {
    processor: satteri({
      hastPlugins: [
        {
          name: 'heading-ids',
          element: {
            filter: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
            visit(node, ctx) {
              const id = slugify(ctx.textContent(node))
              if (id) ctx.setProperty(node, 'id', id)
            },
          },
        },
        {
          name: 'external-links',
          element: {
            filter: ['a'],
            visit(node, ctx) {
              const href = node.properties?.href
              if (typeof href === 'string' && /^https?:\/\//.test(href)) {
                ctx.setProperty(node, 'target', '_blank')
                ctx.setProperty(node, 'rel', 'noopener noreferrer')
              }
            },
          },
        },
      ],
    }),
  },
  redirects: {
    '/projects': {
      status: 302,
      destination: '/',
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
})
