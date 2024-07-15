const { defineConfig } = require('cypress')

module.exports = defineConfig({
  env: {
    API_BASE_URL: 'http://jsonplaceholder.typicode.com/users',
  },
  experimentalSessionAndOrigin: true,
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
  },
},
  
})