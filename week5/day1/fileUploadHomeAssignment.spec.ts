import {test, expect} from "@playwright/test";

test('Learn to upload file',async({page, context})=>{

    await context.grantPermissions(['geolocation']);
    await page.goto('https://login.salesforce.com/');
    await page.locator("//input[@type='email']").fill("dilipkumar.rajendran@testleaf.com");
    await page.locator("//input[@id='Login']").click();
    await page.locator("//input[@name='pw']").fill("TestLeaf@2025");
    await page.locator("//input[@id='Login']").click();
    await page.locator("//button[@title='App Launcher']").click();
    await page.locator("//button[@aria-label='View All Applications']").click();
    await page.locator("//div[@type='search']//input[@type='search']").fill('Accounts');
    
    await expect(page.locator("//p[normalize-space()='Accounts']")).toBeVisible();

    await page.locator("//p[normalize-space()='Accounts']").click();
    await page.locator("//div[@title='New']").click();
    await page.locator("//input[@name='Name']").fill("Smith");
    await page.locator("//button[@aria-label='Type']").click();
    await page.locator("//lightning-base-combobox-item[@data-value='Prospect']").click();
    await page.locator("//button[@aria-label='Industry']").click();
    await page.locator("//lightning-base-combobox-item[@data-value='Banking']").click();
    await page.locator("//button[@name='SaveEdit']").click();
    const name = page.locator("//lightning-formatted-text[@slot='primaryField']");
    await expect(name).toContainText("Smith");
    console.log("New Account is Created!!!")

    const fileUpload = page.locator("//input[@type='file']");
    await fileUpload.setInputFiles('../../Utils/ursa_major_audit_guidelines.pdf');
    await page.locator("//span[text()='Done']").click();
    const fileName = page.locator("//div[@aria-live='polite']//span[@title='ursa_major_audit_guidelines']");
    await expect(fileName).toContainText("ursa_major_audit_guidelines")
    await page.waitForTimeout(3000);
    console.log("File Upload Successful!!!");

});
