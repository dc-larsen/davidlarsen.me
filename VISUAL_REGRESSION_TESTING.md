# Visual Regression Testing Setup

This project includes comprehensive visual regression testing using Playwright to capture baseline screenshots and compare changes across different viewport sizes.

## 📁 Directory Structure

```
reports/
├── baseline-snapshots.json           # Baseline report with metadata
└── snapshots/
    ├── before/                       # Baseline screenshots
    │   ├── home-desktop.png
    │   ├── home-tablet.png
    │   ├── home-mobile.png
    │   └── ... (15 total screenshots)
    ├── after/                        # Screenshots after changes
    └── diff/                         # Difference images
```

## 🖥️ Viewport Sizes

- **Desktop**: 1920x1080
- **Tablet**: 768x1024  
- **Mobile**: 375x667

## 📄 Pages Captured

1. **Home** - http://localhost:3000/
2. **About** - http://localhost:3000/about
3. **Blog** - http://localhost:3000/blog
4. **Projects** - http://localhost:3000/projects
5. **Blog Post** - http://localhost:3000/blog/thoughts-on-leadership

## 🚀 Usage

### Taking Baseline Snapshots
```bash
# Start the dev server first
npm run dev

# In another terminal, take baseline snapshots
node take-baseline-snapshots.js
```

### Taking After Snapshots (for comparison)
```bash
# After making changes, take new snapshots
node compare-snapshots.js after
```

### Viewing Results
- Baseline report: `reports/baseline-snapshots.json`
- Screenshots: `reports/snapshots/before/`
- File sizes range from 75KB (mobile home) to 1.2MB (desktop blog post)

## 📊 Baseline Report

The baseline report (`reports/baseline-snapshots.json`) contains:
- Timestamp of when baseline was captured
- All page URLs and screenshot paths
- Total screenshot count (15)
- Viewport size specifications

## 🔧 Configuration

- **Playwright Config**: `playwright.config.js`
- **Screenshot Script**: `take-baseline-snapshots.js`
- **Comparison Helper**: `compare-snapshots.js`

## ✅ Verification

All 15 baseline screenshots were successfully captured and verified:
- ✅ 5 pages × 3 viewports = 15 total screenshots
- ✅ All files exist with proper file sizes
- ✅ Full-page screenshots with image loading
- ✅ Network idle state before capture
- ✅ Disabled animations for consistency

## 🎯 Next Steps

1. Make your code changes
2. Run `node compare-snapshots.js after` to capture new state
3. Compare before/after images manually or with image comparison tools
4. Update baseline if changes are intentional

---

*Generated on 2025-08-15 for visual regression testing baseline establishment*