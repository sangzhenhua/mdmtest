package com.pekall.test.mdm.support.service;


import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import com.pekall.test.mdm.support.util.MyAssert;
import com.pekall.test.mdm.support.util.WebInfos;


public class UserManager {
	private static UserManager instance;
	private WebDriver driver = Service.getInstance(MyDriver.USE);;
	
	public static UserManager getInstance(){
		if(instance == null){
			instance = new UserManager();
		}
		return instance;
	}
	
	public void gotoAddBatch() throws InterruptedException{
		this.gotoUserList();
		CommonAction.getInstance().gotoAction("add_user", null, null,ActionType.UserAddSimple );
		driver.findElement(By.className("addUser_batch")).click();
		MyAssert.assert_True("不能进入用户批量添加界面", driver.getPageSource().contains(WebInfos.用户批量添加选择文件按钮));
	}
	
	public void addSimple(String user_name,String second_name,String password,String r_password,String phone_number,String cell_number) throws InterruptedException{
	    driver.findElement(By.className("user_name")).sendKeys(user_name);
	    driver.findElement(By.className("second_name")).sendKeys(second_name);
	    driver.findElement(By.className("password")).sendKeys(password);
	    driver.findElement(By.className("r_password")).sendKeys(r_password);
	    driver.findElement(By.className("phone_number")).sendKeys(phone_number);
	    driver.findElement(By.className("cell_number")).sendKeys(cell_number);
	   
		WebElement el=driver.findElement(By.xpath("//a/span[2][text()='自动化测试']/parent::a/parent::li/span[@class='button chk checkbox_false_full']"));
		if(!el.isSelected()){
			el.click();
		}
	    driver.findElement(By.id("user_add_ok")).click();
	    Thread.sleep(1000);
	}
	

	public void addBatch(String path) throws InterruptedException{
		driver.findElement(By.id("userFile")).sendKeys(path);
		Thread.sleep(3000);
		driver.findElement(By.id("user_add_ok")).click();
		Thread.sleep(3000);
	}
	
	public void gotoUserList() throws InterruptedException{
		//driver.get(WebInfos.MainUrl)
		System.out.println("add user driver:"+driver);
		driver.findElement(By.id("user_list")).click();
		Thread.sleep(1000);
		driver.switchTo().frame("main_container");
	}
	
	public void sendMsg(String type,String title,String content) throws InterruptedException{
		if(!driver.findElement(By.id(type)).isSelected()){
			driver.findElement(By.id(type)).click();
		}
		driver.findElement(By.id("input_email")).sendKeys(title);
		driver.findElement(By.id("input_massage")).sendKeys(content);
		driver.findElement(By.id("confirm")).click();
		Thread.sleep(1000);
	}
	
}
