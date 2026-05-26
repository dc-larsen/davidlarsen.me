<template>
  <div class="max-w-6xl mx-auto">
    <div class="text-center mb-12">
      <h1 class="text-4xl font-bold text-primary mb-4">Projects</h1>
      <p class="text-xl text-gray-600">Integrations, demos, and tooling I've built around developer security, AI-augmented workflows, and customer adoption. Most started as patterns I built for customers; they're here so engineering teams can adapt them for their own environments.</p>
    </div>

    <!-- AI & Developer Tooling -->
    <section class="mb-16">
      <div class="mb-6 pb-2 border-b border-gray-200">
        <h2 class="text-2xl font-bold text-primary">AI &amp; Developer Tooling</h2>
        <p class="text-gray-600 mt-1">MCP servers, agent guardrails, and AI development patterns.</p>
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
          :description="`Security guardrails for AI-assisted coding. Blocks risky dependencies before agent-driven development introduces them. A pattern for any team adopting Claude Code or similar AI coding tools at scale where supply chain risk matters.`"
          github-url="https://github.com/dc-larsen/socket-claude-guardrails"
          explore-url="https://github.com/dc-larsen/socket-claude-guardrails"
        />

        <ProjectCard
          title="AI Agent Dependency Hook"
          image="/images/socket-logo.png"
          :description="`Pre-install validation hook for AI coding agents. Validates each package through a security policy engine before installation. Reference pattern for teams adopting agent-driven development in regulated or risk-sensitive environments.`"
          github-url="https://github.com/dc-larsen/socket-claude-code-hook"
          explore-url="https://github.com/dc-larsen/socket-claude-code-hook"
        />
      </div>
    </section>

    <!-- Security & Compliance Tooling -->
    <section class="mb-16">
      <div class="mb-6 pb-2 border-b border-gray-200">
        <h2 class="text-2xl font-bold text-primary">Security &amp; Compliance Tooling</h2>
        <p class="text-gray-600 mt-1">Reachability analysis, scanning, and supply chain integrations.</p>
      </div>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProjectCard
          title="Vulnerability Reachability Pipeline"
          image="/images/socket-logo.png"
          :description="`End-to-end reachability analysis: manifest upload, scan execution, and VEX/CDX export. Reference implementation for integrating reachability data into vulnerability management, SBOM, and audit workflows.`"
          github-url="https://github.com/dc-larsen/socket-reachability-poc"
          explore-url="https://github.com/dc-larsen/socket-reachability-poc"
        />

        <ProjectCard
          title="Open-Source Security Scanner"
          image="/images/socket-logo.png"
          :description="`Contributed Dockerfile auto-discovery to Socket Basics, an open-source SAST, secrets detection, and container scanner. Reduces configuration friction for engineering teams adopting container scanning in CI/CD pipelines.`"
          github-url="https://github.com/dc-larsen/socket-basics"
          explore-url="https://github.com/dc-larsen/socket-basics"
        />
      </div>
    </section>

    <!-- Workshops & Hands-On Labs -->
    <section class="mb-16">
      <div class="mb-6 pb-2 border-b border-gray-200">
        <h2 class="text-2xl font-bold text-primary">Workshops &amp; Hands-On Labs</h2>
        <p class="text-gray-600 mt-1">Customer enablement and technical training materials.</p>
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
      content: 'Technical projects by David Larsen across AI development tooling, security and compliance integrations, and customer enablement workshops.'
    }
  ]
})
</script>
