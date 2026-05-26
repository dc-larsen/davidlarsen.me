<template>
  <div class="max-w-3xl mx-auto">
    <div class="text-center mb-12">
      <h1 class="text-4xl font-bold text-primary mb-4">About Me</h1>
      <p class="text-xl text-gray-600">Technical Account Manager · Systems Builder</p>
    </div>

    <!-- Main narrative content -->
    <div class="space-y-10">
      <!-- Who I am -->
      <div class="prose prose-lg text-gray-700 max-w-none space-y-6">
        <p>
          I'm a Technical Account Manager at Socket. I own a seven-figure enterprise portfolio, contributed to over $3M in expansion since joining, and delivered 150% NRR in Q4 and 200% in Q1. My team voted me Team Player of the Quarter and Post-Sales Person of the Quarter in back-to-back quarters.
        </p>
        <p>
          On any given day the work might be debugging a webhook for a security team, walking a CFO through renewal positioning, or shipping a feature into the product when a customer is blocked on a gap.
        </p>
        <p>
          I work to lift the whole team. I rebuilt our quarterly health check process around AI automation and live product data, which the TAM team uses every quarter. I integrated Linear with HubSpot and Slack so customer asks and bugs stop getting lost. I built a feedback loop on top of Granola transcripts that grades my own customer calls each week. I built the 1:1 prep tool the Head of CS uses with his reports. And I authored the proposal that reorganized our customer book into a pod model, approved by the Head of CS and Head of Customer Engineering.
        </p>
        <p>
          When teammates are stuck on a thorny technical issue, I'm usually the second pair of eyes. I mentor across the company in sales engineering, sales, technical support, and account management through 1:1s, knowledge sharing sessions, and talks. And I've sat in 12+ hiring loops for TAMs and a Support Manager role.
        </p>
        <p>
          Before Socket I ran post-sales operations at Sentry and led the support function at Synapse. I scaled teams, built KPI and SLA frameworks, stood up 24/7 enterprise on-call, and partnered with CS leadership on renewal health and escalation strategy. I've sat on both sides of the IC and manager line and know what the work looks like in each seat.
        </p>
      </div>

      <!-- What I'm known for -->
      <div>
        <h2 class="text-2xl font-semibold text-primary mb-4">What I Build</h2>
        <div class="grid md:grid-cols-2 gap-6 text-gray-700">
          <div>
            <h3 class="font-semibold text-gray-900 mb-2">Customer Outcomes</h3>
            <p class="text-sm">$3M+ in expansion. 200% NRR. Renewal saves, executive QBRs, technical onboarding, and expansion strategy across a seven-figure enterprise portfolio.</p>
          </div>
          <div>
            <h3 class="font-semibold text-gray-900 mb-2">Technical Depth</h3>
            <p class="text-sm">Production code contributions to the product. REST APIs, webhooks, OAuth, SQL, Docker, CI/CD.</p>
          </div>
          <div>
            <h3 class="font-semibold text-gray-900 mb-2">Force Multiplier</h3>
            <p class="text-sm">AI-powered quarterly health checks used by the TAM team. Linear integrated with HubSpot and Slack. Internal tools built for CS leadership. Mentorship across sales engineering, sales, support, and account management.</p>
          </div>
          <div>
            <h3 class="font-semibold text-gray-900 mb-2">Systems Leadership</h3>
            <p class="text-sm">CS platform implementation (Vitally). Renewal risk governance. 12+ hiring loops.</p>
          </div>
        </div>
      </div>

      <!-- How I think -->
      <div class="prose prose-lg text-gray-700 max-w-none space-y-6">
        <h2 class="text-2xl font-semibold text-primary mb-4">How I Think</h2>
        <p>
          I gravitate toward ambiguity. The projects I find most interesting are the ones where the problem is clear but the path isn't: standing up a new function, designing a process that doesn't exist yet, or making a call with incomplete information.
        </p>
        <p>
          I prefer simple over clever. If I can't explain how a system works in a few sentences, it probably needs to be redesigned.
        </p>
        <p>
          I build by default. If a process on my team is broken, I'll usually have a v1 by the end of the week.
        </p>
      </div>

      <!-- Outside of work -->
      <div>
        <h2 class="text-2xl font-semibold text-primary mb-4">Outside of Work</h2>
        <p class="text-gray-700 mb-4">When I'm not working, I'm usually:</p>
        <div class="space-y-3 text-gray-700">
          <p class="flex">
            <span class="mr-3 flex-shrink-0">🐶</span>
            <span>Out with my dog Goku, exploring Baltimore and getting outside whenever I can.</span>
          </p>
          <p class="flex">
            <span class="mr-3 flex-shrink-0">☕</span>
            <span>Hunting for great coffee spots and the best breakfast sandwich in the city.</span>
          </p>
          <p class="flex">
            <span class="mr-3 flex-shrink-0">🍳</span>
            <span>Cooking at home and experimenting in the kitchen.</span>
          </p>
          <p class="flex">
            <span class="mr-3 flex-shrink-0">✈️</span>
            <span>Traveling and exploring new places, especially cities with good food and walkability.</span>
          </p>
          <p class="flex">
            <span class="mr-3 flex-shrink-0">🎮</span>
            <span>Playing World of Warcraft and other games that let me unplug and relax.</span>
          </p>
        </div>
        <p class="text-gray-600 mt-6 pt-4 border-t border-gray-200">
          I value time away from screens, good conversations, and building a life that isn't defined entirely by work.
        </p>
      </div>
    </div>

    <!-- Call to action -->
    <div class="text-center mt-12 p-8 bg-gray-50 rounded-lg">
      <p class="text-gray-700 mb-6">
        If you're building something interesting, hiring for a senior TAM or post-sales leadership role, or want to talk about CS systems, I'd be happy to connect.
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
      content: 'David Larsen is a Technical Account Manager at Socket with a seven-figure enterprise portfolio. Contributed to $3M+ in expansion, delivered 200% NRR, and builds the tooling and systems his post-sales team runs on.'
    }
  ]
})
</script>