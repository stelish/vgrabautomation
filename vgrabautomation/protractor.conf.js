/**
 * Created by Steve Kelly on 20/05/2015
 * for AirNZ
 */
exports.config = {
    // 10.65.61.90 is the address to a remote vm for GAS with a
    // web driver instance running. You can also run this
    // locally if you which by starting web driver in stadalone mode
    // locally and changing below address to localhost
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    seleniumAddress: 'http://localhost:4444/wd/hub',

    //chromeOnly: true,
    //chromeDriver: 'node_modules/protractor/node_modules/selenium-webdriver/chromedriver',

    baseUrl: 'grabaseat.co.nz',

    multiCapabilities: [
        {
            'browserName': 'chrome',
            // set corp proxy here
            // set magic proxy
            proxy: {
                proxyType: 'manual',
                httpProxy: '10.65.61.157:3128',
                sslProxy: '10.65.61.157:3128'
            }
        }
    ],
    // suite enables running specific tests
    // run protractor test with following example
    // protractor protractor.conf.js --suite lff,slider
    suites: {
       // lff : 'archived/lff/*_Spec.js'
        all: 'features/*.feature',
        home : 'features/homepage.feature',
        destination : 'features/destinationpage.feature'
    },

   // framework: 'jasmine2',

    // set to "custom" instead of cucumber.
    framework: 'custom',

    // path relative to the current config file
    frameworkPath: require.resolve('protractor-cucumber-framework'),

    // Options to be passed to Jasmine-node.
    jasmineNodeOpts: {
        // If true, print colors to the terminal.
        showColors: true,
        defaultTimeoutInterval: 60000,
        isVerbose: false,
        includeStackTrace: true
    },
    // A callback function called once configs are read but before any environment
    // setup. This will only run once, and before onPrepare.
    // You can specify a file containing code to run by setting beforeLaunch to
    // the filename string.
    beforeLaunch: function() {
        // At this point, global variable 'protractor' object will NOT be set up,
        // and globals from the test framework will NOT be available. The main
        // purpose of this function should be to bring up test dependencies.
    },
    onPrepare: function() {
        //var jasmineReporters = require('jasmine-reporters');
        //
        //// returning the promise makes protractor wait for the reporter config before executing tests
        //return browser.getProcessedConfig().then(function(config) {
        //    // you could use other properties here if you want, such as platform and version
        //    var browserName = config.capabilities.browserName;
        //    var timestamp = new Date().getDate().toString() + new Date().getMonth().toString() +
        //                    new Date().getFullYear().toString() + new Date().getHours().toString() +
        //                    new Date().getMinutes().toString() + new Date().getSeconds().toString();
        //    var junitReporter = new jasmineReporters.JUnitXmlReporter({
        //        consolidateAll: true,
        //        savePath: 'testoutput',
        //        // this will produce distinct xml files for each capability
        //        filePrefix: browserName + '-' + timestamp + '-xmloutput',
        //        modifySuiteName: function(generatedSuiteName, suite) {
        //            // this will produce distinct suite names for each capability,
        //            // e.g. 'firefox.login tests' and 'chrome.login tests'
        //            return browserName + '.' + generatedSuiteName;
        //        }
        //    });
        //    jasmine.getEnv().addReporter(junitReporter);
        //});
    },
    // A callback function called once tests are finished.
    // onComplete can optionally return a promise, which Protractor will wait for
    // before shutting down webdriver.
    onComplete: function() {
        // At this point, tests will be done but global objects will still be
        // available.
    },
    // If set, protractor will save the test output in json format at this path.
    // The path is relative to the location of this config.
    resultJsonOutputFile: 'output/output.json',

    // If true, protractor will restart the browser between each test.
    // CAUTION: This will cause your tests to slow down drastically.
    restartBrowserBetweenTests: false,
    // Options to be passed to Cucumber (when set up as a custom framework).
    cucumberOpts: {
        // Require files before executing the features.
        require: [
            'features/step_definitions/*.js',
            'features/step_definitions/**/*.js'
            ],
        // Only execute the features or scenarios with tags matching @dev.
        // This may be an array of strings to specify multiple tags to include.
        //tags: '@dev',
        // How to format features (default: progress)
        format: 'summary'
        // Other options include `coffee`, `noSnippets`, and `dryRun`
    },
    // Turns off source map support.  Stops protractor from registering global
    // variable `source-map-support`.  Defaults to `false`
    skipSourceMapSupport: false,

    // Turns off WebDriver's environment variables overrides to ignore any
    // environment variable and to only use the configuration in this file.
    // Defaults to `false`
    disableEnvironmentOverrides: false
};