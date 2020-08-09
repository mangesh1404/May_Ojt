$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "JBK offline WebSite Test",
  "description": "",
  "id": "jbk-offline-website-test",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 8,
  "name": "login Test",
  "description": "",
  "id": "jbk-offline-website-test;login-test",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "user enters \"\u003cuname\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "user should be on home page",
  "keyword": "Then "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "jbk-offline-website-test;login-test;",
  "rows": [
    {
      "cells": [
        "uname",
        "password"
      ],
      "line": 15,
      "id": "jbk-offline-website-test;login-test;;1"
    },
    {
      "cells": [
        "kiran@gmail.com",
        "123456"
      ],
      "line": 16,
      "id": "jbk-offline-website-test;login-test;;2"
    },
    {
      "cells": [
        "mangesh",
        "12345"
      ],
      "line": 17,
      "id": "jbk-offline-website-test;login-test;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 8450265300,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "user enter \"file:///C:/Users/Administrator/Desktop/Offline%20Website/Offline%20Website/index.html\"",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "file:///C:/Users/Administrator/Desktop/Offline%20Website/Offline%20Website/index.html",
      "offset": 12
    }
  ],
  "location": "LoginStepDef.user_enter(String)"
});
formatter.result({
  "duration": 2960162500,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "login Test",
  "description": "",
  "id": "jbk-offline-website-test;login-test;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "user enters \"kiran@gmail.com\" and \"123456\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "user should be on home page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "kiran@gmail.com",
      "offset": 13
    },
    {
      "val": "123456",
      "offset": 35
    }
  ],
  "location": "LoginStepDef.user_enters_and(String,String)"
});
formatter.result({
  "duration": 2779488700,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.user_should_be_on_home_page()"
});
formatter.result({
  "duration": 39579100,
  "status": "passed"
});
formatter.after({
  "duration": 2276085300,
  "status": "passed"
});
formatter.before({
  "duration": 3355013800,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "user enter \"file:///C:/Users/Administrator/Desktop/Offline%20Website/Offline%20Website/index.html\"",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "file:///C:/Users/Administrator/Desktop/Offline%20Website/Offline%20Website/index.html",
      "offset": 12
    }
  ],
  "location": "LoginStepDef.user_enter(String)"
});
formatter.result({
  "duration": 2699552500,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "login Test",
  "description": "",
  "id": "jbk-offline-website-test;login-test;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "user enters \"mangesh\" and \"12345\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "user should be on home page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "mangesh",
      "offset": 13
    },
    {
      "val": "12345",
      "offset": 27
    }
  ],
  "location": "LoginStepDef.user_enters_and(String,String)"
});
formatter.result({
  "duration": 687638200,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.user_should_be_on_home_page()"
});
formatter.result({
  "duration": 18059500,
  "error_message": "org.junit.ComparisonFailure: expected:\u003cJavaByKiran | [Dashboard]\u003e but was:\u003cJavaByKiran | [Log in]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat com.stepdefs.LoginStepDef.user_should_be_on_home_page(LoginStepDef.java:48)\r\n\tat ✽.Then user should be on home page(login.feature:11)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 2554365200,
  "status": "passed"
});
});