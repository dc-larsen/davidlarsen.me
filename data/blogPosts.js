// Blog posts data
export const blogPosts = [
  {
    id: 1,
    title: 'One-on-one autopilot: the Zendesk → Slack cheat sheet',
    slug: 'zendesk-slack-cheat-sheet',
    excerpt: 'A lightweight bot that checks Google Calendar for upcoming 1:1s, pulls a focused Zendesk snapshot for the attendee, and posts a compact summary to Slack so managers arrive prepped without extra work.',
    content: `
      <p>I wanted a manager to be able to show up to every 1:1 with a clean cheat sheet and zero prep. The idea first hit when my manager was juggling about 15 direct reports and weekly 1:1s. I did not build the tool at that company and they never used it, but the pain point stuck with me. Later I coded a small bot to make the prep disappear: show up with a shared summary of recent work and a few discussion flags. No homework. Just signal.</p>
      
      <h2>What it does (by system)</h2>
      
      <h3>What happens in Google Calendar</h3>
      <ul>
        <li>GitHub Actions checks Google Calendar every 5 minutes for upcoming meetings with "1on1" in the title.</li>
        <li>When it finds one starting soon, it grabs the attendee email that is not the organizer (the direct report) and the start time.</li>
        <li>If the meeting is within the lead window (about 30 minutes), it triggers the next step.</li>
      </ul>
      
      <h3>What happens in Zendesk</h3>
      <ul>
        <li>Using that attendee email, the bot looks up the matching Zendesk user.</li>
        <li>It pulls a focused snapshot for the last 7 days (configurable): tickets handled and solved, positive CSAT count and ratio, reopens, SLA breaches, urgent or open items, on-hold items older than N days, and tickets older than N days.</li>
        <li>It collects links for anything that needs attention so you can jump straight in.</li>
      </ul>
      
      <h3>What happens in Slack</h3>
      <ul>
        <li>The bot formats the Zendesk snapshot into a compact, readable post: headline stats first, flags with links next, and a short "prompts for the 1:1" block.</li>
        <li>It posts the summary to the designated Slack channel about 30 minutes before the meeting so both manager and rep see the same truth.</li>
      </ul>
      
      <h2>Using it in your 1:1</h2>
      <ol>
        <li>Put "1on1" in your recurring meeting title and invite the rep's email that matches their Zendesk user.</li>
        <li>About 30 minutes before the meeting, a summary lands in Slack with links and a few prompts.</li>
        <li>Use the time for patterns, coaching, and decisions instead of screensharing dashboards.</li>
      </ol>
      
      <h2>Sample Slack post</h2>
      <p><img src="/sample-slack-post.png" alt="Sample Slack post" /></p>
      
      <h2>Setup and docs</h2>
      <p>For installation, configuration, and environment variables, see the README:<br>
      <a href="https://github.com/dc-larsen/zendesk-slackbot#readme" target="_blank" rel="noopener noreferrer">https://github.com/dc-larsen/zendesk-slackbot#readme</a></p>
    `,
    image: '/slackbot.png',
    category: 'Technical',
    tags: ['zendesk', 'slack', 'github-actions', 'google-calendar', 'service-accounts', '1:1s', 'cs-ops', 'automation', 'manager-tooling'],
    date: '2025-08-13',
    readTime: 7,
    author: 'David Larsen'
  },
  {
    id: 2,
    title: 'Why I keep going back to La Cuchara',
    slug: 'la-cuchara-baltimore-review',
    excerpt: 'Years in, La Cuchara still delivers: sit at the bar, share small plates, chase the rotating gin & tonics, and watch a tight team run like clockwork.',
    content: `
      <h1>Why I keep going back to La Cuchara</h1>
      
      <p><a href="https://www.lacucharabaltimore.com/" target="_blank" rel="noopener noreferrer">La Cuchara — lacucharabaltimore.com</a></p>
      
      <p>I've been going to La Cuchara for years, and it still feels fresh every time. The room hums, the plates move, and the bar is the best seat in the house.</p>
      
      <h2>The bar > a table</h2>
      <p>I've done both, but the bar wins. You're in the flow with bartenders, runners, and that quiet choreography between service and kitchen. It is fun to watch a team that tight do their thing, and this place runs like a machine.</p>
      
      <h2>Menus that actually change</h2>
      <p>They print menus daily, and the cooking is built around seasonality. You never have to ask what is eighty-sixed because the paper in your hand is the source of truth. It keeps regulars like me curious, and it gives the team room to cook what is good right now.</p>
      
      <h2>The rotating gin & tonics</h2>
      <p>One of my favorite quirks: the bar often runs rotating gin and tonic builds, usually two at a time, and they swap often. I have gone back two weeks later and had totally different combos. It is an easy way to try something new without overthinking it.</p>
      
      <h2>Shared plates done right</h2>
      <p>The menu keeps a few staples and then shifts around them. Most things are built to share, which is how I like to eat here. A couple of small plates, something from the wood fire, and a wild card from the day's list makes a great lineup. The whole concept leans Basque and wood-fired, which fits the style.</p>
      
      <h2>What I order most</h2>
      <ul>
        <li>Jamón croquettes</li>
        <li>Boquerones</li>
        <li>Spinach & Gruyère croquettes</li>
        <li>Shrimp a la plantxa</li>
      </ul>
      
      <h2>The staff and that "menu whisperer"</h2>
      <p>Everyone you deal with is on it: host, servers, bartenders. There is also a person whose whole job is to talk through the menu at the bar, field questions, and steer you to the right dishes. Knowing prep methods, sourcing, and how things come together makes a difference. It is the kind of role you usually see in fine-dining rooms, and it adds real value to a casual night out.</p>
      
      <h2>Happy hour is a cheat code</h2>
      <p>Prices are fair for the quality, but happy hour is where you can really sample widely. They run bar happy hours with drink specials and half-priced small plates. That lets you order a spread without guessing.</p>
      
      <h2>Logistics: easy to get to, easy to park</h2>
      <p>It is in the Meadow Mill building in Woodberry. I rarely wait if I am smart about time, and I have always found parking in the lot next to the restaurant.</p>
      
      <h2>Quick tips if it is your first time</h2>
      <ul>
        <li>Sit at the bar if you can. That is the show.</li>
        <li>Ask about the day's G&Ts.</li>
        <li>Order for the table: two or three smalls, then share something from the grill.</li>
        <li>If you like dessert, keep room. The pistachio ice cream I had recently was worth it.</li>
      </ul>
      
      <h2>Why it stays in my rotation</h2>
      <p>Consistent service. A menu that changes without losing its backbone. A bar program that nudges you to try new things. And a space that rewards regulars without getting precious about it. When I want a great meal and I am up for something new, this is where I land.</p>
    `,
    image: '/lacuchara.png',
    category: 'Personal',
    tags: ['restaurant review', 'baltimore', 'la cuchara', 'shared plates', 'happy hour', 'gin and tonic', 'woodberry'],
    date: '2025-08-13',
    readTime: 5,
    author: 'David Larsen'
  },
  {
    id: 3,
    title: 'Thoughts on leadership',
    slug: 'thoughts-on-leadership',
    excerpt: 'TLDR: I try to make good work easier. Set the intent, raise the floor, and get out of the way. A deep dive into leader-leader thinking and practical approaches to engineering leadership.',
    content: `
      <p><strong>TLDR:</strong> I try to make good work easier. Set the intent, raise the floor, and get out of the way.</p>
      
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
    `,
    image: '/leadership-badge-1200x675-letterbox.png',
    category: 'Leadership',
    tags: ['leadership', 'management', 'team-culture', 'engineering'],
    date: '2025-08-11',
    lastUpdated: '2025-08-11',
    readTime: 8,
    author: 'David Larsen'
  },
  {
    id: 4,
    title: 'Building High-Performance Support Teams in 2025',
    slug: 'building-high-performance-support-teams-2025',
    excerpt: 'Learn the key strategies for scaling customer support teams while maintaining quality and team satisfaction. From hiring practices to performance metrics, discover what works.',
    content: '',
    image: '/zendesk-slackbot.png',
    category: 'Leadership',
    tags: ['team-building', 'support', 'leadership', 'scaling'],
    date: '2025-01-15',
    readTime: 8,
    author: 'David Larsen'
  },
  {
    id: 5,
    title: 'The Art of Technical Troubleshooting: A Support Leader\'s Guide',
    slug: 'art-of-technical-troubleshooting-guide',
    excerpt: 'Debugging complex technical issues requires more than just technical knowledge. Here\'s how to build systematic approaches that work every time.',
    content: '',
    image: '/customer-success.png',
    category: 'Technical',
    tags: ['troubleshooting', 'technical-support', 'processes', 'debugging'],
    date: '2024-12-20',
    readTime: 12,
    author: 'David Larsen'
  },
  {
    id: 6,
    title: 'Customer Success Metrics That Actually Matter',
    slug: 'customer-success-metrics-that-matter',
    excerpt: 'Move beyond vanity metrics to track what really drives customer satisfaction and business growth. A deep dive into meaningful KPIs.',
    content: '',
    image: '/markdowner.png',
    category: 'Strategy',
    tags: ['metrics', 'customer-success', 'kpis', 'analytics'],
    date: '2024-12-10',
    readTime: 6,
    author: 'David Larsen'
  },
  {
    id: 7,
    title: 'Automation vs. Human Touch: Finding the Right Balance',
    slug: 'automation-vs-human-touch-balance',
    excerpt: 'When should you automate customer support processes, and when is the human touch irreplaceable? Learn to make these critical decisions.',
    content: '',
    image: '/pro.png',
    category: 'Technology',
    tags: ['automation', 'ai', 'customer-experience', 'process-improvement'],
    date: '2024-11-25',
    readTime: 10,
    author: 'David Larsen'
  },
  {
    id: 8,
    title: 'Remote Team Leadership: Lessons from Baltimore',
    slug: 'remote-team-leadership-lessons',
    excerpt: 'Managing distributed support teams requires different skills. Here are the strategies that work for building culture and maintaining performance remotely.',
    content: '',
    image: '/threeo.jpg',
    category: 'Leadership',
    tags: ['remote-work', 'team-culture', 'management', 'distributed-teams'],
    date: '2024-11-10',
    readTime: 7,
    author: 'David Larsen'
  },
  {
    id: 9,
    title: 'API Documentation: A Support Team\'s Secret Weapon',
    slug: 'api-documentation-support-secret-weapon',
    excerpt: 'Great API docs don\'t just help developers—they empower support teams to solve complex technical issues faster. Here\'s how to leverage them.',
    content: '',
    image: '/threeo.jpg',
    category: 'Technical',
    tags: ['api', 'documentation', 'technical-support', 'developer-tools'],
    date: '2024-10-28',
    readTime: 9,
    author: 'David Larsen'
  }
]