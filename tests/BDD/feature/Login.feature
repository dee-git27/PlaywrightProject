Feature: Perform Login Validations

Background:
    Given User navigates to Demoblaze page
    Then User logs in

Scenario Outline:
    Then User verifies the "<Product>" option visibility
    Then User gets total "<Product>" count
    Then User logs out
    Examples:
    | Product |
    | Phone   |
    | Laptop  |
