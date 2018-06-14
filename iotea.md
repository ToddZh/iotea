# [Iotea](http://iotea.seeed.cc)
![message flow](https://github.com/ToddZh/iotea/blob/master/static/img/Page%201%20Copy%203.png?raw=true)<br>
�ǻ���̬��԰��Ŀ��������������ϵ���ǻ�ũҵ��ϵ�ʵ��Ӧ�ã�ʵ����ͨ����ҳӦ�ü����̬��԰�����ũ�ṩ��ϸ��ũҵ�������ϣ�������չ����̬��԰������������Ȼ��⡣

## ��Ŀ�ṹ
![message flow](https://github.com/ToddZh/iotea/blob/master/static/img/iotea.png?raw=true)<br>

�����豸�ɼ���԰����ͨ�������ϴ���LORIOT�������������磬Iotea�����ͻ���ͨ��websocket��ʽ���ӵ�ָ��������������Ե������������������������ʱ����ͬʱ���͵�Iotea websocekt�ͻ��ˣ�Iotea ���������ݴ��뱾��MySQL���ݿ⡣Web��Ŀ��˿��ʹ��python3 Flask��ǰ�����ݿ��ʹ��Vue����ͨ����վӦ�÷���ʱ��Iotea��ѯ���ݿ������԰��ʵʱ����ʷ���ݡ���Ŀʹ�õ���ؼ����У�

- websocket
- Flask
- Vue
- ECharts
- MySQL

## ���ݿ����

���ݿ�Ϊ����ṹ�����ݲɼ�����������������£�<br>

![message flow](https://github.com/ToddZh/iotea/blob/master/static/img/db.png?raw=true)<br>

��������Ϊ:

1. id ����
2. date ����
3. hour Сʱ
4. minute ����
5. second ����
6. air_temp �����¶�
7. air_hum ����ʪ��
8. preesure ��ѹ
9. co2 ������̼����
10. dust �ҳ�����
11. illumination ����ǿ��
12. o2 ����Ũ��
13. soil_temp �����¶�
14. soil_hum ����ʪ��
15. voltage ��ѹǿ��
16. error ������Ϣ

## ���ݽ���

ʹ��websocket��ʽ����LORIOT�������ݣ������������:

```
    # ����websocket����
    ws = create_connection("wss://cn1.loriot.io/app?token=vnwD2wAAAA1jbjEubG9yaW90LmlvPeOCpVPCT9Ao2W5C5Fbtyw==")
	flag = 1
	while flag:
	    # ����json��ʽ����
		result = json.loads(ws.recv())
		print(result)
		if( result ['cmd'] == 'rx' and result['EUI'] != '47BAC8680042002D'):
			ts = result['ts']
			# ���������ݴ���data��
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

            # ԭʼ����Ϊ16���ƣ�ת��Ϊ10���Ʊ���
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
            # �������ݿ�
			db.insert(list)
    # �Ͽ�websocket����
	ws.close()
```

## ǰ��˽���

ʹ��ajax����ǰ��˽�����
ǰ�˴���:
```
    # ����ʵʱ����
    function getdata(){
	$.ajax({
		type:"GET",
		url:"/sendjson",  //�������������ַ
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
��˴���:
```
    @app.route("/sendjson", methods=['GET','POST'])
    def sendjson():
        # ��ȡ���µ����ݿ�����
    	data = db.readMax()
    	t = {
    		'Data': [data[0][5], data[0][6], data[0][10], data[0][8], data[0][11], data[0][9], data[0][12], data[0][13]]
    		# { Temperature, Humidity, Illumination, Carbon Dioxide, Oxygen, Dust, soil_temp, soil_hum }
    	}
    	send = json.dumps(t)
    	return send
```

## ����չʾ

Iotea��Ŀ�����ݿ��ӻ�����ʹ���˰ٶ� JavaScript ʵ�ֵĿ�Դ���ӻ��� ECharts��<br>
��������:
```
option = {
    tooltip: {
            trigger: 'axis',
            // ��������ʾ��ֵ 
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
        // ����˲�����ֵ������ data�����´��壬���ɽ���Ӧ��ֵ��ʾ��ͼ��
        data: data = [
        {name:'2016/12/18 6:38:08', value:['2016/12/18 6:38:08', 80]},
        {name:'2016/12/18 16:18:18', value:['2016/12/18 16:18:18', 60]},
        {name:'2016/12/18 19:18:18', value:['2016/12/18 19:18:18', 90]}
    ]��
        type: 'line'
    }]
};

```