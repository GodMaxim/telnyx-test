import HomePage from '../TelnyxPages/HomePage'
import SignUpPage from '../TelnyxPages/SignUpPage'
import OurNetworkPage from '../TelnyxPages/OurNetworkPage'
import PartnersPage from '../TelnyxPages/PartnersPage'
import ConversationalAiPage from '../TelnyxPages/ConversationalAiPage'
import StoragePage from '../TelnyxPages/StoragePage'
import AiPage from '../TelnyxPages/AiPage'
import LoginPage from '../TelnyxPages/LoginPage'
import ContactUsPage from '../TelnyxPages/ContactUsPage'
import IntegrationPage from '../TelnyxPages/IntegrationPage'
import ShopPage from '../TelnyxPages/ShopPage'

beforeEach(() => {
  cy.visit('/')
  cy.get('#onetrust-accept-btn-handler').click({ force: true, multiple: true})
  cy.clearCookies();
  cy.clearLocalStorage();
  });

  describe('Telnyx site test', () => {
  it('Verify navigation to the Sign-Up page', () => {
    HomePage.clickOnSignUpBtn()
    cy.url({ timeout: 15000 }).should('include', '/sign-up')
    SignUpPage.SignUpTitle.should('be.visible', { timeout: 15000 }).should('contain.text', 'Create your account')
  })

   it('Verify the "Sign Up" navigation from the "Our Network" page', () => {
    HomePage.OurNetworkBtn.scrollIntoView().click()
    cy.url({ timeout: 15000 }).should('include', '/our-network')
    OurNetworkPage.GlobalNetworkTitle.should('be.visible', { timeout: 15000 }).should('contain.text', 'Our private, global network')
    OurNetworkPage.SignUpBtn.click({ force: true })
    cy.url().should('include', '/sign-up')
    })

    it('Verify navigation to the "Become a Partner" application form', () => {
    HomePage.WhyTelnyxBtn.click()
    HomePage.PartnersBtn.click({ force: true })
    cy.url().should('include', '/partners')
    PartnersPage.BecomePartnerBtn.invoke('removeAttr', 'target').click()
    cy.url().should('include', 'https://partners.telnyx.com/login?apply=true')   
})

    it('Verify the email newsletter subscription functionality', () => {
    HomePage.ShopBtn.scrollIntoView().invoke('attr', 'href').then((href) => {
      cy.visit(href);
      })
    Cypress.on('uncaught:exception', () => false)
    cy.url().should('include', 'shop.telnyx.com');
    ShopPage.Title.scrollIntoView().should('be.visible')
    ShopPage.EmailUnput.type('myemail@gmail.com').should('have.value', 'myemail@gmail.com')
    ShopPage.SubscribeBtn.should('exist').and('not.be.disabled').click()
    ShopPage.Capcha.should(($iframes) => {
      const visibleIframes = $iframes.filter(':visible')
     expect(visibleIframes.length, 'Ожидалась как минимум одна видимая капча').to.be.at.least(1)}).should('be.visible')
    });

    it('Verify product search functionality in the shop', () => {
    HomePage.ShopBtn.scrollIntoView().invoke('attr', 'href').then((href) => {
      cy.visit(href);
      })
    Cypress.on('uncaught:exception', () => false);
      cy.url().should('include', 'shop.telnyx.com')
      ShopPage.SearchBtn.click()
      ShopPage.SearchInput.type('Hat{enter}')
      ShopPage.Cards.should('have.length.greaterThan', 0).first().scrollIntoView().should('be.visible')
      });

      it('Verify currency switching functionality on the pricing', () => {
      HomePage.AiAssistantBtn.scrollIntoView().click()
      cy.url({ timeout: 15000 }).should('include', '/voice-ai-agents');
      AiPage.SeePricingBtn.filter(':visible').first().scrollIntoView().should('be.visible', { timeout: 15000 }).click()
      cy.url().should('include', '/pricing/conversational-ai')
      ConversationalAiPage.CloudStorageTitle.scrollIntoView().should('be.visible', { timeout: 15000 })
      ConversationalAiPage.SeePricingBtn.click()
      cy.url().should('include', '/pricing/storage')
      StoragePage.PayTitle.scrollIntoView().should('be.visible')
      StoragePage.CurrencyBtn.click()
      StoragePage.CurrencyMenu.click({ force: true })
      StoragePage.PricingTable.find(':contains("€")').should('be.visible')
     });

     it('Error message on invalid login credentials', () => {
      cy.intercept('GET', '**/cdn-cgi/challenge-platform/**', { statusCode: 200, body: '' }).as('ignoreCF');
      cy.on('uncaught:exception', (err) => {
        if (err.message.includes('Cloudflare Turnstile')) {
      return false}
      return true})
      HomePage.LogInBtn.invoke('removeAttr', 'target').click({ force: true})
      LoginPage.setEmailInput('myemail@gmail.com', { delay: 50 })
      LoginPage.LoginPasswordBtn.click()
      LoginPage.setPasswordInput('Superdupergreatpassword123!', { delay: 50 })
      LoginPage.Form.submit()
      LoginPage.ErrorMessage.should(`be.visible`).contains(`That email and password combination is not valid, or your browser could not be authenticated. Please try again.`)
     });

      it('Verify all navigation paths to the "Talk to an expert" page from the Home page', () => {
      HomePage.ContactUsBtn.click({ force: true })
      cy.url({ timeout: 20000 }).should('include', '/contact-us');
      ContactUsPage.PageTitle.should('be.visible', { timeout: 15000 }).should('contain.text', 'Talk to an expert')
      cy.visit('/')
      cy.url({ timeout: 25000 }).should('include', 'telnyx.com/')
      HomePage.TalkToExpertBtn.click()
      ContactUsPage.PageTitle.should('be.visible', { timeout: 15000 }).should('contain.text', 'Talk to an expert')
      cy.visit('https://telnyx.com/')
      cy.url({ timeout: 25000 }).should('include', 'telnyx.com/')
      HomePage.PageSectionTitle.scrollIntoView({ timeout: 15000 })
      HomePage.SectionContactUsBtn.click()
      cy.url({ timeout: 20000 }).should('include', '/contact-us');
      ContactUsPage.PageTitle.should('be.visible', { timeout: 15000 }).should('contain.text', 'Talk to an expert')
      cy.visit('/')
      });

      it('Verify search functionality for Microsoft Teams integration', () => {
      HomePage.DevelopersBtn.click()
      HomePage.IntergationBtn.invoke('removeAttr', 'target').click({ force: true })
      IntegrationPage.SearchInputField.scrollIntoView().should('be.visible', { timeout: 10000 }).type('Teams{enter}')
      IntegrationPage.TeamsLink.click()
      cy.url({ timeout: 10000 }).should('include', '/microsoft-teams')
      });

      it.skip('Verify the built-in AI chat agent responsiveness', () => {
      HomePage.AIChat.scrollIntoView({ block: 'center', timeout: 15000 }).should('be.visible');
      HomePage.setInputChatField('Hello')
      HomePage.SendMessageBtn.click()
      HomePage.AIChat.scrollIntoView({ block: 'center' }).should('be.visible');
      HomePage.AiAnswerText.should('be.visible', { timeout: 10000 }).and('not.be.empty')
      HomePage.AiAnswerText.should('contain', 'Hello! How can I help you today?');
      });
      });
  
