Feature: Archive a collection
    In order to make a history of collection
    As an admin
    I need to be able to archive this collection
  
  Scenario: 
    Given Login with username and password
      | username | password |
      | zaviyaar128@gmail.com | qwerty@12345 |
    When I go to archive a collection process
    Then a archive confirmation box will be shown