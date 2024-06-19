
const loginSelector = require('./pageselector')
module.exports = {
    async login(username, password) {
        (await loginSelector.inputUsername).setValue(username);
        (await loginSelector.inputPassword).setValue(password);
    },

    async pressLoginBtn() {
        (await loginSelector.btnSubmit).click();
    },

    async validateLoginStatus(){
        const res = (await loginSelector.isImgDisplayed).isDisplayed();
        return res;
    },

    async sleep(milliseconds) {
         return new Promise(resolve => setTimeout(resolve, milliseconds))
    },

    // async validateLoginScreenImage(){
    //     const res = (await loginSelector.loginScreenImg).isDisplayed();
    //     return res;
    // },

    // async validateUserLabel(){
    //     const res = (await loginSelector.inputUsername).getText();
    //     return res;
    // },

    // async validatePassLabel(){
    //     const res = (await loginSelector.inputPassword).getText();
    //     return res;
    // }

    async validateLoginElements(){
        const Logo = (await loginSelector.loginScreenImg).isDisplayed();
        const Uname = (await loginSelector.userLabel).getText();
        const Pname = (await loginSelector.passLabel).getText();

        return {Logo,Uname,Pname};
    },

    async validateInvalidUserPassMessage(){
        const msg = (await loginSelector.userpassErrorMessage).getText();
        return msg;
    }

}

