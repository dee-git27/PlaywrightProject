// Generated from: tests\BDD\feature\Login.feature
import { test } from "playwright-bdd";

test.describe('Perform Login Validations', () => {

  test.beforeEach('Background', async ({ Given, Then, page }, testInfo) => { if (testInfo.error) return;
    await Given('User navigates to Demoblaze page', null, { page }); 
    await Then('User logs in', null, { page }); 
  });
  
  test.describe('', () => {

    test('Example #1', async ({ Then, page }) => { 
      await Then('User verifies the "Phones" option visibility', null, { page }); 
      await Then('User gets total "Phones" count', null, { page }); 
      await Then('User logs out', null, { page }); 
    });

    test('Example #2', async ({ Then, page }) => { 
      await Then('User verifies the "Laptops" option visibility', null, { page }); 
      await Then('User gets total "Laptops" count', null, { page }); 
      await Then('User logs out', null, { page }); 
    });

  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\BDD\\feature\\Login.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":13,"pickleLine":13,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User navigates to Demoblaze page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Outcome","textWithKeyword":"Then User logs in","isBg":true,"stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":8,"keywordType":"Outcome","textWithKeyword":"Then User verifies the \"Phones\" option visibility","stepMatchArguments":[{"group":{"start":18,"value":"\"Phones\"","children":[{"start":19,"value":"Phones","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":15,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then User gets total \"Phones\" count","stepMatchArguments":[{"group":{"start":16,"value":"\"Phones\"","children":[{"start":17,"value":"Phones","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":16,"gherkinStepLine":10,"keywordType":"Outcome","textWithKeyword":"Then User logs out","stepMatchArguments":[]}]},
  {"pwTestLine":19,"pickleLine":14,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User navigates to Demoblaze page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Outcome","textWithKeyword":"Then User logs in","isBg":true,"stepMatchArguments":[]},{"pwStepLine":20,"gherkinStepLine":8,"keywordType":"Outcome","textWithKeyword":"Then User verifies the \"Laptops\" option visibility","stepMatchArguments":[{"group":{"start":18,"value":"\"Laptops\"","children":[{"start":19,"value":"Laptops","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":21,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then User gets total \"Laptops\" count","stepMatchArguments":[{"group":{"start":16,"value":"\"Laptops\"","children":[{"start":17,"value":"Laptops","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":22,"gherkinStepLine":10,"keywordType":"Outcome","textWithKeyword":"Then User logs out","stepMatchArguments":[]}]},
]; // bdd-data-end