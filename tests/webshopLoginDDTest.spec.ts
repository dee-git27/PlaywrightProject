import {test, expect} from '@playwright/test';
import fs from 'fs';
import {WebshopLoginPage} from '../pages/WebshopLoginPage.ts';

/*----------Data Driven Testing- using POM-------------*/

//let page;
let webshopLogin : WebshopLoginPage;

//below 2 steps: to read data from JSON
const testDataPath = 'testData/webshop.json';
const loginData = JSON.parse(fs.readFileSync(testDataPath, 'utf-8'));

test.describe('Login Data verification', () => {

    for (const {email, password, validity} of loginData) {

        test.beforeEach('Open Application', async ({page})=>{
            //page = await browser.newPage();
            webshopLogin = new WebshopLoginPage(page);

            await webshopLogin.navigatetoUrl();
            
        })

        test(`Login using: ${email} and ${password}`, async ({ page }) => {
            await webshopLogin.userLogin(email, password, validity);
        })
    }
})