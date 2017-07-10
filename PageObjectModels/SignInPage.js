/**
 * 
 */
var exports = module.exports = {};

exports.signInLabel = element(by.css('label[for=new_session_username]'));
exports.signInAccount = element(by.css('#new_session_username'));
exports.signInPassword = element(by.css('#new_session_password'));
exports.submitButton = element(by.css('#sign_in'));
exports.errorMessage = element(by.xpath('//span[@class="alert_icon"]'))
