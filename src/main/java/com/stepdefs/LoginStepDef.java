package com.stepdefs;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import com.utils.ReadProperty;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;


public class LoginStepDef {
		WebDriver driver;
		ReadProperty rp=new ReadProperty();
		
		@Before
		public void setUp() {
			 System.setProperty("webdriver.chrome.driver", "C:/chromedriver.exe");
			 driver= new ChromeDriver();
		}
		
		
		@Given("^user enter \"([^\"]*)\"$")
		public void user_enter(String url) throws Throwable {
		    driver.get(url);
		}

		@When("^user enters \"([^\"]*)\" and \"([^\"]*)\"$")
		public void user_enters_and(String uname, String pass) throws Throwable {
			
			driver.findElement(By.id(rp.getProperty("U_id"))).sendKeys(uname);
			driver.findElement(By.id(rp.getProperty("P_id"))).sendKeys(pass);
			driver.findElement(By.xpath(rp.getProperty("Login_xpath"))).click();
			
		}
	@Then("^user should be on home page$")
	public void user_should_be_on_home_page() throws Throwable {
	    
		Assert.assertEquals("JavaByKiran | Dashboard", driver.getTitle());
	}
	
}
