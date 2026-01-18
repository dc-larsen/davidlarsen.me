<template>
  <div class="max-w-3xl mx-auto">
    <div class="text-center mb-12">
      <h1 class="text-4xl font-bold text-primary mb-4">About David</h1>
      <p class="text-xl text-gray-600">Customer Success Leader · Technical CS & Systems Builder</p>
    </div>

    <div class="grid md:grid-cols-2 gap-12 items-start">
      <!-- Left column - Personal info -->
      <div class="space-y-8">
        <div>
          <h2 class="text-2xl font-semibold text-primary mb-4">Background</h2>
          <div class="prose prose-lg text-gray-700">
            <p>
              Customer Success leader with deep technical roots and a track record of building post-sales systems from zero at early-stage SaaS companies.
            </p>
            <br>
            <p>
              I design onboarding, renewal risk, and account operating models; implement CS platforms at scale; and partner with executive leadership to protect and grow revenue. Currently managing a $4.22M ARR enterprise portfolio at Socket while owning CS systems supporting $12M+ ARR.
            </p>
          </div>
        </div>

        <div>
          <h2 class="text-2xl font-semibold text-primary mb-4">When I'm Not Working</h2>
          <ul class="space-y-2 text-gray-700">
            <li class="flex items-center">
              <span class="mr-2">🐶</span>
              Chasing my sheepadoodle Goku around Patterson Park
            </li>
            <li class="flex items-center">
              <span class="mr-2">☕</span>
              Exploring Baltimore's coffee scene
            </li>
            <li class="flex items-center">
              <span class="mr-2">📚</span>
              Reading about systems design and operations
            </li>
            <li class="flex items-center">
              <span class="mr-2">🥪</span>
              Hunting for Baltimore's best breakfast sandwich
            </li>
            <li class="flex items-center">
              <span class="mr-2">🐉</span>
              Slaying dragons in World of Warcraft
            </li>
          </ul>
        </div>
      </div>

      <!-- Right column - Skills and expertise -->
      <div class="space-y-8">
        <div>
          <h2 class="text-2xl font-semibold text-primary mb-4">Core Expertise</h2>
          <ul class="space-y-2 text-gray-700">
            <li>• CS operating models & onboarding design</li>
            <li>• Renewal risk governance & account strategy</li>
            <li>• Post-sales org design & executive alignment</li>
            <li>• Technical execution (APIs, security tooling, production code)</li>
          </ul>
        </div>

        <div>
          <h2 class="text-2xl font-semibold text-primary mb-4">Tools & Platforms</h2>
          <div class="flex flex-wrap gap-2">
            <span class="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Vitally</span>
            <span class="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Salesforce</span>
            <span class="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">HubSpot</span>
            <span class="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Gong</span>
            <span class="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Zendesk</span>
            <span class="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Slack</span>
            <span class="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Jira</span>
            <span class="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Linear</span>
            <span class="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Docker</span>
            <span class="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">GitHub</span>
            <span class="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">SQL</span>
          </div>
        </div>

        <div>
          <h2 class="text-2xl font-semibold text-primary mb-4">Specializations</h2>
          <ul class="space-y-2 text-gray-700">
            <li class="flex items-center">
              <span class="mr-2">💼</span>
              CS platform implementation & data migration
            </li>
            <li class="flex items-center">
              <span class="mr-2">🔐</span>
              Renewal risk governance & executive visibility
            </li>
            <li class="flex items-center">
              <span class="mr-2">🛠️</span>
              Internal tooling & workflow automation
            </li>
            <li class="flex items-center">
              <span class="mr-2">📊</span>
              Enterprise portfolio management ($4M+ ARR)
            </li>
            <li class="flex items-center">
              <span class="mr-2">🤝</span>
              Post-sales org design & change management
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Call to action -->
    <div class="text-center mt-12 p-8 bg-gray-50 rounded-lg">
      <h2 class="text-2xl font-semibold text-primary mb-4">Let's Connect</h2>
      <p class="text-gray-700 mb-6">
        Interested in discussing support operations, team leadership, or technical troubleshooting?
      </p>
      <div class="flex justify-center space-x-4">
        <a
          href="https://www.linkedin.com/in/david-larsen-404622143/"
          target="_blank"
          rel="noopener noreferrer"
          class="bg-secondary text-white px-6 py-3 rounded-lg hover:bg-secondary/90 transition-colors duration-200 flex items-center"
        >
          <IconsLinkedInIcon :size="18" class="mr-2" />
          Connect on LinkedIn
        </a>
        <NuxtLink
          to="/resume"
          class="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors duration-200 flex items-center"
        >
          <IconsDocumentIcon :size="18" class="mr-2" />
          View Resume
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'About',
  meta: [
    {
      name: 'description',
      content: 'Learn more about David Larsen, a Customer Success leader in Baltimore specializing in CS operating models, renewal risk governance, and technical systems building.'
    }
  ]
})
</script>