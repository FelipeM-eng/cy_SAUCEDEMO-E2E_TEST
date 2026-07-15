class CheckoutPage {

    //Find the first name input field on the checkout page
    firstNameField() {
        return cy.get('[data-test="firstName"]');
    }

    //Find the last name input field on the checkout page
    lastNameField() {
        return cy.get('[data-test="lastName"]');
    }

    //Find the postal code input field on the checkout page
    postalCodeField() {
        return cy.get('[data-test="postalCode"]');
    }

    //Find the continue button on the checkout page
    continueButton() {
        return cy.get('[data-test="continue"]');
    }

    //Method to fill in the first name field
    fillFirstName(firstName) {
        this.firstNameField().clear().type(firstName);
    }

    //Method to fill in the last name field
    fillLastName(lastName) {
        this.lastNameField().clear().type(lastName);
    }

    //Method to fill in the postal code field
    fillPostalCode(postalCode) {
        this.postalCodeField().clear().type(postalCode);
    }

    //Method to fill in all checkout information fields
    fillCheckoutInformation(firstName, lastName, postalCode) {
        this.fillFirstName(firstName);
        this.fillLastName(lastName);
        this.fillPostalCode(postalCode);
    }

    //Method to click the continue button
    clickContinue() {
        this.continueButton().click();
    }

}

//Export the CheckoutPage class as a singleton instance
export default new CheckoutPage();