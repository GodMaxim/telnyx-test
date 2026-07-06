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

Cypress.on('uncaught:exception', (err, runnable) => { 
  return false;
  })

  describe('Telnyx site test', () => {
  xit('Verify navigation to the Sign-Up page', () => {
    cy.visit('https://telnyx.com/')
    HomePage.AcceptCookiesBtn.click();
    HomePage.clickOnSignUpBtn()
    cy.url().should('include', '/sign-up')
    SignUpPage.SignUpTitle.should('be.visible', { timeout: 10000 }).should('contain.text', 'Create your account')
  })

   xit('Verify the "Sign Up" navigation from the "Our Network" page', () => {
    cy.visit('https://telnyx.com/')
    HomePage.AcceptCookiesBtn.click();
    HomePage.OurNetworkBtn.scrollIntoView().should('be.visible').click()
    cy.url().should('include', '/our-network')
    OurNetworkPage.GlobalNetworkTitle.should('be.visible', { timeout: 10000 }).should('contain.text', 'Our private, global network')
    OurNetworkPage.clickOnSignUpBtn()
    cy.url().should('include', '/sign-up')
    })

    xit('Verify navigation to the "Become a Partner" application form', () => {
    cy.visit('https://telnyx.com/')
    HomePage.AcceptCookiesBtn.click()
    HomePage.WhyTelnyxBtn.click()
    HomePage.PartnersBtn.click({ force: true })
    cy.url().should('include', '/partners')
    PartnersPage.BecomePartnerBtn.invoke('removeAttr', 'target').click()
    cy.url().should('include', 'https://partners.telnyx.com/login?apply=true')   
})

    xit('Verify the email newsletter subscription functionality', () => {
    cy.visit('https://telnyx.com/')
    HomePage.AcceptCookiesBtn.click()
    HomePage.ShopBtn.scrollIntoView().invoke('removeAttr', 'target').click()
    cy.origin('https://shop.telnyx.com', () => {
    cy.contains('h2', 'Subscribe to our email').scrollIntoView().should('be.visible')
    cy.get('input[type="email"]').type('myemail@gmail.com').should('have.value', 'myemail@gmail.com')
    cy. get('#Subscribe')
  });
   });

    xit('Verify product search functionality in the shop', () => {
    cy.visit('https://telnyx.com/')
    HomePage.AcceptCookiesBtn.click()
    HomePage.ShopBtn.scrollIntoView().invoke('removeAttr', 'target').click()
    cy.origin('https://shop.telnyx.com', () => {
      cy.url().should('include', 'shop.telnyx.com');
      cy.get('summary[aria-label="Search"]').click()
      cy.get('input#Search-In-Modal').type('Hat{enter}')
      cy.get('.card').should('have.length.greaterThan', 0).first().scrollIntoView().should('be.visible')
      });
      });

      xit('Verify currency switching functionality on the pricing', () => {
      cy.visit('https://telnyx.com/')
      HomePage.AcceptCookiesBtn.click()
      HomePage.AiAssistantBtn.scrollIntoView().click()
      cy.url({ timeout: 15000 }).should('include', '/voice-ai-agents');
      AiPage.SeePricingBtn.filter(':visible').first().scrollIntoView().should('be.visible').click()
      cy.url().should('include', '/pricing/conversational-ai')
      ConversationalAiPage.CloudStorageTitle.scrollIntoView().should('be.visible', { timeout: 10000 })
      ConversationalAiPage.SeePricingBtn.click()
      cy.url().should('include', '/pricing/storage')
      StoragePage.PayTitle.scrollIntoView().should('be.visible')
      StoragePage.CurrencyBtn.click()
      cy.contains('[role="option"], button, a', 'EUR').click({ force: true });
      cy.contains('€', { timeout: 10000 }).should('be.visible');
     });

     xit('Error message on invalid login credentials', () => {
      cy.visit('https://telnyx.com/')
      HomePage.AcceptCookiesBtn.click()
      HomePage.LogInBtn.invoke('removeAttr', 'target').click()
      LoginPage.setEmailInput('myemail@gmail.com', { delay: 50 })
      LoginPage.LoginPasswordBtn.click()
      LoginPage.setPasswordInput('Superdupergreatpassword123!', { delay: 50 })
     });

      xit('Verify all navigation paths to the "Talk to an expert" page from the Home page', () => {
      cy.visit('https://telnyx.com/')
      HomePage.AcceptCookiesBtn.click()
      HomePage.ContactUsBtn.click({ force: true })
      cy.url().should('include', '/contact-us')
      ContactUsPage.PageTitle.should('be.visible', { timeout: 10000 }).should('contain.text', 'Talk to an expert')
      ContactUsPage.MainMenuBtn.click({ force: true })
      cy.url({ timeout: 25000 }).should('include', 'telnyx.com/')
      HomePage.TalkToExpertBtn.click({ force: true })
      cy.url().should('include', '/contact-us')
      ContactUsPage.PageTitle.should('be.visible', { timeout: 10000 }).should('contain.text', 'Talk to an expert')
      ContactUsPage.MainMenuBtn.click({ force: true })
      cy.url({ timeout: 25000 }).should('include', 'telnyx.com/')
      HomePage.PageSectionTitle.scrollIntoView()
      HomePage.SectionContactUsBtn.click({ force: true })
      cy.url().should('include', '/contact-us')
      ContactUsPage.PageTitle.should('be.visible', { timeout: 10000 }).should('contain.text', 'Talk to an expert')
      ContactUsPage.MainMenuBtn.click({ force: true })
      });

      xit('Verify search functionality for Microsoft Teams integration', () => {
      cy.visit('https://telnyx.com/')
      HomePage.AcceptCookiesBtn.click()
      HomePage.DevelopersBtn.click()
      HomePage.IntergationBtn.invoke('removeAttr', 'target').click({ force: true })
      IntegrationPage.SearchInputField.scrollIntoView().should('be.visible', { timeout: 10000 }).type('Teams{enter}')
      IntegrationPage.TeamsLink.click()
      cy.url({ timeout: 10000 }).should('include', '/microsoft-teams')
      });

      xit('Verify the built-in AI chat agent responsiveness', () => {
      cy.visit('https://telnyx.com/')
      HomePage.AcceptCookiesBtn.click()
      HomePage.AIChat.scrollIntoView({ block: 'center', timeout: 10000 }).should('be.visible');
      cy.wait(10000)
      HomePage.setInputChatField('Hello')
      HomePage.SendMessageBtn.click()
      HomePage.AIChat.scrollIntoView({ block: 'center' }).should('be.visible');
      HomePage.AiAnswerText.should('be.visible', { timeout: 10000 }).and('not.be.empty')
      HomePage.AiAnswerText.should('contain', 'Hello! How can I help you today?');
      });
});