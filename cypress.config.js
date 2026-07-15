const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.saucedemo.com/",
    viewportWidth: 1440,
    viewportHeight: 900
  }
});