class StoragePage {
    get PayTitle () { return cy.get('h2').contains('Pay as you go') }
    get CurrencyBtn() { return cy.get('#currency-filter') }
}
export default new StoragePage()