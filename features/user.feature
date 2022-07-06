Feature: User features
Rule: There can be only One user relate to account
  Scenario: user signup for new account
    Given account information 
    When  registers for a new account
    Then  user will be notify account created