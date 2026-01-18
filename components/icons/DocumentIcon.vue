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
    class="document-icon"
    :class="{ hovered: isHovered }"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline class="fold" points="14 2 14 8 20 8" />
    <line class="line line-1" x1="8" y1="13" x2="16" y2="13" />
    <line class="line line-2" x1="8" y1="17" x2="12" y2="17" />
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
.document-icon {
  transition: transform 0.2s ease;
}

.document-icon.hovered {
  animation: doc-lift 0.4s ease;
}

.fold {
  transform-origin: top right;
}

.document-icon.hovered .fold {
  animation: fold-flip 0.4s ease;
}

.line {
  stroke-dasharray: 20;
  stroke-dashoffset: 0;
}

.document-icon.hovered .line-1 {
  animation: draw-line 0.3s ease-out;
}

.document-icon.hovered .line-2 {
  animation: draw-line 0.3s ease-out 0.1s;
}

@keyframes doc-lift {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-2px); }
}

@keyframes fold-flip {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
}

@keyframes draw-line {
  0% { stroke-dashoffset: 20; }
  100% { stroke-dashoffset: 0; }
}
</style>
