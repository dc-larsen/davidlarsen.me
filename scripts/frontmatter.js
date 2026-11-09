// Minimal frontmatter for blog posts.
// Supports one scalar per line, quoted strings, booleans, integers,
// and a YAML list written as either `key:` plus indented `- item` lines
// or an inline `[a, b]` list. It is not a general YAML parser.
// Keep draft as an unquoted `draft: true`.

export function parseFrontmatter(raw) {
  const text = String(raw).replace(/^\uFEFF/, '')
  const match = text.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/)
  if (!match) {
    return { data: {}, body: text }
  }

  const data = {}
  let currentKey = null

  for (const line of match[1].split(/\r?\n/)) {
    if (!line.trim() || line.trim().startsWith('#')) continue

    const item = line.match(/^\s+-\s+(.*)$/)
    if (item && currentKey) {
      if (!Array.isArray(data[currentKey])) data[currentKey] = []
      data[currentKey].push(unquote(item[1].trim()))
      continue
    }

    const kv = line.match(/^([A-Za-z][A-Za-z0-9_-]*):\s*(.*)$/)
    if (!kv) continue

    currentKey = kv[1]
    const value = kv[2].trim()
    if (value === '' || value === '|' || value === '>') {
      data[currentKey] = []
      continue
    }
    if (value.startsWith('[') && value.endsWith(']')) {
      data[currentKey] = value
        .slice(1, -1)
        .split(',')
        .map(part => unquote(part.trim()))
        .filter(Boolean)
      continue
    }
    data[currentKey] = coerce(unquote(value))
  }

  return { data, body: text.slice(match[0].length) }
}

function unquote(value) {
  if (
    (value.startsWith('"') && value.endsWith('"')) ||
    (value.startsWith("'") && value.endsWith("'"))
  ) {
    return value.slice(1, -1)
  }
  return value
}

function coerce(value) {
  if (value === 'true') return true
  if (value === 'false') return false
  if (/^-?\d+$/.test(value)) return Number(value)
  return value
}
