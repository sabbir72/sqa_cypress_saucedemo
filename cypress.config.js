// const { defineConfig } = require("cypress");

// module.exports = defineConfig({
//   e2e: {
//     setupNodeEvents(on, config) {
//       // implement node event listeners here
//     },
//   },
// });


// require('dotenv').config();
// const { defineConfig } = require('cypress');

// module.exports = defineConfig({
//   e2e: {
//     baseUrl: process.env.API_URL,
//   },
//   env: {
//     USER_NAME: process.env.USER_NAME,
//     PASSWORD: process.env.PASSWORD,
//   },
// });

// const { defineConfig } = require("cypress");

// module.exports = defineConfig({
//   e2e: {
//     setupNodeEvents(on, config) {
//       require('@shelex/cypress-allure-plugin/writer')(on, config);
//       return config;
//     },
//   },
// });

require('dotenv').config();
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: process.env.API_URL,

    setupNodeEvents(on, config) {
      // Allure Plugin setup
      require('@shelex/cypress-allure-plugin/writer')(on, config);

      return config;
    },
  },

  env: {
    USER_NAME: process.env.USER_NAME,
    PASSWORD: process.env.PASSWORD,
    allure: true
  },
});

