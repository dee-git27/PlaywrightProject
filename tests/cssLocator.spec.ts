import {test, expect, Locator} from '@playwright/test';

test('CSS Locator',async ({page})=> {

    await page.goto("https://demoqa.com/");
    await page.getByText('Elements').click();
    await page.locator("li#item-1").first().click();
    await page.locator("div[role='treeitem']>span[role=checkbox]").click();
})