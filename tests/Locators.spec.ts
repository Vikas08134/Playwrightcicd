import { test, expect, Locator } from '@playwright/test';

test('Playwright Locators',async ({ page }) => {
    await page.goto("https://demo.nopcommerce.com/");
    let logo: Locator = page.getByAltText('nopCommerce demo store')
    await expect(logo).toBeVisible();
    await page.getByRole('link', {name: 'Register'}).click();
    await page.locator('#small-searchterms').fill('computer');
    await page.locator('.button-1.search-box-button').click();
    

})