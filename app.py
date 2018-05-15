from flask import Flask,request,url_for,render_template,redirect,jsonify
import json,db,threading,loriot,time,datetime

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
	Date = []
	Temperature = []
	Humidity = []
	Illumination = []
	CarbonDioxide = []
	Oxygen = []
	Dust = []

	data = db.readMax()
	days = beforeDays()
	for day in days:
		# for hour in range(0,23):
		hour = 10
		QueryTime = [str(day), str(hour)]
		old = db.readMinMinute(QueryTime)
		print(old)
		Date.append(old[0][1])
		Temperature.append(old[0][5])
		Humidity.append(old[0][6])
		Illumination.append(old[0][10])
		CarbonDioxide.append(old[0][8])
		Oxygen.append(old[0][11])
		Dust.append(old[0][9])

	t = {
		'Data': [data[0][5], data[0][6], data[0][10], data[0][8], data[0][11], data[0][9]],
		'Date': Date,
		'Temperature': Temperature,
		'Humidity': Humidity,
		'Illumination': Illumination,
		'CarbonDioxide': CarbonDioxide,
		'Oxygen': Oxygen,
		'Dust': Dust
	}
	init = json.dumps(t)
	return init

def beforeDays():
	before_n_days = []
	n = 7
	for i in range(1, n+1)[::-1]:
		before_n_days.append(str(datetime.date.today() - datetime.timedelta(days=i)))
	return before_n_days


if __name__=="__main__":
	# ta = threading.Thread(target=app.run(debug=True, port=5000))#, ssl_context='adhoc'))
	# tb = threading.Thread(target=loriot.getLoriotData)
	app.run(debug=True, port=5000)
	# ta.start()
	# tb.start()


