package com.pekall.test.mdm.step;

import java.util.List;
import java.util.Map;
import com.pekall.test.mdm.support.service.ActionType;
import com.pekall.test.mdm.support.service.CommonAction;
import com.pekall.test.mdm.support.service.DocManager;
import cucumber.api.DataTable;
import cucumber.api.java.zh_cn.当;

public class DocManager_step {
	DocManager docManager = DocManager.getInstance();
	CommonAction commonAction = CommonAction.getInstance();
	@当("^添加文档$")
	public void 添加文档(DataTable table) throws Throwable {
		List<Map<String, String>> list = table.asMaps(String.class, String.class);
		Map<String,String> map = list.get(0);
		docManager.gotoDocList();
	    commonAction.gotoAction("add_doc",null, null, ActionType.DocumentAdd);
	    docManager.addDoc(map.get("文档名称"),map.get("文档描述"), map.get("文档路径"));
	}
	
	@当("^选择文档$")
	public void 选择文档(DataTable table) throws Throwable {
		List<String> list = table.asList(String.class);
	    docManager.gotoDocList();
	    boolean result =commonAction.search(list.get(1),ActionType.DocSearch);
	    System.out.println(result);
	    if(result){
	    	//PloyManager.getInstance().selectPloy(list);
	    	docManager.selectDoc(list);
	    }
	}

	@当("^文档下发到分组$")
	public void 文档下发到分组(DataTable table) throws Throwable {
		List<String> list = table.asList(String.class);
		commonAction.gotoAction("distribute_to_group",null, null, ActionType.DocumentIssueGroup);
		commonAction.relateGroup(list.get(1));
	}

	@当("^删除文档$")
	public void 删除文档() throws Throwable {
		commonAction.gotoAction("delete_doc", null,null, ActionType.DocumentDelete);
		commonAction.deleteConfirm("confirm");
	}


}
