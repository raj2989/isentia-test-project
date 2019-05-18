/* *** AUTHOR: Rajakumar Muthaian *** */

exports.config = {

  seleniumAddress: 'http://localhost:4444/wd/hub',

  capabilities: {
  	browserName: 'chrome'
  },

/* To run the test in multi-browsers */
/* multiCapabilities: [{
   	browserName: 'chrome'
   }, {
     browserName: 'internet explorer'
   }], */

  suites: {
    demo: ['test-suites/1.DemoTestCase-PASS.js','test-suites/2.DemoTestCase-FAIL.js']
  },

  jasmineNodeOpts: {
    showColors: true,
  }

};