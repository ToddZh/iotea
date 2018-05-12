from flask import Flask,request,url_for,render_template,redirect,jsonify
import json,db,threading,loriot,time,datetime

app=Flask(__name__)


@app.route('/')
def index():
	return render_template('index.html')

@app.route("/sendjson", methods=['GET','POST'])
def sendjson():
	data = db.readMax()
	t = {
		'data1': data[0][5],#空气质量  通过data22参数计算
		'data22': ['0','22', 3, 4,data[0][11],data[0][8]],#pm10 pm2.5 no2 so2 o2 co2
 		'data3': [data[0][5], data[0][6], data[0][13]],# data: ["空气温度","空气湿度","地下湿度"],
		'data4': [3, 4, 5]# ["N","P","K"],
	}
	send = json.dumps(t)
	return send

@app.route("/initjson", methods=['GET','POST'])
def initjson():
	data = db.readMax()
	days = beforeDays()
	olddate = []
	oldtemp = []
	oldhum = []
	for day in days:
		for hour in range(0,23):
			time = [str(day),str(hour)]
			old = db.readMinMinute(time)
			olddate.append(old[0][1])
			oldtemp.append(old[0][5])
			oldhum.append(old[0][6])

	t = {
		'data1': data[0][5],#空气质量  通过data22参数计算
		'data22': ['0','22', 3, 4,data[0][11],data[0][8]],#pm10 pm2.5 no2 so2 o2 co2
 		'data3': [data[0][5], data[0][6], data[0][13]],# data: ["空气温度","空气湿度","地下湿度"],
		'data4': [3, 4, 5], # ["N","P","K"],
		'olddate': olddate,
		'oldtemp': oldtemp,
		'oldhum': oldhum
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


