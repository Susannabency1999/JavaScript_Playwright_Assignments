//Red Bus and Flipkart in Edge and Firefox Browser Instances

import test, {chromium, firefox} from "@playwright/test";
    test("launch RedBus in Edge", async()=>{
    const browser = await chromium.launch({channel: 'msedge',headless : false});
        const context = await browser.newContext();
        const page = await context.newPage()
        await page.goto("https://www.redbus.in")
        await page.waitForTimeout(3000)


        console.log('----- Red Bus (Edge) -----');
        console.log('Title:', await page.title());
        console.log('URL:', page.url());
}) 

test("launch Flipkart in Firefox", async()=>{
    const browser1 = await firefox.launch({headless : false});
        const context1 = await browser1.newContext();
        const page = await context1.newPage()
        await page.goto("https://www.flipkart.com")
        await page.waitForTimeout(3000)


        console.log('----- Flipkart (Firefox) -----');
        console.log('Title:', await page.title());
        console.log('URL:', page.url());

})