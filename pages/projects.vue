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
          image="/images/customer-success.png"
          tag="Framework"
          link-label="Read playbook"
          :description="`Record renewal risk the same way every time (level, category, narrative, next step), review it on a cadence, and escalate early. A structured system so no renewal is a surprise.`"
          github-url="https://github.com/dc-larsen/customer-success-playbooks/blob/main/playbooks/renewal-risk-governance/renewal-risk-governance.md"
        />

        <ProjectCard
          title="Health Scoring"
          image="/images/ai-customer-success.png"
          tag="Framework"
          link-label="Read playbook"
          :description="`Build an early warning system, not just a dashboard. Separate signals, detectors, and decisions, track trajectory over snapshots, and map every pattern to an action.`"
          github-url="https://github.com/dc-larsen/customer-success-playbooks/blob/main/playbooks/health-scoring/health-scoring.md"
        />

        <ProjectCard
          title="Proactive Alerts"
          image="/images/image-zendesk-slackbot.png"
          tag="Reference"
          link-label="Read playbook"
          :description="`Eleven CSM alerts that keep a running pulse on your book: usage drops, license thresholds, renewal countdowns, risk-field changes, and call-gap safety nets.`"
          github-url="https://github.com/dc-larsen/customer-success-playbooks/blob/main/playbooks/alerts/alerts.md"
        />

        <ProjectCard
          title="Churn Intervention"
          image="/images/ai-customer-success-banner.png"
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
          title="Case Studies"
          image="/images/meeting-prep-example.jpg"
          tag="Runbook"
          link-label="Read playbook"
          :description="`Identify, capture, and publish customer wins, with a system that surfaces candidates automatically and tracks them to publication so your best stories actually get told.`"
          github-url="https://github.com/dc-larsen/customer-success-playbooks/blob/main/playbooks/case-study/case-study.md"
        />
      </div>
    </section>

    <!-- Escalations & Cross-Functional -->
    <section class="mb-16">
      <div class="mb-6 pb-2 border-b border-gray-200">
        <h2 class="text-2xl font-bold text-primary">Escalations &amp; Cross-Functional</h2>
        <p class="text-gray-600 mt-1">Get Support, Success, and Engineering speaking the same language.</p>
      </div>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProjectCard
          title="Escalation &amp; Triage Playbooks"
          image="/images/image-customer-support-playbooks.png"
          tag="Framework"
          link-label="Read playbooks"
          :description="`Cross-functional triage between Support and Engineering: priority alignment from Zendesk to Jira, severity classification, and structured customer-signal alerting.`"
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
          title="AI Automation"
          image="/images/socket-logo.png"
          tag="Toolkit"
          link-label="Read playbook"
          :description="`Use Claude Code and n8n to automate CS work: meeting prep, customer comms, and data lookups, with a skills library for HubSpot, Zendesk, Vitally, Slack, and n8n.`"
          github-url="https://github.com/dc-larsen/customer-success-playbooks/blob/main/playbooks/ai-automation/ai-automation.md"
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
