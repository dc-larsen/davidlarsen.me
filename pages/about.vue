<template>
  <div class="max-w-3xl mx-auto">
    <div class="text-center mb-12">
      <h1 class="text-4xl font-bold text-primary mb-4">About David</h1>
      <p class="text-xl text-gray-600">Customer Support & Success Leader in Baltimore</p>
    </div>

    <div class="grid md:grid-cols-2 gap-12 items-start">
      <!-- Left column - Personal info -->
      <div class="space-y-8">
        <div>
          <h2 class="text-2xl font-semibold text-primary mb-4">Background</h2>
          <div class="prose prose-lg text-gray-700">
            <p>
              I'm a customer support and success leader based in Baltimore, MD. I specialize in building stronger teams, 
              solving complex technical problems, and scaling global support organizations at high-growth startups.
            </p>
            <br>
            <p>
              My experience spans technical troubleshooting (APIs, logs, infrastructure), scalable operations system design, 
              team mentoring & leadership, and high-stakes technical issue resolution.
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
          </ul>
        </div>
      </div>

      <!-- Right column - Skills and expertise -->
      <div class="space-y-8">
        <div>
          <h2 class="text-2xl font-semibold text-primary mb-4">Core Expertise</h2>
          <ul class="space-y-2 text-gray-700">
            <li>• Customer Support & Success Leadership</li>
            <li>• Technical Troubleshooting</li>
            <li>• Team Building & Mentoring</li>
            <li>• Operations Systems Design</li>
          </ul>
        </div>

        <div>
          <h2 class="text-2xl font-semibold text-primary mb-4">Tools & Platforms</h2>
          <div class="flex flex-wrap gap-2">
            <span class="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Salesforce</span>
            <span class="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Zendesk</span>
            <span class="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Splunk</span>
            <span class="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Postman</span>
            <span class="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">SQL</span>
            <span class="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Kubernetes</span>
            <span class="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Zapier</span>
            <span class="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Jira</span>
          </div>
        </div>

        <div>
          <h2 class="text-2xl font-semibold text-primary mb-4">Specializations</h2>
          <ul class="space-y-2 text-gray-700">
            <li class="flex items-center">
              <span class="mr-2">⚙️</span>
              Support org scaling & efficiency
            </li>
            <li class="flex items-center">
              <span class="mr-2">🚨</span>
              High-stakes technical issue resolution
            </li>
            <li class="flex items-center">
              <span class="mr-2">✍️</span>
              Workflow automation & tooling
            </li>
            <li class="flex items-center">
              <span class="mr-2">🔧</span>
              APIs, logs & infrastructure troubleshooting
            </li>
            <li class="flex items-center">
              <span class="mr-2">👥</span>
              Cross-functional team leadership
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
          <i class="fab fa-linkedin mr-2"></i>
          Connect on LinkedIn
        </a>
        <a 
          href="/David_Larsen_Unified_Resume.pdf" 
          target="_blank" 
          class="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors duration-200 flex items-center"
        >
          <i class="far fa-file-pdf mr-2"></i>
          View Resume
        </a>
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
      content: 'Learn more about David Larsen, a customer support and success leader in Baltimore specializing in team building, technical troubleshooting, and operations systems design.'
    }
  ]
})
</script>