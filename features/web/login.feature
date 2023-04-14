Feature: Login

Scenario: login with good credentials
    Given I navigate to "_login" page
    And I click on the "_login"."_accept_cookies" button
    And I click on the "_login"."_je_me_connecte" button
    When I write "kykus@bnpp.test" in the "_login"."_email" field
    And I write "Password*04" in the "_login"."_password" field
    And I click on the "_login"."_se_connecter" button
    Then I access in the "_choix_entreprise" page
    And I see the "_choix_entreprise"."_choix_1" label 
