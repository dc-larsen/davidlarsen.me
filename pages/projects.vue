<template>
  <div class="max-w-6xl mx-auto">
    <div class="text-center mb-12">
      <h1 class="text-4xl font-bold text-primary mb-4">Projects</h1>
      <p class="text-xl text-gray-600">Tooling, systems, and frameworks I've built as a Technical Account Manager. Most started as a fix for my own portfolio or team and became the standard the wider post-sales org runs on.</p>
    </div>

    <!-- AI-Augmented Workflows -->
    <section class="mb-16">
      <div class="mb-6 pb-2 border-b border-gray-200">
        <h2 class="text-2xl font-bold text-primary">AI-Augmented Workflows</h2>
        <p class="text-gray-600 mt-1">AI and automation the team runs on, not just me.</p>
      </div>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProjectCard
          title="Quarterly Health Check Automation"
          image="/images/ai-customer-success.png"
          tag="Team-wide"
          :description="`Rebuilt the TAM team's quarterly health check on live product data and MCP-driven automation. What took a day of manual data pulls now runs from the data itself, and the whole team uses it every quarter.`"
        />

        <ProjectCard
          title="AI Coding Guardrails"
          image="/images/socket.png"
          tag="Reusable pattern"
          :description="`A pre-install hook that intercepts dependency installs from AI agents like Claude Code and blocks risky packages before they reach a developer's machine. A guardrail for teams adopting agent-driven development in supply-chain-sensitive code.`"
          github-url="https://github.com/dc-larsen/socket-claude-code-hook"
        />
      </div>
    </section>

    <!-- CS Systems & Operations -->
    <section class="mb-16">
      <div class="mb-6 pb-2 border-b border-gray-200">
        <h2 class="text-2xl font-bold text-primary">CS Systems &amp; Operations</h2>
        <p class="text-gray-600 mt-1">Company-wide systems and processes I designed and own.</p>
      </div>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProjectCard
          title="CS Platform Implementation"
          image="/images/customer-success.png"
          tag="Company-wide"
          :description="`Evaluated, selected, and implemented Vitally as the company-wide CS platform. Modeled onboarding, renewal-risk, and advocacy workflows, migrated historical CRM data, and brought full company ARR onto one system.`"
        />

        <ProjectCard
          title="Renewal Risk Governance"
          image="/images/leadership-badge-1200x675-letterbox.png"
          tag="Exec visibility"
          :description="`Designed a quarterly renewal-risk process that replaced scattered notes with structured risk fields and written narratives. Leadership can now see which renewals are at risk early enough to act.`"
        />

        <ProjectCard
          title="Onboarding Operating Model"
          image="/images/meeting-prep-example.jpg"
          tag="Rebuilt from zero"
          :description="`Rebuilt enterprise onboarding from scratch with standardized projects and customer-facing artifacts. Gave every new account a consistent path to value and a clear owner at each step.`"
        />
      </div>
    </section>

    <!-- Playbooks -->
    <section class="mb-16">
      <div class="mb-6 pb-2 border-b border-gray-200">
        <h2 class="text-2xl font-bold text-primary">Playbooks</h2>
        <p class="text-gray-600 mt-1">Frameworks others follow.</p>
      </div>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProjectCard
          title="Enterprise Account Playbooks"
          image="/images/image-customer-success-playbooks.png"
          tag="Framework"
          :description="`Frameworks for running enterprise post-sales: technical onboarding, renewal-risk governance, expansion, executive engagement, and churn intervention. Drawn from running seven-figure portfolios at security and developer-platform companies.`"
          github-url="https://github.com/dc-larsen/customer-success-playbooks"
        />

        <ProjectCard
          title="Escalation &amp; Triage Playbooks"
          image="/images/image-customer-support-playbooks.png"
          tag="Framework"
          :description="`Cross-functional triage between Support and Engineering: priority alignment from Zendesk to Jira, severity classification, and structured customer-signal alerting. Shared language for teams that need Support, Success, and Engineering to agree on what's urgent.`"
          github-url="https://github.com/dc-larsen/support-playbooks"
        />
      </div>
    </section>

    <!-- Call to action -->
    <div class="text-center mt-12 p-8 bg-gray-50 rounded-lg">
      <h2 class="text-2xl font-semibold text-primary mb-4">Want to collaborate?</h2>
      <p class="text-gray-700 mb-6">
        Building something in developer security, post-sales systems, or AI-augmented customer success? I'm happy to talk.
      </p>
      <a
        href="https://github.com/dc-larsen"
        target="_blank"
        rel="noopener noreferrer"
        class="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors duration-200 inline-flex items-center"
      >
        <IconsGitHubIcon :size="18" class="mr-2" />
        View all projects on GitHub
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
      content: 'Projects by David Larsen, a senior Technical Account Manager: AI-augmented team tooling, company-wide CS systems, and the playbooks his post-sales org runs on.'
    }
  ]
})
</script>
