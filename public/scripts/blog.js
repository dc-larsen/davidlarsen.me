function bootBlog() {
  const root = document.getElementById('blog-categories')
  if (!root || root.dataset.ready === 'true') return
  root.dataset.ready = 'true'
  const buttons = [...document.querySelectorAll('#blog-categories button')]
  const cards = [...document.querySelectorAll('#blog-grid [data-post]')]
  const search = document.getElementById('blog-search')
  const empty = document.getElementById('blog-empty')
  let selected = 'All'

  function apply() {
    const query = (search?.value || '').trim().toLowerCase()
    let visible = 0
    for (const card of cards) {
      const category = card.dataset.category || ''
      const haystack = card.dataset.search || ''
      const show = (selected === 'All' || category === selected) && (!query || haystack.includes(query))
      card.classList.toggle('hidden', !show)
      if (show) visible += 1
    }
    empty?.classList.toggle('hidden', visible !== 0)
  }

  for (const button of buttons) {
    button.addEventListener('click', () => {
      const category = button.dataset.category || 'All'
      selected = selected === category && category !== 'All' ? 'All' : category
      for (const item of buttons) {
        const active = (item.dataset.category || 'All') === selected
        item.classList.toggle('bg-secondary', active)
        item.classList.toggle('text-white', active)
        item.classList.toggle('bg-gray-100', !active)
        item.classList.toggle('text-gray-700', !active)
      }
      apply()
    })
  }

  search?.addEventListener('input', apply)
}

document.addEventListener('astro:page-load', bootBlog)
bootBlog()
