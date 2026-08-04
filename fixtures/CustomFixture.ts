import {test as base, Page} from '@playwright/test';

type loginFixture = {
    loggedinPage: Page
}

export const test= base.extend<loginFixture>({
    loggedinPage: async ({ page }, use) => {

        //before test
        await page.goto("https://www.demoblaze.com/");
        await page.locator('#login2').click();
        await page.locator('#loginusername').fill("pavanol");
        await page.locator('#loginpassword').fill("test@123");
        await page.getByRole('button', { name: 'Log in' }).click();

        //test
        await use(page);

        //after test
        await page.getByText('Log out').click();
    }
})