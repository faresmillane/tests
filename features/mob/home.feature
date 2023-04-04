Feature: Feature name

    Feature Description

Scenario: test
    Given I navigate to "_home" page
    When I access in the "_home" page
    And I "click" on the "_home"."_accept_cookies" button
    Then I see the "_home"."_emprunteur_section" label
    And I see the "_home"."_presentation" label
    And I see "Je suis un épargnant" text in the "_home"."_je_suis_epargnant" field
    And I "click" on the "_home"."_je_suis_epargnant" button
    Then I access in the "_epargnant" page
    And I "click" on the "_epargnant"."_nav_button" button
    And I see the "_epargnant"."_acceder_mon_compte" label

