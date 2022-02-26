$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("SearchWeather.feature");
formatter.feature({
  "line": 2,
  "name": "Test API search weather in your city",
  "description": "",
  "id": "test-api-search-weather-in-your-city",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@searchWeather"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Verify Response Code call api with 2 params q and appid",
  "description": "",
  "id": "test-api-search-weather-in-your-city;verify-response-code-call-api-with-2-params-q-and-appid",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@NAB_REQ_2.1"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user sends API SearchWeather request with information corresponding \"\u003cKEY\u003e\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "city_name",
        "api_key"
      ],
      "line": 7
    },
    {
      "cells": [
        "2",
        "city name not exists",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 8
    },
    {
      "cells": [
        "3",
        "",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 9
    },
    {
      "cells": [
        "4",
        "",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 10
    },
    {
      "cells": [
        "5",
        "BG",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 11
    },
    {
      "cells": [
        "6",
        "ha noi vn",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 12
    },
    {
      "cells": [
        "7",
        "ha noi, cn",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 13
    },
    {
      "cells": [
        "8",
        "Krungthepmahanakhon Amonrattanakosin Mahintharayutthaya Mahadilokphop Noppharatratchathaniburirom Udomratchaniwetmahasathan Amonphimanawatansathit Sakkathattiyawitsanukamprasit",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 14
    },
    {
      "cells": [
        "10",
        "hanoi",
        "appid not exists"
      ],
      "line": 15
    },
    {
      "cells": [
        "11",
        "hanoi",
        "57c1c22050f92b6d7a0a4c5716912bbe"
      ],
      "line": 16
    },
    {
      "cells": [
        "12",
        "London",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 17
    },
    {
      "cells": [
        "13",
        "Tokyo",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 18
    },
    {
      "cells": [
        "14",
        "Thành phố hồ chí minh",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 19
    },
    {
      "cells": [
        "15",
        "Thai nguyen",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 20
    },
    {
      "cells": [
        "16",
        "上海",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 21
    },
    {
      "cells": [
        "17",
        "Chengdu",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 22
    },
    {
      "cells": [
        "18",
        "東京都",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 23
    },
    {
      "cells": [
        "19",
        "Nagoya",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 24
    },
    {
      "cells": [
        "20",
        "Hà Nội, VN",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 25
    },
    {
      "cells": [
        "21",
        "Hà Nam,",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 26
    },
    {
      "cells": [
        "22",
        "Bắc Giang, VN",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 27
    },
    {
      "cells": [
        "23",
        "Cần     Thơ",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 28
    },
    {
      "cells": [
        "24",
        "Vĩnh Long, VN",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 29
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "user check response code, response body with information corresponding \"\u003cKEY\u003e\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "response_code",
        "cod"
      ],
      "line": 32
    },
    {
      "cells": [
        "2",
        "404",
        "404"
      ],
      "line": 33
    },
    {
      "cells": [
        "3",
        "400",
        "400"
      ],
      "line": 34
    },
    {
      "cells": [
        "4",
        "400",
        "400"
      ],
      "line": 35
    },
    {
      "cells": [
        "5",
        "404",
        "404"
      ],
      "line": 36
    },
    {
      "cells": [
        "6",
        "404",
        "404"
      ],
      "line": 37
    },
    {
      "cells": [
        "7",
        "404",
        "404"
      ],
      "line": 38
    },
    {
      "cells": [
        "10",
        "401",
        "401"
      ],
      "line": 39
    },
    {
      "cells": [
        "11",
        "401",
        "401"
      ],
      "line": 40
    },
    {
      "cells": [
        "12",
        "200",
        "200"
      ],
      "line": 41
    },
    {
      "cells": [
        "13",
        "200",
        "200"
      ],
      "line": 42
    },
    {
      "cells": [
        "14",
        "200",
        "200"
      ],
      "line": 43
    },
    {
      "cells": [
        "15",
        "200",
        "200"
      ],
      "line": 44
    },
    {
      "cells": [
        "16",
        "200",
        "200"
      ],
      "line": 45
    },
    {
      "cells": [
        "17",
        "200",
        "200"
      ],
      "line": 46
    },
    {
      "cells": [
        "18",
        "200",
        "200"
      ],
      "line": 47
    },
    {
      "cells": [
        "19",
        "200",
        "200"
      ],
      "line": 48
    },
    {
      "cells": [
        "20",
        "200",
        "200"
      ],
      "line": 49
    },
    {
      "cells": [
        "21",
        "404",
        "404"
      ],
      "line": 50
    },
    {
      "cells": [
        "22",
        "200",
        "200"
      ],
      "line": 51
    },
    {
      "cells": [
        "23",
        "200",
        "200"
      ],
      "line": 52
    },
    {
      "cells": [
        "24",
        "200",
        "200"
      ],
      "line": 53
    }
  ],
  "keyword": "Then "
});
formatter.examples({
  "line": 55,
  "name": "",
  "description": "",
  "id": "test-api-search-weather-in-your-city;verify-response-code-call-api-with-2-params-q-and-appid;",
  "rows": [
    {
      "cells": [
        "KEY"
      ],
      "line": 56,
      "id": "test-api-search-weather-in-your-city;verify-response-code-call-api-with-2-params-q-and-appid;;1"
    },
    {
      "cells": [
        "2"
      ],
      "line": 57,
      "id": "test-api-search-weather-in-your-city;verify-response-code-call-api-with-2-params-q-and-appid;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 57,
  "name": "Verify Response Code call api with 2 params q and appid",
  "description": "",
  "id": "test-api-search-weather-in-your-city;verify-response-code-call-api-with-2-params-q-and-appid;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@NAB_REQ_2.1"
    },
    {
      "line": 1,
      "name": "@searchWeather"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user sends API SearchWeather request with information corresponding \"2\"",
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "KEY",
        "city_name",
        "api_key"
      ],
      "line": 7
    },
    {
      "cells": [
        "2",
        "city name not exists",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 8
    },
    {
      "cells": [
        "3",
        "",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 9
    },
    {
      "cells": [
        "4",
        "",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 10
    },
    {
      "cells": [
        "5",
        "BG",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 11
    },
    {
      "cells": [
        "6",
        "ha noi vn",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 12
    },
    {
      "cells": [
        "7",
        "ha noi, cn",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 13
    },
    {
      "cells": [
        "8",
        "Krungthepmahanakhon Amonrattanakosin Mahintharayutthaya Mahadilokphop Noppharatratchathaniburirom Udomratchaniwetmahasathan Amonphimanawatansathit Sakkathattiyawitsanukamprasit",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 14
    },
    {
      "cells": [
        "10",
        "hanoi",
        "appid not exists"
      ],
      "line": 15
    },
    {
      "cells": [
        "11",
        "hanoi",
        "57c1c22050f92b6d7a0a4c5716912bbe"
      ],
      "line": 16
    },
    {
      "cells": [
        "12",
        "London",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 17
    },
    {
      "cells": [
        "13",
        "Tokyo",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 18
    },
    {
      "cells": [
        "14",
        "Thành phố hồ chí minh",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 19
    },
    {
      "cells": [
        "15",
        "Thai nguyen",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 20
    },
    {
      "cells": [
        "16",
        "上海",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 21
    },
    {
      "cells": [
        "17",
        "Chengdu",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 22
    },
    {
      "cells": [
        "18",
        "東京都",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 23
    },
    {
      "cells": [
        "19",
        "Nagoya",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 24
    },
    {
      "cells": [
        "20",
        "Hà Nội, VN",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 25
    },
    {
      "cells": [
        "21",
        "Hà Nam,",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 26
    },
    {
      "cells": [
        "22",
        "Bắc Giang, VN",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 27
    },
    {
      "cells": [
        "23",
        "Cần     Thơ",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 28
    },
    {
      "cells": [
        "24",
        "Vĩnh Long, VN",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 29
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "user check response code, response body with information corresponding \"2\"",
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "KEY",
        "response_code",
        "cod"
      ],
      "line": 32
    },
    {
      "cells": [
        "2",
        "404",
        "404"
      ],
      "line": 33
    },
    {
      "cells": [
        "3",
        "400",
        "400"
      ],
      "line": 34
    },
    {
      "cells": [
        "4",
        "400",
        "400"
      ],
      "line": 35
    },
    {
      "cells": [
        "5",
        "404",
        "404"
      ],
      "line": 36
    },
    {
      "cells": [
        "6",
        "404",
        "404"
      ],
      "line": 37
    },
    {
      "cells": [
        "7",
        "404",
        "404"
      ],
      "line": 38
    },
    {
      "cells": [
        "10",
        "401",
        "401"
      ],
      "line": 39
    },
    {
      "cells": [
        "11",
        "401",
        "401"
      ],
      "line": 40
    },
    {
      "cells": [
        "12",
        "200",
        "200"
      ],
      "line": 41
    },
    {
      "cells": [
        "13",
        "200",
        "200"
      ],
      "line": 42
    },
    {
      "cells": [
        "14",
        "200",
        "200"
      ],
      "line": 43
    },
    {
      "cells": [
        "15",
        "200",
        "200"
      ],
      "line": 44
    },
    {
      "cells": [
        "16",
        "200",
        "200"
      ],
      "line": 45
    },
    {
      "cells": [
        "17",
        "200",
        "200"
      ],
      "line": 46
    },
    {
      "cells": [
        "18",
        "200",
        "200"
      ],
      "line": 47
    },
    {
      "cells": [
        "19",
        "200",
        "200"
      ],
      "line": 48
    },
    {
      "cells": [
        "20",
        "200",
        "200"
      ],
      "line": 49
    },
    {
      "cells": [
        "21",
        "404",
        "404"
      ],
      "line": 50
    },
    {
      "cells": [
        "22",
        "200",
        "200"
      ],
      "line": 51
    },
    {
      "cells": [
        "23",
        "200",
        "200"
      ],
      "line": 52
    },
    {
      "cells": [
        "24",
        "200",
        "200"
      ],
      "line": 53
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 69
    }
  ],
  "location": "SearchWeatherSteps.userSendsAPISearchWeatherRequestWithInformationCorresponding(String,DataTable)"
});
formatter.result({
  "duration": 2345594400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 72
    }
  ],
  "location": "SearchWeatherSteps.userCheckResponseCodeResponseBodyWithInformationCorresponding(String,DataTable)"
});
formatter.result({
  "duration": 500959300,
  "status": "passed"
});
formatter.examples({
  "line": 59,
  "name": "",
  "description": "",
  "id": "test-api-search-weather-in-your-city;verify-response-code-call-api-with-2-params-q-and-appid;",
  "rows": [
    {
      "cells": [
        "KEY"
      ],
      "line": 61,
      "id": "test-api-search-weather-in-your-city;verify-response-code-call-api-with-2-params-q-and-appid;;1"
    },
    {
      "cells": [
        "3"
      ],
      "line": 62,
      "id": "test-api-search-weather-in-your-city;verify-response-code-call-api-with-2-params-q-and-appid;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 62,
  "name": "Verify Response Code call api with 2 params q and appid",
  "description": "",
  "id": "test-api-search-weather-in-your-city;verify-response-code-call-api-with-2-params-q-and-appid;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@NAB_REQ_2.1"
    },
    {
      "line": 1,
      "name": "@searchWeather"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user sends API SearchWeather request with information corresponding \"3\"",
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "KEY",
        "city_name",
        "api_key"
      ],
      "line": 7
    },
    {
      "cells": [
        "2",
        "city name not exists",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 8
    },
    {
      "cells": [
        "3",
        "",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 9
    },
    {
      "cells": [
        "4",
        "",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 10
    },
    {
      "cells": [
        "5",
        "BG",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 11
    },
    {
      "cells": [
        "6",
        "ha noi vn",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 12
    },
    {
      "cells": [
        "7",
        "ha noi, cn",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 13
    },
    {
      "cells": [
        "8",
        "Krungthepmahanakhon Amonrattanakosin Mahintharayutthaya Mahadilokphop Noppharatratchathaniburirom Udomratchaniwetmahasathan Amonphimanawatansathit Sakkathattiyawitsanukamprasit",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 14
    },
    {
      "cells": [
        "10",
        "hanoi",
        "appid not exists"
      ],
      "line": 15
    },
    {
      "cells": [
        "11",
        "hanoi",
        "57c1c22050f92b6d7a0a4c5716912bbe"
      ],
      "line": 16
    },
    {
      "cells": [
        "12",
        "London",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 17
    },
    {
      "cells": [
        "13",
        "Tokyo",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 18
    },
    {
      "cells": [
        "14",
        "Thành phố hồ chí minh",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 19
    },
    {
      "cells": [
        "15",
        "Thai nguyen",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 20
    },
    {
      "cells": [
        "16",
        "上海",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 21
    },
    {
      "cells": [
        "17",
        "Chengdu",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 22
    },
    {
      "cells": [
        "18",
        "東京都",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 23
    },
    {
      "cells": [
        "19",
        "Nagoya",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 24
    },
    {
      "cells": [
        "20",
        "Hà Nội, VN",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 25
    },
    {
      "cells": [
        "21",
        "Hà Nam,",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 26
    },
    {
      "cells": [
        "22",
        "Bắc Giang, VN",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 27
    },
    {
      "cells": [
        "23",
        "Cần     Thơ",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 28
    },
    {
      "cells": [
        "24",
        "Vĩnh Long, VN",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 29
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "user check response code, response body with information corresponding \"3\"",
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "KEY",
        "response_code",
        "cod"
      ],
      "line": 32
    },
    {
      "cells": [
        "2",
        "404",
        "404"
      ],
      "line": 33
    },
    {
      "cells": [
        "3",
        "400",
        "400"
      ],
      "line": 34
    },
    {
      "cells": [
        "4",
        "400",
        "400"
      ],
      "line": 35
    },
    {
      "cells": [
        "5",
        "404",
        "404"
      ],
      "line": 36
    },
    {
      "cells": [
        "6",
        "404",
        "404"
      ],
      "line": 37
    },
    {
      "cells": [
        "7",
        "404",
        "404"
      ],
      "line": 38
    },
    {
      "cells": [
        "10",
        "401",
        "401"
      ],
      "line": 39
    },
    {
      "cells": [
        "11",
        "401",
        "401"
      ],
      "line": 40
    },
    {
      "cells": [
        "12",
        "200",
        "200"
      ],
      "line": 41
    },
    {
      "cells": [
        "13",
        "200",
        "200"
      ],
      "line": 42
    },
    {
      "cells": [
        "14",
        "200",
        "200"
      ],
      "line": 43
    },
    {
      "cells": [
        "15",
        "200",
        "200"
      ],
      "line": 44
    },
    {
      "cells": [
        "16",
        "200",
        "200"
      ],
      "line": 45
    },
    {
      "cells": [
        "17",
        "200",
        "200"
      ],
      "line": 46
    },
    {
      "cells": [
        "18",
        "200",
        "200"
      ],
      "line": 47
    },
    {
      "cells": [
        "19",
        "200",
        "200"
      ],
      "line": 48
    },
    {
      "cells": [
        "20",
        "200",
        "200"
      ],
      "line": 49
    },
    {
      "cells": [
        "21",
        "404",
        "404"
      ],
      "line": 50
    },
    {
      "cells": [
        "22",
        "200",
        "200"
      ],
      "line": 51
    },
    {
      "cells": [
        "23",
        "200",
        "200"
      ],
      "line": 52
    },
    {
      "cells": [
        "24",
        "200",
        "200"
      ],
      "line": 53
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 69
    }
  ],
  "location": "SearchWeatherSteps.userSendsAPISearchWeatherRequestWithInformationCorresponding(String,DataTable)"
});
formatter.result({
  "duration": 110489900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 72
    }
  ],
  "location": "SearchWeatherSteps.userCheckResponseCodeResponseBodyWithInformationCorresponding(String,DataTable)"
});
formatter.result({
  "duration": 14888600,
  "status": "passed"
});
formatter.examples({
  "line": 63,
  "name": "",
  "description": "",
  "id": "test-api-search-weather-in-your-city;verify-response-code-call-api-with-2-params-q-and-appid;",
  "rows": [
    {
      "cells": [
        "KEY"
      ],
      "line": 64,
      "id": "test-api-search-weather-in-your-city;verify-response-code-call-api-with-2-params-q-and-appid;;1"
    },
    {
      "cells": [
        "4"
      ],
      "line": 65,
      "id": "test-api-search-weather-in-your-city;verify-response-code-call-api-with-2-params-q-and-appid;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 65,
  "name": "Verify Response Code call api with 2 params q and appid",
  "description": "",
  "id": "test-api-search-weather-in-your-city;verify-response-code-call-api-with-2-params-q-and-appid;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@NAB_REQ_2.1"
    },
    {
      "line": 1,
      "name": "@searchWeather"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user sends API SearchWeather request with information corresponding \"4\"",
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "KEY",
        "city_name",
        "api_key"
      ],
      "line": 7
    },
    {
      "cells": [
        "2",
        "city name not exists",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 8
    },
    {
      "cells": [
        "3",
        "",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 9
    },
    {
      "cells": [
        "4",
        "",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 10
    },
    {
      "cells": [
        "5",
        "BG",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 11
    },
    {
      "cells": [
        "6",
        "ha noi vn",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 12
    },
    {
      "cells": [
        "7",
        "ha noi, cn",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 13
    },
    {
      "cells": [
        "8",
        "Krungthepmahanakhon Amonrattanakosin Mahintharayutthaya Mahadilokphop Noppharatratchathaniburirom Udomratchaniwetmahasathan Amonphimanawatansathit Sakkathattiyawitsanukamprasit",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 14
    },
    {
      "cells": [
        "10",
        "hanoi",
        "appid not exists"
      ],
      "line": 15
    },
    {
      "cells": [
        "11",
        "hanoi",
        "57c1c22050f92b6d7a0a4c5716912bbe"
      ],
      "line": 16
    },
    {
      "cells": [
        "12",
        "London",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 17
    },
    {
      "cells": [
        "13",
        "Tokyo",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 18
    },
    {
      "cells": [
        "14",
        "Thành phố hồ chí minh",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 19
    },
    {
      "cells": [
        "15",
        "Thai nguyen",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 20
    },
    {
      "cells": [
        "16",
        "上海",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 21
    },
    {
      "cells": [
        "17",
        "Chengdu",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 22
    },
    {
      "cells": [
        "18",
        "東京都",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 23
    },
    {
      "cells": [
        "19",
        "Nagoya",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 24
    },
    {
      "cells": [
        "20",
        "Hà Nội, VN",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 25
    },
    {
      "cells": [
        "21",
        "Hà Nam,",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 26
    },
    {
      "cells": [
        "22",
        "Bắc Giang, VN",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 27
    },
    {
      "cells": [
        "23",
        "Cần     Thơ",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 28
    },
    {
      "cells": [
        "24",
        "Vĩnh Long, VN",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 29
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "user check response code, response body with information corresponding \"4\"",
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "KEY",
        "response_code",
        "cod"
      ],
      "line": 32
    },
    {
      "cells": [
        "2",
        "404",
        "404"
      ],
      "line": 33
    },
    {
      "cells": [
        "3",
        "400",
        "400"
      ],
      "line": 34
    },
    {
      "cells": [
        "4",
        "400",
        "400"
      ],
      "line": 35
    },
    {
      "cells": [
        "5",
        "404",
        "404"
      ],
      "line": 36
    },
    {
      "cells": [
        "6",
        "404",
        "404"
      ],
      "line": 37
    },
    {
      "cells": [
        "7",
        "404",
        "404"
      ],
      "line": 38
    },
    {
      "cells": [
        "10",
        "401",
        "401"
      ],
      "line": 39
    },
    {
      "cells": [
        "11",
        "401",
        "401"
      ],
      "line": 40
    },
    {
      "cells": [
        "12",
        "200",
        "200"
      ],
      "line": 41
    },
    {
      "cells": [
        "13",
        "200",
        "200"
      ],
      "line": 42
    },
    {
      "cells": [
        "14",
        "200",
        "200"
      ],
      "line": 43
    },
    {
      "cells": [
        "15",
        "200",
        "200"
      ],
      "line": 44
    },
    {
      "cells": [
        "16",
        "200",
        "200"
      ],
      "line": 45
    },
    {
      "cells": [
        "17",
        "200",
        "200"
      ],
      "line": 46
    },
    {
      "cells": [
        "18",
        "200",
        "200"
      ],
      "line": 47
    },
    {
      "cells": [
        "19",
        "200",
        "200"
      ],
      "line": 48
    },
    {
      "cells": [
        "20",
        "200",
        "200"
      ],
      "line": 49
    },
    {
      "cells": [
        "21",
        "404",
        "404"
      ],
      "line": 50
    },
    {
      "cells": [
        "22",
        "200",
        "200"
      ],
      "line": 51
    },
    {
      "cells": [
        "23",
        "200",
        "200"
      ],
      "line": 52
    },
    {
      "cells": [
        "24",
        "200",
        "200"
      ],
      "line": 53
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 69
    }
  ],
  "location": "SearchWeatherSteps.userSendsAPISearchWeatherRequestWithInformationCorresponding(String,DataTable)"
});
formatter.result({
  "duration": 112059000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 72
    }
  ],
  "location": "SearchWeatherSteps.userCheckResponseCodeResponseBodyWithInformationCorresponding(String,DataTable)"
});
formatter.result({
  "duration": 12432100,
  "status": "passed"
});
formatter.examples({
  "line": 66,
  "name": "",
  "description": "",
  "id": "test-api-search-weather-in-your-city;verify-response-code-call-api-with-2-params-q-and-appid;",
  "rows": [
    {
      "cells": [
        "KEY"
      ],
      "line": 67,
      "id": "test-api-search-weather-in-your-city;verify-response-code-call-api-with-2-params-q-and-appid;;1"
    },
    {
      "cells": [
        "5"
      ],
      "line": 68,
      "id": "test-api-search-weather-in-your-city;verify-response-code-call-api-with-2-params-q-and-appid;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 68,
  "name": "Verify Response Code call api with 2 params q and appid",
  "description": "",
  "id": "test-api-search-weather-in-your-city;verify-response-code-call-api-with-2-params-q-and-appid;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@NAB_REQ_2.1"
    },
    {
      "line": 1,
      "name": "@searchWeather"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user sends API SearchWeather request with information corresponding \"5\"",
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "KEY",
        "city_name",
        "api_key"
      ],
      "line": 7
    },
    {
      "cells": [
        "2",
        "city name not exists",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 8
    },
    {
      "cells": [
        "3",
        "",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 9
    },
    {
      "cells": [
        "4",
        "",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 10
    },
    {
      "cells": [
        "5",
        "BG",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 11
    },
    {
      "cells": [
        "6",
        "ha noi vn",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 12
    },
    {
      "cells": [
        "7",
        "ha noi, cn",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 13
    },
    {
      "cells": [
        "8",
        "Krungthepmahanakhon Amonrattanakosin Mahintharayutthaya Mahadilokphop Noppharatratchathaniburirom Udomratchaniwetmahasathan Amonphimanawatansathit Sakkathattiyawitsanukamprasit",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 14
    },
    {
      "cells": [
        "10",
        "hanoi",
        "appid not exists"
      ],
      "line": 15
    },
    {
      "cells": [
        "11",
        "hanoi",
        "57c1c22050f92b6d7a0a4c5716912bbe"
      ],
      "line": 16
    },
    {
      "cells": [
        "12",
        "London",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 17
    },
    {
      "cells": [
        "13",
        "Tokyo",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 18
    },
    {
      "cells": [
        "14",
        "Thành phố hồ chí minh",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 19
    },
    {
      "cells": [
        "15",
        "Thai nguyen",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 20
    },
    {
      "cells": [
        "16",
        "上海",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 21
    },
    {
      "cells": [
        "17",
        "Chengdu",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 22
    },
    {
      "cells": [
        "18",
        "東京都",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 23
    },
    {
      "cells": [
        "19",
        "Nagoya",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 24
    },
    {
      "cells": [
        "20",
        "Hà Nội, VN",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 25
    },
    {
      "cells": [
        "21",
        "Hà Nam,",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 26
    },
    {
      "cells": [
        "22",
        "Bắc Giang, VN",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 27
    },
    {
      "cells": [
        "23",
        "Cần     Thơ",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 28
    },
    {
      "cells": [
        "24",
        "Vĩnh Long, VN",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 29
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "user check response code, response body with information corresponding \"5\"",
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "KEY",
        "response_code",
        "cod"
      ],
      "line": 32
    },
    {
      "cells": [
        "2",
        "404",
        "404"
      ],
      "line": 33
    },
    {
      "cells": [
        "3",
        "400",
        "400"
      ],
      "line": 34
    },
    {
      "cells": [
        "4",
        "400",
        "400"
      ],
      "line": 35
    },
    {
      "cells": [
        "5",
        "404",
        "404"
      ],
      "line": 36
    },
    {
      "cells": [
        "6",
        "404",
        "404"
      ],
      "line": 37
    },
    {
      "cells": [
        "7",
        "404",
        "404"
      ],
      "line": 38
    },
    {
      "cells": [
        "10",
        "401",
        "401"
      ],
      "line": 39
    },
    {
      "cells": [
        "11",
        "401",
        "401"
      ],
      "line": 40
    },
    {
      "cells": [
        "12",
        "200",
        "200"
      ],
      "line": 41
    },
    {
      "cells": [
        "13",
        "200",
        "200"
      ],
      "line": 42
    },
    {
      "cells": [
        "14",
        "200",
        "200"
      ],
      "line": 43
    },
    {
      "cells": [
        "15",
        "200",
        "200"
      ],
      "line": 44
    },
    {
      "cells": [
        "16",
        "200",
        "200"
      ],
      "line": 45
    },
    {
      "cells": [
        "17",
        "200",
        "200"
      ],
      "line": 46
    },
    {
      "cells": [
        "18",
        "200",
        "200"
      ],
      "line": 47
    },
    {
      "cells": [
        "19",
        "200",
        "200"
      ],
      "line": 48
    },
    {
      "cells": [
        "20",
        "200",
        "200"
      ],
      "line": 49
    },
    {
      "cells": [
        "21",
        "404",
        "404"
      ],
      "line": 50
    },
    {
      "cells": [
        "22",
        "200",
        "200"
      ],
      "line": 51
    },
    {
      "cells": [
        "23",
        "200",
        "200"
      ],
      "line": 52
    },
    {
      "cells": [
        "24",
        "200",
        "200"
      ],
      "line": 53
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 69
    }
  ],
  "location": "SearchWeatherSteps.userSendsAPISearchWeatherRequestWithInformationCorresponding(String,DataTable)"
});
formatter.result({
  "duration": 120120000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 72
    }
  ],
  "location": "SearchWeatherSteps.userCheckResponseCodeResponseBodyWithInformationCorresponding(String,DataTable)"
});
formatter.result({
  "duration": 12965700,
  "status": "passed"
});
formatter.examples({
  "line": 69,
  "name": "",
  "description": "",
  "id": "test-api-search-weather-in-your-city;verify-response-code-call-api-with-2-params-q-and-appid;",
  "rows": [
    {
      "cells": [
        "KEY"
      ],
      "line": 70,
      "id": "test-api-search-weather-in-your-city;verify-response-code-call-api-with-2-params-q-and-appid;;1"
    },
    {
      "cells": [
        "6"
      ],
      "line": 71,
      "id": "test-api-search-weather-in-your-city;verify-response-code-call-api-with-2-params-q-and-appid;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 71,
  "name": "Verify Response Code call api with 2 params q and appid",
  "description": "",
  "id": "test-api-search-weather-in-your-city;verify-response-code-call-api-with-2-params-q-and-appid;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@NAB_REQ_2.1"
    },
    {
      "line": 1,
      "name": "@searchWeather"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user sends API SearchWeather request with information corresponding \"6\"",
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "KEY",
        "city_name",
        "api_key"
      ],
      "line": 7
    },
    {
      "cells": [
        "2",
        "city name not exists",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 8
    },
    {
      "cells": [
        "3",
        "",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 9
    },
    {
      "cells": [
        "4",
        "",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 10
    },
    {
      "cells": [
        "5",
        "BG",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 11
    },
    {
      "cells": [
        "6",
        "ha noi vn",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 12
    },
    {
      "cells": [
        "7",
        "ha noi, cn",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 13
    },
    {
      "cells": [
        "8",
        "Krungthepmahanakhon Amonrattanakosin Mahintharayutthaya Mahadilokphop Noppharatratchathaniburirom Udomratchaniwetmahasathan Amonphimanawatansathit Sakkathattiyawitsanukamprasit",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 14
    },
    {
      "cells": [
        "10",
        "hanoi",
        "appid not exists"
      ],
      "line": 15
    },
    {
      "cells": [
        "11",
        "hanoi",
        "57c1c22050f92b6d7a0a4c5716912bbe"
      ],
      "line": 16
    },
    {
      "cells": [
        "12",
        "London",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 17
    },
    {
      "cells": [
        "13",
        "Tokyo",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 18
    },
    {
      "cells": [
        "14",
        "Thành phố hồ chí minh",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 19
    },
    {
      "cells": [
        "15",
        "Thai nguyen",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 20
    },
    {
      "cells": [
        "16",
        "上海",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 21
    },
    {
      "cells": [
        "17",
        "Chengdu",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 22
    },
    {
      "cells": [
        "18",
        "東京都",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 23
    },
    {
      "cells": [
        "19",
        "Nagoya",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 24
    },
    {
      "cells": [
        "20",
        "Hà Nội, VN",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 25
    },
    {
      "cells": [
        "21",
        "Hà Nam,",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 26
    },
    {
      "cells": [
        "22",
        "Bắc Giang, VN",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 27
    },
    {
      "cells": [
        "23",
        "Cần     Thơ",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 28
    },
    {
      "cells": [
        "24",
        "Vĩnh Long, VN",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 29
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "user check response code, response body with information corresponding \"6\"",
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "KEY",
        "response_code",
        "cod"
      ],
      "line": 32
    },
    {
      "cells": [
        "2",
        "404",
        "404"
      ],
      "line": 33
    },
    {
      "cells": [
        "3",
        "400",
        "400"
      ],
      "line": 34
    },
    {
      "cells": [
        "4",
        "400",
        "400"
      ],
      "line": 35
    },
    {
      "cells": [
        "5",
        "404",
        "404"
      ],
      "line": 36
    },
    {
      "cells": [
        "6",
        "404",
        "404"
      ],
      "line": 37
    },
    {
      "cells": [
        "7",
        "404",
        "404"
      ],
      "line": 38
    },
    {
      "cells": [
        "10",
        "401",
        "401"
      ],
      "line": 39
    },
    {
      "cells": [
        "11",
        "401",
        "401"
      ],
      "line": 40
    },
    {
      "cells": [
        "12",
        "200",
        "200"
      ],
      "line": 41
    },
    {
      "cells": [
        "13",
        "200",
        "200"
      ],
      "line": 42
    },
    {
      "cells": [
        "14",
        "200",
        "200"
      ],
      "line": 43
    },
    {
      "cells": [
        "15",
        "200",
        "200"
      ],
      "line": 44
    },
    {
      "cells": [
        "16",
        "200",
        "200"
      ],
      "line": 45
    },
    {
      "cells": [
        "17",
        "200",
        "200"
      ],
      "line": 46
    },
    {
      "cells": [
        "18",
        "200",
        "200"
      ],
      "line": 47
    },
    {
      "cells": [
        "19",
        "200",
        "200"
      ],
      "line": 48
    },
    {
      "cells": [
        "20",
        "200",
        "200"
      ],
      "line": 49
    },
    {
      "cells": [
        "21",
        "404",
        "404"
      ],
      "line": 50
    },
    {
      "cells": [
        "22",
        "200",
        "200"
      ],
      "line": 51
    },
    {
      "cells": [
        "23",
        "200",
        "200"
      ],
      "line": 52
    },
    {
      "cells": [
        "24",
        "200",
        "200"
      ],
      "line": 53
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "6",
      "offset": 69
    }
  ],
  "location": "SearchWeatherSteps.userSendsAPISearchWeatherRequestWithInformationCorresponding(String,DataTable)"
});
formatter.result({
  "duration": 100166300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "6",
      "offset": 72
    }
  ],
  "location": "SearchWeatherSteps.userCheckResponseCodeResponseBodyWithInformationCorresponding(String,DataTable)"
});
formatter.result({
  "duration": 12759200,
  "status": "passed"
});
formatter.examples({
  "line": 72,
  "name": "",
  "description": "",
  "id": "test-api-search-weather-in-your-city;verify-response-code-call-api-with-2-params-q-and-appid;",
  "rows": [
    {
      "cells": [
        "KEY"
      ],
      "line": 73,
      "id": "test-api-search-weather-in-your-city;verify-response-code-call-api-with-2-params-q-and-appid;;1"
    },
    {
      "cells": [
        "7"
      ],
      "line": 74,
      "id": "test-api-search-weather-in-your-city;verify-response-code-call-api-with-2-params-q-and-appid;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 74,
  "name": "Verify Response Code call api with 2 params q and appid",
  "description": "",
  "id": "test-api-search-weather-in-your-city;verify-response-code-call-api-with-2-params-q-and-appid;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@NAB_REQ_2.1"
    },
    {
      "line": 1,
      "name": "@searchWeather"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user sends API SearchWeather request with information corresponding \"7\"",
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "KEY",
        "city_name",
        "api_key"
      ],
      "line": 7
    },
    {
      "cells": [
        "2",
        "city name not exists",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 8
    },
    {
      "cells": [
        "3",
        "",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 9
    },
    {
      "cells": [
        "4",
        "",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 10
    },
    {
      "cells": [
        "5",
        "BG",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 11
    },
    {
      "cells": [
        "6",
        "ha noi vn",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 12
    },
    {
      "cells": [
        "7",
        "ha noi, cn",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 13
    },
    {
      "cells": [
        "8",
        "Krungthepmahanakhon Amonrattanakosin Mahintharayutthaya Mahadilokphop Noppharatratchathaniburirom Udomratchaniwetmahasathan Amonphimanawatansathit Sakkathattiyawitsanukamprasit",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 14
    },
    {
      "cells": [
        "10",
        "hanoi",
        "appid not exists"
      ],
      "line": 15
    },
    {
      "cells": [
        "11",
        "hanoi",
        "57c1c22050f92b6d7a0a4c5716912bbe"
      ],
      "line": 16
    },
    {
      "cells": [
        "12",
        "London",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 17
    },
    {
      "cells": [
        "13",
        "Tokyo",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 18
    },
    {
      "cells": [
        "14",
        "Thành phố hồ chí minh",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 19
    },
    {
      "cells": [
        "15",
        "Thai nguyen",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 20
    },
    {
      "cells": [
        "16",
        "上海",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 21
    },
    {
      "cells": [
        "17",
        "Chengdu",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 22
    },
    {
      "cells": [
        "18",
        "東京都",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 23
    },
    {
      "cells": [
        "19",
        "Nagoya",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 24
    },
    {
      "cells": [
        "20",
        "Hà Nội, VN",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 25
    },
    {
      "cells": [
        "21",
        "Hà Nam,",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 26
    },
    {
      "cells": [
        "22",
        "Bắc Giang, VN",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 27
    },
    {
      "cells": [
        "23",
        "Cần     Thơ",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 28
    },
    {
      "cells": [
        "24",
        "Vĩnh Long, VN",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 29
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "user check response code, response body with information corresponding \"7\"",
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "KEY",
        "response_code",
        "cod"
      ],
      "line": 32
    },
    {
      "cells": [
        "2",
        "404",
        "404"
      ],
      "line": 33
    },
    {
      "cells": [
        "3",
        "400",
        "400"
      ],
      "line": 34
    },
    {
      "cells": [
        "4",
        "400",
        "400"
      ],
      "line": 35
    },
    {
      "cells": [
        "5",
        "404",
        "404"
      ],
      "line": 36
    },
    {
      "cells": [
        "6",
        "404",
        "404"
      ],
      "line": 37
    },
    {
      "cells": [
        "7",
        "404",
        "404"
      ],
      "line": 38
    },
    {
      "cells": [
        "10",
        "401",
        "401"
      ],
      "line": 39
    },
    {
      "cells": [
        "11",
        "401",
        "401"
      ],
      "line": 40
    },
    {
      "cells": [
        "12",
        "200",
        "200"
      ],
      "line": 41
    },
    {
      "cells": [
        "13",
        "200",
        "200"
      ],
      "line": 42
    },
    {
      "cells": [
        "14",
        "200",
        "200"
      ],
      "line": 43
    },
    {
      "cells": [
        "15",
        "200",
        "200"
      ],
      "line": 44
    },
    {
      "cells": [
        "16",
        "200",
        "200"
      ],
      "line": 45
    },
    {
      "cells": [
        "17",
        "200",
        "200"
      ],
      "line": 46
    },
    {
      "cells": [
        "18",
        "200",
        "200"
      ],
      "line": 47
    },
    {
      "cells": [
        "19",
        "200",
        "200"
      ],
      "line": 48
    },
    {
      "cells": [
        "20",
        "200",
        "200"
      ],
      "line": 49
    },
    {
      "cells": [
        "21",
        "404",
        "404"
      ],
      "line": 50
    },
    {
      "cells": [
        "22",
        "200",
        "200"
      ],
      "line": 51
    },
    {
      "cells": [
        "23",
        "200",
        "200"
      ],
      "line": 52
    },
    {
      "cells": [
        "24",
        "200",
        "200"
      ],
      "line": 53
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "7",
      "offset": 69
    }
  ],
  "location": "SearchWeatherSteps.userSendsAPISearchWeatherRequestWithInformationCorresponding(String,DataTable)"
});
formatter.result({
  "duration": 117215100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "7",
      "offset": 72
    }
  ],
  "location": "SearchWeatherSteps.userCheckResponseCodeResponseBodyWithInformationCorresponding(String,DataTable)"
});
formatter.result({
  "duration": 23104000,
  "status": "passed"
});
formatter.examples({
  "line": 75,
  "name": "",
  "description": "",
  "id": "test-api-search-weather-in-your-city;verify-response-code-call-api-with-2-params-q-and-appid;",
  "rows": [
    {
      "cells": [
        "KEY"
      ],
      "line": 76,
      "id": "test-api-search-weather-in-your-city;verify-response-code-call-api-with-2-params-q-and-appid;;1"
    },
    {
      "cells": [
        "8"
      ],
      "line": 77,
      "id": "test-api-search-weather-in-your-city;verify-response-code-call-api-with-2-params-q-and-appid;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 77,
  "name": "Verify Response Code call api with 2 params q and appid",
  "description": "",
  "id": "test-api-search-weather-in-your-city;verify-response-code-call-api-with-2-params-q-and-appid;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@NAB_REQ_2.1"
    },
    {
      "line": 1,
      "name": "@searchWeather"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user sends API SearchWeather request with information corresponding \"8\"",
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "KEY",
        "city_name",
        "api_key"
      ],
      "line": 7
    },
    {
      "cells": [
        "2",
        "city name not exists",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 8
    },
    {
      "cells": [
        "3",
        "",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 9
    },
    {
      "cells": [
        "4",
        "",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 10
    },
    {
      "cells": [
        "5",
        "BG",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 11
    },
    {
      "cells": [
        "6",
        "ha noi vn",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 12
    },
    {
      "cells": [
        "7",
        "ha noi, cn",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 13
    },
    {
      "cells": [
        "8",
        "Krungthepmahanakhon Amonrattanakosin Mahintharayutthaya Mahadilokphop Noppharatratchathaniburirom Udomratchaniwetmahasathan Amonphimanawatansathit Sakkathattiyawitsanukamprasit",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 14
    },
    {
      "cells": [
        "10",
        "hanoi",
        "appid not exists"
      ],
      "line": 15
    },
    {
      "cells": [
        "11",
        "hanoi",
        "57c1c22050f92b6d7a0a4c5716912bbe"
      ],
      "line": 16
    },
    {
      "cells": [
        "12",
        "London",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 17
    },
    {
      "cells": [
        "13",
        "Tokyo",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 18
    },
    {
      "cells": [
        "14",
        "Thành phố hồ chí minh",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 19
    },
    {
      "cells": [
        "15",
        "Thai nguyen",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 20
    },
    {
      "cells": [
        "16",
        "上海",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 21
    },
    {
      "cells": [
        "17",
        "Chengdu",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 22
    },
    {
      "cells": [
        "18",
        "東京都",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 23
    },
    {
      "cells": [
        "19",
        "Nagoya",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 24
    },
    {
      "cells": [
        "20",
        "Hà Nội, VN",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 25
    },
    {
      "cells": [
        "21",
        "Hà Nam,",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 26
    },
    {
      "cells": [
        "22",
        "Bắc Giang, VN",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 27
    },
    {
      "cells": [
        "23",
        "Cần     Thơ",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 28
    },
    {
      "cells": [
        "24",
        "Vĩnh Long, VN",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 29
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "user check response code, response body with information corresponding \"8\"",
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "KEY",
        "response_code",
        "cod"
      ],
      "line": 32
    },
    {
      "cells": [
        "2",
        "404",
        "404"
      ],
      "line": 33
    },
    {
      "cells": [
        "3",
        "400",
        "400"
      ],
      "line": 34
    },
    {
      "cells": [
        "4",
        "400",
        "400"
      ],
      "line": 35
    },
    {
      "cells": [
        "5",
        "404",
        "404"
      ],
      "line": 36
    },
    {
      "cells": [
        "6",
        "404",
        "404"
      ],
      "line": 37
    },
    {
      "cells": [
        "7",
        "404",
        "404"
      ],
      "line": 38
    },
    {
      "cells": [
        "10",
        "401",
        "401"
      ],
      "line": 39
    },
    {
      "cells": [
        "11",
        "401",
        "401"
      ],
      "line": 40
    },
    {
      "cells": [
        "12",
        "200",
        "200"
      ],
      "line": 41
    },
    {
      "cells": [
        "13",
        "200",
        "200"
      ],
      "line": 42
    },
    {
      "cells": [
        "14",
        "200",
        "200"
      ],
      "line": 43
    },
    {
      "cells": [
        "15",
        "200",
        "200"
      ],
      "line": 44
    },
    {
      "cells": [
        "16",
        "200",
        "200"
      ],
      "line": 45
    },
    {
      "cells": [
        "17",
        "200",
        "200"
      ],
      "line": 46
    },
    {
      "cells": [
        "18",
        "200",
        "200"
      ],
      "line": 47
    },
    {
      "cells": [
        "19",
        "200",
        "200"
      ],
      "line": 48
    },
    {
      "cells": [
        "20",
        "200",
        "200"
      ],
      "line": 49
    },
    {
      "cells": [
        "21",
        "404",
        "404"
      ],
      "line": 50
    },
    {
      "cells": [
        "22",
        "200",
        "200"
      ],
      "line": 51
    },
    {
      "cells": [
        "23",
        "200",
        "200"
      ],
      "line": 52
    },
    {
      "cells": [
        "24",
        "200",
        "200"
      ],
      "line": 53
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "8",
      "offset": 69
    }
  ],
  "location": "SearchWeatherSteps.userSendsAPISearchWeatherRequestWithInformationCorresponding(String,DataTable)"
});
formatter.result({
  "duration": 103015700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8",
      "offset": 72
    }
  ],
  "location": "SearchWeatherSteps.userCheckResponseCodeResponseBodyWithInformationCorresponding(String,DataTable)"
});
formatter.result({
  "duration": 207600,
  "status": "passed"
});
formatter.examples({
  "line": 78,
  "name": "",
  "description": "",
  "id": "test-api-search-weather-in-your-city;verify-response-code-call-api-with-2-params-q-and-appid;",
  "rows": [
    {
      "cells": [
        "KEY"
      ],
      "line": 79,
      "id": "test-api-search-weather-in-your-city;verify-response-code-call-api-with-2-params-q-and-appid;;1"
    },
    {
      "cells": [
        "10"
      ],
      "line": 80,
      "id": "test-api-search-weather-in-your-city;verify-response-code-call-api-with-2-params-q-and-appid;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 80,
  "name": "Verify Response Code call api with 2 params q and appid",
  "description": "",
  "id": "test-api-search-weather-in-your-city;verify-response-code-call-api-with-2-params-q-and-appid;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@NAB_REQ_2.1"
    },
    {
      "line": 1,
      "name": "@searchWeather"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user sends API SearchWeather request with information corresponding \"10\"",
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "KEY",
        "city_name",
        "api_key"
      ],
      "line": 7
    },
    {
      "cells": [
        "2",
        "city name not exists",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 8
    },
    {
      "cells": [
        "3",
        "",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 9
    },
    {
      "cells": [
        "4",
        "",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 10
    },
    {
      "cells": [
        "5",
        "BG",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 11
    },
    {
      "cells": [
        "6",
        "ha noi vn",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 12
    },
    {
      "cells": [
        "7",
        "ha noi, cn",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 13
    },
    {
      "cells": [
        "8",
        "Krungthepmahanakhon Amonrattanakosin Mahintharayutthaya Mahadilokphop Noppharatratchathaniburirom Udomratchaniwetmahasathan Amonphimanawatansathit Sakkathattiyawitsanukamprasit",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 14
    },
    {
      "cells": [
        "10",
        "hanoi",
        "appid not exists"
      ],
      "line": 15
    },
    {
      "cells": [
        "11",
        "hanoi",
        "57c1c22050f92b6d7a0a4c5716912bbe"
      ],
      "line": 16
    },
    {
      "cells": [
        "12",
        "London",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 17
    },
    {
      "cells": [
        "13",
        "Tokyo",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 18
    },
    {
      "cells": [
        "14",
        "Thành phố hồ chí minh",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 19
    },
    {
      "cells": [
        "15",
        "Thai nguyen",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 20
    },
    {
      "cells": [
        "16",
        "上海",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 21
    },
    {
      "cells": [
        "17",
        "Chengdu",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 22
    },
    {
      "cells": [
        "18",
        "東京都",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 23
    },
    {
      "cells": [
        "19",
        "Nagoya",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 24
    },
    {
      "cells": [
        "20",
        "Hà Nội, VN",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 25
    },
    {
      "cells": [
        "21",
        "Hà Nam,",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 26
    },
    {
      "cells": [
        "22",
        "Bắc Giang, VN",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 27
    },
    {
      "cells": [
        "23",
        "Cần     Thơ",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 28
    },
    {
      "cells": [
        "24",
        "Vĩnh Long, VN",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 29
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "user check response code, response body with information corresponding \"10\"",
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "KEY",
        "response_code",
        "cod"
      ],
      "line": 32
    },
    {
      "cells": [
        "2",
        "404",
        "404"
      ],
      "line": 33
    },
    {
      "cells": [
        "3",
        "400",
        "400"
      ],
      "line": 34
    },
    {
      "cells": [
        "4",
        "400",
        "400"
      ],
      "line": 35
    },
    {
      "cells": [
        "5",
        "404",
        "404"
      ],
      "line": 36
    },
    {
      "cells": [
        "6",
        "404",
        "404"
      ],
      "line": 37
    },
    {
      "cells": [
        "7",
        "404",
        "404"
      ],
      "line": 38
    },
    {
      "cells": [
        "10",
        "401",
        "401"
      ],
      "line": 39
    },
    {
      "cells": [
        "11",
        "401",
        "401"
      ],
      "line": 40
    },
    {
      "cells": [
        "12",
        "200",
        "200"
      ],
      "line": 41
    },
    {
      "cells": [
        "13",
        "200",
        "200"
      ],
      "line": 42
    },
    {
      "cells": [
        "14",
        "200",
        "200"
      ],
      "line": 43
    },
    {
      "cells": [
        "15",
        "200",
        "200"
      ],
      "line": 44
    },
    {
      "cells": [
        "16",
        "200",
        "200"
      ],
      "line": 45
    },
    {
      "cells": [
        "17",
        "200",
        "200"
      ],
      "line": 46
    },
    {
      "cells": [
        "18",
        "200",
        "200"
      ],
      "line": 47
    },
    {
      "cells": [
        "19",
        "200",
        "200"
      ],
      "line": 48
    },
    {
      "cells": [
        "20",
        "200",
        "200"
      ],
      "line": 49
    },
    {
      "cells": [
        "21",
        "404",
        "404"
      ],
      "line": 50
    },
    {
      "cells": [
        "22",
        "200",
        "200"
      ],
      "line": 51
    },
    {
      "cells": [
        "23",
        "200",
        "200"
      ],
      "line": 52
    },
    {
      "cells": [
        "24",
        "200",
        "200"
      ],
      "line": 53
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 69
    }
  ],
  "location": "SearchWeatherSteps.userSendsAPISearchWeatherRequestWithInformationCorresponding(String,DataTable)"
});
formatter.result({
  "duration": 119232000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 72
    }
  ],
  "location": "SearchWeatherSteps.userCheckResponseCodeResponseBodyWithInformationCorresponding(String,DataTable)"
});
formatter.result({
  "duration": 19737000,
  "status": "passed"
});
formatter.examples({
  "line": 81,
  "name": "",
  "description": "",
  "id": "test-api-search-weather-in-your-city;verify-response-code-call-api-with-2-params-q-and-appid;",
  "rows": [
    {
      "cells": [
        "KEY"
      ],
      "line": 82,
      "id": "test-api-search-weather-in-your-city;verify-response-code-call-api-with-2-params-q-and-appid;;1"
    },
    {
      "cells": [
        "11"
      ],
      "line": 83,
      "id": "test-api-search-weather-in-your-city;verify-response-code-call-api-with-2-params-q-and-appid;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 83,
  "name": "Verify Response Code call api with 2 params q and appid",
  "description": "",
  "id": "test-api-search-weather-in-your-city;verify-response-code-call-api-with-2-params-q-and-appid;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@NAB_REQ_2.1"
    },
    {
      "line": 1,
      "name": "@searchWeather"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user sends API SearchWeather request with information corresponding \"11\"",
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "KEY",
        "city_name",
        "api_key"
      ],
      "line": 7
    },
    {
      "cells": [
        "2",
        "city name not exists",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 8
    },
    {
      "cells": [
        "3",
        "",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 9
    },
    {
      "cells": [
        "4",
        "",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 10
    },
    {
      "cells": [
        "5",
        "BG",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 11
    },
    {
      "cells": [
        "6",
        "ha noi vn",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 12
    },
    {
      "cells": [
        "7",
        "ha noi, cn",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 13
    },
    {
      "cells": [
        "8",
        "Krungthepmahanakhon Amonrattanakosin Mahintharayutthaya Mahadilokphop Noppharatratchathaniburirom Udomratchaniwetmahasathan Amonphimanawatansathit Sakkathattiyawitsanukamprasit",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 14
    },
    {
      "cells": [
        "10",
        "hanoi",
        "appid not exists"
      ],
      "line": 15
    },
    {
      "cells": [
        "11",
        "hanoi",
        "57c1c22050f92b6d7a0a4c5716912bbe"
      ],
      "line": 16
    },
    {
      "cells": [
        "12",
        "London",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 17
    },
    {
      "cells": [
        "13",
        "Tokyo",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 18
    },
    {
      "cells": [
        "14",
        "Thành phố hồ chí minh",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 19
    },
    {
      "cells": [
        "15",
        "Thai nguyen",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 20
    },
    {
      "cells": [
        "16",
        "上海",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 21
    },
    {
      "cells": [
        "17",
        "Chengdu",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 22
    },
    {
      "cells": [
        "18",
        "東京都",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 23
    },
    {
      "cells": [
        "19",
        "Nagoya",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 24
    },
    {
      "cells": [
        "20",
        "Hà Nội, VN",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 25
    },
    {
      "cells": [
        "21",
        "Hà Nam,",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 26
    },
    {
      "cells": [
        "22",
        "Bắc Giang, VN",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 27
    },
    {
      "cells": [
        "23",
        "Cần     Thơ",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 28
    },
    {
      "cells": [
        "24",
        "Vĩnh Long, VN",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 29
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "user check response code, response body with information corresponding \"11\"",
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "KEY",
        "response_code",
        "cod"
      ],
      "line": 32
    },
    {
      "cells": [
        "2",
        "404",
        "404"
      ],
      "line": 33
    },
    {
      "cells": [
        "3",
        "400",
        "400"
      ],
      "line": 34
    },
    {
      "cells": [
        "4",
        "400",
        "400"
      ],
      "line": 35
    },
    {
      "cells": [
        "5",
        "404",
        "404"
      ],
      "line": 36
    },
    {
      "cells": [
        "6",
        "404",
        "404"
      ],
      "line": 37
    },
    {
      "cells": [
        "7",
        "404",
        "404"
      ],
      "line": 38
    },
    {
      "cells": [
        "10",
        "401",
        "401"
      ],
      "line": 39
    },
    {
      "cells": [
        "11",
        "401",
        "401"
      ],
      "line": 40
    },
    {
      "cells": [
        "12",
        "200",
        "200"
      ],
      "line": 41
    },
    {
      "cells": [
        "13",
        "200",
        "200"
      ],
      "line": 42
    },
    {
      "cells": [
        "14",
        "200",
        "200"
      ],
      "line": 43
    },
    {
      "cells": [
        "15",
        "200",
        "200"
      ],
      "line": 44
    },
    {
      "cells": [
        "16",
        "200",
        "200"
      ],
      "line": 45
    },
    {
      "cells": [
        "17",
        "200",
        "200"
      ],
      "line": 46
    },
    {
      "cells": [
        "18",
        "200",
        "200"
      ],
      "line": 47
    },
    {
      "cells": [
        "19",
        "200",
        "200"
      ],
      "line": 48
    },
    {
      "cells": [
        "20",
        "200",
        "200"
      ],
      "line": 49
    },
    {
      "cells": [
        "21",
        "404",
        "404"
      ],
      "line": 50
    },
    {
      "cells": [
        "22",
        "200",
        "200"
      ],
      "line": 51
    },
    {
      "cells": [
        "23",
        "200",
        "200"
      ],
      "line": 52
    },
    {
      "cells": [
        "24",
        "200",
        "200"
      ],
      "line": 53
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "11",
      "offset": 69
    }
  ],
  "location": "SearchWeatherSteps.userSendsAPISearchWeatherRequestWithInformationCorresponding(String,DataTable)"
});
formatter.result({
  "duration": 102021000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "11",
      "offset": 72
    }
  ],
  "location": "SearchWeatherSteps.userCheckResponseCodeResponseBodyWithInformationCorresponding(String,DataTable)"
});
formatter.result({
  "duration": 23479300,
  "status": "passed"
});
formatter.examples({
  "line": 84,
  "name": "",
  "description": "",
  "id": "test-api-search-weather-in-your-city;verify-response-code-call-api-with-2-params-q-and-appid;",
  "rows": [
    {
      "cells": [
        "KEY"
      ],
      "line": 85,
      "id": "test-api-search-weather-in-your-city;verify-response-code-call-api-with-2-params-q-and-appid;;1"
    },
    {
      "cells": [
        "12"
      ],
      "line": 86,
      "id": "test-api-search-weather-in-your-city;verify-response-code-call-api-with-2-params-q-and-appid;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 86,
  "name": "Verify Response Code call api with 2 params q and appid",
  "description": "",
  "id": "test-api-search-weather-in-your-city;verify-response-code-call-api-with-2-params-q-and-appid;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@NAB_REQ_2.1"
    },
    {
      "line": 1,
      "name": "@searchWeather"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user sends API SearchWeather request with information corresponding \"12\"",
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "KEY",
        "city_name",
        "api_key"
      ],
      "line": 7
    },
    {
      "cells": [
        "2",
        "city name not exists",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 8
    },
    {
      "cells": [
        "3",
        "",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 9
    },
    {
      "cells": [
        "4",
        "",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 10
    },
    {
      "cells": [
        "5",
        "BG",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 11
    },
    {
      "cells": [
        "6",
        "ha noi vn",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 12
    },
    {
      "cells": [
        "7",
        "ha noi, cn",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 13
    },
    {
      "cells": [
        "8",
        "Krungthepmahanakhon Amonrattanakosin Mahintharayutthaya Mahadilokphop Noppharatratchathaniburirom Udomratchaniwetmahasathan Amonphimanawatansathit Sakkathattiyawitsanukamprasit",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 14
    },
    {
      "cells": [
        "10",
        "hanoi",
        "appid not exists"
      ],
      "line": 15
    },
    {
      "cells": [
        "11",
        "hanoi",
        "57c1c22050f92b6d7a0a4c5716912bbe"
      ],
      "line": 16
    },
    {
      "cells": [
        "12",
        "London",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 17
    },
    {
      "cells": [
        "13",
        "Tokyo",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 18
    },
    {
      "cells": [
        "14",
        "Thành phố hồ chí minh",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 19
    },
    {
      "cells": [
        "15",
        "Thai nguyen",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 20
    },
    {
      "cells": [
        "16",
        "上海",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 21
    },
    {
      "cells": [
        "17",
        "Chengdu",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 22
    },
    {
      "cells": [
        "18",
        "東京都",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 23
    },
    {
      "cells": [
        "19",
        "Nagoya",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 24
    },
    {
      "cells": [
        "20",
        "Hà Nội, VN",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 25
    },
    {
      "cells": [
        "21",
        "Hà Nam,",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 26
    },
    {
      "cells": [
        "22",
        "Bắc Giang, VN",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 27
    },
    {
      "cells": [
        "23",
        "Cần     Thơ",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 28
    },
    {
      "cells": [
        "24",
        "Vĩnh Long, VN",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 29
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "user check response code, response body with information corresponding \"12\"",
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "KEY",
        "response_code",
        "cod"
      ],
      "line": 32
    },
    {
      "cells": [
        "2",
        "404",
        "404"
      ],
      "line": 33
    },
    {
      "cells": [
        "3",
        "400",
        "400"
      ],
      "line": 34
    },
    {
      "cells": [
        "4",
        "400",
        "400"
      ],
      "line": 35
    },
    {
      "cells": [
        "5",
        "404",
        "404"
      ],
      "line": 36
    },
    {
      "cells": [
        "6",
        "404",
        "404"
      ],
      "line": 37
    },
    {
      "cells": [
        "7",
        "404",
        "404"
      ],
      "line": 38
    },
    {
      "cells": [
        "10",
        "401",
        "401"
      ],
      "line": 39
    },
    {
      "cells": [
        "11",
        "401",
        "401"
      ],
      "line": 40
    },
    {
      "cells": [
        "12",
        "200",
        "200"
      ],
      "line": 41
    },
    {
      "cells": [
        "13",
        "200",
        "200"
      ],
      "line": 42
    },
    {
      "cells": [
        "14",
        "200",
        "200"
      ],
      "line": 43
    },
    {
      "cells": [
        "15",
        "200",
        "200"
      ],
      "line": 44
    },
    {
      "cells": [
        "16",
        "200",
        "200"
      ],
      "line": 45
    },
    {
      "cells": [
        "17",
        "200",
        "200"
      ],
      "line": 46
    },
    {
      "cells": [
        "18",
        "200",
        "200"
      ],
      "line": 47
    },
    {
      "cells": [
        "19",
        "200",
        "200"
      ],
      "line": 48
    },
    {
      "cells": [
        "20",
        "200",
        "200"
      ],
      "line": 49
    },
    {
      "cells": [
        "21",
        "404",
        "404"
      ],
      "line": 50
    },
    {
      "cells": [
        "22",
        "200",
        "200"
      ],
      "line": 51
    },
    {
      "cells": [
        "23",
        "200",
        "200"
      ],
      "line": 52
    },
    {
      "cells": [
        "24",
        "200",
        "200"
      ],
      "line": 53
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "12",
      "offset": 69
    }
  ],
  "location": "SearchWeatherSteps.userSendsAPISearchWeatherRequestWithInformationCorresponding(String,DataTable)"
});
formatter.result({
  "duration": 103218200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12",
      "offset": 72
    }
  ],
  "location": "SearchWeatherSteps.userCheckResponseCodeResponseBodyWithInformationCorresponding(String,DataTable)"
});
formatter.result({
  "duration": 39926200,
  "status": "passed"
});
formatter.examples({
  "line": 87,
  "name": "",
  "description": "",
  "id": "test-api-search-weather-in-your-city;verify-response-code-call-api-with-2-params-q-and-appid;",
  "rows": [
    {
      "cells": [
        "KEY"
      ],
      "line": 88,
      "id": "test-api-search-weather-in-your-city;verify-response-code-call-api-with-2-params-q-and-appid;;1"
    },
    {
      "cells": [
        "13"
      ],
      "line": 89,
      "id": "test-api-search-weather-in-your-city;verify-response-code-call-api-with-2-params-q-and-appid;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 89,
  "name": "Verify Response Code call api with 2 params q and appid",
  "description": "",
  "id": "test-api-search-weather-in-your-city;verify-response-code-call-api-with-2-params-q-and-appid;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@NAB_REQ_2.1"
    },
    {
      "line": 1,
      "name": "@searchWeather"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user sends API SearchWeather request with information corresponding \"13\"",
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "KEY",
        "city_name",
        "api_key"
      ],
      "line": 7
    },
    {
      "cells": [
        "2",
        "city name not exists",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 8
    },
    {
      "cells": [
        "3",
        "",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 9
    },
    {
      "cells": [
        "4",
        "",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 10
    },
    {
      "cells": [
        "5",
        "BG",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 11
    },
    {
      "cells": [
        "6",
        "ha noi vn",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 12
    },
    {
      "cells": [
        "7",
        "ha noi, cn",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 13
    },
    {
      "cells": [
        "8",
        "Krungthepmahanakhon Amonrattanakosin Mahintharayutthaya Mahadilokphop Noppharatratchathaniburirom Udomratchaniwetmahasathan Amonphimanawatansathit Sakkathattiyawitsanukamprasit",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 14
    },
    {
      "cells": [
        "10",
        "hanoi",
        "appid not exists"
      ],
      "line": 15
    },
    {
      "cells": [
        "11",
        "hanoi",
        "57c1c22050f92b6d7a0a4c5716912bbe"
      ],
      "line": 16
    },
    {
      "cells": [
        "12",
        "London",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 17
    },
    {
      "cells": [
        "13",
        "Tokyo",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 18
    },
    {
      "cells": [
        "14",
        "Thành phố hồ chí minh",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 19
    },
    {
      "cells": [
        "15",
        "Thai nguyen",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 20
    },
    {
      "cells": [
        "16",
        "上海",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 21
    },
    {
      "cells": [
        "17",
        "Chengdu",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 22
    },
    {
      "cells": [
        "18",
        "東京都",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 23
    },
    {
      "cells": [
        "19",
        "Nagoya",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 24
    },
    {
      "cells": [
        "20",
        "Hà Nội, VN",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 25
    },
    {
      "cells": [
        "21",
        "Hà Nam,",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 26
    },
    {
      "cells": [
        "22",
        "Bắc Giang, VN",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 27
    },
    {
      "cells": [
        "23",
        "Cần     Thơ",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 28
    },
    {
      "cells": [
        "24",
        "Vĩnh Long, VN",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 29
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "user check response code, response body with information corresponding \"13\"",
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "KEY",
        "response_code",
        "cod"
      ],
      "line": 32
    },
    {
      "cells": [
        "2",
        "404",
        "404"
      ],
      "line": 33
    },
    {
      "cells": [
        "3",
        "400",
        "400"
      ],
      "line": 34
    },
    {
      "cells": [
        "4",
        "400",
        "400"
      ],
      "line": 35
    },
    {
      "cells": [
        "5",
        "404",
        "404"
      ],
      "line": 36
    },
    {
      "cells": [
        "6",
        "404",
        "404"
      ],
      "line": 37
    },
    {
      "cells": [
        "7",
        "404",
        "404"
      ],
      "line": 38
    },
    {
      "cells": [
        "10",
        "401",
        "401"
      ],
      "line": 39
    },
    {
      "cells": [
        "11",
        "401",
        "401"
      ],
      "line": 40
    },
    {
      "cells": [
        "12",
        "200",
        "200"
      ],
      "line": 41
    },
    {
      "cells": [
        "13",
        "200",
        "200"
      ],
      "line": 42
    },
    {
      "cells": [
        "14",
        "200",
        "200"
      ],
      "line": 43
    },
    {
      "cells": [
        "15",
        "200",
        "200"
      ],
      "line": 44
    },
    {
      "cells": [
        "16",
        "200",
        "200"
      ],
      "line": 45
    },
    {
      "cells": [
        "17",
        "200",
        "200"
      ],
      "line": 46
    },
    {
      "cells": [
        "18",
        "200",
        "200"
      ],
      "line": 47
    },
    {
      "cells": [
        "19",
        "200",
        "200"
      ],
      "line": 48
    },
    {
      "cells": [
        "20",
        "200",
        "200"
      ],
      "line": 49
    },
    {
      "cells": [
        "21",
        "404",
        "404"
      ],
      "line": 50
    },
    {
      "cells": [
        "22",
        "200",
        "200"
      ],
      "line": 51
    },
    {
      "cells": [
        "23",
        "200",
        "200"
      ],
      "line": 52
    },
    {
      "cells": [
        "24",
        "200",
        "200"
      ],
      "line": 53
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "13",
      "offset": 69
    }
  ],
  "location": "SearchWeatherSteps.userSendsAPISearchWeatherRequestWithInformationCorresponding(String,DataTable)"
});
formatter.result({
  "duration": 98832400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "13",
      "offset": 72
    }
  ],
  "location": "SearchWeatherSteps.userCheckResponseCodeResponseBodyWithInformationCorresponding(String,DataTable)"
});
formatter.result({
  "duration": 18053000,
  "status": "passed"
});
formatter.examples({
  "line": 90,
  "name": "",
  "description": "",
  "id": "test-api-search-weather-in-your-city;verify-response-code-call-api-with-2-params-q-and-appid;",
  "rows": [
    {
      "cells": [
        "KEY"
      ],
      "line": 91,
      "id": "test-api-search-weather-in-your-city;verify-response-code-call-api-with-2-params-q-and-appid;;1"
    },
    {
      "cells": [
        "14"
      ],
      "line": 92,
      "id": "test-api-search-weather-in-your-city;verify-response-code-call-api-with-2-params-q-and-appid;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 92,
  "name": "Verify Response Code call api with 2 params q and appid",
  "description": "",
  "id": "test-api-search-weather-in-your-city;verify-response-code-call-api-with-2-params-q-and-appid;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@NAB_REQ_2.1"
    },
    {
      "line": 1,
      "name": "@searchWeather"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user sends API SearchWeather request with information corresponding \"14\"",
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "KEY",
        "city_name",
        "api_key"
      ],
      "line": 7
    },
    {
      "cells": [
        "2",
        "city name not exists",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 8
    },
    {
      "cells": [
        "3",
        "",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 9
    },
    {
      "cells": [
        "4",
        "",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 10
    },
    {
      "cells": [
        "5",
        "BG",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 11
    },
    {
      "cells": [
        "6",
        "ha noi vn",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 12
    },
    {
      "cells": [
        "7",
        "ha noi, cn",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 13
    },
    {
      "cells": [
        "8",
        "Krungthepmahanakhon Amonrattanakosin Mahintharayutthaya Mahadilokphop Noppharatratchathaniburirom Udomratchaniwetmahasathan Amonphimanawatansathit Sakkathattiyawitsanukamprasit",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 14
    },
    {
      "cells": [
        "10",
        "hanoi",
        "appid not exists"
      ],
      "line": 15
    },
    {
      "cells": [
        "11",
        "hanoi",
        "57c1c22050f92b6d7a0a4c5716912bbe"
      ],
      "line": 16
    },
    {
      "cells": [
        "12",
        "London",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 17
    },
    {
      "cells": [
        "13",
        "Tokyo",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 18
    },
    {
      "cells": [
        "14",
        "Thành phố hồ chí minh",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 19
    },
    {
      "cells": [
        "15",
        "Thai nguyen",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 20
    },
    {
      "cells": [
        "16",
        "上海",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 21
    },
    {
      "cells": [
        "17",
        "Chengdu",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 22
    },
    {
      "cells": [
        "18",
        "東京都",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 23
    },
    {
      "cells": [
        "19",
        "Nagoya",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 24
    },
    {
      "cells": [
        "20",
        "Hà Nội, VN",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 25
    },
    {
      "cells": [
        "21",
        "Hà Nam,",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 26
    },
    {
      "cells": [
        "22",
        "Bắc Giang, VN",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 27
    },
    {
      "cells": [
        "23",
        "Cần     Thơ",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 28
    },
    {
      "cells": [
        "24",
        "Vĩnh Long, VN",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 29
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "user check response code, response body with information corresponding \"14\"",
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "KEY",
        "response_code",
        "cod"
      ],
      "line": 32
    },
    {
      "cells": [
        "2",
        "404",
        "404"
      ],
      "line": 33
    },
    {
      "cells": [
        "3",
        "400",
        "400"
      ],
      "line": 34
    },
    {
      "cells": [
        "4",
        "400",
        "400"
      ],
      "line": 35
    },
    {
      "cells": [
        "5",
        "404",
        "404"
      ],
      "line": 36
    },
    {
      "cells": [
        "6",
        "404",
        "404"
      ],
      "line": 37
    },
    {
      "cells": [
        "7",
        "404",
        "404"
      ],
      "line": 38
    },
    {
      "cells": [
        "10",
        "401",
        "401"
      ],
      "line": 39
    },
    {
      "cells": [
        "11",
        "401",
        "401"
      ],
      "line": 40
    },
    {
      "cells": [
        "12",
        "200",
        "200"
      ],
      "line": 41
    },
    {
      "cells": [
        "13",
        "200",
        "200"
      ],
      "line": 42
    },
    {
      "cells": [
        "14",
        "200",
        "200"
      ],
      "line": 43
    },
    {
      "cells": [
        "15",
        "200",
        "200"
      ],
      "line": 44
    },
    {
      "cells": [
        "16",
        "200",
        "200"
      ],
      "line": 45
    },
    {
      "cells": [
        "17",
        "200",
        "200"
      ],
      "line": 46
    },
    {
      "cells": [
        "18",
        "200",
        "200"
      ],
      "line": 47
    },
    {
      "cells": [
        "19",
        "200",
        "200"
      ],
      "line": 48
    },
    {
      "cells": [
        "20",
        "200",
        "200"
      ],
      "line": 49
    },
    {
      "cells": [
        "21",
        "404",
        "404"
      ],
      "line": 50
    },
    {
      "cells": [
        "22",
        "200",
        "200"
      ],
      "line": 51
    },
    {
      "cells": [
        "23",
        "200",
        "200"
      ],
      "line": 52
    },
    {
      "cells": [
        "24",
        "200",
        "200"
      ],
      "line": 53
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "14",
      "offset": 69
    }
  ],
  "location": "SearchWeatherSteps.userSendsAPISearchWeatherRequestWithInformationCorresponding(String,DataTable)"
});
formatter.result({
  "duration": 102697200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "14",
      "offset": 72
    }
  ],
  "location": "SearchWeatherSteps.userCheckResponseCodeResponseBodyWithInformationCorresponding(String,DataTable)"
});
formatter.result({
  "duration": 14199500,
  "status": "passed"
});
formatter.examples({
  "line": 93,
  "name": "",
  "description": "",
  "id": "test-api-search-weather-in-your-city;verify-response-code-call-api-with-2-params-q-and-appid;",
  "rows": [
    {
      "cells": [
        "KEY"
      ],
      "line": 94,
      "id": "test-api-search-weather-in-your-city;verify-response-code-call-api-with-2-params-q-and-appid;;1"
    },
    {
      "cells": [
        "15"
      ],
      "line": 95,
      "id": "test-api-search-weather-in-your-city;verify-response-code-call-api-with-2-params-q-and-appid;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 95,
  "name": "Verify Response Code call api with 2 params q and appid",
  "description": "",
  "id": "test-api-search-weather-in-your-city;verify-response-code-call-api-with-2-params-q-and-appid;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@NAB_REQ_2.1"
    },
    {
      "line": 1,
      "name": "@searchWeather"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user sends API SearchWeather request with information corresponding \"15\"",
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "KEY",
        "city_name",
        "api_key"
      ],
      "line": 7
    },
    {
      "cells": [
        "2",
        "city name not exists",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 8
    },
    {
      "cells": [
        "3",
        "",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 9
    },
    {
      "cells": [
        "4",
        "",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 10
    },
    {
      "cells": [
        "5",
        "BG",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 11
    },
    {
      "cells": [
        "6",
        "ha noi vn",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 12
    },
    {
      "cells": [
        "7",
        "ha noi, cn",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 13
    },
    {
      "cells": [
        "8",
        "Krungthepmahanakhon Amonrattanakosin Mahintharayutthaya Mahadilokphop Noppharatratchathaniburirom Udomratchaniwetmahasathan Amonphimanawatansathit Sakkathattiyawitsanukamprasit",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 14
    },
    {
      "cells": [
        "10",
        "hanoi",
        "appid not exists"
      ],
      "line": 15
    },
    {
      "cells": [
        "11",
        "hanoi",
        "57c1c22050f92b6d7a0a4c5716912bbe"
      ],
      "line": 16
    },
    {
      "cells": [
        "12",
        "London",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 17
    },
    {
      "cells": [
        "13",
        "Tokyo",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 18
    },
    {
      "cells": [
        "14",
        "Thành phố hồ chí minh",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 19
    },
    {
      "cells": [
        "15",
        "Thai nguyen",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 20
    },
    {
      "cells": [
        "16",
        "上海",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 21
    },
    {
      "cells": [
        "17",
        "Chengdu",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 22
    },
    {
      "cells": [
        "18",
        "東京都",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 23
    },
    {
      "cells": [
        "19",
        "Nagoya",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 24
    },
    {
      "cells": [
        "20",
        "Hà Nội, VN",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 25
    },
    {
      "cells": [
        "21",
        "Hà Nam,",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 26
    },
    {
      "cells": [
        "22",
        "Bắc Giang, VN",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 27
    },
    {
      "cells": [
        "23",
        "Cần     Thơ",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 28
    },
    {
      "cells": [
        "24",
        "Vĩnh Long, VN",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 29
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "user check response code, response body with information corresponding \"15\"",
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "KEY",
        "response_code",
        "cod"
      ],
      "line": 32
    },
    {
      "cells": [
        "2",
        "404",
        "404"
      ],
      "line": 33
    },
    {
      "cells": [
        "3",
        "400",
        "400"
      ],
      "line": 34
    },
    {
      "cells": [
        "4",
        "400",
        "400"
      ],
      "line": 35
    },
    {
      "cells": [
        "5",
        "404",
        "404"
      ],
      "line": 36
    },
    {
      "cells": [
        "6",
        "404",
        "404"
      ],
      "line": 37
    },
    {
      "cells": [
        "7",
        "404",
        "404"
      ],
      "line": 38
    },
    {
      "cells": [
        "10",
        "401",
        "401"
      ],
      "line": 39
    },
    {
      "cells": [
        "11",
        "401",
        "401"
      ],
      "line": 40
    },
    {
      "cells": [
        "12",
        "200",
        "200"
      ],
      "line": 41
    },
    {
      "cells": [
        "13",
        "200",
        "200"
      ],
      "line": 42
    },
    {
      "cells": [
        "14",
        "200",
        "200"
      ],
      "line": 43
    },
    {
      "cells": [
        "15",
        "200",
        "200"
      ],
      "line": 44
    },
    {
      "cells": [
        "16",
        "200",
        "200"
      ],
      "line": 45
    },
    {
      "cells": [
        "17",
        "200",
        "200"
      ],
      "line": 46
    },
    {
      "cells": [
        "18",
        "200",
        "200"
      ],
      "line": 47
    },
    {
      "cells": [
        "19",
        "200",
        "200"
      ],
      "line": 48
    },
    {
      "cells": [
        "20",
        "200",
        "200"
      ],
      "line": 49
    },
    {
      "cells": [
        "21",
        "404",
        "404"
      ],
      "line": 50
    },
    {
      "cells": [
        "22",
        "200",
        "200"
      ],
      "line": 51
    },
    {
      "cells": [
        "23",
        "200",
        "200"
      ],
      "line": 52
    },
    {
      "cells": [
        "24",
        "200",
        "200"
      ],
      "line": 53
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "15",
      "offset": 69
    }
  ],
  "location": "SearchWeatherSteps.userSendsAPISearchWeatherRequestWithInformationCorresponding(String,DataTable)"
});
formatter.result({
  "duration": 114670800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "15",
      "offset": 72
    }
  ],
  "location": "SearchWeatherSteps.userCheckResponseCodeResponseBodyWithInformationCorresponding(String,DataTable)"
});
formatter.result({
  "duration": 32679000,
  "status": "passed"
});
formatter.examples({
  "line": 96,
  "name": "",
  "description": "",
  "id": "test-api-search-weather-in-your-city;verify-response-code-call-api-with-2-params-q-and-appid;",
  "rows": [
    {
      "cells": [
        "KEY"
      ],
      "line": 97,
      "id": "test-api-search-weather-in-your-city;verify-response-code-call-api-with-2-params-q-and-appid;;1"
    },
    {
      "cells": [
        "16"
      ],
      "line": 98,
      "id": "test-api-search-weather-in-your-city;verify-response-code-call-api-with-2-params-q-and-appid;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 98,
  "name": "Verify Response Code call api with 2 params q and appid",
  "description": "",
  "id": "test-api-search-weather-in-your-city;verify-response-code-call-api-with-2-params-q-and-appid;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@NAB_REQ_2.1"
    },
    {
      "line": 1,
      "name": "@searchWeather"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user sends API SearchWeather request with information corresponding \"16\"",
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "KEY",
        "city_name",
        "api_key"
      ],
      "line": 7
    },
    {
      "cells": [
        "2",
        "city name not exists",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 8
    },
    {
      "cells": [
        "3",
        "",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 9
    },
    {
      "cells": [
        "4",
        "",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 10
    },
    {
      "cells": [
        "5",
        "BG",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 11
    },
    {
      "cells": [
        "6",
        "ha noi vn",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 12
    },
    {
      "cells": [
        "7",
        "ha noi, cn",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 13
    },
    {
      "cells": [
        "8",
        "Krungthepmahanakhon Amonrattanakosin Mahintharayutthaya Mahadilokphop Noppharatratchathaniburirom Udomratchaniwetmahasathan Amonphimanawatansathit Sakkathattiyawitsanukamprasit",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 14
    },
    {
      "cells": [
        "10",
        "hanoi",
        "appid not exists"
      ],
      "line": 15
    },
    {
      "cells": [
        "11",
        "hanoi",
        "57c1c22050f92b6d7a0a4c5716912bbe"
      ],
      "line": 16
    },
    {
      "cells": [
        "12",
        "London",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 17
    },
    {
      "cells": [
        "13",
        "Tokyo",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 18
    },
    {
      "cells": [
        "14",
        "Thành phố hồ chí minh",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 19
    },
    {
      "cells": [
        "15",
        "Thai nguyen",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 20
    },
    {
      "cells": [
        "16",
        "上海",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 21
    },
    {
      "cells": [
        "17",
        "Chengdu",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 22
    },
    {
      "cells": [
        "18",
        "東京都",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 23
    },
    {
      "cells": [
        "19",
        "Nagoya",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 24
    },
    {
      "cells": [
        "20",
        "Hà Nội, VN",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 25
    },
    {
      "cells": [
        "21",
        "Hà Nam,",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 26
    },
    {
      "cells": [
        "22",
        "Bắc Giang, VN",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 27
    },
    {
      "cells": [
        "23",
        "Cần     Thơ",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 28
    },
    {
      "cells": [
        "24",
        "Vĩnh Long, VN",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 29
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "user check response code, response body with information corresponding \"16\"",
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "KEY",
        "response_code",
        "cod"
      ],
      "line": 32
    },
    {
      "cells": [
        "2",
        "404",
        "404"
      ],
      "line": 33
    },
    {
      "cells": [
        "3",
        "400",
        "400"
      ],
      "line": 34
    },
    {
      "cells": [
        "4",
        "400",
        "400"
      ],
      "line": 35
    },
    {
      "cells": [
        "5",
        "404",
        "404"
      ],
      "line": 36
    },
    {
      "cells": [
        "6",
        "404",
        "404"
      ],
      "line": 37
    },
    {
      "cells": [
        "7",
        "404",
        "404"
      ],
      "line": 38
    },
    {
      "cells": [
        "10",
        "401",
        "401"
      ],
      "line": 39
    },
    {
      "cells": [
        "11",
        "401",
        "401"
      ],
      "line": 40
    },
    {
      "cells": [
        "12",
        "200",
        "200"
      ],
      "line": 41
    },
    {
      "cells": [
        "13",
        "200",
        "200"
      ],
      "line": 42
    },
    {
      "cells": [
        "14",
        "200",
        "200"
      ],
      "line": 43
    },
    {
      "cells": [
        "15",
        "200",
        "200"
      ],
      "line": 44
    },
    {
      "cells": [
        "16",
        "200",
        "200"
      ],
      "line": 45
    },
    {
      "cells": [
        "17",
        "200",
        "200"
      ],
      "line": 46
    },
    {
      "cells": [
        "18",
        "200",
        "200"
      ],
      "line": 47
    },
    {
      "cells": [
        "19",
        "200",
        "200"
      ],
      "line": 48
    },
    {
      "cells": [
        "20",
        "200",
        "200"
      ],
      "line": 49
    },
    {
      "cells": [
        "21",
        "404",
        "404"
      ],
      "line": 50
    },
    {
      "cells": [
        "22",
        "200",
        "200"
      ],
      "line": 51
    },
    {
      "cells": [
        "23",
        "200",
        "200"
      ],
      "line": 52
    },
    {
      "cells": [
        "24",
        "200",
        "200"
      ],
      "line": 53
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "16",
      "offset": 69
    }
  ],
  "location": "SearchWeatherSteps.userSendsAPISearchWeatherRequestWithInformationCorresponding(String,DataTable)"
});
formatter.result({
  "duration": 100450200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "16",
      "offset": 72
    }
  ],
  "location": "SearchWeatherSteps.userCheckResponseCodeResponseBodyWithInformationCorresponding(String,DataTable)"
});
formatter.result({
  "duration": 13748200,
  "status": "passed"
});
formatter.examples({
  "line": 99,
  "name": "",
  "description": "",
  "id": "test-api-search-weather-in-your-city;verify-response-code-call-api-with-2-params-q-and-appid;",
  "rows": [
    {
      "cells": [
        "KEY"
      ],
      "line": 100,
      "id": "test-api-search-weather-in-your-city;verify-response-code-call-api-with-2-params-q-and-appid;;1"
    },
    {
      "cells": [
        "17"
      ],
      "line": 101,
      "id": "test-api-search-weather-in-your-city;verify-response-code-call-api-with-2-params-q-and-appid;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 101,
  "name": "Verify Response Code call api with 2 params q and appid",
  "description": "",
  "id": "test-api-search-weather-in-your-city;verify-response-code-call-api-with-2-params-q-and-appid;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@NAB_REQ_2.1"
    },
    {
      "line": 1,
      "name": "@searchWeather"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user sends API SearchWeather request with information corresponding \"17\"",
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "KEY",
        "city_name",
        "api_key"
      ],
      "line": 7
    },
    {
      "cells": [
        "2",
        "city name not exists",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 8
    },
    {
      "cells": [
        "3",
        "",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 9
    },
    {
      "cells": [
        "4",
        "",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 10
    },
    {
      "cells": [
        "5",
        "BG",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 11
    },
    {
      "cells": [
        "6",
        "ha noi vn",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 12
    },
    {
      "cells": [
        "7",
        "ha noi, cn",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 13
    },
    {
      "cells": [
        "8",
        "Krungthepmahanakhon Amonrattanakosin Mahintharayutthaya Mahadilokphop Noppharatratchathaniburirom Udomratchaniwetmahasathan Amonphimanawatansathit Sakkathattiyawitsanukamprasit",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 14
    },
    {
      "cells": [
        "10",
        "hanoi",
        "appid not exists"
      ],
      "line": 15
    },
    {
      "cells": [
        "11",
        "hanoi",
        "57c1c22050f92b6d7a0a4c5716912bbe"
      ],
      "line": 16
    },
    {
      "cells": [
        "12",
        "London",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 17
    },
    {
      "cells": [
        "13",
        "Tokyo",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 18
    },
    {
      "cells": [
        "14",
        "Thành phố hồ chí minh",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 19
    },
    {
      "cells": [
        "15",
        "Thai nguyen",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 20
    },
    {
      "cells": [
        "16",
        "上海",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 21
    },
    {
      "cells": [
        "17",
        "Chengdu",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 22
    },
    {
      "cells": [
        "18",
        "東京都",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 23
    },
    {
      "cells": [
        "19",
        "Nagoya",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 24
    },
    {
      "cells": [
        "20",
        "Hà Nội, VN",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 25
    },
    {
      "cells": [
        "21",
        "Hà Nam,",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 26
    },
    {
      "cells": [
        "22",
        "Bắc Giang, VN",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 27
    },
    {
      "cells": [
        "23",
        "Cần     Thơ",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 28
    },
    {
      "cells": [
        "24",
        "Vĩnh Long, VN",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 29
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "user check response code, response body with information corresponding \"17\"",
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "KEY",
        "response_code",
        "cod"
      ],
      "line": 32
    },
    {
      "cells": [
        "2",
        "404",
        "404"
      ],
      "line": 33
    },
    {
      "cells": [
        "3",
        "400",
        "400"
      ],
      "line": 34
    },
    {
      "cells": [
        "4",
        "400",
        "400"
      ],
      "line": 35
    },
    {
      "cells": [
        "5",
        "404",
        "404"
      ],
      "line": 36
    },
    {
      "cells": [
        "6",
        "404",
        "404"
      ],
      "line": 37
    },
    {
      "cells": [
        "7",
        "404",
        "404"
      ],
      "line": 38
    },
    {
      "cells": [
        "10",
        "401",
        "401"
      ],
      "line": 39
    },
    {
      "cells": [
        "11",
        "401",
        "401"
      ],
      "line": 40
    },
    {
      "cells": [
        "12",
        "200",
        "200"
      ],
      "line": 41
    },
    {
      "cells": [
        "13",
        "200",
        "200"
      ],
      "line": 42
    },
    {
      "cells": [
        "14",
        "200",
        "200"
      ],
      "line": 43
    },
    {
      "cells": [
        "15",
        "200",
        "200"
      ],
      "line": 44
    },
    {
      "cells": [
        "16",
        "200",
        "200"
      ],
      "line": 45
    },
    {
      "cells": [
        "17",
        "200",
        "200"
      ],
      "line": 46
    },
    {
      "cells": [
        "18",
        "200",
        "200"
      ],
      "line": 47
    },
    {
      "cells": [
        "19",
        "200",
        "200"
      ],
      "line": 48
    },
    {
      "cells": [
        "20",
        "200",
        "200"
      ],
      "line": 49
    },
    {
      "cells": [
        "21",
        "404",
        "404"
      ],
      "line": 50
    },
    {
      "cells": [
        "22",
        "200",
        "200"
      ],
      "line": 51
    },
    {
      "cells": [
        "23",
        "200",
        "200"
      ],
      "line": 52
    },
    {
      "cells": [
        "24",
        "200",
        "200"
      ],
      "line": 53
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "17",
      "offset": 69
    }
  ],
  "location": "SearchWeatherSteps.userSendsAPISearchWeatherRequestWithInformationCorresponding(String,DataTable)"
});
formatter.result({
  "duration": 99334000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "17",
      "offset": 72
    }
  ],
  "location": "SearchWeatherSteps.userCheckResponseCodeResponseBodyWithInformationCorresponding(String,DataTable)"
});
formatter.result({
  "duration": 17604500,
  "status": "passed"
});
formatter.examples({
  "line": 102,
  "name": "",
  "description": "",
  "id": "test-api-search-weather-in-your-city;verify-response-code-call-api-with-2-params-q-and-appid;",
  "rows": [
    {
      "cells": [
        "KEY"
      ],
      "line": 103,
      "id": "test-api-search-weather-in-your-city;verify-response-code-call-api-with-2-params-q-and-appid;;1"
    },
    {
      "cells": [
        "18"
      ],
      "line": 104,
      "id": "test-api-search-weather-in-your-city;verify-response-code-call-api-with-2-params-q-and-appid;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 104,
  "name": "Verify Response Code call api with 2 params q and appid",
  "description": "",
  "id": "test-api-search-weather-in-your-city;verify-response-code-call-api-with-2-params-q-and-appid;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@NAB_REQ_2.1"
    },
    {
      "line": 1,
      "name": "@searchWeather"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user sends API SearchWeather request with information corresponding \"18\"",
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "KEY",
        "city_name",
        "api_key"
      ],
      "line": 7
    },
    {
      "cells": [
        "2",
        "city name not exists",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 8
    },
    {
      "cells": [
        "3",
        "",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 9
    },
    {
      "cells": [
        "4",
        "",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 10
    },
    {
      "cells": [
        "5",
        "BG",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 11
    },
    {
      "cells": [
        "6",
        "ha noi vn",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 12
    },
    {
      "cells": [
        "7",
        "ha noi, cn",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 13
    },
    {
      "cells": [
        "8",
        "Krungthepmahanakhon Amonrattanakosin Mahintharayutthaya Mahadilokphop Noppharatratchathaniburirom Udomratchaniwetmahasathan Amonphimanawatansathit Sakkathattiyawitsanukamprasit",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 14
    },
    {
      "cells": [
        "10",
        "hanoi",
        "appid not exists"
      ],
      "line": 15
    },
    {
      "cells": [
        "11",
        "hanoi",
        "57c1c22050f92b6d7a0a4c5716912bbe"
      ],
      "line": 16
    },
    {
      "cells": [
        "12",
        "London",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 17
    },
    {
      "cells": [
        "13",
        "Tokyo",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 18
    },
    {
      "cells": [
        "14",
        "Thành phố hồ chí minh",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 19
    },
    {
      "cells": [
        "15",
        "Thai nguyen",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 20
    },
    {
      "cells": [
        "16",
        "上海",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 21
    },
    {
      "cells": [
        "17",
        "Chengdu",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 22
    },
    {
      "cells": [
        "18",
        "東京都",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 23
    },
    {
      "cells": [
        "19",
        "Nagoya",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 24
    },
    {
      "cells": [
        "20",
        "Hà Nội, VN",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 25
    },
    {
      "cells": [
        "21",
        "Hà Nam,",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 26
    },
    {
      "cells": [
        "22",
        "Bắc Giang, VN",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 27
    },
    {
      "cells": [
        "23",
        "Cần     Thơ",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 28
    },
    {
      "cells": [
        "24",
        "Vĩnh Long, VN",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 29
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "user check response code, response body with information corresponding \"18\"",
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "KEY",
        "response_code",
        "cod"
      ],
      "line": 32
    },
    {
      "cells": [
        "2",
        "404",
        "404"
      ],
      "line": 33
    },
    {
      "cells": [
        "3",
        "400",
        "400"
      ],
      "line": 34
    },
    {
      "cells": [
        "4",
        "400",
        "400"
      ],
      "line": 35
    },
    {
      "cells": [
        "5",
        "404",
        "404"
      ],
      "line": 36
    },
    {
      "cells": [
        "6",
        "404",
        "404"
      ],
      "line": 37
    },
    {
      "cells": [
        "7",
        "404",
        "404"
      ],
      "line": 38
    },
    {
      "cells": [
        "10",
        "401",
        "401"
      ],
      "line": 39
    },
    {
      "cells": [
        "11",
        "401",
        "401"
      ],
      "line": 40
    },
    {
      "cells": [
        "12",
        "200",
        "200"
      ],
      "line": 41
    },
    {
      "cells": [
        "13",
        "200",
        "200"
      ],
      "line": 42
    },
    {
      "cells": [
        "14",
        "200",
        "200"
      ],
      "line": 43
    },
    {
      "cells": [
        "15",
        "200",
        "200"
      ],
      "line": 44
    },
    {
      "cells": [
        "16",
        "200",
        "200"
      ],
      "line": 45
    },
    {
      "cells": [
        "17",
        "200",
        "200"
      ],
      "line": 46
    },
    {
      "cells": [
        "18",
        "200",
        "200"
      ],
      "line": 47
    },
    {
      "cells": [
        "19",
        "200",
        "200"
      ],
      "line": 48
    },
    {
      "cells": [
        "20",
        "200",
        "200"
      ],
      "line": 49
    },
    {
      "cells": [
        "21",
        "404",
        "404"
      ],
      "line": 50
    },
    {
      "cells": [
        "22",
        "200",
        "200"
      ],
      "line": 51
    },
    {
      "cells": [
        "23",
        "200",
        "200"
      ],
      "line": 52
    },
    {
      "cells": [
        "24",
        "200",
        "200"
      ],
      "line": 53
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "18",
      "offset": 69
    }
  ],
  "location": "SearchWeatherSteps.userSendsAPISearchWeatherRequestWithInformationCorresponding(String,DataTable)"
});
formatter.result({
  "duration": 138637700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "18",
      "offset": 72
    }
  ],
  "location": "SearchWeatherSteps.userCheckResponseCodeResponseBodyWithInformationCorresponding(String,DataTable)"
});
formatter.result({
  "duration": 13769900,
  "status": "passed"
});
formatter.examples({
  "line": 105,
  "name": "",
  "description": "",
  "id": "test-api-search-weather-in-your-city;verify-response-code-call-api-with-2-params-q-and-appid;",
  "rows": [
    {
      "cells": [
        "KEY"
      ],
      "line": 106,
      "id": "test-api-search-weather-in-your-city;verify-response-code-call-api-with-2-params-q-and-appid;;1"
    },
    {
      "cells": [
        "19"
      ],
      "line": 107,
      "id": "test-api-search-weather-in-your-city;verify-response-code-call-api-with-2-params-q-and-appid;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 107,
  "name": "Verify Response Code call api with 2 params q and appid",
  "description": "",
  "id": "test-api-search-weather-in-your-city;verify-response-code-call-api-with-2-params-q-and-appid;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@NAB_REQ_2.1"
    },
    {
      "line": 1,
      "name": "@searchWeather"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user sends API SearchWeather request with information corresponding \"19\"",
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "KEY",
        "city_name",
        "api_key"
      ],
      "line": 7
    },
    {
      "cells": [
        "2",
        "city name not exists",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 8
    },
    {
      "cells": [
        "3",
        "",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 9
    },
    {
      "cells": [
        "4",
        "",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 10
    },
    {
      "cells": [
        "5",
        "BG",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 11
    },
    {
      "cells": [
        "6",
        "ha noi vn",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 12
    },
    {
      "cells": [
        "7",
        "ha noi, cn",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 13
    },
    {
      "cells": [
        "8",
        "Krungthepmahanakhon Amonrattanakosin Mahintharayutthaya Mahadilokphop Noppharatratchathaniburirom Udomratchaniwetmahasathan Amonphimanawatansathit Sakkathattiyawitsanukamprasit",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 14
    },
    {
      "cells": [
        "10",
        "hanoi",
        "appid not exists"
      ],
      "line": 15
    },
    {
      "cells": [
        "11",
        "hanoi",
        "57c1c22050f92b6d7a0a4c5716912bbe"
      ],
      "line": 16
    },
    {
      "cells": [
        "12",
        "London",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 17
    },
    {
      "cells": [
        "13",
        "Tokyo",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 18
    },
    {
      "cells": [
        "14",
        "Thành phố hồ chí minh",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 19
    },
    {
      "cells": [
        "15",
        "Thai nguyen",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 20
    },
    {
      "cells": [
        "16",
        "上海",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 21
    },
    {
      "cells": [
        "17",
        "Chengdu",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 22
    },
    {
      "cells": [
        "18",
        "東京都",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 23
    },
    {
      "cells": [
        "19",
        "Nagoya",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 24
    },
    {
      "cells": [
        "20",
        "Hà Nội, VN",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 25
    },
    {
      "cells": [
        "21",
        "Hà Nam,",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 26
    },
    {
      "cells": [
        "22",
        "Bắc Giang, VN",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 27
    },
    {
      "cells": [
        "23",
        "Cần     Thơ",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 28
    },
    {
      "cells": [
        "24",
        "Vĩnh Long, VN",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 29
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "user check response code, response body with information corresponding \"19\"",
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "KEY",
        "response_code",
        "cod"
      ],
      "line": 32
    },
    {
      "cells": [
        "2",
        "404",
        "404"
      ],
      "line": 33
    },
    {
      "cells": [
        "3",
        "400",
        "400"
      ],
      "line": 34
    },
    {
      "cells": [
        "4",
        "400",
        "400"
      ],
      "line": 35
    },
    {
      "cells": [
        "5",
        "404",
        "404"
      ],
      "line": 36
    },
    {
      "cells": [
        "6",
        "404",
        "404"
      ],
      "line": 37
    },
    {
      "cells": [
        "7",
        "404",
        "404"
      ],
      "line": 38
    },
    {
      "cells": [
        "10",
        "401",
        "401"
      ],
      "line": 39
    },
    {
      "cells": [
        "11",
        "401",
        "401"
      ],
      "line": 40
    },
    {
      "cells": [
        "12",
        "200",
        "200"
      ],
      "line": 41
    },
    {
      "cells": [
        "13",
        "200",
        "200"
      ],
      "line": 42
    },
    {
      "cells": [
        "14",
        "200",
        "200"
      ],
      "line": 43
    },
    {
      "cells": [
        "15",
        "200",
        "200"
      ],
      "line": 44
    },
    {
      "cells": [
        "16",
        "200",
        "200"
      ],
      "line": 45
    },
    {
      "cells": [
        "17",
        "200",
        "200"
      ],
      "line": 46
    },
    {
      "cells": [
        "18",
        "200",
        "200"
      ],
      "line": 47
    },
    {
      "cells": [
        "19",
        "200",
        "200"
      ],
      "line": 48
    },
    {
      "cells": [
        "20",
        "200",
        "200"
      ],
      "line": 49
    },
    {
      "cells": [
        "21",
        "404",
        "404"
      ],
      "line": 50
    },
    {
      "cells": [
        "22",
        "200",
        "200"
      ],
      "line": 51
    },
    {
      "cells": [
        "23",
        "200",
        "200"
      ],
      "line": 52
    },
    {
      "cells": [
        "24",
        "200",
        "200"
      ],
      "line": 53
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "19",
      "offset": 69
    }
  ],
  "location": "SearchWeatherSteps.userSendsAPISearchWeatherRequestWithInformationCorresponding(String,DataTable)"
});
formatter.result({
  "duration": 136018800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "19",
      "offset": 72
    }
  ],
  "location": "SearchWeatherSteps.userCheckResponseCodeResponseBodyWithInformationCorresponding(String,DataTable)"
});
formatter.result({
  "duration": 21929300,
  "status": "passed"
});
formatter.examples({
  "line": 108,
  "name": "",
  "description": "",
  "id": "test-api-search-weather-in-your-city;verify-response-code-call-api-with-2-params-q-and-appid;",
  "rows": [
    {
      "cells": [
        "KEY"
      ],
      "line": 109,
      "id": "test-api-search-weather-in-your-city;verify-response-code-call-api-with-2-params-q-and-appid;;1"
    },
    {
      "cells": [
        "20"
      ],
      "line": 110,
      "id": "test-api-search-weather-in-your-city;verify-response-code-call-api-with-2-params-q-and-appid;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 110,
  "name": "Verify Response Code call api with 2 params q and appid",
  "description": "",
  "id": "test-api-search-weather-in-your-city;verify-response-code-call-api-with-2-params-q-and-appid;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@NAB_REQ_2.1"
    },
    {
      "line": 1,
      "name": "@searchWeather"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user sends API SearchWeather request with information corresponding \"20\"",
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "KEY",
        "city_name",
        "api_key"
      ],
      "line": 7
    },
    {
      "cells": [
        "2",
        "city name not exists",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 8
    },
    {
      "cells": [
        "3",
        "",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 9
    },
    {
      "cells": [
        "4",
        "",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 10
    },
    {
      "cells": [
        "5",
        "BG",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 11
    },
    {
      "cells": [
        "6",
        "ha noi vn",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 12
    },
    {
      "cells": [
        "7",
        "ha noi, cn",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 13
    },
    {
      "cells": [
        "8",
        "Krungthepmahanakhon Amonrattanakosin Mahintharayutthaya Mahadilokphop Noppharatratchathaniburirom Udomratchaniwetmahasathan Amonphimanawatansathit Sakkathattiyawitsanukamprasit",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 14
    },
    {
      "cells": [
        "10",
        "hanoi",
        "appid not exists"
      ],
      "line": 15
    },
    {
      "cells": [
        "11",
        "hanoi",
        "57c1c22050f92b6d7a0a4c5716912bbe"
      ],
      "line": 16
    },
    {
      "cells": [
        "12",
        "London",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 17
    },
    {
      "cells": [
        "13",
        "Tokyo",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 18
    },
    {
      "cells": [
        "14",
        "Thành phố hồ chí minh",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 19
    },
    {
      "cells": [
        "15",
        "Thai nguyen",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 20
    },
    {
      "cells": [
        "16",
        "上海",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 21
    },
    {
      "cells": [
        "17",
        "Chengdu",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 22
    },
    {
      "cells": [
        "18",
        "東京都",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 23
    },
    {
      "cells": [
        "19",
        "Nagoya",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 24
    },
    {
      "cells": [
        "20",
        "Hà Nội, VN",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 25
    },
    {
      "cells": [
        "21",
        "Hà Nam,",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 26
    },
    {
      "cells": [
        "22",
        "Bắc Giang, VN",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 27
    },
    {
      "cells": [
        "23",
        "Cần     Thơ",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 28
    },
    {
      "cells": [
        "24",
        "Vĩnh Long, VN",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 29
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "user check response code, response body with information corresponding \"20\"",
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "KEY",
        "response_code",
        "cod"
      ],
      "line": 32
    },
    {
      "cells": [
        "2",
        "404",
        "404"
      ],
      "line": 33
    },
    {
      "cells": [
        "3",
        "400",
        "400"
      ],
      "line": 34
    },
    {
      "cells": [
        "4",
        "400",
        "400"
      ],
      "line": 35
    },
    {
      "cells": [
        "5",
        "404",
        "404"
      ],
      "line": 36
    },
    {
      "cells": [
        "6",
        "404",
        "404"
      ],
      "line": 37
    },
    {
      "cells": [
        "7",
        "404",
        "404"
      ],
      "line": 38
    },
    {
      "cells": [
        "10",
        "401",
        "401"
      ],
      "line": 39
    },
    {
      "cells": [
        "11",
        "401",
        "401"
      ],
      "line": 40
    },
    {
      "cells": [
        "12",
        "200",
        "200"
      ],
      "line": 41
    },
    {
      "cells": [
        "13",
        "200",
        "200"
      ],
      "line": 42
    },
    {
      "cells": [
        "14",
        "200",
        "200"
      ],
      "line": 43
    },
    {
      "cells": [
        "15",
        "200",
        "200"
      ],
      "line": 44
    },
    {
      "cells": [
        "16",
        "200",
        "200"
      ],
      "line": 45
    },
    {
      "cells": [
        "17",
        "200",
        "200"
      ],
      "line": 46
    },
    {
      "cells": [
        "18",
        "200",
        "200"
      ],
      "line": 47
    },
    {
      "cells": [
        "19",
        "200",
        "200"
      ],
      "line": 48
    },
    {
      "cells": [
        "20",
        "200",
        "200"
      ],
      "line": 49
    },
    {
      "cells": [
        "21",
        "404",
        "404"
      ],
      "line": 50
    },
    {
      "cells": [
        "22",
        "200",
        "200"
      ],
      "line": 51
    },
    {
      "cells": [
        "23",
        "200",
        "200"
      ],
      "line": 52
    },
    {
      "cells": [
        "24",
        "200",
        "200"
      ],
      "line": 53
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 69
    }
  ],
  "location": "SearchWeatherSteps.userSendsAPISearchWeatherRequestWithInformationCorresponding(String,DataTable)"
});
formatter.result({
  "duration": 110673600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 72
    }
  ],
  "location": "SearchWeatherSteps.userCheckResponseCodeResponseBodyWithInformationCorresponding(String,DataTable)"
});
formatter.result({
  "duration": 14459600,
  "status": "passed"
});
formatter.examples({
  "line": 111,
  "name": "",
  "description": "",
  "id": "test-api-search-weather-in-your-city;verify-response-code-call-api-with-2-params-q-and-appid;",
  "rows": [
    {
      "cells": [
        "KEY"
      ],
      "line": 112,
      "id": "test-api-search-weather-in-your-city;verify-response-code-call-api-with-2-params-q-and-appid;;1"
    },
    {
      "cells": [
        "21"
      ],
      "line": 113,
      "id": "test-api-search-weather-in-your-city;verify-response-code-call-api-with-2-params-q-and-appid;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 113,
  "name": "Verify Response Code call api with 2 params q and appid",
  "description": "",
  "id": "test-api-search-weather-in-your-city;verify-response-code-call-api-with-2-params-q-and-appid;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@NAB_REQ_2.1"
    },
    {
      "line": 1,
      "name": "@searchWeather"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user sends API SearchWeather request with information corresponding \"21\"",
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "KEY",
        "city_name",
        "api_key"
      ],
      "line": 7
    },
    {
      "cells": [
        "2",
        "city name not exists",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 8
    },
    {
      "cells": [
        "3",
        "",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 9
    },
    {
      "cells": [
        "4",
        "",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 10
    },
    {
      "cells": [
        "5",
        "BG",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 11
    },
    {
      "cells": [
        "6",
        "ha noi vn",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 12
    },
    {
      "cells": [
        "7",
        "ha noi, cn",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 13
    },
    {
      "cells": [
        "8",
        "Krungthepmahanakhon Amonrattanakosin Mahintharayutthaya Mahadilokphop Noppharatratchathaniburirom Udomratchaniwetmahasathan Amonphimanawatansathit Sakkathattiyawitsanukamprasit",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 14
    },
    {
      "cells": [
        "10",
        "hanoi",
        "appid not exists"
      ],
      "line": 15
    },
    {
      "cells": [
        "11",
        "hanoi",
        "57c1c22050f92b6d7a0a4c5716912bbe"
      ],
      "line": 16
    },
    {
      "cells": [
        "12",
        "London",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 17
    },
    {
      "cells": [
        "13",
        "Tokyo",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 18
    },
    {
      "cells": [
        "14",
        "Thành phố hồ chí minh",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 19
    },
    {
      "cells": [
        "15",
        "Thai nguyen",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 20
    },
    {
      "cells": [
        "16",
        "上海",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 21
    },
    {
      "cells": [
        "17",
        "Chengdu",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 22
    },
    {
      "cells": [
        "18",
        "東京都",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 23
    },
    {
      "cells": [
        "19",
        "Nagoya",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 24
    },
    {
      "cells": [
        "20",
        "Hà Nội, VN",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 25
    },
    {
      "cells": [
        "21",
        "Hà Nam,",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 26
    },
    {
      "cells": [
        "22",
        "Bắc Giang, VN",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 27
    },
    {
      "cells": [
        "23",
        "Cần     Thơ",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 28
    },
    {
      "cells": [
        "24",
        "Vĩnh Long, VN",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 29
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "user check response code, response body with information corresponding \"21\"",
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "KEY",
        "response_code",
        "cod"
      ],
      "line": 32
    },
    {
      "cells": [
        "2",
        "404",
        "404"
      ],
      "line": 33
    },
    {
      "cells": [
        "3",
        "400",
        "400"
      ],
      "line": 34
    },
    {
      "cells": [
        "4",
        "400",
        "400"
      ],
      "line": 35
    },
    {
      "cells": [
        "5",
        "404",
        "404"
      ],
      "line": 36
    },
    {
      "cells": [
        "6",
        "404",
        "404"
      ],
      "line": 37
    },
    {
      "cells": [
        "7",
        "404",
        "404"
      ],
      "line": 38
    },
    {
      "cells": [
        "10",
        "401",
        "401"
      ],
      "line": 39
    },
    {
      "cells": [
        "11",
        "401",
        "401"
      ],
      "line": 40
    },
    {
      "cells": [
        "12",
        "200",
        "200"
      ],
      "line": 41
    },
    {
      "cells": [
        "13",
        "200",
        "200"
      ],
      "line": 42
    },
    {
      "cells": [
        "14",
        "200",
        "200"
      ],
      "line": 43
    },
    {
      "cells": [
        "15",
        "200",
        "200"
      ],
      "line": 44
    },
    {
      "cells": [
        "16",
        "200",
        "200"
      ],
      "line": 45
    },
    {
      "cells": [
        "17",
        "200",
        "200"
      ],
      "line": 46
    },
    {
      "cells": [
        "18",
        "200",
        "200"
      ],
      "line": 47
    },
    {
      "cells": [
        "19",
        "200",
        "200"
      ],
      "line": 48
    },
    {
      "cells": [
        "20",
        "200",
        "200"
      ],
      "line": 49
    },
    {
      "cells": [
        "21",
        "404",
        "404"
      ],
      "line": 50
    },
    {
      "cells": [
        "22",
        "200",
        "200"
      ],
      "line": 51
    },
    {
      "cells": [
        "23",
        "200",
        "200"
      ],
      "line": 52
    },
    {
      "cells": [
        "24",
        "200",
        "200"
      ],
      "line": 53
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "21",
      "offset": 69
    }
  ],
  "location": "SearchWeatherSteps.userSendsAPISearchWeatherRequestWithInformationCorresponding(String,DataTable)"
});
formatter.result({
  "duration": 617442200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "21",
      "offset": 72
    }
  ],
  "location": "SearchWeatherSteps.userCheckResponseCodeResponseBodyWithInformationCorresponding(String,DataTable)"
});
formatter.result({
  "duration": 8170800,
  "status": "passed"
});
formatter.examples({
  "line": 114,
  "name": "",
  "description": "",
  "id": "test-api-search-weather-in-your-city;verify-response-code-call-api-with-2-params-q-and-appid;",
  "rows": [
    {
      "cells": [
        "KEY"
      ],
      "line": 115,
      "id": "test-api-search-weather-in-your-city;verify-response-code-call-api-with-2-params-q-and-appid;;1"
    },
    {
      "cells": [
        "22"
      ],
      "line": 116,
      "id": "test-api-search-weather-in-your-city;verify-response-code-call-api-with-2-params-q-and-appid;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 116,
  "name": "Verify Response Code call api with 2 params q and appid",
  "description": "",
  "id": "test-api-search-weather-in-your-city;verify-response-code-call-api-with-2-params-q-and-appid;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@NAB_REQ_2.1"
    },
    {
      "line": 1,
      "name": "@searchWeather"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user sends API SearchWeather request with information corresponding \"22\"",
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "KEY",
        "city_name",
        "api_key"
      ],
      "line": 7
    },
    {
      "cells": [
        "2",
        "city name not exists",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 8
    },
    {
      "cells": [
        "3",
        "",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 9
    },
    {
      "cells": [
        "4",
        "",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 10
    },
    {
      "cells": [
        "5",
        "BG",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 11
    },
    {
      "cells": [
        "6",
        "ha noi vn",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 12
    },
    {
      "cells": [
        "7",
        "ha noi, cn",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 13
    },
    {
      "cells": [
        "8",
        "Krungthepmahanakhon Amonrattanakosin Mahintharayutthaya Mahadilokphop Noppharatratchathaniburirom Udomratchaniwetmahasathan Amonphimanawatansathit Sakkathattiyawitsanukamprasit",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 14
    },
    {
      "cells": [
        "10",
        "hanoi",
        "appid not exists"
      ],
      "line": 15
    },
    {
      "cells": [
        "11",
        "hanoi",
        "57c1c22050f92b6d7a0a4c5716912bbe"
      ],
      "line": 16
    },
    {
      "cells": [
        "12",
        "London",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 17
    },
    {
      "cells": [
        "13",
        "Tokyo",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 18
    },
    {
      "cells": [
        "14",
        "Thành phố hồ chí minh",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 19
    },
    {
      "cells": [
        "15",
        "Thai nguyen",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 20
    },
    {
      "cells": [
        "16",
        "上海",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 21
    },
    {
      "cells": [
        "17",
        "Chengdu",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 22
    },
    {
      "cells": [
        "18",
        "東京都",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 23
    },
    {
      "cells": [
        "19",
        "Nagoya",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 24
    },
    {
      "cells": [
        "20",
        "Hà Nội, VN",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 25
    },
    {
      "cells": [
        "21",
        "Hà Nam,",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 26
    },
    {
      "cells": [
        "22",
        "Bắc Giang, VN",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 27
    },
    {
      "cells": [
        "23",
        "Cần     Thơ",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 28
    },
    {
      "cells": [
        "24",
        "Vĩnh Long, VN",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 29
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "user check response code, response body with information corresponding \"22\"",
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "KEY",
        "response_code",
        "cod"
      ],
      "line": 32
    },
    {
      "cells": [
        "2",
        "404",
        "404"
      ],
      "line": 33
    },
    {
      "cells": [
        "3",
        "400",
        "400"
      ],
      "line": 34
    },
    {
      "cells": [
        "4",
        "400",
        "400"
      ],
      "line": 35
    },
    {
      "cells": [
        "5",
        "404",
        "404"
      ],
      "line": 36
    },
    {
      "cells": [
        "6",
        "404",
        "404"
      ],
      "line": 37
    },
    {
      "cells": [
        "7",
        "404",
        "404"
      ],
      "line": 38
    },
    {
      "cells": [
        "10",
        "401",
        "401"
      ],
      "line": 39
    },
    {
      "cells": [
        "11",
        "401",
        "401"
      ],
      "line": 40
    },
    {
      "cells": [
        "12",
        "200",
        "200"
      ],
      "line": 41
    },
    {
      "cells": [
        "13",
        "200",
        "200"
      ],
      "line": 42
    },
    {
      "cells": [
        "14",
        "200",
        "200"
      ],
      "line": 43
    },
    {
      "cells": [
        "15",
        "200",
        "200"
      ],
      "line": 44
    },
    {
      "cells": [
        "16",
        "200",
        "200"
      ],
      "line": 45
    },
    {
      "cells": [
        "17",
        "200",
        "200"
      ],
      "line": 46
    },
    {
      "cells": [
        "18",
        "200",
        "200"
      ],
      "line": 47
    },
    {
      "cells": [
        "19",
        "200",
        "200"
      ],
      "line": 48
    },
    {
      "cells": [
        "20",
        "200",
        "200"
      ],
      "line": 49
    },
    {
      "cells": [
        "21",
        "404",
        "404"
      ],
      "line": 50
    },
    {
      "cells": [
        "22",
        "200",
        "200"
      ],
      "line": 51
    },
    {
      "cells": [
        "23",
        "200",
        "200"
      ],
      "line": 52
    },
    {
      "cells": [
        "24",
        "200",
        "200"
      ],
      "line": 53
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "22",
      "offset": 69
    }
  ],
  "location": "SearchWeatherSteps.userSendsAPISearchWeatherRequestWithInformationCorresponding(String,DataTable)"
});
formatter.result({
  "duration": 130359500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "22",
      "offset": 72
    }
  ],
  "location": "SearchWeatherSteps.userCheckResponseCodeResponseBodyWithInformationCorresponding(String,DataTable)"
});
formatter.result({
  "duration": 31830800,
  "status": "passed"
});
formatter.examples({
  "line": 117,
  "name": "",
  "description": "",
  "id": "test-api-search-weather-in-your-city;verify-response-code-call-api-with-2-params-q-and-appid;",
  "rows": [
    {
      "cells": [
        "KEY"
      ],
      "line": 118,
      "id": "test-api-search-weather-in-your-city;verify-response-code-call-api-with-2-params-q-and-appid;;1"
    },
    {
      "cells": [
        "23"
      ],
      "line": 119,
      "id": "test-api-search-weather-in-your-city;verify-response-code-call-api-with-2-params-q-and-appid;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 119,
  "name": "Verify Response Code call api with 2 params q and appid",
  "description": "",
  "id": "test-api-search-weather-in-your-city;verify-response-code-call-api-with-2-params-q-and-appid;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@NAB_REQ_2.1"
    },
    {
      "line": 1,
      "name": "@searchWeather"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user sends API SearchWeather request with information corresponding \"23\"",
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "KEY",
        "city_name",
        "api_key"
      ],
      "line": 7
    },
    {
      "cells": [
        "2",
        "city name not exists",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 8
    },
    {
      "cells": [
        "3",
        "",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 9
    },
    {
      "cells": [
        "4",
        "",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 10
    },
    {
      "cells": [
        "5",
        "BG",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 11
    },
    {
      "cells": [
        "6",
        "ha noi vn",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 12
    },
    {
      "cells": [
        "7",
        "ha noi, cn",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 13
    },
    {
      "cells": [
        "8",
        "Krungthepmahanakhon Amonrattanakosin Mahintharayutthaya Mahadilokphop Noppharatratchathaniburirom Udomratchaniwetmahasathan Amonphimanawatansathit Sakkathattiyawitsanukamprasit",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 14
    },
    {
      "cells": [
        "10",
        "hanoi",
        "appid not exists"
      ],
      "line": 15
    },
    {
      "cells": [
        "11",
        "hanoi",
        "57c1c22050f92b6d7a0a4c5716912bbe"
      ],
      "line": 16
    },
    {
      "cells": [
        "12",
        "London",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 17
    },
    {
      "cells": [
        "13",
        "Tokyo",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 18
    },
    {
      "cells": [
        "14",
        "Thành phố hồ chí minh",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 19
    },
    {
      "cells": [
        "15",
        "Thai nguyen",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 20
    },
    {
      "cells": [
        "16",
        "上海",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 21
    },
    {
      "cells": [
        "17",
        "Chengdu",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 22
    },
    {
      "cells": [
        "18",
        "東京都",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 23
    },
    {
      "cells": [
        "19",
        "Nagoya",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 24
    },
    {
      "cells": [
        "20",
        "Hà Nội, VN",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 25
    },
    {
      "cells": [
        "21",
        "Hà Nam,",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 26
    },
    {
      "cells": [
        "22",
        "Bắc Giang, VN",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 27
    },
    {
      "cells": [
        "23",
        "Cần     Thơ",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 28
    },
    {
      "cells": [
        "24",
        "Vĩnh Long, VN",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 29
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "user check response code, response body with information corresponding \"23\"",
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "KEY",
        "response_code",
        "cod"
      ],
      "line": 32
    },
    {
      "cells": [
        "2",
        "404",
        "404"
      ],
      "line": 33
    },
    {
      "cells": [
        "3",
        "400",
        "400"
      ],
      "line": 34
    },
    {
      "cells": [
        "4",
        "400",
        "400"
      ],
      "line": 35
    },
    {
      "cells": [
        "5",
        "404",
        "404"
      ],
      "line": 36
    },
    {
      "cells": [
        "6",
        "404",
        "404"
      ],
      "line": 37
    },
    {
      "cells": [
        "7",
        "404",
        "404"
      ],
      "line": 38
    },
    {
      "cells": [
        "10",
        "401",
        "401"
      ],
      "line": 39
    },
    {
      "cells": [
        "11",
        "401",
        "401"
      ],
      "line": 40
    },
    {
      "cells": [
        "12",
        "200",
        "200"
      ],
      "line": 41
    },
    {
      "cells": [
        "13",
        "200",
        "200"
      ],
      "line": 42
    },
    {
      "cells": [
        "14",
        "200",
        "200"
      ],
      "line": 43
    },
    {
      "cells": [
        "15",
        "200",
        "200"
      ],
      "line": 44
    },
    {
      "cells": [
        "16",
        "200",
        "200"
      ],
      "line": 45
    },
    {
      "cells": [
        "17",
        "200",
        "200"
      ],
      "line": 46
    },
    {
      "cells": [
        "18",
        "200",
        "200"
      ],
      "line": 47
    },
    {
      "cells": [
        "19",
        "200",
        "200"
      ],
      "line": 48
    },
    {
      "cells": [
        "20",
        "200",
        "200"
      ],
      "line": 49
    },
    {
      "cells": [
        "21",
        "404",
        "404"
      ],
      "line": 50
    },
    {
      "cells": [
        "22",
        "200",
        "200"
      ],
      "line": 51
    },
    {
      "cells": [
        "23",
        "200",
        "200"
      ],
      "line": 52
    },
    {
      "cells": [
        "24",
        "200",
        "200"
      ],
      "line": 53
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "23",
      "offset": 69
    }
  ],
  "location": "SearchWeatherSteps.userSendsAPISearchWeatherRequestWithInformationCorresponding(String,DataTable)"
});
formatter.result({
  "duration": 483548900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "23",
      "offset": 72
    }
  ],
  "location": "SearchWeatherSteps.userCheckResponseCodeResponseBodyWithInformationCorresponding(String,DataTable)"
});
formatter.result({
  "duration": 2004700,
  "error_message": "java.lang.AssertionError: Status Code is Valid\r\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:26)\r\n\tat com.nab.defs.SearchWeatherDefs.validateResponseCodeAndResponseBody(SearchWeatherDefs.java:44)\r\n\tat steps.SearchWeatherSteps.userCheckResponseCodeResponseBodyWithInformationCorresponding(SearchWeatherSteps.java:27)\r\n\tat ✽.Then user check response code, response body with information corresponding \"23\"(SearchWeather.feature:31)\r\n",
  "status": "failed"
});
formatter.examples({
  "line": 120,
  "name": "",
  "description": "",
  "id": "test-api-search-weather-in-your-city;verify-response-code-call-api-with-2-params-q-and-appid;",
  "rows": [
    {
      "cells": [
        "KEY"
      ],
      "line": 121,
      "id": "test-api-search-weather-in-your-city;verify-response-code-call-api-with-2-params-q-and-appid;;1"
    },
    {
      "cells": [
        "24"
      ],
      "line": 122,
      "id": "test-api-search-weather-in-your-city;verify-response-code-call-api-with-2-params-q-and-appid;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 122,
  "name": "Verify Response Code call api with 2 params q and appid",
  "description": "",
  "id": "test-api-search-weather-in-your-city;verify-response-code-call-api-with-2-params-q-and-appid;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@NAB_REQ_2.1"
    },
    {
      "line": 1,
      "name": "@searchWeather"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user sends API SearchWeather request with information corresponding \"24\"",
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "KEY",
        "city_name",
        "api_key"
      ],
      "line": 7
    },
    {
      "cells": [
        "2",
        "city name not exists",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 8
    },
    {
      "cells": [
        "3",
        "",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 9
    },
    {
      "cells": [
        "4",
        "",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 10
    },
    {
      "cells": [
        "5",
        "BG",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 11
    },
    {
      "cells": [
        "6",
        "ha noi vn",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 12
    },
    {
      "cells": [
        "7",
        "ha noi, cn",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 13
    },
    {
      "cells": [
        "8",
        "Krungthepmahanakhon Amonrattanakosin Mahintharayutthaya Mahadilokphop Noppharatratchathaniburirom Udomratchaniwetmahasathan Amonphimanawatansathit Sakkathattiyawitsanukamprasit",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 14
    },
    {
      "cells": [
        "10",
        "hanoi",
        "appid not exists"
      ],
      "line": 15
    },
    {
      "cells": [
        "11",
        "hanoi",
        "57c1c22050f92b6d7a0a4c5716912bbe"
      ],
      "line": 16
    },
    {
      "cells": [
        "12",
        "London",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 17
    },
    {
      "cells": [
        "13",
        "Tokyo",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 18
    },
    {
      "cells": [
        "14",
        "Thành phố hồ chí minh",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 19
    },
    {
      "cells": [
        "15",
        "Thai nguyen",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 20
    },
    {
      "cells": [
        "16",
        "上海",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 21
    },
    {
      "cells": [
        "17",
        "Chengdu",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 22
    },
    {
      "cells": [
        "18",
        "東京都",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 23
    },
    {
      "cells": [
        "19",
        "Nagoya",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 24
    },
    {
      "cells": [
        "20",
        "Hà Nội, VN",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 25
    },
    {
      "cells": [
        "21",
        "Hà Nam,",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 26
    },
    {
      "cells": [
        "22",
        "Bắc Giang, VN",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 27
    },
    {
      "cells": [
        "23",
        "Cần     Thơ",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 28
    },
    {
      "cells": [
        "24",
        "Vĩnh Long, VN",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 29
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "user check response code, response body with information corresponding \"24\"",
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "KEY",
        "response_code",
        "cod"
      ],
      "line": 32
    },
    {
      "cells": [
        "2",
        "404",
        "404"
      ],
      "line": 33
    },
    {
      "cells": [
        "3",
        "400",
        "400"
      ],
      "line": 34
    },
    {
      "cells": [
        "4",
        "400",
        "400"
      ],
      "line": 35
    },
    {
      "cells": [
        "5",
        "404",
        "404"
      ],
      "line": 36
    },
    {
      "cells": [
        "6",
        "404",
        "404"
      ],
      "line": 37
    },
    {
      "cells": [
        "7",
        "404",
        "404"
      ],
      "line": 38
    },
    {
      "cells": [
        "10",
        "401",
        "401"
      ],
      "line": 39
    },
    {
      "cells": [
        "11",
        "401",
        "401"
      ],
      "line": 40
    },
    {
      "cells": [
        "12",
        "200",
        "200"
      ],
      "line": 41
    },
    {
      "cells": [
        "13",
        "200",
        "200"
      ],
      "line": 42
    },
    {
      "cells": [
        "14",
        "200",
        "200"
      ],
      "line": 43
    },
    {
      "cells": [
        "15",
        "200",
        "200"
      ],
      "line": 44
    },
    {
      "cells": [
        "16",
        "200",
        "200"
      ],
      "line": 45
    },
    {
      "cells": [
        "17",
        "200",
        "200"
      ],
      "line": 46
    },
    {
      "cells": [
        "18",
        "200",
        "200"
      ],
      "line": 47
    },
    {
      "cells": [
        "19",
        "200",
        "200"
      ],
      "line": 48
    },
    {
      "cells": [
        "20",
        "200",
        "200"
      ],
      "line": 49
    },
    {
      "cells": [
        "21",
        "404",
        "404"
      ],
      "line": 50
    },
    {
      "cells": [
        "22",
        "200",
        "200"
      ],
      "line": 51
    },
    {
      "cells": [
        "23",
        "200",
        "200"
      ],
      "line": 52
    },
    {
      "cells": [
        "24",
        "200",
        "200"
      ],
      "line": 53
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "24",
      "offset": 69
    }
  ],
  "location": "SearchWeatherSteps.userSendsAPISearchWeatherRequestWithInformationCorresponding(String,DataTable)"
});
formatter.result({
  "duration": 112029900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "24",
      "offset": 72
    }
  ],
  "location": "SearchWeatherSteps.userCheckResponseCodeResponseBodyWithInformationCorresponding(String,DataTable)"
});
formatter.result({
  "duration": 12279500,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 126,
  "name": "Verify Message Error when response is error",
  "description": "",
  "id": "test-api-search-weather-in-your-city;verify-message-error-when-response-is-error",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 125,
      "name": "@NAB_REQ_2.2"
    }
  ]
});
formatter.step({
  "line": 127,
  "name": "user sends API SearchWeather request with information corresponding \"\u003cKEY\u003e\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "city_name",
        "api_key"
      ],
      "line": 128
    },
    {
      "cells": [
        "2",
        "city name not exists",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 129
    },
    {
      "cells": [
        "3",
        "",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 130
    },
    {
      "cells": [
        "4",
        "",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 131
    },
    {
      "cells": [
        "5",
        "BG",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 132
    },
    {
      "cells": [
        "6",
        "ha noi vn",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 133
    },
    {
      "cells": [
        "7",
        "ha noi, cn",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 134
    },
    {
      "cells": [
        "8",
        "Krungthepmahanakhon Amonrattanakosin Mahintharayutthaya Mahadilokphop Noppharatratchathaniburirom Udomratchaniwetmahasathan Amonphimanawatansathit Sakkathattiyawitsanukamprasit",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 135
    },
    {
      "cells": [
        "10",
        "hanoi",
        "appid not exists"
      ],
      "line": 136
    },
    {
      "cells": [
        "11",
        "hanoi",
        "57c1c22050f92b6d7a0a4c5716912bbe"
      ],
      "line": 137
    },
    {
      "cells": [
        "21",
        "Hà Nam,",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 138
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 140,
  "name": "user check message in response body when response fail with information corresponding \"\u003cKEY\u003e\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "response_code",
        "cod",
        "message"
      ],
      "line": 141
    },
    {
      "cells": [
        "2",
        "404",
        "404",
        "city not found"
      ],
      "line": 142
    },
    {
      "cells": [
        "3",
        "400",
        "400",
        "Nothing to geocode"
      ],
      "line": 143
    },
    {
      "cells": [
        "4",
        "400",
        "400",
        "Nothing to geocode"
      ],
      "line": 144
    },
    {
      "cells": [
        "5",
        "404",
        "404",
        "city not found"
      ],
      "line": 145
    },
    {
      "cells": [
        "6",
        "404",
        "404",
        "city not found"
      ],
      "line": 146
    },
    {
      "cells": [
        "7",
        "404",
        "404",
        "city not found"
      ],
      "line": 147
    },
    {
      "cells": [
        "8",
        "404",
        "404",
        "city not found"
      ],
      "line": 148
    },
    {
      "cells": [
        "10",
        "401",
        "401",
        "Invalid API key. Please see http://openweathermap.org/faq#error401 for more info."
      ],
      "line": 149
    },
    {
      "cells": [
        "11",
        "401",
        "401",
        "Invalid API key. Please see http://openweathermap.org/faq#error401 for more info."
      ],
      "line": 150
    },
    {
      "cells": [
        "21",
        "404",
        "404",
        "city not found"
      ],
      "line": 151
    }
  ],
  "keyword": "Then "
});
formatter.examples({
  "line": 152,
  "name": "",
  "description": "",
  "id": "test-api-search-weather-in-your-city;verify-message-error-when-response-is-error;",
  "rows": [
    {
      "cells": [
        "KEY"
      ],
      "line": 153,
      "id": "test-api-search-weather-in-your-city;verify-message-error-when-response-is-error;;1"
    },
    {
      "cells": [
        "2"
      ],
      "line": 154,
      "id": "test-api-search-weather-in-your-city;verify-message-error-when-response-is-error;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 154,
  "name": "Verify Message Error when response is error",
  "description": "",
  "id": "test-api-search-weather-in-your-city;verify-message-error-when-response-is-error;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 125,
      "name": "@NAB_REQ_2.2"
    },
    {
      "line": 1,
      "name": "@searchWeather"
    }
  ]
});
formatter.step({
  "line": 127,
  "name": "user sends API SearchWeather request with information corresponding \"2\"",
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "KEY",
        "city_name",
        "api_key"
      ],
      "line": 128
    },
    {
      "cells": [
        "2",
        "city name not exists",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 129
    },
    {
      "cells": [
        "3",
        "",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 130
    },
    {
      "cells": [
        "4",
        "",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 131
    },
    {
      "cells": [
        "5",
        "BG",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 132
    },
    {
      "cells": [
        "6",
        "ha noi vn",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 133
    },
    {
      "cells": [
        "7",
        "ha noi, cn",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 134
    },
    {
      "cells": [
        "8",
        "Krungthepmahanakhon Amonrattanakosin Mahintharayutthaya Mahadilokphop Noppharatratchathaniburirom Udomratchaniwetmahasathan Amonphimanawatansathit Sakkathattiyawitsanukamprasit",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 135
    },
    {
      "cells": [
        "10",
        "hanoi",
        "appid not exists"
      ],
      "line": 136
    },
    {
      "cells": [
        "11",
        "hanoi",
        "57c1c22050f92b6d7a0a4c5716912bbe"
      ],
      "line": 137
    },
    {
      "cells": [
        "21",
        "Hà Nam,",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 138
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 140,
  "name": "user check message in response body when response fail with information corresponding \"2\"",
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "KEY",
        "response_code",
        "cod",
        "message"
      ],
      "line": 141
    },
    {
      "cells": [
        "2",
        "404",
        "404",
        "city not found"
      ],
      "line": 142
    },
    {
      "cells": [
        "3",
        "400",
        "400",
        "Nothing to geocode"
      ],
      "line": 143
    },
    {
      "cells": [
        "4",
        "400",
        "400",
        "Nothing to geocode"
      ],
      "line": 144
    },
    {
      "cells": [
        "5",
        "404",
        "404",
        "city not found"
      ],
      "line": 145
    },
    {
      "cells": [
        "6",
        "404",
        "404",
        "city not found"
      ],
      "line": 146
    },
    {
      "cells": [
        "7",
        "404",
        "404",
        "city not found"
      ],
      "line": 147
    },
    {
      "cells": [
        "8",
        "404",
        "404",
        "city not found"
      ],
      "line": 148
    },
    {
      "cells": [
        "10",
        "401",
        "401",
        "Invalid API key. Please see http://openweathermap.org/faq#error401 for more info."
      ],
      "line": 149
    },
    {
      "cells": [
        "11",
        "401",
        "401",
        "Invalid API key. Please see http://openweathermap.org/faq#error401 for more info."
      ],
      "line": 150
    },
    {
      "cells": [
        "21",
        "404",
        "404",
        "city not found"
      ],
      "line": 151
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 69
    }
  ],
  "location": "SearchWeatherSteps.userSendsAPISearchWeatherRequestWithInformationCorresponding(String,DataTable)"
});
formatter.result({
  "duration": 92553500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 87
    }
  ],
  "location": "SearchWeatherSteps.userCheckMessageInResponseBodyWhenResponseFailWithInformationCorresponding(String,DataTable)"
});
formatter.result({
  "duration": 23149100,
  "status": "passed"
});
formatter.examples({
  "line": 155,
  "name": "",
  "description": "",
  "id": "test-api-search-weather-in-your-city;verify-message-error-when-response-is-error;",
  "rows": [
    {
      "cells": [
        "KEY"
      ],
      "line": 156,
      "id": "test-api-search-weather-in-your-city;verify-message-error-when-response-is-error;;1"
    },
    {
      "cells": [
        "3"
      ],
      "line": 157,
      "id": "test-api-search-weather-in-your-city;verify-message-error-when-response-is-error;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 157,
  "name": "Verify Message Error when response is error",
  "description": "",
  "id": "test-api-search-weather-in-your-city;verify-message-error-when-response-is-error;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 125,
      "name": "@NAB_REQ_2.2"
    },
    {
      "line": 1,
      "name": "@searchWeather"
    }
  ]
});
formatter.step({
  "line": 127,
  "name": "user sends API SearchWeather request with information corresponding \"3\"",
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "KEY",
        "city_name",
        "api_key"
      ],
      "line": 128
    },
    {
      "cells": [
        "2",
        "city name not exists",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 129
    },
    {
      "cells": [
        "3",
        "",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 130
    },
    {
      "cells": [
        "4",
        "",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 131
    },
    {
      "cells": [
        "5",
        "BG",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 132
    },
    {
      "cells": [
        "6",
        "ha noi vn",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 133
    },
    {
      "cells": [
        "7",
        "ha noi, cn",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 134
    },
    {
      "cells": [
        "8",
        "Krungthepmahanakhon Amonrattanakosin Mahintharayutthaya Mahadilokphop Noppharatratchathaniburirom Udomratchaniwetmahasathan Amonphimanawatansathit Sakkathattiyawitsanukamprasit",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 135
    },
    {
      "cells": [
        "10",
        "hanoi",
        "appid not exists"
      ],
      "line": 136
    },
    {
      "cells": [
        "11",
        "hanoi",
        "57c1c22050f92b6d7a0a4c5716912bbe"
      ],
      "line": 137
    },
    {
      "cells": [
        "21",
        "Hà Nam,",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 138
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 140,
  "name": "user check message in response body when response fail with information corresponding \"3\"",
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "KEY",
        "response_code",
        "cod",
        "message"
      ],
      "line": 141
    },
    {
      "cells": [
        "2",
        "404",
        "404",
        "city not found"
      ],
      "line": 142
    },
    {
      "cells": [
        "3",
        "400",
        "400",
        "Nothing to geocode"
      ],
      "line": 143
    },
    {
      "cells": [
        "4",
        "400",
        "400",
        "Nothing to geocode"
      ],
      "line": 144
    },
    {
      "cells": [
        "5",
        "404",
        "404",
        "city not found"
      ],
      "line": 145
    },
    {
      "cells": [
        "6",
        "404",
        "404",
        "city not found"
      ],
      "line": 146
    },
    {
      "cells": [
        "7",
        "404",
        "404",
        "city not found"
      ],
      "line": 147
    },
    {
      "cells": [
        "8",
        "404",
        "404",
        "city not found"
      ],
      "line": 148
    },
    {
      "cells": [
        "10",
        "401",
        "401",
        "Invalid API key. Please see http://openweathermap.org/faq#error401 for more info."
      ],
      "line": 149
    },
    {
      "cells": [
        "11",
        "401",
        "401",
        "Invalid API key. Please see http://openweathermap.org/faq#error401 for more info."
      ],
      "line": 150
    },
    {
      "cells": [
        "21",
        "404",
        "404",
        "city not found"
      ],
      "line": 151
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 69
    }
  ],
  "location": "SearchWeatherSteps.userSendsAPISearchWeatherRequestWithInformationCorresponding(String,DataTable)"
});
formatter.result({
  "duration": 109074800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 87
    }
  ],
  "location": "SearchWeatherSteps.userCheckMessageInResponseBodyWhenResponseFailWithInformationCorresponding(String,DataTable)"
});
formatter.result({
  "duration": 15786600,
  "status": "passed"
});
formatter.examples({
  "line": 158,
  "name": "",
  "description": "",
  "id": "test-api-search-weather-in-your-city;verify-message-error-when-response-is-error;",
  "rows": [
    {
      "cells": [
        "KEY"
      ],
      "line": 159,
      "id": "test-api-search-weather-in-your-city;verify-message-error-when-response-is-error;;1"
    },
    {
      "cells": [
        "4"
      ],
      "line": 160,
      "id": "test-api-search-weather-in-your-city;verify-message-error-when-response-is-error;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 160,
  "name": "Verify Message Error when response is error",
  "description": "",
  "id": "test-api-search-weather-in-your-city;verify-message-error-when-response-is-error;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 125,
      "name": "@NAB_REQ_2.2"
    },
    {
      "line": 1,
      "name": "@searchWeather"
    }
  ]
});
formatter.step({
  "line": 127,
  "name": "user sends API SearchWeather request with information corresponding \"4\"",
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "KEY",
        "city_name",
        "api_key"
      ],
      "line": 128
    },
    {
      "cells": [
        "2",
        "city name not exists",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 129
    },
    {
      "cells": [
        "3",
        "",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 130
    },
    {
      "cells": [
        "4",
        "",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 131
    },
    {
      "cells": [
        "5",
        "BG",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 132
    },
    {
      "cells": [
        "6",
        "ha noi vn",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 133
    },
    {
      "cells": [
        "7",
        "ha noi, cn",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 134
    },
    {
      "cells": [
        "8",
        "Krungthepmahanakhon Amonrattanakosin Mahintharayutthaya Mahadilokphop Noppharatratchathaniburirom Udomratchaniwetmahasathan Amonphimanawatansathit Sakkathattiyawitsanukamprasit",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 135
    },
    {
      "cells": [
        "10",
        "hanoi",
        "appid not exists"
      ],
      "line": 136
    },
    {
      "cells": [
        "11",
        "hanoi",
        "57c1c22050f92b6d7a0a4c5716912bbe"
      ],
      "line": 137
    },
    {
      "cells": [
        "21",
        "Hà Nam,",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 138
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 140,
  "name": "user check message in response body when response fail with information corresponding \"4\"",
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "KEY",
        "response_code",
        "cod",
        "message"
      ],
      "line": 141
    },
    {
      "cells": [
        "2",
        "404",
        "404",
        "city not found"
      ],
      "line": 142
    },
    {
      "cells": [
        "3",
        "400",
        "400",
        "Nothing to geocode"
      ],
      "line": 143
    },
    {
      "cells": [
        "4",
        "400",
        "400",
        "Nothing to geocode"
      ],
      "line": 144
    },
    {
      "cells": [
        "5",
        "404",
        "404",
        "city not found"
      ],
      "line": 145
    },
    {
      "cells": [
        "6",
        "404",
        "404",
        "city not found"
      ],
      "line": 146
    },
    {
      "cells": [
        "7",
        "404",
        "404",
        "city not found"
      ],
      "line": 147
    },
    {
      "cells": [
        "8",
        "404",
        "404",
        "city not found"
      ],
      "line": 148
    },
    {
      "cells": [
        "10",
        "401",
        "401",
        "Invalid API key. Please see http://openweathermap.org/faq#error401 for more info."
      ],
      "line": 149
    },
    {
      "cells": [
        "11",
        "401",
        "401",
        "Invalid API key. Please see http://openweathermap.org/faq#error401 for more info."
      ],
      "line": 150
    },
    {
      "cells": [
        "21",
        "404",
        "404",
        "city not found"
      ],
      "line": 151
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 69
    }
  ],
  "location": "SearchWeatherSteps.userSendsAPISearchWeatherRequestWithInformationCorresponding(String,DataTable)"
});
formatter.result({
  "duration": 263095800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 87
    }
  ],
  "location": "SearchWeatherSteps.userCheckMessageInResponseBodyWhenResponseFailWithInformationCorresponding(String,DataTable)"
});
formatter.result({
  "duration": 25204000,
  "status": "passed"
});
formatter.examples({
  "line": 161,
  "name": "",
  "description": "",
  "id": "test-api-search-weather-in-your-city;verify-message-error-when-response-is-error;",
  "rows": [
    {
      "cells": [
        "KEY"
      ],
      "line": 162,
      "id": "test-api-search-weather-in-your-city;verify-message-error-when-response-is-error;;1"
    },
    {
      "cells": [
        "5"
      ],
      "line": 163,
      "id": "test-api-search-weather-in-your-city;verify-message-error-when-response-is-error;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 163,
  "name": "Verify Message Error when response is error",
  "description": "",
  "id": "test-api-search-weather-in-your-city;verify-message-error-when-response-is-error;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 125,
      "name": "@NAB_REQ_2.2"
    },
    {
      "line": 1,
      "name": "@searchWeather"
    }
  ]
});
formatter.step({
  "line": 127,
  "name": "user sends API SearchWeather request with information corresponding \"5\"",
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "KEY",
        "city_name",
        "api_key"
      ],
      "line": 128
    },
    {
      "cells": [
        "2",
        "city name not exists",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 129
    },
    {
      "cells": [
        "3",
        "",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 130
    },
    {
      "cells": [
        "4",
        "",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 131
    },
    {
      "cells": [
        "5",
        "BG",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 132
    },
    {
      "cells": [
        "6",
        "ha noi vn",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 133
    },
    {
      "cells": [
        "7",
        "ha noi, cn",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 134
    },
    {
      "cells": [
        "8",
        "Krungthepmahanakhon Amonrattanakosin Mahintharayutthaya Mahadilokphop Noppharatratchathaniburirom Udomratchaniwetmahasathan Amonphimanawatansathit Sakkathattiyawitsanukamprasit",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 135
    },
    {
      "cells": [
        "10",
        "hanoi",
        "appid not exists"
      ],
      "line": 136
    },
    {
      "cells": [
        "11",
        "hanoi",
        "57c1c22050f92b6d7a0a4c5716912bbe"
      ],
      "line": 137
    },
    {
      "cells": [
        "21",
        "Hà Nam,",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 138
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 140,
  "name": "user check message in response body when response fail with information corresponding \"5\"",
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "KEY",
        "response_code",
        "cod",
        "message"
      ],
      "line": 141
    },
    {
      "cells": [
        "2",
        "404",
        "404",
        "city not found"
      ],
      "line": 142
    },
    {
      "cells": [
        "3",
        "400",
        "400",
        "Nothing to geocode"
      ],
      "line": 143
    },
    {
      "cells": [
        "4",
        "400",
        "400",
        "Nothing to geocode"
      ],
      "line": 144
    },
    {
      "cells": [
        "5",
        "404",
        "404",
        "city not found"
      ],
      "line": 145
    },
    {
      "cells": [
        "6",
        "404",
        "404",
        "city not found"
      ],
      "line": 146
    },
    {
      "cells": [
        "7",
        "404",
        "404",
        "city not found"
      ],
      "line": 147
    },
    {
      "cells": [
        "8",
        "404",
        "404",
        "city not found"
      ],
      "line": 148
    },
    {
      "cells": [
        "10",
        "401",
        "401",
        "Invalid API key. Please see http://openweathermap.org/faq#error401 for more info."
      ],
      "line": 149
    },
    {
      "cells": [
        "11",
        "401",
        "401",
        "Invalid API key. Please see http://openweathermap.org/faq#error401 for more info."
      ],
      "line": 150
    },
    {
      "cells": [
        "21",
        "404",
        "404",
        "city not found"
      ],
      "line": 151
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 69
    }
  ],
  "location": "SearchWeatherSteps.userSendsAPISearchWeatherRequestWithInformationCorresponding(String,DataTable)"
});
formatter.result({
  "duration": 116257400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 87
    }
  ],
  "location": "SearchWeatherSteps.userCheckMessageInResponseBodyWhenResponseFailWithInformationCorresponding(String,DataTable)"
});
formatter.result({
  "duration": 21851400,
  "status": "passed"
});
formatter.examples({
  "line": 164,
  "name": "",
  "description": "",
  "id": "test-api-search-weather-in-your-city;verify-message-error-when-response-is-error;",
  "rows": [
    {
      "cells": [
        "KEY"
      ],
      "line": 165,
      "id": "test-api-search-weather-in-your-city;verify-message-error-when-response-is-error;;1"
    },
    {
      "cells": [
        "6"
      ],
      "line": 166,
      "id": "test-api-search-weather-in-your-city;verify-message-error-when-response-is-error;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 166,
  "name": "Verify Message Error when response is error",
  "description": "",
  "id": "test-api-search-weather-in-your-city;verify-message-error-when-response-is-error;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 125,
      "name": "@NAB_REQ_2.2"
    },
    {
      "line": 1,
      "name": "@searchWeather"
    }
  ]
});
formatter.step({
  "line": 127,
  "name": "user sends API SearchWeather request with information corresponding \"6\"",
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "KEY",
        "city_name",
        "api_key"
      ],
      "line": 128
    },
    {
      "cells": [
        "2",
        "city name not exists",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 129
    },
    {
      "cells": [
        "3",
        "",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 130
    },
    {
      "cells": [
        "4",
        "",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 131
    },
    {
      "cells": [
        "5",
        "BG",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 132
    },
    {
      "cells": [
        "6",
        "ha noi vn",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 133
    },
    {
      "cells": [
        "7",
        "ha noi, cn",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 134
    },
    {
      "cells": [
        "8",
        "Krungthepmahanakhon Amonrattanakosin Mahintharayutthaya Mahadilokphop Noppharatratchathaniburirom Udomratchaniwetmahasathan Amonphimanawatansathit Sakkathattiyawitsanukamprasit",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 135
    },
    {
      "cells": [
        "10",
        "hanoi",
        "appid not exists"
      ],
      "line": 136
    },
    {
      "cells": [
        "11",
        "hanoi",
        "57c1c22050f92b6d7a0a4c5716912bbe"
      ],
      "line": 137
    },
    {
      "cells": [
        "21",
        "Hà Nam,",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 138
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 140,
  "name": "user check message in response body when response fail with information corresponding \"6\"",
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "KEY",
        "response_code",
        "cod",
        "message"
      ],
      "line": 141
    },
    {
      "cells": [
        "2",
        "404",
        "404",
        "city not found"
      ],
      "line": 142
    },
    {
      "cells": [
        "3",
        "400",
        "400",
        "Nothing to geocode"
      ],
      "line": 143
    },
    {
      "cells": [
        "4",
        "400",
        "400",
        "Nothing to geocode"
      ],
      "line": 144
    },
    {
      "cells": [
        "5",
        "404",
        "404",
        "city not found"
      ],
      "line": 145
    },
    {
      "cells": [
        "6",
        "404",
        "404",
        "city not found"
      ],
      "line": 146
    },
    {
      "cells": [
        "7",
        "404",
        "404",
        "city not found"
      ],
      "line": 147
    },
    {
      "cells": [
        "8",
        "404",
        "404",
        "city not found"
      ],
      "line": 148
    },
    {
      "cells": [
        "10",
        "401",
        "401",
        "Invalid API key. Please see http://openweathermap.org/faq#error401 for more info."
      ],
      "line": 149
    },
    {
      "cells": [
        "11",
        "401",
        "401",
        "Invalid API key. Please see http://openweathermap.org/faq#error401 for more info."
      ],
      "line": 150
    },
    {
      "cells": [
        "21",
        "404",
        "404",
        "city not found"
      ],
      "line": 151
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "6",
      "offset": 69
    }
  ],
  "location": "SearchWeatherSteps.userSendsAPISearchWeatherRequestWithInformationCorresponding(String,DataTable)"
});
formatter.result({
  "duration": 95565300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "6",
      "offset": 87
    }
  ],
  "location": "SearchWeatherSteps.userCheckMessageInResponseBodyWhenResponseFailWithInformationCorresponding(String,DataTable)"
});
formatter.result({
  "duration": 22466100,
  "status": "passed"
});
formatter.examples({
  "line": 167,
  "name": "",
  "description": "",
  "id": "test-api-search-weather-in-your-city;verify-message-error-when-response-is-error;",
  "rows": [
    {
      "cells": [
        "KEY"
      ],
      "line": 168,
      "id": "test-api-search-weather-in-your-city;verify-message-error-when-response-is-error;;1"
    },
    {
      "cells": [
        "7"
      ],
      "line": 169,
      "id": "test-api-search-weather-in-your-city;verify-message-error-when-response-is-error;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 169,
  "name": "Verify Message Error when response is error",
  "description": "",
  "id": "test-api-search-weather-in-your-city;verify-message-error-when-response-is-error;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 125,
      "name": "@NAB_REQ_2.2"
    },
    {
      "line": 1,
      "name": "@searchWeather"
    }
  ]
});
formatter.step({
  "line": 127,
  "name": "user sends API SearchWeather request with information corresponding \"7\"",
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "KEY",
        "city_name",
        "api_key"
      ],
      "line": 128
    },
    {
      "cells": [
        "2",
        "city name not exists",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 129
    },
    {
      "cells": [
        "3",
        "",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 130
    },
    {
      "cells": [
        "4",
        "",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 131
    },
    {
      "cells": [
        "5",
        "BG",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 132
    },
    {
      "cells": [
        "6",
        "ha noi vn",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 133
    },
    {
      "cells": [
        "7",
        "ha noi, cn",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 134
    },
    {
      "cells": [
        "8",
        "Krungthepmahanakhon Amonrattanakosin Mahintharayutthaya Mahadilokphop Noppharatratchathaniburirom Udomratchaniwetmahasathan Amonphimanawatansathit Sakkathattiyawitsanukamprasit",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 135
    },
    {
      "cells": [
        "10",
        "hanoi",
        "appid not exists"
      ],
      "line": 136
    },
    {
      "cells": [
        "11",
        "hanoi",
        "57c1c22050f92b6d7a0a4c5716912bbe"
      ],
      "line": 137
    },
    {
      "cells": [
        "21",
        "Hà Nam,",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 138
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 140,
  "name": "user check message in response body when response fail with information corresponding \"7\"",
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "KEY",
        "response_code",
        "cod",
        "message"
      ],
      "line": 141
    },
    {
      "cells": [
        "2",
        "404",
        "404",
        "city not found"
      ],
      "line": 142
    },
    {
      "cells": [
        "3",
        "400",
        "400",
        "Nothing to geocode"
      ],
      "line": 143
    },
    {
      "cells": [
        "4",
        "400",
        "400",
        "Nothing to geocode"
      ],
      "line": 144
    },
    {
      "cells": [
        "5",
        "404",
        "404",
        "city not found"
      ],
      "line": 145
    },
    {
      "cells": [
        "6",
        "404",
        "404",
        "city not found"
      ],
      "line": 146
    },
    {
      "cells": [
        "7",
        "404",
        "404",
        "city not found"
      ],
      "line": 147
    },
    {
      "cells": [
        "8",
        "404",
        "404",
        "city not found"
      ],
      "line": 148
    },
    {
      "cells": [
        "10",
        "401",
        "401",
        "Invalid API key. Please see http://openweathermap.org/faq#error401 for more info."
      ],
      "line": 149
    },
    {
      "cells": [
        "11",
        "401",
        "401",
        "Invalid API key. Please see http://openweathermap.org/faq#error401 for more info."
      ],
      "line": 150
    },
    {
      "cells": [
        "21",
        "404",
        "404",
        "city not found"
      ],
      "line": 151
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "7",
      "offset": 69
    }
  ],
  "location": "SearchWeatherSteps.userSendsAPISearchWeatherRequestWithInformationCorresponding(String,DataTable)"
});
formatter.result({
  "duration": 105052700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "7",
      "offset": 87
    }
  ],
  "location": "SearchWeatherSteps.userCheckMessageInResponseBodyWhenResponseFailWithInformationCorresponding(String,DataTable)"
});
formatter.result({
  "duration": 24282600,
  "status": "passed"
});
formatter.examples({
  "line": 170,
  "name": "",
  "description": "",
  "id": "test-api-search-weather-in-your-city;verify-message-error-when-response-is-error;",
  "rows": [
    {
      "cells": [
        "KEY"
      ],
      "line": 171,
      "id": "test-api-search-weather-in-your-city;verify-message-error-when-response-is-error;;1"
    },
    {
      "cells": [
        "8"
      ],
      "line": 172,
      "id": "test-api-search-weather-in-your-city;verify-message-error-when-response-is-error;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 172,
  "name": "Verify Message Error when response is error",
  "description": "",
  "id": "test-api-search-weather-in-your-city;verify-message-error-when-response-is-error;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 125,
      "name": "@NAB_REQ_2.2"
    },
    {
      "line": 1,
      "name": "@searchWeather"
    }
  ]
});
formatter.step({
  "line": 127,
  "name": "user sends API SearchWeather request with information corresponding \"8\"",
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "KEY",
        "city_name",
        "api_key"
      ],
      "line": 128
    },
    {
      "cells": [
        "2",
        "city name not exists",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 129
    },
    {
      "cells": [
        "3",
        "",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 130
    },
    {
      "cells": [
        "4",
        "",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 131
    },
    {
      "cells": [
        "5",
        "BG",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 132
    },
    {
      "cells": [
        "6",
        "ha noi vn",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 133
    },
    {
      "cells": [
        "7",
        "ha noi, cn",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 134
    },
    {
      "cells": [
        "8",
        "Krungthepmahanakhon Amonrattanakosin Mahintharayutthaya Mahadilokphop Noppharatratchathaniburirom Udomratchaniwetmahasathan Amonphimanawatansathit Sakkathattiyawitsanukamprasit",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 135
    },
    {
      "cells": [
        "10",
        "hanoi",
        "appid not exists"
      ],
      "line": 136
    },
    {
      "cells": [
        "11",
        "hanoi",
        "57c1c22050f92b6d7a0a4c5716912bbe"
      ],
      "line": 137
    },
    {
      "cells": [
        "21",
        "Hà Nam,",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 138
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 140,
  "name": "user check message in response body when response fail with information corresponding \"8\"",
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "KEY",
        "response_code",
        "cod",
        "message"
      ],
      "line": 141
    },
    {
      "cells": [
        "2",
        "404",
        "404",
        "city not found"
      ],
      "line": 142
    },
    {
      "cells": [
        "3",
        "400",
        "400",
        "Nothing to geocode"
      ],
      "line": 143
    },
    {
      "cells": [
        "4",
        "400",
        "400",
        "Nothing to geocode"
      ],
      "line": 144
    },
    {
      "cells": [
        "5",
        "404",
        "404",
        "city not found"
      ],
      "line": 145
    },
    {
      "cells": [
        "6",
        "404",
        "404",
        "city not found"
      ],
      "line": 146
    },
    {
      "cells": [
        "7",
        "404",
        "404",
        "city not found"
      ],
      "line": 147
    },
    {
      "cells": [
        "8",
        "404",
        "404",
        "city not found"
      ],
      "line": 148
    },
    {
      "cells": [
        "10",
        "401",
        "401",
        "Invalid API key. Please see http://openweathermap.org/faq#error401 for more info."
      ],
      "line": 149
    },
    {
      "cells": [
        "11",
        "401",
        "401",
        "Invalid API key. Please see http://openweathermap.org/faq#error401 for more info."
      ],
      "line": 150
    },
    {
      "cells": [
        "21",
        "404",
        "404",
        "city not found"
      ],
      "line": 151
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "8",
      "offset": 69
    }
  ],
  "location": "SearchWeatherSteps.userSendsAPISearchWeatherRequestWithInformationCorresponding(String,DataTable)"
});
formatter.result({
  "duration": 103041600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8",
      "offset": 87
    }
  ],
  "location": "SearchWeatherSteps.userCheckMessageInResponseBodyWhenResponseFailWithInformationCorresponding(String,DataTable)"
});
formatter.result({
  "duration": 26760700,
  "status": "passed"
});
formatter.examples({
  "line": 173,
  "name": "",
  "description": "",
  "id": "test-api-search-weather-in-your-city;verify-message-error-when-response-is-error;",
  "rows": [
    {
      "cells": [
        "KEY"
      ],
      "line": 174,
      "id": "test-api-search-weather-in-your-city;verify-message-error-when-response-is-error;;1"
    },
    {
      "cells": [
        "10"
      ],
      "line": 175,
      "id": "test-api-search-weather-in-your-city;verify-message-error-when-response-is-error;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 175,
  "name": "Verify Message Error when response is error",
  "description": "",
  "id": "test-api-search-weather-in-your-city;verify-message-error-when-response-is-error;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 125,
      "name": "@NAB_REQ_2.2"
    },
    {
      "line": 1,
      "name": "@searchWeather"
    }
  ]
});
formatter.step({
  "line": 127,
  "name": "user sends API SearchWeather request with information corresponding \"10\"",
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "KEY",
        "city_name",
        "api_key"
      ],
      "line": 128
    },
    {
      "cells": [
        "2",
        "city name not exists",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 129
    },
    {
      "cells": [
        "3",
        "",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 130
    },
    {
      "cells": [
        "4",
        "",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 131
    },
    {
      "cells": [
        "5",
        "BG",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 132
    },
    {
      "cells": [
        "6",
        "ha noi vn",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 133
    },
    {
      "cells": [
        "7",
        "ha noi, cn",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 134
    },
    {
      "cells": [
        "8",
        "Krungthepmahanakhon Amonrattanakosin Mahintharayutthaya Mahadilokphop Noppharatratchathaniburirom Udomratchaniwetmahasathan Amonphimanawatansathit Sakkathattiyawitsanukamprasit",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 135
    },
    {
      "cells": [
        "10",
        "hanoi",
        "appid not exists"
      ],
      "line": 136
    },
    {
      "cells": [
        "11",
        "hanoi",
        "57c1c22050f92b6d7a0a4c5716912bbe"
      ],
      "line": 137
    },
    {
      "cells": [
        "21",
        "Hà Nam,",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 138
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 140,
  "name": "user check message in response body when response fail with information corresponding \"10\"",
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "KEY",
        "response_code",
        "cod",
        "message"
      ],
      "line": 141
    },
    {
      "cells": [
        "2",
        "404",
        "404",
        "city not found"
      ],
      "line": 142
    },
    {
      "cells": [
        "3",
        "400",
        "400",
        "Nothing to geocode"
      ],
      "line": 143
    },
    {
      "cells": [
        "4",
        "400",
        "400",
        "Nothing to geocode"
      ],
      "line": 144
    },
    {
      "cells": [
        "5",
        "404",
        "404",
        "city not found"
      ],
      "line": 145
    },
    {
      "cells": [
        "6",
        "404",
        "404",
        "city not found"
      ],
      "line": 146
    },
    {
      "cells": [
        "7",
        "404",
        "404",
        "city not found"
      ],
      "line": 147
    },
    {
      "cells": [
        "8",
        "404",
        "404",
        "city not found"
      ],
      "line": 148
    },
    {
      "cells": [
        "10",
        "401",
        "401",
        "Invalid API key. Please see http://openweathermap.org/faq#error401 for more info."
      ],
      "line": 149
    },
    {
      "cells": [
        "11",
        "401",
        "401",
        "Invalid API key. Please see http://openweathermap.org/faq#error401 for more info."
      ],
      "line": 150
    },
    {
      "cells": [
        "21",
        "404",
        "404",
        "city not found"
      ],
      "line": 151
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 69
    }
  ],
  "location": "SearchWeatherSteps.userSendsAPISearchWeatherRequestWithInformationCorresponding(String,DataTable)"
});
formatter.result({
  "duration": 105600300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 87
    }
  ],
  "location": "SearchWeatherSteps.userCheckMessageInResponseBodyWhenResponseFailWithInformationCorresponding(String,DataTable)"
});
formatter.result({
  "duration": 17791600,
  "status": "passed"
});
formatter.examples({
  "line": 176,
  "name": "",
  "description": "",
  "id": "test-api-search-weather-in-your-city;verify-message-error-when-response-is-error;",
  "rows": [
    {
      "cells": [
        "KEY"
      ],
      "line": 177,
      "id": "test-api-search-weather-in-your-city;verify-message-error-when-response-is-error;;1"
    },
    {
      "cells": [
        "11"
      ],
      "line": 178,
      "id": "test-api-search-weather-in-your-city;verify-message-error-when-response-is-error;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 178,
  "name": "Verify Message Error when response is error",
  "description": "",
  "id": "test-api-search-weather-in-your-city;verify-message-error-when-response-is-error;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 125,
      "name": "@NAB_REQ_2.2"
    },
    {
      "line": 1,
      "name": "@searchWeather"
    }
  ]
});
formatter.step({
  "line": 127,
  "name": "user sends API SearchWeather request with information corresponding \"11\"",
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "KEY",
        "city_name",
        "api_key"
      ],
      "line": 128
    },
    {
      "cells": [
        "2",
        "city name not exists",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 129
    },
    {
      "cells": [
        "3",
        "",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 130
    },
    {
      "cells": [
        "4",
        "",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 131
    },
    {
      "cells": [
        "5",
        "BG",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 132
    },
    {
      "cells": [
        "6",
        "ha noi vn",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 133
    },
    {
      "cells": [
        "7",
        "ha noi, cn",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 134
    },
    {
      "cells": [
        "8",
        "Krungthepmahanakhon Amonrattanakosin Mahintharayutthaya Mahadilokphop Noppharatratchathaniburirom Udomratchaniwetmahasathan Amonphimanawatansathit Sakkathattiyawitsanukamprasit",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 135
    },
    {
      "cells": [
        "10",
        "hanoi",
        "appid not exists"
      ],
      "line": 136
    },
    {
      "cells": [
        "11",
        "hanoi",
        "57c1c22050f92b6d7a0a4c5716912bbe"
      ],
      "line": 137
    },
    {
      "cells": [
        "21",
        "Hà Nam,",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 138
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 140,
  "name": "user check message in response body when response fail with information corresponding \"11\"",
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "KEY",
        "response_code",
        "cod",
        "message"
      ],
      "line": 141
    },
    {
      "cells": [
        "2",
        "404",
        "404",
        "city not found"
      ],
      "line": 142
    },
    {
      "cells": [
        "3",
        "400",
        "400",
        "Nothing to geocode"
      ],
      "line": 143
    },
    {
      "cells": [
        "4",
        "400",
        "400",
        "Nothing to geocode"
      ],
      "line": 144
    },
    {
      "cells": [
        "5",
        "404",
        "404",
        "city not found"
      ],
      "line": 145
    },
    {
      "cells": [
        "6",
        "404",
        "404",
        "city not found"
      ],
      "line": 146
    },
    {
      "cells": [
        "7",
        "404",
        "404",
        "city not found"
      ],
      "line": 147
    },
    {
      "cells": [
        "8",
        "404",
        "404",
        "city not found"
      ],
      "line": 148
    },
    {
      "cells": [
        "10",
        "401",
        "401",
        "Invalid API key. Please see http://openweathermap.org/faq#error401 for more info."
      ],
      "line": 149
    },
    {
      "cells": [
        "11",
        "401",
        "401",
        "Invalid API key. Please see http://openweathermap.org/faq#error401 for more info."
      ],
      "line": 150
    },
    {
      "cells": [
        "21",
        "404",
        "404",
        "city not found"
      ],
      "line": 151
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "11",
      "offset": 69
    }
  ],
  "location": "SearchWeatherSteps.userSendsAPISearchWeatherRequestWithInformationCorresponding(String,DataTable)"
});
formatter.result({
  "duration": 92599100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "11",
      "offset": 87
    }
  ],
  "location": "SearchWeatherSteps.userCheckMessageInResponseBodyWhenResponseFailWithInformationCorresponding(String,DataTable)"
});
formatter.result({
  "duration": 29655700,
  "status": "passed"
});
formatter.examples({
  "line": 179,
  "name": "",
  "description": "",
  "id": "test-api-search-weather-in-your-city;verify-message-error-when-response-is-error;",
  "rows": [
    {
      "cells": [
        "KEY"
      ],
      "line": 180,
      "id": "test-api-search-weather-in-your-city;verify-message-error-when-response-is-error;;1"
    },
    {
      "cells": [
        "21"
      ],
      "line": 181,
      "id": "test-api-search-weather-in-your-city;verify-message-error-when-response-is-error;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 181,
  "name": "Verify Message Error when response is error",
  "description": "",
  "id": "test-api-search-weather-in-your-city;verify-message-error-when-response-is-error;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 125,
      "name": "@NAB_REQ_2.2"
    },
    {
      "line": 1,
      "name": "@searchWeather"
    }
  ]
});
formatter.step({
  "line": 127,
  "name": "user sends API SearchWeather request with information corresponding \"21\"",
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "KEY",
        "city_name",
        "api_key"
      ],
      "line": 128
    },
    {
      "cells": [
        "2",
        "city name not exists",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 129
    },
    {
      "cells": [
        "3",
        "",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 130
    },
    {
      "cells": [
        "4",
        "",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 131
    },
    {
      "cells": [
        "5",
        "BG",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 132
    },
    {
      "cells": [
        "6",
        "ha noi vn",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 133
    },
    {
      "cells": [
        "7",
        "ha noi, cn",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 134
    },
    {
      "cells": [
        "8",
        "Krungthepmahanakhon Amonrattanakosin Mahintharayutthaya Mahadilokphop Noppharatratchathaniburirom Udomratchaniwetmahasathan Amonphimanawatansathit Sakkathattiyawitsanukamprasit",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 135
    },
    {
      "cells": [
        "10",
        "hanoi",
        "appid not exists"
      ],
      "line": 136
    },
    {
      "cells": [
        "11",
        "hanoi",
        "57c1c22050f92b6d7a0a4c5716912bbe"
      ],
      "line": 137
    },
    {
      "cells": [
        "21",
        "Hà Nam,",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 138
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 140,
  "name": "user check message in response body when response fail with information corresponding \"21\"",
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "KEY",
        "response_code",
        "cod",
        "message"
      ],
      "line": 141
    },
    {
      "cells": [
        "2",
        "404",
        "404",
        "city not found"
      ],
      "line": 142
    },
    {
      "cells": [
        "3",
        "400",
        "400",
        "Nothing to geocode"
      ],
      "line": 143
    },
    {
      "cells": [
        "4",
        "400",
        "400",
        "Nothing to geocode"
      ],
      "line": 144
    },
    {
      "cells": [
        "5",
        "404",
        "404",
        "city not found"
      ],
      "line": 145
    },
    {
      "cells": [
        "6",
        "404",
        "404",
        "city not found"
      ],
      "line": 146
    },
    {
      "cells": [
        "7",
        "404",
        "404",
        "city not found"
      ],
      "line": 147
    },
    {
      "cells": [
        "8",
        "404",
        "404",
        "city not found"
      ],
      "line": 148
    },
    {
      "cells": [
        "10",
        "401",
        "401",
        "Invalid API key. Please see http://openweathermap.org/faq#error401 for more info."
      ],
      "line": 149
    },
    {
      "cells": [
        "11",
        "401",
        "401",
        "Invalid API key. Please see http://openweathermap.org/faq#error401 for more info."
      ],
      "line": 150
    },
    {
      "cells": [
        "21",
        "404",
        "404",
        "city not found"
      ],
      "line": 151
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "21",
      "offset": 69
    }
  ],
  "location": "SearchWeatherSteps.userSendsAPISearchWeatherRequestWithInformationCorresponding(String,DataTable)"
});
formatter.result({
  "duration": 103083900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "21",
      "offset": 87
    }
  ],
  "location": "SearchWeatherSteps.userCheckMessageInResponseBodyWhenResponseFailWithInformationCorresponding(String,DataTable)"
});
formatter.result({
  "duration": 19748200,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 184,
  "name": "Verify Content in Body when Response is 200",
  "description": "",
  "id": "test-api-search-weather-in-your-city;verify-content-in-body-when-response-is-200",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 183,
      "name": "@NAB_REQ_2.3"
    }
  ]
});
formatter.step({
  "line": 185,
  "name": "user sends API SearchWeather request with information corresponding \"\u003cKEY\u003e\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "city_name",
        "api_key"
      ],
      "line": 186
    },
    {
      "cells": [
        "12",
        "London",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 187
    },
    {
      "cells": [
        "13",
        "Tokyo",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 188
    },
    {
      "cells": [
        "14",
        "Thành phố hồ chí minh",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 189
    },
    {
      "cells": [
        "15",
        "Thai nguyen",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 190
    },
    {
      "cells": [
        "16",
        "上海",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 191
    },
    {
      "cells": [
        "17",
        "Chengdu",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 192
    },
    {
      "cells": [
        "18",
        "東京都",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 193
    },
    {
      "cells": [
        "19",
        "Nagoya",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 194
    },
    {
      "cells": [
        "20",
        "Hà Nội, VN",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 195
    },
    {
      "cells": [
        "22",
        "Bắc Giang, VN",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 196
    },
    {
      "cells": [
        "23",
        "Cần     Thơ",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 197
    },
    {
      "cells": [
        "24",
        "Vĩnh Long, VN",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 198
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 200,
  "name": "user check city name and country for response successfully with information corresponding \"\u003cKEY\u003e\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "response_code",
        "cod",
        "message",
        "city_name_expected",
        "country_expected"
      ],
      "line": 201
    },
    {
      "cells": [
        "12",
        "200",
        "200",
        "",
        "London",
        "GB"
      ],
      "line": 202
    },
    {
      "cells": [
        "13",
        "200",
        "200",
        "",
        "Tokyo",
        "JP"
      ],
      "line": 203
    },
    {
      "cells": [
        "14",
        "200",
        "200",
        "",
        "Ho Chi Minh City",
        "VN"
      ],
      "line": 204
    },
    {
      "cells": [
        "15",
        "200",
        "200",
        "",
        "Thai Nguyen",
        "VN"
      ],
      "line": 205
    },
    {
      "cells": [
        "16",
        "200",
        "200",
        "",
        "Shanghai",
        "CN"
      ],
      "line": 206
    },
    {
      "cells": [
        "17",
        "200",
        "200",
        "",
        "Chengdu",
        "CN"
      ],
      "line": 207
    },
    {
      "cells": [
        "18",
        "200",
        "200",
        "",
        "Tokyo",
        "JP"
      ],
      "line": 208
    },
    {
      "cells": [
        "19",
        "200",
        "200",
        "",
        "Nagoya",
        "JP"
      ],
      "line": 209
    },
    {
      "cells": [
        "20",
        "200",
        "200",
        "",
        "Hanoi",
        "VN"
      ],
      "line": 210
    },
    {
      "cells": [
        "22",
        "200",
        "200",
        "",
        "Bắc Giang",
        "VN"
      ],
      "line": 212
    },
    {
      "cells": [
        "23",
        "200",
        "200",
        "",
        "Can Tho",
        "VN"
      ],
      "line": 213
    },
    {
      "cells": [
        "24",
        "200",
        "200",
        "",
        "Vĩnh Long",
        "VN"
      ],
      "line": 214
    }
  ],
  "keyword": "Then "
});
formatter.examples({
  "line": 215,
  "name": "",
  "description": "",
  "id": "test-api-search-weather-in-your-city;verify-content-in-body-when-response-is-200;",
  "rows": [
    {
      "cells": [
        "KEY"
      ],
      "line": 216,
      "id": "test-api-search-weather-in-your-city;verify-content-in-body-when-response-is-200;;1"
    },
    {
      "cells": [
        "12"
      ],
      "line": 217,
      "id": "test-api-search-weather-in-your-city;verify-content-in-body-when-response-is-200;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 217,
  "name": "Verify Content in Body when Response is 200",
  "description": "",
  "id": "test-api-search-weather-in-your-city;verify-content-in-body-when-response-is-200;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 183,
      "name": "@NAB_REQ_2.3"
    },
    {
      "line": 1,
      "name": "@searchWeather"
    }
  ]
});
formatter.step({
  "line": 185,
  "name": "user sends API SearchWeather request with information corresponding \"12\"",
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "KEY",
        "city_name",
        "api_key"
      ],
      "line": 186
    },
    {
      "cells": [
        "12",
        "London",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 187
    },
    {
      "cells": [
        "13",
        "Tokyo",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 188
    },
    {
      "cells": [
        "14",
        "Thành phố hồ chí minh",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 189
    },
    {
      "cells": [
        "15",
        "Thai nguyen",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 190
    },
    {
      "cells": [
        "16",
        "上海",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 191
    },
    {
      "cells": [
        "17",
        "Chengdu",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 192
    },
    {
      "cells": [
        "18",
        "東京都",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 193
    },
    {
      "cells": [
        "19",
        "Nagoya",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 194
    },
    {
      "cells": [
        "20",
        "Hà Nội, VN",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 195
    },
    {
      "cells": [
        "22",
        "Bắc Giang, VN",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 196
    },
    {
      "cells": [
        "23",
        "Cần     Thơ",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 197
    },
    {
      "cells": [
        "24",
        "Vĩnh Long, VN",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 198
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 200,
  "name": "user check city name and country for response successfully with information corresponding \"12\"",
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "KEY",
        "response_code",
        "cod",
        "message",
        "city_name_expected",
        "country_expected"
      ],
      "line": 201
    },
    {
      "cells": [
        "12",
        "200",
        "200",
        "",
        "London",
        "GB"
      ],
      "line": 202
    },
    {
      "cells": [
        "13",
        "200",
        "200",
        "",
        "Tokyo",
        "JP"
      ],
      "line": 203
    },
    {
      "cells": [
        "14",
        "200",
        "200",
        "",
        "Ho Chi Minh City",
        "VN"
      ],
      "line": 204
    },
    {
      "cells": [
        "15",
        "200",
        "200",
        "",
        "Thai Nguyen",
        "VN"
      ],
      "line": 205
    },
    {
      "cells": [
        "16",
        "200",
        "200",
        "",
        "Shanghai",
        "CN"
      ],
      "line": 206
    },
    {
      "cells": [
        "17",
        "200",
        "200",
        "",
        "Chengdu",
        "CN"
      ],
      "line": 207
    },
    {
      "cells": [
        "18",
        "200",
        "200",
        "",
        "Tokyo",
        "JP"
      ],
      "line": 208
    },
    {
      "cells": [
        "19",
        "200",
        "200",
        "",
        "Nagoya",
        "JP"
      ],
      "line": 209
    },
    {
      "cells": [
        "20",
        "200",
        "200",
        "",
        "Hanoi",
        "VN"
      ],
      "line": 210
    },
    {
      "cells": [
        "22",
        "200",
        "200",
        "",
        "Bắc Giang",
        "VN"
      ],
      "line": 212
    },
    {
      "cells": [
        "23",
        "200",
        "200",
        "",
        "Can Tho",
        "VN"
      ],
      "line": 213
    },
    {
      "cells": [
        "24",
        "200",
        "200",
        "",
        "Vĩnh Long",
        "VN"
      ],
      "line": 214
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "12",
      "offset": 69
    }
  ],
  "location": "SearchWeatherSteps.userSendsAPISearchWeatherRequestWithInformationCorresponding(String,DataTable)"
});
formatter.result({
  "duration": 93188400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12",
      "offset": 91
    }
  ],
  "location": "SearchWeatherSteps.userCheckCityNameAndCountryForResponseSuccessfullyWithInformationCorresponding(String,DataTable)"
});
formatter.result({
  "duration": 39774700,
  "status": "passed"
});
formatter.examples({
  "line": 218,
  "name": "",
  "description": "",
  "id": "test-api-search-weather-in-your-city;verify-content-in-body-when-response-is-200;",
  "rows": [
    {
      "cells": [
        "KEY"
      ],
      "line": 219,
      "id": "test-api-search-weather-in-your-city;verify-content-in-body-when-response-is-200;;1"
    },
    {
      "cells": [
        "13"
      ],
      "line": 220,
      "id": "test-api-search-weather-in-your-city;verify-content-in-body-when-response-is-200;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 220,
  "name": "Verify Content in Body when Response is 200",
  "description": "",
  "id": "test-api-search-weather-in-your-city;verify-content-in-body-when-response-is-200;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 183,
      "name": "@NAB_REQ_2.3"
    },
    {
      "line": 1,
      "name": "@searchWeather"
    }
  ]
});
formatter.step({
  "line": 185,
  "name": "user sends API SearchWeather request with information corresponding \"13\"",
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "KEY",
        "city_name",
        "api_key"
      ],
      "line": 186
    },
    {
      "cells": [
        "12",
        "London",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 187
    },
    {
      "cells": [
        "13",
        "Tokyo",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 188
    },
    {
      "cells": [
        "14",
        "Thành phố hồ chí minh",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 189
    },
    {
      "cells": [
        "15",
        "Thai nguyen",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 190
    },
    {
      "cells": [
        "16",
        "上海",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 191
    },
    {
      "cells": [
        "17",
        "Chengdu",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 192
    },
    {
      "cells": [
        "18",
        "東京都",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 193
    },
    {
      "cells": [
        "19",
        "Nagoya",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 194
    },
    {
      "cells": [
        "20",
        "Hà Nội, VN",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 195
    },
    {
      "cells": [
        "22",
        "Bắc Giang, VN",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 196
    },
    {
      "cells": [
        "23",
        "Cần     Thơ",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 197
    },
    {
      "cells": [
        "24",
        "Vĩnh Long, VN",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 198
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 200,
  "name": "user check city name and country for response successfully with information corresponding \"13\"",
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "KEY",
        "response_code",
        "cod",
        "message",
        "city_name_expected",
        "country_expected"
      ],
      "line": 201
    },
    {
      "cells": [
        "12",
        "200",
        "200",
        "",
        "London",
        "GB"
      ],
      "line": 202
    },
    {
      "cells": [
        "13",
        "200",
        "200",
        "",
        "Tokyo",
        "JP"
      ],
      "line": 203
    },
    {
      "cells": [
        "14",
        "200",
        "200",
        "",
        "Ho Chi Minh City",
        "VN"
      ],
      "line": 204
    },
    {
      "cells": [
        "15",
        "200",
        "200",
        "",
        "Thai Nguyen",
        "VN"
      ],
      "line": 205
    },
    {
      "cells": [
        "16",
        "200",
        "200",
        "",
        "Shanghai",
        "CN"
      ],
      "line": 206
    },
    {
      "cells": [
        "17",
        "200",
        "200",
        "",
        "Chengdu",
        "CN"
      ],
      "line": 207
    },
    {
      "cells": [
        "18",
        "200",
        "200",
        "",
        "Tokyo",
        "JP"
      ],
      "line": 208
    },
    {
      "cells": [
        "19",
        "200",
        "200",
        "",
        "Nagoya",
        "JP"
      ],
      "line": 209
    },
    {
      "cells": [
        "20",
        "200",
        "200",
        "",
        "Hanoi",
        "VN"
      ],
      "line": 210
    },
    {
      "cells": [
        "22",
        "200",
        "200",
        "",
        "Bắc Giang",
        "VN"
      ],
      "line": 212
    },
    {
      "cells": [
        "23",
        "200",
        "200",
        "",
        "Can Tho",
        "VN"
      ],
      "line": 213
    },
    {
      "cells": [
        "24",
        "200",
        "200",
        "",
        "Vĩnh Long",
        "VN"
      ],
      "line": 214
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "13",
      "offset": 69
    }
  ],
  "location": "SearchWeatherSteps.userSendsAPISearchWeatherRequestWithInformationCorresponding(String,DataTable)"
});
formatter.result({
  "duration": 91415900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "13",
      "offset": 91
    }
  ],
  "location": "SearchWeatherSteps.userCheckCityNameAndCountryForResponseSuccessfullyWithInformationCorresponding(String,DataTable)"
});
formatter.result({
  "duration": 45481900,
  "status": "passed"
});
formatter.examples({
  "line": 221,
  "name": "",
  "description": "",
  "id": "test-api-search-weather-in-your-city;verify-content-in-body-when-response-is-200;",
  "rows": [
    {
      "cells": [
        "KEY"
      ],
      "line": 222,
      "id": "test-api-search-weather-in-your-city;verify-content-in-body-when-response-is-200;;1"
    },
    {
      "cells": [
        "14"
      ],
      "line": 223,
      "id": "test-api-search-weather-in-your-city;verify-content-in-body-when-response-is-200;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 223,
  "name": "Verify Content in Body when Response is 200",
  "description": "",
  "id": "test-api-search-weather-in-your-city;verify-content-in-body-when-response-is-200;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 183,
      "name": "@NAB_REQ_2.3"
    },
    {
      "line": 1,
      "name": "@searchWeather"
    }
  ]
});
formatter.step({
  "line": 185,
  "name": "user sends API SearchWeather request with information corresponding \"14\"",
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "KEY",
        "city_name",
        "api_key"
      ],
      "line": 186
    },
    {
      "cells": [
        "12",
        "London",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 187
    },
    {
      "cells": [
        "13",
        "Tokyo",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 188
    },
    {
      "cells": [
        "14",
        "Thành phố hồ chí minh",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 189
    },
    {
      "cells": [
        "15",
        "Thai nguyen",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 190
    },
    {
      "cells": [
        "16",
        "上海",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 191
    },
    {
      "cells": [
        "17",
        "Chengdu",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 192
    },
    {
      "cells": [
        "18",
        "東京都",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 193
    },
    {
      "cells": [
        "19",
        "Nagoya",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 194
    },
    {
      "cells": [
        "20",
        "Hà Nội, VN",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 195
    },
    {
      "cells": [
        "22",
        "Bắc Giang, VN",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 196
    },
    {
      "cells": [
        "23",
        "Cần     Thơ",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 197
    },
    {
      "cells": [
        "24",
        "Vĩnh Long, VN",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 198
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 200,
  "name": "user check city name and country for response successfully with information corresponding \"14\"",
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "KEY",
        "response_code",
        "cod",
        "message",
        "city_name_expected",
        "country_expected"
      ],
      "line": 201
    },
    {
      "cells": [
        "12",
        "200",
        "200",
        "",
        "London",
        "GB"
      ],
      "line": 202
    },
    {
      "cells": [
        "13",
        "200",
        "200",
        "",
        "Tokyo",
        "JP"
      ],
      "line": 203
    },
    {
      "cells": [
        "14",
        "200",
        "200",
        "",
        "Ho Chi Minh City",
        "VN"
      ],
      "line": 204
    },
    {
      "cells": [
        "15",
        "200",
        "200",
        "",
        "Thai Nguyen",
        "VN"
      ],
      "line": 205
    },
    {
      "cells": [
        "16",
        "200",
        "200",
        "",
        "Shanghai",
        "CN"
      ],
      "line": 206
    },
    {
      "cells": [
        "17",
        "200",
        "200",
        "",
        "Chengdu",
        "CN"
      ],
      "line": 207
    },
    {
      "cells": [
        "18",
        "200",
        "200",
        "",
        "Tokyo",
        "JP"
      ],
      "line": 208
    },
    {
      "cells": [
        "19",
        "200",
        "200",
        "",
        "Nagoya",
        "JP"
      ],
      "line": 209
    },
    {
      "cells": [
        "20",
        "200",
        "200",
        "",
        "Hanoi",
        "VN"
      ],
      "line": 210
    },
    {
      "cells": [
        "22",
        "200",
        "200",
        "",
        "Bắc Giang",
        "VN"
      ],
      "line": 212
    },
    {
      "cells": [
        "23",
        "200",
        "200",
        "",
        "Can Tho",
        "VN"
      ],
      "line": 213
    },
    {
      "cells": [
        "24",
        "200",
        "200",
        "",
        "Vĩnh Long",
        "VN"
      ],
      "line": 214
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "14",
      "offset": 69
    }
  ],
  "location": "SearchWeatherSteps.userSendsAPISearchWeatherRequestWithInformationCorresponding(String,DataTable)"
});
formatter.result({
  "duration": 98267700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "14",
      "offset": 91
    }
  ],
  "location": "SearchWeatherSteps.userCheckCityNameAndCountryForResponseSuccessfullyWithInformationCorresponding(String,DataTable)"
});
formatter.result({
  "duration": 41040800,
  "status": "passed"
});
formatter.examples({
  "line": 224,
  "name": "",
  "description": "",
  "id": "test-api-search-weather-in-your-city;verify-content-in-body-when-response-is-200;",
  "rows": [
    {
      "cells": [
        "KEY"
      ],
      "line": 225,
      "id": "test-api-search-weather-in-your-city;verify-content-in-body-when-response-is-200;;1"
    },
    {
      "cells": [
        "15"
      ],
      "line": 226,
      "id": "test-api-search-weather-in-your-city;verify-content-in-body-when-response-is-200;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 226,
  "name": "Verify Content in Body when Response is 200",
  "description": "",
  "id": "test-api-search-weather-in-your-city;verify-content-in-body-when-response-is-200;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 183,
      "name": "@NAB_REQ_2.3"
    },
    {
      "line": 1,
      "name": "@searchWeather"
    }
  ]
});
formatter.step({
  "line": 185,
  "name": "user sends API SearchWeather request with information corresponding \"15\"",
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "KEY",
        "city_name",
        "api_key"
      ],
      "line": 186
    },
    {
      "cells": [
        "12",
        "London",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 187
    },
    {
      "cells": [
        "13",
        "Tokyo",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 188
    },
    {
      "cells": [
        "14",
        "Thành phố hồ chí minh",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 189
    },
    {
      "cells": [
        "15",
        "Thai nguyen",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 190
    },
    {
      "cells": [
        "16",
        "上海",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 191
    },
    {
      "cells": [
        "17",
        "Chengdu",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 192
    },
    {
      "cells": [
        "18",
        "東京都",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 193
    },
    {
      "cells": [
        "19",
        "Nagoya",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 194
    },
    {
      "cells": [
        "20",
        "Hà Nội, VN",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 195
    },
    {
      "cells": [
        "22",
        "Bắc Giang, VN",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 196
    },
    {
      "cells": [
        "23",
        "Cần     Thơ",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 197
    },
    {
      "cells": [
        "24",
        "Vĩnh Long, VN",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 198
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 200,
  "name": "user check city name and country for response successfully with information corresponding \"15\"",
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "KEY",
        "response_code",
        "cod",
        "message",
        "city_name_expected",
        "country_expected"
      ],
      "line": 201
    },
    {
      "cells": [
        "12",
        "200",
        "200",
        "",
        "London",
        "GB"
      ],
      "line": 202
    },
    {
      "cells": [
        "13",
        "200",
        "200",
        "",
        "Tokyo",
        "JP"
      ],
      "line": 203
    },
    {
      "cells": [
        "14",
        "200",
        "200",
        "",
        "Ho Chi Minh City",
        "VN"
      ],
      "line": 204
    },
    {
      "cells": [
        "15",
        "200",
        "200",
        "",
        "Thai Nguyen",
        "VN"
      ],
      "line": 205
    },
    {
      "cells": [
        "16",
        "200",
        "200",
        "",
        "Shanghai",
        "CN"
      ],
      "line": 206
    },
    {
      "cells": [
        "17",
        "200",
        "200",
        "",
        "Chengdu",
        "CN"
      ],
      "line": 207
    },
    {
      "cells": [
        "18",
        "200",
        "200",
        "",
        "Tokyo",
        "JP"
      ],
      "line": 208
    },
    {
      "cells": [
        "19",
        "200",
        "200",
        "",
        "Nagoya",
        "JP"
      ],
      "line": 209
    },
    {
      "cells": [
        "20",
        "200",
        "200",
        "",
        "Hanoi",
        "VN"
      ],
      "line": 210
    },
    {
      "cells": [
        "22",
        "200",
        "200",
        "",
        "Bắc Giang",
        "VN"
      ],
      "line": 212
    },
    {
      "cells": [
        "23",
        "200",
        "200",
        "",
        "Can Tho",
        "VN"
      ],
      "line": 213
    },
    {
      "cells": [
        "24",
        "200",
        "200",
        "",
        "Vĩnh Long",
        "VN"
      ],
      "line": 214
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "15",
      "offset": 69
    }
  ],
  "location": "SearchWeatherSteps.userSendsAPISearchWeatherRequestWithInformationCorresponding(String,DataTable)"
});
formatter.result({
  "duration": 103223800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "15",
      "offset": 91
    }
  ],
  "location": "SearchWeatherSteps.userCheckCityNameAndCountryForResponseSuccessfullyWithInformationCorresponding(String,DataTable)"
});
formatter.result({
  "duration": 50959100,
  "status": "passed"
});
formatter.examples({
  "line": 227,
  "name": "",
  "description": "",
  "id": "test-api-search-weather-in-your-city;verify-content-in-body-when-response-is-200;",
  "rows": [
    {
      "cells": [
        "KEY"
      ],
      "line": 228,
      "id": "test-api-search-weather-in-your-city;verify-content-in-body-when-response-is-200;;1"
    },
    {
      "cells": [
        "16"
      ],
      "line": 229,
      "id": "test-api-search-weather-in-your-city;verify-content-in-body-when-response-is-200;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 229,
  "name": "Verify Content in Body when Response is 200",
  "description": "",
  "id": "test-api-search-weather-in-your-city;verify-content-in-body-when-response-is-200;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 183,
      "name": "@NAB_REQ_2.3"
    },
    {
      "line": 1,
      "name": "@searchWeather"
    }
  ]
});
formatter.step({
  "line": 185,
  "name": "user sends API SearchWeather request with information corresponding \"16\"",
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "KEY",
        "city_name",
        "api_key"
      ],
      "line": 186
    },
    {
      "cells": [
        "12",
        "London",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 187
    },
    {
      "cells": [
        "13",
        "Tokyo",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 188
    },
    {
      "cells": [
        "14",
        "Thành phố hồ chí minh",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 189
    },
    {
      "cells": [
        "15",
        "Thai nguyen",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 190
    },
    {
      "cells": [
        "16",
        "上海",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 191
    },
    {
      "cells": [
        "17",
        "Chengdu",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 192
    },
    {
      "cells": [
        "18",
        "東京都",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 193
    },
    {
      "cells": [
        "19",
        "Nagoya",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 194
    },
    {
      "cells": [
        "20",
        "Hà Nội, VN",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 195
    },
    {
      "cells": [
        "22",
        "Bắc Giang, VN",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 196
    },
    {
      "cells": [
        "23",
        "Cần     Thơ",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 197
    },
    {
      "cells": [
        "24",
        "Vĩnh Long, VN",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 198
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 200,
  "name": "user check city name and country for response successfully with information corresponding \"16\"",
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "KEY",
        "response_code",
        "cod",
        "message",
        "city_name_expected",
        "country_expected"
      ],
      "line": 201
    },
    {
      "cells": [
        "12",
        "200",
        "200",
        "",
        "London",
        "GB"
      ],
      "line": 202
    },
    {
      "cells": [
        "13",
        "200",
        "200",
        "",
        "Tokyo",
        "JP"
      ],
      "line": 203
    },
    {
      "cells": [
        "14",
        "200",
        "200",
        "",
        "Ho Chi Minh City",
        "VN"
      ],
      "line": 204
    },
    {
      "cells": [
        "15",
        "200",
        "200",
        "",
        "Thai Nguyen",
        "VN"
      ],
      "line": 205
    },
    {
      "cells": [
        "16",
        "200",
        "200",
        "",
        "Shanghai",
        "CN"
      ],
      "line": 206
    },
    {
      "cells": [
        "17",
        "200",
        "200",
        "",
        "Chengdu",
        "CN"
      ],
      "line": 207
    },
    {
      "cells": [
        "18",
        "200",
        "200",
        "",
        "Tokyo",
        "JP"
      ],
      "line": 208
    },
    {
      "cells": [
        "19",
        "200",
        "200",
        "",
        "Nagoya",
        "JP"
      ],
      "line": 209
    },
    {
      "cells": [
        "20",
        "200",
        "200",
        "",
        "Hanoi",
        "VN"
      ],
      "line": 210
    },
    {
      "cells": [
        "22",
        "200",
        "200",
        "",
        "Bắc Giang",
        "VN"
      ],
      "line": 212
    },
    {
      "cells": [
        "23",
        "200",
        "200",
        "",
        "Can Tho",
        "VN"
      ],
      "line": 213
    },
    {
      "cells": [
        "24",
        "200",
        "200",
        "",
        "Vĩnh Long",
        "VN"
      ],
      "line": 214
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "16",
      "offset": 69
    }
  ],
  "location": "SearchWeatherSteps.userSendsAPISearchWeatherRequestWithInformationCorresponding(String,DataTable)"
});
formatter.result({
  "duration": 97682900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "16",
      "offset": 91
    }
  ],
  "location": "SearchWeatherSteps.userCheckCityNameAndCountryForResponseSuccessfullyWithInformationCorresponding(String,DataTable)"
});
formatter.result({
  "duration": 42900300,
  "status": "passed"
});
formatter.examples({
  "line": 230,
  "name": "",
  "description": "",
  "id": "test-api-search-weather-in-your-city;verify-content-in-body-when-response-is-200;",
  "rows": [
    {
      "cells": [
        "KEY"
      ],
      "line": 231,
      "id": "test-api-search-weather-in-your-city;verify-content-in-body-when-response-is-200;;1"
    },
    {
      "cells": [
        "17"
      ],
      "line": 232,
      "id": "test-api-search-weather-in-your-city;verify-content-in-body-when-response-is-200;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 232,
  "name": "Verify Content in Body when Response is 200",
  "description": "",
  "id": "test-api-search-weather-in-your-city;verify-content-in-body-when-response-is-200;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 183,
      "name": "@NAB_REQ_2.3"
    },
    {
      "line": 1,
      "name": "@searchWeather"
    }
  ]
});
formatter.step({
  "line": 185,
  "name": "user sends API SearchWeather request with information corresponding \"17\"",
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "KEY",
        "city_name",
        "api_key"
      ],
      "line": 186
    },
    {
      "cells": [
        "12",
        "London",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 187
    },
    {
      "cells": [
        "13",
        "Tokyo",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 188
    },
    {
      "cells": [
        "14",
        "Thành phố hồ chí minh",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 189
    },
    {
      "cells": [
        "15",
        "Thai nguyen",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 190
    },
    {
      "cells": [
        "16",
        "上海",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 191
    },
    {
      "cells": [
        "17",
        "Chengdu",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 192
    },
    {
      "cells": [
        "18",
        "東京都",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 193
    },
    {
      "cells": [
        "19",
        "Nagoya",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 194
    },
    {
      "cells": [
        "20",
        "Hà Nội, VN",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 195
    },
    {
      "cells": [
        "22",
        "Bắc Giang, VN",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 196
    },
    {
      "cells": [
        "23",
        "Cần     Thơ",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 197
    },
    {
      "cells": [
        "24",
        "Vĩnh Long, VN",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 198
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 200,
  "name": "user check city name and country for response successfully with information corresponding \"17\"",
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "KEY",
        "response_code",
        "cod",
        "message",
        "city_name_expected",
        "country_expected"
      ],
      "line": 201
    },
    {
      "cells": [
        "12",
        "200",
        "200",
        "",
        "London",
        "GB"
      ],
      "line": 202
    },
    {
      "cells": [
        "13",
        "200",
        "200",
        "",
        "Tokyo",
        "JP"
      ],
      "line": 203
    },
    {
      "cells": [
        "14",
        "200",
        "200",
        "",
        "Ho Chi Minh City",
        "VN"
      ],
      "line": 204
    },
    {
      "cells": [
        "15",
        "200",
        "200",
        "",
        "Thai Nguyen",
        "VN"
      ],
      "line": 205
    },
    {
      "cells": [
        "16",
        "200",
        "200",
        "",
        "Shanghai",
        "CN"
      ],
      "line": 206
    },
    {
      "cells": [
        "17",
        "200",
        "200",
        "",
        "Chengdu",
        "CN"
      ],
      "line": 207
    },
    {
      "cells": [
        "18",
        "200",
        "200",
        "",
        "Tokyo",
        "JP"
      ],
      "line": 208
    },
    {
      "cells": [
        "19",
        "200",
        "200",
        "",
        "Nagoya",
        "JP"
      ],
      "line": 209
    },
    {
      "cells": [
        "20",
        "200",
        "200",
        "",
        "Hanoi",
        "VN"
      ],
      "line": 210
    },
    {
      "cells": [
        "22",
        "200",
        "200",
        "",
        "Bắc Giang",
        "VN"
      ],
      "line": 212
    },
    {
      "cells": [
        "23",
        "200",
        "200",
        "",
        "Can Tho",
        "VN"
      ],
      "line": 213
    },
    {
      "cells": [
        "24",
        "200",
        "200",
        "",
        "Vĩnh Long",
        "VN"
      ],
      "line": 214
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "17",
      "offset": 69
    }
  ],
  "location": "SearchWeatherSteps.userSendsAPISearchWeatherRequestWithInformationCorresponding(String,DataTable)"
});
formatter.result({
  "duration": 91856000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "17",
      "offset": 91
    }
  ],
  "location": "SearchWeatherSteps.userCheckCityNameAndCountryForResponseSuccessfullyWithInformationCorresponding(String,DataTable)"
});
formatter.result({
  "duration": 24239900,
  "status": "passed"
});
formatter.examples({
  "line": 233,
  "name": "",
  "description": "",
  "id": "test-api-search-weather-in-your-city;verify-content-in-body-when-response-is-200;",
  "rows": [
    {
      "cells": [
        "KEY"
      ],
      "line": 234,
      "id": "test-api-search-weather-in-your-city;verify-content-in-body-when-response-is-200;;1"
    },
    {
      "cells": [
        "18"
      ],
      "line": 235,
      "id": "test-api-search-weather-in-your-city;verify-content-in-body-when-response-is-200;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 235,
  "name": "Verify Content in Body when Response is 200",
  "description": "",
  "id": "test-api-search-weather-in-your-city;verify-content-in-body-when-response-is-200;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 183,
      "name": "@NAB_REQ_2.3"
    },
    {
      "line": 1,
      "name": "@searchWeather"
    }
  ]
});
formatter.step({
  "line": 185,
  "name": "user sends API SearchWeather request with information corresponding \"18\"",
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "KEY",
        "city_name",
        "api_key"
      ],
      "line": 186
    },
    {
      "cells": [
        "12",
        "London",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 187
    },
    {
      "cells": [
        "13",
        "Tokyo",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 188
    },
    {
      "cells": [
        "14",
        "Thành phố hồ chí minh",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 189
    },
    {
      "cells": [
        "15",
        "Thai nguyen",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 190
    },
    {
      "cells": [
        "16",
        "上海",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 191
    },
    {
      "cells": [
        "17",
        "Chengdu",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 192
    },
    {
      "cells": [
        "18",
        "東京都",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 193
    },
    {
      "cells": [
        "19",
        "Nagoya",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 194
    },
    {
      "cells": [
        "20",
        "Hà Nội, VN",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 195
    },
    {
      "cells": [
        "22",
        "Bắc Giang, VN",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 196
    },
    {
      "cells": [
        "23",
        "Cần     Thơ",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 197
    },
    {
      "cells": [
        "24",
        "Vĩnh Long, VN",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 198
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 200,
  "name": "user check city name and country for response successfully with information corresponding \"18\"",
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "KEY",
        "response_code",
        "cod",
        "message",
        "city_name_expected",
        "country_expected"
      ],
      "line": 201
    },
    {
      "cells": [
        "12",
        "200",
        "200",
        "",
        "London",
        "GB"
      ],
      "line": 202
    },
    {
      "cells": [
        "13",
        "200",
        "200",
        "",
        "Tokyo",
        "JP"
      ],
      "line": 203
    },
    {
      "cells": [
        "14",
        "200",
        "200",
        "",
        "Ho Chi Minh City",
        "VN"
      ],
      "line": 204
    },
    {
      "cells": [
        "15",
        "200",
        "200",
        "",
        "Thai Nguyen",
        "VN"
      ],
      "line": 205
    },
    {
      "cells": [
        "16",
        "200",
        "200",
        "",
        "Shanghai",
        "CN"
      ],
      "line": 206
    },
    {
      "cells": [
        "17",
        "200",
        "200",
        "",
        "Chengdu",
        "CN"
      ],
      "line": 207
    },
    {
      "cells": [
        "18",
        "200",
        "200",
        "",
        "Tokyo",
        "JP"
      ],
      "line": 208
    },
    {
      "cells": [
        "19",
        "200",
        "200",
        "",
        "Nagoya",
        "JP"
      ],
      "line": 209
    },
    {
      "cells": [
        "20",
        "200",
        "200",
        "",
        "Hanoi",
        "VN"
      ],
      "line": 210
    },
    {
      "cells": [
        "22",
        "200",
        "200",
        "",
        "Bắc Giang",
        "VN"
      ],
      "line": 212
    },
    {
      "cells": [
        "23",
        "200",
        "200",
        "",
        "Can Tho",
        "VN"
      ],
      "line": 213
    },
    {
      "cells": [
        "24",
        "200",
        "200",
        "",
        "Vĩnh Long",
        "VN"
      ],
      "line": 214
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "18",
      "offset": 69
    }
  ],
  "location": "SearchWeatherSteps.userSendsAPISearchWeatherRequestWithInformationCorresponding(String,DataTable)"
});
formatter.result({
  "duration": 92787400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "18",
      "offset": 91
    }
  ],
  "location": "SearchWeatherSteps.userCheckCityNameAndCountryForResponseSuccessfullyWithInformationCorresponding(String,DataTable)"
});
formatter.result({
  "duration": 24745000,
  "status": "passed"
});
formatter.examples({
  "line": 236,
  "name": "",
  "description": "",
  "id": "test-api-search-weather-in-your-city;verify-content-in-body-when-response-is-200;",
  "rows": [
    {
      "cells": [
        "KEY"
      ],
      "line": 237,
      "id": "test-api-search-weather-in-your-city;verify-content-in-body-when-response-is-200;;1"
    },
    {
      "cells": [
        "19"
      ],
      "line": 238,
      "id": "test-api-search-weather-in-your-city;verify-content-in-body-when-response-is-200;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 238,
  "name": "Verify Content in Body when Response is 200",
  "description": "",
  "id": "test-api-search-weather-in-your-city;verify-content-in-body-when-response-is-200;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 183,
      "name": "@NAB_REQ_2.3"
    },
    {
      "line": 1,
      "name": "@searchWeather"
    }
  ]
});
formatter.step({
  "line": 185,
  "name": "user sends API SearchWeather request with information corresponding \"19\"",
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "KEY",
        "city_name",
        "api_key"
      ],
      "line": 186
    },
    {
      "cells": [
        "12",
        "London",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 187
    },
    {
      "cells": [
        "13",
        "Tokyo",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 188
    },
    {
      "cells": [
        "14",
        "Thành phố hồ chí minh",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 189
    },
    {
      "cells": [
        "15",
        "Thai nguyen",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 190
    },
    {
      "cells": [
        "16",
        "上海",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 191
    },
    {
      "cells": [
        "17",
        "Chengdu",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 192
    },
    {
      "cells": [
        "18",
        "東京都",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 193
    },
    {
      "cells": [
        "19",
        "Nagoya",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 194
    },
    {
      "cells": [
        "20",
        "Hà Nội, VN",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 195
    },
    {
      "cells": [
        "22",
        "Bắc Giang, VN",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 196
    },
    {
      "cells": [
        "23",
        "Cần     Thơ",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 197
    },
    {
      "cells": [
        "24",
        "Vĩnh Long, VN",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 198
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 200,
  "name": "user check city name and country for response successfully with information corresponding \"19\"",
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "KEY",
        "response_code",
        "cod",
        "message",
        "city_name_expected",
        "country_expected"
      ],
      "line": 201
    },
    {
      "cells": [
        "12",
        "200",
        "200",
        "",
        "London",
        "GB"
      ],
      "line": 202
    },
    {
      "cells": [
        "13",
        "200",
        "200",
        "",
        "Tokyo",
        "JP"
      ],
      "line": 203
    },
    {
      "cells": [
        "14",
        "200",
        "200",
        "",
        "Ho Chi Minh City",
        "VN"
      ],
      "line": 204
    },
    {
      "cells": [
        "15",
        "200",
        "200",
        "",
        "Thai Nguyen",
        "VN"
      ],
      "line": 205
    },
    {
      "cells": [
        "16",
        "200",
        "200",
        "",
        "Shanghai",
        "CN"
      ],
      "line": 206
    },
    {
      "cells": [
        "17",
        "200",
        "200",
        "",
        "Chengdu",
        "CN"
      ],
      "line": 207
    },
    {
      "cells": [
        "18",
        "200",
        "200",
        "",
        "Tokyo",
        "JP"
      ],
      "line": 208
    },
    {
      "cells": [
        "19",
        "200",
        "200",
        "",
        "Nagoya",
        "JP"
      ],
      "line": 209
    },
    {
      "cells": [
        "20",
        "200",
        "200",
        "",
        "Hanoi",
        "VN"
      ],
      "line": 210
    },
    {
      "cells": [
        "22",
        "200",
        "200",
        "",
        "Bắc Giang",
        "VN"
      ],
      "line": 212
    },
    {
      "cells": [
        "23",
        "200",
        "200",
        "",
        "Can Tho",
        "VN"
      ],
      "line": 213
    },
    {
      "cells": [
        "24",
        "200",
        "200",
        "",
        "Vĩnh Long",
        "VN"
      ],
      "line": 214
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "19",
      "offset": 69
    }
  ],
  "location": "SearchWeatherSteps.userSendsAPISearchWeatherRequestWithInformationCorresponding(String,DataTable)"
});
formatter.result({
  "duration": 94941600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "19",
      "offset": 91
    }
  ],
  "location": "SearchWeatherSteps.userCheckCityNameAndCountryForResponseSuccessfullyWithInformationCorresponding(String,DataTable)"
});
formatter.result({
  "duration": 21661100,
  "status": "passed"
});
formatter.examples({
  "line": 239,
  "name": "",
  "description": "",
  "id": "test-api-search-weather-in-your-city;verify-content-in-body-when-response-is-200;",
  "rows": [
    {
      "cells": [
        "KEY"
      ],
      "line": 240,
      "id": "test-api-search-weather-in-your-city;verify-content-in-body-when-response-is-200;;1"
    },
    {
      "cells": [
        "20"
      ],
      "line": 241,
      "id": "test-api-search-weather-in-your-city;verify-content-in-body-when-response-is-200;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 241,
  "name": "Verify Content in Body when Response is 200",
  "description": "",
  "id": "test-api-search-weather-in-your-city;verify-content-in-body-when-response-is-200;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 183,
      "name": "@NAB_REQ_2.3"
    },
    {
      "line": 1,
      "name": "@searchWeather"
    }
  ]
});
formatter.step({
  "line": 185,
  "name": "user sends API SearchWeather request with information corresponding \"20\"",
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "KEY",
        "city_name",
        "api_key"
      ],
      "line": 186
    },
    {
      "cells": [
        "12",
        "London",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 187
    },
    {
      "cells": [
        "13",
        "Tokyo",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 188
    },
    {
      "cells": [
        "14",
        "Thành phố hồ chí minh",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 189
    },
    {
      "cells": [
        "15",
        "Thai nguyen",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 190
    },
    {
      "cells": [
        "16",
        "上海",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 191
    },
    {
      "cells": [
        "17",
        "Chengdu",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 192
    },
    {
      "cells": [
        "18",
        "東京都",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 193
    },
    {
      "cells": [
        "19",
        "Nagoya",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 194
    },
    {
      "cells": [
        "20",
        "Hà Nội, VN",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 195
    },
    {
      "cells": [
        "22",
        "Bắc Giang, VN",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 196
    },
    {
      "cells": [
        "23",
        "Cần     Thơ",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 197
    },
    {
      "cells": [
        "24",
        "Vĩnh Long, VN",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 198
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 200,
  "name": "user check city name and country for response successfully with information corresponding \"20\"",
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "KEY",
        "response_code",
        "cod",
        "message",
        "city_name_expected",
        "country_expected"
      ],
      "line": 201
    },
    {
      "cells": [
        "12",
        "200",
        "200",
        "",
        "London",
        "GB"
      ],
      "line": 202
    },
    {
      "cells": [
        "13",
        "200",
        "200",
        "",
        "Tokyo",
        "JP"
      ],
      "line": 203
    },
    {
      "cells": [
        "14",
        "200",
        "200",
        "",
        "Ho Chi Minh City",
        "VN"
      ],
      "line": 204
    },
    {
      "cells": [
        "15",
        "200",
        "200",
        "",
        "Thai Nguyen",
        "VN"
      ],
      "line": 205
    },
    {
      "cells": [
        "16",
        "200",
        "200",
        "",
        "Shanghai",
        "CN"
      ],
      "line": 206
    },
    {
      "cells": [
        "17",
        "200",
        "200",
        "",
        "Chengdu",
        "CN"
      ],
      "line": 207
    },
    {
      "cells": [
        "18",
        "200",
        "200",
        "",
        "Tokyo",
        "JP"
      ],
      "line": 208
    },
    {
      "cells": [
        "19",
        "200",
        "200",
        "",
        "Nagoya",
        "JP"
      ],
      "line": 209
    },
    {
      "cells": [
        "20",
        "200",
        "200",
        "",
        "Hanoi",
        "VN"
      ],
      "line": 210
    },
    {
      "cells": [
        "22",
        "200",
        "200",
        "",
        "Bắc Giang",
        "VN"
      ],
      "line": 212
    },
    {
      "cells": [
        "23",
        "200",
        "200",
        "",
        "Can Tho",
        "VN"
      ],
      "line": 213
    },
    {
      "cells": [
        "24",
        "200",
        "200",
        "",
        "Vĩnh Long",
        "VN"
      ],
      "line": 214
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 69
    }
  ],
  "location": "SearchWeatherSteps.userSendsAPISearchWeatherRequestWithInformationCorresponding(String,DataTable)"
});
formatter.result({
  "duration": 96767800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 91
    }
  ],
  "location": "SearchWeatherSteps.userCheckCityNameAndCountryForResponseSuccessfullyWithInformationCorresponding(String,DataTable)"
});
formatter.result({
  "duration": 21057600,
  "status": "passed"
});
formatter.examples({
  "line": 242,
  "name": "",
  "description": "",
  "id": "test-api-search-weather-in-your-city;verify-content-in-body-when-response-is-200;",
  "rows": [
    {
      "cells": [
        "KEY"
      ],
      "line": 243,
      "id": "test-api-search-weather-in-your-city;verify-content-in-body-when-response-is-200;;1"
    },
    {
      "cells": [
        "22"
      ],
      "line": 244,
      "id": "test-api-search-weather-in-your-city;verify-content-in-body-when-response-is-200;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 244,
  "name": "Verify Content in Body when Response is 200",
  "description": "",
  "id": "test-api-search-weather-in-your-city;verify-content-in-body-when-response-is-200;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 183,
      "name": "@NAB_REQ_2.3"
    },
    {
      "line": 1,
      "name": "@searchWeather"
    }
  ]
});
formatter.step({
  "line": 185,
  "name": "user sends API SearchWeather request with information corresponding \"22\"",
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "KEY",
        "city_name",
        "api_key"
      ],
      "line": 186
    },
    {
      "cells": [
        "12",
        "London",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 187
    },
    {
      "cells": [
        "13",
        "Tokyo",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 188
    },
    {
      "cells": [
        "14",
        "Thành phố hồ chí minh",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 189
    },
    {
      "cells": [
        "15",
        "Thai nguyen",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 190
    },
    {
      "cells": [
        "16",
        "上海",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 191
    },
    {
      "cells": [
        "17",
        "Chengdu",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 192
    },
    {
      "cells": [
        "18",
        "東京都",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 193
    },
    {
      "cells": [
        "19",
        "Nagoya",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 194
    },
    {
      "cells": [
        "20",
        "Hà Nội, VN",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 195
    },
    {
      "cells": [
        "22",
        "Bắc Giang, VN",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 196
    },
    {
      "cells": [
        "23",
        "Cần     Thơ",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 197
    },
    {
      "cells": [
        "24",
        "Vĩnh Long, VN",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 198
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 200,
  "name": "user check city name and country for response successfully with information corresponding \"22\"",
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "KEY",
        "response_code",
        "cod",
        "message",
        "city_name_expected",
        "country_expected"
      ],
      "line": 201
    },
    {
      "cells": [
        "12",
        "200",
        "200",
        "",
        "London",
        "GB"
      ],
      "line": 202
    },
    {
      "cells": [
        "13",
        "200",
        "200",
        "",
        "Tokyo",
        "JP"
      ],
      "line": 203
    },
    {
      "cells": [
        "14",
        "200",
        "200",
        "",
        "Ho Chi Minh City",
        "VN"
      ],
      "line": 204
    },
    {
      "cells": [
        "15",
        "200",
        "200",
        "",
        "Thai Nguyen",
        "VN"
      ],
      "line": 205
    },
    {
      "cells": [
        "16",
        "200",
        "200",
        "",
        "Shanghai",
        "CN"
      ],
      "line": 206
    },
    {
      "cells": [
        "17",
        "200",
        "200",
        "",
        "Chengdu",
        "CN"
      ],
      "line": 207
    },
    {
      "cells": [
        "18",
        "200",
        "200",
        "",
        "Tokyo",
        "JP"
      ],
      "line": 208
    },
    {
      "cells": [
        "19",
        "200",
        "200",
        "",
        "Nagoya",
        "JP"
      ],
      "line": 209
    },
    {
      "cells": [
        "20",
        "200",
        "200",
        "",
        "Hanoi",
        "VN"
      ],
      "line": 210
    },
    {
      "cells": [
        "22",
        "200",
        "200",
        "",
        "Bắc Giang",
        "VN"
      ],
      "line": 212
    },
    {
      "cells": [
        "23",
        "200",
        "200",
        "",
        "Can Tho",
        "VN"
      ],
      "line": 213
    },
    {
      "cells": [
        "24",
        "200",
        "200",
        "",
        "Vĩnh Long",
        "VN"
      ],
      "line": 214
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "22",
      "offset": 69
    }
  ],
  "location": "SearchWeatherSteps.userSendsAPISearchWeatherRequestWithInformationCorresponding(String,DataTable)"
});
formatter.result({
  "duration": 90475500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "22",
      "offset": 91
    }
  ],
  "location": "SearchWeatherSteps.userCheckCityNameAndCountryForResponseSuccessfullyWithInformationCorresponding(String,DataTable)"
});
formatter.result({
  "duration": 23029500,
  "status": "passed"
});
formatter.examples({
  "line": 245,
  "name": "",
  "description": "",
  "id": "test-api-search-weather-in-your-city;verify-content-in-body-when-response-is-200;",
  "rows": [
    {
      "cells": [
        "KEY"
      ],
      "line": 246,
      "id": "test-api-search-weather-in-your-city;verify-content-in-body-when-response-is-200;;1"
    },
    {
      "cells": [
        "23"
      ],
      "line": 247,
      "id": "test-api-search-weather-in-your-city;verify-content-in-body-when-response-is-200;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 247,
  "name": "Verify Content in Body when Response is 200",
  "description": "",
  "id": "test-api-search-weather-in-your-city;verify-content-in-body-when-response-is-200;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 183,
      "name": "@NAB_REQ_2.3"
    },
    {
      "line": 1,
      "name": "@searchWeather"
    }
  ]
});
formatter.step({
  "line": 185,
  "name": "user sends API SearchWeather request with information corresponding \"23\"",
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "KEY",
        "city_name",
        "api_key"
      ],
      "line": 186
    },
    {
      "cells": [
        "12",
        "London",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 187
    },
    {
      "cells": [
        "13",
        "Tokyo",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 188
    },
    {
      "cells": [
        "14",
        "Thành phố hồ chí minh",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 189
    },
    {
      "cells": [
        "15",
        "Thai nguyen",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 190
    },
    {
      "cells": [
        "16",
        "上海",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 191
    },
    {
      "cells": [
        "17",
        "Chengdu",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 192
    },
    {
      "cells": [
        "18",
        "東京都",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 193
    },
    {
      "cells": [
        "19",
        "Nagoya",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 194
    },
    {
      "cells": [
        "20",
        "Hà Nội, VN",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 195
    },
    {
      "cells": [
        "22",
        "Bắc Giang, VN",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 196
    },
    {
      "cells": [
        "23",
        "Cần     Thơ",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 197
    },
    {
      "cells": [
        "24",
        "Vĩnh Long, VN",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 198
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 200,
  "name": "user check city name and country for response successfully with information corresponding \"23\"",
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "KEY",
        "response_code",
        "cod",
        "message",
        "city_name_expected",
        "country_expected"
      ],
      "line": 201
    },
    {
      "cells": [
        "12",
        "200",
        "200",
        "",
        "London",
        "GB"
      ],
      "line": 202
    },
    {
      "cells": [
        "13",
        "200",
        "200",
        "",
        "Tokyo",
        "JP"
      ],
      "line": 203
    },
    {
      "cells": [
        "14",
        "200",
        "200",
        "",
        "Ho Chi Minh City",
        "VN"
      ],
      "line": 204
    },
    {
      "cells": [
        "15",
        "200",
        "200",
        "",
        "Thai Nguyen",
        "VN"
      ],
      "line": 205
    },
    {
      "cells": [
        "16",
        "200",
        "200",
        "",
        "Shanghai",
        "CN"
      ],
      "line": 206
    },
    {
      "cells": [
        "17",
        "200",
        "200",
        "",
        "Chengdu",
        "CN"
      ],
      "line": 207
    },
    {
      "cells": [
        "18",
        "200",
        "200",
        "",
        "Tokyo",
        "JP"
      ],
      "line": 208
    },
    {
      "cells": [
        "19",
        "200",
        "200",
        "",
        "Nagoya",
        "JP"
      ],
      "line": 209
    },
    {
      "cells": [
        "20",
        "200",
        "200",
        "",
        "Hanoi",
        "VN"
      ],
      "line": 210
    },
    {
      "cells": [
        "22",
        "200",
        "200",
        "",
        "Bắc Giang",
        "VN"
      ],
      "line": 212
    },
    {
      "cells": [
        "23",
        "200",
        "200",
        "",
        "Can Tho",
        "VN"
      ],
      "line": 213
    },
    {
      "cells": [
        "24",
        "200",
        "200",
        "",
        "Vĩnh Long",
        "VN"
      ],
      "line": 214
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "23",
      "offset": 69
    }
  ],
  "location": "SearchWeatherSteps.userSendsAPISearchWeatherRequestWithInformationCorresponding(String,DataTable)"
});
formatter.result({
  "duration": 103217000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "23",
      "offset": 91
    }
  ],
  "location": "SearchWeatherSteps.userCheckCityNameAndCountryForResponseSuccessfullyWithInformationCorresponding(String,DataTable)"
});
formatter.result({
  "duration": 25547900,
  "error_message": "java.lang.NullPointerException\r\n\tat com.nab.defs.SearchWeatherDefs.validateCityNameAndCountry(SearchWeatherDefs.java:78)\r\n\tat steps.SearchWeatherSteps.userCheckCityNameAndCountryForResponseSuccessfullyWithInformationCorresponding(SearchWeatherSteps.java:43)\r\n\tat ✽.Then user check city name and country for response successfully with information corresponding \"23\"(SearchWeather.feature:200)\r\n",
  "status": "failed"
});
formatter.examples({
  "line": 248,
  "name": "",
  "description": "",
  "id": "test-api-search-weather-in-your-city;verify-content-in-body-when-response-is-200;",
  "rows": [
    {
      "cells": [
        "KEY"
      ],
      "line": 249,
      "id": "test-api-search-weather-in-your-city;verify-content-in-body-when-response-is-200;;1"
    },
    {
      "cells": [
        "24"
      ],
      "line": 250,
      "id": "test-api-search-weather-in-your-city;verify-content-in-body-when-response-is-200;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 250,
  "name": "Verify Content in Body when Response is 200",
  "description": "",
  "id": "test-api-search-weather-in-your-city;verify-content-in-body-when-response-is-200;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 183,
      "name": "@NAB_REQ_2.3"
    },
    {
      "line": 1,
      "name": "@searchWeather"
    }
  ]
});
formatter.step({
  "line": 185,
  "name": "user sends API SearchWeather request with information corresponding \"24\"",
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "KEY",
        "city_name",
        "api_key"
      ],
      "line": 186
    },
    {
      "cells": [
        "12",
        "London",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 187
    },
    {
      "cells": [
        "13",
        "Tokyo",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 188
    },
    {
      "cells": [
        "14",
        "Thành phố hồ chí minh",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 189
    },
    {
      "cells": [
        "15",
        "Thai nguyen",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 190
    },
    {
      "cells": [
        "16",
        "上海",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 191
    },
    {
      "cells": [
        "17",
        "Chengdu",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 192
    },
    {
      "cells": [
        "18",
        "東京都",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 193
    },
    {
      "cells": [
        "19",
        "Nagoya",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 194
    },
    {
      "cells": [
        "20",
        "Hà Nội, VN",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 195
    },
    {
      "cells": [
        "22",
        "Bắc Giang, VN",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 196
    },
    {
      "cells": [
        "23",
        "Cần     Thơ",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 197
    },
    {
      "cells": [
        "24",
        "Vĩnh Long, VN",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 198
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 200,
  "name": "user check city name and country for response successfully with information corresponding \"24\"",
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "KEY",
        "response_code",
        "cod",
        "message",
        "city_name_expected",
        "country_expected"
      ],
      "line": 201
    },
    {
      "cells": [
        "12",
        "200",
        "200",
        "",
        "London",
        "GB"
      ],
      "line": 202
    },
    {
      "cells": [
        "13",
        "200",
        "200",
        "",
        "Tokyo",
        "JP"
      ],
      "line": 203
    },
    {
      "cells": [
        "14",
        "200",
        "200",
        "",
        "Ho Chi Minh City",
        "VN"
      ],
      "line": 204
    },
    {
      "cells": [
        "15",
        "200",
        "200",
        "",
        "Thai Nguyen",
        "VN"
      ],
      "line": 205
    },
    {
      "cells": [
        "16",
        "200",
        "200",
        "",
        "Shanghai",
        "CN"
      ],
      "line": 206
    },
    {
      "cells": [
        "17",
        "200",
        "200",
        "",
        "Chengdu",
        "CN"
      ],
      "line": 207
    },
    {
      "cells": [
        "18",
        "200",
        "200",
        "",
        "Tokyo",
        "JP"
      ],
      "line": 208
    },
    {
      "cells": [
        "19",
        "200",
        "200",
        "",
        "Nagoya",
        "JP"
      ],
      "line": 209
    },
    {
      "cells": [
        "20",
        "200",
        "200",
        "",
        "Hanoi",
        "VN"
      ],
      "line": 210
    },
    {
      "cells": [
        "22",
        "200",
        "200",
        "",
        "Bắc Giang",
        "VN"
      ],
      "line": 212
    },
    {
      "cells": [
        "23",
        "200",
        "200",
        "",
        "Can Tho",
        "VN"
      ],
      "line": 213
    },
    {
      "cells": [
        "24",
        "200",
        "200",
        "",
        "Vĩnh Long",
        "VN"
      ],
      "line": 214
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "24",
      "offset": 69
    }
  ],
  "location": "SearchWeatherSteps.userSendsAPISearchWeatherRequestWithInformationCorresponding(String,DataTable)"
});
formatter.result({
  "duration": 120996200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "24",
      "offset": 91
    }
  ],
  "location": "SearchWeatherSteps.userCheckCityNameAndCountryForResponseSuccessfullyWithInformationCorresponding(String,DataTable)"
});
formatter.result({
  "duration": 40008100,
  "status": "passed"
});
});