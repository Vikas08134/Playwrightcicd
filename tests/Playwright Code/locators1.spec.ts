import { expect, Locator, test } from '@playwright/test'

//Priority of Locators
//Playwright's own inbuilt locators
//CSS selectors
//XPath

/*
toBe() - Behavior
toHave() - value
*/

test.only('Playwright in-built locators', async ({ page }) => {
    await page.goto('https://demo.nopcommerce.com/')

    let logo: Locator = page.getByAltText('nopCommerce demo store')
    
    await expect(logo).toBeVisible()

    await page.getByRole('link', { name: 'Register' }).click()
    //await page.getByText('Register').click()

    //await expect(page.getByRole('heading', { name: 'Register' })).toBeVisible()

    await page.goto('http://127.0.0.1:5500/practice-websites/app.html')
    await page.getByLabel('Address').fill('piyush')

    await page.pause()
    
})

test('Text Input Actions', async ({ page }) => {
    await page.goto('http://127.0.0.1:5500/practice-websites/automationpy.html')

    const textbox: Locator = page.locator('#name')

    await expect(textbox).toBeVisible()
    await expect(textbox).toBeEnabled()

    const maxlength: string | null = await textbox.getAttribute('maxlength')

    expect(maxlength).toBe("15")

    await textbox.fill('Piyush')

    console.log(await textbox.inputValue())
    await expect(textbox).toHaveValue('Piyush')
    //await expect(textbox).toHaveValue('')

    await page.pause()    
})

test('Radio Buttons', async ({ page }) => {
    await page.goto('http://127.0.0.1:5500/practice-websites/automationpy.html')

    const maleRadio: Locator = page.locator('#male')

    await expect(maleRadio).toBeVisible()
    await expect(maleRadio).toBeEnabled()

    // expect(await maleRadio.isChecked()).toBe(false)     //Strict equality
    // expect(await maleRadio.isChecked()).toBeFalsy()     //false, 0, "", null, undefined, NaN
    await expect(maleRadio).not.toBeChecked()

    await maleRadio.check()
    // expect(await maleRadio.isChecked()).toBe(true)     //Strict equality
    // expect(await maleRadio.isChecked()).toBeTruthy()     //false, 0, "", null, undefined, NaN
    await expect(maleRadio).toBeChecked()

    await page.pause()    
})

test('Check boxes', async ({ page }) => {
    await page.goto('http://127.0.0.1:5500/practice-websites/automationpy.html')

    const sundayCheckbox: Locator = page.getByLabel('Sunday')

    // await sundayCheckbox.click()     //Never use click() for checkboxes
    await sundayCheckbox.check()
    await expect(sundayCheckbox).toBeChecked()

    await sundayCheckbox.uncheck()
    await expect(sundayCheckbox).not.toBeChecked()

    await page.pause()    
})

//Assignment
//Check all the checkboxes. Use a loop
//Check 2-3 checkboxes and then uncheck the checkboxes that are checked and check the check
//boxes that are not checked.

