---
title: Post title
date: 2026-11-08
excerpt: One or two sentences. This is the card text and the meta description.
image: /images/example.png
# banner: /images/example-hero.png
category: Customer Success
tags:
  - example
# readTime: 6
author: David Larsen
# draft: true
---

Write the post in Markdown under the frontmatter.

The filename is the URL. `content/blog/my-post.md` is served at `/blog/my-post`. Do not create a Vue page for it.

`image` is the card on /blog. Set `banner` only when the article hero should be a different file. Both files live in `public/images/`.

Leave `readTime` unset to estimate it from the word count. Set `draft: true` (unquoted) to keep the file out of the site.

Headings become anchors. `## Intent over permission` can be linked as `#intent-over-permission`.

Raw HTML is fine for a figure:

<img src="/images/example.png" alt="Describe the image" class="w-full rounded-lg shadow-lg" />

<p class="caption">Optional caption</p>
