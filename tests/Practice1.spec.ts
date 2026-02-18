import { test } from '@playwright/test'

test.beforeEach(async ({ page }) => {
    await page.goto("https://playground.bondaracademy.com");
    await page.getByText('Forms').click();
})

test('My first Test', async ({ page }) => {
    await page.getByText('Form Layout').click();
    await page.locator('[placeholder="Jane Doe"] + input').fill("Vikas@gmail.com");
    //await page.locator('#inputEmail1').fill('vikas@gmail.com')
})

test('Navigate to datepicker page', async ({ page }) => {
    await page.getByText('Datepicker').click();
}) 

//traversal....

test('Locating child elements', async ({ page }) => {
    await page.getByText('Form Layout').click();
    await page.locator('nb-card').locator('nb-radio').getByText('Option 1').click();
    await page.locator('nb-card').locator('nb-radio').getByText('Option 2').click();
    
})

test('Locating Parent elements', async ({ page }) => {
    await page.getByText('Form Layout').click();
    //await page.locator('nb-card', {hasText:'Using the Grid'}).getByRole('button', {name: 'Sign in'}).click();
    // await page.locator('nb-card', {has: page.locator('#inputEmail1')}).getByRole('textbox', {name: 'Email'}).fill('vikas@gmail.com');
    // await page.locator('nb-card', {hasText: 'Using the Grid'}).getByRole('textbox', {name: 'Password'}).fill('123456');
    await page.locator('nb-card',{hasText: 'Basic form'}).getByRole('textbox', {name:'Email'}).fill('samuel@gmail.com');
    await page.locator('nb-card',{hasText: 'Basic form'}).getByRole('textbox', {name:'Password'}).fill('456123');
    await page.locator('nb-card').filter({has: page.locator('nb-checkbox')}).getByText('Check me out').click();
    await page.locator('nb-card',{hasText:'Basic form'}).getByRole('button', {name:'Submit'}).click();
             
})



