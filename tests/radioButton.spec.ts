import {test, expect, Locator} from '@playwright/test';

test('Text Input Actions- click, clear, fill, type, toBe, inputValue, getAttribute', async ({page})=> {

    await page.goto("https://demoqa.com/");
    const text: Locator = page.getByText('Elements');
    await text.click();

    await page.locator("//div[@class='element-group']//li//span[text()='Text Box']").click();
    const username = page.locator("//input[@id='userName']");
    await username.clear(); //to clear the input field
    await username.fill(("Dee"));
    const enteredValue = await username.inputValue(); //to get the value entered in the input field
    await page.waitForTimeout(4000);
    expect(enteredValue).toBe("Dee");
    console.log("entered Username value verified");

    const email = page.locator("//input[@id='userEmail']");
    await email.type('Dee@demo.com', {delay: 500}); //to type the value in the input field with a delay
    expect(await email.getAttribute("type")).toBe("email"); //to verify the attribute of the element
    console.log("Email attribute verified");

    email.press('Enter');
    await page.waitForTimeout(3000);
    await page.locator("//textarea[@id='currentAddress']").fill(("Hyderabad"));
    await page.locator("//textarea[@id='permanentAddress']").fill(("Bangalore"));
    await page.locator("//button[@id='submit']").click();
    await expect(page.locator("//div[@id='output']")).toBeVisible();
})

test('Radio Button', async ({page})=> {
  
    await page.goto("https://demoqa.com/");
    await page.getByText('Elements').click();

    await page.locator("//div[@class='element-group']//li//span[text()='Radio Button']").click();
    const yesRadioButton = page.getByRole('radio', { name: 'Yes' });
    if(!await yesRadioButton.isChecked()){
        await yesRadioButton.check();
    }
    await expect(yesRadioButton).toBeChecked();
    await page.waitForTimeout(2000);
})