Feature: Create dashboard
    In order to create a working environment
    As a user
    I need to be able to create new dashboard
  
  Scenario:
    Given Login with username and password
      | username | password |
      | zaviyaar128@gmail.com | qwerty@12345 |  
    When I go to create dashboard process
    Then a new dashboard should be created
