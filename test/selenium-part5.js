const {By, Key, Builder} = require("selenium-webdriver")
require("chromedriver")



async function upload(){

    let driver =  await new Builder().forBrowser("chrome").build();

    await driver.get("https://filebin.net/b7v19vk2famcc9j9");
    
    await driver.manage().window().maximize();

    await driver.manage().setTimeouts({ implicit: 4000 });

    // try {
    //     await driver.findElement(By.css("a[rel='nofollow']")).click();
    // } catch(e){
    //     console.log(e.message)
    // }

    // await driver.manage().setTimeouts({ implicit: 2000 });

    // await driver.findElement(By.id("dismiss-button")).click();

    // await driver.manage().setTimeouts({ implicit: 2000 });
    
    await driver.findElement(By.id("fileField")).sendKeys("C:\\Users\\JannGeo\\Desktop\\Sample.txt");


}

upload();