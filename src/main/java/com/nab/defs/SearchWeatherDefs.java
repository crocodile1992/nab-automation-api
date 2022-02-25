package com.nab.defs;

import com.nab.steps.SearchWeatherSteps;
import com.nab.utilities.RestAssuredExtension;
import com.nab.utilities.Utilities;
import cucumber.api.DataTable;
import cucumber.api.PendingException;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.restassured.response.Response;
import io.restassured.response.ResponseOptions;

import net.thucydides.core.annotations.Steps;
import org.json.JSONObject;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class SearchWeatherDefs {
    private Response rest;
    @Steps
    SearchWeatherSteps searchWeatherSteps = new SearchWeatherSteps();

    @When("^user sends API SearchWeather request with information corresponding \"([^\"]*)\"$")
    public void userSendsAPISearchWeatherRequestWithInformationCorresponding(String dataKey, DataTable table) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
//        JSONObject requestBody = new JSONObject();
        rest = searchWeatherSteps.callSearchWeatherWithParamsQandAppid(dataKey, table);

    }

    @Then("^user check response code, response body with information corresponding \"([^\"]*)\"$")
    public void userCheckResponseCodeResponseBodyWithInformationCorresponding(String dataKey, DataTable table) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
//        throw new PendingException();
        searchWeatherSteps.validateResponseCodeAndResponseBody(rest, dataKey, table);

    }

    @Then("^user check message in response body when response fail with information corresponding \"([^\"]*)\"$")
    public void userCheckMessageInResponseBodyWhenResponseFailWithInformationCorresponding(String dataKey, DataTable table) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
//        throw new PendingException();
        searchWeatherSteps.validateMessageError(rest, dataKey, table);
        System.out.println("Dang check message error");
    }

    @Then("^user check city name and country for response successfully with information corresponding \"([^\"]*)\"$")
    public void userCheckCityNameAndCountryForResponseSuccessfullyWithInformationCorresponding(String dataKey, DataTable table) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
//        throw new PendingException();
        System.out.println("dang check city name and country for response is success");
        searchWeatherSteps.validateCityNameAndCountry(rest, dataKey, table);
    }
}
