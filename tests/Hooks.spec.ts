import {test, expect, Page} from '@playwright/test';

let page: Page;

test.beforeAll('beforeAll', ()=>{
    console.log("Before All method");
})

test.afterAll('afterAll', ()=>{
    console.log("After All method");
})

test.beforeEach('Login', async ({browser})=> {

    console.log("Before Each method");
    page = await browser.newPage();
    await page.goto("https://www.demoblaze.com/");
    await page.locator('#login2').click();
    await page.locator('#loginusername').fill("pavanol");
    await page.locator('#loginpassword').fill("test@123");
    await page.getByRole('button', {name: 'Log in'}).click();
})

test.afterEach('Logout', async ()=>{
    console.log("After Each method");
    await page.getByText('Log out').click();
})

test('Phones count', async ()=> {

    await page.locator("//a[text()='CATEGORIES']/following-sibling::a[text()='Phones']").click();
    //await page.pause();
    let widget = page.locator("//div[@id='tbodyid']/div[contains(@class,'col-lg')]");
    console.log("Phones displayed on screen: "+await widget.count());
})

test('Laptops count', async ()=> {

    await page.locator("//a[text()='CATEGORIES']/following-sibling::a[text()='Laptops']").click();
    const widget = page.locator("//div[@id='tbodyid']/div[contains(@class,'col-lg1')]");
    console.log("Laptops displayed on screen: "+await widget.count());
})