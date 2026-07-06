class OurNetworkPage {
    get GlobalNetworkTitle() { return cy.get ('h1') }
    get SignUpBtn() { return cy.get ('a[href="/sign-up"]').eq(1) }

    clickOnSignUpBtn() {
        this.SignUpBtn.click()
    }
}
export default new OurNetworkPage()