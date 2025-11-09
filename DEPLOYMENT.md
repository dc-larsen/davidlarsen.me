# Deployment Troubleshooting Guide

This document provides troubleshooting steps for common deployment issues with the Nuxt.js static site on GitHub Pages.

## Overview

This site uses a custom GitHub Actions workflow to deploy Nuxt.js static files instead of the default Jekyll processing. The key files involved are:

- `.github/workflows/deploy.yml` - Custom deployment workflow
- `.nojekyll` - Disables Jekyll processing
- `nuxt.config.ts` - Nuxt configuration with static generation settings
- `public/favicon.ico` - Favicon file

## Common Issues and Solutions

### 1. Assets Return 404 Errors (Console Errors)

**Symptoms:**
- Browser console shows 404 errors for `/_nuxt/*.js`, `/_nuxt/*.css`, or `/_nuxt/*.png` files
- Website appears broken or unstyled
- Profile image doesn't load

**Diagnosis:**
```bash
# Check if assets are loading
curl -I https://davidlarsen.me/_nuxt/pro.DZ6561Fe.png
curl -I https://davidlarsen.me/_nuxt/BY9hTKhk.js

# Compare asset filenames between deployed site and local build
curl -s https://davidlarsen.me/ | grep -o '_nuxt/[^"]*\.js' | head -5
ls .output/public/_nuxt/*.js | head -5
```

**Solution:**
1. Check that the GitHub Actions workflow is running successfully:
   ```bash
   gh run list --limit 5
   ```

2. If Jekyll deployment is running instead of our custom workflow, update `.nojekyll`:
   ```bash
   echo "$(date)" > .nojekyll
   git add .nojekyll
   git commit -m "Force deployment refresh"
   git push
   ```

3. Regenerate the static site with fresh build IDs:
   ```bash
   npm run generate
   git add -A
   git commit -m "Regenerate static site"
   git push
   ```

### 2. Favicon Not Loading

**Symptoms:**
- `https://davidlarsen.me/favicon.ico` returns 404
- No favicon appears in browser tab

**Diagnosis:**
```bash
curl -I https://davidlarsen.me/favicon.ico
```

**Solution:**
1. Ensure `favicon.ico` exists in the `public/` directory:
   ```bash
   ls -la public/favicon.ico
   ```

2. Check that favicon is referenced correctly in `nuxt.config.ts` (lines 18-22):
   ```typescript
   { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico?v=3' },
   { rel: 'shortcut icon', type: 'image/x-icon', href: '/favicon.ico?v=3' },
   ```

3. Verify favicon appears in the generated build:
   ```bash
   ls -la .output/public/favicon.ico
   ```

### 3. Build ID Mismatch

**Symptoms:**
- Site appears to load old content
- Asset filenames don't match between local and deployed

**Diagnosis:**
```bash
# Check build ID in deployed site
curl -s https://davidlarsen.me/ | grep -o '_payload.json?[^"]*'

# Check local build ID
grep -o '"buildId":"[^"]*"' .output/public/index.html
```

**Solution:**
1. Regenerate local build and push:
   ```bash
   npm run generate
   git add .output/
   git commit -m "Update build with fresh IDs"
   git push
   ```

## File Structure

Important directories and files for deployment:

```
├── .github/workflows/deploy.yml    # GitHub Actions workflow
├── .nojekyll                       # Disables Jekyll
├── nuxt.config.ts                  # Nuxt configuration
├── public/
│   ├── favicon.ico                 # Favicon file
│   └── ...                         # Other static assets
└── .output/public/                 # Generated static site
    ├── index.html                  # Main page
    ├── favicon.ico                 # Copied favicon
    └── _nuxt/                      # Generated assets
        ├── *.js                    # JavaScript bundles
        ├── *.css                   # Stylesheets
        └── *.png                   # Images
```

## Deployment Process

1. Code changes pushed to `main` branch
2. GitHub Actions workflow triggers (`.github/workflows/deploy.yml`)
3. Workflow runs `npm run generate` to create `.output/public/`
4. Static files uploaded to GitHub Pages
5. Site deployed to `https://davidlarsen.me/`

## Key Configuration Points

### nuxt.config.ts
- **Favicon configuration** (lines 18-22): Ensures favicon loads correctly
- **Nitro prerender settings** (lines 37-40): Configures static site generation
- **Security headers** (lines 45-51): Sets CSP and other security headers

### .github/workflows/deploy.yml
- **Node.js version** (line 38): Must be 20+ for Nuxt 3.18.1+
- **Build path** (line 53): Uploads `.output/public/` directory
- **Workflow permissions** (lines 19-22): Required for GitHub Pages deployment

### .nojekyll
- Must exist in root directory
- Prevents GitHub Pages from using Jekyll processing
- Update timestamp to force cache refresh if needed

## Emergency Recovery

If the site is completely broken:

1. **Check workflow status:**
   ```bash
   gh run list --limit 3
   gh run view [run-id] --log
   ```

2. **Force complete rebuild:**
   ```bash
   rm -rf .output/ .nuxt/
   echo "$(date)" > .nojekyll
   npm run generate
   git add -A
   git commit -m "Emergency: Force complete rebuild"
   git push
   ```

3. **Verify deployment:**
   ```bash
   # Wait for deployment to complete, then test
   curl -I https://davidlarsen.me/
   curl -I https://davidlarsen.me/favicon.ico
   curl -I https://davidlarsen.me/_nuxt/pro.DZ6561Fe.png
   ```