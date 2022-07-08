import { Given, When, Then } from '@cucumber/cucumber';
const { assertThat, is } = require('hamjest')
let userdata: any;
let currently_Taking: any , droping_Course: any;
let Newly_Filtered:any;
Given('student siginup with this account info', function (dataTable) {
 userdata = dataTable.hashes();
});

Given('student taking courses list are', function (dataTable) {
    currently_Taking = dataTable.hashes();
});

When('student drop for course from list', function (dataTable) { 
    droping_Course = dataTable.hashes();
    let courseId = droping_Course[0].courseId;
    Newly_Filtered = currently_Taking.filter((elements: any) => elements.courseId !==  courseId );
});

Then('Student enrolled list after droping course should look like', function (dataTable) {
    const Expected_values = dataTable.hashes();
    assertThat( Newly_Filtered, is(Expected_values) );
});