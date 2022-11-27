Feature: Sign out
    In order to close my account
    As a user
    I need to be able to Sign out

  Scenario: 
    Given Login with username and password
      | username | password |
      | zaviyaar128@gmail.com | qwerty@12345 |
    When I go to Logout process
    Then I should be loged out