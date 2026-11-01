const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

// Measure time taken to load the page
const startTime = Date.now();
await page.goto('https://www.saucedemo.com/');
const loadTime = Date.now() - startTime;
console.log(`Page loaded in ${loadTime}ms`);




})();