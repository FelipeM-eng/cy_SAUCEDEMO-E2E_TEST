class CartPage {

    //Find the checkout button on the cart page
    checkoutButton() {
        return cy.get('[data-test="checkout"]');
    }

    //method to click the checkout button
    clickCheckout() {
        this.checkoutButton().click();
    }

}

//Export the CartPage class as a singleton instance
export default new CartPage();