const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

await page.goto("https://www.saucedemo.com/");
await page.waitForTimeout(1000);
await page.fill("#user-name","locked_out_user");
await page.waitForTimeout(1000);
await page.fill("#password","secret_sauce");
await page.waitForTimeout(1000);
await page.click("#login-button");
await page.waitForTimeout(1000);
await page.click("#add-to-cart-sauce-labs-backpack");
await page.waitForTimeout(1000);

await page.click(".shopping_cart_link");
await page.waitForTimeout(1000);

await page.click("#checkout");
await page.waitForTimeout(1000);

await page.fill("#first-name","Rafiul");
await page.waitForTimeout(1000);
await page.fill("#last-name","Islam");
await page.waitForTimeout(1000);
await page.fill("#postal-code","123");
await page.waitForTimeout(1000);

await page.click("#continue");
await page.waitForTimeout(1000);
await page.click("#finish");
await page.waitForTimeout(1000);
await page.click("#continue");




})();