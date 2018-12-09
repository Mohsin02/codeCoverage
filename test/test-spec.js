var webdriver = require('selenium-webdriver');

var driver = new webdriver.Builder()
    .forBrowser('firefox')
    .build();

var fs = require('fs');
jasmine.getEnv().addReporter(new jasmine.ConsoleReporter(console.log));

describe('open browser', function (){
    it('this will test nothing', function (done) {
        driver.get('http://localhost:4200').then(function(){
            
                done();
            });
        
    });
    it('click on the click button', function (done) {
        driver.findElement(webdriver.By.id('click')).click();
 driver.executeScript("return window.__coverage__;").then(function (obj) {
                    fs.writeFile('coverage/coverage.json', JSON.stringify(obj));
					
                    driver.quit();
					
                    done();
                });
        
        
    });
});
