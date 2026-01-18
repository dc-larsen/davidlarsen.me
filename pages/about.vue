<template>
  <div class="max-w-3xl mx-auto">
    <div class="text-center mb-12">
      <h1 class="text-4xl font-bold text-primary mb-4">About Me</h1>
      <p class="text-xl text-gray-600">Customer Success Leader · Systems Builder</p>
    </div>

    <!-- Main narrative content -->
    <div class="space-y-10">
      <!-- Who I am -->
      <div class="prose prose-lg text-gray-700 max-w-none space-y-6">
        <p>
          I build Customer Success infrastructure at technical startups. That means designing the systems, processes, and operating models that help post-sales teams protect revenue and drive customer outcomes at scale.
        </p>
        <p>
          Most of my career has been spent at early-stage and growth-stage B2B SaaS companies, where I've built CS functions from the ground up: selecting and implementing platforms, designing onboarding and renewal workflows, standing up risk governance processes, and partnering with leadership to shape how the company operates after the deal closes.
        </p>
        <p>
          I'm technical enough to write production code, build internal tools, and debug APIs, but my real focus is on the systems layer: how information flows, how teams coordinate, and how processes scale without breaking.
        </p>
      </div>

      <!-- What I'm known for -->
      <div>
        <h2 class="text-2xl font-semibold text-primary mb-4">What I Build</h2>
        <div class="grid md:grid-cols-2 gap-6 text-gray-700">
          <div>
            <h3 class="font-semibold text-gray-900 mb-2">CS Operating Systems</h3>
            <p class="text-sm">Onboarding models, renewal risk frameworks, health scoring, account segmentation, executive QBR processes</p>
          </div>
          <div>
            <h3 class="font-semibold text-gray-900 mb-2">Platform Infrastructure</h3>
            <p class="text-sm">CS platform implementation (Gainsight, Vitally), CRM administration (Salesforce, HubSpot), workflow automation, data migrations</p>
          </div>
          <div>
            <h3 class="font-semibold text-gray-900 mb-2">Internal Tooling</h3>
            <p class="text-sm">Productivity tools, integrations across CS/CRM/ticketing stacks, reporting pipelines, leadership dashboards</p>
          </div>
          <div>
            <h3 class="font-semibold text-gray-900 mb-2">Org Design & Change</h3>
            <p class="text-sm">Post-sales team structures, account assignment models, cross-functional handoffs, process rollouts</p>
          </div>
        </div>
      </div>

      <!-- How I think -->
      <div class="prose prose-lg text-gray-700 max-w-none space-y-6">
        <h2 class="text-2xl font-semibold text-primary mb-4">How I Think</h2>
        <p>
          I gravitate toward ambiguity. The projects I find most interesting are the ones where the problem is clear but the path isn't: standing up a new function, designing a process that doesn't exist yet, or making a decision with incomplete information.
        </p>
        <p>
          I prefer building systems that are simple, legible, and maintainable over clever solutions that only I understand. If I can't explain how something works in a few sentences, it probably needs to be redesigned.
        </p>
      </div>

      <!-- Outside of work -->
      <div>
        <h2 class="text-2xl font-semibold text-primary mb-4">Outside of Work</h2>
        <div class="space-y-4 text-gray-700">
          <p class="flex">
            <span class="mr-3 flex-shrink-0">🧠</span>
            <span><strong>Thinking about systems,</strong> not just at work, but everywhere. I enjoy breaking down why things work (or don't), whether that's a team process, a product experience, or something entirely unrelated.</span>
          </p>
          <p class="flex">
            <span class="mr-3 flex-shrink-0">🍳</span>
            <span><strong>Cooking and experimenting in the kitchen.</strong> I like precision when it matters and creativity when it doesn't, which probably explains how I approach work, too.</span>
          </p>
          <p class="flex">
            <span class="mr-3 flex-shrink-0">🐶</span>
            <span><strong>Spending time with my dogs and staying active.</strong> Clear thinking comes easier when life isn't all screen time.</span>
          </p>
          <p class="flex">
            <span class="mr-3 flex-shrink-0">✈️</span>
            <span><strong>Traveling and exploring new places.</strong> I'm drawn to new environments and perspectives, and I tend to bring that curiosity back into how I build and improve systems.</span>
          </p>
          <p class="text-gray-600 mt-6 pt-4 border-t border-gray-200">
            At the core, I enjoy building things that are clear, durable, and actually useful: for teams, customers, and the people around them.
          </p>
        </div>
      </div>
    </div>

    <!-- Call to action -->
    <div class="text-center mt-12 p-8 bg-gray-50 rounded-lg">
      <p class="text-gray-700 mb-6">
        If you're building something interesting or want to talk about CS systems, I'd be happy to connect.
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
      content: 'David Larsen is a Customer Success leader and systems builder at technical startups, specializing in CS infrastructure, operating models, and platform implementation.'
    }
  ]
})
</script>