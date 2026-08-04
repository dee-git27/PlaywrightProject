import {test, expect} from '@playwright/test';

test('verify Title', async({page})=>{

    await page.goto('https://demoqa.com/');
    let pageTitle:string = await page.title();
    console.log("Page title is: " + pageTitle);
    await expect(page).toHaveTitle(pageTitle);

})