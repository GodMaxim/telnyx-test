class LoginPage {
    get EmailInput() { return cy.get('input[name="email"]') }
    get LoginPasswordBtn() { return cy.contains('button', 'Sign in with password') }
    get PasswordInput() { return cy.get('input[name="password"]') }
    get LoginBtn() { return cy.contains('button', 'Log In') }
    get ErrorMessage() { return cy.get('[role="alert"]') }
    get Form() { return cy.get('form[aria-label="loginForm"]') }

    setEmailInput(value, options = {}) {
        this.EmailInput.clear().type(value, { ...options })
    }

    setPasswordInput(value, options = {}) {
        this.PasswordInput.clear().type(value, { ...options })
    }
}
export default new LoginPage()