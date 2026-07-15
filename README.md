# SauceDemo E2E Test Automation

This project contains automated end-to-end tests for the SauceDemo application using Cypress and the Page Object Model (POM).

## Technologies

- Cypress
- JavaScript
- Page Object Model (POM)


## Clone the repository

```bash
git clone https://github.com/FelipeM-eng/cy_SAUCEDEMO-E2E_TEST.git
```

Go to the project folder.

```bash
cd cy_SAUCEDEMO-E2E_TEST
```


## Install dependencies

Run:

```bash
npm install
```

## Run the tests

Open Cypress:

```bash
npx cypress open
```

Select **E2E Testing** and choose your preferred browser.

To execute all tests, select:

- `checkout.cy.js`
- `loginNegative.cy.js`

Or run all tests in headless mode:

```bash
npx cypress run
```


## Project structure

```
cypress
│
|-- e2e
│   |-- checkout.cy.js
│   |-- loginNegative.cy.js
│
|-- fixtures
│   |-- users.json
│
|-- pageObjects
│   |-- LoginPage.js
│   |-- ProductsPage.js
│   |-- CartPage.js
│   |-- CheckoutPage.js
│   |-- OverviewPage.js
│   |-- CompletePage.js
│
|-- support
│   |-- commands.js
│   |-- e2e.js
│
|
node_modules
|
package.json
|
package-lock.json
|
cypress.config.js
|
README.md
|
.gitignore
```

## Test scenarios

### Positive scenario

- Login with a valid user
- Add a product to the cart
- Complete the checkout
- Verify the confirmation page

### Negative scenario

- Login with invalid credentials
- Verify the error message


## Assumptions

The assessment does not specify which product should be purchased during the checkout flow.

For this implementation, the **Sauce Labs Backpack** was used.