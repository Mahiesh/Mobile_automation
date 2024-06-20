const { Given, When, Then } = require('@wdio/cucumber-framework');
const method = require('../../../resource/android/login/interact')
const assert = require('../../../resource/android/login/const')

//code to validate UI elements on login screen.
Given(/^App gets launched and login screen displays$/, async() => {
	const response = await method.validateLoginElements();
	//Used promises to handle asynchronous calls
	 Promise.all([response]).then((values)=>{
		console.log("VALUES",values);	
	},()=>{
		expect(values[0].Logo).toBeTruthy();
		expect(values[0].Uname).toEqual(assert.stringMessage.userLabel,values[0].Uname);
		expect(values[0].Pname).toEqual(assert.stringMessage.passLabel,values[0].Pname);
	})
	
});

// user enters valid username and password
Given(/^user enters valid username and password$/, async() => {
	await method.login(assert.stringMessage.validUserName,assert.stringMessage.validPassword)
});

//user taps on login button
When(/^user taps on login button$/, async() => {
	await method.pressLoginBtn()
});

//user navigates to product screen and validates title PRODUCTS
Then(/^user is logged in successfully and navigated to product screen$/, async() => {
	await method.sleep(20000);
	const reply = await method.validateLoginStatus()
	expect(reply).toBeTruthy();
	console.log("SUCCESSFUL LOGIN",reply);
});


//Validates the negative scenario
// Given(/^provide wrong username and password$/, async() => {
// 	await method.login('mah','klo');
// });

// When(/^tap on login button$/, async() => {
// 	await method.sleep(5000)
// 	await method.pressLoginBtn()
// 	await method.sleep(5000)
// });

// Then(/^user can see an error messsag$/, async() => {
// 	const error = await method.validateInvalidUserPassMessage();
// 	console.log("INVALID USER PASS MESSAGE",error);
// 	expect(error).toEqual(assert.stringMessage.invalidUserPassMessage,error);
// });




