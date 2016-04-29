Feature: Destination Page
  As a user
  I want to visit a destination page
  So that I can access the various features on offer

  Scenario: Visit Destinations Page
    Given I am on the destinationspage
    Then I should see a "header"
    Then I should see a "footerWrapper"
    Then I should see a "login" link
    Then I should see a "sign up" link
    Then I should see a "flights" link
    Then I should see a "packages" link
    Then I should see a "reverse auctions" link
    Then I should see a "destination deals" link
    Then I should see a "tiki trips" link
    And I should not see a "experiences" link
    And I should not see a "cars" link
    And I should not see a "campervans" link