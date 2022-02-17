class LoginPage {
    getUsernameTextBox() {
        return cy.get("[data-test=email");
    }
    getPasswordTextBox() {
        return cy.get("[data-test=password");
    }
    getLoginButton() {
        return cy.xpath('//a[@class="login"]');
    }
    getErrorMessage() {
        return cy.get('[data-test="error"');
    }
}

export default LoginPage;

/**
 * @param {string} username - User name
 * @param {string} password - Password
 */

export function login(username, password) {
    const loginPage = new LoginPage();
    loginPage.getUsernameTextBox().clear().type(username);
    loginPage.getPasswordTextBox().clear().type(password);
    loginPage.getLoginButton().click();
}
