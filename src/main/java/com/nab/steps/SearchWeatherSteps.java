package com.nab.steps;

import com.nab.defs.SearchWeatherDefs;
import com.nab.utilities.RestAssuredExtension;
import cucumber.api.DataTable;

import io.restassured.response.Response;

import net.thucydides.core.annotations.Step;

import java.util.HashMap;

import static org.hamcrest.MatcherAssert.assertThat;

public class SearchWeatherSteps {
    public SearchWeatherSteps() {

    }

    @Step("call api search weather rest with the params are q and appid")
    public Response callSearchWeatherWithParamsQandAppid(String dataKey, DataTable table) {
        HashMap<String, String> params = new HashMap<>();

        for (int i = 1; i < table.raw().size(); i++) {
            if (table.raw().get(i).get(0).equalsIgnoreCase(dataKey)) {
                params.put("q", table.raw().get(i).get(1));
                params.put("appid", table.raw().get(i).get(2));
                System.out.println(table.raw().get(i).get(0) + table.raw().get(i).get(1) + table.raw().get(i).get(2));
            }

        }

        Response response = (Response) new RestAssuredExtension().GetRequest("/data/2.5/weather", params);
        response.thenReturn().then().log().all();
        return response;
    }

    @Step("user check response code, response body for request have 2 params q and appid")
    public void validateResponseCodeAndResponseBody(Response response, String dataKey, DataTable table) {
        HashMap<String, String> params = new HashMap<>();

        for (int i = 1; i < table.raw().size(); i++) {
            if (table.raw().get(i).get(0).equalsIgnoreCase(dataKey)) {

                Integer responseCodeExpected = new Integer(table.raw().get(i).get(1));
                assertThat("Status Code is Valid", new Integer(response.getStatusCode()).equals(responseCodeExpected));
                String codResponseExpected = table.raw().get(i).get(2);
                assertThat("Value Cod in Response Body is Valid", response.jsonPath().get("cod").toString().equals(codResponseExpected));

            }

        }

    }

    @Step("user check message error when request have 2 params q and appid")
    public void validateMessageError(Response response, String dataKey, DataTable table) {
        HashMap<String, String> params = new HashMap<>();

        for (int i = 1; i < table.raw().size(); i++) {
            if (table.raw().get(i).get(0).equalsIgnoreCase(dataKey)) {

                String messageErrorExpected = table.raw().get(i).get(3);
                assertThat("Message Error in Response Body is Valid", response.jsonPath().get("message").equals(messageErrorExpected));
            }

        }

    }

    @Step("user check city name and country in response body when request have 2 params q and appid")
    public void validateCityNameAndCountry(Response response, String dataKey, DataTable table) {
        HashMap<String, String> params = new HashMap<>();

        for (int i = 1; i < table.raw().size(); i++) {
            if (table.raw().get(i).get(0).equalsIgnoreCase(dataKey)) {

                String cityNameExpected = table.raw().get(i).get(4);

                assertThat("City Name in Response Body is Valid", response.jsonPath().get("name").equals(cityNameExpected));
                String countryExpected = table.raw().get(i).get(5);
                assertThat("Country in Response Body is Valid", response.jsonPath().get("sys.country").equals(countryExpected));
            }

        }

    }
}
