package com.pekall.test.mdm.support.service;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import com.pekall.test.mdm.support.util.CaptureScreenshot;


public class SystemSetManager {
	private static SystemSetManager instance;
	private WebDriver driver = Service.getInstance(MyDriver.USE);
	
	public static SystemSetManager getInstance(){
		if(instance == null){
			instance = new SystemSetManager();
		}
		return instance;
	}
	
	public void gotoEmailConfig() throws InterruptedException{
		Thread.sleep(1000);
		driver.findElement(By.xpath("/html/body/div/div[3]/ul/li[8]/div[@id='setting']")).click();
		driver.switchTo().frame("main_container");
		Thread.sleep(1000);
		driver.findElement(By.id("email_setting")).click();
	
	}
	
	public void setEmail(String name,String email_host,String email_port,String email_email,String email_password) throws InterruptedException{
		if(name!=null){
			WebElement element = driver.findElement(By.id("email_username"));
			element.clear();
			element.sendKeys(name);
		}
		
		if(email_host!=null){
			WebElement element = driver.findElement(By.id("email_host"));
			element.clear();
			element.sendKeys(email_host);
		}
		
		if(email_port!=null){
			WebElement element = driver.findElement(By.id("email_port"));
			element.clear();
			element.sendKeys(email_port);
		}
		if(email_email!=null){
			WebElement element = driver.findElement(By.id("email_email"));
			element.clear();
			element.sendKeys(email_email);
		}
		
		if(email_password!=null){
			WebElement element = driver.findElement(By.id("email_password"));
			element.clear();
			element.sendKeys(email_password);
		}
		
		driver.findElement(By.id("email_modify")).click();
		Thread.sleep(1000);
	}
}
