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
    class="linkedin-icon"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <path
      class="border-path"
      :class="{ hovered: isHovered }"
      d="M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z"
    />
    <path
      class="line-path"
      :class="{ hovered: isHovered }"
      d="M8 11v5"
    />
    <path
      class="dot-path"
      :class="{ hovered: isHovered }"
      d="M8 8v.01"
    />
    <path
      class="line-path"
      :class="{ hovered: isHovered }"
      d="M12 16v-5"
    />
    <path
      class="curve-path"
      :class="{ hovered: isHovered }"
      d="M16 16v-3a2 2 0 1 0 -4 0"
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
.linkedin-icon {
  transition: transform 0.2s ease;
}

.border-path {
  transform-origin: center;
  transition: transform 0.4s ease;
}

.border-path.hovered {
  animation: border-scale 0.4s ease;
}

.line-path,
.dot-path,
.curve-path {
  stroke-dasharray: 100;
  stroke-dashoffset: 0;
  transition: stroke-dashoffset 0.3s ease;
}

.line-path.hovered,
.dot-path.hovered,
.curve-path.hovered {
  animation: draw-line 0.5s ease-out;
}

@keyframes border-scale {
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
}

@keyframes draw-line {
  0% { stroke-dashoffset: 100; }
  100% { stroke-dashoffset: 0; }
}
</style>
