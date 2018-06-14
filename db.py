import pymysql.cursors
from DBUtils.PooledDB import PooledDB
import configparser

cf = configparser.ConfigParser()
cf.read("/data/www/python3_iotea/iotea/conf/db.ini")
# 打开数据库连接
# conn = pymysql.connect("localhost", "root", "1234", "iotea")
# conn = pymysql.connect(host="47.89.243.140", user="root", password="root", db="iotea")

# pool = PooledDB(pymysql, 5, host='47.89.243.140', user='root', passwd='root', db='iotea', port=3306)
# pool = PooledDB(pymysql, 5, host='localhost', user='root', passwd='1234', db='iotea', port=3306)


dbname = "db"
host = cf.get(dbname, "db_host")
user = cf.get(dbname, "db_user")
passwd = cf.get(dbname, "db_pass")
db = cf.get(dbname, "db_name")
port = cf.get(dbname, "db_port")
pool = PooledDB(pymysql, 5, host=str(host), user=str(user), passwd=str(passwd), db=str(db), port=int(port))

# def getconn():
# 	return pool.connection()
#
# def closeconn(conn):
# 	conn.close()

# SQL 插入语句
def insert(list):
	conn = pool.connection()
	cur = conn.cursor()
	sql = "insert into iotea (date,hour, minute ,second ,air_temp,air_hum,pressure,co2,dust,illumination," \
		  "o2,soil_temp,soil_hum,voltage,error)" \
		  " values ('%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s')" \
		  %(list[0],list[1],list[2],list[3],list[4],list[5],list[6],list[7],list[8],list[9],
			list[10],list[11],list[12],list[13],list[14])
	r = cur.execute(sql)
	r = cur.fetchall()
	cur.close()
	conn.commit()
	conn.close()

# SQL 查询语句
def readMax():
	conn = pool.connection()
	cur = conn.cursor()
	sql="SELECT  * FROM iotea where id =(SELECT  max(id) FROM iotea)"
	r = cur.execute(sql)
	r = cur.fetchall()
	cur.close()
	conn.commit()
	conn.close()
	return r

# SQL 按时间查询
def readMinMinute(time): # time[date,hour]
	conn = pool.connection()
	cur = conn.cursor()
	sql = "SELECT  * FROM iotea where date = '%s' and hour = '%s' LIMIT 1" % (time[0], time[1])
	r = cur.execute(sql)
	r = cur.fetchall()
	cur.close()
	conn.commit()
	conn.close()
	return r


# SQL 按时间查询
def readByDate(date):
	conn = pool.connection()
	cur = conn.cursor()
	sql = "SELECT  * FROM iotea where date = '%s' and hour = '12' LIMIT 1" % ( date )
	r = cur.execute(sql)
	r = cur.fetchall()
	cur.close()
	conn.commit()
	conn.close()
	return r

def insertFakeData(date):
	list = [(date, '01', '10', '01', '20', '74', '395', '178', '0', '21.0', '22', '99'),
	(date, '02', '10', '01', '19', '75', '485', '113', '0', '21.0', '22', '99'),
	(date, '03', '10', '01', '19', '73', '485', '72', '0', '21.0', '22', '99'),
	(date, '04', '10', '01', '18', '70', '465', '178', '0', '21.0', '22', '99'),
	(date, '05', '10', '01', '19', '69', '432', '65', '0', '21.0', '22', '99'),
	(date, '06', '10', '01', '20', '68', '463', '90', '200', '21.0', '22', '99'),
	(date, '07', '10', '01', '21', '70', '465', '66', '300', '21.0', '22', '99'),
	(date, '08', '10', '01', '22', '67', '465', '183', '820', '21.0', '22', '99'),
	(date, '09', '10', '01', '23', '67', '465', '178', '1500', '21.0', '22', '99'),
	(date, '10', '10', '01', '23', '65', '512', '153', '1560', '21.0', '22', '99'),
	(date, '11', '10', '01', '25', '64', '485', '90', '2300', '21.0', '22', '99'),
	(date, '12', '10', '01', '26', '66', '485', '221', '2700', '21.0', '22', '99'),
	(date, '13', '10', '01', '29', '59', '473', '78', '2790', '21.0', '22', '99'),
	(date, '14', '10', '01', '30', '49', '485', '72', '2650', '21.0', '22', '99'),
	(date, '15', '10', '01', '30', '43', '485', '113', '2100', '21.0', '22', '99'),
	(date, '16', '10', '01', '29', '41', '512', '125', '2156', '21.0', '22', '99'),
	(date, '17', '10', '01', '28', '42', '512', '162', '1860', '21.0', '22', '99'),
	(date, '18', '10', '01', '26', '46', '485', '178', '1430', '21.0', '22', '99'),
	(date, '19', '10', '01', '26', '48', '519', '38', '690', '21.0', '22', '99'),
	(date, '20', '10', '01', '23', '58', '512', '86', '0', '21.0', '22', '99'),
	(date, '21', '10', '01', '23', '63', '605', '72', '0', '21.0', '22', '99'),
	(date, '22', '10', '01', '22', '64', '605', '78', '0', '21.0', '22', '99'),
	(date, '23', '10', '01', '22', '58', '563', '68', '0', '21.0', '22', '99'),
	(date, '24', '10', '01', '22', '54', '519', '92', '0', '21.0', '22', '99')]
	for i in list:
		q = [i[0], i[1], i[2], i[3], i[4], i[5], '', i[6], i[7], i[8], i[9], i[10], i[11], '', '']
		insert(q)
	return


# insertFakeData('2018-06-12')