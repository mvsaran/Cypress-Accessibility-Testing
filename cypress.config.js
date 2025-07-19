const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on) {
      on('task', {
        log(message) {
          console.log(message);
          return null;
        },
      });
    },
    baseUrl: 'https://unifiedportal-mem.epfindia.gov.in',
    chromeWebSecurity: false,
  },
});