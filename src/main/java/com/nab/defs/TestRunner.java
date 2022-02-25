package com.nab.defs;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;
//src/test/java/features
@CucumberOptions(features = {"features"}, glue = "steps", plugin = {"pretty", "html:target/cucumber-reports"})
public class TestRunner extends AbstractTestNGCucumberTests {
}
