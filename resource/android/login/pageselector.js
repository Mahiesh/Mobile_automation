const { $ } = require('@wdio/globals')

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage {
    /**
     * define selectors using getter methods
     */

    get errorMsg(){
        return $('//android.view.ViewGroup[@content-desc="test-Error message"]/android.widget.TextView')
    }

    get isImgDisplayed(){
        return $('//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.ImageView[2]')
    }

    get loginScreenImg()
    {
        return $('//android.widget.ScrollView[@content-desc="test-Login"]/android.view.ViewGroup/android.widget.ImageView[1]')
    }

    get userLabel(){
        return $('//android.widget.EditText[@content-desc="test-Username"]')
    }

    get passLabel(){
        return $('//android.widget.EditText[@content-desc="test-Password"]')
    }

    get userpassErrorMessage(){
        return $('//android.widget.TextView[@text="Username and password do not match any user in this service."]')
    }

    get inputUsername () {
        return $('//android.widget.EditText[@text="Username"]');
    }

    get inputPassword () {
        return $('//android.widget.EditText[@text="Password"]');
    }

    get btnSubmit () {
        return $('//android.view.ViewGroup[@content-desc="test-LOGIN"]');
    }
     
  
   
}

module.exports = new LoginPage();
