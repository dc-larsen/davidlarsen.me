<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    :fill="filled ? color : 'none'"
    :stroke="color"
    :stroke-width="strokeWidth"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="heart-icon"
    :class="{ hovered: isHovered }"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
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
    default: 'currentColor'
  },
  strokeWidth: {
    type: [Number, String],
    default: 2
  },
  filled: {
    type: Boolean,
    default: false
  }
})

const isHovered = ref(false)
</script>

<style scoped>
.heart-icon {
  transform-origin: center;
  transition: transform 0.2s ease;
}

.heart-icon.hovered {
  animation: heartbeat 0.6s ease-in-out;
}

@keyframes heartbeat {
  0%, 100% { transform: scale(1); }
  25% { transform: scale(1.2); }
  50% { transform: scale(1); }
  75% { transform: scale(1.15); }
}
</style>
