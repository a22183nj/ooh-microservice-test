@regression
Feature: Verify Successful HTTP GET Response

  Scenario Outline: Check Successful HTTP GET Response from buythisspace.com.au
    When I do GET /adsites/qld-townsville-garbutt-woolcock-street-6/ service
    Then I get a HTTP Status as <statusCode>

    Examples:
      | statusCode       |
      | 200              |
