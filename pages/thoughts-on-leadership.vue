<template>
  <article class="max-w-4xl mx-auto">
    <!-- Header -->
    <div class="mb-8">
      <NuxtLink 
        to="/blog" 
        class="inline-flex items-center text-secondary hover:text-primary font-medium mb-6 transition-colors duration-200"
      >
        <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
        </svg>
        Back to Blog
      </NuxtLink>

      <!-- Category Badge -->
      <div class="mb-4">
        <span class="bg-secondary text-white px-3 py-1 rounded-full text-sm font-medium">
          Leadership
        </span>
      </div>

      <!-- Title -->
      <h1 class="text-4xl md:text-5xl font-bold text-primary mb-6">
        Thoughts on leadership
      </h1>

      <!-- Meta Info -->
      <div class="flex flex-wrap items-center text-gray-600 text-sm mb-6">
        <span class="mr-4">by David Larsen</span>
        <span class="mr-4">•</span>
        <time datetime="2025-08-11" class="mr-4">
          August 11, 2025
        </time>
        <span class="mr-4">•</span>
        <span class="mr-4">8 min read</span>
      </div>

      <!-- Tags -->
      <div class="flex flex-wrap gap-2 mb-8">
        <span
          v-for="tag in ['leadership', 'management', 'team-culture', 'engineering']"
          :key="tag"
          class="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
        >
          #{{ tag }}
        </span>
      </div>
    </div>

    <!-- Featured Image -->
    <div class="mb-8">
      <img
        src="/leadership-badge-1200x675-letterbox.png"
        alt="Thoughts on leadership"
        class="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
      />
    </div>

    <!-- Content -->
    <div class="prose prose-lg max-w-none mb-12">
      <p><strong>TLDR:</strong> I try to make good work easier. Set the intent, raise the floor, and get out of the way.</p>
      
      <p>Two things shaped how I lead: David Marquet's <em>Turn the Ship Around!</em> and my time in support engineering at Contrast Security. The book pushed me toward leader-leader thinking. Contrast gave me the reps to put it into practice when things were moving fast.</p>
      
      <h2 id="table-of-contents">Table of contents</h2>
      <ul>
        <li><a href="#intent-over-permission">Intent over permission</a></li>
        <li><a href="#principles-at-a-glance">Principles at a glance</a></li>
        <li><a href="#walkthrough-moving-support-into-qbrs-at-contrast">Walkthrough: moving support into QBRs at Contrast</a></li>
        <li><a href="#language-dos-and-donts">Language do's and don'ts</a></li>
        <li><a href="#post-mortems-that-change-something">Post-mortems that change something</a></li>
        <li><a href="#building-on-strengths-at-synapse">Building on strengths at Synapse</a></li>
        <li><a href="#try-it-yourself">Try it yourself</a></li>
        <li><a href="#next-steps">Next steps</a></li>
      </ul>
      
      <h2 id="intent-over-permission">Intent over permission</h2>
      <p>Leader-leader sounds abstract until you change the language. The quickest unlock I have seen is swapping "Can I…?" for "I intend to…". It forces clear thinking. What is the goal. What is the risk. Where are the guardrails. How do we roll back. When intent statements show up every day, the team stops waiting around. My job becomes coach and unblocker.</p>
      
      <h2 id="principles-at-a-glance">Principles at a glance</h2>
      <table>
        <thead>
          <tr>
            <th>Principle</th>
            <th>What it looks like</th>
            <th>Why it works</th>
            <th>How to try it</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Push control to where the info lives</td>
            <td>Decisions made by the person closest to the work</td>
            <td>Faster, fewer translation losses</td>
            <td>Replace approvals with "I intend to…" plus risk and rollback</td>
          </tr>
          <tr>
            <td>Clarity over control</td>
            <td>Clear why, constraints, and definition of done</td>
            <td>People pick better how when the why is visible</td>
            <td>Publish simple briefs and visible checklists</td>
          </tr>
          <tr>
            <td>Certify, not brief</td>
            <td>Pairing, dry runs, and explicit sign-off before solo ownership</td>
            <td>Reduces guesswork under pressure</td>
            <td>Add a two-run rule before someone flies solo</td>
          </tr>
          <tr>
            <td>Short feedback loops</td>
            <td>Post-mortems within 24 hours and visible actions</td>
            <td>Learning compounds, drift shrinks</td>
            <td>Put one doc change and one mechanism change on every Sev1 or Sev2</td>
          </tr>
          <tr>
            <td>Mechanisms, not memos</td>
            <td>Fields, runbooks, automations</td>
            <td>Behaviors stick when encoded</td>
            <td>Add the field, add the step, wire the alert</td>
          </tr>
        </tbody>
      </table>
      
      <h2 id="walkthrough-moving-support-into-qbrs-at-contrast">Walkthrough: moving support into QBRs at Contrast</h2>
      <p>This was not an outage story. It was a growth push. Our department set an aggressive goal to run more QBRs. I was on the support team and had just taken over corporate accounts.</p>
      
      <ol>
        <li><p><strong>State intent</strong><br>
        I told my manager: <em>I intend to have support participate in this initiative with corporate accounts.</em> Clear scope and a clear why.</p></li>
        
        <li><p><strong>Share a lightweight template</strong><br>
        I brought a QBR outline tuned for our customers: a few support metrics tied to value moments, top friction points, and a short roadmap of fixes with owners and dates.</p></li>
        
        <li><p><strong>Run the first rep fast</strong><br>
        We booked the first customer that same week. Short deck. Most of the time spent on actions.</p></li>
        
        <li><p><strong>Feed findings back into the system</strong><br>
        Items flowed to product, docs, and support runbooks. Nothing lived only in slides.</p></li>
        
        <li><p><strong>Scale what worked</strong><br>
        Over the next couple of weeks, support ran QBRs with about half a dozen customers. The win was the role shift. Support showed up as an account partner with real inputs and follow-through.</p></li>
      </ol>
      
      <h2 id="language-dos-and-donts">Language do's and don'ts</h2>
      <table>
        <thead>
          <tr>
            <th>Do</th>
            <th>Do Not</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>"I intend to rotate keys for tenant X to close gap Y. Risk is session churn. Rollback is flag off within two minutes."</td>
            <td>"Should I rotate keys?"</td>
          </tr>
          <tr>
            <td>"Ship the fix behind a feature flag so that we can validate with customer A before broad release."</td>
            <td>"We will ship soon."</td>
          </tr>
          <tr>
            <td>"Decision: option B because lower blast radius. We will revisit if error rate exceeds 2%."</td>
            <td>"We picked B."</td>
          </tr>
          <tr>
            <td>"By Friday, outcome is a 20% drop in repeat tickets on topic Z."</td>
            <td>"We will improve Z."</td>
          </tr>
          <tr>
            <td>"Post-mortem action: add runbook step 3 and automate alerting."</td>
            <td>"We will be more careful."</td>
          </tr>
        </tbody>
      </table>
      
      <h2 id="post-mortems-that-change-something">Post-mortems that change something</h2>
      <p>I prefer post-mortem over after-action review. The rule is simple. If nothing changes, we did not learn. Each post-mortem closes with one process change, one doc update, and one automation or alert. We also keep a slim decision log so context does not evaporate when people rotate.</p>
      
      <p><strong>Post-mortem starter (copy and adapt):</strong></p>
      <blockquote>
        <p><em>What happened:</em> Brief timeline with key events</p>
        <p><em>Why it happened:</em> Root causes, not just triggers</p>
        <p><em>What we learned:</em> Concrete insights about our system/process</p>
        <p><em>Actions taken:</em></p>
        <ul>
          <li>Process change: [specific change with owner and date]</li>
          <li>Documentation update: [what was added/changed]</li>
          <li>Technical improvement: [automation/alert/monitoring added]</li>
        </ul>
      </blockquote>
      
      <h2 id="building-on-strengths-at-synapse">Building on strengths at Synapse</h2>
      <p>At Synapse, I inherited a strong foundation. The team was already doing great work - they just needed systems to scale their impact. We focused on three areas:</p>
      
      <ul>
        <li><strong>Knowledge capture:</strong> Moved from Slack threads to searchable documentation</li>
        <li><strong>Decision frameworks:</strong> Created simple templates for common choices</li>
        <li><strong>Feedback loops:</strong> Regular retrospectives with actionable outcomes</li>
      </ul>
      
      <p>The key insight: great people can do amazing work when you remove friction from their path.</p>
      
      <h2 id="try-it-yourself">Try it yourself</h2>
      <p>Start small. Pick one area where your team asks permission frequently. Replace the approval process with an "I intend to..." template that includes:</p>
      
      <ul>
        <li>Clear objective</li>
        <li>Risk assessment</li>
        <li>Rollback plan</li>
        <li>Success metrics</li>
      </ul>
      
      <p>Run it for two weeks. Measure the time saved and decisions made. Adjust the template based on what you learn.</p>
      
      <h2 id="next-steps">Next steps</h2>
      <p>Leadership isn't about having all the answers. It's about creating environments where good answers emerge quickly and safely. The goal isn't to eliminate all mistakes - it's to make them cheap and educational.</p>
      
      <p>What's one place in your team where you could replace "Can I?" with "I intend to?" Start there.</p>
    </div>

    <!-- Footer Navigation -->
    <div class="border-t border-gray-200 pt-8">
      <div class="flex flex-col sm:flex-row justify-between items-center">
        <NuxtLink 
          to="/blog" 
          class="text-secondary hover:text-primary font-medium mb-4 sm:mb-0 transition-colors duration-200"
        >
          ← Back to All Posts
        </NuxtLink>
        
      </div>
    </div>
  </article>
</template>

<script setup>
useHead({
  title: 'Thoughts on leadership',
  meta: [
    { name: 'description', content: 'Short version: I try to make good work easier. Set the intent, raise the floor, and get out of the way. A deep dive into leader-leader thinking and practical approaches to engineering leadership.' },
    { property: 'og:title', content: 'Thoughts on leadership' },
    { property: 'og:description', content: 'Short version: I try to make good work easier. Set the intent, raise the floor, and get out of the way. A deep dive into leader-leader thinking and practical approaches to engineering leadership.' },
    { property: 'og:image', content: '/leadership-badge-1200x675-letterbox.png' },
    { property: 'og:type', content: 'article' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Thoughts on leadership' },
    { name: 'twitter:description', content: 'Short version: I try to make good work easier. Set the intent, raise the floor, and get out of the way. A deep dive into leader-leader thinking and practical approaches to engineering leadership.' }
  ]
})
</script>

<style scoped>
.prose {
  @apply text-gray-700 leading-relaxed;
}

.prose h1 {
  @apply text-3xl font-bold text-primary mt-8 mb-4;
}

.prose h2 {
  @apply text-2xl font-semibold text-primary mt-8 mb-4;
}

.prose h3 {
  @apply text-xl font-medium text-primary mt-6 mb-3;
}

.prose h4 {
  @apply text-lg font-medium text-primary mt-4 mb-2;
}

.prose p {
  @apply mb-6;
}

.prose blockquote {
  @apply border-l-4 border-secondary pl-6 my-6 italic text-gray-600;
}

.prose ul, .prose ol {
  @apply mb-6;
}

.prose li {
  @apply mb-2;
}

.prose a {
  @apply text-secondary hover:text-primary underline transition-colors duration-200;
}

.prose table {
  @apply w-full border-collapse border border-gray-300 my-6;
}

.prose th, .prose td {
  @apply border border-gray-300 px-4 py-2 text-left;
}

.prose th {
  @apply bg-gray-100 font-medium;
}

.prose code {
  @apply bg-gray-100 px-2 py-1 rounded text-sm;
}

.prose pre {
  @apply bg-gray-900 text-white p-4 rounded-lg overflow-x-auto my-6;
}
</style>