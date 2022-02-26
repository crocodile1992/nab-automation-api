package steps;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;


@CucumberOptions(features = {"src/test/java/features"}, glue = "steps", plugin = {"pretty", "html:target/cucumber-reports"}, monochrome = true,
        tags={"@searchWeather"},dryRun = false)
public class TestRunner extends AbstractTestNGCucumberTests {
}
