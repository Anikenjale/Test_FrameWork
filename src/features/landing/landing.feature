@smoke
Feature: Landing Page Validation

  Scenario: Verify landing page loads successfully
    Given I open the application
    Then I should see the heading "Welcome to the-internet"
    And I should see "Available Examples" section
    And I should see link "A/B Testing"
