import { parseFrontmatter } from './frontmatter'
import { renderMarkdown } from './markdown'

// One markdown file in content/blog/ is one post.
// The filename is the URL slug. Do not also create pages/blog/<slug>.vue.
// Files whose names start with "_" (the template) are ignored.
// `draft: true` omits the post from the index and from getPost().

const rawPosts = import.meta.glob('../content/blog/*.md', {
  query: '?raw',
  import: 'default',
  eager: true
})

const posts = Object.entries(rawPosts)
  .map(([path, raw]) => toPost(path, raw))
  .filter(post => post && !post.draft)
  .sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : a.slug.localeCompare(b.slug)))

function toPost(path, raw) {
  const slug = path.split('/').pop().replace(/\.md$/, '')
  if (slug.startsWith('_')) return null

  const { data, body } = parseFrontmatter(raw)
  const tags = Array.isArray(data.tags) ? data.tags.map(String) : []

  return {
    slug,
    title: String(data.title || slug),
    date: String(data.date || ''),
    excerpt: String(data.excerpt || ''),
    image: String(data.image || ''),
    banner: data.banner ? String(data.banner) : '',
    category: String(data.category || ''),
    tags,
    author: data.author ? String(data.author) : 'David Larsen',
    readTime: Number(data.readTime) || readingMinutes(body),
    draft: data.draft === true,
    html: renderMarkdown(body)
  }
}

function readingMinutes(markdown) {
  const words = markdown
    .replace(/<[^>]+>/g, ' ')
    .replace(/[#>*_[\]()!`-]/g, ' ')
    .split(/\s+/)
    .filter(Boolean).length
  return Math.max(1, Math.round(words / 230))
}

export function getPosts() {
  return posts
}

export function getPost(slug) {
  return posts.find(post => post.slug === slug) || null
}

// 'YYYY-MM-DD' parses as UTC midnight, which is the previous evening in
// Baltimore. Build the date from the calendar parts so the published day stays put.
export function formatDate(dateString) {
  const [year, month, day] = String(dateString).split('-').map(Number)
  if (!year || !month || !day) return String(dateString || '')
  return new Date(year, month - 1, day).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
