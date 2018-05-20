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
		'Data': [data[0][5], data[0][6], data[0][10], data[0][8], data[0][11], data[0][9]]
		# { Temperature, Humidity, Illumination, Carbon Dioxide, Oxygen, Dust }
	}
	print(t)
	send = json.dumps(t)
	return send

@app.route("/initjson", methods=['GET','POST'])
def initjson():
	DateDay = []
	TemperatureDay = []
	HumidityDay = []
	IlluminationDay = []
	CarbonDioxideDay = []
	OxygenDay = []
	DustDay = []

	DateWeek = []
	TemperatureWeek = []
	HumidityWeek = []
	IlluminationWeek = []
	CarbonDioxideWeek = []
	OxygenWeek = []
	DustWeek = []

	DateMonth = []
	TemperatureMonth = []
	HumidityMonth = []
	IlluminationMonth = []
	CarbonDioxideMonth = []
	OxygenMonth = []
	DustMonth = []

	data = db.readMax()
	week = beforeDays(7)

	for day in week:
		# for hour in range(0,23):
		hour = 10
		QueryTime = [str(day), str(hour)]
		old = db.readMinMinute(QueryTime)
		print(old)

		date = old[0][1]
		DateWeek.append(date[5:])
		TemperatureWeek.append(old[0][5])
		HumidityWeek.append(old[0][6])
		IlluminationWeek.append(old[0][10])
		CarbonDioxideWeek.append(old[0][8])

		oxy = old[0][11]
		if oxy.find('%'):
			OxygenWeek.append(oxy[:-1])
		else:
			OxygenWeek.append(oxy)

		DustWeek.append(old[0][9])


	t = {
		'Data': [data[0][5], data[0][6], data[0][10], data[0][8], data[0][11], data[0][9]],
		'Date1': Date,
		'Temperature1': Temperature,
		'Humidity1': Humidity,
		'Illumination1': Illumination,
		'CarbonDioxide1': CarbonDioxide,
		'Oxygen1': Oxygen,
		'Dust1': Dust
	}
	init = json.dumps(t)
	return init

# @app.route("/datechanged", methods=['GET','POST'])
# def datechanged(json):#{date,type}
# 	jsonData = json.loads(json)
# 	Date = []
# 	Temperature = []
# 	Humidity = []
# 	Illumination = []
# 	CarbonDioxide = []
# 	Oxygen = []
# 	Dust = []
#
# 	days = beforeDays()
# 	for day in days:
# 		# for hour in range(0,23):
# 		hour = 10
# 		QueryTime = [str(day), str(hour)]
# 		old = db.readMinMinute(QueryTime)
# 		print(old)
#
# 		date = old[0][1]
# 		Date.append(date[5:])
# 		Temperature.append(old[0][5])
# 		Humidity.append(old[0][6])
# 		Illumination.append(old[0][10])
# 		CarbonDioxide.append(old[0][8])
#
# 		oxy = old[0][11]
# 		if oxy.find('%'):
# 			Oxygen.append(oxy[:-1])
# 		else:
# 			Oxygen.append(oxy)
#
# 		Dust.append(old[0][9])
#
# 	t = {
# 		'Data': [data[0][5], data[0][6], data[0][10], data[0][8], data[0][11], data[0][9]],
# 		'Date': Date,
# 		'Temperature': Temperature,
# 		'Humidity': Humidity,
# 		'Illumination': Illumination,
# 		'CarbonDioxide': CarbonDioxide,
# 		'Oxygen': Oxygen,
# 		'Dust': Dust
# 	}
#
# 	relatedData = json.dumps(t)
# 	return relatedData


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


