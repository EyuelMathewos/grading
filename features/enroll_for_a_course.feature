@wip
Feature: Enrolling for a course
  Scenario: student enrolling for a course 
    Given student account with id <id> email <email>
          |    id    |        email      |firstName | 
          |     1    |    test@gmail.com |   test   |
    And student already enroll for courses
            |          course           |  courseDetails      |   courseId   |   
            |  Introduction to Database |  course discription |     1        |
    When student enroll for course from list
            |          course           |  courseDetails      |   courseId   |   
            |  introduction to node     |  course discription |     2        |
            |  introduction to nc       |  course discription |     3        |
            |  algorithm and data str   |  course discription |     4        |
    Then Student enrolled list should be update like
    
            |          course           |  courseDetails      |   courseId   |   
            |  Introduction to Database |  course discription |     1        |
            |  introduction to node     |  course discription |     2        |
            |  introduction to nc       |  course discription |     3        |
            |  algorithm and data str   |  course discription |     4        |


            #As a <stakeholder>
            # I want <something>
            # So that <I can achieve some business goal>

            # As a student
            # I want to enroll for a course
            # So that i can view procced with course material