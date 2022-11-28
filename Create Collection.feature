Feature: Create collection
    In order to organize my data questions and queries
    As a user
    I need to be able to create new collection
  
  Scenario:
    Given Login with username and password
      | username | password |
      | zaviyaar128@gmail.com | qwerty@12345 |
    When I go to create process
    Then a new collection should be created
