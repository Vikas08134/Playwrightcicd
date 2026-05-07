import { expect, test } from '@playwright/test'

test('Handle Child window hrm', async ({ browser }) => {
    // Increase timeout for slow demo sites
    test.setTimeout(60000);

    const context = await browser.newContext();
    const page1 = await context.newPage();

    // Navigate with a specific wait condition
    await page1.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login", { waitUntil: 'networkidle' });
    
    await expect(page1).toHaveTitle('OrangeHRM');

    // Start waiting for the popup before the click
    const pagePromise = context.waitForEvent('page');
    
    // Use a more resilient locator
    await page1.locator('a[href*="orangehrm.com"]').first().click();
    
    const newPage = await pagePromise;
    await newPage.waitForLoadState();

    console.log(await newPage.title());
    await expect(newPage).toHaveTitle("OrangeHRM: All in One HR Software for Businesses");
    
    await newPage.pause();
});