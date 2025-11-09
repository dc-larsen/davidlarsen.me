<template>
  <div class="max-w-6xl mx-auto">
    <div class="text-center mb-12">
      <h1 class="text-4xl font-bold text-primary mb-4">Projects</h1>
      <p class="text-xl text-gray-600">Stuff I make: small tools that help people + random side quests I built because they were fun.</p>
    </div>

    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      <!-- Support Playbooks -->
      <ProjectCard
        title="Support Playbooks"
        image="/images/support-playbooks.png"
        :description="`Comprehensive collection of customer support playbooks covering escalation procedures, troubleshooting workflows, and team management strategies. Designed to help support teams provide consistent, high-quality customer experiences while scaling efficiently.`"
        github-url="https://github.com/dc-larsen/support-playbooks"
        explore-url="https://github.com/dc-larsen/support-playbooks"
      />

      <!-- Customer Success Playbooks -->
      <ProjectCard
        title="Customer Success Playbooks"
        image="/images/customer-success.png"
        :description="`Curated playbooks for customer success teams focused on onboarding, retention, expansion, and churn prevention strategies. Includes templates for customer health scoring, success metrics tracking, and proactive outreach workflows. Built from experience scaling customer success operations at high-growth startups.`"
        github-url="https://github.com/dc-larsen/customer-success-playbooks"
        explore-url="https://github.com/dc-larsen/customer-success-playbooks"
      />

      <!-- Zendesk Slackbot -->
      <ProjectCard
        title="Zendesk Slackbot"
        image="/images/zendesk-slackbot.png"
        :description="`Slack bot integration for managers to streamline 1-on-1 preparation with their team members. Pulls Zendesk ticket data, performance metrics, and team insights to help managers have more effective, data-driven conversations with their reports.`"
        github-url="https://github.com/dc-larsen/zendesk-slackbot"
        explore-url="https://github.com/dc-larsen/zendesk-slackbot"
      />


      <!-- k8s Support Lab -->
      <ProjectCard
        title="k8s support lab"
        image="/images/kb8-support-lab.png"
        :description="`Hands-on Kubernetes troubleshooting labs for technical support engineers. Learn debugging skills through realistic scenarios: CrashLoopBackOff, DNS issues, and service connectivity.`"
        github-url="https://github.com/dc-larsen/k8s-support-lab"
        explore-url="https://github.com/dc-larsen/k8s-support-lab"
      />

      <!-- GitHub Portfolio -->
      <ProjectCard
        title="GitHub Portfolio"
        image="/images/github.png"
        :description="`View my complete GitHub portfolio for more projects related to customer support operations, team management tools, and technical troubleshooting solutions built throughout my career in support leadership.`"
        github-url="https://github.com/dc-larsen"
        explore-url="https://github.com/dc-larsen"
      />
    </div>

    <!-- Call to action -->
    <div class="text-center mt-16 p-8 bg-gray-50 rounded-lg">
      <h2 class="text-2xl font-semibold text-primary mb-4">Interested in Collaboration?</h2>
      <p class="text-gray-700 mb-6">
        I'm always interested in discussing support operations, automation tools, and team efficiency projects.
      </p>
      <a 
        href="https://github.com/dc-larsen" 
        target="_blank" 
        rel="noopener noreferrer" 
        class="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors duration-200 inline-flex items-center"
      >
        <i class="fab fa-github mr-2"></i>
        View All Projects on GitHub
      </a>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'Projects',
  meta: [
    {
      name: 'description',
      content: 'Customer support and success tools built by David Larsen, including playbooks, automation tools, and team management solutions.'
    }
  ]
})
</script>