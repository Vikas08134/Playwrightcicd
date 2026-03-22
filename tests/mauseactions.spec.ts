import { test, expect, Locator } from '@playwright/test';

test('Mouse Right Click',async ({ page }) => {
    await page.goto("https://swisnl.github.io/jQuery-contextMenu/demo.html");

    await page.getByText('right click me', {exact: true}).click();
    await page.getByText('right click me', {exact: true}).click({button: "right"});
    await page.pause();

})

test('Mouse double click',async ({ page }) => {
    await page.goto("http://127.0.0.1:5500/practice-websites/automationpy.html");

    await expect(page.locator('#field2')).toBeEmpty();
    await page.getByRole('button', { name: 'Copy Text' }).dblclick();
    await expect(page.locator('#field2')).toHaveValue('Hello World!')
    await page.pause()

})

test('Mouse Drag and Drop',async ({ page }) => {
    await page.goto("http://127.0.0.1:5500/practice-websites/automationpy.html");

    const drag = page.locator('#draggable')
    const drop = page.locator('#droppable')
    await drag.dragTo(drop)
     await page.pause()

})

