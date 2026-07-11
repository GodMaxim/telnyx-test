class ShopPage {
get Title () {return cy.get('h2').contains('Subscribe to our email') }
get EmailUnput () { return cy.get ('input[type="email"]') }
get SubscribeBtn() { return cy.get ('#Subscribe') }
get Capcha() { return cy.get('iframe[src*="hcaptcha.com"]', { timeout: 20000 })}
get SearchBtn () { return cy.get('summary[aria-label="Search"]') }
get SearchInput () { return cy.get('input#Search-In-Modal') }
get Cards () { return cy.get('.card', { timeout: 15000 })}

setSearchInput(value) {
    this.SearchInput().clear().type(value)
}   
}
export default new ShopPage()