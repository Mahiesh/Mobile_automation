Feature: Sauce lab mobile app login functionality.

  Background: 
    Given App gets launched and login screen displays

  Scenario Outline: As a user, I should be able to login with valid credentials
    Given user enters valid username and password
    When user taps on login button
    Then user is logged in successfully and navigated to product screen

  # Scenario: As a user, I should not be able to login with in-valid credentails
  #   Given provide wrong username and password
  #   When tap on login button 
  #   Then user can see an error messsage 
        