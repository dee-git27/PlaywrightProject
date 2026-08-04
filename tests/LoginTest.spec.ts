import {test, expect, Page} from '@playwright/test';
import {LoginPage} from '../pages/LoginPage.ts';

let page: Page;
let loginPage: LoginPage;

const url: string = "https://www.demoblaze.com/";
const userName: string = "pavanol";
const password: string = "test@123";
const wrongPassword: string = "test@1234";

test.describe('Login Validation', ()=>{
    
    test.beforeEach('Navigate to Application', async ({browser})=> {
    
        page = await browser.newPage();
        loginPage = new LoginPage(page);

        await loginPage.navigateToUrl(url);
    
    })

    test.afterEach('Logout', async ()=>{
      
        //await loginPage.userLogout();
        await page.close();
    })

    test('Correct credentials', async () => {
        
        await loginPage.userLogin(userName, password);
        await expect(loginPage.welcomeText).toBeVisible();
    })

    test('Incorrect credentials', async () => {
        
        await loginPage.userLogin(userName, wrongPassword);
        await expect(loginPage.welcomeText).not.toBeVisible();
    })

})