/**
 * Created by kells4 on 22/04/2016.
 */
module.exports = function(grunt) {
    'use strict';

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            cucumber: {
                files: ['features/**/support/*.js'],
                tasks: ['cucumberjs']
            }
        },
        'protractor-cucumber-html-report' : {
            options: {
                dest: 'output',
                output: 'report.html',
                testJSONResultPath: '',
                testJSONDirectory: 'output',
                reportTitle: "Test report generated via automatic tests"
            }
        },
        cucumberjs: {
            src: 'features',
            options: {
                steps: 'features/step_definitions',
                //support:'support',
                format: 'pretty'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-cucumber');
    grunt.loadNpmTasks('grunt-protractor-cucumber-html-report');

    grunt.registerTask('watch-tests', 'Starts a watch for test automation.', ['watch:cucumber']);

};