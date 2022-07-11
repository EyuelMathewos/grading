Feature: User features
Rule: There can be only One user relate to account
  Scenario: user signup for new account
    Given account information 
          |        email      |firstName | lastName   |  social    |
          |    test1          |   test1  |            |            |
          |  test11@gmail.com |   test2  |  test2     |            |

    When  registers for a new account
    Then  Then should get a response with status code 200 or 412