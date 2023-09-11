const { defineConfig } = require('cypress')

module.exports = defineConfig({
  env: {
    API_BASE_URL: 'http://jsonplaceholder.typicode.com/users',
  },
  experimentalSessionAndOrigin: true,
  e2e: {
    setupNodeEvents(on, config) {},
    baseUrl: 'https://the-internet.herokuapp.com',
    projectId: '9cpkcx',
  },
})
