Feature: login

Scenario: login
    Given I see the "_login"."_je_me_connecte" label
    And I click on the "_login"."_je_me_connecte" button
    When I write "kykus@bnpp.test" in the "_login"."_email" field
    And I write "Password*04" in the "_login"."_password" field
    And I click on the "_login"."_se_connecter" button
    And I click on the "_login"."_refuser_activation_biometrique" button
    Then I see the "_choix_entreprise"."choix_bloc" label



