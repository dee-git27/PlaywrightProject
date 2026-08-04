import {Page, Locator, expect} from '@playwright/test';

export class WebshopLoginPage{

    readonly page: Page;
    readonly loginLink: Locator;
    readonly emailField: Locator;
    readonly passwordField: Locator;
    readonly loginButton: Locator;
    readonly logout: Locator;
    readonly errorMessage: Locator;

    constructor(page: Page){
        this.page = page;
        this.loginLink = page.locator("//a[text()='Log in']");
        this.emailField = page.getByLabel("Email:");
        this.passwordField = page.getByLabel("Password:");
        this.loginButton = page.locator("//input[@value='Log in']");
        this.logout = page.locator("//a[text()='Log out']");
        this.errorMessage = page.locator("//li[text()='The credentials provided are incorrect']");
    }

    async navigatetoUrl(){
        await this.page.goto('/');
    }

    async userLogin(email:string, password:string, validity:string){
        await this.loginLink.click();
        await this.emailField.fill(email);
        await this.passwordField.fill(password);
        await this.loginButton.click();
        
        if(validity === 'valid'){
            await expect(this.logout).toBeVisible();
        }else{
            await expect(this.errorMessage).toBeVisible();
        }
    }
}