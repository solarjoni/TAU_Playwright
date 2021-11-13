const { firefox, chromium } = require('playwright');

( async() => {

  //launching browser
  const browser = await chromium.launch({headless:false, slowMo: 400});
  //creating a page inside a browser
  const page = await browser.newPage();
  //navigation to site
  await page.goto('https://www.w3schools.com/howto/howto_css_custom_checkbox.asp');
  //accept privacy
  await page.click('#accept-choices');
  //check the second checkbox
  //await page.check('#main > div.w3-row > div:nth-child(1) > input[type=checkbox]:nth-child(4)');
  //const checks = await page.$$('div.s4 > input[type=checkbox]');
  const checks = await page.$$('//input[@type="checkbox"]');

  //await page.pause();
  //console.log(checks);
  await checks[1].check();
  await checks[0].uncheck();
  //select the second radio button
  const radios = await page.$$('div.s4 > input[type=radio]');
  await radios[1].check();
  await browser.close();

})();