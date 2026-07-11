class HomePage {
    get SignUpBtn() { return cy.contains ('a[href="/sign-up"]', 'Sign up') }
    get AcceptCookiesBtn() { return cy.get('#onetrust-accept-btn-handler') }
    get OurNetworkBtn() { return cy.get('footer').contains('a[href="/our-network"]', 'Our Network') }
    get WhyTelnyxBtn() { return cy.contains ('button', 'Why Telnyx') }
    get PartnersBtn() { return cy.contains('a', 'Partners') }
    get ShopBtn() { return cy.get ('a[href="https://shop.telnyx.com/"]') }
    get AiAssistantBtn() { return cy.get ('a[href="https://telnyx.com/products/voice-ai-agents"]') }
    get LogInBtn() { return cy.contains ('a[href="https://portal.telnyx.com"]', 'Log in') }
    get ContactUsBtn() { return cy.contains('a[href="https://telnyx.com/contact-us"]', 'Contact us');}
    get HomePage() {return cy.get('a[href="/"]') }
    get TalkToExpertBtn() { return cy.contains('a[href="/contact-us"]', 'TALK TO AN EXPERT') }
    get PageSectionTitle() { return cy.get('section').contains('h2', 'Where milliseconds matter') }
    get SectionContactUsBtn() { return cy.contains('a[href="/contact-us"]', 'CONTACT US') }
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