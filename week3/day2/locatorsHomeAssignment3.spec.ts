import {test, expect} from "@playwright/test";
test("Learn Xpath", async ({ page }) => {
  await page.goto("https://login.salesforce.com");
  await page.locator("//input[@type='email']").fill("dilipkumar.rajendran@testleaf.com");
  await page.locator("//input[@id='Login']").click();
  await page.locator("//input[@name='pw']").fill("TestLeaf@2025");
  await page.locator("//input[@id='Login']").click();
  await page.locator("//button[@title='App Launcher']").click();
  await page.waitForTimeout(3000);

  await page.locator("//button[@aria-label='View All Applications']").click();
  await page.waitForTimeout(3000);
  await page.locator("//div[@type='search']//input[@type='search']").fill('individuals');
  await page.waitForTimeout(3000);
  await page.locator("//p[normalize-space()='Individuals']").click();
  await page.locator("//a[@title='Individuals']//following::a[@class='slds-button slds-button_reset']").click();
  await page.locator("//span[text()='New Individual']").click();
  await page.locator("//input[@placeholder='Last Name']").fill('Smith');
  await page.locator("//span[text()='Save']").click();
  await expect(page.locator("//div[@title='Smith']//span[text()='Smith']")).toBeVisible();
  console.log("The new individual with Lastname Smith is created");


});