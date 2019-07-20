exports.config = {
  tests: './*_test.js',

  output: './output',

  helpers: {
    WebDriver: {
      url: 'http://facebook.com',
      browser: 'chrome',
      desiredCapabilities: {
        chromeOptions:{
          args: ['--headless', '--disable-gpu', '----window-size=800,600']
        }
      }
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