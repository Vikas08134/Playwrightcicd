import { expect,Locator,test } from "@playwright/test";


test('AutomationPay', async ({ page }) => {


    await page.goto("http://127.0.0.1:5500/practice-websites/automationpy.html")
    await page.getByRole('textbox', { name: 'Name' }).fill('VIkas');
    await page.getByRole('textbox', { name: 'Email' }).fill('vikas@example.com');
    await page.getByRole('textbox', { name: 'Phone' }).fill('1234567890');
    await page.getByRole('textbox', { name: 'Address' }).fill('123 Main St, Anytown, USA');
    await page.getByRole('radio', { name: 'Male', exact: true }).click();
    await page.getByRole('checkbox', { name: 'Sunday' }).check();
    await page.getByRole('combobox', { name: 'Country' }).selectOption('Germany');
    page.getByText('Green', { exact: true });
    page.getByText('Rabbit', { exact: true });
    await page.locator('#datepicker').click();
    await page.getByRole('link', { name: '14' }).click();
    await page.locator('#post-body-1307673142697428135').getByRole('button', { name: 'Submit' }).click();
    //await page.locator('#datepicker').
    await page.pause();

})

test('Upload Single Files', async ({ page})=>{

    await page.goto("http://127.0.0.1:5500/practice-websites/automationpy.html");
    await page.locator('#singleFileInput').setInputFiles('C:\\Users\\Admin\\Downloads\\January Base.xlsx')
    await page.getByRole('button',{ name:'Upload Single File'}).click();
    await page.pause();

})

test('Upload Multiple Files', async ({ page})=>{

    await page.goto("http://127.0.0.1:5500/practice-websites/automationpy.html");
    await page.locator('#multipleFilesInput').setInputFiles(['C:\\Users\\Admin\\Downloads\\January Base.xlsx', 'D:\\Vikas_Shedole_QA_Resume.docx']);
    await page.getByRole('button',{ name:'Upload Multiple Files'}).click();
    await page.pause();

})

test('Mouse Hover', async ({page}) => {

    await page.goto("http://127.0.0.1:5500/practice-websites/automationpy.html");
    await page.getByRole('button', { name: 'Point Me' }).hover();
})
