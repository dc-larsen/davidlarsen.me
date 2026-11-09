---
title: Thoughts on leadership
date: 2025-08-11
excerpt: "TLDR: I try to make good work easier. Set the intent, raise the floor, and get out of the way. A deep dive into leader-leader thinking and practical approaches to engineering leadership."
image: /images/leadership-badge-1200x675-letterbox.png
banner: /images/thoughts-on-leadership.png
category: Leadership
tags:
  - leadership
  - management
  - team-culture
  - engineering
readTime: 8
author: David Larsen
---

**TLDR:** I try to make good work easier. Set the intent, raise the floor, and get out of the way.

Two things shaped how I lead: David Marquet's *Turn the Ship Around!* and my time in support engineering at Contrast Security. The book pushed me toward leader-leader thinking. Contrast gave me the reps to put it into practice when things were moving fast.

## Table of contents

- [Intent over permission](#intent-over-permission)
- [Principles at a glance](#principles-at-a-glance)
- [Walkthrough: moving support into QBRs at Contrast](#walkthrough-moving-support-into-qbrs-at-contrast)
- [Language do's and don'ts](#language-dos-and-donts)
- [Post-mortems that change something](#post-mortems-that-change-something)
- [Building on strengths at Synapse](#building-on-strengths-at-synapse)
- [Try it yourself](#try-it-yourself)
- [Next steps](#next-steps)

## Intent over permission

Leader-leader sounds abstract until you change the language. The quickest unlock I have seen is swapping "Can I…?" for "I intend to…". It forces clear thinking. What is the goal. What is the risk. Where are the guardrails. How do we roll back. When intent statements show up every day, the team stops waiting around. My job becomes coach and unblocker.

## Principles at a glance

| Principle | What it looks like | Why it works | How to try it |
| --- | --- | --- | --- |
| Push control to where the info lives | Decisions made by the person closest to the work | Faster, fewer translation losses | Replace approvals with "I intend to…" plus risk and rollback |
| Clarity over control | Clear why, constraints, and definition of done | People pick better how when the why is visible | Publish simple briefs and visible checklists |
| Certify, not brief | Pairing, dry runs, and explicit sign-off before solo ownership | Reduces guesswork under pressure | Add a two-run rule before someone flies solo |
| Short feedback loops | Post-mortems within 24 hours and visible actions | Learning compounds, drift shrinks | Put one doc change and one mechanism change on every Sev1 or Sev2 |
| Mechanisms, not memos | Fields, runbooks, automations | Behaviors stick when encoded | Add the field, add the step, wire the alert |

## Walkthrough: moving support into QBRs at Contrast

This was not an outage story. It was a growth push. Our department set an aggressive goal to run more QBRs. I was on the support team and had just taken over corporate accounts.

1. **State intent**

   I told my manager: *I intend to have support participate in this initiative with corporate accounts.* Clear scope and a clear why.

2. **Share a lightweight template**

   I brought a QBR outline tuned for our customers: a few support metrics tied to value moments, top friction points, and a short roadmap of fixes with owners and dates.

3. **Run the first rep fast**

   We booked the first customer that same week. Short deck. Most of the time spent on actions.

4. **Feed findings back into the system**

   Items flowed to product, docs, and support runbooks. Nothing lived only in slides.

5. **Scale what worked**

   Over the next couple of weeks, support ran QBRs with about half a dozen customers. The win was the role shift. Support showed up as an account partner with real inputs and follow-through.

## Language do's and don'ts

| Do | Do Not |
| --- | --- |
| "I intend to rotate keys for tenant X to close gap Y. Risk is session churn. Rollback is flag off within two minutes." | "Should I rotate keys?" |
| "Ship the fix behind a feature flag so that we can validate with customer A before broad release." | "We will ship soon." |
| "Decision: option B because lower blast radius. We will revisit if error rate exceeds 2%." | "We picked B." |
| "By Friday, outcome is a 20% drop in repeat tickets on topic Z." | "We will improve Z." |
| "Post-mortem action: add runbook step 3 and automate alerting." | "We will be more careful." |

## Post-mortems that change something

I prefer post-mortem over after-action review. The rule is simple. If nothing changes, we did not learn. Each post-mortem closes with one process change, one doc update, and one automation or alert. We also keep a slim decision log so context does not evaporate when people rotate.

**Post-mortem starter (copy and adapt):**

> *What happened:* Brief timeline with key events
>
> *Why it happened:* Root causes, not just triggers
>
> *What we learned:* Concrete insights about our system/process
>
> *Actions taken:*
>
> - Process change: [specific change with owner and date]
> - Documentation update: [what was added/changed]
> - Technical improvement: [automation/alert/monitoring added]

## Building on strengths at Synapse

At Synapse, I inherited a strong foundation. The team was already doing great work - they just needed systems to scale their impact. We focused on three areas:

- **Knowledge capture:** Moved from Slack threads to searchable documentation
- **Decision frameworks:** Created simple templates for common choices
- **Feedback loops:** Regular retrospectives with actionable outcomes

The key insight: great people can do amazing work when you remove friction from their path.

## Try it yourself

Start small. Pick one area where your team asks permission frequently. Replace the approval process with an "I intend to..." template that includes:

- Clear objective
- Risk assessment
- Rollback plan
- Success metrics

Run it for two weeks. Measure the time saved and decisions made. Adjust the template based on what you learn.

## Next steps

Leadership isn't about having all the answers. It's about creating environments where good answers emerge quickly and safely. The goal isn't to eliminate all mistakes - it's to make them cheap and educational.

What's one place in your team where you could replace "Can I?" with "I intend to?" Start there.

## Resources
For more practical leadership templates and frameworks, check out my [People Management playbook on GitHub](https://github.com/dc-larsen/support-playbooks/tree/main/people-management).
