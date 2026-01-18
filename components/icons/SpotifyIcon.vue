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
    class="spotify-icon"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <circle
      class="circle-path"
      :class="{ hovered: isHovered }"
      cx="12"
      cy="12"
      r="9"
    />
    <path
      class="wave wave-1"
      :class="{ hovered: isHovered }"
      d="M7 9c2 -1 6 -2 10 .5"
    />
    <path
      class="wave wave-2"
      :class="{ hovered: isHovered }"
      d="M8 11.973c2.5 -1.473 5.5 -.973 7.5 .527"
    />
    <path
      class="wave wave-3"
      :class="{ hovered: isHovered }"
      d="M9 15c1.5 -1 4 -1 5 .5"
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
.spotify-icon {
  transition: transform 0.2s ease;
}

.circle-path {
  transform-origin: center;
  transition: transform 0.4s ease;
}

.circle-path.hovered {
  animation: circle-pulse 0.4s ease;
}

.wave {
  stroke-dasharray: 30;
  stroke-dashoffset: 0;
  transform-origin: center;
}

.wave.hovered {
  animation: wave-dance 0.8s ease-in-out infinite;
}

.wave-1.hovered {
  animation-delay: 0s;
}

.wave-2.hovered {
  animation-delay: 0.1s;
}

.wave-3.hovered {
  animation-delay: 0.2s;
}

@keyframes circle-pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
}

@keyframes wave-dance {
  0%, 100% {
    transform: translateX(0);
    opacity: 1;
  }
  50% {
    transform: translateX(1px);
    opacity: 0.7;
  }
}
</style>
