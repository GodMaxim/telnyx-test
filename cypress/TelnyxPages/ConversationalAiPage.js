class ConversationalAiPage {
get CloudStorageTitle () { return cy.get('#cloud-storage') }
get SeePricingBtn() { return cy.contains('a[href="/pricing/storage"]', 'See storage pricing') }

}
export default new ConversationalAiPage()