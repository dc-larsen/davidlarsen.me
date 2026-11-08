---
title: "One-on-one autopilot: the Zendesk → Slack cheat sheet"
date: 2025-08-13
excerpt: A lightweight bot that checks Google Calendar for upcoming 1:1s, pulls a focused Zendesk snapshot for the attendee, and posts a compact summary to Slack so managers arrive prepped without extra work.
image: /images/slackbot.png
category: Technical
tags:
  - zendesk
  - slack
  - github-actions
  - google-calendar
  - service-accounts
  - 1:1s
  - cs-ops
  - automation
  - manager-tooling
readTime: 7
author: David Larsen
---

I wanted a manager to be able to show up to every 1:1 with a clean cheat sheet and zero prep. The idea first hit when my manager was juggling about 15 direct reports and weekly 1:1s. I did not build the tool at that company and they never used it, but the pain point stuck with me. Later I coded a small bot to make the prep disappear: show up with a shared summary of recent work and a few discussion flags. No homework. Just signal.

## What it does (by system)

### What happens in Google Calendar

- GitHub Actions checks Google Calendar every 5 minutes for upcoming meetings with "1on1" in the title.
- When it finds one starting soon, it grabs the attendee email that is not the organizer (the direct report) and the start time.
- If the meeting is within the lead window (about 30 minutes), it triggers the next step.

### What happens in Zendesk

- Using that attendee email, the bot looks up the matching Zendesk user.
- It pulls a focused snapshot for the last 7 days (configurable): tickets handled and solved, positive CSAT count and ratio, reopens, SLA breaches, urgent or open items, on-hold items older than N days, and tickets older than N days.
- It collects links for anything that needs attention so you can jump straight in.

### What happens in Slack

- The bot formats the Zendesk snapshot into a compact, readable post: headline stats first, flags with links next, and a short "prompts for the 1:1" block.
- It posts the summary to the designated Slack channel about 30 minutes before the meeting so both manager and rep see the same truth.

## Using it in your 1:1

1. Put "1on1" in your recurring meeting title and invite the rep's email that matches their Zendesk user.
2. About 30 minutes before the meeting, a summary lands in Slack with links and a few prompts.
3. Use the time for patterns, coaching, and decisions instead of screensharing dashboards.

## Sample Slack post

![Sample Slack post](/images/sample-slack-post.png)

## Setup and docs

For installation, configuration, and environment variables, see the README:
[https://github.com/dc-larsen/zendesk-slackbot#readme](https://github.com/dc-larsen/zendesk-slackbot#readme)
