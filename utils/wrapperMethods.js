var WrapperMethods = function() {
  const fs = require('fs');
  const validTestDataFile = fs.readFileSync('test-data/customerInfo-valid.csv', 'utf8');
  const invalidTestDataFile = fs.readFileSync('test-data/customerInfo-invalid.csv', 'utf8');
  var customerInfo = [];

  this.useValidTestData = function(){
    customerInfo = [];
    let readByLines = validTestDataFile.split(/\r\n|\n/);
    return fetchTestData(readByLines);
  }

  this.useInValidTestData = function(){
    customerInfo = [];
    let readByLines = invalidTestDataFile.split(/\r\n|\n/);
    return fetchTestData(readByLines);
  }

  function fetchTestData(readByLines){                //this method is to read test data from csv file
    for (let i = 1; i < readByLines.length; i++) {
      let rowData = readByLines[i].split(',');
      let customer = {
        userName: rowData[0],
        firstName: rowData[1],
        lastName: rowData[2],
        customerName: rowData[3],
        role: rowData[4],
        emailID: rowData[5],
        cellPhone: rowData[6]
      }
      customerInfo.push(customer);
    }
    return customerInfo;
  };
};
module.exports = new WrapperMethods();