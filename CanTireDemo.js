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
			loginPage.signInAccount.sendKeys("Canadian Tire1");
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
			loginPage.signInAccount.sendKeys("Canadian Tire");
			browser.sleep(2500);
			loginPage.signInPassword.sendKeys("this should also work");
			browser.sleep(2500);
			loginPage.submitButton.click();
			browser.sleep(2500);
		});
	});
});

