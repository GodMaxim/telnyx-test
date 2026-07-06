class PartnersApplyPage {
    get BecomePartnerBtn() { return cy.get ('a[href="https://partners.telnyx.com/login?apply=true"]').first() }
}
export default new PartnersApplyPage()