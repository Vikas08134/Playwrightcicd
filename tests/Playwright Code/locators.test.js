import { expect, test } from '@playwright/test'

//Auto-waiting
test('Assertions', async ({ page }) => {
    await page.goto('https://demoblaze.com/')

    //Click on the Login button
    await page.locator('#login2').click()

    //await page.pause()

    //Provide the id and password and click on Log in button
    await page.locator('#loginusername').fill('piyushgupta84')
    await page.locator('#loginpassword').fill('123456')
    await page.locator('#loginpassword').highlight()
    //Locator assertion
    await expect(page.getByRole('link', {name: 'Log out'})).toBeHidden()
    await page.getByRole('button', {name: "Log in"}).click()
    await expect(page.getByRole('link', {name: 'Log out'})).toBeVisible()

    const linkTexts = await page.locator('a').allInnerTexts()

    console.log(linkTexts)

    await page.pause()
})

test('Find a specific product using loop', async ({ page }) => {
    await page.goto('https://demoblaze.com/')

    //await page.waitForTimeout(5000)
    await page.locator('#tbodyid').waitFor()
    const optionsCount = await page.locator('h4.card-title').count()
    
    for(let i = 0; i < optionsCount; i++){
        const text = await page.locator('h4.card-title a').nth(i).innerText()

        if(text.includes('Sony vaio i5')){
            await page.locator('h4.card-title a').nth(i).click()
            break
        }
    }
})

test('Find a specific product using filter', async ({ page }) => {
    await page.goto('https://demoblaze.com/')

    //await page.waitForTimeout(5000)
    await page.locator('#tbodyid').waitFor(5000);
    await page.locator('h4.card-title').filter({hasText: 'Sony vaio i5'}).click();
})


test('Playwright Inbuilt-Locators', async ({ page }) => {
    await page.goto('https://demo.nopcommerce.com/')
   const logo = page.getByAltText("nopCommerce demo store")

})