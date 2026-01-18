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
    class="pdf-icon"
    :class="{ hovered: isHovered }"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <!-- Document shape -->
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline class="fold" points="14 2 14 8 20 8" />
    <!-- PDF text -->
    <text
      x="12"
      y="16"
      text-anchor="middle"
      :fill="color"
      font-size="5"
      font-weight="bold"
      font-family="system-ui, sans-serif"
      stroke="none"
    >PDF</text>
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
.pdf-icon {
  transition: transform 0.2s ease;
}

.pdf-icon.hovered {
  animation: pdf-lift 0.4s ease;
}

.fold {
  transform-origin: top right;
}

.pdf-icon.hovered .fold {
  animation: fold-flip 0.4s ease;
}

@keyframes pdf-lift {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-2px); }
}

@keyframes fold-flip {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
}
</style>
