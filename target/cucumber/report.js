$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("com/pekall/test/mdm/features/a_用户管理.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# language: zh-CN"
    }
  ],
  "line": 3,
  "name": "用户管理",
  "description": "添加删除用户和给用户发送消息",
  "id": "用户管理",
  "keyword": "功能"
});
formatter.before({
  "duration": 40163429,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "单个添加用户",
  "description": "",
  "id": "用户管理;单个添加用户;;2",
  "type": "scenario",
  "keyword": "场景大纲"
});
formatter.step({
  "line": 8,
  "name": "登陆MDM服务器",
  "keyword": "假如"
});
formatter.step({
  "line": 9,
  "name": "添加单个用户:账户名mdmtest1@pekall.com姓名自动化测试密码123456确认密码123456电话010-2222222手机12345678910",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "当"
});
formatter.step({
  "line": 10,
  "name": "用户单个添加成功",
  "keyword": "那么"
});
formatter.match({
  "location": "Common_step.登陆mdm服务器()"
});
formatter.result({
  "duration": 12319403627,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mdmtest1@pekall.com",
      "offset": 10
    },
    {
      "val": "自动化测试",
      "offset": 31
    },
    {
      "val": "123456",
      "offset": 38
    },
    {
      "val": "123456",
      "offset": 48
    },
    {
      "val": "010-2222222",
      "offset": 56
    },
    {
      "val": "12345678910",
      "offset": 69
    }
  ],
  "location": "UserManager_step.添加单个用户_账户名_姓名_密码_确认密码_电话_手机(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 6287276488,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "用户单个添加",
      "offset": 0
    }
  ],
  "location": "Common_step._成功(String)"
});
formatter.result({
  "duration": 227187401,
  "status": "passed"
});
formatter.write("status:passed");
formatter.after({
  "duration": 834518366,
  "status": "passed"
});
formatter.before({
  "duration": 81513460,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "单个添加用户",
  "description": "",
  "id": "用户管理;单个添加用户;;3",
  "type": "scenario",
  "keyword": "场景大纲"
});
formatter.step({
  "line": 8,
  "name": "登陆MDM服务器",
  "keyword": "假如"
});
formatter.step({
  "line": 9,
  "name": "添加单个用户:账户名zhenhua.sang@pekall.com姓名自动测试下发密码123456确认密码123456电话010-2222222手机12345678910",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "当"
});
formatter.step({
  "line": 10,
  "name": "用户单个添加成功",
  "keyword": "那么"
});
formatter.match({
  "location": "Common_step.登陆mdm服务器()"
});
formatter.result({
  "duration": 1888660926,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "zhenhua.sang@pekall.com",
      "offset": 10
    },
    {
      "val": "自动测试下发",
      "offset": 35
    },
    {
      "val": "123456",
      "offset": 43
    },
    {
      "val": "123456",
      "offset": 53
    },
    {
      "val": "010-2222222",
      "offset": 61
    },
    {
      "val": "12345678910",
      "offset": 74
    }
  ],
  "location": "UserManager_step.添加单个用户_账户名_姓名_密码_确认密码_电话_手机(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 5983003369,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "用户单个添加",
      "offset": 0
    }
  ],
  "location": "Common_step._成功(String)"
});
formatter.result({
  "duration": 202499360,
  "status": "passed"
});
formatter.write("status:passed");
formatter.after({
  "duration": 480219954,
  "status": "passed"
});
formatter.before({
  "duration": 70824620,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "批量添加用户",
  "description": "",
  "id": "用户管理;批量添加用户;;2",
  "type": "scenario",
  "keyword": "场景大纲"
});
formatter.step({
  "line": 19,
  "name": "登陆MDM服务器",
  "keyword": "假如"
});
formatter.step({
  "line": 20,
  "name": "导入文件d:\\mdm_organization_template.xlsx批量添加用户",
  "matchedColumns": [
    0
  ],
  "keyword": "当"
});
formatter.step({
  "line": 21,
  "name": "用户批量添加成功",
  "keyword": "那么"
});
formatter.match({
  "location": "Common_step.登陆mdm服务器()"
});
formatter.result({
  "duration": 1863567793,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "d:\\mdm_organization_template.xlsx",
      "offset": 4
    }
  ],
  "location": "UserManager_step.导入文件_批量添加用户(String)"
});
formatter.result({
  "duration": 9944592195,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "用户批量添加",
      "offset": 0
    }
  ],
  "location": "Common_step._成功(String)"
});
formatter.result({
  "duration": 391121579,
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat com.pekall.test.mdm.support.util.MyAssert.assert_True(MyAssert.java:13)\r\n\tat com.pekall.test.mdm.support.service.CommonAction.actionSuccessCheck(CommonAction.java:162)\r\n\tat com.pekall.test.mdm.step.Common_step._成功(Common_step.java:242)\r\n\tat ✽.那么用户批量添加成功(com/pekall/test/mdm/features/a_用户管理.feature:21)\r\n",
  "status": "failed"
});
formatter.write("status:failed");
formatter.after({
  "duration": 448065781,
  "status": "passed"
});
formatter.before({
  "duration": 76305436,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "发送消息",
  "description": "",
  "id": "用户管理;发送消息",
  "type": "scenario",
  "keyword": "场景"
});
formatter.step({
  "line": 29,
  "name": "登陆MDM服务器",
  "keyword": "假如"
});
formatter.step({
  "line": 30,
  "name": "选择用户",
  "rows": [
    {
      "cells": [
        "姓名"
      ],
      "line": 31
    },
    {
      "cells": [
        "自动测试下发"
      ],
      "line": 32
    }
  ],
  "keyword": "当"
});
formatter.step({
  "line": 33,
  "name": "给用户发送消息",
  "rows": [
    {
      "cells": [
        "消息发送方式",
        "主题",
        "消息"
      ],
      "line": 34
    },
    {
      "cells": [
        "push_ms",
        "Push test",
        "This is a push message!"
      ],
      "line": 35
    }
  ],
  "keyword": "而且"
});
formatter.step({
  "line": 36,
  "name": "服务器消息发送成功",
  "keyword": "那么"
});
formatter.step({
  "line": 37,
  "name": "用户手机消息接收成功",
  "keyword": "那么"
});
formatter.match({
  "location": "Common_step.登陆mdm服务器()"
});
formatter.result({
  "duration": 1792573599,
  "status": "passed"
});
formatter.match({
  "location": "UserManager_step.选择用户(DataTable)"
});
formatter.result({
  "duration": 4606514638,
  "status": "passed"
});
formatter.match({
  "location": "UserManager_step.给用户发送消息(DataTable)"
});
formatter.result({
  "duration": 4125276427,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "服务器消息发送",
      "offset": 0
    }
  ],
  "location": "Common_step._成功(String)"
});
formatter.result({
  "duration": 209541968,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "用户手机消息接收",
      "offset": 0
    }
  ],
  "location": "Common_step._成功(String)"
});
formatter.result({
  "duration": 11090076902,
  "status": "passed"
});
formatter.write("status:passed");
formatter.after({
  "duration": 448526988,
  "status": "passed"
});
formatter.before({
  "duration": 88621604,
  "status": "passed"
});
formatter.scenario({
  "line": 40,
  "name": "删除用户",
  "description": "",
  "id": "用户管理;删除用户",
  "type": "scenario",
  "keyword": "场景"
});
formatter.step({
  "line": 41,
  "name": "登陆MDM服务器",
  "keyword": "假如"
});
formatter.step({
  "line": 42,
  "name": "选择用户",
  "rows": [
    {
      "cells": [
        "姓名"
      ],
      "line": 43
    },
    {
      "cells": [
        "自动化测试"
      ],
      "line": 44
    }
  ],
  "keyword": "当"
});
formatter.step({
  "line": 45,
  "name": "删除用户",
  "keyword": "而且"
});
formatter.step({
  "line": 46,
  "name": "用户删除成功",
  "keyword": "那么"
});
formatter.match({
  "location": "Common_step.登陆mdm服务器()"
});
formatter.result({
  "duration": 1819738473,
  "status": "passed"
});
formatter.match({
  "location": "UserManager_step.选择用户(DataTable)"
});
formatter.result({
  "duration": 4548309287,
  "status": "passed"
});
formatter.match({
  "location": "UserManager_step.删除用户()"
});
formatter.result({
  "duration": 3455833376,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "用户删除",
      "offset": 0
    }
  ],
  "location": "Common_step._成功(String)"
});
formatter.result({
  "duration": 225335203,
  "status": "passed"
});
formatter.write("status:passed");
formatter.after({
  "duration": 460513020,
  "status": "passed"
});
formatter.uri("com/pekall/test/mdm/features/b_设备管理.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# language: zh-CN"
    }
  ],
  "line": 3,
  "name": "设备管理",
  "description": "定位锁定解锁擦除企业数据",
  "id": "设备管理",
  "keyword": "功能"
});
formatter.before({
  "duration": 80695086,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "定位",
  "description": "",
  "id": "设备管理;定位",
  "type": "scenario",
  "keyword": "场景"
});
formatter.step({
  "line": 8,
  "name": "登陆MDM服务器",
  "keyword": "假如"
});
formatter.step({
  "line": 9,
  "name": "选择设备",
  "rows": [
    {
      "cells": [
        "账户名"
      ],
      "line": 10
    },
    {
      "cells": [
        "zhenhua.sang@pekall.com"
      ],
      "line": 11
    }
  ],
  "keyword": "当"
});
formatter.step({
  "line": 12,
  "name": "定位设备",
  "keyword": "而且"
});
formatter.step({
  "line": 13,
  "name": "设备定位成功",
  "keyword": "那么"
});
formatter.match({
  "location": "Common_step.登陆mdm服务器()"
});
formatter.result({
  "duration": 1816688205,
  "status": "passed"
});
formatter.match({
  "location": "DeviceManager_step.选择设备(DataTable)"
});
formatter.result({
  "duration": 5299528349,
  "status": "passed"
});
formatter.match({
  "location": "DeviceManager_step.定位设备()"
});
formatter.result({
  "duration": 8281227562,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "设备定位",
      "offset": 0
    }
  ],
  "location": "Common_step._成功(String)"
});
formatter.result({
  "duration": 101171,
  "status": "passed"
});
formatter.write("status:passed");
formatter.after({
  "duration": 456475215,
  "status": "passed"
});
formatter.before({
  "duration": 67451181,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "锁定",
  "description": "",
  "id": "设备管理;锁定",
  "type": "scenario",
  "keyword": "场景"
});
formatter.step({
  "line": 17,
  "name": "登陆MDM服务器",
  "keyword": "假如"
});
formatter.step({
  "line": 18,
  "name": "选择设备",
  "rows": [
    {
      "cells": [
        "账户名"
      ],
      "line": 19
    },
    {
      "cells": [
        "zhenhua.sang@pekall.com"
      ],
      "line": 20
    }
  ],
  "keyword": "当"
});
formatter.step({
  "line": 21,
  "name": "锁定设备",
  "rows": [
    {
      "cells": [
        "密码"
      ],
      "line": 22
    },
    {
      "cells": [
        "123456"
      ],
      "line": 23
    }
  ],
  "keyword": "而且"
});
formatter.step({
  "line": 24,
  "name": "服务器锁定设备成功",
  "keyword": "那么"
});
formatter.step({
  "line": 25,
  "name": "用户手机锁定成功",
  "keyword": "而且"
});
formatter.match({
  "location": "Common_step.登陆mdm服务器()"
});
formatter.result({
  "duration": 1789207533,
  "status": "passed"
});
formatter.match({
  "location": "DeviceManager_step.选择设备(DataTable)"
});
formatter.result({
  "duration": 5072915612,
  "status": "passed"
});
formatter.match({
  "location": "DeviceManager_step.锁定设备(DataTable)"
});
formatter.result({
  "duration": 3693226293,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "服务器锁定设备",
      "offset": 0
    }
  ],
  "location": "Common_step._成功(String)"
});
formatter.result({
  "duration": 232934045,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "用户手机锁定",
      "offset": 0
    }
  ],
  "location": "Common_step._成功(String)"
});
formatter.result({
  "duration": 16163838332,
  "status": "passed"
});
formatter.write("status:passed");
formatter.after({
  "duration": 495412720,
  "status": "passed"
});
formatter.before({
  "duration": 86409372,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "擦除企业数据",
  "description": "",
  "id": "设备管理;擦除企业数据",
  "type": "scenario",
  "keyword": "场景"
});
formatter.step({
  "line": 31,
  "name": "登陆MDM服务器",
  "keyword": "假如"
});
formatter.step({
  "line": 32,
  "name": "选择设备",
  "rows": [
    {
      "cells": [
        "账户名"
      ],
      "line": 33
    },
    {
      "cells": [
        "zhenhua.sang@pekall.com"
      ],
      "line": 34
    }
  ],
  "keyword": "当"
});
formatter.step({
  "line": 35,
  "name": "部分擦除设备",
  "keyword": "而且"
});
formatter.step({
  "line": 36,
  "name": "服务器部分擦除设备成功",
  "keyword": "那么"
});
formatter.step({
  "line": 37,
  "name": "用户手机部分擦除成功",
  "keyword": "而且"
});
formatter.match({
  "location": "Common_step.登陆mdm服务器()"
});
formatter.result({
  "duration": 1851621491,
  "status": "passed"
});
formatter.match({
  "location": "DeviceManager_step.选择设备(DataTable)"
});
formatter.result({
  "duration": 4918345229,
  "status": "passed"
});
formatter.match({
  "location": "DeviceManager_step.部分擦除设备()"
});
formatter.result({
  "duration": 3523765833,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "服务器部分擦除设备",
      "offset": 0
    }
  ],
  "location": "Common_step._成功(String)"
});
formatter.result({
  "duration": 215461872,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "用户手机部分擦除",
      "offset": 0
    }
  ],
  "location": "Common_step._成功(String)"
});
formatter.result({
  "duration": 27886959051,
  "status": "passed"
});
formatter.write("status:passed");
formatter.after({
  "duration": 504293189,
  "status": "passed"
});
formatter.uri("com/pekall/test/mdm/features/c_策略配置.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# language: zh-CN"
    }
  ],
  "line": 3,
  "name": "策略配置",
  "description": "Android密码策略的添加，下发，更新，删除\r\nAndroid限制策略的添加，下发\r\nWIFI、email配置的添加，下发，更新，删除",
  "id": "策略配置",
  "keyword": "功能"
});
formatter.before({
  "duration": 79184492,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "添加Android密码策略",
  "description": "",
  "id": "策略配置;添加android密码策略",
  "type": "scenario",
  "keyword": "场景"
});
formatter.step({
  "line": 10,
  "name": "登陆MDM服务器",
  "keyword": "假如"
});
formatter.step({
  "line": 11,
  "name": "添加Android密码策略",
  "rows": [
    {
      "cells": [
        "策略名称",
        "策略描述",
        "密码等级",
        "最小密码长度",
        "最小特殊字符个数",
        "最大期限天数",
        "最长宽限时间",
        "保存次数",
        "失败次数"
      ],
      "line": 12
    },
    {
      "cells": [
        "Android密码策略自动化测试",
        "自动化测试",
        "数字",
        "4",
        "",
        "1",
        "30分钟",
        "5",
        "10次"
      ],
      "line": 13
    }
  ],
  "keyword": "当"
});
formatter.step({
  "line": 14,
  "name": "Android密码策略添加成功",
  "keyword": "那么"
});
formatter.match({
  "location": "Common_step.登陆mdm服务器()"
});
formatter.result({
  "duration": 1779361233,
  "status": "passed"
});
formatter.match({
  "location": "PloyManager_step.添加android密码策略(DataTable)"
});
formatter.result({
  "duration": 6292873220,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Android密码策略添加",
      "offset": 0
    }
  ],
  "location": "Common_step._成功(String)"
});
formatter.result({
  "duration": 230332695,
  "status": "passed"
});
formatter.write("status:passed");
formatter.after({
  "duration": 457361991,
  "status": "passed"
});
formatter.before({
  "duration": 60268900,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Android密码策略下发分组",
  "description": "",
  "id": "策略配置;android密码策略下发分组",
  "type": "scenario",
  "keyword": "场景"
});
formatter.step({
  "line": 18,
  "name": "登陆MDM服务器",
  "keyword": "假如"
});
formatter.step({
  "line": 19,
  "name": "选择Android密码策略",
  "rows": [
    {
      "cells": [
        "策略名称"
      ],
      "line": 20
    },
    {
      "cells": [
        "Android密码策略自动化测试"
      ],
      "line": 21
    }
  ],
  "keyword": "当"
});
formatter.step({
  "line": 22,
  "name": "Android密码策略下发到分组",
  "rows": [
    {
      "cells": [
        "分组"
      ],
      "line": 23
    },
    {
      "cells": [
        "自动化测试"
      ],
      "line": 24
    }
  ],
  "keyword": "而且"
});
formatter.step({
  "line": 25,
  "name": "服务器Android密码策略下发到分组成功",
  "keyword": "那么"
});
formatter.step({
  "line": 26,
  "name": "用户手机Android密码策略接收成功",
  "keyword": "而且"
});
formatter.match({
  "location": "Common_step.登陆mdm服务器()"
});
formatter.result({
  "duration": 1809519441,
  "status": "passed"
});
formatter.match({
  "location": "PloyManager_step.选择android密码策略(DataTable)"
});
formatter.result({
  "duration": 4648409023,
  "status": "passed"
});
formatter.match({
  "location": "PloyManager_step.下发到分组(DataTable)"
});
formatter.result({
  "duration": 5870594018,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "服务器Android密码策略下发到分组",
      "offset": 0
    }
  ],
  "location": "Common_step._成功(String)"
});
formatter.result({
  "duration": 198272320,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "用户手机Android密码策略接收",
      "offset": 0
    }
  ],
  "location": "Common_step._成功(String)"
});
formatter.result({
  "duration": 141065281547,
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat com.pekall.test.mdm.step.Common_step._成功(Common_step.java:49)\r\n\tat ✽.而且用户手机Android密码策略接收成功(com/pekall/test/mdm/features/c_策略配置.feature:26)\r\n",
  "status": "failed"
});
formatter.write("status:failed");
formatter.after({
  "duration": 473048732,
  "status": "passed"
});
formatter.before({
  "duration": 79037857,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Android密码策略下发用户",
  "description": "",
  "id": "策略配置;android密码策略下发用户",
  "type": "scenario",
  "keyword": "场景"
});
formatter.step({
  "line": 30,
  "name": "登陆MDM服务器",
  "keyword": "假如"
});
formatter.step({
  "line": 31,
  "name": "选择Android密码策略",
  "rows": [
    {
      "cells": [
        "策略名称"
      ],
      "line": 32
    },
    {
      "cells": [
        "Android密码策略自动化测试"
      ],
      "line": 33
    }
  ],
  "keyword": "当"
});
formatter.step({
  "line": 34,
  "name": "Android密码策略下发到用户",
  "rows": [
    {
      "cells": [
        "姓名"
      ],
      "line": 35
    },
    {
      "cells": [
        "自动测试下发"
      ],
      "line": 36
    }
  ],
  "keyword": "而且"
});
formatter.step({
  "line": 37,
  "name": "服务器Android密码策略下发到用户成功",
  "keyword": "那么"
});
formatter.match({
  "location": "Common_step.登陆mdm服务器()"
});
formatter.result({
  "duration": 1817305467,
  "status": "passed"
});
formatter.match({
  "location": "PloyManager_step.选择android密码策略(DataTable)"
});
formatter.result({
  "duration": 4645610658,
  "status": "passed"
});
formatter.match({
  "location": "PloyManager_step.下发到用户(DataTable)"
});
formatter.result({
  "duration": 6825090674,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "服务器Android密码策略下发到用户",
      "offset": 0
    }
  ],
  "location": "Common_step._成功(String)"
});
formatter.result({
  "duration": 220046080,
  "status": "passed"
});
formatter.write("status:passed");
formatter.after({
  "duration": 453769008,
  "status": "passed"
});
formatter.before({
  "duration": 83450443,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 38,
      "value": "#而且用户手机Android密码策略接收成功"
    }
  ],
  "line": 41,
  "name": "更新Android密码策略",
  "description": "",
  "id": "策略配置;更新android密码策略",
  "type": "scenario",
  "keyword": "场景"
});
formatter.step({
  "line": 42,
  "name": "登陆MDM服务器",
  "keyword": "假如"
});
formatter.step({
  "line": 43,
  "name": "选择Android密码策略",
  "rows": [
    {
      "cells": [
        "策略名称"
      ],
      "line": 44
    },
    {
      "cells": [
        "Android密码策略自动化测试"
      ],
      "line": 45
    }
  ],
  "keyword": "当"
});
formatter.step({
  "line": 46,
  "name": "更新Android密码策略",
  "rows": [
    {
      "cells": [
        "策略描述",
        "密码等级",
        "最小密码长度",
        "最小特殊字符个数",
        "最大期限天数",
        "最长宽限时间",
        "保存次数",
        "失败次数"
      ],
      "line": 47
    },
    {
      "cells": [
        "自动化测试",
        "混合",
        "10",
        "1",
        "2",
        "10分钟",
        "5",
        "4次"
      ],
      "line": 48
    }
  ],
  "keyword": "而且"
});
formatter.step({
  "line": 49,
  "name": "服务器Android密码策略更新成功",
  "keyword": "那么"
});
formatter.step({
  "line": 50,
  "name": "用户手机Android密码策略更新成功",
  "keyword": "而且"
});
formatter.match({
  "location": "Common_step.登陆mdm服务器()"
});
formatter.result({
  "duration": 1812471405,
  "status": "passed"
});
formatter.match({
  "location": "PloyManager_step.选择android密码策略(DataTable)"
});
formatter.result({
  "duration": 4661647604,
  "status": "passed"
});
formatter.match({
  "location": "PloyManager_step.更新android密码策略(DataTable)"
});
formatter.result({
  "duration": 3605397667,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "服务器Android密码策略更新",
      "offset": 0
    }
  ],
  "location": "Common_step._成功(String)"
});
formatter.result({
  "duration": 242066416,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "用户手机Android密码策略更新",
      "offset": 0
    }
  ],
  "location": "Common_step._成功(String)"
});
formatter.result({
  "duration": 72542166562,
  "status": "passed"
});
formatter.write("status:passed");
formatter.after({
  "duration": 450010138,
  "status": "passed"
});
formatter.before({
  "duration": 91106219,
  "status": "passed"
});
formatter.scenario({
  "line": 53,
  "name": "删除Android密码策略",
  "description": "",
  "id": "策略配置;删除android密码策略",
  "type": "scenario",
  "keyword": "场景"
});
formatter.step({
  "line": 54,
  "name": "登陆MDM服务器",
  "keyword": "假如"
});
formatter.step({
  "line": 55,
  "name": "选择Android密码策略",
  "rows": [
    {
      "cells": [
        "策略名称"
      ],
      "line": 56
    },
    {
      "cells": [
        "Android密码策略自动化测试"
      ],
      "line": 57
    }
  ],
  "keyword": "当"
});
formatter.step({
  "line": 58,
  "name": "删除Android密码策略",
  "keyword": "而且"
});
formatter.step({
  "line": 59,
  "name": "Android密码策略删除成功",
  "keyword": "那么"
});
formatter.match({
  "location": "Common_step.登陆mdm服务器()"
});
formatter.result({
  "duration": 1842848746,
  "status": "passed"
});
formatter.match({
  "location": "PloyManager_step.选择android密码策略(DataTable)"
});
formatter.result({
  "duration": 4665578914,
  "status": "passed"
});
formatter.match({
  "location": "PloyManager_step.删除android密码策略()"
});
formatter.result({
  "duration": 3416064389,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Android密码策略删除",
      "offset": 0
    }
  ],
  "location": "Common_step._成功(String)"
});
formatter.result({
  "duration": 228569790,
  "status": "passed"
});
formatter.write("status:passed");
formatter.after({
  "duration": 483625752,
  "status": "passed"
});
formatter.before({
  "duration": 79872206,
  "status": "passed"
});
formatter.scenario({
  "line": 62,
  "name": "解锁设备",
  "description": "",
  "id": "策略配置;解锁设备",
  "type": "scenario",
  "keyword": "场景"
});
formatter.step({
  "line": 63,
  "name": "登陆MDM服务器",
  "keyword": "假如"
});
formatter.step({
  "line": 64,
  "name": "选择设备",
  "rows": [
    {
      "cells": [
        "账户名"
      ],
      "line": 65
    },
    {
      "cells": [
        "zhenhua.sang@pekall.com"
      ],
      "line": 66
    }
  ],
  "keyword": "当"
});
formatter.step({
  "line": 67,
  "name": "解锁设备",
  "keyword": "而且"
});
formatter.step({
  "line": 68,
  "name": "服务器解锁设备成功",
  "keyword": "那么"
});
formatter.step({
  "line": 69,
  "name": "用户手机解锁成功",
  "keyword": "而且"
});
formatter.match({
  "location": "Common_step.登陆mdm服务器()"
});
formatter.result({
  "duration": 1830532988,
  "status": "passed"
});
formatter.match({
  "location": "DeviceManager_step.选择设备(DataTable)"
});
formatter.result({
  "duration": 5203997256,
  "status": "passed"
});
formatter.match({
  "location": "DeviceManager_step.解锁设备()"
});
formatter.result({
  "duration": 3530941560,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "服务器解锁设备",
      "offset": 0
    }
  ],
  "location": "Common_step._成功(String)"
});
formatter.result({
  "duration": 205683975,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "用户手机解锁",
      "offset": 0
    }
  ],
  "location": "Common_step._成功(String)"
});
formatter.result({
  "duration": 3996422172,
  "status": "passed"
});
formatter.write("status:passed");
formatter.after({
  "duration": 460642862,
  "status": "passed"
});
formatter.before({
  "duration": 91667366,
  "status": "passed"
});
formatter.scenario({
  "line": 72,
  "name": "添加Android限制策略",
  "description": "",
  "id": "策略配置;添加android限制策略",
  "type": "scenario",
  "keyword": "场景"
});
formatter.step({
  "line": 73,
  "name": "登陆MDM服务器",
  "keyword": "假如"
});
formatter.step({
  "line": 74,
  "name": "添加Android限制策略",
  "rows": [
    {
      "cells": [
        "策略名称",
        "策略描述",
        "相机策略"
      ],
      "line": 75
    },
    {
      "cells": [
        "Android限制策略自动化测试",
        "自动化测试",
        "不允许"
      ],
      "line": 76
    }
  ],
  "keyword": "当"
});
formatter.step({
  "line": 77,
  "name": "Android限制策略添加成功",
  "keyword": "那么"
});
formatter.match({
  "location": "Common_step.登陆mdm服务器()"
});
formatter.result({
  "duration": 1789821928,
  "status": "passed"
});
formatter.match({
  "location": "PloyManager_step.添加android限制策略(DataTable)"
});
formatter.result({
  "duration": 5651720614,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Android限制策略添加",
      "offset": 0
    }
  ],
  "location": "Common_step._成功(String)"
});
formatter.result({
  "duration": 215683874,
  "status": "passed"
});
formatter.write("status:passed");
formatter.after({
  "duration": 501504654,
  "status": "passed"
});
formatter.before({
  "duration": 92561106,
  "status": "passed"
});
formatter.scenario({
  "line": 80,
  "name": "Android限制策略下发分组",
  "description": "",
  "id": "策略配置;android限制策略下发分组",
  "type": "scenario",
  "keyword": "场景"
});
formatter.step({
  "line": 81,
  "name": "登陆MDM服务器",
  "keyword": "假如"
});
formatter.step({
  "line": 82,
  "name": "选择Android限制策略",
  "rows": [
    {
      "cells": [
        "策略名称"
      ],
      "line": 83
    },
    {
      "cells": [
        "Android限制策略自动化测试"
      ],
      "line": 84
    }
  ],
  "keyword": "当"
});
formatter.step({
  "line": 85,
  "name": "Android限制策略下发到分组",
  "rows": [
    {
      "cells": [
        "分组"
      ],
      "line": 86
    },
    {
      "cells": [
        "自动化测试"
      ],
      "line": 87
    }
  ],
  "keyword": "而且"
});
formatter.step({
  "line": 88,
  "name": "服务器Android限制策略下发到分组成功",
  "keyword": "那么"
});
formatter.step({
  "line": 89,
  "name": "用户手机Android限制策略接收成功",
  "keyword": "而且"
});
formatter.match({
  "location": "Common_step.登陆mdm服务器()"
});
formatter.result({
  "duration": 1916078520,
  "status": "passed"
});
formatter.match({
  "location": "PloyManager_step.选择android限制策略(DataTable)"
});
formatter.result({
  "duration": 4714321350,
  "status": "passed"
});
formatter.match({
  "location": "PloyManager_step.android限制策略下发到分组(DataTable)"
});
formatter.result({
  "duration": 5784511095,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "服务器Android限制策略下发到分组",
      "offset": 0
    }
  ],
  "location": "Common_step._成功(String)"
});
formatter.result({
  "duration": 204764430,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "用户手机Android限制策略接收",
      "offset": 0
    }
  ],
  "location": "Common_step._成功(String)"
});
formatter.result({
  "duration": 128478701578,
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat com.pekall.test.mdm.step.Common_step._成功(Common_step.java:62)\r\n\tat ✽.而且用户手机Android限制策略接收成功(com/pekall/test/mdm/features/c_策略配置.feature:89)\r\n",
  "status": "failed"
});
formatter.write("status:failed");
formatter.after({
  "duration": 480621768,
  "status": "passed"
});
formatter.before({
  "duration": 82451847,
  "status": "passed"
});
formatter.scenario({
  "line": 92,
  "name": "Android限制策略下发用户",
  "description": "",
  "id": "策略配置;android限制策略下发用户",
  "type": "scenario",
  "keyword": "场景"
});
formatter.step({
  "line": 93,
  "name": "登陆MDM服务器",
  "keyword": "假如"
});
formatter.step({
  "line": 94,
  "name": "选择Android限制策略",
  "rows": [
    {
      "cells": [
        "策略名称"
      ],
      "line": 95
    },
    {
      "cells": [
        "Android限制策略自动化测试"
      ],
      "line": 96
    }
  ],
  "keyword": "当"
});
formatter.step({
  "line": 97,
  "name": "Android限制策略下发到用户",
  "rows": [
    {
      "cells": [
        "姓名"
      ],
      "line": 98
    },
    {
      "cells": [
        "自动测试下发"
      ],
      "line": 99
    }
  ],
  "keyword": "而且"
});
formatter.step({
  "line": 100,
  "name": "服务器Android限制策略下发到用户成功",
  "keyword": "那么"
});
formatter.match({
  "location": "Common_step.登陆mdm服务器()"
});
formatter.result({
  "duration": 1814915060,
  "status": "passed"
});
formatter.match({
  "location": "PloyManager_step.选择android限制策略(DataTable)"
});
formatter.result({
  "duration": 4653638756,
  "status": "passed"
});
formatter.match({
  "location": "PloyManager_step.android限制策略下发到用户(DataTable)"
});
formatter.result({
  "duration": 6818530162,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "服务器Android限制策略下发到用户",
      "offset": 0
    }
  ],
  "location": "Common_step._成功(String)"
});
formatter.result({
  "duration": 220093593,
  "status": "passed"
});
formatter.write("status:passed");
formatter.after({
  "duration": 495002713,
  "status": "passed"
});
formatter.before({
  "duration": 75840953,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 101,
      "value": "# 而且用户手机Android限制策略接收成功"
    }
  ],
  "line": 104,
  "name": "删除Android限制策略",
  "description": "",
  "id": "策略配置;删除android限制策略",
  "type": "scenario",
  "keyword": "场景"
});
formatter.step({
  "line": 105,
  "name": "登陆MDM服务器",
  "keyword": "假如"
});
formatter.step({
  "line": 106,
  "name": "选择Android限制策略",
  "rows": [
    {
      "cells": [
        "策略名称"
      ],
      "line": 107
    },
    {
      "cells": [
        "Android限制策略自动化测试"
      ],
      "line": 108
    }
  ],
  "keyword": "当"
});
formatter.step({
  "line": 109,
  "name": "删除Android限制策略",
  "keyword": "而且"
});
formatter.step({
  "line": 110,
  "name": "服务器Android限制策略删除成功",
  "keyword": "那么"
});
formatter.step({
  "line": 111,
  "name": "用户手机Android限制策略删除成功",
  "keyword": "而且"
});
formatter.match({
  "location": "Common_step.登陆mdm服务器()"
});
formatter.result({
  "duration": 1796653594,
  "status": "passed"
});
formatter.match({
  "location": "PloyManager_step.选择android限制策略(DataTable)"
});
formatter.result({
  "duration": 4649456772,
  "status": "passed"
});
formatter.match({
  "location": "PloyManager_step.删除android限制策略()"
});
formatter.result({
  "duration": 3396562663,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "服务器Android限制策略删除",
      "offset": 0
    }
  ],
  "location": "Common_step._成功(String)"
});
formatter.result({
  "duration": 196298063,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "用户手机Android限制策略删除",
      "offset": 0
    }
  ],
  "location": "Common_step._成功(String)"
});
formatter.result({
  "duration": 11969320786,
  "status": "passed"
});
formatter.write("status:passed");
formatter.after({
  "duration": 490535241,
  "status": "passed"
});
formatter.before({
  "duration": 78548389,
  "status": "passed"
});
formatter.scenario({
  "line": 114,
  "name": "添加WIFI配置",
  "description": "",
  "id": "策略配置;添加wifi配置",
  "type": "scenario",
  "keyword": "场景"
});
formatter.step({
  "line": 115,
  "name": "登陆MDM服务器",
  "keyword": "假如"
});
formatter.step({
  "line": 116,
  "name": "添加WIFI配置",
  "rows": [
    {
      "cells": [
        "配置名称",
        "配置描述",
        "SSID",
        "自动加入",
        "隐藏网络",
        "安全类型",
        "代理服务器URL",
        "密码"
      ],
      "line": 117
    },
    {
      "cells": [
        "WIFI配置自动化测试",
        "pekall",
        "pekall_work",
        "是",
        "否",
        "WPA/WPA2",
        "",
        "pekallcloud"
      ],
      "line": 118
    }
  ],
  "keyword": "当"
});
formatter.step({
  "line": 119,
  "name": "WIFI配置添加成功",
  "keyword": "那么"
});
formatter.match({
  "location": "Common_step.登陆mdm服务器()"
});
formatter.result({
  "duration": 1889670992,
  "status": "passed"
});
formatter.match({
  "location": "PloyManager_step.添加wifi配置(DataTable)"
});
formatter.result({
  "duration": 7287290005,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "WIFI配置添加",
      "offset": 0
    }
  ],
  "location": "Common_step._成功(String)"
});
formatter.result({
  "duration": 214065146,
  "status": "passed"
});
formatter.write("status:passed");
formatter.after({
  "duration": 454881063,
  "status": "passed"
});
formatter.before({
  "duration": 88522482,
  "status": "passed"
});
formatter.scenario({
  "line": 121,
  "name": "WIFI配置下发分组",
  "description": "",
  "id": "策略配置;wifi配置下发分组",
  "type": "scenario",
  "keyword": "场景"
});
formatter.step({
  "line": 122,
  "name": "登陆MDM服务器",
  "keyword": "假如"
});
formatter.step({
  "line": 123,
  "name": "选择WIFI策略",
  "rows": [
    {
      "cells": [
        "策略名称"
      ],
      "line": 124
    },
    {
      "cells": [
        "WIFI配置自动化测试"
      ],
      "line": 125
    }
  ],
  "keyword": "当"
});
formatter.step({
  "line": 126,
  "name": "WIFI配置下发到分组",
  "rows": [
    {
      "cells": [
        "分组"
      ],
      "line": 127
    },
    {
      "cells": [
        "自动化测试"
      ],
      "line": 128
    }
  ],
  "keyword": "而且"
});
formatter.step({
  "line": 129,
  "name": "服务器WIFI配置下发到分组成功",
  "keyword": "那么"
});
formatter.step({
  "line": 130,
  "name": "用户手机WIFI配置接收成功",
  "keyword": "而且"
});
formatter.match({
  "location": "Common_step.登陆mdm服务器()"
});
formatter.result({
  "duration": 1870066457,
  "status": "passed"
});
formatter.match({
  "location": "PloyManager_step.选择wifi策略(DataTable)"
});
formatter.result({
  "duration": 6677094730,
  "status": "passed"
});
formatter.match({
  "location": "PloyManager_step.wifi配置下发到分组(DataTable)"
});
formatter.result({
  "duration": 5864858433,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "服务器WIFI配置下发到分组",
      "offset": 0
    }
  ],
  "location": "Common_step._成功(String)"
});
formatter.result({
  "duration": 199773903,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "用户手机WIFI配置接收",
      "offset": 0
    }
  ],
  "location": "Common_step._成功(String)"
});
formatter.result({
  "duration": 15502439763,
  "status": "passed"
});
formatter.write("status:passed");
formatter.after({
  "duration": 449390008,
  "status": "passed"
});
formatter.before({
  "duration": 87409607,
  "status": "passed"
});
formatter.scenario({
  "line": 133,
  "name": "更新WIFI配置",
  "description": "",
  "id": "策略配置;更新wifi配置",
  "type": "scenario",
  "keyword": "场景"
});
formatter.step({
  "line": 134,
  "name": "登陆MDM服务器",
  "keyword": "假如"
});
formatter.step({
  "line": 135,
  "name": "选择WIFI策略",
  "rows": [
    {
      "cells": [
        "策略名称"
      ],
      "line": 136
    },
    {
      "cells": [
        "WIFI配置自动化测试"
      ],
      "line": 137
    }
  ],
  "keyword": "当"
});
formatter.step({
  "line": 138,
  "name": "更新WIFI配置",
  "rows": [
    {
      "cells": [
        "配置描述",
        "SSID",
        "自动加入",
        "隐藏网络",
        "安全类型",
        "代理服务器URL",
        "密码"
      ],
      "line": 139
    },
    {
      "cells": [
        "TEST_SERVER",
        "TEST_SERVER",
        "是",
        "否",
        "WPA/WPA2",
        "",
        "test_server"
      ],
      "line": 140
    }
  ],
  "keyword": "当"
});
formatter.step({
  "line": 141,
  "name": "服务器WIFI配置更新成功",
  "keyword": "那么"
});
formatter.step({
  "line": 142,
  "name": "用户手机WIFI配置更新成功",
  "keyword": "而且"
});
formatter.match({
  "location": "Common_step.登陆mdm服务器()"
});
formatter.result({
  "duration": 1911345628,
  "status": "passed"
});
formatter.match({
  "location": "PloyManager_step.选择wifi策略(DataTable)"
});
formatter.result({
  "duration": 6676568807,
  "status": "passed"
});
formatter.match({
  "location": "PloyManager_step.更新wifi配置(DataTable)"
});
formatter.result({
  "duration": 3440545173,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "服务器WIFI配置更新",
      "offset": 0
    }
  ],
  "location": "Common_step._成功(String)"
});
formatter.result({
  "duration": 211149636,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "用户手机WIFI配置更新",
      "offset": 0
    }
  ],
  "location": "Common_step._成功(String)"
});
formatter.result({
  "duration": 14134314181,
  "status": "passed"
});
formatter.write("status:passed");
formatter.after({
  "duration": 444426514,
  "status": "passed"
});
formatter.before({
  "duration": 81894386,
  "status": "passed"
});
formatter.scenario({
  "line": 145,
  "name": "删除WIFI配置",
  "description": "",
  "id": "策略配置;删除wifi配置",
  "type": "scenario",
  "keyword": "场景"
});
formatter.step({
  "line": 146,
  "name": "登陆MDM服务器",
  "keyword": "假如"
});
formatter.step({
  "line": 147,
  "name": "选择WIFI策略",
  "rows": [
    {
      "cells": [
        "策略名称"
      ],
      "line": 148
    },
    {
      "cells": [
        "WIFI配置自动化测试"
      ],
      "line": 149
    }
  ],
  "keyword": "当"
});
formatter.step({
  "line": 150,
  "name": "删除WIFI配置",
  "keyword": "当"
});
formatter.step({
  "line": 151,
  "name": "服务器WIFI配置删除成功",
  "keyword": "那么"
});
formatter.step({
  "line": 152,
  "name": "用户手机WIFI配置删除成功",
  "keyword": "而且"
});
formatter.match({
  "location": "Common_step.登陆mdm服务器()"
});
formatter.result({
  "duration": 1805832249,
  "status": "passed"
});
formatter.match({
  "location": "PloyManager_step.选择wifi策略(DataTable)"
});
formatter.result({
  "duration": 6708728304,
  "status": "passed"
});
formatter.match({
  "location": "PloyManager_step.删除wifi配置()"
});
formatter.result({
  "duration": 3440652897,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "服务器WIFI配置删除",
      "offset": 0
    }
  ],
  "location": "Common_step._成功(String)"
});
formatter.result({
  "duration": 213865263,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "用户手机WIFI配置删除",
      "offset": 0
    }
  ],
  "location": "Common_step._成功(String)"
});
formatter.result({
  "duration": 13921735053,
  "status": "passed"
});
formatter.write("status:passed");
formatter.after({
  "duration": 494086855,
  "status": "passed"
});
formatter.before({
  "duration": 87016804,
  "status": "passed"
});
formatter.scenario({
  "line": 155,
  "name": "添加Emial配置",
  "description": "",
  "id": "策略配置;添加emial配置",
  "type": "scenario",
  "keyword": "场景"
});
formatter.step({
  "line": 156,
  "name": "登陆MDM服务器",
  "keyword": "假如"
});
formatter.step({
  "line": 157,
  "name": "添加Email配置",
  "rows": [
    {
      "cells": [
        "配置名称",
        "配置描述",
        "账户描述",
        "账户类型",
        "路径前缀",
        "用户名称",
        "电子邮件",
        "允许移动",
        "发送服务器主机名称",
        "发送服务器端口号",
        "发送服务器用户名",
        "发送服务器鉴定类型",
        "发送服务器密码",
        "发送服务器使用ssl",
        "接收服务器主机名称",
        "接收服务器端口号",
        "接收服务器用户名",
        "接收服务器鉴定类型",
        "接收服务器密码",
        "接收服务器使用ssl"
      ],
      "line": 158
    },
    {
      "cells": [
        "Email配置自动化测试",
        "自动化测试",
        "123",
        "IMAP",
        "",
        "John",
        "",
        "是",
        "mail.pekall.com",
        "993",
        "auto",
        "",
        "",
        "是",
        "mail.pekall.com",
        "465",
        "auto",
        "",
        "",
        "是"
      ],
      "line": 159
    }
  ],
  "keyword": "当"
});
formatter.step({
  "line": 160,
  "name": "Email配置添加成功",
  "keyword": "那么"
});
formatter.match({
  "location": "Common_step.登陆mdm服务器()"
});
formatter.result({
  "duration": 1917451489,
  "status": "passed"
});
formatter.match({
  "location": "PloyManager_step.添加email配置(DataTable)"
});
formatter.result({
  "duration": 8910811104,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Email配置添加",
      "offset": 0
    }
  ],
  "location": "Common_step._成功(String)"
});
formatter.result({
  "duration": 223826249,
  "status": "passed"
});
formatter.write("status:passed");
formatter.after({
  "duration": 447635704,
  "status": "passed"
});
formatter.before({
  "duration": 80893330,
  "status": "passed"
});
formatter.scenario({
  "line": 162,
  "name": "Email配置下发用户",
  "description": "",
  "id": "策略配置;email配置下发用户",
  "type": "scenario",
  "keyword": "场景"
});
formatter.step({
  "line": 163,
  "name": "登陆MDM服务器",
  "keyword": "假如"
});
formatter.step({
  "line": 164,
  "name": "选择Email策略",
  "rows": [
    {
      "cells": [
        "策略名称"
      ],
      "line": 165
    },
    {
      "cells": [
        "Email配置自动化测试"
      ],
      "line": 166
    }
  ],
  "keyword": "当"
});
formatter.step({
  "line": 167,
  "name": "Email配置下发到用户",
  "rows": [
    {
      "cells": [
        "姓名"
      ],
      "line": 168
    },
    {
      "cells": [
        "自动测试下发"
      ],
      "line": 169
    }
  ],
  "keyword": "而且"
});
formatter.step({
  "line": 170,
  "name": "服务器Email配置下发到用户成功",
  "keyword": "那么"
});
formatter.step({
  "line": 171,
  "name": "用户手机Email配置接收成功",
  "keyword": "而且"
});
formatter.match({
  "location": "Common_step.登陆mdm服务器()"
});
formatter.result({
  "duration": 1804065248,
  "status": "passed"
});
formatter.match({
  "location": "PloyManager_step.选择email策略(DataTable)"
});
formatter.result({
  "duration": 5711260432,
  "status": "passed"
});
formatter.match({
  "location": "PloyManager_step.Email配置下发到用户(DataTable)"
});
formatter.result({
  "duration": 6768230030,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "服务器Email配置下发到用户",
      "offset": 0
    }
  ],
  "location": "Common_step._成功(String)"
});
formatter.result({
  "duration": 194781736,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "用户手机Email配置接收",
      "offset": 0
    }
  ],
  "location": "Common_step._成功(String)"
});
formatter.result({
  "duration": 36959771854,
  "status": "passed"
});
formatter.write("status:passed");
formatter.after({
  "duration": 445840032,
  "status": "passed"
});
formatter.before({
  "duration": 88934127,
  "status": "passed"
});
formatter.scenario({
  "line": 173,
  "name": "更新Email配置",
  "description": "",
  "id": "策略配置;更新email配置",
  "type": "scenario",
  "keyword": "场景"
});
formatter.step({
  "line": 174,
  "name": "登陆MDM服务器",
  "keyword": "假如"
});
formatter.step({
  "line": 175,
  "name": "选择Email策略",
  "rows": [
    {
      "cells": [
        "策略名称"
      ],
      "line": 176
    },
    {
      "cells": [
        "Email配置自动化测试"
      ],
      "line": 177
    }
  ],
  "keyword": "当"
});
formatter.step({
  "line": 178,
  "name": "更新Email配置",
  "rows": [
    {
      "cells": [
        "配置描述",
        "账户描述",
        "账户类型",
        "路径前缀",
        "用户名称",
        "电子邮件",
        "允许移动",
        "发送服务器主机名称",
        "发送服务器端口号",
        "发送服务器用户名",
        "发送服务器鉴定类型",
        "发送服务器密码",
        "发送服务器使用ssl",
        "接收服务器主机名称",
        "接收服务器端口号",
        "接收服务器用户名",
        "接收服务器鉴定类型",
        "接收服务器密码",
        "接收服务器使用ssl"
      ],
      "line": 179
    },
    {
      "cells": [
        "自动化测试",
        "123",
        "POP3",
        "",
        "John",
        "2227435859@qq.com",
        "是",
        "smtp.qq.com",
        "465",
        "auto",
        "",
        "",
        "是",
        "pop.qq.com",
        "995",
        "auto",
        "",
        "",
        "是"
      ],
      "line": 180
    }
  ],
  "keyword": "当"
});
formatter.step({
  "line": 181,
  "name": "服务器Email配置更新成功",
  "keyword": "那么"
});
formatter.step({
  "line": 182,
  "name": "用户手机Email配置更新成功",
  "keyword": "而且"
});
formatter.match({
  "location": "Common_step.登陆mdm服务器()"
});
formatter.result({
  "duration": 1809832782,
  "status": "passed"
});
formatter.match({
  "location": "PloyManager_step.选择email策略(DataTable)"
});
formatter.result({
  "duration": 5702354977,
  "status": "passed"
});
formatter.match({
  "location": "PloyManager_step.更新email配置(DataTable)"
});
formatter.result({
  "duration": 5037295022,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "服务器Email配置更新",
      "offset": 0
    }
  ],
  "location": "Common_step._成功(String)"
});
formatter.result({
  "duration": 205470166,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "用户手机Email配置更新",
      "offset": 0
    }
  ],
  "location": "Common_step._成功(String)"
});
formatter.result({
  "duration": 9411474037,
  "status": "passed"
});
formatter.write("status:passed");
formatter.after({
  "duration": 461289206,
  "status": "passed"
});
formatter.before({
  "duration": 99941223,
  "status": "passed"
});
formatter.scenario({
  "line": 185,
  "name": "删除Email配置",
  "description": "",
  "id": "策略配置;删除email配置",
  "type": "scenario",
  "keyword": "场景"
});
formatter.step({
  "line": 186,
  "name": "登陆MDM服务器",
  "keyword": "假如"
});
formatter.step({
  "line": 187,
  "name": "选择Email策略",
  "rows": [
    {
      "cells": [
        "策略名称"
      ],
      "line": 188
    },
    {
      "cells": [
        "Email配置自动化测试"
      ],
      "line": 189
    }
  ],
  "keyword": "当"
});
formatter.step({
  "line": 190,
  "name": "删除Email配置",
  "keyword": "当"
});
formatter.step({
  "line": 191,
  "name": "服务器Email配置删除成功",
  "keyword": "那么"
});
formatter.step({
  "line": 192,
  "name": "用户手机Email配置删除成功",
  "keyword": "而且"
});
formatter.match({
  "location": "Common_step.登陆mdm服务器()"
});
formatter.result({
  "duration": 1779338706,
  "status": "passed"
});
formatter.match({
  "location": "PloyManager_step.选择email策略(DataTable)"
});
formatter.result({
  "duration": 5671824856,
  "status": "passed"
});
formatter.match({
  "location": "PloyManager_step.删除email配置()"
});
formatter.result({
  "duration": 3359971328,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "服务器Email配置删除",
      "offset": 0
    }
  ],
  "location": "Common_step._成功(String)"
});
formatter.result({
  "duration": 226523445,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "用户手机Email配置删除",
      "offset": 0
    }
  ],
  "location": "Common_step._成功(String)"
});
formatter.result({
  "duration": 6454826587,
  "status": "passed"
});
formatter.write("status:passed");
formatter.after({
  "duration": 475507132,
  "status": "passed"
});
formatter.uri("com/pekall/test/mdm/features/d_文档管理.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# language: zh-CN"
    }
  ],
  "line": 3,
  "name": "文档管理",
  "description": "新建下发删除文档",
  "id": "文档管理",
  "keyword": "功能"
});
formatter.before({
  "duration": 96927409,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "新建文档",
  "description": "",
  "id": "文档管理;新建文档",
  "type": "scenario",
  "keyword": "场景"
});
formatter.step({
  "line": 8,
  "name": "登陆MDM服务器",
  "keyword": "假如"
});
formatter.step({
  "line": 9,
  "name": "添加文档",
  "rows": [
    {
      "cells": [
        "文档名称",
        "文档描述",
        "文档路径"
      ],
      "line": 10
    },
    {
      "cells": [
        "AutomatedTestDoc",
        "自动化测试文档",
        "D:\\documentTest.txt"
      ],
      "line": 11
    }
  ],
  "keyword": "当"
});
formatter.step({
  "line": 12,
  "name": "文档添加成功",
  "keyword": "那么"
});
formatter.match({
  "location": "Common_step.登陆mdm服务器()"
});
formatter.result({
  "duration": 1815722375,
  "status": "passed"
});
formatter.match({
  "location": "DocManager_step.添加文档(DataTable)"
});
formatter.result({
  "duration": 7824055214,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "文档添加",
      "offset": 0
    }
  ],
  "location": "Common_step._成功(String)"
});
formatter.result({
  "duration": 213558066,
  "status": "passed"
});
formatter.write("status:passed");
formatter.after({
  "duration": 497416878,
  "status": "passed"
});
formatter.before({
  "duration": 86073093,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "文档下发",
  "description": "",
  "id": "文档管理;文档下发",
  "type": "scenario",
  "keyword": "场景"
});
formatter.step({
  "line": 16,
  "name": "登陆MDM服务器",
  "keyword": "假如"
});
formatter.step({
  "line": 17,
  "name": "选择文档",
  "rows": [
    {
      "cells": [
        "文档名称"
      ],
      "line": 18
    },
    {
      "cells": [
        "AutomatedTestDoc"
      ],
      "line": 19
    }
  ],
  "keyword": "当"
});
formatter.step({
  "line": 20,
  "name": "文档下发到分组",
  "rows": [
    {
      "cells": [
        "分组"
      ],
      "line": 21
    },
    {
      "cells": [
        "自动化测试"
      ],
      "line": 22
    }
  ],
  "keyword": "而且"
});
formatter.step({
  "line": 23,
  "name": "服务器文档下发到分组成功",
  "keyword": "那么"
});
formatter.step({
  "line": 24,
  "name": "用户手机文档接收成功",
  "keyword": "而且"
});
formatter.match({
  "location": "Common_step.登陆mdm服务器()"
});
formatter.result({
  "duration": 1845534882,
  "status": "passed"
});
formatter.match({
  "location": "DocManager_step.选择文档(DataTable)"
});
formatter.result({
  "duration": 4662870250,
  "status": "passed"
});
formatter.match({
  "location": "DocManager_step.文档下发到分组(DataTable)"
});
formatter.result({
  "duration": 5817909213,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "服务器文档下发到分组",
      "offset": 0
    }
  ],
  "location": "Common_step._成功(String)"
});
formatter.result({
  "duration": 202817617,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "用户手机文档接收",
      "offset": 0
    }
  ],
  "location": "Common_step._成功(String)"
});
formatter.result({
  "duration": 123128206682,
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat com.pekall.test.mdm.step.Common_step._成功(Common_step.java:102)\r\n\tat ✽.而且用户手机文档接收成功(com/pekall/test/mdm/features/d_文档管理.feature:24)\r\n",
  "status": "failed"
});
formatter.write("status:failed");
formatter.after({
  "duration": 488524530,
  "status": "passed"
});
formatter.before({
  "duration": 86798489,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "文档删除",
  "description": "",
  "id": "文档管理;文档删除",
  "type": "scenario",
  "keyword": "场景"
});
formatter.step({
  "line": 28,
  "name": "登陆MDM服务器",
  "keyword": "假如"
});
formatter.step({
  "line": 29,
  "name": "选择文档",
  "rows": [
    {
      "cells": [
        "文档名称"
      ],
      "line": 30
    },
    {
      "cells": [
        "AutomatedTestDoc"
      ],
      "line": 31
    }
  ],
  "keyword": "当"
});
formatter.step({
  "line": 32,
  "name": "删除文档",
  "keyword": "而且"
});
formatter.step({
  "line": 33,
  "name": "服务器文档删除成功",
  "keyword": "那么"
});
formatter.step({
  "line": 34,
  "name": "用户手机文档删除成功",
  "keyword": "而且"
});
formatter.match({
  "location": "Common_step.登陆mdm服务器()"
});
formatter.result({
  "duration": 1878014684,
  "status": "passed"
});
formatter.match({
  "location": "DocManager_step.选择文档(DataTable)"
});
formatter.result({
  "duration": 4667523270,
  "status": "passed"
});
formatter.match({
  "location": "DocManager_step.删除文档()"
});
formatter.result({
  "duration": 3402458400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "服务器文档删除",
      "offset": 0
    }
  ],
  "location": "Common_step._成功(String)"
});
formatter.result({
  "duration": 220580603,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "用户手机文档删除",
      "offset": 0
    }
  ],
  "location": "Common_step._成功(String)"
});
formatter.result({
  "duration": 9993065525,
  "status": "passed"
});
formatter.write("status:passed");
formatter.after({
  "duration": 526059985,
  "status": "passed"
});
formatter.uri("com/pekall/test/mdm/features/e_企业通讯录管理.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# language: zh-CN"
    }
  ],
  "line": 3,
  "name": "企业通讯录管理",
  "description": "新建下发更新删除文档",
  "id": "企业通讯录管理",
  "keyword": "功能"
});
formatter.before({
  "duration": 92754437,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "新建企业通讯录",
  "description": "",
  "id": "企业通讯录管理;新建企业通讯录",
  "type": "scenario",
  "keyword": "场景"
});
formatter.step({
  "line": 8,
  "name": "登陆MDM服务器",
  "keyword": "假如"
});
formatter.step({
  "line": 9,
  "name": "添加企业通讯录",
  "rows": [
    {
      "cells": [
        "通讯录名称",
        "通讯录路径"
      ],
      "line": 10
    },
    {
      "cells": [
        "企业通讯录自动化测试",
        "D:\\mdm_organization_template.xlsx"
      ],
      "line": 11
    }
  ],
  "keyword": "当"
});
formatter.step({
  "line": 12,
  "name": "通讯录添加成功",
  "keyword": "那么"
});
formatter.match({
  "location": "Common_step.登陆mdm服务器()"
});
formatter.result({
  "duration": 1833789692,
  "status": "passed"
});
formatter.match({
  "location": "ContactsManager_step.添加企业通讯录(DataTable)"
});
formatter.result({
  "duration": 6137528288,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "通讯录添加",
      "offset": 0
    }
  ],
  "location": "Common_step._成功(String)"
});
formatter.result({
  "duration": 211406862,
  "status": "passed"
});
formatter.write("status:passed");
formatter.after({
  "duration": 466131050,
  "status": "passed"
});
formatter.before({
  "duration": 93598206,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "企业通讯录下发",
  "description": "",
  "id": "企业通讯录管理;企业通讯录下发",
  "type": "scenario",
  "keyword": "场景"
});
formatter.step({
  "line": 16,
  "name": "登陆MDM服务器",
  "keyword": "假如"
});
formatter.step({
  "line": 17,
  "name": "选择通讯录",
  "rows": [
    {
      "cells": [
        "通讯录名称"
      ],
      "line": 18
    },
    {
      "cells": [
        "企业通讯录自动化测试"
      ],
      "line": 19
    }
  ],
  "keyword": "当"
});
formatter.step({
  "line": 20,
  "name": "通讯录下发到分组",
  "rows": [
    {
      "cells": [
        "分组"
      ],
      "line": 21
    },
    {
      "cells": [
        "自动化测试"
      ],
      "line": 22
    }
  ],
  "keyword": "而且"
});
formatter.step({
  "line": 23,
  "name": "服务器通讯录下发到分组成功",
  "keyword": "那么"
});
formatter.step({
  "line": 24,
  "name": "用户手机通讯录接收成功",
  "keyword": "而且"
});
formatter.match({
  "location": "Common_step.登陆mdm服务器()"
});
formatter.result({
  "duration": 1897740459,
  "status": "passed"
});
formatter.match({
  "location": "ContactsManager_step.选择通讯录(DataTable)"
});
formatter.result({
  "duration": 4640960505,
  "status": "passed"
});
formatter.match({
  "location": "ContactsManager_step.通讯录下发到分组(DataTable)"
});
formatter.result({
  "duration": 5958436569,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "服务器通讯录下发到分组",
      "offset": 0
    }
  ],
  "location": "Common_step._成功(String)"
});
formatter.result({
  "duration": 198763837,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "用户手机通讯录接收",
      "offset": 0
    }
  ],
  "location": "Common_step._成功(String)"
});
formatter.result({
  "duration": 131823315073,
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat com.pekall.test.mdm.step.Common_step._成功(Common_step.java:112)\r\n\tat ✽.而且用户手机通讯录接收成功(com/pekall/test/mdm/features/e_企业通讯录管理.feature:24)\r\n",
  "status": "failed"
});
formatter.write("status:failed");
formatter.after({
  "duration": 505452348,
  "status": "passed"
});
formatter.before({
  "duration": 89411716,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "企业通讯录更新",
  "description": "",
  "id": "企业通讯录管理;企业通讯录更新",
  "type": "scenario",
  "keyword": "场景"
});
formatter.step({
  "line": 28,
  "name": "登陆MDM服务器",
  "keyword": "假如"
});
formatter.step({
  "line": 29,
  "name": "选择通讯录",
  "rows": [
    {
      "cells": [
        "通讯录名称"
      ],
      "line": 30
    },
    {
      "cells": [
        "企业通讯录自动化测试"
      ],
      "line": 31
    }
  ],
  "keyword": "当"
});
formatter.step({
  "line": 32,
  "name": "更新通讯录",
  "rows": [
    {
      "cells": [
        "通讯录路径"
      ],
      "line": 33
    },
    {
      "cells": [
        "D:\\mdm_organization_template_update.xlsx"
      ],
      "line": 34
    }
  ],
  "keyword": "而且"
});
formatter.step({
  "line": 35,
  "name": "服务器通讯录更新成功",
  "keyword": "那么"
});
formatter.step({
  "line": 36,
  "name": "用户手机通讯录更新成功",
  "keyword": "而且"
});
formatter.match({
  "location": "Common_step.登陆mdm服务器()"
});
formatter.result({
  "duration": 1826082308,
  "status": "passed"
});
formatter.match({
  "location": "ContactsManager_step.选择通讯录(DataTable)"
});
formatter.result({
  "duration": 4580325424,
  "status": "passed"
});
formatter.match({
  "location": "ContactsManager_step.更新通讯录(DataTable)"
});
formatter.result({
  "duration": 3566966013,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "服务器通讯录更新",
      "offset": 0
    }
  ],
  "location": "Common_step._成功(String)"
});
formatter.result({
  "duration": 213558884,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "用户手机通讯录更新",
      "offset": 0
    }
  ],
  "location": "Common_step._成功(String)"
});
formatter.result({
  "duration": 123435428080,
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat com.pekall.test.mdm.step.Common_step._成功(Common_step.java:117)\r\n\tat ✽.而且用户手机通讯录更新成功(com/pekall/test/mdm/features/e_企业通讯录管理.feature:36)\r\n",
  "status": "failed"
});
formatter.write("status:failed");
formatter.after({
  "duration": 487710251,
  "status": "passed"
});
formatter.before({
  "duration": 78669220,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "删除企业通讯录",
  "description": "",
  "id": "企业通讯录管理;删除企业通讯录",
  "type": "scenario",
  "keyword": "场景"
});
formatter.step({
  "line": 40,
  "name": "登陆MDM服务器",
  "keyword": "假如"
});
formatter.step({
  "line": 41,
  "name": "选择通讯录",
  "rows": [
    {
      "cells": [
        "通讯录名称"
      ],
      "line": 42
    },
    {
      "cells": [
        "企业通讯录自动化测试"
      ],
      "line": 43
    }
  ],
  "keyword": "当"
});
formatter.step({
  "line": 44,
  "name": "删除通讯录",
  "keyword": "而且"
});
formatter.step({
  "line": 45,
  "name": "服务器通讯录删除成功",
  "keyword": "那么"
});
formatter.step({
  "line": 46,
  "name": "用户手机通讯录删除成功",
  "keyword": "而且"
});
formatter.match({
  "location": "Common_step.登陆mdm服务器()"
});
formatter.result({
  "duration": 1877601810,
  "status": "passed"
});
formatter.match({
  "location": "ContactsManager_step.选择通讯录(DataTable)"
});
formatter.result({
  "duration": 4574988788,
  "status": "passed"
});
formatter.match({
  "location": "ContactsManager_step.删除通讯录()"
});
formatter.result({
  "duration": 3397404384,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "服务器通讯录删除",
      "offset": 0
    }
  ],
  "location": "Common_step._成功(String)"
});
formatter.result({
  "duration": 222903837,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "用户手机通讯录删除",
      "offset": 0
    }
  ],
  "location": "Common_step._成功(String)"
});
formatter.result({
  "duration": 13025057497,
  "status": "passed"
});
formatter.write("status:passed");
formatter.after({
  "duration": 458364684,
  "status": "passed"
});
formatter.uri("com/pekall/test/mdm/features/f_系统设置.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# language: zh-CN"
    }
  ],
  "line": 3,
  "name": "系统设置",
  "description": "邮件配置，客户端升级",
  "id": "系统设置",
  "keyword": "功能"
});
formatter.before({
  "duration": 83042075,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "邮件配置",
  "description": "",
  "id": "系统设置;邮件配置",
  "type": "scenario",
  "keyword": "场景"
});
formatter.step({
  "line": 8,
  "name": "登陆MDM服务器",
  "keyword": "假如"
});
formatter.step({
  "line": 9,
  "name": "在系统设置里面配置邮件",
  "rows": [
    {
      "cells": [
        "用户名",
        "发送邮件服务器地址",
        "邮件服务器端口",
        "电子邮件",
        "邮件密码"
      ],
      "line": 10
    },
    {
      "cells": [
        "TEST_MDM",
        "mail.pekall.com",
        "25",
        "test_mdm@pekall.com",
        "123456"
      ],
      "line": 11
    }
  ],
  "keyword": "当"
});
formatter.step({
  "line": 12,
  "name": "邮件配置成功",
  "keyword": "那么"
});
formatter.match({
  "location": "Common_step.登陆mdm服务器()"
});
formatter.result({
  "duration": 1819862581,
  "status": "passed"
});
formatter.match({
  "location": "SystemSetManager_step.在系统设置里面配置邮件(DataTable)"
});
formatter.result({
  "duration": 4582707640,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "邮件配置",
      "offset": 0
    }
  ],
  "location": "Common_step._成功(String)"
});
formatter.result({
  "duration": 189775234,
  "status": "passed"
});
formatter.write("status:passed");
formatter.after({
  "duration": 434183316,
  "status": "passed"
});
});