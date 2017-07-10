"use strict";
var landingPage = require("./PageObjectModels/LandingPage.js");
var loginPage = require("./PageObjectModels/SignInPage.js");

var HomePage = function() {
	this.signIn = element(by.css("a[data-nav='nav=nav_SignIn']"));
	this.centerStageButtons = element(by.css(".center.stage-buttons"));
	this.viewOnGitHubButton = this.centerStageButtons.all(
			by.css(".btn.btn-large")).get(0);
	this.downloadButton = this.centerStageButtons.element(by
			.css(".btn-primary"));
	this.designDocsButton = this.centerStageButtons.element(by
			.css(".btn-warning"));
}

// var SignInPage = function() {
// this.signInLabel = element(by.css('label[for=new_session_username]'));
// this.signInAccount = element(by.css('#new_session_username'));
// this.signInPassword = element(by.css('#new_session_password'));
// this.submitButton = element(by.css('#sign_in'));
// this.errorMessage = element(by.xpath('//span[@class="alert_icon"]'))
//	
// }
describe('Given that I go to istockphoto', function() {

	beforeEach(function() {
		browser.get('http://www.istockphoto.com/ca');
	});
	describe('When I login with bad credentials', function() {

		it('Then I get an error', function() {
			expect(landingPage.signIn.isPresent()).toBe(true);
			landingPage.signIn.click();
			expect(loginPage.signInLabel.isPresent()).toBe(true);
			browser.sleep(2500);
			loginPage.signInAccount.sendKeys("pray this works");
			browser.sleep(2500);
			loginPage.signInPassword.sendKeys("this should also work");
			browser.sleep(2500);
			loginPage.submitButton.click();
			browser.sleep(2500);

			// expect(loginPage.errorMessage.isPresent()).toThrow
			// describe('Then I should see an error', function() {
			// it('Then I should see an error', function() {
			// expect(loginPage.errorMessage.isPresent()).toBe(true);
			// });
			// });
		});
	});
});


describe('Given that I go to istockphoto', function() {

	beforeEach(function() {
		browser.get('http://www.istockphoto.com/ca');
	});
	describe('When I login with good credentials', function() {

		it('Then I get a dashboard', function() {
			expect(landingPage.signIn.isPresent()).toBe(false);
			landingPage.signIn.click();
			expect(loginPage.signInLabel.isPresent()).toBe(false);
			browser.sleep(2500);
			loginPage.signInAccount.sendKeys("pray this works");
			browser.sleep(2500);
			loginPage.signInPassword.sendKeys("this should also work");
			browser.sleep(2500);
			loginPage.submitButton.click();
			browser.sleep(2500);

			// expect(loginPage.errorMessage.isPresent()).toThrow
			// describe('Then I should see an error', function() {
			// it('Then I should see an error', function() {
			// expect(loginPage.errorMessage.isPresent()).toBe(true);
			// });
			// });
		});
	});
});




// xdescribe('Download button', function() {
// var homePage = new HomePage();
// var downloadModal = new DownloadModal();
//    
// beforeEach(function() {
// browser.get('https://angularjs.org/');
// });
//    
// it('should open up a download modal', function() {
//        
// expect(downloadModal.downloadModal.isPresent()).toBe(false);
// homePage.downloadButton.click();
// browser.waitForAngular();
// expect(downloadModal.downloadModal.isDisplayed()).toBe(true);
// });
// });
//
// xdescribe('In "The Basics" tutorial', function() {
// var homePage = new HomePage();
// var theBasics = new TheBasics();
//    
// beforeEach(function() {
// browser.get('https://angularjs.org/');
// });
//    
// it('entering a name should output "Hello Name"', function() {
// var name = 'Hannah';
//        
// theBasics.nameField.click();
// theBasics.nameField.sendKeys('Hannah');
//        
// expect(theBasics.helloOutput.getText()).toEqual('Hello Hannah!');
// expect(theBasics.helloOutput.getText()).toContain('Hannah');
//        
// theBasics.nameField.click();
// theBasics.nameField.clear();
// theBasics.nameField.sendKeys(name);
// expect(theBasics.helloOutput.getText()).toContain(name);
// expect(theBasics.helloOutput.getText()).toEqual('Hello' + ' ' + name + '!');
// });
// });
//
// describe('The ToDo app', function() {
// var toDo = new ToDo();
//    
// beforeEach(function() {
// browser.get('https://angularjs.org/');
// });
//    
// it('should add an extra item to the checklist', function() {
// var thirdItemInList = toDo.checkList.get(2);
//       
// expect(toDo.checkList.count()).toEqual(2);
// toDo.toDoTextField.click();
// toDo.toDoTextField.sendKeys("Learn angular app");
// toDo.addButton.click();
// expect(toDo.checkList.count()).toEqual(3);
// expect(thirdItemInList.getText()).toEqual("Learn angular app");
// expect(thirdItemInList.getText()).toContain("ang")
// });
//    
// it("should remove two items from the check list", function() {
// var thirdCheckBox = toDo.checkBox.get(2);
//        
// toDo.toDoTextField.click();
// toDo.toDoTextField.sendKeys("Learn angular app");
// toDo.addButton.click();
// toDo.toDoTextField.click();
// toDo.toDoTextField.sendKeys("Learn angular something");
// toDo.addButton.click();
// expect(toDo.checkList.count()).toEqual(4);
// thirdCheckBox.click();
// toDo.archive.click();
// expect(toDo.checkList.count()).toEqual(2);
// });
// });
