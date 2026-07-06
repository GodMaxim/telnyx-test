class ContactUsPage {
    get PageTitle () { return cy.get('h1') }
    get MainMenuBtn () { return cy.get('header').find('a[href="/"]').filter(':visible').first();}
}
export default new ContactUsPage()