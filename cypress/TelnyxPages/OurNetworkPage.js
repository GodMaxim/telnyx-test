class OurNetworkPage {
    get GlobalNetworkTitle() { return cy.get ('h1') }
    get SignUpBtn() { return cy.contains ('a[href="/sign-up"]', 'Sign up') }

    clickOnSignUpBtn() {
        this.SignUpBtn.click()
    }
}
export default new OurNetworkPage()