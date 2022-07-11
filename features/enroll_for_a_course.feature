@wip
Feature: Enrolling for a course
  Scenario: student enrolling for a course 
    Given student account with id <id> email <email> role of student <role>
          |    id    |        email      |firstName | role  |
          |     1    |    test@gmail.com |   test   |   0   |
    And student already enroll for courses
    When student enroll for a course
            |          course            |   courseId   |   
            |  software Engenering       |      6       |
    Then should get response from enroll courses with status code 200