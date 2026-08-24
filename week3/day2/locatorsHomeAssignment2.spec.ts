import {test, expect} from "@playwright/test";
test("Learn Xpath", async ({ page }) => {
  await page.goto("http://leaftaps.com/opentaps/control/main");
  await page.locator("//input[@name='USERNAME']").fill("democsr2");
  await page.locator("//input[@name='PASSWORD']").fill("crmsfa");
  await page.locator("//input[@value='Login']").click();
  await page.locator("//div[@id='label']//a[normalize-space()='CRM/SFA']").click();
  await page.locator("//div[@class='x-panel-header']//a[text()='Leads']").click();
  await page.locator("//div[@class='frameSectionBody']//a[text()='Create Lead']").click();
  await page.locator("//input[@id='createLeadForm_companyName']").fill("Smith Pvt Ltd");
  await page.locator("//input[@id='createLeadForm_firstName']").fill("Ronald");
  await page.locator("//input[@id='createLeadForm_lastName']").fill("Smith");
  await page.locator("//input[@class='smallSubmit']").click();
  await page.waitForTimeout(5000);
  await page.locator("//div[@class='frameSectionExtra']//a[text()='Edit']").click();
  await page.locator("//input[@id='updateLeadForm_companyName']").fill("Ronald Smith Pvt Ltd");
  await page.locator("//input[@value='Update']").click();


}); 