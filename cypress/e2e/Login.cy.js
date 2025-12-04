
describe('Login Test', () => {
  it('should login using env variables', () => {

    cy.Login();
    cy.log('Logged in successfully');
    

    cy.url().should('include', '/inventory.html');
    cy.contains('Products').should('be.visible');
  });
});
