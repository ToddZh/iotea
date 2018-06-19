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
	SoilTempDay = []
	SoilHumDay = []
	# data = db.readMax()
	days = beforeDays(1)
	# today = str(datetime.date.today())
	# 显示的坐标轴锚点
	# anchorDay.append({'value': [str(days[0])[5:] + " 00:00:00", 0]})
	# anchorDay.append({'value': [today[5:] + " 00:00:00", 0]})

	utc_dt = datetime.datetime.utcnow().replace(tzinfo=datetime.timezone.utc)
	bj_dt = utc_dt.astimezone(datetime.timezone(datetime.timedelta(hours=8)))
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
	today = "%s-%s-%s" % (year, month, day)

	QueryTime = []
	for day in days:
		for hour in range(0, 24):
			if hour < 10:
				QueryTime = [str(day), '0' + str(hour)]
			else:
				QueryTime = [str(day), str(hour)]
			old = db.readMinMinute(QueryTime)

			if not old:
				QueryTime = [str(day), str(hour)]
				old = db.readMinMinute(QueryTime)
			if not old:
				db.insertFakeData(day)
				old = db.readMinMinute(QueryTime)
			try:
				date = str(day)

				date = date[:4] + '/' + date[5:7] + '/' + date[8:]

				moment = date + ' ' + old[0][2] + ':' + old[0][3] + ':' + old[0][4]
				# moment = str(hour)

				# {value: ['2016/12/18 6:38:08', 80]}

				DateDay.append(str(hour))
				TemperatureDay.append({'name': moment, 'value': [str(hour), old[0][5]]})
				HumidityDay.append({'name': moment, 'value': [str(hour), old[0][6]]})
				IlluminationDay.append({'name': moment, 'value': [str(hour), old[0][10]]})
				CarbonDioxideDay.append({'name': moment, 'value': [str(hour), old[0][8]]})
				oxy = old[0][11]
				# print(oxy.find('%'))
				if int(oxy.find('%')) >= 0:
					OxygenDay.append({'name': moment, 'value': [str(hour), oxy[:-1]]})
				else:
					OxygenDay.append({'name': moment, 'value': [str(hour), oxy]})
				DustDay.append({'name': moment, 'value': [str(hour), old[0][9]]})
				SoilTempDay.append({'name': moment, 'value': [str(hour), old[0][12]]})
				SoilHumDay.append({'name': moment, 'value': [str(hour), old[0][13]]})
			except Exception:
				pass  #应该传给前端数据缺少标志 前端显示缺少数据

	# 取得今天零点数据
	# today = datetime.date.today()


	QueryTime = [today, '00']
	old = db.readMinMinute(QueryTime)
	if not old:
		QueryTime = [str(today), '0']
		old = db.readMinMinute(QueryTime)
	if not old:
		db.insertFakeData(today)
		QueryTime = [str(today), '00']
		old = db.readMinMinute(QueryTime)

	try:
		date = str(today)
		date = date[:4] + '/' + date[5:7] + '/' + date[8:]
		moment = date + ' ' + old[0][2] + ':' + old[0][3] + ':' + old[0][4]

		DateDay.append('24')
		TemperatureDay.append({'name': moment, 'value': ['24', old[0][5]]})
		HumidityDay.append({'name': moment, 'value': ['24', old[0][6]]})
		IlluminationDay.append({'name': moment, 'value': ['24', old[0][10]]})
		CarbonDioxideDay.append({'name': moment, 'value': ['24', old[0][8]]})
		oxy = old[0][11]
		if int(oxy.find('%')) >= 0:
			OxygenDay.append({'name': moment, 'value': ['24', oxy[:-1]]})
		else:
			OxygenDay.append({'name': moment, 'value': ['24', oxy]})
		DustDay.append({'name': moment, 'value': ['24', old[0][9]]})
		SoilTempDay.append({'name': moment, 'value': ['24', old[0][12]]})
		SoilHumDay.append({'name': moment, 'value': ['24', old[0][13]]})
	except Exception:
		pass

	t = {
		# 'Data': [data[0][5], data[0][6], data[0][10], data[0][8], data[0][11], data[0][9]],
		# 'anchorDay': anchorDay,
		'Today' : today,
		'DateDay': DateDay,
		'TemperatureDay': TemperatureDay,
		'HumidityDay': HumidityDay,
		'IlluminationDay': IlluminationDay,
		'CarbonDioxideDay': CarbonDioxideDay,
		'OxygenDay': OxygenDay,
		'DustDay': DustDay,
		'SoilTempDay': SoilTempDay,
		'SoilHumDay': SoilHumDay
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
	SoilTempWeek = []
	SoilHumWeek = []

	week = beforeDays(7)
	# today = str(datetime.date.today())
	# anchorWeek.append({'value': [str(week[0])[5:] + " 00:00:00", 0]})
	# anchorWeek.append({'value': [today[5:] + " 00:00:00", 0]})
	for day in week:
		for hour in range(4, 21, 8):
			QueryTime = []
			if hour < 10:
				QueryTime = [str(day), '0' + str(hour)]
			else:
				QueryTime = [str(day), str(hour)]
			old = db.readMinMinute(QueryTime)
			if not old:
				QueryTime = [str(day), str(hour)]
				old = db.readMinMinute(QueryTime)
			threeTimeOfDay = ""
			if hour == 4:
				pass
			elif hour == 12:
				threeTimeOfDay = " noon"
			else:
				threeTimeOfDay = " even"

			try:
				date = str(day)
				date = date[:4] + '/' + date[5:7] + '/' + date[8:]
				DateWeek.append(date[5:] + threeTimeOfDay)
				moment = date + ' ' + old[0][2] + ':' + old[0][3] + ':' + old[0][4]
				xAxisTime = removeZero(date[5:])
				TemperatureWeek.append({'name': moment, 'value': [xAxisTime + threeTimeOfDay, old[0][5]]})
				HumidityWeek.append({'name': moment, 'value': [xAxisTime + threeTimeOfDay, old[0][6]]})
				IlluminationWeek.append({'name': moment, 'value': [xAxisTime + threeTimeOfDay, old[0][10]]})
				CarbonDioxideWeek.append({'name': moment, 'value': [xAxisTime + threeTimeOfDay, old[0][8]]})
				oxy = old[0][11]
				if int(oxy.find('%')) >= 0:
					OxygenWeek.append({'name': moment, 'value': [xAxisTime + threeTimeOfDay, oxy[:-1]]})
				else:
					OxygenWeek.append({'name': moment, 'value': [xAxisTime + threeTimeOfDay, oxy]})
				DustWeek.append({'name': moment, 'value': [xAxisTime + threeTimeOfDay, old[0][9]]})
				SoilTempWeek.append({'name': moment, 'value': [xAxisTime + threeTimeOfDay, old[0][12]]})
				SoilHumWeek.append({'name': moment, 'value': [xAxisTime + threeTimeOfDay, old[0][13]]})
			except Exception:
				date = str(day)
				date = date[:4] + '/' + date[5:7] + '/' + date[8:]
				DateWeek.append(date[5:]+threeTimeOfDay)
				moment = date + ' ' + str(hour) + ':00:00'
				xAxisTime = removeZero(date[5:])
				TemperatureWeek.append({'name': moment, 'value': [xAxisTime+threeTimeOfDay, '0']})
				HumidityWeek.append({'name': moment, 'value': [xAxisTime+threeTimeOfDay, '0']})
				IlluminationWeek.append({'name': moment, 'value': [xAxisTime+threeTimeOfDay, '0']})
				CarbonDioxideWeek.append({'name': moment, 'value': [xAxisTime+threeTimeOfDay, '0']})
				OxygenWeek.append({'name': moment, 'value': [xAxisTime+threeTimeOfDay, '0']})
				DustWeek.append({'name': moment, 'value': [xAxisTime+threeTimeOfDay, '0']})
				SoilTempWeek.append({'name': moment, 'value': [xAxisTime+threeTimeOfDay, '0']})
				SoilHumWeek.append({'name': moment, 'value': [xAxisTime+threeTimeOfDay, '0']})
	t = {
		# 'anchorWeek': anchorWeek,
		'DateWeek': DateWeek,
		'TemperatureWeek': TemperatureWeek,
		'HumidityWeek': HumidityWeek,
		'IlluminationWeek': IlluminationWeek,
		'CarbonDioxideWeek': CarbonDioxideWeek,
		'OxygenWeek': OxygenWeek,
		'DustWeek': DustWeek,
		'SoilTempWeek': SoilTempWeek,
		'SoilHumWeek': SoilHumWeek
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
	SoilTempMonth = []
	SoilHumMonth = []

	month = beforeDays(31)
	# today = str(datetime.date.today())
	# anchorMonth.append({'value': [str(month[0])[5:] + " 00:00:00", 0]})
	# anchorMonth.append(	{'value': [today[5:] + " 00:00:00", 0]})

	for day in month:
		old = db.readByDate(str(day))
		try:
			date = str(day)
			date = date[:4] + '/' + date[5:7] + '/' + date[8:]
			DateMonth.append(date[5:])
			moment = date + ' ' + old[0][2] + ':' + old[0][3] + ':' + old[0][4]
			queryData = removeZero(date[5:])
			TemperatureMonth.append({'name': moment, 'value': [queryData, old[0][5]]})
			HumidityMonth.append({'name': moment, 'value': [queryData, old[0][6]]})
			IlluminationMonth.append({'name': moment, 'value': [queryData, old[0][10]]})
			CarbonDioxideMonth.append({'name': moment, 'value': [queryData, old[0][8]]})
			oxy = old[0][11]
			if int(oxy.find('%')) >= 0:
				OxygenMonth.append({'name': moment, 'value': [queryData, oxy[:-1]]})
			else:
				OxygenMonth.append({'name': moment, 'value': [queryData, oxy]})
			DustMonth.append({'name': moment, 'value': [queryData, old[0][9]]})
			SoilTempMonth.append({'name': moment, 'value': [queryData, old[0][12]]})
			SoilHumMonth.append({'name': moment, 'value': [queryData, old[0][13]]})
		except Exception:
			date = str(day)
			date = date[:4] + '/' + date[5:7] + '/' + date[8:]
			DateMonth.append(date[5:])
			moment = date + " 00:00:00"
			queryData = removeZero(date[5:])
			TemperatureMonth.append({'name': moment, 'value': [queryData, '0']})
			HumidityMonth.append({'name': moment, 'value': [queryData, '0']})
			IlluminationMonth.append({'name': moment, 'value': [queryData, '0']})
			CarbonDioxideMonth.append({'name': moment, 'value': [queryData, '0']})
			OxygenMonth.append({'name': moment, 'value': [queryData, '0']})
			DustMonth.append({'name': moment, 'value': [queryData, '0']})
			SoilTempMonth.append({'name': moment, 'value': [queryData, '0']})
			SoilHumMonth.append({'name': moment, 'value': [queryData, '0']})

	t = {
		# 'anchorMonth': anchorMonth,
		'DateMonth': DateMonth,
		'TemperatureMonth': TemperatureMonth,
		'HumidityMonth': HumidityMonth,
		'IlluminationMonth': IlluminationMonth,
		'CarbonDioxideMonth': CarbonDioxideMonth,
		'OxygenMonth': OxygenMonth,
		'DustMonth': DustMonth,
		'SoilTempMonth': SoilTempMonth,
		'SoilHumMonth': SoilHumMonth
	}
	init = json.dumps(t)
	return init

def beforeDays(n):
	utc_dt = datetime.datetime.utcnow().replace(tzinfo=datetime.timezone.utc)
	bj_dt = utc_dt.astimezone(datetime.timezone(datetime.timedelta(hours=8)))
	before_n_days = []
	for i in range(1, n+1)[::-1]:
		before_n_days.append(str(bj_dt.date() - datetime.timedelta(days=i)))
	return before_n_days

def removeZero(string):
	xAxisTime = string
	if xAxisTime[0] == '0':
		xAxisTime = xAxisTime[1:]
	loc = xAxisTime.find('/')
	if xAxisTime[loc+1] == '0':
		xAxisTime = xAxisTime[:loc+1] + xAxisTime[loc+2:]
	return xAxisTime


if __name__=="__main__":
	# ta = threading.Thread(target=app.run(debug=True, port=5000))#, ssl_context='adhoc'))
	# tb = threading.Thread(target=loriot.getLoriotData)
	app.run(debug=True, port=5000)
	# ta.start()
	# tb.start()


