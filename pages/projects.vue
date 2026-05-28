<template>
  <div class="max-w-6xl mx-auto">
    <div class="text-center mb-12">
      <h1 class="text-4xl font-bold text-primary mb-4">Projects</h1>
      <p class="text-xl text-gray-600">Operational playbooks, internal tooling, customer enablement, and engineering contributions from my work as a Technical Account Manager. Most started as patterns I built for customers or for my own team; they're here so other engineering and post-sales teams can adapt them.</p>
    </div>

    <!-- TAM Playbooks -->
    <section class="mb-16">
      <div class="mb-6 pb-2 border-b border-gray-200">
        <h2 class="text-2xl font-bold text-primary">TAM Playbooks</h2>
        <p class="text-gray-600 mt-1">Operational frameworks for running enterprise post-sales motions at scale.</p>
      </div>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProjectCard
          title="Enterprise Account Playbooks"
          image="/images/customer-success.png"
          :description="`Frameworks for running enterprise post-sales motions: technical onboarding, renewal risk governance, expansion strategy, executive engagement, and churn intervention. Built from running enterprise portfolios at security and developer-platform SaaS companies.`"
          github-url="https://github.com/dc-larsen/customer-success-playbooks"
          explore-url="https://github.com/dc-larsen/customer-success-playbooks"
        />

        <ProjectCard
          title="Technical Escalation &amp; Triage Playbooks"
          image="/images/support-playbooks.png"
          :description="`Frameworks for cross-functional triage between Support and Engineering, ticket priority alignment (Zendesk to JIRA), structured customer signal alerting, and severity classification. Built for B2B SaaS environments where Support, Success, and Engineering need shared language on escalation.`"
          github-url="https://github.com/dc-larsen/support-playbooks"
          explore-url="https://github.com/dc-larsen/support-playbooks"
        />
      </div>
    </section>

    <!-- Tooling & Systems -->
    <section class="mb-16">
      <div class="mb-6 pb-2 border-b border-gray-200">
        <h2 class="text-2xl font-bold text-primary">Tooling &amp; Systems</h2>
        <p class="text-gray-600 mt-1">Internal automation and AI-augmented workflows.</p>
      </div>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProjectCard
          title="Documentation MCP Server"
          image="/images/socket-logo.png"
          :description="`MCP server pattern for exposing a developer platform's documentation to Claude Desktop and other AI development tools. Built for Socket.dev; a reusable pattern for any SaaS product that wants its knowledge base queryable from AI agents.`"
          github-url="https://github.com/dc-larsen/mcp-socket-docs"
          explore-url="https://github.com/dc-larsen/mcp-socket-docs"
        />

        <ProjectCard
          title="AI Coding Guardrails"
          image="/images/socket-logo.png"
          :description="`Security guardrails for AI-assisted coding. A pre-install validation hook intercepts dependency installs from Claude Code (and similar agents) and blocks risky packages before they land in a developer's environment. A reusable pattern for teams adopting agent-driven development in supply-chain-sensitive environments.`"
          github-url="https://github.com/dc-larsen/socket-claude-code-hook"
          explore-url="https://github.com/dc-larsen/socket-claude-code-hook"
        />

        <ProjectCard
          title="AI-Augmented Customer Operations"
          image="/images/support-playbooks.png"
          :description="`Automation workflows combining Zapier, OpenAI, and Slack to auto-triage Zendesk tickets, classify priority, surface critical customer signals, and manage pending ticket lifecycles. A pattern for customer-facing teams scaling AI into existing operational tooling.`"
          github-url="https://github.com/dc-larsen/support-playbooks"
          explore-url="https://github.com/dc-larsen/support-playbooks"
        />
      </div>
    </section>

    <!-- Workshops, Labs & Demos -->
    <section class="mb-16">
      <div class="mb-6 pb-2 border-b border-gray-200">
        <h2 class="text-2xl font-bold text-primary">Workshops, Labs &amp; Demos</h2>
        <p class="text-gray-600 mt-1">Customer enablement and hands-on training materials.</p>
      </div>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProjectCard
          title="Package Firewall Workshop"
          image="/images/socket-logo.png"
          :description="`Workshop materials and Docker-based demo environment for a network-level package firewall. Used to walk customer engineering teams through firewall setup, policy configuration, and CI/CD integration during enterprise rollouts.`"
          github-url="https://github.com/dc-larsen/socket-firewall-workshop"
          explore-url="https://github.com/dc-larsen/socket-firewall-workshop"
        />

        <ProjectCard
          title="Kubernetes Troubleshooting Lab"
          image="/images/kb8-support-lab.png"
          :description="`Hands-on Kubernetes labs for engineers building debugging muscle. Scenarios include CrashLoopBackOff, DNS resolution failures, and service connectivity issues across containers and clusters.`"
          github-url="https://github.com/dc-larsen/k8s-support-lab"
          explore-url="https://github.com/dc-larsen/k8s-support-lab"
        />
      </div>
    </section>

    <!-- Technical Contributions -->
    <section class="mb-16">
      <div class="mb-6 pb-2 border-b border-gray-200">
        <h2 class="text-2xl font-bold text-primary">Technical Contributions</h2>
        <p class="text-gray-600 mt-1">Production code, reference integrations, and engineering work.</p>
      </div>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProjectCard
          title="Open-Source Security Scanner"
          image="/images/socket-logo.png"
          :description="`Contributed Dockerfile auto-discovery to Socket Basics, an open-source SAST, secrets detection, and container scanner. Reduces configuration friction for engineering teams adopting container scanning in CI/CD pipelines.`"
          github-url="https://github.com/dc-larsen/socket-basics"
          explore-url="https://github.com/dc-larsen/socket-basics"
        />

        <ProjectCard
          title="Vulnerability Reachability Pipeline"
          image="/images/socket-logo.png"
          :description="`End-to-end reachability analysis: manifest upload, scan execution, and VEX/CDX export. Reference implementation for integrating reachability data into vulnerability management, SBOM, and audit workflows.`"
          github-url="https://github.com/dc-larsen/socket-reachability-poc"
          explore-url="https://github.com/dc-larsen/socket-reachability-poc"
        />
      </div>
    </section>

    <!-- Call to action -->
    <div class="text-center mt-12 p-8 bg-gray-50 rounded-lg">
      <h2 class="text-2xl font-semibold text-primary mb-4">Want to collaborate?</h2>
      <p class="text-gray-700 mb-6">
        Working on something interesting in developer security, customer engineering, or AI-augmented workflows? Happy to talk.
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
      content: 'Projects by David Larsen across TAM playbooks, tooling and systems, customer workshops, and technical contributions.'
    }
  ]
})
</script>
