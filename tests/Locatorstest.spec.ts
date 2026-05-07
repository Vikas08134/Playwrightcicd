import { expect, test } from '@playwright/test'
import { link } from 'node:fs'

test('Learnlocators', async ({ page }) => {

    await page.goto("https://www.demoblaze.com/")

    await page.locator('#login2').click()
    await page.locator('#loginusername').fill('pavanol')
    await page.locator('#loginpassword').fill('test@123')
    await page.getByRole('button', { name: 'Log in' }).click();
    const logoutLink = page.locator('#logout2')
    await expect(logoutLink).toBeVisible();
    const deviceNames = page.locator('.card-title')
    const allText = await deviceNames.allTextContents();
    console.log(allText)
    await page.getByRole('link', { name: 'Nokia lumia 1520' }).click();
    await page.getByRole('link', { name: 'Add to cart' }).click();

    await page.pause()

   


})

