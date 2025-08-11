const blogPosts = [
  {
    id: 1,
    title: "Thoughts on leadership",
    slug: "thoughts-on-leadership",
    excerpt: "Short version: I try to make good work easier. Set the intent, raise the floor, and get out of the way. A deep dive into leader-leader thinking and practical approaches to engineering leadership.",
    content: `
      <blockquote>
        <p><strong>Author:</strong> David Larsen<br>
        <strong>Published:</strong> August 11, 2025<br>
        <strong>Last updated:</strong> August 11, 2025<br>
        <strong>Reading time:</strong> ~8 minutes</p>
      </blockquote>
      
      <p><strong>Short version:</strong> I try to make good work easier. Set the intent, raise the floor, and get out of the way.</p>
      
      <p>Two things shaped how I lead: David Marquet's <em>Turn the Ship Around!</em> and my time in support engineering at Contrast Security. The book pushed me toward leader-leader thinking. Contrast gave me the reps to put it into practice when things were moving fast.</p>
      
      <h2>Table of contents</h2>
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
      <p>Leader-leader sounds abstract until you change the language. The quickest unlock I have seen is swapping "Can I\u2026?" for "I intend to\u2026". It forces clear thinking. What is the goal. What is the risk. Where are the guardrails. How do we roll back. When intent statements show up every day, the team stops waiting around. My job becomes coach and unblocker.</p>
      
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
            <td>Replace approvals with "I intend to\u2026" plus risk and rollback</td>
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
        <p>This appears to be where your content was cut off. Would you like me to add the rest of the blog post content here?</p>
      </blockquote>
    `,
    image: "/support-playbooks.png",
    category: "Leadership",
    tags: ["leadership", "management", "team-culture", "engineering"],
    date: "2025-08-11",
    lastUpdated: "2025-08-11",
    readTime: 8,
    author: "David Larsen"
  },
  {
    id: 2,
    title: "Building High-Performance Support Teams in 2025",
    slug: "building-high-performance-support-teams-2025",
    excerpt: "Learn the key strategies for scaling customer support teams while maintaining quality and team satisfaction. From hiring practices to performance metrics, discover what works.",
    content: "",
    image: "/zendesk-slackbot.png",
    category: "Leadership",
    tags: ["team-building", "support", "leadership", "scaling"],
    date: "2025-01-15",
    readTime: 8,
    author: "David Larsen"
  },
  {
    id: 3,
    title: "The Art of Technical Troubleshooting: A Support Leader's Guide",
    slug: "art-of-technical-troubleshooting-guide",
    excerpt: "Debugging complex technical issues requires more than just technical knowledge. Here's how to build systematic approaches that work every time.",
    content: "",
    image: "/customer-success.png",
    category: "Technical",
    tags: ["troubleshooting", "technical-support", "processes", "debugging"],
    date: "2024-12-20",
    readTime: 12,
    author: "David Larsen"
  },
  {
    id: 4,
    title: "Customer Success Metrics That Actually Matter",
    slug: "customer-success-metrics-that-matter",
    excerpt: "Move beyond vanity metrics to track what really drives customer satisfaction and business growth. A deep dive into meaningful KPIs.",
    content: "",
    image: "/markdowner.png",
    category: "Strategy",
    tags: ["metrics", "customer-success", "kpis", "analytics"],
    date: "2024-12-10",
    readTime: 6,
    author: "David Larsen"
  },
  {
    id: 5,
    title: "Automation vs. Human Touch: Finding the Right Balance",
    slug: "automation-vs-human-touch-balance",
    excerpt: "When should you automate customer support processes, and when is the human touch irreplaceable? Learn to make these critical decisions.",
    content: "",
    image: "/pro.png",
    category: "Technology",
    tags: ["automation", "ai", "customer-experience", "process-improvement"],
    date: "2024-11-25",
    readTime: 10,
    author: "David Larsen"
  },
  {
    id: 6,
    title: "Remote Team Leadership: Lessons from Baltimore",
    slug: "remote-team-leadership-lessons",
    excerpt: "Managing distributed support teams requires different skills. Here are the strategies that work for building culture and maintaining performance remotely.",
    content: "",
    image: "/threeo.jpg",
    category: "Leadership",
    tags: ["remote-work", "team-culture", "management", "distributed-teams"],
    date: "2024-11-10",
    readTime: 7,
    author: "David Larsen"
  },
  {
    id: 7,
    title: "API Documentation: A Support Team's Secret Weapon",
    slug: "api-documentation-support-secret-weapon",
    excerpt: "Great API docs don't just help developers\u2014they empower support teams to solve complex technical issues faster. Here's how to leverage them.",
    content: "",
    image: "/threeo.jpg",
    category: "Technical",
    tags: ["api", "documentation", "technical-support", "developer-tools"],
    date: "2024-10-28",
    readTime: 9,
    author: "David Larsen"
  }
];

export { blogPosts as b };
//# sourceMappingURL=blogPosts-Ns7lzFqZ.mjs.map
