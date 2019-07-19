exports.config = {
  tests: './*_test.js',

  output: './output',

  helpers: {
    WebDriver: {
      url: 'http://facebook.com',
      browser: 'chrome'
    }
  },

  include: {
    I: './steps_file.js'
  },

  bootstrap: null,
  mocha: {},
  name: 'jenkins-automation',

  plugins:{
    wdio: {
      enabled: true,
      services: ['selenium-standalone']
    }
  }
  
}