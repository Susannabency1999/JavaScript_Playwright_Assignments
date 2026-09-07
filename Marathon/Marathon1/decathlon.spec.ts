import { test, expect } from "@playwright/test";
test("Buy Shoes in Decathlon", async ({ page }) => {
  await page.goto("https://www.decathlon.in/");
  const visible = expect(
    page.getByRole("link", { name: "Decathlon Home" }),
  ).toBeVisible();
  console.log("Verification passed: Decathlon Home is visible");
  await page.waitForTimeout(3000);

  await page.locator("form input").click();
  await page
    .getByRole("searchbox", {
      name: "Search for 60+ sports and 6,000+ products",
    })
    .fill("shoes");
  await page.waitForTimeout(3000);
  await page.locator('//span[text()="For Women"]').click();
  await page.waitForTimeout(3000);

  const categoryContent = expect(
    page.locator('//div[@data-test-id="category-main-content"]'),
  ).toBeVisible();
  console.log("Verification passed: Category content page is visible");
  await page.locator('//span[text()="Sport"]').click();
  await page.locator('//span[text()="Running"]').click();
  await page.locator('//span[text()="Gender"]').click();
  await page
    .locator(
      "//label[@data-test-id='filter-item-gender_id_en-WOMEN']/span[@data-test-id='filter-sidebar:item-text']",
    )
    .click();
  
  await page.locator('//span[text()="Size"]').click();
  await page
    .locator("//label[@data-test-id='filter-item-indian_size-8']")
    .click();
  await page.locator('//span[text()="Most relevant"]').click();
  await page.locator('//span[text()="Highest discount "]').click();
  await page
    .locator(
      '//div[text()= " Kiprun Jogflow 190.1 Women\'s Running Shoes - Green/Pink"]',
    )
    .click();
  await page.waitForTimeout(3000);

  await page.getByLabel("Select size 8").click();
  await page.waitForTimeout(3000);

  await page.locator('//span[text()="Add to cart"]').click();

  await page.getByRole("link", { name: "Cart" }).click();

  const product = await page
    .getByText("Kiprun Jogflow 190.1 Women\'s Running Shoes - Green/Pink")
    .isVisible();

  console.log("The shoes is available in the cart: ", product);
  await page.waitForTimeout(3000);
});
