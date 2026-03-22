import { expect, test } from '@playwright/test'

test.beforeEach(async ({ page }) => {
    await page.goto('https://playground.bondaracademy.com')
    await page.getByText('Forms').click()
})

test('the first test', async ({ page }) => {
    await page.getByText('Form Layouts').click()
})

test('Navigate to Datepicker page', async ({ page }) => {
    await page.getByText('Datepicker').click()
})

//Locator
//Page in-built locators
//Use CSS
//Use XPath

test('Understanding Locators', async ({ page }) => {
    await page.getByText('Form Layouts').click()

    //1. Locate by tag name
    page.locator('input')

    //2. Locate by id(Use the # sign)
    page.locator('#inputEmail1')

    //3. Locate by classes(Use the dot)
    page.locator('.input-full-width.size-medium.status-basic')
    page.locator('.input-full-width.size-medium')
    page.locator('.input-full-width')

    //4. By attribute name
    //Syntax - [attributeName='attributeValue'] OR tagName[attributeName='attributeValue']
    page.locator('[placeholder="Jane Doe"]')
    page.locator('input[placeholder="Jane Doe"]')

    page.locator('[placeholder*="Jane Doe"]')       //Regular expression(partial match)

    //5. By multiple attributes and values
    page.locator('[placeholder*="Jane Doe"][nbinput][type="text"]')
    page.locator('input[placeholder*="Jane Doe"][nbinput][type="text"]')
    page.locator('input.input-full-width[id="inputEmail1"][type="text"]')

    //6. By XPath
    //Syntax - //tagName[@attributeName='attributeValue'] OR //*[@attributeName='attributeValue']
    page.locator('//input[@placeholder="Jane Doe"]')
    page.locator('//*[text()="Form Layouts"]')              //Complete match
    page.locator('//*[contains(text(),"Form Layout")]')     //Partial match
    page.locator('//*[contains(text(),"Form Layout")]/parent::*')

    //By text
    page.getByText('Form Layouts')                           //Partial match
    page.getByText('Form Layouts', {exact: true})            //Exact match

    page.locator(':text("Using the G")')                  //Partial match
    page.locator(':text-is("Using the Grid")')                  //Partial match

    //7. Parent child traversal, child-parent traversal, sibling

    //Parent CSS > child CSS
    //Parent CSS child CSS
    page.locator('nb-card > nb-card-header')
    //page.locator()

    //C Tower 6th floor, 4 floors on each floor.
    //My Flat number is 604 .. 601  -> 604

    ///html/body/ngx-app/ngx-pages/ngx-one-column-layout/nb-layout/div/div/div/div/div/nb-layout-column/ngx-form-elements/ngx-form-layouts/div[1]/div/nb-card/nb-card-body/form/input[1]
    page.locator('[placeholder="Jane Doe"] + input')
})

//Traversal
test('Locating child elements', async ({ page }) => {
    await page.getByText('Form Layouts').click()

    await page.locator('nb-card nb-radio :text-is("Option 1")').click()
    // await page.locator('nb-card').locator('nb-radio').locator(':text-is("Option 2")').click()
    await page.locator('nb-card').locator('nb-radio').getByText('Option 2').click()

})

test('Locating parent elements', async ({ page }) => {
    await page.getByText('Form Layouts').click()

    // await page.locator('nb-card', {hasText: 'Using the Grid'}).getByRole('button', {name: 'Sign in'}).click()
    // await page.locator('nb-card').filter({hasText: 'Using the Grid'}).getByRole('button', {name: 'Sign in'}).click()

    // page.locator('nb-card', {hasNotText: 'Using the Grid'})

    // page.locator('nb-card', {hasText: 'Using the Grid'})        //Option 1
    // await page.locator('nb-card', {has: page.locator('#inputEmail1')}).getByRole('textbox', {name: 'Email'}).click()    //Option 2

    // await page.locator('nb-card', {hasText: 'Basic form'}).getByRole('textbox', {name: 'Email'}).fill('piyush@xyz.com')
    // await page.locator('nb-card', {hasText: 'Basic form'}).getByRole('textbox', {name: 'Password'}).fill('12345678')

    //await page.locator('nb-card', {hasText: 'Basic form'}).getByRole('textbox', {name: 'Email'}).highlight()

    await page.locator('nb-card', {has: page.locator('.status-danger')}).getByRole('textbox', {name: 'Email'}).highlight()

    await page.locator('nb-card').filter({has: page.locator('.status-danger')}).getByRole('textbox', {name: 'Email'}).highlight()

    //await page.locator('nb-card').filter({has: page.locator('nb-checkbox')}).click()

    await page.locator('nb-card').filter({has: page.locator('nb-checkbox')}).filter({hasText: 'Sign in'})
    //await page.pause()

    await page.locator(':text-is("Using the Grid")').locator('..').getByRole('textbox', {name: 'Email'}).fill('123@xtyz.com')

})

test('Reusing locators', async ({ page }) => {
    await page.getByText('Form Layouts').click()

    const basicForm = page.locator('nb-card', {hasText: 'Basic form'})

    await basicForm.getByRole('textbox', {name: 'Email'}).fill('xyz@gmail.com')

    await basicForm.getByRole('textbox', {name: 'Password'}).fill('123456')  
        
    await basicForm.getByRole('button', {name: 'Submit'}).click()

    //Assertion - 
    await expect(basicForm.getByRole('textbox', {name: 'Email'})).toHaveValue('xyz@gmail.com')

})

test('Extracting values', async ({ page }) => {
    await page.getByText('Form Layouts').click()

    const basicForm = page.locator('nb-card', {hasText: 'Basic form'})
    const buttonText = await basicForm.locator('button').textContent()      //Submit
    const buttonText1 = await basicForm.locator('button').innerText()       //SUBMIT

    //Validation
    expect(buttonText).toBe('Submit')
    expect(buttonText1).toBe('SUBMIT')

    //textContent() - Give me the raw text from the DOM
    //innerText() - Give me the text that the user actually sees on the application.

    //All the text values
    const allRadioButtonLabels = await page.locator('nb-radio').allTextContents()
    console.log(allRadioButtonLabels)
    expect(allRadioButtonLabels).toContain('Option 1')

    const emailField = basicForm.getByRole('textbox', {name: 'Email'})
    await emailField.fill('test@test.com')

    const emailValue = await emailField.inputValue()
    expect(emailValue).toBe('test@test.com')

    const placeHolderValue = await emailField.getAttribute('placeholder')
    expect(placeHolderValue).toBe('Email')

})

//DRY - DONT REPEAT YOURSELF