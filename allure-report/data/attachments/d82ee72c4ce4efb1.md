# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: fileUploadandDownload.spec.ts >> File Upload- Single and multiple
- Location: tests\fileUploadandDownload.spec.ts:3:5

# Error details

```
Test timeout of 10000ms exceeded.
```

```
Error: locator.scrollIntoViewIfNeeded: Test timeout of 10000ms exceeded.
Call log:
  - waiting for locator('#singleFileInput')

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - heading "Service Unavailable" [level=1] [ref=e2]
  - heading "Error 503" [level=2] [ref=e3]
```

# Test source

```ts
  1  | import {test, expect} from '@playwright/test';
  2  | 
  3  | test('File Upload- Single and multiple', async ({page})=>{
  4  | 
  5  |     await page.goto("https://testautomationpractice.blogspot.com/");
  6  |     const singleFile = page.locator("#singleFileInput");
> 7  |     singleFile.scrollIntoViewIfNeeded();
     |                ^ Error: locator.scrollIntoViewIfNeeded: Test timeout of 10000ms exceeded.
  8  |     await singleFile.setInputFiles('SampleFile/file1.txt');
  9  |     await page.waitForTimeout(3000);
  10 | 
  11 |     //multiple files should be passed as an array
  12 |     const multipleFile = page.locator("#multipleFilesInput");
  13 |     await multipleFile.setInputFiles(['SampleFile/file1.txt', 'SampleFile/file2.txt']);
  14 |     await page.waitForTimeout(3000);
  15 | })
  16 | 
  17 | test('Download File', async ({page})=> {
  18 | 
  19 |     await page.goto("https://demoqa.com/");
  20 |     await page.getByText('Elements').click();
  21 | 
  22 |     await page.locator("//div[@class='element-group']//li//span[text()='Upload and Download']").click();
  23 | 
  24 |     //download event trigger
  25 |     const downloadEvent = page.waitForEvent('download');
  26 |     page.locator('#downloadButton').click(); //download button click
  27 |     const download = await downloadEvent;
  28 |     await download.saveAs("Downloads/"+ download.suggestedFilename());
  29 | })
```