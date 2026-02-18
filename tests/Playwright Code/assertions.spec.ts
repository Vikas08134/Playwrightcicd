import { expect, test } from '@playwright/test'

// test.beforeEach(async ({ page }) => {
//     await page.goto('https://playground.bondaracademy.com')
//     await page.getByText('Forms').click()
// })

test('Assertions', async ({ page }) => {
    await page.goto('https://playground.bondaracademy.com')
    await page.getByText('Forms').click()
    await page.getByText('Form Layouts').click()

    const basicFormButton = page.locator('nb-card', {hasText: 'Basic form'}).getByRole('button')
    const text = await basicFormButton.textContent()
    expect(text).toBe('Submit')

    //1. General/Generic Assertion
    //There is no timeout for generic assertions/
    const value: number = 5
    expect(value).toEqual(5)

    //2. Locator Assertions(we provide a locator)
    //The default timeout is 5 seconds.

    await expect(basicFormButton).toHaveText('Submit1')

    //Hard Assertions
    //Soft Assertions


})