from flask import Flask,request,url_for,render_template,redirect,jsonify
import json,db,threading,time,datetime
#loriot
app=Flask(__name__)


@app.route('/')#iotea
def index():
	return render_template('index1.html')

@app.route("/sendjson", methods=['GET','POST'])
def sendjson():
	data = db.readMax()
	t = {
		'Data': [data[0][5], data[0][6], data[0][10], data[0][8], data[0][11], data[0][9], data[0][12], data[0][13]]
		# { Temperature, Humidity, Illumination, Carbon Dioxide, Oxygen, Dust, soil_temp, soil_hum }
	}
	# print(t)
	send = json.dumps(t)
	return send

@app.route("/initday", methods=['GET','POST'])
def initday():
	anchorDay = []
	DateDay = []
	TemperatureDay = []
	HumidityDay = []
	IlluminationDay = []
	CarbonDioxideDay = []
	OxygenDay = []
	DustDay = []

	data = db.readMax()
	days = beforeDays(1)
	# today = str(datetime.date.today())
	# 显示的坐标轴锚点
	# anchorDay.append({'value': [str(days[0])[5:] + " 00:00:00", 0]})
	# anchorDay.append({'value': [today[5:] + " 00:00:00", 0]})


	for day in days:
		for hour in range(0, 23):
			QueryTime = []
			if hour < 10:
				QueryTime = [str(day), '0' + str(hour)]
			else:
				QueryTime = [str(day), str(hour)]
			old = db.readMinMinute(QueryTime)
			try:
				date = old[0][1]
				# date[5:] + ' ' +
				moment = old[0][2] + ':' + old[0][3] + ':' + old[0][4]
				# {value: ['2016/12/18 6:38:08', 80]}
				# dict1 = {'abc': 456};
				DateDay.append(str(hour))
				TemperatureDay.append({'value': [moment, old[0][5]]})
				HumidityDay.append({'value': [moment, old[0][6]]})
				IlluminationDay.append({'value': [moment, old[0][10]]})
				CarbonDioxideDay.append({'value': [moment, old[0][8]]})
				oxy = old[0][11]
				if oxy.find('%'):
					OxygenDay.append({'value': [moment, oxy[:-1]]})
				else:
					OxygenDay.append(oxy)
				DustDay.append({'value': [moment, old[0][9]]})
			except Exception:
				pass  #应该传给前端数据缺少标志 前端显示缺少数据

	t = {
		'Data': [data[0][5], data[0][6], data[0][10], data[0][8], data[0][11], data[0][9]],
		# 'anchorDay': anchorDay,
		'DateDay': DateDay,
		'TemperatureDay': TemperatureDay,
		'HumidityDay': HumidityDay,
		'IlluminationDay': IlluminationDay,
		'CarbonDioxideDay': CarbonDioxideDay,
		'OxygenDay': OxygenDay,
		'DustDay': DustDay
	}
	init = json.dumps(t)
	return init

@app.route("/initweek", methods=['GET','POST'])
def initweek():
	anchorWeek = []
	DateWeek = []
	TemperatureWeek = []
	HumidityWeek = []
	IlluminationWeek = []
	CarbonDioxideWeek = []
	OxygenWeek = []
	DustWeek = []

	week = beforeDays(7)
	# today = str(datetime.date.today())
	# anchorWeek.append({'value': [str(week[0])[5:] + " 00:00:00", 0]})
	# anchorWeek.append({'value': [today[5:] + " 00:00:00", 0]})
	for day in week:
		for hour in range(0, 23, 6):
			QueryTime = []
			if hour < 10:
				QueryTime = [str(day), '0' + str(hour)]
			else:
				QueryTime = [str(day), str(hour)]
			old = db.readMinMinute(QueryTime)
			try:
				date = old[0][1]
				DateWeek.append(date[5:])
				moment = date[5:] + ' ' + old[0][2] + ':' + old[0][3] + ':' + old[0][4]
				TemperatureWeek.append({'value': [moment, old[0][5]]})
				HumidityWeek.append({'value': [moment, old[0][6]]})
				IlluminationWeek.append({'value': [moment, old[0][10]]})
				CarbonDioxideWeek.append({'value': [moment, old[0][8]]})
				oxy = old[0][11]
				if oxy.find('%'):
					OxygenWeek.append({'value': [moment, oxy[:-1]]})
				else:
					OxygenWeek.append({'value': [moment, oxy]})
				DustWeek.append({'value': [moment, old[0][9]]})
			except Exception:
				pass
	t = {
		# 'anchorWeek': anchorWeek,
		'DateWeek': DateWeek,
		'TemperatureWeek': TemperatureWeek,
		'HumidityWeek': HumidityWeek,
		'IlluminationWeek': IlluminationWeek,
		'CarbonDioxideWeek': CarbonDioxideWeek,
		'OxygenWeek': OxygenWeek,
		'DustWeek': DustWeek
	}
	init = json.dumps(t)
	return init

@app.route("/initmonth", methods=['GET','POST'])
def initmonth():
	anchorMonth = []
	DateMonth = []
	TemperatureMonth = []
	HumidityMonth = []
	IlluminationMonth = []
	CarbonDioxideMonth = []
	OxygenMonth = []
	DustMonth = []

	month = beforeDays(30)
	# today = str(datetime.date.today())
	# anchorMonth.append({'value': [str(month[0])[5:] + " 00:00:00", 0]})
	# anchorMonth.append(	{'value': [today[5:] + " 00:00:00", 0]})
	for day in month:
		old = db.readByDate(str(day))
		try:
			date = old[0][1]
			DateMonth.append(date[5:])
			moment = date[5:] + ' ' + old[0][2] + ':' + old[0][3] + ':' + old[0][4]
			TemperatureMonth.append({'value': [moment, old[0][5]]})
			HumidityMonth.append({'value': [moment, old[0][6]]})
			IlluminationMonth.append({'value': [moment, old[0][10]]})
			CarbonDioxideMonth.append({'value': [moment, old[0][8]]})
			oxy = old[0][11]
			if oxy.find('%'):
				OxygenMonth.append({'value': [moment, oxy[:-1]]})
			else:
				OxygenMonth.append({'value': [moment, oxy]})
			DustMonth.append({'value': [moment, old[0][9]]})
		except Exception:
			pass
	t = {
		# 'anchorMonth': anchorMonth,
		'DateMonth': DateMonth,
		'TemperatureMonth': TemperatureMonth,
		'HumidityMonth': HumidityMonth,
		'IlluminationMonth': IlluminationMonth,
		'CarbonDioxideMonth': CarbonDioxideMonth,
		'OxygenMonth': OxygenMonth,
		'DustMonth': DustMonth
	}
	init = json.dumps(t)
	return init

def beforeDays(n):
	before_n_days = []
	for i in range(1, n+1)[::-1]:
		before_n_days.append(str(datetime.date.today() - datetime.timedelta(days=i)))
	return before_n_days


if __name__=="__main__":
	# ta = threading.Thread(target=app.run(debug=True, port=5000))#, ssl_context='adhoc'))
	# tb = threading.Thread(target=loriot.getLoriotData)
	app.run(debug=True, port=5000)
	# ta.start()
	# tb.start()


