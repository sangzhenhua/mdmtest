# language: zh-CN

功能: 设备管理
定位锁定解锁擦除企业数据
 

场景: 定位
  假如登陆MDM服务器
  当选择设备
  |账户名|
  |zhenhua.sang@pekall.com|
 而且定位设备
 那么设备定位成功


场景: 锁定
  假如登陆MDM服务器
  当选择设备
  |账户名|
  |zhenhua.sang@pekall.com|
 而且锁定设备
 |密码|
 |123456|
 那么服务器锁定设备成功
 而且用户手机锁定成功




场景: 擦除企业数据
  假如登陆MDM服务器
  当选择设备
  |账户名|
  |zhenhua.sang@pekall.com|
 而且部分擦除设备
 那么服务器部分擦除设备成功
 而且用户手机部分擦除成功
 
 