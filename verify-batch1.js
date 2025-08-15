import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';
import pixelmatch from 'pixelmatch';
import { PNG } from 'pngjs';

const BASE_URL = 'http://localhost:3001';
const BEFORE_DIR = './reports/snapshots/before';
const AFTER_DIR = './reports/snapshots/after-batch1';
const DIFF_DIR = './reports/snapshots/diffs-batch1';
const REPORT_PATH = './reports/batch1-verification.json';

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

// Files that were removed in batch 1
const FILES_REMOVED = [
  "image-customer-success-playbooks.png",
  "image-customer-support-playbooks.png", 
  "image-github.png",
  "image-zendesk-slackbot.png",
  "leadership-badge-1200x675-letterbox.png",
  "sample-slack-post.png",
  "slackbot.png",
  "support-playbooks.png",
  "thoughts-on-leadership.png",
  "wow-icon-2.png",
  "zendesk-slackbot.png"
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

async function takeAfterSnapshots() {
  console.log('📸 Taking "after-batch1" snapshots...');
  
  // Ensure directories exist
  if (!fs.existsSync(AFTER_DIR)) {
    fs.mkdirSync(AFTER_DIR, { recursive: true });
  }
  
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();
  
  let totalScreenshots = 0;
  
  for (const pageInfo of PAGES) {
    console.log(`📸 Taking screenshots for ${pageInfo.name} page...`);
    
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
      const filepath = path.join(AFTER_DIR, filename);
      
      await page.screenshot({
        path: filepath,
        fullPage: true,
        animations: 'disabled'
      });
      
      totalScreenshots++;
      console.log(`    ✅ Saved: ${filename}`);
    }
  }
  
  await browser.close();
  
  console.log(`\n📸 Successfully captured ${totalScreenshots} after-batch1 screenshots!`);
  return totalScreenshots;
}

async function compareScreenshots() {
  console.log('\n🔍 Comparing screenshots...');
  
  // Ensure diff directory exists
  if (!fs.existsSync(DIFF_DIR)) {
    fs.mkdirSync(DIFF_DIR, { recursive: true });
  }
  
  const results = {
    totalScreenshots: 0,
    identicalScreenshots: 0,
    differentScreenshots: 0,
    maxPixelDifference: 0,
    comparisons: []
  };
  
  for (const pageInfo of PAGES) {
    for (const viewportName of Object.keys(VIEWPORTS)) {
      const filename = `${pageInfo.name}-${viewportName}.png`;
      const beforePath = path.join(BEFORE_DIR, filename);
      const afterPath = path.join(AFTER_DIR, filename);
      const diffPath = path.join(DIFF_DIR, filename);
      
      results.totalScreenshots++;
      
      // Check if both files exist
      if (!fs.existsSync(beforePath)) {
        console.log(`❌ Missing before image: ${filename}`);
        results.comparisons.push({
          page: pageInfo.name,
          viewport: viewportName,
          status: 'missing_before',
          pixelDifference: null
        });
        continue;
      }
      
      if (!fs.existsSync(afterPath)) {
        console.log(`❌ Missing after image: ${filename}`);
        results.comparisons.push({
          page: pageInfo.name,
          viewport: viewportName,
          status: 'missing_after', 
          pixelDifference: null
        });
        continue;
      }
      
      // Load images
      const beforeImg = PNG.sync.read(fs.readFileSync(beforePath));
      const afterImg = PNG.sync.read(fs.readFileSync(afterPath));
      
      // Check dimensions match
      if (beforeImg.width !== afterImg.width || beforeImg.height !== afterImg.height) {
        console.log(`❌ Dimension mismatch for ${filename}: before=${beforeImg.width}x${beforeImg.height}, after=${afterImg.width}x${afterImg.height}`);
        results.comparisons.push({
          page: pageInfo.name,
          viewport: viewportName,
          status: 'dimension_mismatch',
          pixelDifference: null
        });
        continue;
      }
      
      // Create diff image
      const diff = new PNG({width: beforeImg.width, height: beforeImg.height});
      const pixelDifference = pixelmatch(
        beforeImg.data, 
        afterImg.data, 
        diff.data, 
        beforeImg.width, 
        beforeImg.height, 
        {threshold: 0.1}
      );
      
      // Save diff image (even if identical, for completeness)
      fs.writeFileSync(diffPath, PNG.sync.write(diff));
      
      if (pixelDifference === 0) {
        console.log(`✅ ${filename}: Identical`);
        results.identicalScreenshots++;
        results.comparisons.push({
          page: pageInfo.name,
          viewport: viewportName,
          status: 'identical',
          pixelDifference: 0
        });
      } else {
        console.log(`❌ ${filename}: ${pixelDifference} pixels different`);
        results.differentScreenshots++;
        results.maxPixelDifference = Math.max(results.maxPixelDifference, pixelDifference);
        results.comparisons.push({
          page: pageInfo.name,
          viewport: viewportName,
          status: 'different',
          pixelDifference: pixelDifference
        });
      }
    }
  }
  
  return results;
}

async function generateReport(comparisonResults, totalScreenshots) {
  console.log('\n📋 Generating verification report...');
  
  const report = {
    batch: "1 - Duplicate Images Removal",
    files_removed: FILES_REMOVED,
    verification_timestamp: new Date().toISOString(),
    visual_comparison: {
      total_screenshots: comparisonResults.totalScreenshots,
      identical_screenshots: comparisonResults.identicalScreenshots,
      different_screenshots: comparisonResults.differentScreenshots,
      max_pixel_difference: comparisonResults.maxPixelDifference
    },
    detailed_comparisons: comparisonResults.comparisons,
    status: comparisonResults.differentScreenshots === 0 ? "PASS" : "FAIL",
    issues_found: []
  };
  
  // Add any issues found
  if (comparisonResults.differentScreenshots > 0) {
    report.issues_found.push(`${comparisonResults.differentScreenshots} screenshots show visual differences`);
  }
  
  const missingBefore = comparisonResults.comparisons.filter(c => c.status === 'missing_before').length;
  const missingAfter = comparisonResults.comparisons.filter(c => c.status === 'missing_after').length;
  const dimensionMismatches = comparisonResults.comparisons.filter(c => c.status === 'dimension_mismatch').length;
  
  if (missingBefore > 0) {
    report.issues_found.push(`${missingBefore} before screenshots missing`);
  }
  if (missingAfter > 0) {
    report.issues_found.push(`${missingAfter} after screenshots missing`);
  }
  if (dimensionMismatches > 0) {
    report.issues_found.push(`${dimensionMismatches} screenshots have dimension mismatches`);
  }
  
  // Save report
  fs.writeFileSync(REPORT_PATH, JSON.stringify(report, null, 2));
  
  console.log(`📋 Verification report saved to: ${REPORT_PATH}`);
  return report;
}

async function main() {
  try {
    console.log('🚀 Starting Batch 1 Visual Verification...');
    console.log(`📍 Target URL: ${BASE_URL}`);
    console.log(`📁 Before screenshots: ${BEFORE_DIR}`);
    console.log(`📁 After screenshots: ${AFTER_DIR}`);
    console.log(`📁 Diff images: ${DIFF_DIR}`);
    console.log(`📊 Report file: ${REPORT_PATH}\n`);
    
    // Step 1: Take after screenshots
    const totalScreenshots = await takeAfterSnapshots();
    
    // Step 2: Compare screenshots
    const comparisonResults = await compareScreenshots();
    
    // Step 3: Generate report
    const report = await generateReport(comparisonResults, totalScreenshots);
    
    // Step 4: Display final results
    console.log('\n' + '='.repeat(60));
    console.log('📊 BATCH 1 VERIFICATION RESULTS');
    console.log('='.repeat(60));
    console.log(`Status: ${report.status}`);
    console.log(`Total Screenshots: ${report.visual_comparison.total_screenshots}`);
    console.log(`Identical: ${report.visual_comparison.identical_screenshots}`);
    console.log(`Different: ${report.visual_comparison.different_screenshots}`);
    console.log(`Max Pixel Difference: ${report.visual_comparison.max_pixel_difference}`);
    
    if (report.issues_found.length > 0) {
      console.log('\n❌ Issues Found:');
      report.issues_found.forEach(issue => console.log(`  - ${issue}`));
    }
    
    console.log(`\n📋 Full report: ${path.resolve(REPORT_PATH)}`);
    
    if (report.status === 'PASS') {
      console.log('\n✅ VERIFICATION PASSED - Batch 1 is safe to proceed!');
    } else {
      console.log('\n❌ VERIFICATION FAILED - Consider reverting Batch 1 changes!');
      process.exit(1);
    }
    
  } catch (error) {
    console.error('💥 Error during verification:', error);
    process.exit(1);
  }
}

main();