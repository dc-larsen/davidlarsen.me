<template>
  <div class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
    <!-- Project Image -->
    <div class="h-48 bg-gray-100 flex items-center justify-center overflow-hidden">
      <img 
        :src="image" 
        :alt="title"
        class="max-w-full max-h-full object-contain"
        loading="lazy"
      >
    </div>

    <!-- Project Content -->
    <div class="p-6">
      <h3 class="text-xl font-semibold text-primary mb-3">{{ title }}</h3>
      <p class="text-gray-600 text-sm leading-relaxed mb-6">{{ description }}</p>
      
      <!-- Action buttons -->
      <div class="flex gap-3">
        <a 
          :href="githubUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="flex-1 bg-primary text-white text-center py-2 px-4 rounded-md hover:bg-primary/90 transition-colors duration-200 text-sm font-medium"
        >
          <i class="fab fa-github mr-2"></i>
          GitHub
        </a>
        <a 
          :href="exploreUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="flex-1 bg-secondary text-white text-center py-2 px-4 rounded-md hover:bg-secondary/90 transition-colors duration-200 text-sm font-medium"
        >
          <i class="fas fa-external-link-alt mr-2"></i>
          Explore
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string
  image: string
  description: string
  githubUrl: string
  exploreUrl: string
}

defineProps<Props>()
</script>