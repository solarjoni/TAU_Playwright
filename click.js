const { chromium } = require('playwright');

( async() => {

  //function code
  const browser = await chromium.launch({headless:false, slowMo: 100});
  const page = await browser.newPage();
  await page.goto('https://www.apronus.com/music/lessons/unit01.htm');
  //click on keybnotes
  await page.click('#t1 > table:nth-child(1) > tr:nth-child(1) > td:nth-child(1) > button:nth-child(1)')
  //await browser.close();

})();