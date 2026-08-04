import {Page, Locator, expect} from '@playwright/test';

export class LoginPage{

    readonly page: Page;
    readonly loginLink: Locator;
    readonly usernameField: Locator;
    readonly passwordField: Locator;
    readonly loginButton: Locator;
    readonly welcomeText: Locator;
    readonly logoutLink: Locator;

    constructor(page: Page){
        
        this.page = page;
        this.loginLink = page.locator("#login2");
        this.usernameField = page.locator('#loginusername');
        this.passwordField = page.locator('#loginpassword');
        this.loginButton = page.getByRole('button', {name: 'Log in'});
        this.welcomeText = page.locator("#nameofuser");
        this.logoutLink = page.getByText('Log out');
    }

    async navigateToUrl(url: string){
        
        await this.page.goto(url);
    }

    async userLogin(userName:string, password: string){

        await this.loginLink.click();
        await this.usernameField.fill(userName);
        await this.passwordField.fill(password);
        await this.loginButton.click();

    }

    async userLogout(){
        await this.logoutLink.click();
    }
}