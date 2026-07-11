class ContactUsPage {
    get PageTitle () { return cy.get('h1', { timeout: 20000 }); }
    get MainMenuBtn () { return cy.get('a.mchNoDecorate', 'Home') }
}
export default new ContactUsPage()