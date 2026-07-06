class HomePage {
    get SignUpBtn() { return cy.get ('a[href="/sign-up"]').first() }
    get AcceptCookiesBtn() { return cy.get('#onetrust-accept-btn-handler') }
    get OurNetworkBtn() { return cy.get ('a[href="/our-network"]').last() }
    get WhyTelnyxBtn() { return cy.contains ('button', 'Why Telnyx') }
    get PartnersBtn() { return cy.contains('a', 'Partners') }
    get ShopBtn() { return cy.get ('a[href="https://shop.telnyx.com/"]') }
    get AiAssistantBtn() { return cy.get ('a[href="https://telnyx.com/products/voice-ai-agents"]') }
    get LogInBtn() { return cy.get ('a[href="https://portal.telnyx.com"]:visible').first() }
    get ContactUsBtn() { return cy.get('header').contains('a', 'Contact us', { matchCase: false }).first() }
    get HomePage() {return cy.get('a[href="/"]') }
    get TalkToExpertBtn() { return cy.get('a[href="/contact-us"]').contains('TALK TO AN EXPERT', { matchCase: false }).first(); }
    get PageSectionTitle() { return cy.get('section').contains('h2', 'Where milliseconds matter') }
    get SectionContactUsBtn() { return cy.contains('h2', 'Where milliseconds matter').parents('section').find('a[href="/contact-us"]').first(); }
    get DevelopersBtn() { return cy.contains ('button', 'Developers') }
    get IntergationBtn() { return cy.contains ('a', 'Integrations') }
    get AIChat() { return cy.contains ('span', 'CHAT TO AN AGENT') }
    get InputChatField() {return cy.get('input[placeholder*="Type message"]') }
    get SendMessageBtn() { return cy.get('button[type="submit"]') }
    get AiAnswerText() { return cy.get('a[href="mm:think"]').parent() }

    clickOnSignUpBtn() {
        this.SignUpBtn.click()
    }

    clickOnOurNetworkBtn() {
        this.OurNetworkBtn.click()
    }

    clickOnWhyTelnyxBtn() {
        this.WhyTelnyxBtn.click()
    }

    clickOnPartnersBtn() {
        this.PartnersBtn.click()
    }  

    clickOnShopBtn() {
        this.ShopBtn.click()
    }

    clickOnAiAssistantBtn() {
        this.AiAssistantBtn.click()
    }

    clickOnLogInBtn() {
        this.LogInBtn.click()
    }

    clickOnContactUsBtn() {
        this.ContactUsBtn.click()
    }   

    clickOnHomePage() {
        this.HomePage.click()
    }

    clickOnTalkToExpertBtn() {
        this.TalkToExpertBtn.click()
    }

    clickOnSectionContactUsBtn() {
        this.SectionContactUsBtn.click()
    }   

    clickOnDevelopersBtn() {
        this.DevelopersBtn.click()
    }   

    clickOnIntergationBtn() {
        this.IntergationBtn.click()
    }   

    clickOnAIChat() {
        this.AIChat.click()
    }

    setInputChatField(value) {
        this.InputChatField.type(value)
    }

    clickOnSendMessageBtn() {
        this.SendMessageBtn.click()
    }
 }

export default new HomePage()