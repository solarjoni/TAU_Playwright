const { chromium } = require('playwright');

( async() => {// anonymous arrow function

  //function code
  //launching browser
  const browser = await chromium.launch({headless:false, slowMo: 400});
  //creating page inside browser
  const page = await browser.newPage();
  //navigating to site
  await page.goto('https://demoqa.com/alerts');
  //logic to hande iframes
  //code to handle the alerts
 /*  page.once('dialog', async dialog => {
    console.log(dialog.message());
    await dialog.accept();
}); */
  page.on('dialog', async dialog => {
      console.log(dialog.message());
      await dialog.accept("Joe Doe");
  });
  
  await page.click('#confirmButton');

  await page.click('#promtButton');


  //closing browser
  await browser.close();

})();