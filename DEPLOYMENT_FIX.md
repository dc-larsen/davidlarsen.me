# Fix deployment race condition

This commit tests the fix for the dual workflow issue that was causing 404 asset loading errors.

Changed GitHub Pages source from automatic Jekyll deployment to GitHub Actions workflow-only deployment.
