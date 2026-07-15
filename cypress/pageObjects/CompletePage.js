class CompletePage {

    //find the complete header on the complete page
    completeHeader() {
        return cy.get('[data-test="complete-header"]');
    }

    //Find the complete message on the complete page
    completeMessage() {
        return cy.get('[data-test="complete-text"]');
    }

    //find the back home button
    backHomeButton() {
        return cy.get('[data-test="back-to-products"]');
    }

}

//Export the CompletePage class as a singleton instance
export default new CompletePage();