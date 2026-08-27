//To Automate interactions with frames, trigger alerts, and verify the displayed text based on actions
 
import {test, expect} from "@playwright/test";
test("Practising Alert handling", async({page})=>{
    await page.goto("https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm");
    page.on("dialog",async (alert)=>{
        await page.waitForTimeout(3000);

        const alertType = alert.type()                  //to get type of the Alert
        console.log("The Alert Type is: " , alertType);
        const alertMessage = alert.message();           //to get message in the Alert
        console.log("The Alert Message is: " , alertMessage);
 
        if(alertType === 'prompt'){
            await alert.accept('OK')
        }else if(alertType === 'confirm'){
            await alert.accept()  // to click ok button to accept the alert
        }else{
            await alert.dismiss() // to click cancel button
        }
        
    })

const frame = page.frameLocator('#iframeResult');
await frame.locator("//button[text()='Try it']").click();                      //performing click action using dom elememt that is under iframe
                  
const text = await frame.locator("//p[@id='demo']").innerText();               //fetching the displayed text
console.log("The text displayed is: ", text);                       
await expect (frame.locator("//p[@id='demo']")).toHaveText("You pressed OK!"); //asserting the text 
console.log("The text is verified");

});