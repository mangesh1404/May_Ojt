Feature: JBK offline WebSite Test


Background:
Given user enter "file:///C:/Users/Administrator/Desktop/Offline%20Website/Offline%20Website/index.html"


Scenario Outline: login Test

When user enters "<uname>" and "<password>"
Then user should be on home page

Examples:

	|uname          |password |
	|kiran@gmail.com|123456   |
	|mangesh		|12345    |