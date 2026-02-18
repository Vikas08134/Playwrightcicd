import { test, expect, Locator } from '@playwright/test';

test('Table using filter',async ({ page }) => {
    await page.goto(" @smoke http://127.0.0.1:5500/practice-websites/automationpy.html");


         const rows = page.locator('#productTable tbody tr')
         const matchedRows = rows.filter({hasText: 'Tablet'})
         matchedRows.locator('input[type="checkbox"]').check();
         await expect(matchedRows.locator('input[type="checkbox"]')).toBeChecked();
         await page.pause();
         
 
})