const { chromium } = require('playwright');

( async() => {//anonynous arrow function
  //function code

  //launching browser
  const browser = await chromium.launch();
  //creating a page inside a browser
  const page = await browser.newPage();
  //navigating to site
  await page.goto('https://applitools.com');
  //take a screenshot code
  await page.screenshot({path: 'screenshot.jpg'});
  const logo = await page.$('.logo');
  await logo.screenshot({path: 'logo.png'});
  await page.screenshot({path: 'fullpage.jpg', fullPage: true});


  //closing browser
  await browser.close();

})();