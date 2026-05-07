import { Page, Locator } from '@playwright/test';

export class LoginPage {
    page: Page;
    clickLoginLink: string;
    usernameInput: string;
    passwordInput: string;
    loginButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.clickLoginLink = "#login2";
        this.usernameInput = "#loginusername";
        this.passwordInput = "#loginpassword";
        this.loginButton = page.getByRole('button', { name: 'Log in' });
    }

    async gotoLoginPage() {
    
    await this.page.goto('https://www.demoblaze.com/');
}

async Login(username: string, Password: string) {
    await this.page.click(this.clickLoginLink);
    await this.page.locator(this.usernameInput).fill(username);
    await this.page.locator(this.passwordInput).fill(Password);
    await this.loginButton.click();
}
}
