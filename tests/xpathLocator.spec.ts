import {test, expect, Locator} from '@playwright/test';

test('xpath Locator', async ({page})=> {

    await page.goto("https://demoqa.com/");
    const text: Locator = page.getByText('Elements');
    await text.click();
    await page.locator("//div[@class='element-group']//li//span[text()='Text Box']").click();
    await page.locator("//input[@id='userName']").fill(("Dee"));
    await page.locator("//input[@id='userEmail']").fill(("Dee@demo.com"));
    await page.locator("//textarea[@id='currentAddress']").fill(("Hyderabad"));
    await page.locator("//textarea[@id='permanentAddress']").fill(("Bangalore"));
    await page.locator("//button[@id='submit']").click();
    await expect(page.locator("//div[@id='output']")).toBeVisible();
})

test('xpath Locator- identifies multiple elements', async ({page})=> {

    await page.goto("https://demoqa.com/");
    const text: Locator = page.getByText('Elements');
    await text.click();
    await page.locator("//div[@class='element-group']//li//span[text()='Links']").click();
    const links= page.locator("//div[@id='linkWrapper']//p");
    const textContent: String[]= await links.allTextContents();
    console.log("All links on page: " + textContent);
    
    const firstLink = await page.locator("//div[@id='linkWrapper']//p").first().textContent();
    const lastLink = await page.locator("//div[@id='linkWrapper']//p").last().textContent();
    const thirdLink = await page.locator("//div[@id='linkWrapper']//p").nth(2).textContent();

    console.log("First link: " + firstLink);
    console.log("Last link: " + lastLink);
    console.log("Third link: " + thirdLink);

    for(let i of textContent){
        console.log("links via foreach loop :" + i);
    }
})
