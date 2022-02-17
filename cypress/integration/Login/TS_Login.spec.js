import HomePage, { logout } from "../../support/PageObject/HomePage/HomePage";
import LoginPage, {
    login,
} from "../../support/PageObject/LoginPage/LoginPage";

describe("Login function", () => {
    const homePage = new HomePage();
    const loginPage = new LoginPage();

    var testdata;
    var dataPath = "login/accountList";

    before(function () {
        cy.fixture(dataPath).then(function (accountJsonFile) {
            testdata = accountJsonFile.accounts;
            cy.log(testdata);
        });
    });

    beforeEach(() => {
        cy.visit("/");
    });

    after(() => {
        logout();
    });

    it("Should show error message if login with invalid account", function () {
        var invalidAccounts = testdata.slice(3);
        invalidAccounts.forEach((invalidAccount) => {
            loginPage
                .getErrorMessage()
                .should("be.visible")
                .invoke("text")
                .should("equal", invalidAccount.message);
        });
    });

    it("Should show successfully with valid account", function () {
        var validAccount = testdata[3];
        login(validAccount.username, validAccount.password);
        homePage.getCartButton().should("be.visible")
    });
});
