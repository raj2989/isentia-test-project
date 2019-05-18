var Homepage = function() {
  var searchBox = element(by.css('input'));
  var records = element.all(by.css('.smart-table-data-cell'));

  this.gotoURL = function() {
    browser.get('http://www.way2automation.com/angularjs-protractor/webtables/');
  };

  this.searchUserName = function(name) {
    searchBox.sendKeys(name);
  };

  this.clearSearchText = function() {
    searchBox.clear()
  };

  this.readUserInfo = function() {
    return {
      firstName: records.get(0).getText(),
      lastName: records.get(1).getText(),
      userName: records.get(2).getText(),
      customerName: records.get(4).getText(),
      role: records.get(5).getText(),
      emailID: records.get(6).getText(),
      cellPhone: records.get(7).getText()
    }
  }

};
module.exports = new Homepage();