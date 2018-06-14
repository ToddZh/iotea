# [Iotea](http://iotea.seeed.cc)
![message flow](https://github.com/ToddZh/iotea/blob/master/static/img/Page%201%20Copy%203.png?raw=true)<br>
智慧生态茶园项目是物联网技术体系与智慧农业结合的实际应用，实现了通过网页应用监控生态茶园，向茶农提供详细的农业生产资料，并对外展现生态茶园环境数据与自然风光。

## 项目结构
![message flow](https://github.com/ToddZh/iotea/blob/master/static/img/iotea.png?raw=true)<br>

互联设备采集茶园数据通过网关上传到LORIOT物联网数据网络，Iotea建立客户端通过websocket方式连接到指定服务器，当边缘网关向数据网络推送新数据时，会同时发送的Iotea websocekt客户端，Iotea 将推送数据存入本地MySQL数据库。Web项目后端框架使用python3 Flask，前端数据框架使用Vue。当通过网站应用访问时，Iotea查询数据库给出茶园的实时与历史数据。项目使用的相关技术有：

- websocket
- Flask
- Vue
- ECharts
- MySQL

## 数据库设计

数据库为单表结构，根据采集的数据类型设计如下：<br>

![message flow](https://github.com/ToddZh/iotea/blob/master/static/img/db.png?raw=true)<br>

具体内容为:

1. id 主键
2. date 日期
3. hour 小时
4. minute 分钟
5. second 秒钟
6. air_temp 空气温度
7. air_hum 空气湿度
8. preesure 气压
9. co2 二氧化碳含量
10. dust 灰尘含量
11. illumination 光照强度
12. o2 氧气浓度
13. soil_temp 土壤温度
14. soil_hum 土壤湿度
15. voltage 电压强度
16. error 错误信息

## 数据接收

使用websocket方式连接LORIOT接收数据，具体代码如下:

```
    # 建立websocket连接
    ws = create_connection("wss://cn1.loriot.io/app?token=vnwD2wAAAA1jbjEubG9yaW90LmlvPeOCpVPCT9Ao2W5C5Fbtyw==")
	flag = 1
	while flag:
	    # 接收json格式数据
		result = json.loads(ws.recv())
		print(result)
		if( result ['cmd'] == 'rx' and result['EUI'] != '47BAC8680042002D'):
			ts = result['ts']
			# 传感器数据存在data中
			data = result['data']
			utc_dt = datetime.utcnow().replace(tzinfo=timezone.utc)
			bj_dt = utc_dt.astimezone(timezone(timedelta(hours=8)))
			year = str(bj_dt.year)
			month = ""
			day = ""
			if int(bj_dt.month) < 10:
				month = '0' + str(bj_dt.month)
			else:
				month = str(bj_dt.month)

			if int(bj_dt.day) < 10:
				day = '0' + str(bj_dt.day)
			else:
				day = str(bj_dt.day)
			date = "%s-%s-%s" % (year, month, day)

			hour = str(bj_dt.hour)
			if int(hour) < 10:
				hour = '0' + hour

			minute = str(bj_dt.minute)
			if int(minute) < 10:
				minute = '0' + minute

			second = str(bj_dt.second)
			if int(second) < 10:
				second = '0' + second

            # 原始数据为16进制，转换为10进制保存
			air_temp = str(int(data[0:2], 16))
			air_hum = str(int(data[2:4], 16))
			pressure = str(int((data[4:8]), 16))
			co2 = str(int(data[8:12], 16))
			dust = str(int(data[12:16], 16))
			illumination = str(int(data[16:20], 16))
			o2 = str(round(int(data[20:22], 16) / 10, 1))
			soil_temp = str(int(data[22:24], 16))
			soil_hum = str(int(data[24:26], 16))
			voltage = str(round(int(data[26:28], 16) / int('ff', 16) * 5, 1))
			error = str(int(data[28:], 16))

			list = [date, hour, minute, second, air_temp, air_hum, pressure, co2, dust, illumination,
					o2, soil_temp, soil_hum, voltage, error]
            # 存入数据库
			db.insert(list)
    # 断开websocket连接
	ws.close()
```

## 前后端交互

使用ajax进行前后端交互。
前端代码:
```
    # 请求实时数据
    function getdata(){
	$.ajax({
		type:"GET",
		url:"/sendjson",  //这里填入请求地址
		dataType:"json",
		success:function(data){
         vue.Temperature = data.Data[0];
         vue.Humidity = data.Data[1];
         vue.Illumination = data.Data[2];
         vue.CarbonDioxide = data.Data[3];
         vue.Oxygen = data.Data[4];
         vue.Dust = data.Data[5];
         vue.SoilTemperature = data.Data[6];
         vue.SoilMoisture = data.Data[7];
         },
			error:function(){
			}
	    })
    }
```
后端代码:
```
    @app.route("/sendjson", methods=['GET','POST'])
    def sendjson():
        # 读取最新的数据库数据
    	data = db.readMax()
    	t = {
    		'Data': [data[0][5], data[0][6], data[0][10], data[0][8], data[0][11], data[0][9], data[0][12], data[0][13]]
    		# { Temperature, Humidity, Illumination, Carbon Dioxide, Oxygen, Dust, soil_temp, soil_hum }
    	}
    	send = json.dumps(t)
    	return send
```

## 数据展示

Iotea项目中数据可视化部分使用了百度 JavaScript 实现的开源可视化库 ECharts。<br>
具体例子:
```
option = {
    tooltip: {
            trigger: 'axis',
            // 横坐标显示的值 
            formatter: function (params) {
                var date = new Date(params[0].data.name);
                return  date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate()+ '  '
                + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds() + '  ' + params[0].data.value[1];
            },
            axisPointer: {
                animation: false
            }
        },
    xAxis: {
        type: 'category',
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        // 将后端参数赋值给参量 data，更新窗体，即可将对应数值显示到图表
        data: data = [
        {name:'2016/12/18 6:38:08', value:['2016/12/18 6:38:08', 80]},
        {name:'2016/12/18 16:18:18', value:['2016/12/18 16:18:18', 60]},
        {name:'2016/12/18 19:18:18', value:['2016/12/18 19:18:18', 90]}
    ]，
        type: 'line'
    }]
};

```