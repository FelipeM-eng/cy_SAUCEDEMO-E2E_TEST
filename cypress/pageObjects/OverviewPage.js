class OverviewPage {

    //Find the finish button on the overview page
    finishButton() {
        return cy.get('[data-test="finish"]');
    }

    //Method to click the finish button
    clickFinish() {
        this.finishButton().click();
    }

}

//Export the OverviewPage class as a singleton instance
export default new OverviewPage();