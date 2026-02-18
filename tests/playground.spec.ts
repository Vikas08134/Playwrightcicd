import { expect, Locator, test } from '@playwright/test'

test('practice locators', async({page})=>{

    await page.goto("https://playground.bondaracademy.com/pages/iot-dashboard")

    await page.getByRole('link', {name: 'Forms'}).click();
    await page.getByRole('link', {name: 'Form Layouts'}).click();
    expect(page.getByRole('heading', {name: 'Inline form'}))
    await page.getByPlaceholder("Jane Doe").fill('Vikas');
    const email = page.locator('form').filter({ hasText: 'Remember meSubmit' }).getByPlaceholder('Email')
    await email.fill('vikasshed@gmail.com');
    await page.locator('nb-card').filter({has:page.locator('nb-checkbox')}).filter({hasText: 'Remember me'}).click();
    page.pause();

})