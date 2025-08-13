<template>
  <div class="max-w-6xl mx-auto">
    <!-- Header -->
    <div class="text-center mb-12">
      <h1 class="text-4xl font-bold text-primary mb-4">Blog</h1>
      <p class="text-xl text-gray-600 max-w-2xl mx-auto">
        Thoughts on work and whatever I find interesting.
      </p>
    </div>

    <!-- Featured Post (Most Recent) -->
    <div v-if="featuredPost" class="mb-16">
      <h2 class="text-2xl font-semibold text-primary mb-6">Featured Post</h2>
      <div class="bg-white rounded-lg shadow-xl overflow-hidden">
        <div class="md:flex">
          <div class="md:w-1/2">
            <NuxtLink 
              v-if="featuredPost.content"
              :to="`/${featuredPost.slug}`"
              class="block cursor-pointer"
            >
              <img
                :src="featuredPost.image"
                :alt="featuredPost.title"
                class="w-full h-64 md:h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </NuxtLink>
            <img
              v-else
              :src="featuredPost.image"
              :alt="featuredPost.title"
              class="w-full h-64 md:h-full object-cover"
            />
          </div>
          <div class="md:w-1/2 p-8">
            <div class="flex items-center text-sm text-gray-500 mb-4">
              <span class="bg-secondary text-white px-3 py-1 rounded-full text-xs font-medium mr-4">
                {{ featuredPost.category }}
              </span>
              <time :datetime="featuredPost.date">
                {{ formatDate(featuredPost.date) }}
              </time>
              <span class="mx-2">•</span>
              <span>{{ featuredPost.readTime }} min read</span>
            </div>
            
            <NuxtLink 
              v-if="featuredPost.content"
              :to="`/${featuredPost.slug}`"
              class="block cursor-pointer"
            >
              <h3 class="text-2xl font-bold text-primary mb-4 hover:text-secondary transition-colors duration-200">
                {{ featuredPost.title }}
              </h3>
            </NuxtLink>
            <h3 
              v-else
              class="text-2xl font-bold text-primary mb-4"
            >
              {{ featuredPost.title }}
            </h3>
            
            <p class="text-gray-600 mb-6">
              {{ featuredPost.excerpt }}
            </p>
            
            <div class="flex flex-wrap gap-2 mb-6" v-if="featuredPost.tags">
              <span
                v-for="tag in featuredPost.tags"
                :key="tag"
                class="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
              >
                #{{ tag }}
              </span>
            </div>
            
            <NuxtLink 
              v-if="featuredPost.content"
              :to="`/${featuredPost.slug}`"
              class="bg-secondary text-white px-6 py-3 rounded-lg hover:bg-secondary/90 transition-colors duration-200 inline-flex items-center font-medium"
            >
              Read Full Article
              <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </NuxtLink>
            <div 
              v-else
              class="bg-secondary text-white px-6 py-3 rounded-lg hover:bg-secondary/90 transition-colors duration-200 inline-flex items-center font-medium cursor-pointer"
            >
              Coming Soon
              <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Filter/Search Bar -->
    <div class="mb-8">
      <div class="flex flex-col sm:flex-row gap-4 items-center justify-between">
        <div class="flex flex-wrap gap-2">
          <button
            v-for="category in categories"
            :key="category"
            @click="selectedCategory = selectedCategory === category ? 'All' : category"
            :class="[
              'px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200',
              selectedCategory === category
                ? 'bg-secondary text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            ]"
          >
            {{ category }}
          </button>
        </div>
        
        <div class="relative">
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Search posts..."
            class="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
          />
          <svg class="absolute left-3 top-2.5 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
        </div>
      </div>
    </div>

    <!-- Blog Posts Grid -->
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
      <BlogCard
        v-for="post in filteredPosts"
        :key="post.id"
        :post="post"
      />
    </div>

    <!-- Empty State -->
    <div v-if="filteredPosts.length === 0" class="text-center py-12">
      <div class="text-gray-400 mb-4">
        <svg class="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
        </svg>
      </div>
      <h3 class="text-xl font-medium text-gray-600 mb-2">No posts found</h3>
      <p class="text-gray-500">Try adjusting your search or filter criteria.</p>
    </div>

    <!-- Load More (Placeholder for future pagination) -->
    <div v-if="filteredPosts.length > 0" class="text-center">
      <button class="bg-gray-100 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors duration-200 font-medium">
        Load More Posts
      </button>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'Blog',
  meta: [
    {
      name: 'description',
      content: 'David Larsen\'s blog on customer support, team leadership, technology, and professional insights from Baltimore.'
    }
  ]
})

import { blogPosts as allBlogPosts } from '~/data/blogPosts'

// Blog posts data - imported from data file
const blogPosts = ref(allBlogPosts)

// Reactive data
const selectedCategory = ref('All')
const searchQuery = ref('')

// Computed properties
const sortedPosts = computed(() => {
  return [...blogPosts.value].sort((a, b) => new Date(b.date) - new Date(a.date))
})

const featuredPost = computed(() => {
  return sortedPosts.value[0] || null
})

const categories = computed(() => {
  const cats = ['All', ...new Set(blogPosts.value.map(post => post.category))]
  return cats
})

const filteredPosts = computed(() => {
  let posts = sortedPosts.value.slice(1) // Exclude featured post
  
  // Filter by category
  if (selectedCategory.value !== 'All') {
    posts = posts.filter(post => post.category === selectedCategory.value)
  }
  
  // Filter by search query
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    posts = posts.filter(post =>
      post.title.toLowerCase().includes(query) ||
      post.excerpt.toLowerCase().includes(query) ||
      post.tags.some(tag => tag.toLowerCase().includes(query))
    )
  }
  
  return posts
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