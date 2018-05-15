var body=document.getElementsByTagName("body")[0];
var menu=document.getElementById("menu");
var bar=document.getElementById("bar");
var close=document.getElementById("close");
var right=document.getElementById("right");
var ul=document.getElementsByTagName("ul")[0];
var lis=ul.getElementsByTagName("li");
var about=document.getElementById("about");
var solution=document.getElementById("solution");
var dat=document.getElementById("data");
var application=document.getElementById("applicaton");
var box=document.getElementById("box");
var solutionimg=document.getElementById("solutionimg");
var teaimg=document.getElementById("teaimg");
var lw=document.getElementById("lw");
var time1=document.getElementById("time1");
var about1=document.getElementById("about1");
var solutionimg=document.getElementById("solutionimg");
var article1=document.getElementById("article1");
var dat1=document.getElementById("dat1");
var dat2=document.getElementById("dat2");
var application1=document.getElementById("application1");
var toright1=document.getElementById("toright1");
var box3=document.getElementById("box3");
var box4=document.getElementById("box4");
var article2=document.getElementById("article2");

var realtime = [document.getElementById("Temperature"),document.getElementById("Humidity"),document.getElementById("Illumination"),
    document.getElementById("CarbonDioxide"),document.getElementById("Oxygen"),document.getElementById("Dust")]

bar.onclick=function(){
	close.style.display="block";
	bar.style.display="none";
	ul.style.display="block";
	menu.style.opacity="0.51";
	box.style.marginLeft="25%";
	box.style.width="58%";
	solutionimg.style.paddingLeft="38%";
	article1.style.width="78%";
	article1.style.marginLeft="22%";
	box3.style.width="75%";
	teaimg.style.float="none";
	box4.style.marginLeft="17%";
};

close.onclick=function(){
	close.style.display="none";
	ul.style.display="none";
	bar.style.display="block";
	menu.style.opacity="1";
	box.style.marginLeft="10%";
	box.style.width="73%";
	solutionimg.style.paddingLeft="0";
	article1.style.width="100%";
	article1.style.marginLeft="auto";
	box3.style.width="80%";
	teaimg.style.float="left";
	box4.style.marginLeft="2%";
};

about.onclick=function(){	
	for(var n=0;n<lis.length;n++){
		lis[n].className="";
	}
	this.className="active";
	body.style.background="#fff";
	lw.className="hide";
	about1.className="";
	solution1.className="hide";
	dat1.className="hide";
	dat2.className="hide";
	application1.className="hide";
};

solution.onclick=function(){	
	for(var n=0;n<lis.length;n++){
		lis[n].className="";
	}
	this.className="active";
	body.style.background="#fff";
	lw.className="hide";
	about1.className="hide";
	solution1.className="";
	dat1.className="hide";
	dat2.className="hide";
	application1.className="hide";
};

dat.onclick=function(){	
		for(var n=0;n<lis.length;n++){
			lis[n].className="";
		}
		this.className="active";
		body.style.background="#000";
		lw.className="hide";
		about1.className="hide";
		solution1.className="hide";
		dat1.className="";
		dat2.className="hide";
		application1.className="hide";
};

application.onclick=function(){	
		for(var n=0;n<lis.length;n++){
			lis[n].className="";
		}
		this.className="active";
		body.style.background="#fff";
		lw.className="hide";
		about1.className="hide";
		solution1.className="hide";
		dat1.className="hide";
		dat2.className="hide";
		application1.className="";
};

toright1.onclick=function(){
	body.style.background="#000";
	dat1.className="hide";
	dat2.className="";
};

//real-data
var date=new Date();
var year=date.getFullYear();
var month="0"+(date.getMonth()+1);
var day=date.getDate();
if(day<10){
	day="0"+day;
}
time1.innerHTML=year+'/'+month+'/'+day;


/*图表开始
 * 
 */
var tabContainer1 = document.getElementById('main1');
var tabContainer2= document.getElementById('main2');
var tabContainer3= document.getElementById('main3');
var tabContainer4= document.getElementById('main4');
var tabContainer5= document.getElementById('main5');
var tabContainer6= document.getElementById('main6');

//用于使chart自适应高度和宽度,通过窗体高宽计算容器高宽
var resizeContainer = function () {
    tabContainer1.style.width = window.innerWidth*0.76+'px';
    tabContainer1.style.height = window.innerHeight*0.28+'px';
    tabContainer2.style.width = window.innerWidth*0.76+'px';
    tabContainer2.style.height = window.innerHeight*0.28+'px';
    tabContainer3.style.width = window.innerWidth*0.76+'px';
    tabContainer3.style.height = window.innerHeight*0.28+'px';
    tabContainer4.style.width = window.innerWidth*0.76+'px';
    tabContainer4.style.height = window.innerHeight*0.28+'px';
    tabContainer5.style.width = window.innerWidth*0.76+'px';
    tabContainer5.style.height = window.innerHeight*0.28+'px';
    tabContainer6.style.width = window.innerWidth*0.76+'px';
    tabContainer6.style.height = window.innerHeight*0.28+'px';
};

//设置容器高宽
resizeContainer();
var myChart1 = echarts.init(tabContainer1);
var myChart2 = echarts.init(tabContainer2);
var myChart3 = echarts.init(tabContainer3);
var myChart4 = echarts.init(tabContainer4);
var myChart5 = echarts.init(tabContainer5);
var myChart6 = echarts.init(tabContainer6);

var a={
    tooltip: {
        trigger: 'axis'
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        top:'5%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        axisLine:{
            	lineStyle:{
            		color:'#C1FF3D',
            		width:'1'
            	}
            },
        boundaryGap: false,
        data: ['周一','周二','周三','周四','周五','周六','周日']
    },
    yAxis: {
        type: 'value',
        splitLine: {     //网格线
                   show: false
                         },
            	axisLine:{
            	lineStyle:{
            		color:'#C1FF3D',
            		width:'1'
            	}
            },
    },
    series: [
        {
            name:'空气温度',
            type:'line',
            stack: '总量',
             itemStyle:{
                        normal:{
                            color:'#ADEC25'
                                    }
                                },
            data:[120, 132, 101, 134, 90, 230, 210]
        },
    ]
};
var b = {
    tooltip: {
        trigger: 'axis'
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        top:'5%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        axisLine:{
            	lineStyle:{
            		color:'#C1FF3D',
            		width:'1'
            	}
            },
        boundaryGap: false,
        data: ['周一','周二','周三','周四','周五','周六','周日']
    },
    yAxis: {
        type: 'value',
        splitLine: {     //网格线
                   show: false
                         },
            	axisLine:{
            	lineStyle:{
            		color:'#C1FF3D',
            		width:'1'
            	}
            },
    },
    series: [
        {
            name:'空气湿度',
            type:'line',
            stack: '总量',
            itemStyle:{
                        normal:{
                            color:'#ADEC25'
                                    }
                                },
            data:[120, 132, 101, 134, 90, 230, 210]
        },
    ]
};
var c={
    tooltip: {
        trigger: 'axis'
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        top:'5%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        axisLine:{
            	lineStyle:{
            		color:'#C1FF3D',
            		width:'1'
            	}
            },
        boundaryGap: false,
        data: ['周一','周二','周三','周四','周五','周六','周日']
    },
    yAxis: {
        type: 'value',
        splitLine: {     //网格线
                   show: false
                         },
            	axisLine:{
            	lineStyle:{
            		color:'#C1FF3D',
            		width:'1'
            	}
            },
    },
    series: [
        {
            name:'空气温度',
            type:'line',
            stack: '总量',
             itemStyle:{
                        normal:{
                            color:'#ADEC25'
                                    }
                                },
            data:[120, 132, 101, 134, 90, 230, 210]
        },
    ]
};
var d= {
	grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        top:'5%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        axisLine:{
            	lineStyle:{
            		color:'#C1FF3D',
            		width:'1'
            	}
            },
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value',
        splitLine: {     //网格线
                   show: false
                         },
        axisLine:{
            	lineStyle:{
            		color:'#C1FF3D',
            		width:'1'
            	}
            },
    },
    series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
         itemStyle:{
                        normal:{
                            color:'#ADEC25'
                                    }
                                },
        type: 'line',
        areaStyle: {}
    }]
};
var e= {
	grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        top:'5%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        axisLine:{
            	lineStyle:{
            		color:'#C1FF3D',
            		width:'1'
            	}
            },
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value',
        splitLine: {     //网格线
                   show: false
                         },
        axisLine:{
            	lineStyle:{
            		color:'#C1FF3D',
            		width:'1'
            	}
            },
    },
    series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
         itemStyle:{
                        normal:{
                            color:'#ADEC25'
                                    }
                                },
        type: 'line',
        areaStyle: {}
    }]
};
var f= {
	grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        top:'5%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        axisLine:{
            	lineStyle:{
            		color:'#C1FF3D',
            		width:'1'
            	}
            },
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value',
        splitLine: {     //网格线
                   show: false
                         },
        axisLine:{
            	lineStyle:{
            		color:'#C1FF3D',
            		width:'1'
            	}
            },
    },
    series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
         itemStyle:{
                        normal:{
                            color:'#ADEC25'
                                    }
                                },
        type: 'line',
        areaStyle: {}
    }]
};

initdata();

myChart1.setOption(a);
myChart2.setOption(b);
myChart3.setOption(c);
myChart4.setOption(d);
myChart5.setOption(e);
myChart6.setOption(f);

window.addEventListener('resize',function(){
    myChart1.resize();
    myChart2.resize();
    myChart3.resize();
    myChart4.resize();
    myChart5.resize();
    myChart6.resize();
});

//定时从后台读取数据
setInterval(function(){
	getdata();
	},3000);

//ajax技术实现前后台交互
function getdata(){
	$.ajax({
		type:"GET",
		url:"/sendjson",  //这里填入请求地址
		dataType:"json",
		success:function(data){

            //空气成分
            for(i=0;i<6;i++){
                realtime[i].innerHTML=data.Data.shift();
            }

            },
			error:function(){
			}
	})
}

function initdata(){
	$.ajax({
		type:"GET",
		url:"/initjson",  //这里填入请求地址
		dataType:"json",
		success:function(data){
		    console.log(data.Date);
            console.log(data.Temperature);
            console.log(data.Humidity);
            console.log(data.Illumination);
            console.log(data.CarbonDioxide);
            console.log(data.Oxygen);
            console.log(data.Dust);

            a.series[0].data = data.Temperature;
            b.series[0].data = data.Humidity;
            c.series[0].data = data.Illumination;
            d.series[0].data = data.CarbonDioxide;
            e.series[0].data = data.Oxygen;
            f.series[0].data = data.Dust;

            //空气成分
            for(i=0;i<6;i++){
                realtime[i].innerHTML=data.Data.shift();
            }

            myChart1.setOption(a);
            myChart2.setOption(b);
            myChart3.setOption(c);
            myChart4.setOption(d);
            myChart5.setOption(e);
            myChart6.setOption(f);
            addData(true);
            },
            error:function(){
            }

	})
}