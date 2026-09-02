import test from "@playwright/test";
import login from "../../Data/dataParameterization.json";
import {parse} from 'csv-parse/sync';
import fs  from "fs";
import dotenv from 'dotenv'

//Load test data from the csv
let value = fs.readFileSync('Utils/dataParameterization.csv', 'utf-8');
console.log(value);

let value1:any[] = parse(value,
{skip_empty_lines:true,columns:true})
console.log(value1);
// Load test data from the .env file
dotenv.config({path:'Utils/dataParameterization.env'})


test("learn playwright locators", async({page})=>{
    await page.goto('http://leaftaps.com/opentaps/control/main');
    await page.locator('#username').fill(login.UserName);       //reading data from .json file
    await page.locator('#password').fill(login.Password);
    await page.locator('.decorativeSubmit').click();
    await page.locator('#label').click();
    await page.getByText('CRM/SFA').click();
    await page.locator("//a[text()='Leads']").click();
    await page.locator("//a[text()='Create Lead']").click();
    await page.locator("#createLeadForm_companyName").fill(value1[0].companyName);
    await page.locator("#createLeadForm_firstName").fill(value1[0].firstName);
    await page.locator("#createLeadForm_lastName").fill(value1[0].lastName);
    const source = process.env.source;
    const campaign = process.env.campaign;
    const currency = process.env.currency;
    const country = process.env.country;
    const state = process.env.state;
    await page.locator("#createLeadForm_dataSourceId").selectOption({ label: source });
    await page.locator("#createLeadForm_marketingCampaignId").selectOption({ value: campaign });
    const campaignOptions = page.locator("//select[@id='createLeadForm_marketingCampaignId']/option");
    let count= await campaignOptions.count()-1;
    console.log(count);

    for (let i=1; i<=count; i++){
      const campaignName = await campaignOptions.nth(i).innerText();
      console.log(campaignName);

    }
    await page.locator("//select[@name='industryEnumId']").selectOption({index:6});
    await page.locator("//select[@name='currencyUomId']").selectOption({ value: currency });
    await page.locator("//select[@name='generalCountryGeoId']").selectOption({ value: country });
    await page.locator("//select[@name='generalStateProvinceGeoId']").selectOption({ value: state });
    const states = page.locator("//select[@name='generalStateProvinceGeoId']/option");
    let count1 = await states.count()-1;
    console.log(count1)

    for (let j=1; j<=count1; j++){
      let stateName=await states.nth(j).innerText();
      console.log(stateName);
    }
    await page.locator("//input[@name='submitButton']").click();
    await page.waitForTimeout(2000);
  });

