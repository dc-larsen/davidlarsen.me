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
    class="flickr-icon"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <!-- Rounded rectangle border -->
    <rect
      class="border-path"
      :class="{ hovered: isHovered }"
      x="3"
      y="5"
      width="18"
      height="14"
      rx="3"
    />
    <!-- Left dot (blue in original Flickr) -->
    <circle
      class="dot dot-left"
      :class="{ hovered: isHovered }"
      cx="8.5"
      cy="12"
      r="2.5"
      :fill="color"
      stroke="none"
    />
    <!-- Right dot (pink in original Flickr) -->
    <circle
      class="dot dot-right"
      :class="{ hovered: isHovered }"
      cx="15.5"
      cy="12"
      r="2.5"
      :fill="color"
      stroke="none"
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
.flickr-icon {
  transition: transform 0.2s ease;
}

.border-path {
  transform-origin: center;
  transition: transform 0.4s ease;
}

.border-path.hovered {
  animation: border-scale 0.4s ease;
}

.dot {
  transform-origin: center;
  transition: transform 0.3s ease;
}

.dot-left.hovered {
  animation: pulse-left 0.6s ease-in-out infinite;
}

.dot-right.hovered {
  animation: pulse-right 0.6s ease-in-out infinite;
  animation-delay: 0.3s;
}

@keyframes border-scale {
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
}

@keyframes pulse-left {
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.2); opacity: 0.8; }
}

@keyframes pulse-right {
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.2); opacity: 0.8; }
}
</style>
