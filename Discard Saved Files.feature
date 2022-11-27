Feature: Discard saved field values
    In order to remove the saved values of fields of database
    As an admin
    I need to be able to discard saved field values

  Scenario:
    Given Login with username and password
      | username | password |
      | zaviyaar128@gmail.com | qwerty@12345 |
    When I go to discard saved field values process
    Then warning box should be displayed