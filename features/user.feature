Feature: User features
Rule: There can be only One user relate to account
  Scenario: user signup for new account
    Given account information 
          |        email      |firstName | lastName   |  social    |
          |    test           |   test2  |            |            |
          |    test@gmail.com |   test   |  test      |            |

    When  registers for a new account
    Then  the following are expected value should be
          |        email      | expected |
          |        test       |   fail   |
          |    test@gmail.com |   pass   |