import { getCollection, type CollectionEntry } from 'astro:content'

export type Post = CollectionEntry<'blog'>

export async function getPosts() {
  const posts = await getCollection('blog', ({ id, data }) => !id.startsWith('_') && data.draft !== true)
  return posts.sort((a, b) => {
    if (a.data.date === b.data.date) return a.id.localeCompare(b.id)
    return a.data.date < b.data.date ? 1 : -1
  })
}

// 'YYYY-MM-DD' parses as UTC midnight, which is the previous evening in
// Baltimore. Build the date from the calendar parts so the published day stays put.
export function formatDate(dateString: string) {
  const [year, month, day] = String(dateString).split('-').map(Number)
  if (!year || !month || !day) return String(dateString || '')
  return new Date(year, month - 1, day).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export function readingMinutes(markdown: string, override?: number) {
  if (override && Number.isInteger(override) && override > 0) return override
  const words = markdown
    .replace(/<[^>]+>/g, ' ')
    .replace(/[#>*_[\]()!`-]/g, ' ')
    .split(/\s+/)
    .filter(Boolean).length
  return Math.max(1, Math.round(words / 230))
}

export function postSlug(post: Post) {
  return post.id.replace(/\.md$/, '')
}
