package com.utils;

import java.io.FileInputStream;
import java.util.Properties;

public class ReadProperty {
	FileInputStream fis=null;
	Properties prop=null;
	
	
	public String getProperty(String key) throws Exception {
		fis=new FileInputStream(System.getProperty("user.dir")+"/src/main/resources/config.properties");
		prop=new Properties();
		prop.load(fis);
		 String data= prop.getProperty(key);
		 return data;
	}
	
}
