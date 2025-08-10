# David Larsen - Personal Website

A modern, accessible personal website built with Nuxt 3 and Tailwind CSS.

## Features

- 🚀 **Nuxt 3** - Vue 3 with SSG (Static Site Generation)
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- ♿ **Accessible** - WCAG 2.1 AA compliant with keyboard navigation
- 📱 **Responsive** - Mobile-first design
- ⚡ **Fast** - Optimized for performance
- 📄 **SEO Ready** - Meta tags, OpenGraph, and structured data

## Development

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Getting Started

1. **Clone and install dependencies**
   ```bash
   git clone https://github.com/dc-larsen/davidlarsen.me.git
   cd davidlarsen.me
   npm install
   ```

2. **Start development server**
   ```bash
   npm run dev
   ```
   Visit [http://localhost:3000](http://localhost:3000)

3. **Build for production**
   ```bash
   npm run build
   ```

4. **Generate static site**
   ```bash
   npm run generate
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production  
- `npm run generate` - Generate static site for deployment
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues
- `npm run format` - Format code with Prettier
- `npm run type-check` - TypeScript type checking

## Project Structure

```
├── components/          # Vue components
│   ├── NavBar.vue      # Navigation with hamburger menu
│   ├── ProjectCard.vue # Project showcase cards
│   └── TerminalWindow.vue # Interactive terminal
├── layouts/            # Nuxt layouts
│   └── default.vue     # Main layout with navigation
├── pages/              # File-based routing
│   ├── index.vue       # Home page
│   ├── about.vue       # About page
│   └── projects.vue    # Projects showcase
├── assets/css/         # Global styles
│   └── main.css        # Tailwind + custom CSS
├── public/             # Static assets
│   ├── CNAME          # GitHub Pages domain
│   ├── *.png          # Images and icons
│   └── *.pdf          # Resume and documents
└── .github/workflows/  # CI/CD
    └── deploy.yml      # GitHub Pages deployment
```

## Adding Content

### New Pages
Create `.vue` files in `/pages` directory. Nuxt will automatically create routes based on the file structure.

### Navigation
Edit `components/NavBar.vue` to add new navigation items to the `navigation` array.

### Styling
- Global styles: `assets/css/main.css`
- Component styles: `<style>` blocks in `.vue` files
- Tailwind classes: Use utility classes throughout components

### Projects
Add new projects by editing the project data in `pages/projects.vue` and adding corresponding images to `/public`.

## Deployment

The site automatically deploys to GitHub Pages when changes are pushed to the `main` branch.

### Manual Deployment
1. Generate static files: `npm run generate`
2. Deploy `/dist` folder to any static hosting service

### Custom Domain
The `CNAME` file in `/public` configures the custom domain `davidlarsen.me`.

## Accessibility Features

- **Keyboard Navigation** - Full keyboard support with visible focus indicators
- **Screen Reader Support** - Semantic HTML and ARIA labels
- **Skip Links** - Skip to content functionality
- **Color Contrast** - WCAG AA compliant color ratios
- **Responsive Text** - Scales appropriately for different screen sizes

## Performance

- **Lighthouse Score**: 95+ across all categories
- **Bundle Size**: Minimal JavaScript, CSS optimized with Tailwind purge
- **Image Optimization**: Lazy loading and proper sizing
- **Critical CSS**: Inlined for faster initial render

## Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)  
- Safari (last 2 versions)
- Edge (last 2 versions)

## Contributing

This is a personal website, but feel free to:
- Report bugs or accessibility issues
- Suggest improvements
- Use as a template for your own site (please customize!)

## License

MIT License - see LICENSE file for details.

---

Built with ❤️ in Baltimore using [Nuxt](https://nuxt.com)