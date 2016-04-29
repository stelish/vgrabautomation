/**
 * Created by kells4 on 22/04/2016.
 */
var pc = require('../../lib');
var Cucumber = require('../../node_modules/cucumber');
var fs = require('fs');
var CucumberHtmlReport = require('../../node_modules/cucumber-html-report');
var outputDir = 'output';

var steps = function() {
    var seleniumAddress = 'http://localhost:4444/wd/hub';
    var options = { browser : 'chrome', timeout : 100000 };
    this.World = pc.world(seleniumAddress, options);

    this.After(function(scenario, callback) {
        if (scenario.isFailed()) {
            this.browser.takeScreenshot().then(function(base64png) {
                var decodedImage = new Buffer(base64png, 'base64').toString('binary');
                scenario.attach(decodedImage, 'image/png');
                callback();
            }, function(err) {
                console.log('error taking snapshot');
                callback(err);
            });
        } else {
            callback();
        }

        this.quit(callback);
    });

    var createHtmlReport = function(sourceJson) {
        var report = new CucumberHtmlReport({
            source: sourceJson, // source json
            dest: outputDir, // target directory (will create if not exists)
            name: 'report.html',
            template: 'templates/dashboard.html'
        });
        report.createReport();
    };

    var JsonFormatter = Cucumber.Listener.JsonFormatter();
    JsonFormatter.log = function(string) {
        if (!fs.existsSync(outputDir)) {
            fs.mkdirSync(outputDir);
        }

        var targetJson = outputDir + '/cucumber_report.json';
        fs.writeFile(targetJson, string, function(err) {
            if (err) {
                console.log('Failed to save cucumber test results to json file.');
                console.log(err);
            } else {
                createHtmlReport(targetJson);
            }
        });
    };

    this.registerListener(JsonFormatter);
};

module.exports = steps;