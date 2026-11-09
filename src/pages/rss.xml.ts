import rss from '@astrojs/rss'
import type { APIRoute } from 'astro'
import { getPosts, postSlug } from '../lib/posts'

export const GET: APIRoute = async context => {
  const posts = await getPosts()
  return rss({
    title: 'David Larsen',
    description: 'Thoughts on work and whatever I find interesting.',
    site: context.site ?? 'https://davidlarsen.me',
    items: posts.map(post => ({
      title: post.data.title,
      pubDate: new Date(`${post.data.date}T12:00:00Z`),
      description: post.data.excerpt,
      link: `/blog/${postSlug(post)}`,
    })),
  })
}
