Feature: Dropping a course
  Scenario: student Dropping a course enrolled for 
    Given student siginup with this account info
          |    id    |        email      |firstName | 
          |     1    |    test@gmail.com |   test   |
    And student taking courses list are
            |          course           |  courseDetails      |   courseId   |   
            |  Introduction to Database |  course discription |     1        |
            |  introduction to node     |  course discription |     2        |
            |  introduction to nc       |  course discription |     3        |
            |  algorithm and data str   |  course discription |     4        |
    When student drop for course from list
            |          course           |  courseDetails      |   courseId   |   
            |  introduction to nc       |  course discription |     3        |
    Then Student enrolled list after droping course should look like
            |          course           |  courseDetails      |   courseId   |   
            |  Introduction to Database |  course discription |     1        |
            |  introduction to node     |  course discription |     2        |
            |  algorithm and data str   |  course discription |     4        |