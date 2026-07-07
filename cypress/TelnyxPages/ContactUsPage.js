class ContactUsPage {
    get PageTitle () { return cy.get('h1', { timeout: 20000 }).should('be.visible');}
    get MainMenuBtn () { return cy.get('a[href="/"]', { timeout: 10000 }).filter(':visible').first();}
}
export default new ContactUsPage()