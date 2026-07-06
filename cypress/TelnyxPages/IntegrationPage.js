class IntegrationPage {
    get SearchInputField() { return cy.get('input[placeholder="Search integrations"]') }
    get TeamsLink() { return cy.get('a[href="/integrations/microsoft-teams"]') }
}
export default new IntegrationPage()
