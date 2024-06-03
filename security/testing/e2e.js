// IIFE  - IMMEDIETLY INVOKED FUNCTION EXPRESSION
const puppeteer = require("puppeteer");
(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 100,
    args: ["--window-size=1920,1080"],
  });
  const page = await browser.newPage();
  await page.goto("https://namastedev.com");
  await page.setViewport({ width: 1520, height: 1080 });
  console.log("Webpage is loaded");
  const coursesPageLink = ".menu >li:nth-child(3)>a";
  await page.waitForSelector(coursesPageLink);
  await page.click(coursesPageLink);

  await browser.close();
})();
