const { Given, When, Then } = require('@cucumber/cucumber');
const Validator = require('validatorjs');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient()
let data;
let statusValues = {};
const createValidation = {
  "email": "required|email",
  "firstName": "required|string",
  "lastName": "required|string"
};
const validator = (body, rules, customMessages) => {
  return new Promise(async function (resolve, reject) {
    const validation = new Validator(body, rules, customMessages);
    validation.passes(() => resolve({
      status: true
    }));
    validation.fails(() => {
      validation.errors.status = false
      reject(validation.errors)
    });
  })
};
Given('account information', function (dataTable) {
  data = dataTable.hashes()
  return data;
});

When('registers for a new account', async function () {
  for (const key in data) {
    let value = validator(data[key], createValidation, {}).then(async (response) => {
      validity = response
      const valdationStatus = response.status;
      if (valdationStatus) {
        statusValues[key] = "pass";
      } else {
        statusValues[key] = "fail";
      }

    }).catch(error => {
      console.log(error)
      errorval = error
      statusValues[key] = "fail";
    })

  }
});

Then('the following are expected value should be', function (dataTable) {
  let compareVal = dataTable.hashes();
  for (const key in compareVal) {
    if (compareVal[key].expected == statusValues[key]) {
      console.log(`${compareVal[key].email} ${compareVal[key].expected} values ${statusValues[key]} `)
    }
  }
});