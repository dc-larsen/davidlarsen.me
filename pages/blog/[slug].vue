<template>
  <article class="max-w-4xl mx-auto">
    <div v-if="!post" class="text-center py-12">
      <h1 class="text-2xl font-semibold text-gray-600 mb-4">Post Not Found</h1>
      <NuxtLink to="/blog" class="text-secondary hover:text-primary font-medium">
        ← Back to Blog
      </NuxtLink>
    </div>

    <div v-else>
      <!-- Header -->
      <div class="mb-8">
        <NuxtLink 
          to="/blog" 
          class="inline-flex items-center text-secondary hover:text-primary font-medium mb-6 transition-colors duration-200"
        >
          <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
          </svg>
          Back to Blog
        </NuxtLink>

        <!-- Category Badge -->
        <div class="mb-4">
          <span class="bg-secondary text-white px-3 py-1 rounded-full text-sm font-medium">
            {{ post.category }}
          </span>
        </div>

        <!-- Title -->
        <h1 class="text-4xl md:text-5xl font-bold text-primary mb-6">
          {{ post.title }}
        </h1>

        <!-- Meta Info -->
        <div class="flex flex-wrap items-center text-gray-600 text-sm mb-6">
          <span class="mr-4">by {{ post.author }}</span>
          <span class="mr-4">•</span>
          <time :datetime="post.date" class="mr-4">
            {{ formatDate(post.date) }}
          </time>
          <span class="mr-4">•</span>
          <span class="mr-4">{{ post.readTime }} min read</span>
          <span v-if="post.lastUpdated" class="mr-4">•</span>
          <span v-if="post.lastUpdated" class="text-xs text-gray-500">
            Updated {{ formatDate(post.lastUpdated) }}
          </span>
        </div>

        <!-- Tags -->
        <div class="flex flex-wrap gap-2 mb-8" v-if="post.tags && post.tags.length">
          <span
            v-for="tag in post.tags"
            :key="tag"
            class="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
          >
            #{{ tag }}
          </span>
        </div>
      </div>

      <!-- Featured Image -->
      <div v-if="post.image" class="mb-8">
        <img
          :src="post.image"
          :alt="post.title"
          class="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
        />
      </div>

      <!-- Content -->
      <div class="prose prose-lg max-w-none mb-12" v-html="post.content"></div>

      <!-- Footer Navigation -->
      <div class="border-t border-gray-200 pt-8">
        <div class="flex flex-col sm:flex-row justify-between items-center">
          <NuxtLink 
            to="/blog" 
            class="text-secondary hover:text-primary font-medium mb-4 sm:mb-0 transition-colors duration-200"
          >
            ← Back to All Posts
          </NuxtLink>
          
          <div class="text-sm text-gray-500">
            Share this post with your team
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<script setup>
import { blogPosts as allBlogPosts } from '~/data/blogPosts'

// Use the same blog posts data as the main blog page
const blogPosts = allBlogPosts

const route = useRoute()
const slug = route.params.slug

// Find the post by slug
const post = computed(() => {
  return blogPosts.find(p => p.slug === slug) || null
})

// Set up head management
useHead(() => {
  if (!post.value) {
    return {
      title: 'Post Not Found',
      meta: [
        { name: 'description', content: 'Blog post not found.' }
      ]
    }
  }

  return {
    title: post.value.title,
    meta: [
      { name: 'description', content: post.value.excerpt },
      { property: 'og:title', content: post.value.title },
      { property: 'og:description', content: post.value.excerpt },
      { property: 'og:image', content: post.value.image },
      { property: 'og:type', content: 'article' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: post.value.title },
      { name: 'twitter:description', content: post.value.excerpt }
    ]
  }
})

// Format date function
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
.prose {
  @apply text-gray-700 leading-relaxed;
}

.prose h1 {
  @apply text-3xl font-bold text-primary mt-8 mb-4;
}

.prose h2 {
  @apply text-2xl font-semibold text-primary mt-8 mb-4;
}

.prose h3 {
  @apply text-xl font-medium text-primary mt-6 mb-3;
}

.prose h4 {
  @apply text-lg font-medium text-primary mt-4 mb-2;
}

.prose p {
  @apply mb-6;
}

.prose blockquote {
  @apply border-l-4 border-secondary pl-6 my-6 italic text-gray-600;
}

.prose ul, .prose ol {
  @apply mb-6;
}

.prose li {
  @apply mb-2;
}

.prose a {
  @apply text-secondary hover:text-primary underline transition-colors duration-200;
}

.prose table {
  @apply w-full border-collapse border border-gray-300 my-6;
}

.prose th, .prose td {
  @apply border border-gray-300 px-4 py-2 text-left;
}

.prose th {
  @apply bg-gray-100 font-medium;
}

.prose code {
  @apply bg-gray-100 px-2 py-1 rounded text-sm;
}

.prose pre {
  @apply bg-gray-900 text-white p-4 rounded-lg overflow-x-auto my-6;
}
</style>