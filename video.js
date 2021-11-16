const { chromium } = require('playwright');

( async() => {//anonynous arrow function
  //function code

  //launching browser
  const browser = await chromium.launch({headless:false, slowMo: 100});
  //creating a page inside a browser
  const context = await browser.newContext({
      recordVideo: {
          dir:"./recordings"
      }
  });
  const page = await context.newPage();
  //navigating to site
  await page.goto('https://the-internet.herokuapp.com/dynamic_loading/1');
  //click on button
  await page.click('button');
  await page.waitForSelector('#loading');
  await page.waitForSelector('#loading', {state: 'hidden'});

  //closing browser
  await browser.close();

})();