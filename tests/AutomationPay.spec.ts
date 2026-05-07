import { expect, Locator, test } from "@playwright/test";
import { TIMEOUT } from "node:dns";


test('AutomationPay', async ({ page }) => {


    await page.goto("http://127.0.0.1:5500/practice-websites/automationpy.html")
    await page.getByRole('textbox', { name: 'Name' }).fill('VIkas');
    await page.getByRole('textbox', { name: 'Email' }).fill('vikas@example.com');
    await page.getByRole('textbox', { name: 'Phone' }).fill('1234567890');
    await page.getByRole('textbox', { name: 'Address' }).fill('123 Main St, Anytown, USA');

})

test('Radio Checkbox DatePicker', async ({ page }) => {


    await page.goto("http://127.0.0.1:5500/practice-websites/automationpy.html")
    await page.getByRole('radio', { name: 'Male', exact: true }).click();
    await page.getByRole('checkbox', { name: 'Sunday' }).check();
    await page.getByRole('combobox', { name: 'Country' }).selectOption('Germany');
    page.getByText('Green', { exact: true });
    page.getByText('Rabbit', { exact: true });
    await page.locator('#datepicker').click();
    //await page.locator('#datepicker').fill('01/03/2023');// we can use this aswell
    await page.getByRole('link', { name: '14' }).click();
    await page.locator('#post-body-1307673142697428135').getByRole('button', { name: 'Submit' }).click();
    //await page.locator('#datepicker').


})

test('Upload Single Files', async ({ page }) => {

    await page.goto("http://127.0.0.1:5500/practice-websites/automationpy.html");
    await page.locator('#singleFileInput').setInputFiles('C:\\Users\\Admin\\Downloads\\January Base.xlsx')
    await page.getByRole('button', { name: 'Upload Single File' }).click();
    //await page.pause();

})

test('Upload Multiple Files', async ({ page }) => {

    await page.goto("http://127.0.0.1:5500/practice-websites/automationpy.html");
    await page.locator('#multipleFilesInput').setInputFiles(['C:\\Users\\Admin\\Downloads\\January Base.xlsx', 'D:\\Vikas_Shedole_QA_Resume.docx']);
    await page.getByRole('button', { name: 'Upload Multiple Files' }).click();
    //await page.pause();

})

test('Mouse Hover', async ({ page }) => {

    await page.goto("http://127.0.0.1:5500/practice-websites/automationpy.html");
    const button = page.getByRole('button', { name: 'Point Me' });
    // Hover on button to show dropdown
    await button.hover();
    // Scope locators to the dropdown to avoid ambiguity
    const dropdown = page.locator('.dropdown');
    const option1 = dropdown.getByText('Mobiles');
    const option2 = dropdown.getByText('Laptops');
    // Assertions (with timeout to allow hover to take effect)
    await expect(option1).toBeVisible({ timeout: 5000 });
    await expect(option2).toBeVisible({ timeout: 5000 });
    

});

test('Drag and Drop', async ({ page }) => {

    await page.goto("http://127.0.0.1:5500/practice-websites/automationpy.html");
    const source = page.locator('#draggable');
    const target = page.locator('#droppable');
    await source.dragTo(target);
    await expect(target).toHaveText('Dropped!');
   

});

test('Combo Box', async ({ page }) => {

    await page.goto("http://127.0.0.1:5500/practice-websites/automationpy.html");
    const selectAnItemField = page.locator('#comboBox');
    await selectAnItemField.click();
    const dropdown = page.locator('#dropdown');
    await dropdown.waitFor({ state: 'visible' });
    const dropdownOption = dropdown.getByText('Item 1', { exact: true });
    await dropdownOption.click();
    await expect(selectAnItemField).toHaveValue('Item 1');
    

});

test('@Alert Handling', async ({ page }) => {

    await page.goto("http://127.0.0.1:5500/practice-websites/automationpy.html");

    page.on('dialog', async (dialog) => {
        await page.waitForTimeout(5000);
        await dialog.accept();
        // const catchLabel = await page.getByRole('button', { name: 'Confirmation Alert' }).click();
        const youPressedOkText = page.getByText('You pressed OK!')
        expect(youPressedOkText).toBeTruthy();

    });

    const catchLabel = await page.getByRole('button', { name: 'Confirmation Alert' }).click();

});