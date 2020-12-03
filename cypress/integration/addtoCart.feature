Feature: Checkout Process

    User want to purchase product

Scenario: purchase a product with valid details 
    Given user is on SwagLab Login page
    When user enter valid username password and click on Login button
    Then user redirected to home page
    When user click on AddToCart button
    Then verify button text changed to Remove
    When user click on Cart icon
    Then verify user redirected to Your Cart page
    When user click on Checkout button
    Then user redirected to Checkout: Your Information page
    When user enter Information and click on Continue button
    Then user redirected to Checkout: Overview page
    When user click on Finish button
    Then user redirected to Finish page and Thankyou message