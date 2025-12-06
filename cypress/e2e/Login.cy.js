describe('Login Test', () => {

  beforeEach(() => {
    cy.Login();  // every test will be logged in
  });

  it('should login using env variables', () => {
    cy.log('Logged in successfully');
    cy.url().should('include', '/inventory.html');
    cy.contains('Products').should('be.visible');
  });

  it('Check select product', () => {
    cy.get('img[data-test="inventory-item-sauce-labs-backpack-img"]').click();
    // aasert that we are on the product detail page
    cy.get('div[data-test="inventory-item-name"]').should('have.text', 'Sauce Labs Backpack');
    // cy.get('div[data-test="inventory-item-price"]').should('have.text', '$29.90');

    cy.get('div[data-test="inventory-item-price"]').then(($price) => {
      cy.log("Price found: " + $price.text());
    });
  });

});
