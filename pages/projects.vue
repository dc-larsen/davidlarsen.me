<template>
  <div class="max-w-6xl mx-auto">
    <div class="text-center mb-12">
      <h1 class="text-4xl font-bold text-primary mb-4">Projects</h1>
      <p class="text-xl text-gray-600">Integrations, demos, and tooling I've built around developer security, AI-augmented workflows, and customer adoption. Most came out of customer-facing technical work at Socket. They exist to reduce friction in security workflows, accelerate adoption, and give engineering teams concrete patterns to adapt for their own environments.</p>
    </div>

    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      <!-- Socket Docs MCP Server -->
      <ProjectCard
        title="Socket Docs MCP Server"
        image="/images/socket-logo.png"
        :description="`MCP server that brings Socket.dev's documentation into Claude Desktop and other AI development tools. Lets developers query Socket's security knowledge base directly from their AI workflows, and demonstrates how enterprise customers can wire product knowledge into MCP-based agents.`"
        github-url="https://github.com/dc-larsen/mcp-socket-docs"
        explore-url="https://github.com/dc-larsen/mcp-socket-docs"
      />

      <!-- Claude Code AI Guardrails -->
      <ProjectCard
        title="Claude Code AI Guardrails"
        image="/images/socket-logo.png"
        :description="`Guardrails for using Socket.dev with Claude Code to prevent risky dependencies during AI-assisted development. Built for customers adopting Claude Code at scale who need security gates between the AI agent and their production codebase.`"
        github-url="https://github.com/dc-larsen/socket-claude-guardrails"
        explore-url="https://github.com/dc-larsen/socket-claude-guardrails"
      />

      <!-- Claude Code Dependency Hook -->
      <ProjectCard
        title="Claude Code Dependency Hook"
        image="/images/socket-logo.png"
        :description="`Socket.dev dependency validation hook for Claude Code. Intercepts package installations and flags risky dependencies before they land in a developer's environment. A concrete pattern for wiring Socket into AI-augmented dev workflows.`"
        github-url="https://github.com/dc-larsen/socket-claude-code-hook"
        explore-url="https://github.com/dc-larsen/socket-claude-code-hook"
      />

      <!-- Socket Reachability POC -->
      <ProjectCard
        title="Reachability API Integration"
        image="/images/socket-logo.png"
        :description="`End-to-end reachability analysis using Socket's API: manifest upload, scan execution, and VEX/CDX export. Demonstrates how enterprise customers can integrate reachability data into existing vulnerability management and compliance workflows.`"
        github-url="https://github.com/dc-larsen/socket-reachability-poc"
        explore-url="https://github.com/dc-larsen/socket-reachability-poc"
      />

      <!-- Socket Basics -->
      <ProjectCard
        title="Socket Basics"
        image="/images/socket-logo.png"
        :description="`Socket's open-source tool for SAST, secrets detection, and container scanning. Contributed the Dockerfile auto-discovery feature for GitHub repositories, reducing configuration friction for customers onboarding container scanning.`"
        github-url="https://github.com/dc-larsen/socket-basics"
        explore-url="https://github.com/dc-larsen/socket-basics"
      />

      <!-- Socket Firewall Workshop -->
      <ProjectCard
        title="Socket Firewall Workshop"
        image="/images/socket-logo.png"
        :description="`Workshop materials and demo environment for Socket Firewall in service mode (Docker). Used to walk customer engineering teams through firewall setup, policy configuration, and integration with CI/CD pipelines.`"
        github-url="https://github.com/dc-larsen/socket-firewall-workshop"
        explore-url="https://github.com/dc-larsen/socket-firewall-workshop"
      />

      <!-- k8s Troubleshooting Lab -->
      <ProjectCard
        title="Kubernetes Troubleshooting Lab"
        image="/images/kb8-support-lab.png"
        :description="`Hands-on Kubernetes labs for engineers building debugging muscle. Realistic scenarios including CrashLoopBackOff, DNS resolution failures, and service connectivity issues across containers and clusters.`"
        github-url="https://github.com/dc-larsen/k8s-support-lab"
        explore-url="https://github.com/dc-larsen/k8s-support-lab"
      />

      <!-- GitHub Portfolio -->
      <ProjectCard
        title="More on GitHub"
        image="/images/github.png"
        :description="`Additional integrations, demos, and security tooling experiments. Most exist to give customers concrete patterns they can adapt for their own environments, including GitHub Actions scanning demos, Chrome extension scanners, and reachability examples across multiple languages.`"
        github-url="https://github.com/dc-larsen"
        explore-url="https://github.com/dc-larsen"
      />
    </div>

    <!-- Call to action -->
    <div class="text-center mt-16 p-8 bg-gray-50 rounded-lg">
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
      content: 'Technical projects by David Larsen including MCP servers, Claude Code integrations, AI guardrails, reachability tooling, and developer-facing security demos.'
    }
  ]
})
</script>
