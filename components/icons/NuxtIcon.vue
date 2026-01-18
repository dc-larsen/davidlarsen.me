<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    class="nuxt-icon"
    :class="{ hovered: isHovered }"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <!-- Nuxt triangular shape -->
    <path
      class="nuxt-main"
      :fill="color"
      d="M13.4 20.8H3.2c-.4 0-.8-.1-1.1-.3-.3-.2-.6-.5-.7-.8-.2-.3-.2-.7-.2-1.1 0-.4.2-.7.4-1l5.1-8.8c.2-.3.5-.6.8-.7.3-.2.7-.3 1.1-.3.4 0 .7.1 1.1.3.3.2.6.4.8.7l5.1 8.8c.2.3.4.7.4 1 0 .4-.1.8-.2 1.1-.2.3-.4.6-.7.8-.4.2-.8.3-1.2.3h-.4z"
    />
    <path
      class="nuxt-accent"
      fill="#00DC82"
      d="M21.8 20.8h-5.4l-4.2-7.3 2.7-4.7c.2-.3.4-.5.7-.7.3-.2.6-.2.9-.2.3 0 .7.1.9.2.3.2.5.4.7.7l4.2 7.3c.2.3.3.6.3.9 0 .3-.1.7-.2.9-.2.3-.4.5-.7.7-.3.1-.6.2-.9.2z"
    />
  </svg>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  size: {
    type: [Number, String],
    default: 24
  },
  color: {
    type: String,
    default: '#00DC82'
  }
})

const isHovered = ref(false)
</script>

<style scoped>
.nuxt-icon {
  transform-origin: center;
  transition: transform 0.2s ease;
}

.nuxt-icon.hovered {
  animation: nuxt-bounce 0.5s ease;
}

.nuxt-main,
.nuxt-accent {
  transition: opacity 0.2s ease;
}

@keyframes nuxt-bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-2px); }
}
</style>
