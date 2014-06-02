package com.pekall.test.mdm.step;

import org.junit.Assert;
import com.pekall.test.mdm.support.service.ActionType;
import com.pekall.test.mdm.support.service.CommonAction;
import com.pekall.test.mdm.support.service.Login;
import com.pekall.test.mdm.support.util.CmdExcute;
import com.pekall.test.mdm.support.util.UiTestInfos;

import cucumber.api.java.zh_cn.假如;
import cucumber.api.java.zh_cn.那么;

public class Common_step {
	@假如("^登陆MDM服务器$")
	public void 登陆mdm服务器() throws Throwable {
		Login login = Login.getInstance();
		login.login();
	}

	@那么("^(.*?)成功$")
	public void _成功(String actionStr) throws Throwable {
		ActionType type =null;
		if(actionStr.contains("用户手机消息接收")){
			CmdExcute.run(1000,UiTestInfos.Msg模块,UiTestInfos.Msg模块_检查push消息接收方法);
			Assert.assertTrue(CmdExcute.analyzeResult(UiTestInfos.Msg模块_检查push消息接收方法));
		}
		
		if(actionStr.contains("用户手机锁定")){
			CmdExcute.run(1000,UiTestInfos.Device模块,UiTestInfos.Device模块_检查设备锁定方法);
			Assert.assertTrue(CmdExcute.analyzeResult(UiTestInfos.Device模块_检查设备锁定方法));
		}
		
		if(actionStr.contains("用户手机解锁")){
			CmdExcute.run(0,UiTestInfos.Device模块,UiTestInfos.Device模块_设备锁定方法);
			CmdExcute.run(1000,UiTestInfos.Device模块,UiTestInfos.Device模块_检查设备解锁方法);
			Assert.assertTrue(CmdExcute.analyzeResult(UiTestInfos.Device模块_检查设备解锁方法));
		}
		
		if(actionStr.contains("用户手机部分擦除")){
			CmdExcute.run(1000,UiTestInfos.Device模块,UiTestInfos.Device模块_检查企业数据部分擦除方法);
			Assert.assertTrue(CmdExcute.analyzeResult(UiTestInfos.Device模块_检查企业数据部分擦除方法));
		}
		
		if(actionStr.contains("用户手机Android密码策略接收")){
			CmdExcute.run(1000,UiTestInfos.Setup模块,UiTestInfos.Setup模块_登陆pekall方法);
			Assert.assertTrue(CmdExcute.analyzeResult(UiTestInfos.Setup模块_登陆pekall方法));
			
			CmdExcute.run(1000,UiTestInfos.PloyAndConfig模块,UiTestInfos.PloyAndConfig模块_检查Android密码策略接收方法);
			Assert.assertTrue(CmdExcute.analyzeResult(UiTestInfos.PloyAndConfig模块_检查Android密码策略接收方法));
		}
		
		if(actionStr.contains("用户手机Android密码策略更新")){
			CmdExcute.run(1000,UiTestInfos.Setup模块,UiTestInfos.Setup模块_返回home界面方法);
			Assert.assertTrue(CmdExcute.analyzeResult(UiTestInfos.Setup模块_返回home界面方法));
			
			CmdExcute.run(1000,UiTestInfos.PloyAndConfig模块,UiTestInfos.PloyAndConfig模块_检查Android密码策略更新方法);
			Assert.assertTrue(CmdExcute.analyzeResult(UiTestInfos.PloyAndConfig模块_检查Android密码策略更新方法));
		}
		
		if(actionStr.contains("用户手机Android限制策略接收")){	
			CmdExcute.run(1000,UiTestInfos.PloyAndConfig模块,UiTestInfos.PloyAndConfig模块_检查Android限制策略接收方法);
			Assert.assertTrue(CmdExcute.analyzeResult(UiTestInfos.PloyAndConfig模块_检查Android限制策略接收方法));
		}
		
		if(actionStr.contains("用户手机Android限制策略删除")){	
			CmdExcute.run(1000,UiTestInfos.PloyAndConfig模块,UiTestInfos.PloyAndConfig模块_检查Android限制策略删除方法);
			Assert.assertTrue(CmdExcute.analyzeResult(UiTestInfos.PloyAndConfig模块_检查Android限制策略删除方法));
		}
		
		if(actionStr.contains("用户手机WIFI配置接收")){	
			CmdExcute.run(1000,UiTestInfos.PloyAndConfig模块,UiTestInfos.PloyAndConfig模块_检查wifi配置接收方法);
			Assert.assertTrue(CmdExcute.analyzeResult(UiTestInfos.PloyAndConfig模块_检查wifi配置接收方法));
		}
		
		if(actionStr.contains("用户手机WIFI配置更新")){	
			CmdExcute.run(1000,UiTestInfos.PloyAndConfig模块,UiTestInfos.PloyAndConfig模块_检查wifi配置更新方法);
			Assert.assertTrue(CmdExcute.analyzeResult(UiTestInfos.PloyAndConfig模块_检查wifi配置更新方法));
		}
		
		if(actionStr.contains("用户手机WIFI配置删除")){	
			CmdExcute.run(1000,UiTestInfos.PloyAndConfig模块,UiTestInfos.PloyAndConfig模块_检查wifi配置删除方法);
			Assert.assertTrue(CmdExcute.analyzeResult(UiTestInfos.PloyAndConfig模块_检查wifi配置删除方法));
		}
		
		if(actionStr.contains("用户手机Email配置接收")){	
			CmdExcute.run(1000,UiTestInfos.Email模块,UiTestInfos.Email模块_Email配置接收方法);
			Assert.assertTrue(CmdExcute.analyzeResult(UiTestInfos.Email模块_Email配置接收方法));
		}
		
		if(actionStr.contains("用户手机Email配置更新")){	
			CmdExcute.run(1000,UiTestInfos.Email模块,UiTestInfos.Email模块_Email配置更新方法);
			Assert.assertTrue(CmdExcute.analyzeResult(UiTestInfos.Email模块_Email配置更新方法));
		}
		
		if(actionStr.contains("用户手机Email配置删除")){
			CmdExcute.run(1000,UiTestInfos.Email模块,UiTestInfos.Email模块_Email配置删除方法);
			Assert.assertTrue(CmdExcute.analyzeResult(UiTestInfos.Email模块_Email配置删除方法));
		}
		
		if(actionStr.contains("用户手机文档接收")){
			CmdExcute.run(1000,UiTestInfos.Doc模块,UiTestInfos.Doc模块_检查文件接收方法);
			Assert.assertTrue(CmdExcute.analyzeResult(UiTestInfos.Doc模块_检查文件接收方法));
		}
		
		if(actionStr.contains("用户手机文档删除")){
			CmdExcute.run(1000,UiTestInfos.Doc模块,UiTestInfos.Doc模块_检查文件删除方法);
			Assert.assertTrue(CmdExcute.analyzeResult(UiTestInfos.Doc模块_检查文件删除方法));
		}
		
		if(actionStr.contains("用户手机通讯录接收")){
			CmdExcute.run(1000,UiTestInfos.Contacts模块,UiTestInfos.Contacts模块_检查联系人接收方法);
			Assert.assertTrue(CmdExcute.analyzeResult(UiTestInfos.Contacts模块_检查联系人接收方法));
		}
		
		if(actionStr.contains("用户手机通讯录更新")){
			CmdExcute.run(1000,UiTestInfos.Contacts模块,UiTestInfos.Contacts模块_检查联系人更新方法);
			Assert.assertTrue(CmdExcute.analyzeResult(UiTestInfos.Contacts模块_检查联系人更新方法));
		}
		
		if(actionStr.contains("用户手机通讯录删除")){
			CmdExcute.run(1000,UiTestInfos.Contacts模块,UiTestInfos.Contacts模块_检查联系人删除方法);
			Assert.assertTrue(CmdExcute.analyzeResult(UiTestInfos.Contacts模块_检查联系人删除方法));
		}
		
		
		if(actionStr.contains("用户单个添加")){
			type = ActionType.UserAddSimple;
		}
		else if(actionStr.contains("用户批量添加")){
			type = ActionType.UserAddBatch;
		}
		else if(actionStr.contains("服务器消息发送")){
			type = ActionType.UserSendMsg;
		}
		else if(actionStr.contains("用户删除")){
			type = ActionType.UserDelete;
		}
		else if(actionStr.contains("设备定位")){
			type = ActionType.DevicePosition;
		}
		else if(actionStr.contains("服务器锁定设备")){
			type = ActionType.DeviceLock;
		}
		else if(actionStr.contains("服务器解锁设备")){
			type = ActionType.DeviceUnlock;
		}
		else if(actionStr.contains("服务器部分擦除设备")){
			type = ActionType.DevicePartClear;
		}
		
		else if(actionStr.contains("Android密码策略添加")){
			type = ActionType.AndroidPWDConfigAdd;
		}
		else if(actionStr.contains("服务器Android密码策略更新")){
			type = ActionType.AndroidPWDConfigUpdate;
		}
		else if(actionStr.contains("服务器Android密码策略下发到分组")){
			type = ActionType.AndroidPWDConfigIssueGroup;
		}
		else if(actionStr.contains("服务器Android密码策略下发到用户")){
			type = ActionType.AndroidPWDConfigIssueUser;
		}
		else if(actionStr.contains("Android密码策略删除")){
			type = ActionType.AndroidPWDConfigDelete;
		}
		else if(actionStr.contains("Android限制策略添加")){
			type = ActionType.AndroidRestrictConfigAdd;
		}
		else if(actionStr.contains("Android限制策略更新")){
			type = ActionType.AndroidRestrictConfigUpdate;
		}
		else if(actionStr.contains("服务器Android限制策略下发到分组")){
			type = ActionType.AndroidRestrictConfigIssueGroup;
		}
		else if(actionStr.contains("服务器Android限制策略下发到用户")){
			type = ActionType.AndroidRestrictConfigIssueUser;
		}
		else if(actionStr.contains("服务器Android限制策略删除")){
			type = ActionType.AndroidRestrictConfigDelete;
		}
		else if(actionStr.contains("WIFI配置添加")){
			type = ActionType.WIFIConfigAdd;
		}
		else if(actionStr.contains("服务器WIFI配置更新")){
			type = ActionType.WIFIConfigUpdate;
		}
		else if(actionStr.contains("服务器WIFI配置下发到分组")){
			type = ActionType.WIFIConfigIssueGroup;
		}
		else if(actionStr.contains("WIFI配置下发到用户")){
			type = ActionType.WIFIConfigIssueUser;
		}
		else if(actionStr.contains("服务器WIFI配置删除")){
			type = ActionType.WIFIConfigDelete;
		}
		else if(actionStr.contains("Email配置添加")){
			type = ActionType.EmailConfigAdd;
		}
		else if(actionStr.contains("服务器Email配置更新")){
			type = ActionType.EmailConfigUpdate;
		}
		else if(actionStr.contains("Email配置下发到分组")){
			type = ActionType.EmailConfigIssueGroup;
		}
		else if(actionStr.contains("服务器Email配置下发到用户")){
			type = ActionType.EmailConfigIssueUser;
		}
		else if(actionStr.contains("服务器Email配置删除")){
			type = ActionType.EmailConfigDelete;
		}
		else if(actionStr.contains("文档添加")){
			type = ActionType.DocumentAdd;
		}
		else if(actionStr.contains("服务器文档删除")){
			type = ActionType.DocumentDelete;
		}
		else if(actionStr.contains("服务器文档下发到分组")){
			type = ActionType.DocumentIssueGroup;
		}
		else if(actionStr.contains("文档下发到用户")){
			type = ActionType.DocumentIssueUser;
		}
		else if(actionStr.contains("通讯录添加")){
			type = ActionType.ContactsAdd;
		}
		else if(actionStr.contains("服务器通讯录更新")){
			type = ActionType.ContactsUpdate;
		}
		else if(actionStr.contains("服务器通讯录下发到分组")){
			type = ActionType.ContactsIssueGroup;
		}
		else if(actionStr.contains("通讯录下发到用户")){
			type = ActionType.ContactsIssueUser;
		}
		else if(actionStr.contains("服务器通讯录删除")){
			type = ActionType.ContactsDelete;
		}
		else if(actionStr.contains("邮件配置")){
			type = ActionType.EmailModify;
		}
		if((type!=ActionType.DevicePosition) && (type != null)){
			CommonAction.getInstance().actionSuccessCheck(type);
		}
	}
}
