// Same rules as the previous markdown renderer, so a hand-written
// table of contents can link to #intent-over-permission and match the h2.
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
