Feature: Home Page
  As a user
  I want to visit a grabaseat home page
  So that I can access the various features on offer

  Scenario: Visit Home page
    Given I am on the homepage
    Then I should see a "header"
    Then I should see a "footerWrapper"
    Then I should see a "login" link
    Then I should see a "sign up" link
    And I should see a "flights" link
    And I should see a "packages" link
    And I should see a "reverse auctions" link
    And I should see a "destination deals" link
    And I should see a "tiki trips" link
    And I should not see a "experiences" link
    And I should not see a "cars" link
    And I should not see a "hotels" link
    And I should not see a "campervans" link
