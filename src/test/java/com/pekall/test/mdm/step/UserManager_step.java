package com.pekall.test.mdm.step;

import java.util.List;
import java.util.Map;
import com.pekall.test.mdm.support.service.ActionType;
import com.pekall.test.mdm.support.service.CommonAction;
import com.pekall.test.mdm.support.service.UserManager;
import cucumber.api.DataTable;
import cucumber.api.java.zh_cn.当;


public class UserManager_step {
	UserManager userManager = UserManager.getInstance();
	CommonAction commonAction = CommonAction.getInstance();
	@当("^添加单个用户:账户名(.*?)姓名(.*?)密码(.*?)确认密码(.*?)电话(.*?)手机(.*?)$")
	public void 添加单个用户_账户名_姓名_密码_确认密码_电话_手机(String user_name, String second_name, String password, String r_password, String phone_number,String cell_number) throws Throwable {
		userManager.gotoUserList();
		commonAction.gotoAction("add_user", null, null, ActionType.UserAddSimple);
		userManager.addSimple(user_name, second_name, password, r_password, phone_number, cell_number);
	}
	
	@当("^导入文件(.*?)批量添加用户$")
	public void 导入文件_批量添加用户(String file) throws Throwable {
		userManager.gotoAddBatch();
		userManager.addBatch(file);
	}

	@当("^选择用户$")
	public void 选择用户(DataTable table) throws Throwable {
		List<String> list = table.asList(String.class);
		userManager.gotoUserList();
	    boolean result =commonAction.search(list.get(1), ActionType.UserSearch);
	    System.out.println(result);
	    if(result){
	    	commonAction.selectByTotalCheck("chk_title");
	    }
	}

	@当("^给用户发送消息$")
	public void 给用户发送消息(DataTable table) throws Throwable {
		List<Map<String, String>> list = table.asMaps(String.class, String.class);
		Map map = list.get(0);
		commonAction.gotoAction("send_msg", null, null, ActionType.UserSendMsg);
		userManager.sendMsg((String)map.get("消息发送方式"), (String)map.get("主题"),(String) map.get("消息"));
	}

	@当("^删除用户$")
	public void 删除用户() throws Throwable {
		commonAction.gotoAction("delete_user", null, null, ActionType.UserDelete);
		commonAction.deleteConfirm("user_deleteuser_ok");
	}
	
}
