package com.pekall.test.mdm.step;

import java.util.List;

import com.pekall.test.mdm.support.service.ActionType;
import com.pekall.test.mdm.support.service.CommonAction;
import com.pekall.test.mdm.support.service.ContactsManager;
import com.pekall.test.mdm.support.service.DeviceManager;

import cucumber.api.DataTable;
import cucumber.api.java.zh_cn.当;


public class DeviceManager_step {
	
	DeviceManager deviceManager = DeviceManager.getInstance();
	CommonAction commonAction = CommonAction.getInstance();
	@当("^选择设备$")
	public void 选择设备(DataTable  table) throws Throwable {
			System.out.println("when select device");
		List<String> list = table.asList(String.class);
	    deviceManager.gotoDeviceList();
	    boolean result =commonAction.search(list.get(1), ActionType.DeviceSearch);
	 //   Thread.sleep(1000);
	    System.out.println(result);
	    if(result){
	    	deviceManager.selectDevice(list);
	    }
	}
	
	@当("^定位设备$")
	public void 定位设备() throws Throwable {
		commonAction.gotoAction("position", null, null, ActionType.DevicePosition);
	}

	@当("^锁定设备$")
	public void 锁定设备(DataTable  table) throws Throwable {
	  List<String> list = table.asList(String.class);
	  commonAction.gotoAction("more", null, "lock_mobile", ActionType.DeviceLock);
	  deviceManager.lock(list.get(1));
	}

	@当("^解锁设备$")
	public void 解锁设备() throws Throwable {
		commonAction.gotoAction("more", null, "unlock_mobile", ActionType.DeviceUnlock);
		deviceManager.unlock();
	}

	@当("^部分擦除设备$")
	public void 部分擦除设备() throws Throwable {
		commonAction.gotoAction("more", null, "device_part_clear", ActionType.DevicePartClear);
		deviceManager.partClear();
	}

}
