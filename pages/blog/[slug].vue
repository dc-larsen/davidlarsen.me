<template>
  <article v-if="post" class="max-w-4xl mx-auto">
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

      <div class="mb-4">
        <span class="bg-secondary text-white px-3 py-1 rounded-full text-sm font-medium">
          {{ post.category }}
        </span>
      </div>

      <h1 class="text-4xl md:text-5xl font-bold text-primary mb-6">
        {{ post.title }}
      </h1>

      <div class="flex flex-wrap items-center text-gray-600 text-sm mb-6">
        <span class="mr-4">by {{ post.author }}</span>
        <span class="mr-4">•</span>
        <time :datetime="post.date" class="mr-4">{{ formatDate(post.date) }}</time>
        <span class="mr-4">•</span>
        <span class="mr-4">{{ post.readTime }} min read</span>
      </div>

      <div v-if="post.tags.length" class="flex flex-wrap gap-2 mb-8">
        <span
          v-for="tag in post.tags"
          :key="tag"
          class="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
        >
          #{{ tag }}
        </span>
      </div>
    </div>

    <div class="mb-8">
      <img
        :src="hero"
        :alt="post.title"
        class="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
      />
    </div>

    <!-- html comes from content/blog/<slug>.md via utils/markdown.js. Global .prose rules in assets/css/main.css style it. Scoped CSS would not reach this HTML. -->
    <div class="prose prose-lg max-w-none mb-12" v-html="post.html" />

    <div class="border-t border-gray-200 pt-8">
      <div class="flex flex-col sm:flex-row justify-between items-center gap-4">
        <NuxtLink
          to="/blog"
          class="text-secondary hover:text-primary font-medium transition-colors duration-200"
        >
          ← Back to All Posts
        </NuxtLink>
        <div class="flex gap-4 text-sm">
          <a
            :href="shareOnX"
            target="_blank"
            rel="noopener noreferrer"
            class="text-secondary hover:text-primary transition-colors duration-200"
          >
            Share on X
          </a>
          <a
            :href="shareOnLinkedIn"
            target="_blank"
            rel="noopener noreferrer"
            class="text-secondary hover:text-primary transition-colors duration-200"
          >
            Share on LinkedIn
          </a>
        </div>
      </div>
    </div>
  </article>
</template>

<script setup>
import { formatDate, getPost } from '~/utils/blog'

const route = useRoute()
const config = useRuntimeConfig()
const post = getPost(route.params.slug)

if (!post) {
  throw createError({ statusCode: 404, statusMessage: 'Post not found' })
}

const hero = post.banner || post.image
const siteUrl = config.public.siteUrl.replace(/\/$/, '')
const canonical = `${siteUrl}/blog/${post.slug}`
const socialImage = absoluteUrl(hero)

useSeoMeta({
  title: post.title,
  description: post.excerpt,
  ogTitle: post.title,
  ogDescription: post.excerpt,
  ogImage: socialImage,
  ogType: 'article',
  ogUrl: canonical,
  twitterCard: 'summary_large_image',
  twitterTitle: post.title,
  twitterDescription: post.excerpt,
  twitterImage: socialImage
})

const shareOnX = `https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(canonical)}`
const shareOnLinkedIn = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(canonical)}`

function absoluteUrl(path) {
  if (!path) return canonical
  if (path.startsWith('http')) return path
  return `${siteUrl}${path}`
}
</script>
