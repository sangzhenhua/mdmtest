package com.pekall.test.mdm.step;

import java.util.List;
import java.util.Map;
import com.pekall.test.mdm.support.service.ActionType;
import com.pekall.test.mdm.support.service.CommonAction;
import com.pekall.test.mdm.support.service.ContactsManager;
import cucumber.api.DataTable;
import cucumber.api.java.zh_cn.当;

public class ContactsManager_step {
	List<String> list =null;
	ContactsManager contactsManager = ContactsManager.getInstance();
	CommonAction commonAction = CommonAction.getInstance();
	@当("^添加企业通讯录$")
	public void 添加企业通讯录(DataTable table) throws Throwable {
		List<Map<String, String>> list = table.asMaps(String.class, String.class);
		Map<String,String> map = list.get(0);
		contactsManager.gotoContactsList();
	    commonAction.gotoAction("add_contacts", null,null, ActionType.ContactsAdd);
	    contactsManager.addContacts(map.get("通讯录名称"),map.get("通讯录路径"));
	}

	@当("^选择通讯录$")
	public void 选择通讯录(DataTable table) throws Throwable {
		list = table.asList(String.class);
		contactsManager.gotoContactsList();
	    boolean result =commonAction.search(list.get(1),ActionType.ContactsSearch);
	    System.out.println(result);
	    if(result){
	    	contactsManager.selectContacts(list);
	    }
	}

	@当("^通讯录下发到分组$")
	public void 通讯录下发到分组(DataTable table) throws Throwable {
		List<String> list = table.asList(String.class);
		commonAction.gotoAction("rel2group",null, null, ActionType.ContactsIssueGroup);
		commonAction.relateGroup(list.get(1));
	}

	@当("^更新通讯录$")
	public void 更新通讯录(DataTable table) throws Throwable {
		List<Map<String, String>> listContacts = table.asMaps(String.class, String.class);
		Map<String,String> map = listContacts.get(0);
		contactsManager.gotoContactsUpdate(list.get(1));
		contactsManager.addContacts(null, map.get("通讯录路径"));
	}

	@当("^删除通讯录$")
	public void 删除通讯录() throws Throwable {
		commonAction.gotoAction("delete_contacts",null, null, ActionType.ContactsDelete);
		commonAction.deleteConfirm("b_ok");
	}

}
