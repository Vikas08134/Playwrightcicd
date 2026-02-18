import { expect, Locator, test } from '@playwright/test'

test('Handle Child window hrm', async ({browser}) => {
  test.setTimeout(60000);
  const context = await browser.newContext()

  const page1 = await context.newPage()

  await page1.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
  await expect(page1).toHaveTitle('OrangeHRM')

  const pagePromise = context.waitForEvent('page');
  await page1.getByRole('link', {name: 'OrangeHRM, Inc'}).click()
  const newPage = await pagePromise;
  await expect(newPage).toHaveTitle('Human Resources Management Software | HRMS | OrangeHRM');
  await newPage.pause()
    
})