@searchWeather
Feature: Test API search weather in your city

  @NAB_REQ_2.1
  Scenario Outline: Verify Response Code call api with 2 params q and appid
    When user sends API SearchWeather request with information corresponding "<KEY>"
      | KEY | city_name                                                                                                                                                                        | api_key                          |
      | 2   | city name not exists                                                                                                                                                             | cc0fffc8405efdadca37749bbc586e41 |
      | 3   |                                                                                                                                                                                  | cc0fffc8405efdadca37749bbc586e41 |
      | 4   |                                                                                                                                                                                  | cc0fffc8405efdadca37749bbc586e41 |
      | 5   | BG                                                                                                                                                                               | cc0fffc8405efdadca37749bbc586e41 |
      | 6   | ha noi vn                                                                                                                                                                        | cc0fffc8405efdadca37749bbc586e41 |
      | 7   | ha noi, cn                                                                                                                                                                       | cc0fffc8405efdadca37749bbc586e41 |
      | 8   | Krungthepmahanakhon Amonrattanakosin Mahintharayutthaya Mahadilokphop Noppharatratchathaniburirom Udomratchaniwetmahasathan Amonphimanawatansathit Sakkathattiyawitsanukamprasit | cc0fffc8405efdadca37749bbc586e41 |
      | 10  | hanoi                                                                                                                                                                            | appid not exists                 |
      | 11  | hanoi                                                                                                                                                                            | 57c1c22050f92b6d7a0a4c5716912bbe |
      | 12  | London                                                                                                                                                                           | cc0fffc8405efdadca37749bbc586e41 |
      | 13  | Tokyo                                                                                                                                                                            | cc0fffc8405efdadca37749bbc586e41 |
      | 14  | Thành phố hồ chí minh                                                                                                                                                            | cc0fffc8405efdadca37749bbc586e41 |
      | 15  | Thai nguyen                                                                                                                                                                      | cc0fffc8405efdadca37749bbc586e41 |
      | 16  | 上海                                                                                                                                                                               | cc0fffc8405efdadca37749bbc586e41 |
      | 17  | Chengdu                                                                                                                                                                          | cc0fffc8405efdadca37749bbc586e41 |
      | 18  | 東京都                                                                                                                                                                              | cc0fffc8405efdadca37749bbc586e41 |
      | 19  | Nagoya                                                                                                                                                                           | cc0fffc8405efdadca37749bbc586e41 |
      | 20  | Hà Nội, VN                                                                                                                                                                       | cc0fffc8405efdadca37749bbc586e41 |
      | 21  | Hà Nam,                                                                                                                                                                          | cc0fffc8405efdadca37749bbc586e41 |
      | 22  | Bắc Giang, VN                                                                                                                                                                    | cc0fffc8405efdadca37749bbc586e41 |
      | 23  | Cần     Thơ                                                                                                                                                                      | cc0fffc8405efdadca37749bbc586e41 |
      | 24  | Vĩnh Long, VN                                                                                                                                                                    | cc0fffc8405efdadca37749bbc586e41 |

    Then user check response code, response body with information corresponding "<KEY>"
      | KEY | response_code | cod |
      | 2   | 404           | 404 |
      | 3   | 400           | 400 |
      | 4   | 400           | 400 |
      | 5   | 404           | 404 |
      | 6   | 404           | 404 |
      | 7   | 404           | 404 |
      | 10  | 401           | 401 |
      | 11  | 401           | 401 |
      | 12  | 200           | 200 |
      | 13  | 200           | 200 |
      | 14  | 200           | 200 |
      | 15  | 200           | 200 |
      | 16  | 200           | 200 |
      | 17  | 200           | 200 |
      | 18  | 200           | 200 |
      | 19  | 200           | 200 |
      | 20  | 200           | 200 |
      | 21  | 404           | 404 |
      | 22  | 200           | 200 |
      | 23  | 404           | 404 |
      | 24  | 200           | 200 |
    @NAB_REQ_2.1
    Examples:
      | KEY |
      | 2   |
    @NAB_REQ_2.1
    Examples:

      | KEY |
      | 3   |
    Examples:
      | KEY |
      | 4   |
    Examples:
      | KEY |
      | 5   |
    Examples:
      | KEY |
      | 6   |
    Examples:
      | KEY |
      | 7   |
    Examples:
      | KEY |
      | 8   |
    Examples:
      | KEY |
      | 10  |
    Examples:
      | KEY |
      | 11  |
    Examples:
      | KEY |
      | 12  |
    Examples:
      | KEY |
      | 13  |
    Examples:
      | KEY |
      | 14  |
    Examples:
      | KEY |
      | 15  |
    Examples:
      | KEY |
      | 16  |
    Examples:
      | KEY |
      | 17  |
    Examples:
      | KEY |
      | 18  |
    Examples:
      | KEY |
      | 19  |
    Examples:
      | KEY |
      | 20  |
    Examples:
      | KEY |
      | 21  |
    Examples:
      | KEY |
      | 22  |
    Examples:
      | KEY |
      | 23  |
    Examples:
      | KEY |
      | 24  |


  @NAB_REQ_2.2
  Scenario Outline: Verify Message Error when response is error
    When user sends API SearchWeather request with information corresponding "<KEY>"
      | KEY | city_name                                                                                                                                                                        | api_key                          |
      | 2   | city name not exists                                                                                                                                                             | cc0fffc8405efdadca37749bbc586e41 |
      | 3   |                                                                                                                                                                                  | cc0fffc8405efdadca37749bbc586e41 |
      | 4   |                                                                                                                                                                                  | cc0fffc8405efdadca37749bbc586e41 |
      | 5   | BG                                                                                                                                                                               | cc0fffc8405efdadca37749bbc586e41 |
      | 6   | ha noi vn                                                                                                                                                                        | cc0fffc8405efdadca37749bbc586e41 |
      | 7   | ha noi, cn                                                                                                                                                                       | cc0fffc8405efdadca37749bbc586e41 |
      | 8   | Krungthepmahanakhon Amonrattanakosin Mahintharayutthaya Mahadilokphop Noppharatratchathaniburirom Udomratchaniwetmahasathan Amonphimanawatansathit Sakkathattiyawitsanukamprasit | cc0fffc8405efdadca37749bbc586e41 |
      | 10  | hanoi                                                                                                                                                                            | appid not exists                 |
      | 11  | hanoi                                                                                                                                                                            | 57c1c22050f92b6d7a0a4c5716912bbe |
      | 21  | Hà Nam,                                                                                                                                                                          | cc0fffc8405efdadca37749bbc586e41 |

    Then user check message in response body when response fail with information corresponding "<KEY>"
      | KEY | response_code | cod | message                                                                           |
      | 2   | 404           | 404 | city not found                                                                    |
      | 3   | 400           | 400 | Nothing to geocode                                                                |
      | 4   | 400           | 400 | Nothing to geocode                                                                |
      | 5   | 404           | 404 | city not found                                                                    |
      | 6   | 404           | 404 | city not found                                                                    |
      | 7   | 404           | 404 | city not found                                                                    |
      | 8   | 404           | 404 | city not found                                                                    |
      | 10  | 401           | 401 | Invalid API key. Please see http://openweathermap.org/faq#error401 for more info. |
      | 11  | 401           | 401 | Invalid API key. Please see http://openweathermap.org/faq#error401 for more info. |
      | 21  | 404           | 404 | city not found                                                                    |
    Examples:
      | KEY |
      | 2   |
    Examples:
      | KEY |
      | 3   |
    Examples:
      | KEY |
      | 4   |
    Examples:
      | KEY |
      | 5   |
    Examples:
      | KEY |
      | 6   |
    Examples:
      | KEY |
      | 7   |
    Examples:
      | KEY |
      | 8   |
    Examples:
      | KEY |
      | 10  |
    Examples:
      | KEY |
      | 11  |
    Examples:
      | KEY |
      | 21  |

  @NAB_REQ_2.3
  Scenario Outline: Verify Content in Body when Response is 200
    When user sends API SearchWeather request with information corresponding "<KEY>"
      | KEY | city_name             | api_key                          |
      | 12  | London                | cc0fffc8405efdadca37749bbc586e41 |
      | 13  | Tokyo                 | cc0fffc8405efdadca37749bbc586e41 |
      | 14  | Thành phố hồ chí minh | cc0fffc8405efdadca37749bbc586e41 |
      | 15  | Thai nguyen           | cc0fffc8405efdadca37749bbc586e41 |
      | 16  | 上海                    | cc0fffc8405efdadca37749bbc586e41 |
      | 17  | Chengdu               | cc0fffc8405efdadca37749bbc586e41 |
      | 18  | 東京都                   | cc0fffc8405efdadca37749bbc586e41 |
      | 19  | Nagoya                | cc0fffc8405efdadca37749bbc586e41 |
      | 20  | Hà Nội, VN            | cc0fffc8405efdadca37749bbc586e41 |
      | 22  | Bắc Giang, VN         | cc0fffc8405efdadca37749bbc586e41 |
      | 23  | Cần     Thơ           | cc0fffc8405efdadca37749bbc586e41 |
      | 24  | Vĩnh Long, VN         | cc0fffc8405efdadca37749bbc586e41 |

    Then user check city name and country for response successfully with information corresponding "<KEY>"
      | KEY | response_code | cod | message | city_name_expected | country_expected |
      | 12  | 200           | 200 |         | London             | GB               |
      | 13  | 200           | 200 |         | Tokyo              | JP               |
      | 14  | 200           | 200 |         | Ho Chi Minh City   | VN               |
      | 15  | 200           | 200 |         | Thai Nguyen        | VN               |
      | 16  | 200           | 200 |         | Shanghai           | CN               |
      | 17  | 200           | 200 |         | Chengdu            | CN               |
      | 18  | 200           | 200 |         | Tokyo              | JP               |
      | 19  | 200           | 200 |         | Nagoya             | JP               |
      | 20  | 200           | 200 |         | Hanoi              | VN               |

      | 22  | 200           | 200 |         | Bắc Giang          | VN               |
      | 23  | 200           | 200 |         | Can Tho            | VN               |
      | 24  | 200           | 200 |         | Vĩnh Long          | VN               |
    Examples:
      | KEY |
      | 12  |
    Examples:
      | KEY |
      | 13  |
    Examples:
      | KEY |
      | 14  |
    Examples:
      | KEY |
      | 15  |
    Examples:
      | KEY |
      | 16  |
    Examples:
      | KEY |
      | 17  |
    Examples:
      | KEY |
      | 18  |
    Examples:
      | KEY |
      | 19  |
    Examples:
      | KEY |
      | 20  |
    Examples:
      | KEY |
      | 22  |
    Examples:
      | KEY |
      | 23  |
    Examples:
      | KEY |
      | 24  |
