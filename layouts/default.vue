<template>
  <div class="min-h-screen bg-background text-primary">
    <!-- Skip to content link for accessibility -->
    <a href="#content" class="skip-link">Skip to content</a>
    
    <!-- Navigation -->
    <header class="relative z-40">
      <NavBar />
    </header>

    <!-- Main content -->
    <main id="content" class="mx-auto max-w-7xl px-4 py-8">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="footer">
      <span class="left-align flex items-center gap-1">
        Made with <IconsHeartIcon :size="16" color="#ef4444" :filled="true" /> using
        <a class="link inline-flex items-center" href="https://nuxt.com" target="_blank" rel="noopener noreferrer" title="Built with Nuxt">
          <IconsNuxtIcon :size="16" class="mr-1" />Nuxt
        </a> in Baltimore, MD
      </span>
      <span class="right-align">Updated: {{ currentYear }}</span>
    </footer>
  </div>
</template>

<script setup>
const currentYear = new Date().getFullYear()
</script>