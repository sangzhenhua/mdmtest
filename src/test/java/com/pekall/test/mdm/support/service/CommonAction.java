package com.pekall.test.mdm.support.service;

import java.util.List;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import com.pekall.test.mdm.support.util.MyAssert;
import com.pekall.test.mdm.support.util.WebInfos;

public class CommonAction {
	private static CommonAction instance;
	private WebDriver driver = Service.getInstance(MyDriver.USE);
	
	public static CommonAction getInstance(){
		if(instance == null){
			instance = new CommonAction();
		}
		return instance;
	}
	
	public void selectByTotalCheck(String id){
		WebElement element = driver.findElement(By.id(id));
		if (!element.isSelected()){
			element.click();
		}
	}
	
	public void gotoAction(String actionId,String subActionId,String className,ActionType actionType) throws InterruptedException{
		driver.findElement(By.id(actionId)).click();
		Thread.sleep(1000);
		if(subActionId!=null){
			driver.findElement(By.id(subActionId)).click();
		}
		if(className!=null){
			driver.findElement(By.className(className)).click();
		}
		Thread.sleep(1000);
		driver.switchTo().defaultContent();
		driver.switchTo().frame(driver.findElement(By.xpath("/html/body/iframe")).getAttribute("id"));
		switch(actionType){
		
		case UserAddSimple:			
			MyAssert.assert_True("不能进入用户单个添加界面", driver.getPageSource().contains(WebInfos.用户单个添加标题));
			break;
		case UserSendMsg:
			MyAssert.assert_True("不能进入用户发送消息界面",driver.getPageSource().contains(WebInfos.用户发送消息标题));
			break;
		case UserDelete:
			MyAssert.assert_True("不能进入用户删除界面",driver.getPageSource().contains(WebInfos.用户删除标题));
			break;
		case DevicePosition:
			Thread.sleep(2000);
			MyAssert.assert_True("不能进入设备定位界面",driver.getPageSource().contains(WebInfos.设备定位标题));
			break;	
		case DevicePartClear:
			MyAssert.assert_True("不能进入设备部分擦除界面",driver.getPageSource().contains(WebInfos.设备部分擦除标题));
			break;	
		case DeviceLock:
			MyAssert.assert_True("不能进入设备锁定界面",driver.getPageSource().contains(WebInfos.设备锁定标题));
			break;
		case DeviceUnlock:
			MyAssert.assert_True("不能进入设备解锁界面",driver.getPageSource().contains(WebInfos.设备解锁标题));
			break;
		case AndroidPWDConfigAdd:
			MyAssert.assert_True("不能进入Android密码策略添加界面",driver.getPageSource().contains(WebInfos.Android密码策略添加标题));
			break;	
		case AndroidPWDConfigUpdate:
			MyAssert.assert_True("不能进入Android密码策略更新界面",driver.getPageSource().contains(WebInfos.Android密码策略更新标题));
			break;	
		case AndroidPWDConfigIssueGroup:
			MyAssert.assert_True("不能进入Android密码策略下发到分组界面",driver.getPageSource().contains(WebInfos.下发到分组标题));
			break;	
		case AndroidPWDConfigIssueUser:
			MyAssert.assert_True("不能进入Android密码策略下发到用户界面",driver.getPageSource().contains(WebInfos.下发到用户标题));
			break;	
		case AndroidPWDConfigDelete:
			MyAssert.assert_True("不能进入Android密码策略删除界面",driver.getPageSource().contains(WebInfos.Android密码策略删除标题));
			break;
		case AndroidRestrictConfigAdd:
			MyAssert.assert_True("不能进入Android限制策略添加界面",driver.getPageSource().contains(WebInfos.Android限制策略添加标题));
			break;	
		case AndroidRestrictConfigUpdate:
			MyAssert.assert_True("不能进入Android限制策略更新界面",driver.getPageSource().contains(WebInfos.Android限制策略更新标题));
			break;	
		case AndroidRestrictConfigIssueGroup:
			MyAssert.assert_True("不能进入Android限制策略下发到分组界面",driver.getPageSource().contains(WebInfos.下发到分组标题));
			break;	
		case AndroidRestrictConfigIssueUser:
			MyAssert.assert_True("不能进入Android限制策略下发到用户界面",driver.getPageSource().contains(WebInfos.下发到用户标题));
			break;	
		case AndroidRestrictConfigDelete:
			MyAssert.assert_True("不能进入Android限制策略删除界面",driver.getPageSource().contains(WebInfos.Android限制策略删除标题));
			break;	
		case WIFIConfigAdd:
			MyAssert.assert_True("不能进入WIFI配置添加界面",driver.getPageSource().contains(WebInfos.WIFI配置添加标题));
			break;	
		case WIFIConfigUpdate:
			MyAssert.assert_True("不能进入WIFI配置更新界面",driver.getPageSource().contains(WebInfos.WIFI配置更新标题));
			break;	
		case WIFIConfigIssueGroup:
			MyAssert.assert_True("不能进入WIFI配置下发到分组界面",driver.getPageSource().contains(WebInfos.下发到分组标题));
			break;	
		case WIFIConfigIssueUser:
			MyAssert.assert_True("不能进入WIFI配置下发到用户界面",driver.getPageSource().contains(WebInfos.下发到用户标题));
			break;	
		case WIFIConfigDelete:
			MyAssert.assert_True("不能进入WIFI配置删除界面",driver.getPageSource().contains(WebInfos.WIFI配置删除标题));
			break;
		case EmailConfigAdd:
			MyAssert.assert_True("不能进入Email配置添加界面",driver.getPageSource().contains(WebInfos.Email配置添加标题));
			break;	
		case EmailConfigUpdate:
			MyAssert.assert_True("不能进入Email配置更新界面",driver.getPageSource().contains(WebInfos.Email配置更新标题));
			break;	
		case EmailConfigIssueGroup:
			MyAssert.assert_True("不能进入Email配置下发到分组界面",driver.getPageSource().contains(WebInfos.下发到分组标题));
			break;	
		case EmailConfigIssueUser:
			MyAssert.assert_True("不能进入Email配置下发到用户界面",driver.getPageSource().contains(WebInfos.下发到用户标题));
			break;	
		case EmailConfigDelete:
			MyAssert.assert_True("不能进入Email配置删除界面",driver.getPageSource().contains(WebInfos.Email配置删除标题));
			break;
		case DocumentAdd:
			MyAssert.assert_True("不能进入文档添加界面",driver.getPageSource().contains(WebInfos.文档添加标题));
			break;
		case DocumentIssueGroup:
			MyAssert.assert_True("不能进入文档下发到分组界面",driver.getPageSource().contains(WebInfos.下发到分组标题));
			break;
		case DocumentIssueUser:
			MyAssert.assert_True("不能进入文档下发到用户界面",driver.getPageSource().contains(WebInfos.下发到用户标题));
			break;
		case DocumentDelete:
			MyAssert.assert_True("不能进入文档删除界面",driver.getPageSource().contains(WebInfos.文档删除标题));
			break;
		case ContactsAdd:
			MyAssert.assert_True("不能进入企业通讯录添加界面",driver.getPageSource().contains(WebInfos.企业通讯录添加标题));
			break;
		case ContactsUpdate:
			MyAssert.assert_True("不能进入企业通讯录更新界面",driver.getPageSource().contains(WebInfos.企业通讯录更新标题));
			break;
		case ContactsIssueGroup:
			MyAssert.assert_True("不能进入企业通讯录下发到分组界面",driver.getPageSource().contains(WebInfos.下发到分组标题));
			break;
		case ContactsIssueUser:
			MyAssert.assert_True("不能进入企业通讯录下发到用户界面",driver.getPageSource().contains(WebInfos.下发到用户标题));
			break;
		case ContactsDelete:
			MyAssert.assert_True("不能进入企业企业通讯录删除界面",driver.getPageSource().contains(WebInfos.企业通讯录删除标题));
			break;	
		}	
	}
	
	public void actionSuccessCheck(ActionType actionType){
		driver.switchTo().defaultContent();
		driver.switchTo().frame(driver.findElement(By.id("dialog_msg_iframe")));
		switch(actionType){
		case UserAddSimple:
			MyAssert.assert_True("用户单个添加失败",driver.getPageSource().contains(WebInfos.操作成功提示)||driver.getPageSource().contains(WebInfos.用户添加重复提示));
			break;
		case UserAddBatch:
			MyAssert.assert_True("用户批量添加失败",driver.getPageSource().contains(WebInfos.用户批量添加成功提示)||driver.getPageSource().contains(WebInfos.用户添加重复提示));
			break;
		case UserSendMsg:
			MyAssert.assert_True("用户发送消息失败",driver.getPageSource().contains(WebInfos.操作成功提示));
			break;
		case UserDelete:
			MyAssert.assert_True("用户删除失败",driver.getPageSource().contains(WebInfos.操作成功提示));
			break;
		case DevicePosition:
			break;
		case DevicePartClear:
			MyAssert.assert_True("设备部分擦除失败",driver.getPageSource().contains(WebInfos.操作成功提示));
			break;
		case DeviceLock:
			MyAssert.assert_True("设备锁定失败",driver.getPageSource().contains(WebInfos.操作成功提示));
			break;
		case DeviceUnlock:
			MyAssert.assert_True("设备解锁失败",driver.getPageSource().contains(WebInfos.操作成功提示));
			break;
		case AndroidPWDConfigAdd:
			MyAssert.assert_True("Android密码策略添加失败",driver.getPageSource().contains(WebInfos.操作成功提示)||driver.getPageSource().contains(WebInfos.配置添加重复提示));
			break;
		case AndroidPWDConfigUpdate:
			MyAssert.assert_True("Android密码策略更新失败",driver.getPageSource().contains(WebInfos.操作成功提示));
			break;
		case AndroidPWDConfigIssueGroup:
			MyAssert.assert_True("Android密码策略下发到分组失败",driver.getPageSource().contains(WebInfos.操作成功提示));
			break;
		case AndroidPWDConfigIssueUser:
			MyAssert.assert_True("Android密码策略下发到用户失败",driver.getPageSource().contains(WebInfos.操作成功提示));
			break;
		case AndroidPWDConfigDelete:
			MyAssert.assert_True("Android密码策略删除失败",driver.getPageSource().contains(WebInfos.操作成功提示));
			break;
		
		case AndroidRestrictConfigAdd:
			MyAssert.assert_True("Android限制策略添加失败",driver.getPageSource().contains(WebInfos.操作成功提示)||driver.getPageSource().contains(WebInfos.配置添加重复提示));
			break;
			
		case AndroidRestrictConfigUpdate:
			MyAssert.assert_True("Android限制策略更新失败",driver.getPageSource().contains(WebInfos.操作成功提示));
			break;
			
		case AndroidRestrictConfigIssueGroup:
			MyAssert.assert_True("Android限制策略下发到分组失败",driver.getPageSource().contains(WebInfos.操作成功提示));
			break;
		case AndroidRestrictConfigIssueUser:
			MyAssert.assert_True("Android限制策略下发到用户失败",driver.getPageSource().contains(WebInfos.操作成功提示));
			break;
		case AndroidRestrictConfigDelete:
			MyAssert.assert_True("Android限制策略删除失败",driver.getPageSource().contains(WebInfos.操作成功提示));
			break;
		
		case WIFIConfigAdd:
			MyAssert.assert_True("WIFI配置添加失败",driver.getPageSource().contains(WebInfos.操作成功提示)||driver.getPageSource().contains(WebInfos.配置添加重复提示));
			break;
		case WIFIConfigUpdate:
			MyAssert.assert_True("WIFI配置更新失败",driver.getPageSource().contains(WebInfos.操作成功提示));
			break;
		case WIFIConfigIssueGroup:
			MyAssert.assert_True("WIFI配置更新失败",driver.getPageSource().contains(WebInfos.操作成功提示));
			break;
		case WIFIConfigIssueUser:
			MyAssert.assert_True("WIFI配置下发到用户失败",driver.getPageSource().contains(WebInfos.操作成功提示));
			break;
		case WIFIConfigDelete:
			MyAssert.assert_True("WIFI配置删除失败",driver.getPageSource().contains(WebInfos.操作成功提示));
			break;
		case EmailConfigAdd:
			MyAssert.assert_True("Email配置添加失败",driver.getPageSource().contains(WebInfos.操作成功提示)||driver.getPageSource().contains(WebInfos.配置添加重复提示));
			break;
		case EmailConfigUpdate:
			MyAssert.assert_True("Email配置更新失败",driver.getPageSource().contains(WebInfos.操作成功提示));
			break;
		case EmailConfigIssueGroup:
			MyAssert.assert_True("Email配置下发到分组失败",driver.getPageSource().contains(WebInfos.操作成功提示));
			break;
		case EmailConfigIssueUser:
			MyAssert.assert_True("Email配置下发到用户失败",driver.getPageSource().contains(WebInfos.操作成功提示));
			break;
		case EmailConfigDelete:
			MyAssert.assert_True("Email配置删除失败",driver.getPageSource().contains(WebInfos.操作成功提示));
			break;
		case DocumentAdd:
			MyAssert.assert_True("文档添加失败",driver.getPageSource().contains(WebInfos.文档添加成功提示));
			break;
		case DocumentIssueGroup:
			MyAssert.assert_True("文档下发到分组失败",driver.getPageSource().contains(WebInfos.操作成功提示));
			break;
		case DocumentIssueUser:
			MyAssert.assert_True("文档下发到用户失败",driver.getPageSource().contains(WebInfos.操作成功提示));
			break;
		case DocumentDelete:
			MyAssert.assert_True("文档删除失败",driver.getPageSource().contains(WebInfos.文档删除成功提示));
			break;
		case ContactsAdd:
			MyAssert.assert_True("通讯录添加失败",driver.getPageSource().contains(WebInfos.企业通讯录添加成功提示)||driver.getPageSource().contains(WebInfos.企业通讯录添加重复提示));
			break;
		case ContactsUpdate:
			MyAssert.assert_True("通讯录更新失败",driver.getPageSource().contains(WebInfos.企业通讯录更新成功提示));
			break;
		case ContactsIssueGroup:
			MyAssert.assert_True("通讯录下发到分组失败",driver.getPageSource().contains(WebInfos.操作成功提示));
			break;
		case ContactsIssueUser:
			MyAssert.assert_True("通讯录下发到用户失败",driver.getPageSource().contains(WebInfos.操作成功提示));
			break;
		case ContactsDelete:
			MyAssert.assert_True("通讯录删除失败",driver.getPageSource().contains(WebInfos.企业通讯录删除成功提示));
			break;
		case EmailModify:
			MyAssert.assert_True("邮件修改失败",driver.getPageSource().contains(WebInfos.邮件修改成功提示));
			break;
		}
		
		driver.findElement(By.id("msgOk")).click();	
		switch(actionType){
		case AndroidPWDConfigDelete:
			
			
		
		}
	}
	
	public void deleteConfirm(String id) throws InterruptedException{
		driver.findElement(By.id(id)).click();
		Thread.sleep(1000);
	}
	
	public void relateGroup(String group) throws InterruptedException{
		driver.findElement(By.xpath("/html/body/div/div/div/div/li/span[@id='tree_1_switch']")).click();		
		driver.findElement(By.id("tree_2_switch")).click();
		Thread.sleep(1000);
		                          
		driver.findElement(By.xpath("//a/span[2][text()='"+group+"']/parent::a/parent::li/span[@class='button chk checkbox_false_full']")).click();
		driver.findElement(By.id("confirm")).click();
		Thread.sleep(2000);
	}
	
	public boolean search(String info,ActionType type) throws InterruptedException{
		boolean result = true;
		driver.findElement(By.id("search_input")).sendKeys(info);
		Thread.sleep(1000);
		driver.findElement(By.id("search")).click();
		Thread.sleep(2000);
		switch(type){
		case UserSearch:
			result = !driver.getPageSource().contains(WebInfos.用户未搜索到提示);
			break;
		case DeviceSearch:
			result = !driver.getPageSource().contains(WebInfos.设备未搜索到提示);
			break;
		case PloySearch:
			result = !driver.getPageSource().contains(WebInfos.策略未搜索到提示);
			break;
		case ConfigSearch:
			result = !driver.getPageSource().contains(WebInfos.配置未搜索到提示);
			break;
		case DocSearch:
			result = !driver.getPageSource().contains(WebInfos.文档未搜索到提示);
			break;
		case ContactsSearch:
			result = !driver.getPageSource().contains(WebInfos.通讯录未搜索到提示);
			break;
		}
		//System.out.println(driver.getPageSource());
		System.out.println(result);
		return result;
	}
		
	public void relateUser(List<String> list,ActionType type) throws InterruptedException{
	    boolean result =this.search(list.get(1),type);
	    System.out.println(result);
	    if(result){
	    	this.selectByTotalCheck("all_check");
	    }
	    driver.findElement(By.id("confirm")).click();
	    Thread.sleep(1000);
	}
}
