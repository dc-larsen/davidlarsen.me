<template>
  <article class="max-w-4xl mx-auto">
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
          Technical
        </span>
      </div>

      <!-- Title -->
      <h1 class="text-4xl md:text-5xl font-bold text-primary mb-6">
        One-on-one autopilot: the Zendesk → Slack cheat sheet
      </h1>

      <!-- Meta Info -->
      <div class="flex flex-wrap items-center text-gray-600 text-sm mb-6">
        <span class="mr-4">by David Larsen</span>
        <span class="mr-4">•</span>
        <time datetime="2025-08-13" class="mr-4">
          August 13, 2025
        </time>
        <span class="mr-4">•</span>
        <span class="mr-4">7 min read</span>
      </div>

      <!-- Tags -->
      <div class="flex flex-wrap gap-2 mb-8">
        <span
          v-for="tag in ['zendesk', 'slack', 'github-actions', 'google-calendar', 'service-accounts', '1:1s', 'cs-ops', 'automation', 'manager-tooling']"
          :key="tag"
          class="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
        >
          #{{ tag }}
        </span>
      </div>
    </div>

    <!-- Featured Image -->
    <div class="mb-8">
      <img
        src="/slackbot.png"
        alt="One-on-one autopilot: the Zendesk → Slack cheat sheet"
        class="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
      />
    </div>

    <!-- Content -->
    <div class="prose prose-lg max-w-none mb-12">
      <p>I wanted a manager to be able to show up to every 1:1 with a clean cheat sheet and zero prep. The idea first hit when my manager was juggling about 15 direct reports and weekly 1:1s. I did not build the tool at that company and they never used it, but the pain point stuck with me. Later I coded a small bot to make the prep disappear: show up with a shared summary of recent work and a few discussion flags. No homework. Just signal.</p>
      
      <h2>What it does (by system)</h2>
      
      <h3>What happens in Google Calendar</h3>
      <ul>
        <li>GitHub Actions checks Google Calendar every 5 minutes for upcoming meetings with "1on1" in the title.</li>
        <li>When it finds one starting soon, it grabs the attendee email that is not the organizer (the direct report) and the start time.</li>
        <li>If the meeting is within the lead window (about 30 minutes), it triggers the next step.</li>
      </ul>
      
      <h3>What happens in Zendesk</h3>
      <ul>
        <li>Using that attendee email, the bot looks up the matching Zendesk user.</li>
        <li>It pulls a focused snapshot for the last 7 days (configurable): tickets handled and solved, positive CSAT count and ratio, reopens, SLA breaches, urgent or open items, on-hold items older than N days, and tickets older than N days.</li>
        <li>It collects links for anything that needs attention so you can jump straight in.</li>
      </ul>
      
      <h3>What happens in Slack</h3>
      <ul>
        <li>The bot formats the Zendesk snapshot into a compact, readable post: headline stats first, flags with links next, and a short "prompts for the 1:1" block.</li>
        <li>It posts the summary to the designated Slack channel about 30 minutes before the meeting so both manager and rep see the same truth.</li>
      </ul>
      
      <h2>Using it in your 1:1</h2>
      <ol>
        <li>Put "1on1" in your recurring meeting title and invite the rep's email that matches their Zendesk user.</li>
        <li>About 30 minutes before the meeting, a summary lands in Slack with links and a few prompts.</li>
        <li>Use the time for patterns, coaching, and decisions instead of screensharing dashboards.</li>
      </ol>
      
      <h2>Sample Slack post</h2>
      <p><img src="/sample-slack-post.png" alt="Sample Slack post" /></p>
      
      <h2>Setup and docs</h2>
      <p>For installation, configuration, and environment variables, see the README:<br>
      <a href="https://github.com/dc-larsen/zendesk-slackbot#readme" target="_blank" rel="noopener noreferrer">https://github.com/dc-larsen/zendesk-slackbot#readme</a></p>
    </div>

    <!-- Footer Navigation -->
    <div class="border-t border-gray-200 pt-8">
      <div class="flex flex-col sm:flex-row justify-between items-center">
        <NuxtLink 
          to="/blog" 
          class="text-secondary hover:text-primary font-medium mb-4 sm:mb-0 transition-colors duration-200"
        >
          ← Back to All Posts
        </NuxtLink>
      </div>
    </div>
  </article>
</template>

<script setup>
useHead({
  title: 'One-on-one autopilot: the Zendesk → Slack cheat sheet',
  meta: [
    { name: 'description', content: 'A lightweight bot that checks Google Calendar for upcoming 1:1s, pulls a focused Zendesk snapshot for the attendee, and posts a compact summary to Slack so managers arrive prepped without extra work.' },
    { property: 'og:title', content: 'One-on-one autopilot: the Zendesk → Slack cheat sheet' },
    { property: 'og:description', content: 'A lightweight bot that checks Google Calendar for upcoming 1:1s, pulls a focused Zendesk snapshot for the attendee, and posts a compact summary to Slack so managers arrive prepped without extra work.' },
    { property: 'og:image', content: '/slackbot.png' },
    { property: 'og:type', content: 'article' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'One-on-one autopilot: the Zendesk → Slack cheat sheet' },
    { name: 'twitter:description', content: 'A lightweight bot that checks Google Calendar for upcoming 1:1s, pulls a focused Zendesk snapshot for the attendee, and posts a compact summary to Slack so managers arrive prepped without extra work.' }
  ]
})
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