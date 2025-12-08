describe('Login Test', () => {

  beforeEach(() => {
    cy.Login();  // every test will be logged in
  });

  it('should login using env variables', () => {
    cy.log('Logged in successfully');
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

  it('Add to Cart', () => {
    cy.get('[data-test="inventory-item-sauce-labs-backpack-img"]').click();
    cy.get('button[data-test="add-to-cart"]').click();
    cy.get('a.shopping_cart_link').click();
    cy.url().should('include', '/cart.html');
    cy.get('div.inventory_item_name').should('have.text', 'Sauce Labs Backpack');
    // logout after test
    cy.get('button#react-burger-menu-btn').click();
    cy.get('a[data-test="logout-sidebar-link"]').click();

  });
  
  it('Cart check', () => {
    cy.get('[data-test="inventory-item-sauce-labs-backpack-img"]').click();
    cy.get('button[data-test="add-to-cart"]').click();
    cy.get('span[data-test="shopping-cart-badge"]').scrollIntoView().should('have.text', '1').click();
    // assert that we are on the cart page
    cy.url().should('include', '/cart.html');
    cy.get('div.inventory_item_name').should('have.text', 'Sauce Labs Backpack');

  });

  it('Logout Test', () => {
    cy.get('button#react-burger-menu-btn').click();
    cy.get('a[data-test="logout-sidebar-link"]').click();
    
  });
 
});
