class ConversationalAiPage {
get CloudStorageTitle () { return cy.get('#cloud-storage') }
get SeePricingBtn() { return cy.get ('a[href="/pricing/storage"]').first() }

}
export default new ConversationalAiPage()