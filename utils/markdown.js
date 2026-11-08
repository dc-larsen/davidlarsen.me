import { Marked } from 'marked'

// Blog bodies are authored in this repo. They are not visitor input.
// External links get target=_blank and rel=noopener so a post cannot
// hand the opener window to the destination page.
// Heading ids are generated here so a hand-written table of contents
// can link to #intent-over-permission and match the rendered h2.

const marked = new Marked({ gfm: true, breaks: false })

marked.use({
  renderer: {
    heading({ tokens, depth }) {
      const text = this.parser.parseInline(tokens)
      const id = slugify(text.replace(/<[^>]+>/g, ''))
      return `<h${depth} id="${escapeAttr(id)}">${text}</h${depth}>\n`
    },
    link({ href, title, tokens }) {
      const text = this.parser.parseInline(tokens)
      const external = /^https?:\/\//.test(href || '')
      const titleAttr = title ? ` title="${escapeAttr(title)}"` : ''
      const extra = external ? ' target="_blank" rel="noopener noreferrer"' : ''
      return `<a href="${escapeAttr(href || '')}"${titleAttr}${extra}>${text}</a>`
    },
    image({ href, title, text }) {
      const titleAttr = title ? ` title="${escapeAttr(title)}"` : ''
      return `<img src="${escapeAttr(href || '')}" alt="${escapeAttr(text || '')}"${titleAttr} />`
    }
  }
})

export function renderMarkdown(markdown) {
  return marked.parse(markdown || '', { async: false })
}

export function slugify(value) {
  const plain = String(value)
    .replace(/<[^>]+>/g, '')
    .replace(/&#(\d+);/g, (_, code) => String.fromCharCode(Number(code)))
    .replace(/&amp;/g, ' and ')
    .replace(/&quot;/g, '')
    .replace(/&lt;/g, '')
    .replace(/&gt;/g, '')
  return plain
    .toLowerCase()
    .replace(/['’]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

function escapeAttr(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
}
