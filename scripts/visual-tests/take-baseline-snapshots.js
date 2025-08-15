import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

const BASE_URL = 'http://localhost:3000';
const SNAPSHOTS_DIR = './reports/snapshots/before';
const REPORT_PATH = './reports/baseline-snapshots.json';

// Viewport configurations
const VIEWPORTS = {
  desktop: { width: 1920, height: 1080 },
  tablet: { width: 768, height: 1024 },
  mobile: { width: 375, height: 667 }
};

// Pages to capture
const PAGES = [
  { name: 'home', url: '/' },
  { name: 'about', url: '/about' },
  { name: 'blog', url: '/blog' },
  { name: 'projects', url: '/projects' },
  { name: 'thoughts-on-leadership', url: '/blog/thoughts-on-leadership' }
];

async function waitForPageLoad(page) {
  // Wait for the page to load completely
  await page.waitForLoadState('networkidle');
  
  // Wait for images to load
  await page.evaluate(() => {
    return Promise.all(
      Array.from(document.images, img => {
        if (img.complete) return Promise.resolve();
        return new Promise(resolve => {
          img.addEventListener('load', resolve);
          img.addEventListener('error', resolve);
        });
      })
    );
  });
  
  // Additional wait for any dynamic content
  await page.waitForTimeout(1000);
}

async function takeScreenshots() {
  console.log('🎭 Starting Playwright for visual regression testing...');
  
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();
  
  const results = {
    timestamp: new Date().toISOString(),
    snapshots: [],
    total_screenshots: 0,
    viewport_sizes: {
      desktop: `${VIEWPORTS.desktop.width}x${VIEWPORTS.desktop.height}`,
      tablet: `${VIEWPORTS.tablet.width}x${VIEWPORTS.tablet.height}`,
      mobile: `${VIEWPORTS.mobile.width}x${VIEWPORTS.mobile.height}`
    }
  };
  
  let totalScreenshots = 0;
  
  for (const pageInfo of PAGES) {
    console.log(`📸 Taking screenshots for ${pageInfo.name} page...`);
    
    const pageResult = {
      page: pageInfo.name,
      url: `${BASE_URL}${pageInfo.url}`,
      screenshots: {}
    };
    
    for (const [viewportName, viewport] of Object.entries(VIEWPORTS)) {
      console.log(`  📱 ${viewportName} (${viewport.width}x${viewport.height})`);
      
      // Set viewport
      await page.setViewportSize(viewport);
      
      // Navigate to page
      await page.goto(`${BASE_URL}${pageInfo.url}`);
      
      // Wait for page to fully load
      await waitForPageLoad(page);
      
      // Take screenshot
      const filename = `${pageInfo.name}-${viewportName}.png`;
      const filepath = path.join(SNAPSHOTS_DIR, filename);
      
      await page.screenshot({
        path: filepath,
        fullPage: true,
        animations: 'disabled'
      });
      
      pageResult.screenshots[viewportName] = `reports/snapshots/before/${filename}`;
      totalScreenshots++;
      
      console.log(`    ✅ Saved: ${filename}`);
    }
    
    results.snapshots.push(pageResult);
  }
  
  results.total_screenshots = totalScreenshots;
  
  // Save results to JSON report
  fs.writeFileSync(REPORT_PATH, JSON.stringify(results, null, 2));
  
  await browser.close();
  
  console.log(`\n🎉 Successfully captured ${totalScreenshots} screenshots!`);
  console.log(`📋 Baseline report saved to: ${REPORT_PATH}`);
  
  return results;
}

async function verifyScreenshots(results) {
  console.log('\n🔍 Verifying all screenshots were created...');
  
  let allSuccess = true;
  const missingFiles = [];
  
  for (const snapshot of results.snapshots) {
    for (const [viewport, filepath] of Object.entries(snapshot.screenshots)) {
      const fullPath = path.resolve(filepath);
      if (!fs.existsSync(fullPath)) {
        allSuccess = false;
        missingFiles.push(filepath);
        console.log(`❌ Missing: ${filepath}`);
      } else {
        const stats = fs.statSync(fullPath);
        console.log(`✅ ${path.basename(filepath)} (${Math.round(stats.size / 1024)}KB)`);
      }
    }
  }
  
  if (allSuccess) {
    console.log(`\n🎊 All ${results.total_screenshots} screenshots verified successfully!`);
  } else {
    console.log(`\n⚠️  ${missingFiles.length} screenshots are missing:`);
    missingFiles.forEach(file => console.log(`   - ${file}`));
  }
  
  return allSuccess;
}

async function main() {
  try {
    console.log('🚀 Starting baseline visual regression testing...');
    console.log(`📍 Target URL: ${BASE_URL}`);
    console.log(`📁 Screenshots directory: ${SNAPSHOTS_DIR}`);
    console.log(`📊 Report file: ${REPORT_PATH}\n`);
    
    const results = await takeScreenshots();
    const allVerified = await verifyScreenshots(results);
    
    if (allVerified) {
      console.log('\n✨ Baseline snapshots completed successfully!');
      console.log(`📋 View the full report at: ${path.resolve(REPORT_PATH)}`);
    } else {
      console.log('\n❌ Some screenshots failed to be created. Please check the logs above.');
      process.exit(1);
    }
    
  } catch (error) {
    console.error('💥 Error taking baseline snapshots:', error);
    process.exit(1);
  }
}

main();