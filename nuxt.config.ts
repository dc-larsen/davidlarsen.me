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
        { rel: 'icon', href: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext y='0.9em' font-size='90'%3E%F0%9F%91%A8%F0%9F%8F%BC%E2%80%8D%F0%9F%92%BB%3C/text%3E%3C/svg%3E" },
        { rel: 'shortcut icon', href: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext y='0.9em' font-size='90'%3E%F0%9F%91%A8%F0%9F%8F%BC%E2%80%8D%F0%9F%92%BB%3C/text%3E%3C/svg%3E" },
        { rel: 'apple-touch-icon', href: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext y='0.9em' font-size='90'%3E%F0%9F%91%A8%F0%9F%8F%BC%E2%80%8D%F0%9F%92%BB%3C/text%3E%3C/svg%3E" },
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css', integrity: 'sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg==', crossorigin: 'anonymous' }
      ]
    }
  },

  css: ['@/assets/css/main.css'],

  nitro: {
    prerender: {
      crawlLinks: true
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