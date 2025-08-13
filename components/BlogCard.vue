<template>
  <article class="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
    <!-- Image -->
    <div class="relative h-48 sm:h-64 overflow-hidden">
      <NuxtLink 
        v-if="post.content"
        :to="`/blog/${post.slug}`"
        class="block h-full cursor-pointer"
      >
        <img
          :src="post.image"
          :alt="post.title"
          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </NuxtLink>
      <img
        v-else
        :src="post.image"
        :alt="post.title"
        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <!-- Category Badge -->
      <div class="absolute top-4 left-4">
        <span class="bg-secondary text-white px-3 py-1 rounded-full text-sm font-medium">
          {{ post.category }}
        </span>
      </div>
    </div>
    
    <!-- Content -->
    <div class="p-6">
      <!-- Date and Read Time -->
      <div class="flex items-center text-sm text-gray-500 mb-3">
        <time :datetime="post.date">
          {{ formatDate(post.date) }}
        </time>
        <span class="mx-2">•</span>
        <span>{{ post.readTime }} min read</span>
      </div>
      
      <!-- Title -->
      <NuxtLink 
        v-if="post.content"
        :to="`/blog/${post.slug}`"
        class="block cursor-pointer"
      >
        <h3 class="text-xl font-bold text-primary mb-3 line-clamp-2 hover:text-secondary transition-colors duration-200">
          {{ post.title }}
        </h3>
      </NuxtLink>
      <h3 
        v-else
        class="text-xl font-bold text-primary mb-3 line-clamp-2"
      >
        {{ post.title }}
      </h3>
      
      <!-- Excerpt -->
      <p class="text-gray-600 mb-4 line-clamp-3">
        {{ post.excerpt }}
      </p>
      
      <!-- Tags -->
      <div class="flex flex-wrap gap-2 mb-4" v-if="post.tags && post.tags.length">
        <span
          v-for="tag in post.tags"
          :key="tag"
          class="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium"
        >
          #{{ tag }}
        </span>
      </div>
      
      <!-- Read More Link -->
      <div class="flex items-center justify-between">
        <NuxtLink 
          v-if="post.content"
          :to="`/blog/${post.slug}`"
          class="inline-flex items-center text-secondary hover:text-primary font-medium transition-colors duration-200"
        >
          Read More
          <svg class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </NuxtLink>
        <div 
          v-else
          class="inline-flex items-center text-secondary hover:text-primary font-medium transition-colors duration-200 cursor-pointer"
        >
          Coming Soon
          <svg class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </div>
        
        <!-- Author (if you want to add later) -->
        <div class="text-sm text-gray-500" v-if="post.author">
          by {{ post.author }}
        </div>
      </div>
    </div>
  </article>
</template>

<script setup>
const props = defineProps({
  post: {
    type: Object,
    required: true
  }
})

// Format date to readable format
const formatDate = (dateString) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>