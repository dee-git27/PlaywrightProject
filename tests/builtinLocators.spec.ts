import {test, expect, Locator} from '@playwright/test';

test('Locator- getByAltText',async ({page})=> {

    await page.goto("https://demoqa.com/");
    const img:Locator = await page.getByAltText('Selenium Online Training');
    await expect(img).toBeVisible();
})

test('Locator- getByText', async ({page}) => {

    await page.goto("https://demoqa.com/");
    const text: Locator = page.getByText('Elements');
    await expect(text).toBeVisible();
})

test('Locator- getByRole', async ({page}) => {

    await page.goto("https://demoqa.com/");
    await page.getByText('Elements').click();
    await page.getByText('Radio Button').click();
    await expect(page.getByRole('heading', {name: 'Radio Button'})).toBeVisible();
    console.log("Radio Button page is displayed");
})

test('Locator- getByLabel', async ({page}) => {

    await page.goto("https://demo.nopcommerce.com/");
    //test is failing as captcha is displayed
    await page.getByText('Register').click();
    await page.getByLabel('First name:').fill('Ram');
    await page.getByLabel('Last name:').fill('Siya');
    await page.getByLabel('Email').fill("test@gmail.com");
})

test('Locator- getByPlaceholder', async ({page}) => {

    await page.goto("https://demoqa.com/");
    await page.getByText('Forms').click();
    await page.getByText('Practice Form').click();
    await page.getByPlaceholder('First Name').fill('Ram');
    await page.getByPlaceholder('Last Name').fill('Siya');
    await page.waitForTimeout(2000);
    console.log("Name has been entered");

})

test('Locator- getByTitle', async ({page}) => {

    //can be used when a html element has a title attribute
    //no example found
    console.log("No example found for getByTitle locator :(");
})

test('Locator- getByTestId', async ({page}) => {

    //can be used when a html element has a data-attribute as an attribute
    //no example found
    console.log("No example found for getByTestId locator :(");
})