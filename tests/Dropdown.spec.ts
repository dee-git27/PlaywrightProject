import {test, expect, Locator} from '@playwright/test';

test('Dropdown', async ({page})=> {

    await page.goto("https://testautomationpractice.blogspot.com/");
    const dropdown: Locator = page.locator("#country");

    dropdown.scrollIntoViewIfNeeded();
    await dropdown.selectOption("india");  //select by value
    await expect(dropdown).toHaveValue("india");  //toHaveValue checks for the selected value attribute (not text)

    await page.waitForTimeout(2000);

    await dropdown.selectOption({label: "China"});  //select by visible label
    expect(dropdown).toHaveValue("china");

    await page.waitForTimeout(2000);

    await (dropdown).selectOption({index: 1});  //select by index
    expect(dropdown).toHaveValue("canada1");

    await page.waitForTimeout(2000);

    const allOptions = await page.locator("#country>option");
    const totalCount = await allOptions.count();

    console.log("total count is: "+totalCount);
    //console.log(allOptions.allTextContents());


    for(let i=0;i< await allOptions.count(); i++)
    {
        console.log(await allOptions.nth(i).textContent());
    }

})