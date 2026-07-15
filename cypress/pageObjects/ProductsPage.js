class ProductsPage {

    //find the add to cart button for the backpack product
    backpackAddButton() {
        return cy.get('[data-test="add-to-cart-sauce-labs-backpack"]');
    }

    //find the shopping cart button
    shoppingCartButton() {
        return cy.get('[data-test="shopping-cart-link"]');
    }

    //method to add the backpack product to the cart
    addBackpackToCart() {
        this.backpackAddButton().click();
    }

    //method to open the shopping cart page
    openCart() {
        this.shoppingCartButton().click();
    }

}

//Export the ProductsPage class as a singleton instance
export default new ProductsPage();