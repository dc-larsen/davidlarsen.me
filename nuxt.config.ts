// Nuxt Configuration for davidlarsen.me
// This file configures the Nuxt.js static site generation and deployment settings
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  
  // App configuration including HTML head elements
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
        // Favicon configuration - SVG preferred for crisp scaling, ICO fallback for older browsers
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg?v=7' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico?v=7' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicon.svg?v=7' }
      ]
    }
  },

  css: ['@/assets/css/main.css'],

  // Nitro configuration for static site generation and deployment
  // IMPORTANT: This configuration is critical for proper GitHub Pages deployment
  nitro: {
    // Prerendering settings - generates static HTML files for deployment
    prerender: {
      crawlLinks: true, // Automatically discovers and prerenders linked pages
      routes: [] // No explicit routes needed, crawler will find them
    },
    // Security headers applied to all routes
    routeRules: {
      '/**': {
        headers: {
          // Content Security Policy - restricts resource loading for security
          'Content-Security-Policy': "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self'; connect-src 'self'",
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