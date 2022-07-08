import { Given, When, Then } from '@cucumber/cucumber';
let fillter: string, user: { id: any; }[];

Given('student account', function (dataTable: { hashes: () => any; }) {
    user = dataTable.hashes();
});

When('student want {string} of course enrolled', function (string: any) {
    fillter = string;
});

Then('the list of course a student enroll', function (dataTable: { hashes: () => any; }) {
    let course = dataTable.hashes();
    let id = user[0].id
    let newList: any[] = [];
    if (fillter == 'All') {
        course.filter((elements: any) => {
            elements.userId == id && newList.push(elements)
        })
    }
    console.log(newList)
    return newList
});