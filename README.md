# iotea项目部署

## 相关工具
- virtualenv
- Python3
- Gunicorn 
- Supervisor 
- Nginx
- MySQL

<br>
测试部署环境为CentOS7
 
## virtualenv
使用virtualenv搭建独立的python3生产环境。

1. 安装<br>
    <code>pip install virtualenv </code>
2. 创建python3虚拟环境<br>
    <code>virtualenv -p python3 iotea</code>
3. 启动虚拟环境<br>
    进入iotea目录<br>
    <code>source bin/activate</code>
4. 退出环境<br>
    <code>deactivate</code>

## python3   
1. 安装<br>
    <code>yum install epel-release</code>
    <code>yum install python36</code>
2. 安装依赖库<code>PyMySQL,DBUtils,Flask,websocket-client</code><br>
    <code>pip install pymysql</code><br>
    <code>pip install dbutils</code><br>
    <code>pip install flask</code><br>
    <code>pip install websocket-client</code>

## Gunicorn
1. 安装<br>
    在python3虚拟环境下<br>
    <code>pip install gunicorn</code>
2. 运行flask项目<br>
    在iotea项目目录<br>
    <code>gunicorn -w 5 -b 0.0.0.0:5000 app:app</code>
3. 运行websocket-client得到loriot数据<br>
    <code>gunicorn loriot:app</code>
4. 查看Gunicorn进程树<br>
    <code>pstree -ap|grep gunicorn</code>
    
## Supervisor
1. 安装<br>
   root用户下<br>
   <code>pip install supervisor</code>
2. 生成配置文件<br>
    <code>echo_supervisord_conf > /etc/supervisord.conf</code>
3. 创建目录, 并引入目录配置<br>
    <code>mkdir -p /etc/supervisor/conf.d</code><br>
    编辑/etc/supervisord.conf, 修改文件末尾的[include]下的files字段.<br>
    <pre>注意, 这里需要去掉这两行前面的';'，它是注释符</pre>
    <pre>[include]
    files = /etc/supervisor/conf.d/*.conf
意思是引入/etc/supervisor/conf.d/</pre>
    下面的配置文件作为进程配置文件(受到supervisor监控).<br>
    
4. 传入配置<br>
    在iotea目录下<br>
    <code>cp iotea.conf /etc/supervisor/conf.d/</code><br>
    <code>cp loriot.conf /etc/supervisor/conf.d/</code><br>
    
5. 开启iotea服务<br>
    重新加载配置文件:<code>superviosrctl reload</code><br>
    开启loriot数据接收:<code>superviosrctl start loriot</code><br>
    开启iotea flask应用:<code>superviosrctl start iotea</code><br>
    
6. 其他常用操作<br>
    <code>supervisorctl reload      # 重新加载配置文件</code><br>
    <code>supervisorctl update</code><br>
    <code>supervisorctl start xxx</code><br>
    <code>supervisorctl stop xxx</code><br>
    <code>supervisorctl status xxx</code><br>
    <code>supervisorctl help        # 查看更多命令</code><br>

## Nginx
1. 安装<br>
    <code>yum install -y nginx</code>
2. 配置<br>
    <code>cp NginxIotea.conf /etc/nginx/conf.d/</code>
3. Nginx启动<br>
    <code>systemctl start nginx.service</code>
    
## MySQL
1. 相关参数
    <pre>user='root'<br>passwd='1234'<br>db='iotea'<br>port=3306</pre>
2. 建表文件<br>
    <code>iotea_iotea.sql</code>
    