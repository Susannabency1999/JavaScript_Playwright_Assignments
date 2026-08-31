import {test, expect} from "@playwright/test";

test ('upload file using event listner with no input tag',async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/upload')


    //create event listener
    const fload = page.waitForEvent('filechooser')
    await page.locator("(//div[@id='drag-drop-upload'])[1]").click() // trigger the upload
    const fileUpload = await fload //resolving the promise
    await fileUpload.setFiles('../../Utils/MyLogo.png') // upload file from the mentioned path
    await expect(page.getByText("MyLogo.png")).toBeVisible();
    console.log("The Image is uploaded successfully!!!")
    await page.waitForTimeout(2000);



    await page.goto('https://the-internet.herokuapp.com/download')

    const fDown = page.waitForEvent('download');
    await page.locator("//a[text()='file.json']").click();
    const fileDownload = await fDown 
    //downloading and saving it under Data folder
    await fileDownload.saveAs(`../../Data/${fileDownload.suggestedFilename()}`);
    //verifying the download
    expect(fileDownload.suggestedFilename()).toBe('file.json');
    console.log("The File Download was Successful!!!")
    
});

   