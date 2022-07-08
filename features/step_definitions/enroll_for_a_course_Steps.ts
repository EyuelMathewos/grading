import { Given, When, Then } from '@cucumber/cucumber';
const { assertThat, is } = require('hamjest')
let studentinfo:any, course: string, course_to_enroll: any;
let enrolledCourse: any;
Given('student account with id <id> email <email>', function (dataTable) {
    studentinfo = dataTable.hashes();
});

Given('student already enroll for courses', function (dataTable) {
    enrolledCourse = dataTable.hashes();
});

When('student enroll for course from list', function (dataTable) {
    course_to_enroll = dataTable.hashes(); 
  });

Then('Student enrolled list should be update like', function (dataTable) {
    let Expected_values = dataTable.hashes();
    let New_Enrolled_List =[enrolledCourse[0], ...course_to_enroll]

    assertThat( New_Enrolled_List, is(Expected_values) )
});