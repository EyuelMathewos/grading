const { Given, When, Then } = require('@cucumber/cucumber');
const Validator = require('validatorjs');

let data, errorval, validity;

const createValidation = {
  "email": "required|email",
  "firstName": "required|string",
  "lastName": "required|string"
};

const validator = ( body, rules, customMessages ) => {
    return new Promise(async function (resolve, reject) {
        const validation = new Validator(body, rules, customMessages);
        validation.passes(() => resolve({status:true}));
        validation.fails(() => {
            validation.errors.status=false
            reject(validation.errors)
        });
    })
};

Given('user information', function () {
  data = {
    email :"test5",     
    firstName:"test5", 
    lastName:"data1",  
    social:[]
  }
});

When('create user account', function () {
  let value = validator(data, createValidation, {}).then(async (response) => {
   validity = response
  }).catch(error=>{
    errorval = error
  })
});

Then('validate user information', function () {
   if(errorval){
    console.log(errorval)
    return errorval
   }else{
    console.log(validity)
    return validity
   }
});