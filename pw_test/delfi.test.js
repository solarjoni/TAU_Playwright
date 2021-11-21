const { test, expect } = require('@playwright/test');
test('test', async ({ page }) => {
  // Go to https://m.delfi.lt/
  await page.goto('https://m.delfi.lt/');
});