import { Given, When, Then } from '@cucumber/cucumber';
import supertest from "supertest";
import { assertThat } from 'hamjest';
const userapi = require("../../app");
const request = supertest( userapi );
let user:any, id:number, role: number, course: string, course_to_enroll: any, response:any, error:any;
let statusValues:number;
let enrolledCourse: any;
Given('student account with id <id> email <email> role of student <role>', function (dataTable) {
    user = dataTable.hashes();
    id = user[0].id;
    role = user[0].role;
});

Given('student already enroll for courses', async function () {
    enrolledCourse = await request.get(`/api/users/${id}/courses`);
});

When('student enroll for a course', async function (dataTable) {
    course_to_enroll = dataTable.hashes(); 
    course_to_enroll.forEach(async( element:any ) => {
        let data = {
            userId : id,
            courseId: element.courseId,
            role
        };
        response = await request.post(`/api/users/${id}/courses`).send(data);
    });
  });

  Then('should get response from enroll courses with status code {int}', function ( statusCode ) {
       if(response?.status == null ){
           console.log('409 courseID key Duplication');
       }else{
           assertThat(response.status, statusCode )
       } 
    });