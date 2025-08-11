export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  
  app: {
    head: {
      titleTemplate: (titleChunk) => titleChunk ? `${titleChunk} – David Larsen` : 'David Larsen',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Customer support & success leader in Baltimore. Supporting teams, building processes, and solving problems.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'David Larsen' },
        { property: 'og:description', content: 'Customer support & success leader in Baltimore. Supporting teams, building processes, and solving problems.' },
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:site', content: '@davidlarsen' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico?v=3' },
        { rel: 'shortcut icon', type: 'image/x-icon', href: '/favicon.ico?v=3' },
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css', integrity: 'sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg==', crossorigin: 'anonymous' }
      ]
    }
  },

  css: ['@/assets/css/main.css'],

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/blog/thoughts-on-leadership']
    },
    routeRules: {
      '/**': {
        headers: {
          'Content-Security-Policy': "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline' https://cdnjs.cloudflare.com; img-src 'self' data:; font-src 'self' https://cdnjs.cloudflare.com; connect-src 'self'",
          'X-Frame-Options': 'DENY',
          'X-Content-Type-Options': 'nosniff',
          'Referrer-Policy': 'strict-origin-when-cross-origin',
          'Permissions-Policy': 'camera=(), microphone=(), geolocation=()'
        }
      }
    }
  },

  compatibilityDate: '2025-08-10'
})