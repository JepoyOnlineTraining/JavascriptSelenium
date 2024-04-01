// Web Scraping. Extracting data in websites.

const {By, Keys, Builder} = require("selenium-webdriver")
require("chromedriver")

async function test_selenium_part3(){

    let driver = await new Builder().forBrowser("chrome").build();

    let url = "https://ratings.fide.com/top.phtml?list=men"

    await driver.get(url);

    var names = await driver.findElements(By.css(".tur"));

    for(let name of names){
        console.log(await name.getText())
    }

    driver.quit();

}

test_selenium_part3();