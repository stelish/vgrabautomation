/**
 * Created by kells4 on 26/04/2016.
 */
var Support = function(){
};

Support.prototype.getDeskTopBrowser = function(sut, url, callback){
    console.log('getting '+url);
    sut.browser.get(url);
    sut.browser.driver.manage().window().maximize();
    callback(true);
};

Support.prototype.getMobileBrowser = function(sut, url, callback){
    console.log('getting '+url);
    sut.browser.get(url);
    callback(true);
};

Support.prototype.findByBinding = function(sut, item, callback){
    sut.browser.findElement(sut.by.binding(item)).then(function(result) {
        callback(result);
    });
};

Support.prototype.isElementPresent = function(sut, find, callback){

    sut.browser.isElementPresent(sut.by.linkText(find)).then(function(result) {
        callback(result)
    });

};

Support.prototype.isElementPresentInHeader = function(sut, find, callback){
    var headerElem = sut.by.id('header');
    var navItem = headerElem.sut.by.linkText(find);

    headerElem.isElementPresent(  ).then(function(res){
            callback(res)
    });
};

Support.prototype.isElementPresentByClass = function(sut, find, callback){
    console.log('looking for '+find);
    sut.browser.isElementPresent(sut.by.css('.'+find)).then(function(result) {
        callback(result);
    });
};

Support.prototype.isElementPresentById = function(sut, find, callback){
    console.log('looking for '+find);
    sut.browser.isElementPresent(sut.by.id(find)).then(function(result) {
        console.log('result is '+result);
        callback(result);
    });
};

module.exports = new Support();