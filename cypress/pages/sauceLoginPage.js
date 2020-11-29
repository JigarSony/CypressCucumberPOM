export default class sauceLoginPage{

    txtUsername = '#user-name';
    txtPassword = '#password';
    btnLogin = '#login-button';
    lblProduct = '.product_label'

    enterUsername(username){
        cy.get(this.txtUsername).clear().type(username)
    }

    enterPassword(password){
        cy.get(this.txtPassword).clear().type(password)
    }

    clickonLogintButton(){
        cy.get(this.btnLogin).click()
    }
}