/**
 * Created by kells4 on 22/04/2016.
 */

var support = require('../support');
var should = require('should');

var steps = function() {

    this.Given(/^I am on the homepage$/, function(callback) {
        support.getDeskTopBrowser(this, 'https://grabaseat.co.nz/', function(result){
            setTimeout(callback, 4000);
        });
    });

    this.Given(/^I am on the destinationspage$/, function(callback) {
        support.getDeskTopBrowser(this, 'https://grabaseat.co.nz/destination/Auckland', function(result){
            setTimeout(callback, 4000);
        });
    });

    this.Then(/^I should see a "([^"]*)" link$/, function(link, callback) {
        console.log('checking '+link);
        support.isElementPresent(this, link, function(result){
            result.should.equal(true);
            setTimeout(callback, 1000);
        });
    });

    this.Then(/^In header i should see a "([^"]*)" link$/, function(link, callback) {
        console.log('checking '+link);
        support.isElementPresentInHeader(this, link, function(result){
            result.should.equal(true);
            setTimeout(callback, 1000);
        });
    });

    this.Then(/^In header i should not see a "([^"]*)" link$/, function(link, callback) {
        console.log('checking '+link);
        support.isElementPresentInHeader(this, link, function(result){
            result.should.equal(false);
            setTimeout(callback, 1000);
        });
    });

    this.Then(/^I should not see a "([^"]*)" link$/, function(link, callback) {
        console.log('checking '+link);
        support.isElementPresent(this, link, function(result){
            result.should.equal(false);
            setTimeout(callback, 1000);
        });
    });

    this.Then(/^I should see a "([^"]*)"$/, function(link, callback) {
        support.isElementPresentById(this, link, function(result){
            result.should.equal(true);
            setTimeout(callback, 1000);
        });
    });
};

module.exports = steps;