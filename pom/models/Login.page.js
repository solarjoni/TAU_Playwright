const BasePage= require('./Base.page');

class LoginPage extends BasePage {
    constructor(page) {
        super(page)
        
        //locators
        this.usernameTxt = '#username';
        this.passwordTxt = '#password';
        this.loginBttn = '#log-in';

    }
    async navigate(){
        await super.navigate('index.html');
    }
 
    async login(username, password){
        await this.page.fill(this.usernameTxt, username);
        await this.page.fill(this.passwordTxt, password);
        await this.page.click(this.loginBttn);

    }
}

module.exports = LoginPage;