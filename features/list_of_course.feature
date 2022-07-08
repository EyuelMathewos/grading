Feature: checking course enrollment list
  Scenario: student seeing list of enroll courses
    Given student account
          |    id    |        email      |firstName | 
          |     1    |    test@gmail.com |   test   |
    When student want "All" of course enrolled
    Then the list of course a student enroll
    #courseEnrollment list
            |          course           |  courseDetails      |   userId   |    courseId   |   
            |  introduction to node     |  course discription |     1      |        1      |
            |  introduction to node     |  course discription |     2      |        1      |
            |  algorithm and data str   |  course discription |     1      |        2      |