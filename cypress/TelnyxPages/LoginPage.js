class LoginPage {
    get EmailInput() { return cy.get('input[name="email"]') }
    get LoginPasswordBtn() { return cy.contains('button', 'Sign in with password') }
    get PasswordInput() { return cy.get('input[name="password"]') }
    get LoginBtn() { return cy.contains('button', 'Log In') }
    get ErrorMessage() { return cy.get('[role="alert"]') }

    setEmailInput(value) {
        this.EmailInput.clear().type(value)
    }

    setPasswordInput(value) {
        this.PasswordInput.clear().type(value)
    }
}
export default new LoginPage()