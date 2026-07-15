class LoginPage {

    //returns the URL of the login page
    visit() {
        cy.visit("/");
    }
    
    //fild to get the username input field
    usernameField() {
        return cy.get('[data-test="username"]');
    }
    
    //field to get the password input field
    passwordField() {
        return cy.get('[data-test="password"]');
    }
 
    //field to get the login button
    loginButton() {
        return cy.get('[data-test="login-button"]');
    }

    //field to get the error message displayed on failed login
    errorMessage() {
        return cy.get('[data-test="error"]');
    }

    //method to type the username into the username input field
    typeUsername(username) {
        this.usernameField().clear().type(username);
    }

    //method to type the password into the password input field
    typePassword(password) {
        this.passwordField().clear().type(password);
    }

    //method to click the login button
    clickLogin() {
        this.loginButton().click();
    }

    //method to perform the login action by typing the username and password and clicking the login button
    login(username, password) {
        this.typeUsername(username);
        this.typePassword(password);
        this.clickLogin();
    }

}

//Export the LoginPage class as a singleton instance
export default new LoginPage();