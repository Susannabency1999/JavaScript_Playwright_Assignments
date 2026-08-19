import test from "@playwright/test";
test("Creating lead using CSS Selectors", async ({ page }) => {
  await page.goto("http://leaftaps.com/opentaps/control/main");
  await page.locator("#username").fill("democsr2");
  await page.waitForTimeout(3000);

  //await page.locator('.inputLogin').fill("crmsfa");
  await page.locator("form p+p .inputLogin").fill("crmsfa");
  await page.locator(".decorativeSubmit").click();
  await page.locator("a>img").click();
  await page.locator('a[href="/crmsfa/control/leadsMain"]').click();
  await page.locator('a[href="/crmsfa/control/createLeadForm"]').click();
  await page
    .locator("#createLeadForm_companyName")
    .fill("XXXX PRIVATE LIMITED");
  await page.locator("#createLeadForm_firstName").fill("Ronaldo");
  await page.locator("#createLeadForm_lastName").fill("Stewart");
  await page.locator("#createLeadForm_personalTitle").fill("Mr");
  await page.locator("#createLeadForm_generalProfTitle").fill("ABCD Project");
  await page.locator("#createLeadForm_annualRevenue").fill("90000");
  await page.locator("#createLeadForm_departmentName").fill("MARINE");
  await page.waitForTimeout(3000);

  const options = page.locator("#createLeadForm_dataSourceId");
  let count = await options.count();
  for (let i = 0; i < count; i++) {
    const text = await options.nth(i).innerText();
    console.log("Text:", text);
  }

  await page.locator('#createLeadForm_primaryPhoneNumber').fill("123456789");
  await page.locator(".smallSubmit").click();
  await page.waitForTimeout(3000);
});