exports.config = {
    seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
    specs: ['homePage.js'],
    capabilities: {
        browserName: 'chrome'
      },
      framework: 'jasmine2',
    onPrepare: function () {
        browser.driver.manage().window().setSize(1680, 900);
        var jasmineReporters = require('jasmine-reporters');
        var junitReporter = new jasmineReporters.JUnitXmlReporter({
        	consolidateAll: true,
            savePath: 'C:\\Program Files (x86)\\Jenkins\\jobs\\CanTire\\workspace\\testresults',
            filePrefix: 'xmloutput'
          });
          jasmine.getEnv().addReporter(junitReporter);
        
    },
    
    
}