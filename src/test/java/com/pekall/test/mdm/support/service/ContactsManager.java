package com.pekall.test.mdm.support.service;

import java.util.List;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import com.pekall.test.mdm.support.util.MyAssert;
import com.pekall.test.mdm.support.util.WebInfos;

public class ContactsManager {
	private static ContactsManager instance;
	private WebDriver driver = Service.getInstance(MyDriver.USE);
	
	public static ContactsManager getInstance(){
		if(instance == null){
			instance = new ContactsManager();
		}
		return instance;
	}

	public void gotoContactsList() throws InterruptedException {
		Thread.sleep(1000);
		driver.findElement(By.xpath("/html/body/div/div[3]/ul/li[7]/div[@id='contacts']")).click();
		driver.switchTo().frame("main_container");
	}
	
	public void addContacts(String name,String path) throws InterruptedException{
		if(name!=null){
			driver.findElement(By.id("contacts_name")).sendKeys(name);
		}
		driver.findElement(By.id("input_file")).sendKeys(path);
		Thread.sleep(1000);
		driver.findElement(By.id("upload")).click();
		Thread.sleep(1000);
	}
	
	public void selectContacts(List<String> contactsList){
		if(contactsList!=null){
			for(String contacts_name:contactsList)
			{
				if(!contacts_name.equals("通讯录名称")){
					WebElement element = driver.findElement(By.xpath("/html/body/div[3]/div/table/tbody/tr/td[2][text()='"+contacts_name+"']/parent::tr/td/input[@type='checkbox']"));                                              
					System.out.println(element.getAttribute("id"));
					if (!element.isSelected()){
						element.click();
					}
				}
			}
		}
	}
	
	public void gotoContactsUpdate(String name) throws InterruptedException{
		driver.findElement(By.xpath("/html/body/div[3]/div/table/tbody/tr/td[2][text()='"+name+"']/parent::tr/td/a[text()='更新']")).click();
		Thread.sleep(1000);
		driver.switchTo().defaultContent();
		driver.switchTo().frame(driver.findElement(By.xpath("/html/body/iframe")).getAttribute("id"));
		MyAssert.assert_True("不能进入更新企业通讯录界面",driver.getPageSource().contains(WebInfos.企业通讯录更新标题));
	}
}
