class PartnersPage {
    get BecomePartnerBtn() { return cy.contains ('a[href="https://partners.telnyx.com/login?apply=true"]', 'Become a partner today') }
}
export default new PartnersPage()