class StoragePage {
    get PayTitle () { return cy.get('h2').contains('Pay as you go') }
    get CurrencyBtn() { return cy.get('#currency-filter') }
    get CurrencyMenu() { return cy.contains('[role="option"]', 'EUR') }
    get PricingTable() { return cy.get('.grid-item-full-width') }
}
export default new StoragePage()