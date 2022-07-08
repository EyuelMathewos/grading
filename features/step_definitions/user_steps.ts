const { Given, When, Then } = require('@cucumber/cucumber');
const { validator } = require('../../validator/index');
const { createValidation } = require('../../validator/userValidation');

let data:any;
let statusValues:any = {};

Given('account information', function (dataTable:any) {
  data = dataTable.hashes()
  return data;
});

When('registers for a new account', async function () {
  for (const key in data) {
    let value = validator(data[key], createValidation, {}).then(async (response:any) => {
      let validity = response
      const valdationStatus:boolean = response.status;
      if (valdationStatus) {
        statusValues[key] = "pass";
      } else {
        statusValues[key] = "fail";
      }

    }).catch((error: any) => {
      console.log(error)
      statusValues[key] = "fail";
    })

  }
});

Then('the following are expected value should be', function (dataTable: { hashes: () => any; }) {
  let compareVal = dataTable.hashes();
  for (const key in compareVal) {
    if (compareVal[key].expected == statusValues[key]) {
      console.log(`${compareVal[key].email} ${compareVal[key].expected} values ${statusValues[key]} `)
    }
  }
});