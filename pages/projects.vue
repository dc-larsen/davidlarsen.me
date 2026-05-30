<template>
  <div class="max-w-6xl mx-auto">
    <div class="text-center mb-12">
      <h1 class="text-4xl font-bold text-primary mb-4">TAM Playbooks</h1>
      <p class="text-xl text-gray-600">Open playbooks for enterprise Technical Account Managers. Built from running seven-figure portfolios at security and developer-platform companies, and written so another TAM can run them, not just read about them. Take what's useful.</p>
    </div>

    <!-- Onboarding & Time-to-Value -->
    <section class="mb-16">
      <div class="mb-6 pb-2 border-b border-gray-200">
        <h2 class="text-2xl font-bold text-primary">Onboarding &amp; Time-to-Value</h2>
        <p class="text-gray-600 mt-1">Start the relationship right and define when onboarding ends.</p>
      </div>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProjectCard
          title="Customer Onboarding"
          image="/images/image-customer-success-playbooks.png"
          tag="Runbook"
          link-label="Read playbook"
          :description="`Get the relationship right from day one. Research before the first call, lead with their problem over your product, capture why they bought, build a mutual success plan, and define a hard finish line.`"
          github-url="https://github.com/dc-larsen/customer-success-playbooks/blob/main/playbooks/onboarding/onboarding.md"
        />

        <ProjectCard
          title="Onboarding Metrics"
          image="/images/onboarding-metrics.png"
          tag="Metrics"
          link-label="Read playbook"
          :description="`Measure whether onboarding actually worked, across every account. Define a value milestone, track time-to-first-value and completion, watch the leading signals, and fix the step that keeps stalling.`"
          github-url="https://github.com/dc-larsen/customer-success-playbooks/blob/main/playbooks/onboarding-metrics/onboarding-metrics.md"
        />
      </div>
    </section>

    <!-- Renewals & Risk -->
    <section class="mb-16">
      <div class="mb-6 pb-2 border-b border-gray-200">
        <h2 class="text-2xl font-bold text-primary">Renewals &amp; Risk</h2>
        <p class="text-gray-600 mt-1">See risk early, forecast honestly, and run the save play.</p>
      </div>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProjectCard
          title="Renewal Risk Governance"
          image="/images/renewal.png"
          tag="Framework"
          link-label="Read playbook"
          :description="`Record renewal risk the same way every time (level, category, narrative, next step), review it on a cadence, and escalate early. A structured system so no renewal is a surprise.`"
          github-url="https://github.com/dc-larsen/customer-success-playbooks/blob/main/playbooks/renewal-risk-governance/renewal-risk-governance.md"
        />

        <ProjectCard
          title="Health Scoring"
          image="/images/health-score.png"
          tag="Framework"
          link-label="Read playbook"
          :description="`Build an early warning system, not just a dashboard. Separate signals, detectors, and decisions, track trajectory over snapshots, and map every pattern to an action.`"
          github-url="https://github.com/dc-larsen/customer-success-playbooks/blob/main/playbooks/health-scoring/health-scoring.md"
        />

        <ProjectCard
          title="Proactive Alerts"
          image="/images/proactive-alerts.png"
          tag="Reference"
          link-label="Read playbook"
          :description="`Eleven CSM alerts that keep a running pulse on your book: usage drops, license thresholds, renewal countdowns, risk-field changes, and call-gap safety nets.`"
          github-url="https://github.com/dc-larsen/customer-success-playbooks/blob/main/playbooks/alerts/alerts.md"
        />

        <ProjectCard
          title="Churn Intervention"
          image="/images/churn-intervention.png"
          tag="Runbook"
          link-label="Read playbook"
          :description="`The save play for at-risk accounts. Diagnose the real reason, confirm with the customer, multi-thread to the economic buyer, re-establish value, and know when to walk.`"
          github-url="https://github.com/dc-larsen/customer-success-playbooks/blob/main/playbooks/churn-intervention/churn-intervention.md"
        />
      </div>
    </section>

    <!-- Expansion & Value -->
    <section class="mb-16">
      <div class="mb-6 pb-2 border-b border-gray-200">
        <h2 class="text-2xl font-bold text-primary">Expansion &amp; Value</h2>
        <p class="text-gray-600 mt-1">Turn proven value into expansion and stories.</p>
      </div>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProjectCard
          title="Expansion &amp; Adoption"
          image="/images/expansion-adoption.png"
          tag="Framework"
          link-label="Read playbook"
          :description="`Spot expansion early and earn it through deeper adoption. Name the expansion type, watch the usage and health signals that predict it, drive adoption tied to a measurable win, and hand the opportunity to sales with data in hand.`"
          github-url="https://github.com/dc-larsen/customer-success-playbooks/blob/main/playbooks/expansion-adoption/expansion-adoption.md"
        />

        <ProjectCard
          title="Case Studies"
          image="/images/case-study.png"
          tag="Runbook"
          link-label="Read playbook"
          :description="`Identify, capture, and publish customer wins, with a system that surfaces candidates automatically and tracks them to publication so your best stories actually get told.`"
          github-url="https://github.com/dc-larsen/customer-success-playbooks/blob/main/playbooks/case-study/case-study.md"
        />
      </div>
    </section>

    <!-- Support Playbooks -->
    <section class="mb-16">
      <div class="mb-6 pb-2 border-b border-gray-200">
        <h2 class="text-2xl font-bold text-primary">Support Playbooks</h2>
        <p class="text-gray-600 mt-1">Running a support function: triage, priority, alerts, and people management.</p>
      </div>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProjectCard
          title="Support Triage &amp; Operations"
          image="/images/image-customer-support-playbooks.png"
          tag="Collection"
          link-label="Browse playbooks"
          :description="`A collection from running support teams: support triage, ticket priority, automated triage, support alerts, pending-ticket workflow, and people management.`"
          github-url="https://github.com/dc-larsen/support-playbooks"
        />
      </div>
    </section>

    <!-- Automation & Tooling -->
    <section class="mb-16">
      <div class="mb-6 pb-2 border-b border-gray-200">
        <h2 class="text-2xl font-bold text-primary">Automation &amp; Tooling</h2>
        <p class="text-gray-600 mt-1">Scale yourself with Claude Code and n8n. Adapt these for your team.</p>
      </div>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProjectCard
          title="Claude Code Skills"
          image="/images/ai-automation.png"
          tag="Toolkit"
          link-label="Read playbook"
          :description="`Package the CS work you repeat into reusable skills the assistant runs your way. What a skill is, which tasks to encode, and how to build focused, composable ones.`"
          github-url="https://github.com/dc-larsen/customer-success-playbooks/blob/main/playbooks/claude-code-skills/claude-code-skills.md"
        />

        <ProjectCard
          title="Call Review Automation"
          image="/images/meeting-prep-example.jpg"
          tag="Automation"
          link-label="Read playbook"
          :description="`Grade your own customer calls from transcripts against a rubric, every week. Capture the transcript, score the beats that predict a good call, and fix one beat at a time.`"
          github-url="https://github.com/dc-larsen/customer-success-playbooks/blob/main/playbooks/call-review-automation/call-review-automation.md"
        />

        <ProjectCard
          title="Customer Alerts Tracking"
          image="/images/image-zendesk-slackbot.png"
          tag="Automation"
          link-label="Read playbook"
          :description="`Turn the alerts playbook into a system that watches your book and pings you with context, so you stop pulling reports by hand.`"
          github-url="https://github.com/dc-larsen/customer-success-playbooks/blob/main/playbooks/customer-alerts-tracking/customer-alerts-tracking.md"
        />

        <ProjectCard
          title="CLAUDE.md"
          image="/images/customer-success.png"
          tag="Setup"
          link-label="Read playbook"
          :description="`Teach your AI assistant how you work once: your role, tools, style, and systems in a file it reads every session. Keep it tight, and layer global with per-project.`"
          github-url="https://github.com/dc-larsen/customer-success-playbooks/blob/main/playbooks/claude-md/claude-md.md"
        />

        <ProjectCard
          title="AI Second Brain"
          image="/images/ai-customer-success-banner.png"
          tag="System"
          link-label="Read playbook"
          :description="`A markdown knowledge base your assistant reads and grows with you: sources, concept pages, and an index that compound so you stop looking things up twice.`"
          github-url="https://github.com/dc-larsen/customer-success-playbooks/blob/main/playbooks/ai-second-brain/ai-second-brain.md"
        />
      </div>
    </section>

    <!-- Call to action -->
    <div class="text-center mt-12 p-8 bg-gray-50 rounded-lg">
      <h2 class="text-2xl font-semibold text-primary mb-4">These are living playbooks</h2>
      <p class="text-gray-700 mb-6">
        Take them and adapt them. If you run one better, or want one that isn't here yet, I'd like to hear it.
      </p>
      <a
        href="https://github.com/dc-larsen/customer-success-playbooks"
        target="_blank"
        rel="noopener noreferrer"
        class="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors duration-200 inline-flex items-center"
      >
        <IconsGitHubIcon :size="18" class="mr-2" />
        Browse all playbooks on GitHub
      </a>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'TAM Playbooks',
  meta: [
    {
      name: 'description',
      content: 'Open playbooks for enterprise Technical Account Managers by David Larsen: onboarding, renewals and risk, expansion and value, escalations, and AI automation. Take what is useful.'
    }
  ]
})
</script>
