import { readdirSync, readFileSync, existsSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { parseFrontmatter } from '../utils/frontmatter.js'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const blogDir = join(root, 'content/blog')
const errors = []

const files = readdirSync(blogDir).filter(name => name.endsWith('.md') && !name.startsWith('_'))

if (files.length === 0) {
  errors.push('content/blog has no posts')
}

for (const name of files) {
  const slug = name.replace(/\.md$/, '')
  const label = `content/blog/${name}`

  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) {
    errors.push(`${label}: filename must be a lowercase kebab-case slug`)
  }

  const page = join(root, 'pages/blog', `${slug}.vue`)
  if (existsSync(page)) {
    errors.push(`${label}: delete pages/blog/${slug}.vue. The markdown file is the post.`)
  }

  const { data, body } = parseFrontmatter(readFileSync(join(blogDir, name), 'utf8'))
  for (const key of ['title', 'date', 'excerpt', 'image', 'category']) {
    if (data[key] === undefined || data[key] === '') {
      errors.push(`${label}: missing ${key}`)
    }
  }
  if (data.date && !/^\d{4}-\d{2}-\d{2}$/.test(String(data.date))) {
    errors.push(`${label}: date must be YYYY-MM-DD`)
  }
  if (data.tags !== undefined && !Array.isArray(data.tags)) {
    errors.push(`${label}: tags must be a list`)
  }
  if (data.readTime !== undefined && (!Number.isInteger(data.readTime) || data.readTime < 1)) {
    errors.push(`${label}: readTime must be a positive integer, or omit it`)
  }
  if (!String(body || '').trim()) {
    errors.push(`${label}: body is empty`)
  }
  for (const key of ['image', 'banner']) {
    if (!data[key]) continue
    const value = String(data[key])
    if (!value.startsWith('/images/')) {
      errors.push(`${label}: ${key} must start with /images/`)
      continue
    }
    if (!existsSync(join(root, 'public', value))) {
      errors.push(`${label}: ${key} file is missing at public${value}`)
    }
  }
}

if (errors.length) {
  console.error('Blog check failed:')
  for (const error of errors) console.error(`- ${error}`)
  process.exit(1)
}

console.log(`Blog check ok (${files.length} posts)`)
