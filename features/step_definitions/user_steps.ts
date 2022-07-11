import supertest from "supertest";
import { assertThat } from 'hamjest';
const { Given, When, Then } = require('@cucumber/cucumber');
const userapi = require("../../app");
const request = supertest(userapi);

let data: Array<object>;
let statusValues: Array <number> = [];
let response: any;

Given('account information', function (dataTable: any) {
  data = dataTable.hashes()
  return data;

});

When('registers for a new account', async function () {
  for (const key in data) {
    let userData = data[key];
    response = await request.post("/api/users/").send(userData);
    statusValues[parseInt(key)] = response.status;
  }
});

Then('Then should get a response with status code {int} or {int}', function (success: number, fail: number) {
  for (const key in statusValues) {
    if (statusValues[key] == success) {
      assertThat(statusValues[key], success);
    } else {
      assertThat(statusValues[key], fail);
    }
  }
});