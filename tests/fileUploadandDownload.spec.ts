import {test, expect} from '@playwright/test';

test('File Upload- Single and multiple', async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");
    const singleFile = page.locator("#singleFileInput");
    singleFile.scrollIntoViewIfNeeded();
    await singleFile.setInputFiles('SampleFile/file1.txt');
    await page.waitForTimeout(3000);

    //multiple files should be passed as an array
    const multipleFile = page.locator("#multipleFilesInput");
    await multipleFile.setInputFiles(['SampleFile/file1.txt', 'SampleFile/file2.txt']);
    await page.waitForTimeout(3000);
})

test('Download File', async ({page})=> {

    await page.goto("https://demoqa.com/");
    await page.getByText('Elements').click();

    await page.locator("//div[@class='element-group']//li//span[text()='Upload and Download']").click();

    //download event trigger
    const downloadEvent = page.waitForEvent('download');
    page.locator('#downloadButton').click(); //download button click
    const download = await downloadEvent;
    await download.saveAs("Downloads/"+ download.suggestedFilename());
})