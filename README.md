# Cypress Test Automation 

This project contains end-to-end (E2E) test scripts written in **Cypress** for automated UI testing.

---

## 📁 Project Structure

```
cypress/
 ├── e2e/
 │    └── Login.cy.js
 ├── fixtures/
 ├── support/
 └── cypress.config.js
.env
package.json
```

---

## ⚙️ Installation

1. Install Node.js (LTS version recommended)
2. Run the following commands:

```bash
npm install
```

If Cypress needs to be installed manually:

```bash
npm install cypress --save-dev
```

---

## ▶️ Running the Tests

### Open Cypress UI

```bash
npx cypress open
```

Select E2E > choose browser > run the test.

### Run Tests in Terminal (Headless)

```bash
npx cypress run
```

---

## 🔑 Environment Variables (.env)

Create a `.env` file in the project root:

```
USER_NAME=standard_user
PASSWORD=secret_sauce
API_URL=https://www.saucedemo.com
```

---

## 🧪 Included Test Cases

### ✔️ Login Test

* Login using credentials from `.env`
* Verify the **Products** page is visible

### ✔️ Product Details Test

* Click Sauce Labs Backpack
* Assert product name
* Assert price value

### ✔️ Add To Cart Test

* Add item to cart
* Verify cart page URL
* Check item is added in cart

### ✔️ Cart Check Test

* Validate cart count (badge = 1)
* Validate item name inside the cart

### ✔️ Logout Test

* Open sidebar
* Click logout

---

## 📄 Cypress Config (cypress.config.js)

This file loads environment variables and configures Allure reports.

---

## 🧰 Allure Report

To generate Allure results:

```bash
npm run allure:generate
```

To open the report:

```bash
npm run allure:open
```

---

## 📝 Notes

* All login credentials are stored securely in `.env`
* Do **not** push `.env` to GitHub
* Use selectors with `data-test` for stable automation

---


Automated & Managed by **Sabbir Ahamed**
