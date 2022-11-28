Feature: Edit Database
    In order to edit a database
    As an admin
    I need to be able to save changes
  
  Scenario: 
    Given Login with username and password
      | username | password |
      | zaviyaar128@gmail.com | qwerty@12345 |
    When I go to Save Changes process
    Then changes should be saved 