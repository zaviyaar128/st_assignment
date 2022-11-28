Feature: Add an event
    In order to make a reminder on calendar
    As a user
    I need to be able to create an event

  Scenario:
    Given Login with username and password
      | username | password |
      | zaviyaar128@gmail.com | qwerty@12345 |
    When I go to the create event process
    Then an event should be created
