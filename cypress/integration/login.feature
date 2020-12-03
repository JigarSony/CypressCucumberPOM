Feature: Login

    User want to login into SwagLab

    Scenario: invalid Username and valid Password Login
    Given user is on SwagLab Login page
    When user enter invalid username and valid password and click on Login button
    Then user redirected to home page

    Scenario: valid Username and invalid Password Login
    #Given user is on SwagLab Login page
    When user enter valid username and invalid password and click on Login button
    Then user redirected to home page

    Scenario: invalid Username and invalid Password Login
    #Given user is on SwagLab Login page
    When user enter invalid username and invalid password and click on Login button
    Then user redirected to home page

    Scenario: valid Login
    #Given user is on SwagLab Login page
    When user enter valid username password and click on Login button
    Then user redirected to home page

    #Report part
    #module how can we run
    #add to cart - product add to cart - nee scenario

