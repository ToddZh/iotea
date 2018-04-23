from flask import Flask,request,url_for,render_template,redirect,jsonify
from db import *
import json
import time

app=Flask(__name__)


@app.route('/')
def index():
	return render_template('index.html')

@app.route("/sendjson", methods=['GET','POST'])
def sendjson():
	data = readMax()
	t = {
		'data1': data[0][2],#空气质量  通过data22参数计算
		'data22': ['0','22', 3, 4,5,data[0][5]],#pm10 pm2.5 no2 so2 o3 co2
 		'data3': [data[0][2], 4, 5],# data: ["空气温度","空气湿度","地下湿度"],
		'data4': [3, 4, 5]# ["N","P","K"],
	}
	data = json.dumps(t)
	return data

@app.route("/getdata", methods=['POST'])
def getdata():
	message = json.loads(request.get_data())
	print(message)
	ts = message['ts']
	data = message['data']


	tl = time.localtime(int(ts)/1000)
	# 格式化时间
	now = time.strftime('%Y-%m-%d %H:%M:%S', tl)
	#print(now)

	air_temp = str(int(data[0:2], 16))
	air_hum = str(int(data[2:4], 16))
	pressure = str(int((data[4:8]), 16))
	co2 = str(int(data[8:12], 16))
	dust = str(int(data[12:16], 16))
	illumination = str(int(data[16:20], 16))
	o2 = str(round(int(data[20:22], 16)/10,1))+"%"
	soil_temp = str(int(data[22:24], 16))
	soil_hum = str(int(data[24:26], 16))
	voltage = str(round(int(data[26:28], 16)/int('ff',16)*5,1))+"V"
	error = str(int(data[28:], 16))

	list = [now,air_temp,air_hum,pressure,co2,dust,illumination,o2,soil_temp,soil_hum,voltage,error]
	insert(list);

	return 'OK'


if __name__=="__main__":
	app.run(debug=True)