Feature: Remove Database
    In order to delete a database
    As an admin
    I need to be able to remove this database
  
  Scenario: 
    Given Login with username and password
      | username | password |
      | zaviyaar128@gmail.com | qwerty@12345 |
    When I go to Remove this Database process
    Then a confirmation box will be shown
