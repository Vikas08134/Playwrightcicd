import { test, expect, Locator } from '@playwright/test';
    import { LoginPage } from './PageObjectModel/Login';

test('Login Test', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.gotoLoginPage();
    await loginPage.Login('pavanol', 'test@123');
});