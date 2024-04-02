const {By, Keys, Builder} = require("selenium-webdriver")
require("chromedriver")
const fs = require("fs")


async function scrape(){

    let driver = await new Builder().forBrowser("chrome").build();

    await driver.get("https://www.youtube.com/results?search_query=cats")

    let links = await driver.findElements(By.css("a"));

    for(let link of links){

        console.log(await link.getText());
    }

    driver.quit();

}

scrape();