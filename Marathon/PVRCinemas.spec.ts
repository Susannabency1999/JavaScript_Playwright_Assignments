import {test, expect} from "@playwright/test";
test("Book tickets in PVR Cinemas", async ({ page }) => {
    await page.goto("https://www.pvrcinemas.com/");    
    //await page.locator('.cities-overlay.cities-active').click();

   

    await page.locator(".cinemas-inactive").click();
    await page.locator("#cinema").click()
    await page.waitForTimeout(2000);

    await page.getByText("PVR Palazzo-The Nexus Vijaya Mall").click();
    await page.locator('//span[text()="Tomorrow"]').click();
    await page.locator('//span[text()="SPIDERMAN BRAND NEW DAY"]').click();
    await page.locator('//span[text()="07:10 PM"]').click();
    await page.waitForTimeout(5000);

    //await page.locator('//span[text()="Book"]').click();
    await page.getByRole("button", {name: "Submit"}).click();

    await page.getByRole("button", {name: "Accept"}).click();
    await page.locator('[id="BU.BUDGET|M:1"]').click();
    await page.locator('[id="BU.BUDGET|M:2"]').click();
    //await expect(page.locator('[id="BU.BUDGET|M:11"]')).toHaveText('11');
    await expect(page.getByText('M1',  { exact: true })).toBeVisible();
    await expect(page.getByText('M2', { exact: true })).toBeVisible();
    await page.getByRole("button", {name: "Proceed"}).click();
    await page.waitForTimeout(3000);

    //const amount = await page.locator('//span[text()="238.32"]').innerText();
    //const amount = await page.getByText('235.8').innerText();

    const toBePaid = await page.locator('//div[@class="grand-tota col-md-3"]//span').innerText();

    console.log("The Amount to be paid is: ", toBePaid);
    await page.waitForTimeout(3000);


})