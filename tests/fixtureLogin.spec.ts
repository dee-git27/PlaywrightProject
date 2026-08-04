//import {Page} from '@playwright/test';
import {test} from '../fixtures/CustomFixture.ts';

//let page: Page;

// Test using Custom Fixtures

test('Phones count', async ({loggedinPage})=> {

    await loggedinPage.locator("//a[text()='CATEGORIES']/following-sibling::a[text()='Phones']").click();
    //await page.pause();
    let widget = loggedinPage.locator("//div[@id='tbodyid']/div[contains(@class,'col-lg')]");
    console.log("Phones displayed on screen: "+await widget.count());
})

test('Laptops count', async ({loggedinPage})=> {

    await loggedinPage.locator("//a[text()='CATEGORIES']/following-sibling::a[text()='Laptops']").click();
    const widget = loggedinPage.locator("//div[@id='tbodyid']/div[contains(@class,'col-lg1')]");
    console.log("Laptops displayed on screen: "+await widget.count());
})