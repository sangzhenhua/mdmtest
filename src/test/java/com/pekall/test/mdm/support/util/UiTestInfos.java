package com.pekall.test.mdm.support.util;

public class UiTestInfos {
	public static final String MDMTestProjectDir = "e:\\workspace\\MDMTest";
	public static final String UITestProjectDir = "e:\\workspace\\MDMMobileTest";
	public static final String CmdResultDir = "e:\\workspace\\MDMTest\\cmdResult";
	
	public static final String Setup模块 = "SetUp";
	public static final String Setup模块_初始化方法 = "setup";
	public static final String Setup模块_登陆pekall方法 = "loginPekall";
	public static final String Setup模块_返回home界面方法 = "goHome";
	public static final String Setup模块_启动监视器方法 = "runWatcher";
	
	public static final String Msg模块 = "Message";
	public static final String Msg模块_检查push消息接收方法 = "checkPushMsgReceived";
	public static final String Device模块 = "Device";
	public static final String Device模块_设备锁定方法 = "lock";
	
	public static final String Device模块_检查设备锁定方法 = "checkLocked";
	public static final String Device模块_检查设备解锁方法 = "checkUnlocked";
	public static final String Device模块_检查企业数据部分擦除方法 = "checkCompanyDataCleared";
	public static final String PloyAndConfig模块 = "PloyAndConfig";
	public static final String PloyAndConfig模块_检查Android密码策略接收方法  = "checkAndroidPWDPloyReceived";
	public static final String PloyAndConfig模块_检查Android密码策略更新方法  = "checkAndroidPWDPloyUpdated";
	public static final String PloyAndConfig模块_检查Android限制策略接收方法  = "checkAndroidRestrictPloyReceived";
	public static final String PloyAndConfig模块_检查Android限制策略删除方法  = "checkAndroidRestrictPloyDeleted";
	public static final String PloyAndConfig模块_检查wifi配置接收方法  = "checkWIFIConfigReceived";
	public static final String PloyAndConfig模块_检查wifi配置更新方法  = "checkWIFIConfigUpdated";
	public static final String PloyAndConfig模块_检查wifi配置删除方法  = "checkWIFIConfigDeleted";
	
	public static final String Doc模块  = "Document";
	public static final String Doc模块_检查文件接收方法  = "checkDocReceived";
	public static final String Doc模块_检查文件删除方法  = "checkDocDeleted";
	public static final String Email模块  = "Email";
	public static final String Email模块_Email配置接收方法  = "checkEmailConfigReceived";
	public static final String Email模块_Email配置更新方法  = "checkEmailConfigUpdated";
	public static final String Email模块_Email配置删除方法  = "checkEmailConfigDeleted";
	public static final String Contacts模块 = "Contacts";
	public static final String Contacts模块_检查联系人接收方法 = "checkContactsReceived";
	public static final String Contacts模块_检查联系人更新方法 = "checkContactsUpdated";
	public static final String Contacts模块_检查联系人删除方法 = "checkContactsDeleted";
}