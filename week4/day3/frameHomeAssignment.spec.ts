// To interact with the web elements present inside iframes

import {test, expect} from "@playwright/test";

test('Learn frames',async({page})=>{
    await page.goto('https://www.leafground.com/frame.xhtml')
    const allframes = page.frames() // return all frames present in the page

    //accessing frame1 with index value
    const frame1 = allframes[1]
    await frame1.locator('#Click').click()
    await page.waitForTimeout(2000);
    await expect (frame1.locator("#Click")).toHaveText("Hurray! You Clicked Me.");
    console.log("'Hurray! You Clicked Me.' Text is displayed in Frame1");

    //total count of frames present in the page
    console.log(`Total frames in the page is: ${allframes.length}`);

    
    //accessing frame4(nested frame) with index value
    const frame4 = allframes[4]
    await frame4.locator('#Click').click();
    await page.waitForTimeout(2000);
    await expect (frame4.locator("#Click")).toHaveText("Hurray! You Clicked Me.");
    console.log("'Hurray! You Clicked Me.' Text is displayed in Frame4");
    
})