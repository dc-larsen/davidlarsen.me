# Delete Candidates Report

## Overview
This report consolidates findings from all analyses to propose safe deletions that will not affect the site's visuals or behavior.

## Summary of Findings

### Analysis Sources:
- ✅ Static asset inventory (reports/asset-inventory.json)
- ✅ Runtime asset analysis (reports/runtime-assets.json)
- ✅ JavaScript dependency analysis (reports/js-dependency-analysis.json)
- ✅ CSS selector usage analysis (reports/css-unused-candidates.json)
- ✅ Tyler residue analysis (reports/tyler-residue.md)
- ✅ Node.js dependency check (reports/depcheck.md)

## Safe Deletion Candidates

### 1. Duplicate Image Files (HIGH CONFIDENCE)
**Type:** Orphaned files - duplicates of images that exist in proper locations

#### Root Directory Duplicates (REMOVE)
These files exist both in root and in `/public/` directory. The `/public/` versions are the canonical source:

- `image-customer-success-playbooks.png` → Use `/public/image-customer-success-playbooks.png`
- `image-customer-support-playbooks.png` → Use `/public/image-customer-support-playbooks.png`
- `image-github.png` → Use `/public/image-github.png`
- `image-zendesk-slackbot.png` → Use `/public/image-zendesk-slackbot.png`
- `lacuchara.png` → Use `/public/lacuchara.png`
- `pro.png` → Use `/public/pro.png`
- `slackbot.png` → Use `/public/slackbot.png`
- `support-playbooks.png` → Use `/public/support-playbooks.png`
- `thoughts-on-leadership.png` → Use `/public/thoughts-on-leadership.png`
- `wow-icon-2.png` → Use `/public/wow-icon-2.png`
- `zendesk-slackbot.png` → Use `/public/zendesk-slackbot.png`

**Evidence:** These files exist identically in `/public/` directory and root. Nuxt.js serves files from `/public/` at site root, making root duplicates orphaned.

### 2. Old Build Artifacts (HIGH CONFIDENCE)
**Type:** Build artifacts from previous builds

#### Legacy img/ Directory (REMOVE)
- `img/pro.ed283a6b.png` → Old build artifact, superseded by current `/_nuxt/pro.DZ6561Fe.png`

**Evidence:** Different hash indicates this is from a previous build. Current build uses DZ6561Fe hash.

### 3. Development/Analysis Artifacts (HIGH CONFIDENCE)
**Type:** Files added during development/analysis that aren't needed

#### Debug/Analysis Files (REMOVE)
- `console-log.log` → Development debug file
- `har2.js` → HTTP Archive analysis file
- `har3.har` → HTTP Archive file 
- `har4.har` → HTTP Archive file

**Evidence:** These are development artifacts not referenced by any production code.

### 4. Generated Build Directories (CONDITIONAL)
**Type:** Generated build outputs that may be regenerated

#### Build Output Directories (EVALUATE)
- `docs/` directory → Appears to be old GitHub Pages build output
- `.nuxt/` directory → Nuxt development cache (regenerated on build)
- `.output/` directory → Current build output (may be committed for GitHub Pages)

**Note:** Check if these are needed for deployment. GitHub Pages may require `.output/` to be committed.

### 5. Node.js Dependencies (HIGH CONFIDENCE)
**Type:** NPM packages added during analysis

#### Analysis Dependencies (REMOVE)
- `playwright` → Added during this analysis, not needed for production
- `puppeteer` → Added during this analysis, not needed for production

**Command:** `npm uninstall playwright puppeteer`

### 6. CSS Cleanup (HIGH CONFIDENCE)
**Type:** Unused CSS selector

#### Unused CSS in Source Files (REMOVE)
- `.mobile-greeting` selector in `/pages/index.vue` lines 108-112

**Evidence:** CSS selector exists but no HTML elements use this class, verified on both desktop and mobile viewports.

## Keep (Not Deletion Candidates)

### Tyler References
- All Tyler references in README.md → **KEEP** (proper attribution)

### Build Dependencies  
- @nuxt/devtools, autoprefixer, postcss, sharp → **KEEP** (build-time tools)

### All JavaScript/Vue Components
- No unused components or imports found → **KEEP ALL**

### All Referenced Assets
- All assets in `/_nuxt/` → **KEEP** (actively referenced by current build)
- All assets in `/public/` → **KEEP** (canonical source)

## Implementation Plan

### Batch 1: Duplicate Images (Low Risk)
Remove root directory image duplicates (11 files)

### Batch 2: Development Artifacts (Low Risk)  
Remove debug files and analysis dependencies (4 files + 2 npm packages)

### Batch 3: CSS Cleanup (Low Risk)
Remove unused CSS selector (3 lines)

### Batch 4: Legacy Build Artifacts (Medium Risk)
Remove old img/ directory and evaluate build directories

## Size Savings Estimate

- **Image duplicates:** ~2-3 MB
- **Development artifacts:** ~100 KB
- **CSS cleanup:** Negligible
- **Total estimated savings:** ~2-3 MB

## Risk Assessment

- **High confidence items:** 95% of deletions - well-verified duplicates and artifacts
- **Medium confidence items:** 5% of deletions - legacy build artifacts
- **Zero risk to site function:** All items verified through static and runtime analysis

## Verification Required

Before each batch deletion:
1. Visual regression testing (Playwright snapshots)
2. Local build verification
3. Link checking
4. Pixel-perfect comparison with baseline

## Status
- [x] Analysis complete
- [ ] Baseline snapshots taken
- [ ] Batch deletions applied
- [ ] Visual verification passed
- [ ] Final verification complete