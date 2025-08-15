import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

const BASE_URL = 'http://localhost:3000';
const BEFORE_DIR = './reports/snapshots/before';
const AFTER_DIR = './reports/snapshots/after';
const DIFF_DIR = './reports/snapshots/diff';
const BASELINE_REPORT = './reports/baseline-snapshots.json';

// Viewport configurations
const VIEWPORTS = {
  desktop: { width: 1920, height: 1080 },
  tablet: { width: 768, height: 1024 },
  mobile: { width: 375, height: 667 }
};

async function waitForPageLoad(page) {
  await page.waitForLoadState('networkidle');
  
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
  
  await page.waitForTimeout(1000);
}

async function takeAfterSnapshots() {
  console.log('📸 Taking "after" snapshots for comparison...');
  
  // Create after directory
  if (!fs.existsSync(AFTER_DIR)) {
    fs.mkdirSync(AFTER_DIR, { recursive: true });
  }
  
  // Read baseline report to know which pages to capture
  const baseline = JSON.parse(fs.readFileSync(BASELINE_REPORT, 'utf8'));
  
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();
  
  for (const snapshot of baseline.snapshots) {
    console.log(`📸 Taking after screenshots for ${snapshot.page} page...`);
    
    for (const [viewportName, viewport] of Object.entries(VIEWPORTS)) {
      console.log(`  📱 ${viewportName} (${viewport.width}x${viewport.height})`);
      
      // Set viewport
      await page.setViewportSize(viewport);
      
      // Navigate to page
      const url = snapshot.url;
      await page.goto(url);
      
      // Wait for page to fully load
      await waitForPageLoad(page);
      
      // Take screenshot
      const filename = `${snapshot.page}-${viewportName}.png`;
      const filepath = path.join(AFTER_DIR, filename);
      
      await page.screenshot({
        path: filepath,
        fullPage: true,
        animations: 'disabled'
      });
      
      console.log(`    ✅ Saved: ${filename}`);
    }
  }
  
  await browser.close();
  console.log('✨ After snapshots completed!');
}

async function main() {
  if (process.argv[2] === 'after') {
    await takeAfterSnapshots();
  } else {
    console.log('📋 Visual Regression Testing Helper');
    console.log('');
    console.log('Usage:');
    console.log('  node compare-snapshots.js after    # Take "after" snapshots');
    console.log('');
    console.log('Files:');
    console.log(`  Baseline report: ${BASELINE_REPORT}`);
    console.log(`  Before snapshots: ${BEFORE_DIR}/`);
    console.log(`  After snapshots: ${AFTER_DIR}/`);
    console.log(`  Diff images: ${DIFF_DIR}/`);
    console.log('');
    console.log('To compare images manually, you can use tools like:');
    console.log('  - ImageMagick: compare before.png after.png diff.png');
    console.log('  - Online tools: photopea.com, pixelmator.com');
    console.log('  - VS Code extensions: Image Preview, Luna Paint');
  }
}

main().catch(console.error);