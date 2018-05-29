from websocket import create_connection
import time
import db
import json

def getLoriotData():
	ws = create_connection("wss://cn1.loriot.io/app?token=vnwD2wAAAA1jbjEubG9yaW90LmlvPeOCpVPCT9Ao2W5C5Fbtyw==")
	flag = 1
	while flag:
		result = json.loads(ws.recv())
		print(result)
		if( result ['cmd'] == 'rx' and result['EUI'] != '47BAC8680042002D'):
			ts = result['ts']
			data = result['data']

			tl = time.localtime(int(ts) / 1000)
			# 格式化时间
			date = time.strftime('%Y-%m-%d', tl)
			hour = time.strftime('%H', tl)
			minute = time.strftime('%M', tl)
			second = time.strftime('%S', tl)
			# print(now)

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

			if int(air_temp) > 50 or int(air_hum) > 100 or int(illumination) > 10000 or int(float(o2)) > 23 or int(float(o2)) < 18 or int(soil_temp) > 50 or int(soil_hum) > 100:
				continue

			list = [date, hour, minute, second, air_temp, air_hum, pressure, co2, dust, illumination,
					o2, soil_temp, soil_hum, voltage, error]
			db.insert(list)
	ws.close()

getLoriotData()