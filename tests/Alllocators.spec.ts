import { expect, test } from "@playwright/test";

test('has title', async ({ page }) => {
  await page.goto('http://127.0.0.1:5500/practice-websites/automationpy.html');

  await page.locator('#name').fill('VIKAS');
  await page.getByRole('textbox', { name: 'Enter EMail' }).fill('vikasshedole1@gmail.com');
  await page.getByRole('textbox', { name: 'Enter Phone' }).fill('9740878070');
  await page.getByLabel('Address').fill('Federal street 01');
  await page.getByRole('radio', { name: 'Male', exact: true }).check();
  await expect(page.getByRole('radio', { name: 'Male', exact: true })).toBeChecked();
  await page.getByLabel('Sunday').check();
  await page.getByText('Monday', { exact: true }).check();
  await page.getByRole('combobox',{name:'Country:'}).selectOption({label:'Canada'})
  await page.locator('#singleFileInput').setInputFiles('C:\\Users\\Admin\\Desktop\\sujata work\\BGR MANJUNATH M P.xlsm')
  await page.getByRole("button",{name:'Upload Single File'}).click();
  await page.locator("#Wikipedia1_wikipedia-search-input").fill('Laptop');
  await page.locator('.wikipedia-search-button').click()
  await page.pause();

});