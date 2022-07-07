const { Given, When, Then } = require('@cucumber/cucumber');

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient()
let data,response, error;
Given('account information', function () {
 this.data = {
  email :"test5@gmail.com",     
  firstName:"test5", 
  lastName:"data1",  
  social:[]
}
return data;
});

When('registers for a new account', async function () {
try {
    response = await prisma.user.create({
    data: this.data,
  })
  return response;
}catch(error){
  error = error;
  console.log(error)
 return error;
}
});

Then('user will be notify account created', function () {
 if(error){
  return "faild to create user"
 }{
   return response;
 }
});