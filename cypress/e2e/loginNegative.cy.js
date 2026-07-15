import LoginPage from "../pageObjects/LoginPage";

describe("SauceDemo - Login Negative Scenarios", () => {

   //Given create a variable to hold the user data from the fixture
   let user;
   
   //And load the user data from the fixture before the tests run
   before(() => {
       cy.fixture("users").then((users) => {
           user = users.invalidUser;
       });
   });

   //And start on the login page before each test
   beforeEach(() => {
       LoginPage.visit();
   });

   //Test case: Attempt to login with invalid credentials
   it("should display an error message for invalid credentials", () => {

        //When the user attempts to login with invalid credentials
        LoginPage.login(user.username, user.password);

        //Then the user should see an error message
        LoginPage.errorMessage()
            .should("be.visible")
            .and("contain.text", "Username and password do not match any user in this service");

        //And the user should still be on the login page
        cy.url().should("eq", "https://www.saucedemo.com/");
    });    
});