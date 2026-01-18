<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    class="wow-icon"
    :class="{ hovered: isHovered }"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <!-- Shield/badge shape -->
    <path
      class="shield-path"
      :fill="color"
      d="M12 2C8 2 4.5 3.5 3 4.5V5C3 5 3 7 3 9C3 13 5.5 17.5 12 22C18.5 17.5 21 13 21 9C21 7 21 5 21 5V4.5C19.5 3.5 16 2 12 2Z"
    />
    <!-- Corner notches for the WoW badge look -->
    <path
      class="notch-path"
      fill="var(--bg-color, #f8fafc)"
      d="M3 4.5L5 6.5L3 8.5V4.5Z"
    />
    <path
      class="notch-path"
      fill="var(--bg-color, #f8fafc)"
      d="M21 4.5L19 6.5L21 8.5V4.5Z"
    />
    <!-- W letter -->
    <path
      class="letter-path"
      fill="var(--bg-color, #f8fafc)"
      d="M7 7L8.5 15L10.5 10L12 15L13.5 10L15.5 15L17 7H15.5L14.5 12L12.5 7H11.5L9.5 12L8.5 7H7Z"
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
  }
})

const isHovered = ref(false)
</script>

<style scoped>
.wow-icon {
  --bg-color: #f8fafc;
  transform-origin: center;
  transition: transform 0.3s ease, filter 0.3s ease;
}

.wow-icon.hovered {
  animation: wow-glow 0.5s ease;
}

.shield-path {
  transition: fill 0.3s ease;
}

.wow-icon.hovered .shield-path {
  fill: #138A36;
}

@keyframes wow-glow {
  0% { transform: scale(1); filter: drop-shadow(0 0 0 transparent); }
  50% { transform: scale(1.1); filter: drop-shadow(0 0 8px rgba(19, 138, 54, 0.5)); }
  100% { transform: scale(1); filter: drop-shadow(0 0 0 transparent); }
}
</style>
