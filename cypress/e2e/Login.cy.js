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


// =========================================================================
// describe('Login Test', () => {

//   beforeEach(() => {
//     cy.allure().feature('E2E Sauce Demo');
//     cy.allure().story('User Login');
//     cy.allure().step('Run custom login command', () => {
//       cy.Login();
//     });
//   });

//   it('should login using env variables', () => {
//     cy.allure().severity('critical');
//     cy.allure().step('Verify successful login', () => {
//       cy.log('Logged in successfully');
//       cy.contains('Products').should('be.visible');
//     });
//   });

//   it('Check select product', () => {
//     cy.allure().story('Product Details');
//     cy.allure().step('Click on Backpack image', () => {
//       cy.get('img[data-test="inventory-item-sauce-labs-backpack-img"]').click();
//     });

//     cy.allure().step('Verify product detail page', () => {
//       cy.get('div[data-test="inventory-item-name"]').should('have.text', 'Sauce Labs Backpack');
//     });

//     cy.allure().step('Read product price dynamically', () => {
//       cy.get('div[data-test="inventory-item-price"]').then(($price) => {
//         cy.log("Price found: " + $price.text());
//       });
//     });
//   });

//   it('Add to Cart', () => {
//     cy.allure().story('Add To Cart');
    
//     cy.allure().step('Open product detail page', () => {
//       cy.get('[data-test="inventory-item-sauce-labs-backpack-img"]').click();
//     });

//     cy.allure().step('Click Add to Cart', () => {
//       cy.get('button[data-test="add-to-cart"]').click();
//     });

//     cy.allure().step('Open Cart Page', () => {
//       cy.get('a.shopping_cart_link').click();
//       cy.url().should('include', 'cart.html');
//       cy.get('div.inventory_item_name').should('have.text', 'Sauce Labs Backpack');
//     });

//     cy.allure().step('Logout after test', () => {
//       cy.get('button#react-burger-menu-btn').click();
//       cy.get('a[data-test="logout-sidebar-link"]').click();
//     });
//   });

//   it('Cart check', () => {
//     cy.allure().story('Cart Validation');
    
//     cy.allure().step('Add backpack to cart', () => {
//       cy.get('[data-test="inventory-item-sauce-labs-backpack-img"]').click();
//       cy.get('button[data-test="add-to-cart"]').click();
//     });
    
//     cy.allure().step('Verify cart count and open cart', () => {
//       cy.get('span[data-test="shopping-cart-badge"]').scrollIntoView().should('have.text', '1').click();
//     });
    
//     cy.allure().step('Validate item in cart page', () => {
//       cy.url().should('include', '/cart.html');
//       cy.get('div.inventory_item_name').should('have.text', 'Sauce Labs Backpack');
//     });
//   });

//   it('Logout Test', () => {
//     cy.allure().story('Logout');
    
//     cy.allure().step('Open side menu', () => {
//       cy.get('button#react-burger-menu-btn').click();
//     });

//     cy.allure().step('Click Logout', () => {
//       cy.get('a[data-test="logout-sidebar-link"]').click();
//     });
//   });

// });
