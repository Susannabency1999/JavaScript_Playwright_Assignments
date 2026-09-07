import {test, expect} from "@playwright/test";
test ("Access serviceNow",async({page})=>{

    await page.goto("https://dev331938.service-now.com");
    await page.locator("#user_name").fill("admin");
    await page.locator("#user_password").fill("KmCVep*6Gx%4");
    await page.locator("#sysverb_login").click();
    await page.getByAltText("My ServiceNow landing page").isVisible();
    console.log("My ServiceNow landing page is displayed!!!");
    await page.getByRole("menuitem", {name:"All"}).click();
    await page.waitForTimeout(2000);
    await page.getByText("Service Catalog").click();
    const mobileFrame = page.frameLocator("iframe[title='Main Content']");
    await mobileFrame.getByRole("link", { name: "Mobiles" }).nth(1).click();
    await mobileFrame.getByText("Apple iPhone 13", { exact: true }).click();
    await mobileFrame.getByText("Yes", { exact: true }).click();    
    await mobileFrame.getByRole("textbox" , {name: "   What was the original phone number?"}).fill("9856");
    await mobileFrame.getByRole("combobox").nth(1).selectOption("500MB"); 
    await mobileFrame.getByText("Blue", { exact: true }).click();    
    await mobileFrame.getByText("512 GB [add $300.00]", { exact: true }).click();    
    await mobileFrame.getByRole("button", {name: "Order Now"}).click();
    await expect(mobileFrame.getByText("Thank you, your request has been submitted")).toBeVisible();
    console.log("'Thank you, your request has been submitted' message is displayed!!!!" )
    await page.waitForTimeout(2000);


});
