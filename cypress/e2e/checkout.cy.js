import LoginPage from "../pageObjects/LoginPage";
import ProductsPage from "../pageObjects/ProductsPage";
import CartPage from "../pageObjects/CartPage";
import CheckoutPage from "../pageObjects/CheckoutPage";
import OverviewPage from "../pageObjects/OverviewPage";
import CompletePage from "../pageObjects/CompletePage";

describe("SauceDemo - Checkout Flow", () => {

    //Given create a variable to hold the user data from the fixture
    let user;

    //And load the user data from the fixture before the tests run
    before(() => {
        cy.fixture("users").then((users) => {
            user = users.standardUser;
        });
    });

    //And start on the login page before each test
    beforeEach(() => {
        LoginPage.visit();
    });

    //Test case: Complete the checkout process successfully
    it("should complete the checkout successfully", () => {

        //When the user logs in with valid credentials
        LoginPage.login(user.username, user.password);

        //Then the user should be redirected to the products page
        cy.url().should("include", "/inventory.html");

        //When the user adds the backpack product to the cart
        ProductsPage.addBackpackToCart();

        //And opens the shopping cart page
        ProductsPage.openCart();

        //Then the user should be redirected to the cart page
        cy.url().should("include", "/cart.html");

        //and the user should see the backpack product in the cart
        cy.contains("Sauce Labs Backpack").should("be.visible");

        //When the user clicks the checkout button
        CartPage.clickCheckout();

        //Then the user should be redirected to the checkout information page
        cy.url().should("include", "/checkout-step-one.html");

        //when the user fills the first name, last name, and postal code fields
        CheckoutPage.fillCheckoutInformation(
            "Felipe",
            "Mesquita",
            "4900"
        );

        //And clicks the continue button
        CheckoutPage.clickContinue();

        //Then the user should be redirected to the checkout overview page
        cy.url().should("include", "/checkout-step-two.html");

        //when the user clicks the finish button
        OverviewPage.clickFinish();

        //then the user should be redirected to the checkout complete page
        cy.url().should("include", "/checkout-complete.html");

        //and the user should see the complete header
        CompletePage.completeHeader()
            .should("be.visible")
            .and("have.text", "Thank you for your order!");

        //and the user should see the message that the order has been dispatched
        CompletePage.completeMessage()
            .should("be.visible")
            .and(
                "contain.text",
                "Your order has been dispatched"
            );

        //and the user should see the back home button
        CompletePage.backHomeButton()
            .should("be.visible");
    });

});