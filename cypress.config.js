// const { defineConfig } = require("cypress");

// module.exports = defineConfig({
//   e2e: {
//     setupNodeEvents(on, config) {
//       // implement node event listeners here
//     },
//   },
// });


require('dotenv').config();
const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: process.env.API_URL,
  },
  env: {
    USER_NAME: process.env.USER_NAME,
    PASSWORD: process.env.PASSWORD,
  },
});

