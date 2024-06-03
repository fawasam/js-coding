const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({ headless: false }); // Launch browser in non-headless mode for visibility
  const page = await browser.newPage();

  // Go to Flipkart
  await page.goto("https://www.flipkart.com/", { waitUntil: "networkidle2" });

  // Close login pop-up if present
  // await page.evaluate(() => {
  //   document.querySelector("._2KpZ6l._2doB4z").click(); // Click on close button of login pop-up
  // });

  // Search for a product
  const searchInput = await page.$('input[type="text"][name="q"]');
  await searchInput.type("mobile"); // Type in the search bar
  await searchInput.press("Enter"); // Press enter to search

  // Wait for search results and click on a product
  await page.waitForSelector("._1AtVbE", { visible: true }); // Wait for search results to load
  await page.click("._1AtVbE"); // Click on the first product

  // Add the product to the cart
  await page.waitForSelector("._1LjiUz", { visible: true }); // Wait for product details to load
  await page.click("._1LjiUz"); // Click on 'Add to Cart' button

  // Proceed to checkout
  await page.waitForSelector("._2KpZ6l._2ObVJD", { visible: true }); // Wait for cart to update
  await page.click("._2KpZ6l._2ObVJD"); // Click on cart icon
  await page.waitForSelector("._2KpZ6l._3JeAeN", { visible: true }); // Wait for checkout button
  await page.click("._2KpZ6l._3JeAeN"); // Click on 'Place Order' button

  // Add address details (replace with your own)
  await page.waitForSelector('input[name="name"]');
  await page.type('input[name="name"]', "John Doe");
  await page.type('input[name="phone"]', "1234567890");
  await page.type('input[name="pincode"]', "123456");
  await page.type('input[name="addressLine1"]', "123 Main St");
  await page.type('input[name="addressLine2"]', "Apt 101");
  await page.type('input[name="city"]', "New York");
  await page.type('input[name="state"]', "NY");

  // Submit the order
  await page.click("._2KpZ6l._2ObVJD"); // Click on 'Continue' button

  // Wait for order confirmation
  await page.waitForSelector(".AoG8QW", { visible: true }); // Wait for order confirmation message

  // Close the browser
  await browser.close();
})();
