<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    :stroke="color"
    :stroke-width="strokeWidth"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="external-link-icon"
    :class="{ hovered: isHovered }"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline class="arrow-head" points="15 3 21 3 21 9" />
    <line class="arrow-line" x1="10" y1="14" x2="21" y2="3" />
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
  }
})

const isHovered = ref(false)
</script>

<style scoped>
.external-link-icon {
  transition: transform 0.2s ease;
}

.arrow-head,
.arrow-line {
  transform-origin: top right;
  transition: transform 0.3s ease;
}

.external-link-icon.hovered .arrow-head,
.external-link-icon.hovered .arrow-line {
  animation: arrow-launch 0.4s ease;
}

@keyframes arrow-launch {
  0% { transform: translate(0, 0); }
  50% { transform: translate(2px, -2px); }
  100% { transform: translate(0, 0); }
}
</style>
