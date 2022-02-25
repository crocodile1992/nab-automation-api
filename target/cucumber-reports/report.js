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
        "200",
        "200"
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
  "line": 54,
  "name": "",
  "description": "",
  "id": "test-api-search-weather-in-your-city;verify-response-code-call-api-with-2-params-q-and-appid;",
  "rows": [
    {
      "cells": [
        "KEY"
      ],
      "line": 55,
      "id": "test-api-search-weather-in-your-city;verify-response-code-call-api-with-2-params-q-and-appid;;1"
    },
    {
      "cells": [
        "2"
      ],
      "line": 56,
      "id": "test-api-search-weather-in-your-city;verify-response-code-call-api-with-2-params-q-and-appid;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 56,
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
        "200",
        "200"
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
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.examples({
  "line": 57,
  "name": "",
  "description": "",
  "id": "test-api-search-weather-in-your-city;verify-response-code-call-api-with-2-params-q-and-appid;",
  "rows": [
    {
      "cells": [
        "KEY"
      ],
      "line": 58,
      "id": "test-api-search-weather-in-your-city;verify-response-code-call-api-with-2-params-q-and-appid;;1"
    },
    {
      "cells": [
        "3"
      ],
      "line": 59,
      "id": "test-api-search-weather-in-your-city;verify-response-code-call-api-with-2-params-q-and-appid;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 59,
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
        "200",
        "200"
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
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.examples({
  "line": 60,
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
        "4"
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
        "200",
        "200"
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
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
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
        "5"
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
        "200",
        "200"
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
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
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
        "6"
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
        "200",
        "200"
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
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
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
        "7"
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
        "200",
        "200"
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
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
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
        "8"
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
        "200",
        "200"
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
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
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
        "10"
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
        "200",
        "200"
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
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
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
        "11"
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
        "200",
        "200"
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
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
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
        "12"
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
        "200",
        "200"
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
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
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
        "13"
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
        "200",
        "200"
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
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
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
        "14"
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
        "200",
        "200"
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
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
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
        "15"
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
        "200",
        "200"
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
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
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
        "16"
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
        "200",
        "200"
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
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
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
        "17"
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
        "200",
        "200"
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
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
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
        "18"
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
        "200",
        "200"
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
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
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
        "19"
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
        "200",
        "200"
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
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
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
        "20"
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
        "200",
        "200"
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
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
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
        "21"
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
        "200",
        "200"
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
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
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
        "22"
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
        "200",
        "200"
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
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
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
        "23"
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
        "200",
        "200"
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
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
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
        "24"
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
        "200",
        "200"
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
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenarioOutline({
  "line": 123,
  "name": "Verify Message Error when response is error",
  "description": "",
  "id": "test-api-search-weather-in-your-city;verify-message-error-when-response-is-error",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 122,
      "name": "@NAB_REQ_2.2"
    }
  ]
});
formatter.step({
  "line": 124,
  "name": "user sends API SearchWeather request with information corresponding \"\u003cKEY\u003e\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "city_name",
        "api_key"
      ],
      "line": 125
    },
    {
      "cells": [
        "2",
        "city name not exists",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 126
    },
    {
      "cells": [
        "3",
        "",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 127
    },
    {
      "cells": [
        "4",
        "",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 128
    },
    {
      "cells": [
        "5",
        "BG",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 129
    },
    {
      "cells": [
        "6",
        "ha noi vn",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 130
    },
    {
      "cells": [
        "7",
        "ha noi, cn",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 131
    },
    {
      "cells": [
        "8",
        "Krungthepmahanakhon Amonrattanakosin Mahintharayutthaya Mahadilokphop Noppharatratchathaniburirom Udomratchaniwetmahasathan Amonphimanawatansathit Sakkathattiyawitsanukamprasit",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 132
    },
    {
      "cells": [
        "10",
        "hanoi",
        "appid not exists"
      ],
      "line": 133
    },
    {
      "cells": [
        "11",
        "hanoi",
        "57c1c22050f92b6d7a0a4c5716912bbe"
      ],
      "line": 134
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 136,
  "name": "user check message in response body when response fail with information corresponding \"\u003cKEY\u003e\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "response_code",
        "cod",
        "message"
      ],
      "line": 137
    },
    {
      "cells": [
        "2",
        "404",
        "404",
        "city not found"
      ],
      "line": 138
    },
    {
      "cells": [
        "3",
        "400",
        "400",
        "Nothing to geocode"
      ],
      "line": 139
    },
    {
      "cells": [
        "4",
        "400",
        "400",
        "Nothing to geocode"
      ],
      "line": 140
    },
    {
      "cells": [
        "5",
        "404",
        "404",
        "city not found"
      ],
      "line": 141
    },
    {
      "cells": [
        "6",
        "404",
        "404",
        "city not found"
      ],
      "line": 142
    },
    {
      "cells": [
        "7",
        "404",
        "404",
        "city not found"
      ],
      "line": 143
    },
    {
      "cells": [
        "8",
        "404",
        "404",
        "city not found"
      ],
      "line": 144
    },
    {
      "cells": [
        "10",
        "401",
        "401",
        "Invalid API key. Please see http://openweathermap.org/faq#error401 for more info."
      ],
      "line": 145
    },
    {
      "cells": [
        "11",
        "401",
        "401",
        "Invalid API key. Please see http://openweathermap.org/faq#error401 for more info."
      ],
      "line": 146
    }
  ],
  "keyword": "Then "
});
formatter.examples({
  "line": 147,
  "name": "",
  "description": "",
  "id": "test-api-search-weather-in-your-city;verify-message-error-when-response-is-error;",
  "rows": [
    {
      "cells": [
        "KEY"
      ],
      "line": 148,
      "id": "test-api-search-weather-in-your-city;verify-message-error-when-response-is-error;;1"
    },
    {
      "cells": [
        "2"
      ],
      "line": 149,
      "id": "test-api-search-weather-in-your-city;verify-message-error-when-response-is-error;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 149,
  "name": "Verify Message Error when response is error",
  "description": "",
  "id": "test-api-search-weather-in-your-city;verify-message-error-when-response-is-error;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 122,
      "name": "@NAB_REQ_2.2"
    },
    {
      "line": 1,
      "name": "@searchWeather"
    }
  ]
});
formatter.step({
  "line": 124,
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
      "line": 125
    },
    {
      "cells": [
        "2",
        "city name not exists",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 126
    },
    {
      "cells": [
        "3",
        "",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 127
    },
    {
      "cells": [
        "4",
        "",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 128
    },
    {
      "cells": [
        "5",
        "BG",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 129
    },
    {
      "cells": [
        "6",
        "ha noi vn",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 130
    },
    {
      "cells": [
        "7",
        "ha noi, cn",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 131
    },
    {
      "cells": [
        "8",
        "Krungthepmahanakhon Amonrattanakosin Mahintharayutthaya Mahadilokphop Noppharatratchathaniburirom Udomratchaniwetmahasathan Amonphimanawatansathit Sakkathattiyawitsanukamprasit",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 132
    },
    {
      "cells": [
        "10",
        "hanoi",
        "appid not exists"
      ],
      "line": 133
    },
    {
      "cells": [
        "11",
        "hanoi",
        "57c1c22050f92b6d7a0a4c5716912bbe"
      ],
      "line": 134
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 136,
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
      "line": 137
    },
    {
      "cells": [
        "2",
        "404",
        "404",
        "city not found"
      ],
      "line": 138
    },
    {
      "cells": [
        "3",
        "400",
        "400",
        "Nothing to geocode"
      ],
      "line": 139
    },
    {
      "cells": [
        "4",
        "400",
        "400",
        "Nothing to geocode"
      ],
      "line": 140
    },
    {
      "cells": [
        "5",
        "404",
        "404",
        "city not found"
      ],
      "line": 141
    },
    {
      "cells": [
        "6",
        "404",
        "404",
        "city not found"
      ],
      "line": 142
    },
    {
      "cells": [
        "7",
        "404",
        "404",
        "city not found"
      ],
      "line": 143
    },
    {
      "cells": [
        "8",
        "404",
        "404",
        "city not found"
      ],
      "line": 144
    },
    {
      "cells": [
        "10",
        "401",
        "401",
        "Invalid API key. Please see http://openweathermap.org/faq#error401 for more info."
      ],
      "line": 145
    },
    {
      "cells": [
        "11",
        "401",
        "401",
        "Invalid API key. Please see http://openweathermap.org/faq#error401 for more info."
      ],
      "line": 146
    }
  ],
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.examples({
  "line": 150,
  "name": "",
  "description": "",
  "id": "test-api-search-weather-in-your-city;verify-message-error-when-response-is-error;",
  "rows": [
    {
      "cells": [
        "KEY"
      ],
      "line": 151,
      "id": "test-api-search-weather-in-your-city;verify-message-error-when-response-is-error;;1"
    },
    {
      "cells": [
        "3"
      ],
      "line": 152,
      "id": "test-api-search-weather-in-your-city;verify-message-error-when-response-is-error;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 152,
  "name": "Verify Message Error when response is error",
  "description": "",
  "id": "test-api-search-weather-in-your-city;verify-message-error-when-response-is-error;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 122,
      "name": "@NAB_REQ_2.2"
    },
    {
      "line": 1,
      "name": "@searchWeather"
    }
  ]
});
formatter.step({
  "line": 124,
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
      "line": 125
    },
    {
      "cells": [
        "2",
        "city name not exists",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 126
    },
    {
      "cells": [
        "3",
        "",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 127
    },
    {
      "cells": [
        "4",
        "",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 128
    },
    {
      "cells": [
        "5",
        "BG",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 129
    },
    {
      "cells": [
        "6",
        "ha noi vn",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 130
    },
    {
      "cells": [
        "7",
        "ha noi, cn",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 131
    },
    {
      "cells": [
        "8",
        "Krungthepmahanakhon Amonrattanakosin Mahintharayutthaya Mahadilokphop Noppharatratchathaniburirom Udomratchaniwetmahasathan Amonphimanawatansathit Sakkathattiyawitsanukamprasit",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 132
    },
    {
      "cells": [
        "10",
        "hanoi",
        "appid not exists"
      ],
      "line": 133
    },
    {
      "cells": [
        "11",
        "hanoi",
        "57c1c22050f92b6d7a0a4c5716912bbe"
      ],
      "line": 134
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 136,
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
      "line": 137
    },
    {
      "cells": [
        "2",
        "404",
        "404",
        "city not found"
      ],
      "line": 138
    },
    {
      "cells": [
        "3",
        "400",
        "400",
        "Nothing to geocode"
      ],
      "line": 139
    },
    {
      "cells": [
        "4",
        "400",
        "400",
        "Nothing to geocode"
      ],
      "line": 140
    },
    {
      "cells": [
        "5",
        "404",
        "404",
        "city not found"
      ],
      "line": 141
    },
    {
      "cells": [
        "6",
        "404",
        "404",
        "city not found"
      ],
      "line": 142
    },
    {
      "cells": [
        "7",
        "404",
        "404",
        "city not found"
      ],
      "line": 143
    },
    {
      "cells": [
        "8",
        "404",
        "404",
        "city not found"
      ],
      "line": 144
    },
    {
      "cells": [
        "10",
        "401",
        "401",
        "Invalid API key. Please see http://openweathermap.org/faq#error401 for more info."
      ],
      "line": 145
    },
    {
      "cells": [
        "11",
        "401",
        "401",
        "Invalid API key. Please see http://openweathermap.org/faq#error401 for more info."
      ],
      "line": 146
    }
  ],
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.examples({
  "line": 153,
  "name": "",
  "description": "",
  "id": "test-api-search-weather-in-your-city;verify-message-error-when-response-is-error;",
  "rows": [
    {
      "cells": [
        "KEY"
      ],
      "line": 154,
      "id": "test-api-search-weather-in-your-city;verify-message-error-when-response-is-error;;1"
    },
    {
      "cells": [
        "4"
      ],
      "line": 155,
      "id": "test-api-search-weather-in-your-city;verify-message-error-when-response-is-error;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 155,
  "name": "Verify Message Error when response is error",
  "description": "",
  "id": "test-api-search-weather-in-your-city;verify-message-error-when-response-is-error;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 122,
      "name": "@NAB_REQ_2.2"
    },
    {
      "line": 1,
      "name": "@searchWeather"
    }
  ]
});
formatter.step({
  "line": 124,
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
      "line": 125
    },
    {
      "cells": [
        "2",
        "city name not exists",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 126
    },
    {
      "cells": [
        "3",
        "",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 127
    },
    {
      "cells": [
        "4",
        "",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 128
    },
    {
      "cells": [
        "5",
        "BG",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 129
    },
    {
      "cells": [
        "6",
        "ha noi vn",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 130
    },
    {
      "cells": [
        "7",
        "ha noi, cn",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 131
    },
    {
      "cells": [
        "8",
        "Krungthepmahanakhon Amonrattanakosin Mahintharayutthaya Mahadilokphop Noppharatratchathaniburirom Udomratchaniwetmahasathan Amonphimanawatansathit Sakkathattiyawitsanukamprasit",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 132
    },
    {
      "cells": [
        "10",
        "hanoi",
        "appid not exists"
      ],
      "line": 133
    },
    {
      "cells": [
        "11",
        "hanoi",
        "57c1c22050f92b6d7a0a4c5716912bbe"
      ],
      "line": 134
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 136,
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
      "line": 137
    },
    {
      "cells": [
        "2",
        "404",
        "404",
        "city not found"
      ],
      "line": 138
    },
    {
      "cells": [
        "3",
        "400",
        "400",
        "Nothing to geocode"
      ],
      "line": 139
    },
    {
      "cells": [
        "4",
        "400",
        "400",
        "Nothing to geocode"
      ],
      "line": 140
    },
    {
      "cells": [
        "5",
        "404",
        "404",
        "city not found"
      ],
      "line": 141
    },
    {
      "cells": [
        "6",
        "404",
        "404",
        "city not found"
      ],
      "line": 142
    },
    {
      "cells": [
        "7",
        "404",
        "404",
        "city not found"
      ],
      "line": 143
    },
    {
      "cells": [
        "8",
        "404",
        "404",
        "city not found"
      ],
      "line": 144
    },
    {
      "cells": [
        "10",
        "401",
        "401",
        "Invalid API key. Please see http://openweathermap.org/faq#error401 for more info."
      ],
      "line": 145
    },
    {
      "cells": [
        "11",
        "401",
        "401",
        "Invalid API key. Please see http://openweathermap.org/faq#error401 for more info."
      ],
      "line": 146
    }
  ],
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.examples({
  "line": 156,
  "name": "",
  "description": "",
  "id": "test-api-search-weather-in-your-city;verify-message-error-when-response-is-error;",
  "rows": [
    {
      "cells": [
        "KEY"
      ],
      "line": 157,
      "id": "test-api-search-weather-in-your-city;verify-message-error-when-response-is-error;;1"
    },
    {
      "cells": [
        "5"
      ],
      "line": 158,
      "id": "test-api-search-weather-in-your-city;verify-message-error-when-response-is-error;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 158,
  "name": "Verify Message Error when response is error",
  "description": "",
  "id": "test-api-search-weather-in-your-city;verify-message-error-when-response-is-error;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 122,
      "name": "@NAB_REQ_2.2"
    },
    {
      "line": 1,
      "name": "@searchWeather"
    }
  ]
});
formatter.step({
  "line": 124,
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
      "line": 125
    },
    {
      "cells": [
        "2",
        "city name not exists",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 126
    },
    {
      "cells": [
        "3",
        "",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 127
    },
    {
      "cells": [
        "4",
        "",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 128
    },
    {
      "cells": [
        "5",
        "BG",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 129
    },
    {
      "cells": [
        "6",
        "ha noi vn",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 130
    },
    {
      "cells": [
        "7",
        "ha noi, cn",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 131
    },
    {
      "cells": [
        "8",
        "Krungthepmahanakhon Amonrattanakosin Mahintharayutthaya Mahadilokphop Noppharatratchathaniburirom Udomratchaniwetmahasathan Amonphimanawatansathit Sakkathattiyawitsanukamprasit",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 132
    },
    {
      "cells": [
        "10",
        "hanoi",
        "appid not exists"
      ],
      "line": 133
    },
    {
      "cells": [
        "11",
        "hanoi",
        "57c1c22050f92b6d7a0a4c5716912bbe"
      ],
      "line": 134
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 136,
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
      "line": 137
    },
    {
      "cells": [
        "2",
        "404",
        "404",
        "city not found"
      ],
      "line": 138
    },
    {
      "cells": [
        "3",
        "400",
        "400",
        "Nothing to geocode"
      ],
      "line": 139
    },
    {
      "cells": [
        "4",
        "400",
        "400",
        "Nothing to geocode"
      ],
      "line": 140
    },
    {
      "cells": [
        "5",
        "404",
        "404",
        "city not found"
      ],
      "line": 141
    },
    {
      "cells": [
        "6",
        "404",
        "404",
        "city not found"
      ],
      "line": 142
    },
    {
      "cells": [
        "7",
        "404",
        "404",
        "city not found"
      ],
      "line": 143
    },
    {
      "cells": [
        "8",
        "404",
        "404",
        "city not found"
      ],
      "line": 144
    },
    {
      "cells": [
        "10",
        "401",
        "401",
        "Invalid API key. Please see http://openweathermap.org/faq#error401 for more info."
      ],
      "line": 145
    },
    {
      "cells": [
        "11",
        "401",
        "401",
        "Invalid API key. Please see http://openweathermap.org/faq#error401 for more info."
      ],
      "line": 146
    }
  ],
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.examples({
  "line": 159,
  "name": "",
  "description": "",
  "id": "test-api-search-weather-in-your-city;verify-message-error-when-response-is-error;",
  "rows": [
    {
      "cells": [
        "KEY"
      ],
      "line": 160,
      "id": "test-api-search-weather-in-your-city;verify-message-error-when-response-is-error;;1"
    },
    {
      "cells": [
        "6"
      ],
      "line": 161,
      "id": "test-api-search-weather-in-your-city;verify-message-error-when-response-is-error;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 161,
  "name": "Verify Message Error when response is error",
  "description": "",
  "id": "test-api-search-weather-in-your-city;verify-message-error-when-response-is-error;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 122,
      "name": "@NAB_REQ_2.2"
    },
    {
      "line": 1,
      "name": "@searchWeather"
    }
  ]
});
formatter.step({
  "line": 124,
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
      "line": 125
    },
    {
      "cells": [
        "2",
        "city name not exists",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 126
    },
    {
      "cells": [
        "3",
        "",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 127
    },
    {
      "cells": [
        "4",
        "",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 128
    },
    {
      "cells": [
        "5",
        "BG",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 129
    },
    {
      "cells": [
        "6",
        "ha noi vn",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 130
    },
    {
      "cells": [
        "7",
        "ha noi, cn",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 131
    },
    {
      "cells": [
        "8",
        "Krungthepmahanakhon Amonrattanakosin Mahintharayutthaya Mahadilokphop Noppharatratchathaniburirom Udomratchaniwetmahasathan Amonphimanawatansathit Sakkathattiyawitsanukamprasit",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 132
    },
    {
      "cells": [
        "10",
        "hanoi",
        "appid not exists"
      ],
      "line": 133
    },
    {
      "cells": [
        "11",
        "hanoi",
        "57c1c22050f92b6d7a0a4c5716912bbe"
      ],
      "line": 134
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 136,
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
      "line": 137
    },
    {
      "cells": [
        "2",
        "404",
        "404",
        "city not found"
      ],
      "line": 138
    },
    {
      "cells": [
        "3",
        "400",
        "400",
        "Nothing to geocode"
      ],
      "line": 139
    },
    {
      "cells": [
        "4",
        "400",
        "400",
        "Nothing to geocode"
      ],
      "line": 140
    },
    {
      "cells": [
        "5",
        "404",
        "404",
        "city not found"
      ],
      "line": 141
    },
    {
      "cells": [
        "6",
        "404",
        "404",
        "city not found"
      ],
      "line": 142
    },
    {
      "cells": [
        "7",
        "404",
        "404",
        "city not found"
      ],
      "line": 143
    },
    {
      "cells": [
        "8",
        "404",
        "404",
        "city not found"
      ],
      "line": 144
    },
    {
      "cells": [
        "10",
        "401",
        "401",
        "Invalid API key. Please see http://openweathermap.org/faq#error401 for more info."
      ],
      "line": 145
    },
    {
      "cells": [
        "11",
        "401",
        "401",
        "Invalid API key. Please see http://openweathermap.org/faq#error401 for more info."
      ],
      "line": 146
    }
  ],
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.examples({
  "line": 162,
  "name": "",
  "description": "",
  "id": "test-api-search-weather-in-your-city;verify-message-error-when-response-is-error;",
  "rows": [
    {
      "cells": [
        "KEY"
      ],
      "line": 163,
      "id": "test-api-search-weather-in-your-city;verify-message-error-when-response-is-error;;1"
    },
    {
      "cells": [
        "7"
      ],
      "line": 164,
      "id": "test-api-search-weather-in-your-city;verify-message-error-when-response-is-error;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 164,
  "name": "Verify Message Error when response is error",
  "description": "",
  "id": "test-api-search-weather-in-your-city;verify-message-error-when-response-is-error;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 122,
      "name": "@NAB_REQ_2.2"
    },
    {
      "line": 1,
      "name": "@searchWeather"
    }
  ]
});
formatter.step({
  "line": 124,
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
      "line": 125
    },
    {
      "cells": [
        "2",
        "city name not exists",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 126
    },
    {
      "cells": [
        "3",
        "",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 127
    },
    {
      "cells": [
        "4",
        "",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 128
    },
    {
      "cells": [
        "5",
        "BG",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 129
    },
    {
      "cells": [
        "6",
        "ha noi vn",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 130
    },
    {
      "cells": [
        "7",
        "ha noi, cn",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 131
    },
    {
      "cells": [
        "8",
        "Krungthepmahanakhon Amonrattanakosin Mahintharayutthaya Mahadilokphop Noppharatratchathaniburirom Udomratchaniwetmahasathan Amonphimanawatansathit Sakkathattiyawitsanukamprasit",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 132
    },
    {
      "cells": [
        "10",
        "hanoi",
        "appid not exists"
      ],
      "line": 133
    },
    {
      "cells": [
        "11",
        "hanoi",
        "57c1c22050f92b6d7a0a4c5716912bbe"
      ],
      "line": 134
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 136,
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
      "line": 137
    },
    {
      "cells": [
        "2",
        "404",
        "404",
        "city not found"
      ],
      "line": 138
    },
    {
      "cells": [
        "3",
        "400",
        "400",
        "Nothing to geocode"
      ],
      "line": 139
    },
    {
      "cells": [
        "4",
        "400",
        "400",
        "Nothing to geocode"
      ],
      "line": 140
    },
    {
      "cells": [
        "5",
        "404",
        "404",
        "city not found"
      ],
      "line": 141
    },
    {
      "cells": [
        "6",
        "404",
        "404",
        "city not found"
      ],
      "line": 142
    },
    {
      "cells": [
        "7",
        "404",
        "404",
        "city not found"
      ],
      "line": 143
    },
    {
      "cells": [
        "8",
        "404",
        "404",
        "city not found"
      ],
      "line": 144
    },
    {
      "cells": [
        "10",
        "401",
        "401",
        "Invalid API key. Please see http://openweathermap.org/faq#error401 for more info."
      ],
      "line": 145
    },
    {
      "cells": [
        "11",
        "401",
        "401",
        "Invalid API key. Please see http://openweathermap.org/faq#error401 for more info."
      ],
      "line": 146
    }
  ],
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.examples({
  "line": 165,
  "name": "",
  "description": "",
  "id": "test-api-search-weather-in-your-city;verify-message-error-when-response-is-error;",
  "rows": [
    {
      "cells": [
        "KEY"
      ],
      "line": 166,
      "id": "test-api-search-weather-in-your-city;verify-message-error-when-response-is-error;;1"
    },
    {
      "cells": [
        "8"
      ],
      "line": 167,
      "id": "test-api-search-weather-in-your-city;verify-message-error-when-response-is-error;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 167,
  "name": "Verify Message Error when response is error",
  "description": "",
  "id": "test-api-search-weather-in-your-city;verify-message-error-when-response-is-error;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 122,
      "name": "@NAB_REQ_2.2"
    },
    {
      "line": 1,
      "name": "@searchWeather"
    }
  ]
});
formatter.step({
  "line": 124,
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
      "line": 125
    },
    {
      "cells": [
        "2",
        "city name not exists",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 126
    },
    {
      "cells": [
        "3",
        "",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 127
    },
    {
      "cells": [
        "4",
        "",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 128
    },
    {
      "cells": [
        "5",
        "BG",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 129
    },
    {
      "cells": [
        "6",
        "ha noi vn",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 130
    },
    {
      "cells": [
        "7",
        "ha noi, cn",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 131
    },
    {
      "cells": [
        "8",
        "Krungthepmahanakhon Amonrattanakosin Mahintharayutthaya Mahadilokphop Noppharatratchathaniburirom Udomratchaniwetmahasathan Amonphimanawatansathit Sakkathattiyawitsanukamprasit",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 132
    },
    {
      "cells": [
        "10",
        "hanoi",
        "appid not exists"
      ],
      "line": 133
    },
    {
      "cells": [
        "11",
        "hanoi",
        "57c1c22050f92b6d7a0a4c5716912bbe"
      ],
      "line": 134
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 136,
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
      "line": 137
    },
    {
      "cells": [
        "2",
        "404",
        "404",
        "city not found"
      ],
      "line": 138
    },
    {
      "cells": [
        "3",
        "400",
        "400",
        "Nothing to geocode"
      ],
      "line": 139
    },
    {
      "cells": [
        "4",
        "400",
        "400",
        "Nothing to geocode"
      ],
      "line": 140
    },
    {
      "cells": [
        "5",
        "404",
        "404",
        "city not found"
      ],
      "line": 141
    },
    {
      "cells": [
        "6",
        "404",
        "404",
        "city not found"
      ],
      "line": 142
    },
    {
      "cells": [
        "7",
        "404",
        "404",
        "city not found"
      ],
      "line": 143
    },
    {
      "cells": [
        "8",
        "404",
        "404",
        "city not found"
      ],
      "line": 144
    },
    {
      "cells": [
        "10",
        "401",
        "401",
        "Invalid API key. Please see http://openweathermap.org/faq#error401 for more info."
      ],
      "line": 145
    },
    {
      "cells": [
        "11",
        "401",
        "401",
        "Invalid API key. Please see http://openweathermap.org/faq#error401 for more info."
      ],
      "line": 146
    }
  ],
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.examples({
  "line": 168,
  "name": "",
  "description": "",
  "id": "test-api-search-weather-in-your-city;verify-message-error-when-response-is-error;",
  "rows": [
    {
      "cells": [
        "KEY"
      ],
      "line": 169,
      "id": "test-api-search-weather-in-your-city;verify-message-error-when-response-is-error;;1"
    },
    {
      "cells": [
        "10"
      ],
      "line": 170,
      "id": "test-api-search-weather-in-your-city;verify-message-error-when-response-is-error;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 170,
  "name": "Verify Message Error when response is error",
  "description": "",
  "id": "test-api-search-weather-in-your-city;verify-message-error-when-response-is-error;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 122,
      "name": "@NAB_REQ_2.2"
    },
    {
      "line": 1,
      "name": "@searchWeather"
    }
  ]
});
formatter.step({
  "line": 124,
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
      "line": 125
    },
    {
      "cells": [
        "2",
        "city name not exists",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 126
    },
    {
      "cells": [
        "3",
        "",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 127
    },
    {
      "cells": [
        "4",
        "",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 128
    },
    {
      "cells": [
        "5",
        "BG",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 129
    },
    {
      "cells": [
        "6",
        "ha noi vn",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 130
    },
    {
      "cells": [
        "7",
        "ha noi, cn",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 131
    },
    {
      "cells": [
        "8",
        "Krungthepmahanakhon Amonrattanakosin Mahintharayutthaya Mahadilokphop Noppharatratchathaniburirom Udomratchaniwetmahasathan Amonphimanawatansathit Sakkathattiyawitsanukamprasit",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 132
    },
    {
      "cells": [
        "10",
        "hanoi",
        "appid not exists"
      ],
      "line": 133
    },
    {
      "cells": [
        "11",
        "hanoi",
        "57c1c22050f92b6d7a0a4c5716912bbe"
      ],
      "line": 134
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 136,
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
      "line": 137
    },
    {
      "cells": [
        "2",
        "404",
        "404",
        "city not found"
      ],
      "line": 138
    },
    {
      "cells": [
        "3",
        "400",
        "400",
        "Nothing to geocode"
      ],
      "line": 139
    },
    {
      "cells": [
        "4",
        "400",
        "400",
        "Nothing to geocode"
      ],
      "line": 140
    },
    {
      "cells": [
        "5",
        "404",
        "404",
        "city not found"
      ],
      "line": 141
    },
    {
      "cells": [
        "6",
        "404",
        "404",
        "city not found"
      ],
      "line": 142
    },
    {
      "cells": [
        "7",
        "404",
        "404",
        "city not found"
      ],
      "line": 143
    },
    {
      "cells": [
        "8",
        "404",
        "404",
        "city not found"
      ],
      "line": 144
    },
    {
      "cells": [
        "10",
        "401",
        "401",
        "Invalid API key. Please see http://openweathermap.org/faq#error401 for more info."
      ],
      "line": 145
    },
    {
      "cells": [
        "11",
        "401",
        "401",
        "Invalid API key. Please see http://openweathermap.org/faq#error401 for more info."
      ],
      "line": 146
    }
  ],
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.examples({
  "line": 171,
  "name": "",
  "description": "",
  "id": "test-api-search-weather-in-your-city;verify-message-error-when-response-is-error;",
  "rows": [
    {
      "cells": [
        "KEY"
      ],
      "line": 172,
      "id": "test-api-search-weather-in-your-city;verify-message-error-when-response-is-error;;1"
    },
    {
      "cells": [
        "11"
      ],
      "line": 173,
      "id": "test-api-search-weather-in-your-city;verify-message-error-when-response-is-error;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 173,
  "name": "Verify Message Error when response is error",
  "description": "",
  "id": "test-api-search-weather-in-your-city;verify-message-error-when-response-is-error;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 122,
      "name": "@NAB_REQ_2.2"
    },
    {
      "line": 1,
      "name": "@searchWeather"
    }
  ]
});
formatter.step({
  "line": 124,
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
      "line": 125
    },
    {
      "cells": [
        "2",
        "city name not exists",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 126
    },
    {
      "cells": [
        "3",
        "",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 127
    },
    {
      "cells": [
        "4",
        "",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 128
    },
    {
      "cells": [
        "5",
        "BG",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 129
    },
    {
      "cells": [
        "6",
        "ha noi vn",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 130
    },
    {
      "cells": [
        "7",
        "ha noi, cn",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 131
    },
    {
      "cells": [
        "8",
        "Krungthepmahanakhon Amonrattanakosin Mahintharayutthaya Mahadilokphop Noppharatratchathaniburirom Udomratchaniwetmahasathan Amonphimanawatansathit Sakkathattiyawitsanukamprasit",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 132
    },
    {
      "cells": [
        "10",
        "hanoi",
        "appid not exists"
      ],
      "line": 133
    },
    {
      "cells": [
        "11",
        "hanoi",
        "57c1c22050f92b6d7a0a4c5716912bbe"
      ],
      "line": 134
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 136,
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
      "line": 137
    },
    {
      "cells": [
        "2",
        "404",
        "404",
        "city not found"
      ],
      "line": 138
    },
    {
      "cells": [
        "3",
        "400",
        "400",
        "Nothing to geocode"
      ],
      "line": 139
    },
    {
      "cells": [
        "4",
        "400",
        "400",
        "Nothing to geocode"
      ],
      "line": 140
    },
    {
      "cells": [
        "5",
        "404",
        "404",
        "city not found"
      ],
      "line": 141
    },
    {
      "cells": [
        "6",
        "404",
        "404",
        "city not found"
      ],
      "line": 142
    },
    {
      "cells": [
        "7",
        "404",
        "404",
        "city not found"
      ],
      "line": 143
    },
    {
      "cells": [
        "8",
        "404",
        "404",
        "city not found"
      ],
      "line": 144
    },
    {
      "cells": [
        "10",
        "401",
        "401",
        "Invalid API key. Please see http://openweathermap.org/faq#error401 for more info."
      ],
      "line": 145
    },
    {
      "cells": [
        "11",
        "401",
        "401",
        "Invalid API key. Please see http://openweathermap.org/faq#error401 for more info."
      ],
      "line": 146
    }
  ],
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenarioOutline({
  "line": 176,
  "name": "Verify Content in Body when Response is 200",
  "description": "",
  "id": "test-api-search-weather-in-your-city;verify-content-in-body-when-response-is-200",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 177,
  "name": "user sends API SearchWeather request with information corresponding \"\u003cKEY\u003e\"",
  "rows": [
    {
      "cells": [
        "KEY",
        "city_name",
        "api_key"
      ],
      "line": 178
    },
    {
      "cells": [
        "12",
        "London",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 179
    },
    {
      "cells": [
        "13",
        "Tokyo",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 180
    },
    {
      "cells": [
        "14",
        "Thành phố hồ chí minh",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 181
    },
    {
      "cells": [
        "15",
        "Thai nguyen",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 182
    },
    {
      "cells": [
        "16",
        "上海",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 183
    },
    {
      "cells": [
        "17",
        "Chengdu",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 184
    },
    {
      "cells": [
        "18",
        "東京都",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 185
    },
    {
      "cells": [
        "19",
        "Nagoya",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 186
    },
    {
      "cells": [
        "20",
        "Hà Nội, VN",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 187
    },
    {
      "cells": [
        "21",
        "Hà Nam,",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 188
    },
    {
      "cells": [
        "22",
        "Bắc Giang, VN",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 189
    },
    {
      "cells": [
        "23",
        "Cần     Thơ",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 190
    },
    {
      "cells": [
        "24",
        "Vĩnh Long, VN",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 191
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 193,
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
      "line": 194
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
      "line": 195
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
      "line": 196
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
      "line": 197
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
      "line": 198
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
      "line": 199
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
      "line": 200
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
      "line": 201
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
      "line": 202
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
      "line": 203
    },
    {
      "cells": [
        "21",
        "200",
        "200",
        "",
        "Hà Nam",
        "VN"
      ],
      "line": 204
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
      "line": 205
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
      "line": 206
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
      "line": 207
    }
  ],
  "keyword": "Then "
});
formatter.examples({
  "line": 208,
  "name": "",
  "description": "",
  "id": "test-api-search-weather-in-your-city;verify-content-in-body-when-response-is-200;",
  "rows": [
    {
      "cells": [
        "KEY"
      ],
      "line": 209,
      "id": "test-api-search-weather-in-your-city;verify-content-in-body-when-response-is-200;;1"
    },
    {
      "cells": [
        "12"
      ],
      "line": 210,
      "id": "test-api-search-weather-in-your-city;verify-content-in-body-when-response-is-200;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 210,
  "name": "Verify Content in Body when Response is 200",
  "description": "",
  "id": "test-api-search-weather-in-your-city;verify-content-in-body-when-response-is-200;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@searchWeather"
    }
  ]
});
formatter.step({
  "line": 177,
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
      "line": 178
    },
    {
      "cells": [
        "12",
        "London",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 179
    },
    {
      "cells": [
        "13",
        "Tokyo",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 180
    },
    {
      "cells": [
        "14",
        "Thành phố hồ chí minh",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 181
    },
    {
      "cells": [
        "15",
        "Thai nguyen",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 182
    },
    {
      "cells": [
        "16",
        "上海",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 183
    },
    {
      "cells": [
        "17",
        "Chengdu",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 184
    },
    {
      "cells": [
        "18",
        "東京都",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 185
    },
    {
      "cells": [
        "19",
        "Nagoya",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 186
    },
    {
      "cells": [
        "20",
        "Hà Nội, VN",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 187
    },
    {
      "cells": [
        "21",
        "Hà Nam,",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 188
    },
    {
      "cells": [
        "22",
        "Bắc Giang, VN",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 189
    },
    {
      "cells": [
        "23",
        "Cần     Thơ",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 190
    },
    {
      "cells": [
        "24",
        "Vĩnh Long, VN",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 191
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 193,
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
      "line": 194
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
      "line": 195
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
      "line": 196
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
      "line": 197
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
      "line": 198
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
      "line": 199
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
      "line": 200
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
      "line": 201
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
      "line": 202
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
      "line": 203
    },
    {
      "cells": [
        "21",
        "200",
        "200",
        "",
        "Hà Nam",
        "VN"
      ],
      "line": 204
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
      "line": 205
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
      "line": 206
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
      "line": 207
    }
  ],
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.examples({
  "line": 211,
  "name": "",
  "description": "",
  "id": "test-api-search-weather-in-your-city;verify-content-in-body-when-response-is-200;",
  "rows": [
    {
      "cells": [
        "KEY"
      ],
      "line": 212,
      "id": "test-api-search-weather-in-your-city;verify-content-in-body-when-response-is-200;;1"
    },
    {
      "cells": [
        "13"
      ],
      "line": 213,
      "id": "test-api-search-weather-in-your-city;verify-content-in-body-when-response-is-200;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 213,
  "name": "Verify Content in Body when Response is 200",
  "description": "",
  "id": "test-api-search-weather-in-your-city;verify-content-in-body-when-response-is-200;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@searchWeather"
    }
  ]
});
formatter.step({
  "line": 177,
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
      "line": 178
    },
    {
      "cells": [
        "12",
        "London",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 179
    },
    {
      "cells": [
        "13",
        "Tokyo",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 180
    },
    {
      "cells": [
        "14",
        "Thành phố hồ chí minh",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 181
    },
    {
      "cells": [
        "15",
        "Thai nguyen",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 182
    },
    {
      "cells": [
        "16",
        "上海",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 183
    },
    {
      "cells": [
        "17",
        "Chengdu",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 184
    },
    {
      "cells": [
        "18",
        "東京都",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 185
    },
    {
      "cells": [
        "19",
        "Nagoya",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 186
    },
    {
      "cells": [
        "20",
        "Hà Nội, VN",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 187
    },
    {
      "cells": [
        "21",
        "Hà Nam,",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 188
    },
    {
      "cells": [
        "22",
        "Bắc Giang, VN",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 189
    },
    {
      "cells": [
        "23",
        "Cần     Thơ",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 190
    },
    {
      "cells": [
        "24",
        "Vĩnh Long, VN",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 191
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 193,
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
      "line": 194
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
      "line": 195
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
      "line": 196
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
      "line": 197
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
      "line": 198
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
      "line": 199
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
      "line": 200
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
      "line": 201
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
      "line": 202
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
      "line": 203
    },
    {
      "cells": [
        "21",
        "200",
        "200",
        "",
        "Hà Nam",
        "VN"
      ],
      "line": 204
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
      "line": 205
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
      "line": 206
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
      "line": 207
    }
  ],
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.examples({
  "line": 214,
  "name": "",
  "description": "",
  "id": "test-api-search-weather-in-your-city;verify-content-in-body-when-response-is-200;",
  "rows": [
    {
      "cells": [
        "KEY"
      ],
      "line": 215,
      "id": "test-api-search-weather-in-your-city;verify-content-in-body-when-response-is-200;;1"
    },
    {
      "cells": [
        "14"
      ],
      "line": 216,
      "id": "test-api-search-weather-in-your-city;verify-content-in-body-when-response-is-200;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 216,
  "name": "Verify Content in Body when Response is 200",
  "description": "",
  "id": "test-api-search-weather-in-your-city;verify-content-in-body-when-response-is-200;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@searchWeather"
    }
  ]
});
formatter.step({
  "line": 177,
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
      "line": 178
    },
    {
      "cells": [
        "12",
        "London",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 179
    },
    {
      "cells": [
        "13",
        "Tokyo",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 180
    },
    {
      "cells": [
        "14",
        "Thành phố hồ chí minh",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 181
    },
    {
      "cells": [
        "15",
        "Thai nguyen",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 182
    },
    {
      "cells": [
        "16",
        "上海",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 183
    },
    {
      "cells": [
        "17",
        "Chengdu",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 184
    },
    {
      "cells": [
        "18",
        "東京都",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 185
    },
    {
      "cells": [
        "19",
        "Nagoya",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 186
    },
    {
      "cells": [
        "20",
        "Hà Nội, VN",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 187
    },
    {
      "cells": [
        "21",
        "Hà Nam,",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 188
    },
    {
      "cells": [
        "22",
        "Bắc Giang, VN",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 189
    },
    {
      "cells": [
        "23",
        "Cần     Thơ",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 190
    },
    {
      "cells": [
        "24",
        "Vĩnh Long, VN",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 191
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 193,
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
      "line": 194
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
      "line": 195
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
      "line": 196
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
      "line": 197
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
      "line": 198
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
      "line": 199
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
      "line": 200
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
      "line": 201
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
      "line": 202
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
      "line": 203
    },
    {
      "cells": [
        "21",
        "200",
        "200",
        "",
        "Hà Nam",
        "VN"
      ],
      "line": 204
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
      "line": 205
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
      "line": 206
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
      "line": 207
    }
  ],
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.examples({
  "line": 217,
  "name": "",
  "description": "",
  "id": "test-api-search-weather-in-your-city;verify-content-in-body-when-response-is-200;",
  "rows": [
    {
      "cells": [
        "KEY"
      ],
      "line": 218,
      "id": "test-api-search-weather-in-your-city;verify-content-in-body-when-response-is-200;;1"
    },
    {
      "cells": [
        "15"
      ],
      "line": 219,
      "id": "test-api-search-weather-in-your-city;verify-content-in-body-when-response-is-200;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 219,
  "name": "Verify Content in Body when Response is 200",
  "description": "",
  "id": "test-api-search-weather-in-your-city;verify-content-in-body-when-response-is-200;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@searchWeather"
    }
  ]
});
formatter.step({
  "line": 177,
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
      "line": 178
    },
    {
      "cells": [
        "12",
        "London",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 179
    },
    {
      "cells": [
        "13",
        "Tokyo",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 180
    },
    {
      "cells": [
        "14",
        "Thành phố hồ chí minh",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 181
    },
    {
      "cells": [
        "15",
        "Thai nguyen",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 182
    },
    {
      "cells": [
        "16",
        "上海",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 183
    },
    {
      "cells": [
        "17",
        "Chengdu",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 184
    },
    {
      "cells": [
        "18",
        "東京都",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 185
    },
    {
      "cells": [
        "19",
        "Nagoya",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 186
    },
    {
      "cells": [
        "20",
        "Hà Nội, VN",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 187
    },
    {
      "cells": [
        "21",
        "Hà Nam,",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 188
    },
    {
      "cells": [
        "22",
        "Bắc Giang, VN",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 189
    },
    {
      "cells": [
        "23",
        "Cần     Thơ",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 190
    },
    {
      "cells": [
        "24",
        "Vĩnh Long, VN",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 191
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 193,
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
      "line": 194
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
      "line": 195
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
      "line": 196
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
      "line": 197
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
      "line": 198
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
      "line": 199
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
      "line": 200
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
      "line": 201
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
      "line": 202
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
      "line": 203
    },
    {
      "cells": [
        "21",
        "200",
        "200",
        "",
        "Hà Nam",
        "VN"
      ],
      "line": 204
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
      "line": 205
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
      "line": 206
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
      "line": 207
    }
  ],
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.examples({
  "line": 220,
  "name": "",
  "description": "",
  "id": "test-api-search-weather-in-your-city;verify-content-in-body-when-response-is-200;",
  "rows": [
    {
      "cells": [
        "KEY"
      ],
      "line": 221,
      "id": "test-api-search-weather-in-your-city;verify-content-in-body-when-response-is-200;;1"
    },
    {
      "cells": [
        "16"
      ],
      "line": 222,
      "id": "test-api-search-weather-in-your-city;verify-content-in-body-when-response-is-200;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 222,
  "name": "Verify Content in Body when Response is 200",
  "description": "",
  "id": "test-api-search-weather-in-your-city;verify-content-in-body-when-response-is-200;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@searchWeather"
    }
  ]
});
formatter.step({
  "line": 177,
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
      "line": 178
    },
    {
      "cells": [
        "12",
        "London",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 179
    },
    {
      "cells": [
        "13",
        "Tokyo",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 180
    },
    {
      "cells": [
        "14",
        "Thành phố hồ chí minh",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 181
    },
    {
      "cells": [
        "15",
        "Thai nguyen",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 182
    },
    {
      "cells": [
        "16",
        "上海",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 183
    },
    {
      "cells": [
        "17",
        "Chengdu",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 184
    },
    {
      "cells": [
        "18",
        "東京都",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 185
    },
    {
      "cells": [
        "19",
        "Nagoya",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 186
    },
    {
      "cells": [
        "20",
        "Hà Nội, VN",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 187
    },
    {
      "cells": [
        "21",
        "Hà Nam,",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 188
    },
    {
      "cells": [
        "22",
        "Bắc Giang, VN",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 189
    },
    {
      "cells": [
        "23",
        "Cần     Thơ",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 190
    },
    {
      "cells": [
        "24",
        "Vĩnh Long, VN",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 191
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 193,
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
      "line": 194
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
      "line": 195
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
      "line": 196
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
      "line": 197
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
      "line": 198
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
      "line": 199
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
      "line": 200
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
      "line": 201
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
      "line": 202
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
      "line": 203
    },
    {
      "cells": [
        "21",
        "200",
        "200",
        "",
        "Hà Nam",
        "VN"
      ],
      "line": 204
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
      "line": 205
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
      "line": 206
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
      "line": 207
    }
  ],
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.examples({
  "line": 223,
  "name": "",
  "description": "",
  "id": "test-api-search-weather-in-your-city;verify-content-in-body-when-response-is-200;",
  "rows": [
    {
      "cells": [
        "KEY"
      ],
      "line": 224,
      "id": "test-api-search-weather-in-your-city;verify-content-in-body-when-response-is-200;;1"
    },
    {
      "cells": [
        "17"
      ],
      "line": 225,
      "id": "test-api-search-weather-in-your-city;verify-content-in-body-when-response-is-200;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 225,
  "name": "Verify Content in Body when Response is 200",
  "description": "",
  "id": "test-api-search-weather-in-your-city;verify-content-in-body-when-response-is-200;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@searchWeather"
    }
  ]
});
formatter.step({
  "line": 177,
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
      "line": 178
    },
    {
      "cells": [
        "12",
        "London",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 179
    },
    {
      "cells": [
        "13",
        "Tokyo",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 180
    },
    {
      "cells": [
        "14",
        "Thành phố hồ chí minh",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 181
    },
    {
      "cells": [
        "15",
        "Thai nguyen",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 182
    },
    {
      "cells": [
        "16",
        "上海",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 183
    },
    {
      "cells": [
        "17",
        "Chengdu",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 184
    },
    {
      "cells": [
        "18",
        "東京都",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 185
    },
    {
      "cells": [
        "19",
        "Nagoya",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 186
    },
    {
      "cells": [
        "20",
        "Hà Nội, VN",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 187
    },
    {
      "cells": [
        "21",
        "Hà Nam,",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 188
    },
    {
      "cells": [
        "22",
        "Bắc Giang, VN",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 189
    },
    {
      "cells": [
        "23",
        "Cần     Thơ",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 190
    },
    {
      "cells": [
        "24",
        "Vĩnh Long, VN",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 191
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 193,
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
      "line": 194
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
      "line": 195
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
      "line": 196
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
      "line": 197
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
      "line": 198
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
      "line": 199
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
      "line": 200
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
      "line": 201
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
      "line": 202
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
      "line": 203
    },
    {
      "cells": [
        "21",
        "200",
        "200",
        "",
        "Hà Nam",
        "VN"
      ],
      "line": 204
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
      "line": 205
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
      "line": 206
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
      "line": 207
    }
  ],
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.examples({
  "line": 226,
  "name": "",
  "description": "",
  "id": "test-api-search-weather-in-your-city;verify-content-in-body-when-response-is-200;",
  "rows": [
    {
      "cells": [
        "KEY"
      ],
      "line": 227,
      "id": "test-api-search-weather-in-your-city;verify-content-in-body-when-response-is-200;;1"
    },
    {
      "cells": [
        "18"
      ],
      "line": 228,
      "id": "test-api-search-weather-in-your-city;verify-content-in-body-when-response-is-200;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 228,
  "name": "Verify Content in Body when Response is 200",
  "description": "",
  "id": "test-api-search-weather-in-your-city;verify-content-in-body-when-response-is-200;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@searchWeather"
    }
  ]
});
formatter.step({
  "line": 177,
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
      "line": 178
    },
    {
      "cells": [
        "12",
        "London",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 179
    },
    {
      "cells": [
        "13",
        "Tokyo",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 180
    },
    {
      "cells": [
        "14",
        "Thành phố hồ chí minh",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 181
    },
    {
      "cells": [
        "15",
        "Thai nguyen",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 182
    },
    {
      "cells": [
        "16",
        "上海",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 183
    },
    {
      "cells": [
        "17",
        "Chengdu",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 184
    },
    {
      "cells": [
        "18",
        "東京都",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 185
    },
    {
      "cells": [
        "19",
        "Nagoya",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 186
    },
    {
      "cells": [
        "20",
        "Hà Nội, VN",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 187
    },
    {
      "cells": [
        "21",
        "Hà Nam,",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 188
    },
    {
      "cells": [
        "22",
        "Bắc Giang, VN",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 189
    },
    {
      "cells": [
        "23",
        "Cần     Thơ",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 190
    },
    {
      "cells": [
        "24",
        "Vĩnh Long, VN",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 191
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 193,
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
      "line": 194
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
      "line": 195
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
      "line": 196
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
      "line": 197
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
      "line": 198
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
      "line": 199
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
      "line": 200
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
      "line": 201
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
      "line": 202
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
      "line": 203
    },
    {
      "cells": [
        "21",
        "200",
        "200",
        "",
        "Hà Nam",
        "VN"
      ],
      "line": 204
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
      "line": 205
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
      "line": 206
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
      "line": 207
    }
  ],
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.examples({
  "line": 229,
  "name": "",
  "description": "",
  "id": "test-api-search-weather-in-your-city;verify-content-in-body-when-response-is-200;",
  "rows": [
    {
      "cells": [
        "KEY"
      ],
      "line": 230,
      "id": "test-api-search-weather-in-your-city;verify-content-in-body-when-response-is-200;;1"
    },
    {
      "cells": [
        "19"
      ],
      "line": 231,
      "id": "test-api-search-weather-in-your-city;verify-content-in-body-when-response-is-200;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 231,
  "name": "Verify Content in Body when Response is 200",
  "description": "",
  "id": "test-api-search-weather-in-your-city;verify-content-in-body-when-response-is-200;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@searchWeather"
    }
  ]
});
formatter.step({
  "line": 177,
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
      "line": 178
    },
    {
      "cells": [
        "12",
        "London",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 179
    },
    {
      "cells": [
        "13",
        "Tokyo",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 180
    },
    {
      "cells": [
        "14",
        "Thành phố hồ chí minh",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 181
    },
    {
      "cells": [
        "15",
        "Thai nguyen",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 182
    },
    {
      "cells": [
        "16",
        "上海",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 183
    },
    {
      "cells": [
        "17",
        "Chengdu",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 184
    },
    {
      "cells": [
        "18",
        "東京都",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 185
    },
    {
      "cells": [
        "19",
        "Nagoya",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 186
    },
    {
      "cells": [
        "20",
        "Hà Nội, VN",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 187
    },
    {
      "cells": [
        "21",
        "Hà Nam,",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 188
    },
    {
      "cells": [
        "22",
        "Bắc Giang, VN",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 189
    },
    {
      "cells": [
        "23",
        "Cần     Thơ",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 190
    },
    {
      "cells": [
        "24",
        "Vĩnh Long, VN",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 191
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 193,
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
      "line": 194
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
      "line": 195
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
      "line": 196
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
      "line": 197
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
      "line": 198
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
      "line": 199
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
      "line": 200
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
      "line": 201
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
      "line": 202
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
      "line": 203
    },
    {
      "cells": [
        "21",
        "200",
        "200",
        "",
        "Hà Nam",
        "VN"
      ],
      "line": 204
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
      "line": 205
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
      "line": 206
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
      "line": 207
    }
  ],
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.examples({
  "line": 232,
  "name": "",
  "description": "",
  "id": "test-api-search-weather-in-your-city;verify-content-in-body-when-response-is-200;",
  "rows": [
    {
      "cells": [
        "KEY"
      ],
      "line": 233,
      "id": "test-api-search-weather-in-your-city;verify-content-in-body-when-response-is-200;;1"
    },
    {
      "cells": [
        "20"
      ],
      "line": 234,
      "id": "test-api-search-weather-in-your-city;verify-content-in-body-when-response-is-200;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 234,
  "name": "Verify Content in Body when Response is 200",
  "description": "",
  "id": "test-api-search-weather-in-your-city;verify-content-in-body-when-response-is-200;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@searchWeather"
    }
  ]
});
formatter.step({
  "line": 177,
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
      "line": 178
    },
    {
      "cells": [
        "12",
        "London",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 179
    },
    {
      "cells": [
        "13",
        "Tokyo",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 180
    },
    {
      "cells": [
        "14",
        "Thành phố hồ chí minh",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 181
    },
    {
      "cells": [
        "15",
        "Thai nguyen",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 182
    },
    {
      "cells": [
        "16",
        "上海",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 183
    },
    {
      "cells": [
        "17",
        "Chengdu",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 184
    },
    {
      "cells": [
        "18",
        "東京都",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 185
    },
    {
      "cells": [
        "19",
        "Nagoya",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 186
    },
    {
      "cells": [
        "20",
        "Hà Nội, VN",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 187
    },
    {
      "cells": [
        "21",
        "Hà Nam,",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 188
    },
    {
      "cells": [
        "22",
        "Bắc Giang, VN",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 189
    },
    {
      "cells": [
        "23",
        "Cần     Thơ",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 190
    },
    {
      "cells": [
        "24",
        "Vĩnh Long, VN",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 191
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 193,
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
      "line": 194
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
      "line": 195
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
      "line": 196
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
      "line": 197
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
      "line": 198
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
      "line": 199
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
      "line": 200
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
      "line": 201
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
      "line": 202
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
      "line": 203
    },
    {
      "cells": [
        "21",
        "200",
        "200",
        "",
        "Hà Nam",
        "VN"
      ],
      "line": 204
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
      "line": 205
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
      "line": 206
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
      "line": 207
    }
  ],
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.examples({
  "line": 235,
  "name": "",
  "description": "",
  "id": "test-api-search-weather-in-your-city;verify-content-in-body-when-response-is-200;",
  "rows": [
    {
      "cells": [
        "KEY"
      ],
      "line": 236,
      "id": "test-api-search-weather-in-your-city;verify-content-in-body-when-response-is-200;;1"
    },
    {
      "cells": [
        "21"
      ],
      "line": 237,
      "id": "test-api-search-weather-in-your-city;verify-content-in-body-when-response-is-200;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 237,
  "name": "Verify Content in Body when Response is 200",
  "description": "",
  "id": "test-api-search-weather-in-your-city;verify-content-in-body-when-response-is-200;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@searchWeather"
    }
  ]
});
formatter.step({
  "line": 177,
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
      "line": 178
    },
    {
      "cells": [
        "12",
        "London",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 179
    },
    {
      "cells": [
        "13",
        "Tokyo",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 180
    },
    {
      "cells": [
        "14",
        "Thành phố hồ chí minh",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 181
    },
    {
      "cells": [
        "15",
        "Thai nguyen",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 182
    },
    {
      "cells": [
        "16",
        "上海",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 183
    },
    {
      "cells": [
        "17",
        "Chengdu",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 184
    },
    {
      "cells": [
        "18",
        "東京都",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 185
    },
    {
      "cells": [
        "19",
        "Nagoya",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 186
    },
    {
      "cells": [
        "20",
        "Hà Nội, VN",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 187
    },
    {
      "cells": [
        "21",
        "Hà Nam,",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 188
    },
    {
      "cells": [
        "22",
        "Bắc Giang, VN",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 189
    },
    {
      "cells": [
        "23",
        "Cần     Thơ",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 190
    },
    {
      "cells": [
        "24",
        "Vĩnh Long, VN",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 191
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 193,
  "name": "user check city name and country for response successfully with information corresponding \"21\"",
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
      "line": 194
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
      "line": 195
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
      "line": 196
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
      "line": 197
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
      "line": 198
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
      "line": 199
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
      "line": 200
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
      "line": 201
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
      "line": 202
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
      "line": 203
    },
    {
      "cells": [
        "21",
        "200",
        "200",
        "",
        "Hà Nam",
        "VN"
      ],
      "line": 204
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
      "line": 205
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
      "line": 206
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
      "line": 207
    }
  ],
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.examples({
  "line": 238,
  "name": "",
  "description": "",
  "id": "test-api-search-weather-in-your-city;verify-content-in-body-when-response-is-200;",
  "rows": [
    {
      "cells": [
        "KEY"
      ],
      "line": 239,
      "id": "test-api-search-weather-in-your-city;verify-content-in-body-when-response-is-200;;1"
    },
    {
      "cells": [
        "22"
      ],
      "line": 240,
      "id": "test-api-search-weather-in-your-city;verify-content-in-body-when-response-is-200;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 240,
  "name": "Verify Content in Body when Response is 200",
  "description": "",
  "id": "test-api-search-weather-in-your-city;verify-content-in-body-when-response-is-200;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@searchWeather"
    }
  ]
});
formatter.step({
  "line": 177,
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
      "line": 178
    },
    {
      "cells": [
        "12",
        "London",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 179
    },
    {
      "cells": [
        "13",
        "Tokyo",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 180
    },
    {
      "cells": [
        "14",
        "Thành phố hồ chí minh",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 181
    },
    {
      "cells": [
        "15",
        "Thai nguyen",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 182
    },
    {
      "cells": [
        "16",
        "上海",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 183
    },
    {
      "cells": [
        "17",
        "Chengdu",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 184
    },
    {
      "cells": [
        "18",
        "東京都",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 185
    },
    {
      "cells": [
        "19",
        "Nagoya",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 186
    },
    {
      "cells": [
        "20",
        "Hà Nội, VN",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 187
    },
    {
      "cells": [
        "21",
        "Hà Nam,",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 188
    },
    {
      "cells": [
        "22",
        "Bắc Giang, VN",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 189
    },
    {
      "cells": [
        "23",
        "Cần     Thơ",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 190
    },
    {
      "cells": [
        "24",
        "Vĩnh Long, VN",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 191
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 193,
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
      "line": 194
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
      "line": 195
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
      "line": 196
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
      "line": 197
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
      "line": 198
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
      "line": 199
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
      "line": 200
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
      "line": 201
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
      "line": 202
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
      "line": 203
    },
    {
      "cells": [
        "21",
        "200",
        "200",
        "",
        "Hà Nam",
        "VN"
      ],
      "line": 204
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
      "line": 205
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
      "line": 206
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
      "line": 207
    }
  ],
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.examples({
  "line": 241,
  "name": "",
  "description": "",
  "id": "test-api-search-weather-in-your-city;verify-content-in-body-when-response-is-200;",
  "rows": [
    {
      "cells": [
        "KEY"
      ],
      "line": 242,
      "id": "test-api-search-weather-in-your-city;verify-content-in-body-when-response-is-200;;1"
    },
    {
      "cells": [
        "23"
      ],
      "line": 243,
      "id": "test-api-search-weather-in-your-city;verify-content-in-body-when-response-is-200;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 243,
  "name": "Verify Content in Body when Response is 200",
  "description": "",
  "id": "test-api-search-weather-in-your-city;verify-content-in-body-when-response-is-200;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@searchWeather"
    }
  ]
});
formatter.step({
  "line": 177,
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
      "line": 178
    },
    {
      "cells": [
        "12",
        "London",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 179
    },
    {
      "cells": [
        "13",
        "Tokyo",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 180
    },
    {
      "cells": [
        "14",
        "Thành phố hồ chí minh",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 181
    },
    {
      "cells": [
        "15",
        "Thai nguyen",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 182
    },
    {
      "cells": [
        "16",
        "上海",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 183
    },
    {
      "cells": [
        "17",
        "Chengdu",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 184
    },
    {
      "cells": [
        "18",
        "東京都",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 185
    },
    {
      "cells": [
        "19",
        "Nagoya",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 186
    },
    {
      "cells": [
        "20",
        "Hà Nội, VN",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 187
    },
    {
      "cells": [
        "21",
        "Hà Nam,",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 188
    },
    {
      "cells": [
        "22",
        "Bắc Giang, VN",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 189
    },
    {
      "cells": [
        "23",
        "Cần     Thơ",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 190
    },
    {
      "cells": [
        "24",
        "Vĩnh Long, VN",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 191
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 193,
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
      "line": 194
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
      "line": 195
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
      "line": 196
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
      "line": 197
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
      "line": 198
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
      "line": 199
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
      "line": 200
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
      "line": 201
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
      "line": 202
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
      "line": 203
    },
    {
      "cells": [
        "21",
        "200",
        "200",
        "",
        "Hà Nam",
        "VN"
      ],
      "line": 204
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
      "line": 205
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
      "line": 206
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
      "line": 207
    }
  ],
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.examples({
  "line": 244,
  "name": "",
  "description": "",
  "id": "test-api-search-weather-in-your-city;verify-content-in-body-when-response-is-200;",
  "rows": [
    {
      "cells": [
        "KEY"
      ],
      "line": 245,
      "id": "test-api-search-weather-in-your-city;verify-content-in-body-when-response-is-200;;1"
    },
    {
      "cells": [
        "24"
      ],
      "line": 246,
      "id": "test-api-search-weather-in-your-city;verify-content-in-body-when-response-is-200;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 246,
  "name": "Verify Content in Body when Response is 200",
  "description": "",
  "id": "test-api-search-weather-in-your-city;verify-content-in-body-when-response-is-200;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@searchWeather"
    }
  ]
});
formatter.step({
  "line": 177,
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
      "line": 178
    },
    {
      "cells": [
        "12",
        "London",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 179
    },
    {
      "cells": [
        "13",
        "Tokyo",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 180
    },
    {
      "cells": [
        "14",
        "Thành phố hồ chí minh",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 181
    },
    {
      "cells": [
        "15",
        "Thai nguyen",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 182
    },
    {
      "cells": [
        "16",
        "上海",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 183
    },
    {
      "cells": [
        "17",
        "Chengdu",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 184
    },
    {
      "cells": [
        "18",
        "東京都",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 185
    },
    {
      "cells": [
        "19",
        "Nagoya",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 186
    },
    {
      "cells": [
        "20",
        "Hà Nội, VN",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 187
    },
    {
      "cells": [
        "21",
        "Hà Nam,",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 188
    },
    {
      "cells": [
        "22",
        "Bắc Giang, VN",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 189
    },
    {
      "cells": [
        "23",
        "Cần     Thơ",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 190
    },
    {
      "cells": [
        "24",
        "Vĩnh Long, VN",
        "cc0fffc8405efdadca37749bbc586e41"
      ],
      "line": 191
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 193,
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
      "line": 194
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
      "line": 195
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
      "line": 196
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
      "line": 197
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
      "line": 198
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
      "line": 199
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
      "line": 200
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
      "line": 201
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
      "line": 202
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
      "line": 203
    },
    {
      "cells": [
        "21",
        "200",
        "200",
        "",
        "Hà Nam",
        "VN"
      ],
      "line": 204
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
      "line": 205
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
      "line": 206
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
      "line": 207
    }
  ],
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});