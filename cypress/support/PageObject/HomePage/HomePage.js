class HomePage{

    getCartButton(){
        return cy.get('#shopping_cart_container > a')
    }
    getBurgerButton(){
        return cy.get('button#react-burger-menu-btn > a')
    }
    getLogoutButton(){
        return cy.get('a#logout_sidebar_link > a')
    }

}
export default HomePage;

export function logout(){
    const homePage = new HomePage();
    homePage.getBurgerButton().click();
    homePage.getLogoutButton().click();
}