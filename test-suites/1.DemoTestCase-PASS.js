var Homepage = require('../pages/homePage');
var wpm = require('../utils/wrapperMethods');

/* *** AUTHOR: Rajakumar Muthaian *** */

describe('Isentia - Test Automation Demo Project Using Protractor', function() {
 
    beforeEach(function(){
      Homepage.gotoURL();
    });

  it('should pass the test case when customer details are matching in the table', function() {
     let customersInfo = wpm.useValidTestData();
   
     customersInfo.forEach(function(customer){
      Homepage.clearSearchText();
      Homepage.searchUserName(customer.userName)
      let customerDataFromTable = Homepage.readUserInfo();
      expect(customerDataFromTable.firstName).toEqual(customer.firstName)
      expect(customerDataFromTable.lastName).toEqual(customer.lastName)
      expect(customerDataFromTable.userName).toEqual(customer.userName)
      expect(customerDataFromTable.customerName).toEqual(customer.customerName)
      expect(customerDataFromTable.emailID).toEqual(customer.emailID)
      expect(customerDataFromTable.cellPhone).toEqual(customer.cellPhone) 
      })
  });
  
});