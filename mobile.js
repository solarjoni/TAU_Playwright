const { chromium, devices } = require('playwright');
const iPhone = devices['iPhone 11'];
// https://playwright.dev/docs/emulation#geolocation
// https://playwright.dev/docs/test-configuration#mobile-emulation

( async() => {//anonynous arrow function
  //mobile code
  //launching browser
  const browser = await chromium.launch({headless:false, slowMo: 500});
  //creating a page inside a browser
  const context = await browser.newContext({
    ...iPhone,
    permissions: ['geolocation'],
    geolocation: { latitude: 19.432608, longitude: -99.133209 },
    locale: 'en-US'
  });
  
  const page = await context.newPage();
  
  await page.goto('https://www.delfi.lt');
  //navigating to site
  await page.waitForTimeout(3000); //not in a production !!!
  //closing browser
  await browser.close();

})();