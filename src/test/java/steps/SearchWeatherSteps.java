package steps;

import cucumber.api.DataTable;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.restassured.response.Response;

import net.thucydides.core.annotations.Steps;

public class SearchWeatherSteps {
    private Response rest;
    @Steps
    com.nab.defs.SearchWeatherDefs searchWeatherSteps = new com.nab.defs.SearchWeatherDefs();

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

    }

    @Then("^user check city name and country for response successfully with information corresponding \"([^\"]*)\"$")
    public void userCheckCityNameAndCountryForResponseSuccessfullyWithInformationCorresponding(String dataKey, DataTable table) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
//        throw new PendingException();
        searchWeatherSteps.validateCityNameAndCountry(rest, dataKey, table);
    }
}
