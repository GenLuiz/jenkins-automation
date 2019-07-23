exports.config = {
  tests: './*_test.js',

  output: './output',

  services: ['docker'],

  helpers: {
    WebDriver: {
      url: 'http://facebook.com',
      browser: 'chrome'
    }
  },

  dockerOptions: {
    image: 'selenium/standalone-chrome',
    healthCheck: 'http://localhost:4444',
    options: {
        p: ['4444:4444'],
        shmSize: '2g'
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