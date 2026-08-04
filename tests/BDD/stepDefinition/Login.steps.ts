import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';

const { Given, When, Then} = createBdd();

Given('User navigates to Demoblaze page', async ({page}) => {
    await page.goto("https://www.demoblaze.com/");
});

Then('User logs in', async ({page}) => {
  await page.locator('#login2').click();
    await page.locator('#loginusername').fill("pavanol");
    await page.locator('#loginpassword').fill("test@123");
    await page.getByRole('button', {name: 'Log in'}).click();
});

Then('User verifies the {string} option visibility', async ({page}, product) => {
  await expect(page.locator("//a[text()='CATEGORIES']/following-sibling::a[text()='"+product+"']")).toBeVisible();
});

Then('User gets total {string} count', async ({page}, product) => {
  await page.locator("//a[text()='CATEGORIES']/following-sibling::a[text()='"+ product +"']").click();
    //await page.pause();
    let widget = page.locator("//div[@id='tbodyid']/div[contains(@class,'col-lg')]");
    console.log("Phones displayed on screen: "+await widget.count());
});

Then('User logs out', async ({page}) => {
  await page.getByText('Log out').click();
});