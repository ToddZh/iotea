import pymysql.cursors
from DBUtils.PooledDB import PooledDB
import configparser

cf = configparser.ConfigParser()
# cf.read("/data/www/python3_iotea/iotea/conf/db.ini")
# 打开数据库连接
# conn = pymysql.connect("localhost", "root", "1234", "iotea")
# conn = pymysql.connect(host="47.89.243.140", user="root", password="root", db="iotea")

# pool = PooledDB(pymysql, 5, host='47.89.243.140', user='root', passwd='root', db='iotea', port=3306)
pool = PooledDB(pymysql, 5, host='localhost', user='root', passwd='1234', db='iotea', port=3306)


# dbname = "db"
# host = cf.get(dbname, "db_host")
# user = cf.get(dbname, "db_user")
# passwd = cf.get(dbname, "db_pass")
# db = cf.get(dbname, "db_name")
# port = cf.get(dbname, "db_port")
# pool = PooledDB(pymysql, 5, host=str(host), user=str(user), passwd=str(passwd), db=str(db), port=int(port))

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
