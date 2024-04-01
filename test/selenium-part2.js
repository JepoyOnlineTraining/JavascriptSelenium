const {By, Key, Builder} = require("selenium-webdriver")
require("chromedriver")

async function test_selenium_part2(){

    let driver = await new Builder().forBrowser("chrome").build();

    await driver.get("https://github.io");

    await driver.findElement(By.partialLinkText("GitHub repository")).click()

    console.log(await driver.getTitle())

    let expected_title = "GitHub: Let’s build from here · GitHub"

    if(await driver.getTitle() === expected_title){
        console.log("Test# 1 Passed");
    } else {
        console.log(`Test Failed. Expected: ${expected_title} || Actual: ${await driver.getTitle()}`);
    }

    await driver.findElement(By.partialLinkText("Sign in")).click();
    await driver.manage().setTimeouts({ implicit: 2000 });

    await driver.findElement(By.id("login_field")).sendKeys("test");
    await driver.findElement(By.id("password")).sendKeys("test");

    await driver.manage().setTimeouts({ implicit: 2000 });
    await driver.findElement(By.name("commit")).click();

   
    if(await driver.findElement(By.className("flash flash-full flash-error  ")).isDisplayed()){
        console.log("Test# 2 Passed")
    }

    await driver.close();
}


test_selenium_part2();