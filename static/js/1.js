var body=document.getElementsByTagName("body")[0];
var lgbtn1=document.getElementById("lgbtn1");
var lgbtn2=document.getElementById("lgbtn2");
var lgbtn3=document.getElementById("lgbtn3");
var lgbtn4=document.getElementById("lgbtn4");
var lgbtn5=document.getElementById("lgbtn5");
var solutionimg=document.getElementById("solutionimg");
var solutionbg=document.getElementById("solutionbg");
var solimg=document.getElementById("solimg");
var teaimg=document.getElementById("teaimg");
var lw=document.getElementById("lw");
var time1=document.getElementById("time1");
var about1=document.getElementById("about1");
var teaimg1=document.getElementById("teaimg1");
var solutionimg=document.getElementById("solutionimg");
var article=document.getElementById("article");
var article1=document.getElementById("article1");
var dat1=document.getElementById("dat1");
var dat2=document.getElementById("dat2");
var application1=document.getElementById("application1");                 
var box3=document.getElementById("box3");
var box33=document.getElementById("box33");
var box333=document.getElementById("box333");
var box4=document.getElementById("box4");
var article2=document.getElementById("article2");
var sl1=document.getElementById("sl1");
var sl2=document.getElementById("sl2");
var sl3=document.getElementById("sl3");
var time11=document.getElementById("time11");

var realdata = [document.getElementById("Temperature"),document.getElementById("Humidity"),document.getElementById("Illumination"),
    document.getElementById("CarbonDioxide"),document.getElementById("Oxygen"),document.getElementById("Dust"),
    document.getElementById("SoilTemperature"),document.getElementById("SoilMoisture")];

var green=document.getElementsByClassName("green")[0];
    // 触摸
    lgbtn1.ontouchstart = function() {
        this.style.backgroundColor = "#8FC421";
        this.style.opacity="0.3";
    };
    // 停止触摸
    lgbtn1.ontouchend = function() {
        this.style.backgroundColor = "white";	
        this.style.opacity="1";
        lw.className="hide";
	    about1.className="";
	    solution1.className="hide";
	    dat1.className="hide";
	    dat2.className="hide";
	    application1.className="hide";
        
    };
     lgbtn2.ontouchstart = function() {
        this.style.backgroundColor = "#8FC421";
        this.style.opacity="0.3";
    };
    lgbtn2.ontouchend = function() {
        this.style.backgroundColor = "white";	
        this.style.opacity="1";
        lw.className="hide";
	    about1.className="hide";
	    solution1.className="hide";
	    dat1.className="";
	    dat2.className="hide";
	    application1.className="hide";
        
    };
     lgbtn3.ontouchstart = function() {
        this.style.backgroundColor = "#8FC421";
        this.style.opacity="0.3";
    };
    lgbtn3.ontouchend = function() {
        this.style.backgroundColor = "white";	
        this.style.opacity="1";
        lw.className="hide";
	    about1.className="hide";
	    solution1.className="hide";
	    dat1.className="hide";
	    dat2.className="";
	    application1.className="hide";
        
    };
     lgbtn4.ontouchstart = function() {
        this.style.backgroundColor = "#8FC421";
        this.style.opacity="0.3";
    };
    lgbtn4.ontouchend = function() {
        this.style.backgroundColor = "white";	
        this.style.opacity="1";
        lw.className="hide";
	    about1.className="hide";
	    solution1.className="";
	    dat1.className="hide";
	    dat2.className="hide";
	    application1.className="hide";
        
    };
    lgbtn5.ontouchstart = function() {
        this.style.backgroundColor = "#8FC421";
        this.style.opacity="0.3";
    };
    lgbtn5.ontouchend = function() {
        this.style.backgroundColor = "white";	
        this.style.opacity="1";
        lw.className="hide";
	    about1.className="hide";
	    solution1.className="hide";
	    dat1.className="hide";
	    dat2.className="hide";
	    application1.className="";
        
    };
function back(){  
	lw.className="";
	about1.className="hide";
	solution1.className="hide";
	dat1.className="hide";
	dat2.className="hide";
	application1.className="hide";
};
var wid=window.innerHeight/window.innerWidth/1.22*100+"%";
var topp=(window.innerHeight*0.65-window.innerWidth*0.92)*100/window.innerHeight;
var top1=(window.innerHeight-window.innerWidth*0.92)*100/window.innerHeight;
	//real-data
var date=new Date();
var year=date.getFullYear();
var month=date.getMonth()+1;
var day=date.getDate();

time1.innerHTML=year+'/'+month+'/'+day;
var curMonthDays=new Date(year,month,0).getDate();
	time11.innerHTML=year+'/'+month+'/'+day;
	sl1.onclick=function(){
    green.style.left="0";
		time11.innerHTML=year+'/'+month+'/'+day;
		box3.className="";
		box33.className="hide";
		box333.className="hide";
	}
	sl2.onclick=function(){
green.style.left="0.32666666rem";
		if(day<7){
			if(day==1){
			var monthh1=month-1;
			var monthh=month-1;
			var dayy=curMonthDays-(7-day);
			var dayy1=curMonthDays;
			}else{
			monthh1=month;
			monthh=month-1;
			dayy=curMonthDays-(7-day);
			dayy1=day-1;
			}
		}else{
			monthh1=month;
		    monthh=month;
			dayy=day-7;
			dayy1=day-1;
		}
		box3.className="hide";
		box33.className="";
		box333.className="hide";
		time11.innerHTML=monthh+'/'+dayy+'-'+monthh1+'/'+dayy1;
	}
	sl3.onclick=function(){
        green.style.left="0.6533333rem";
			if(day==1){
			var dayy1=curMonthDays;
			var monthh1=month-1;
			var monthh=month-1;
			var dayy=curMonthDays-(31-day);
			}else{
			dayy1=day-1;
			monthh1=month;
			monthh=month-1;
		    dayy=curMonthDays-(31-day);
		}
		time11.innerHTML=monthh+'/'+dayy+'-'+monthh1+'/'+dayy1;
		box3.className="hide";
		box33.className="hide";
		box333.className="";
	}

/*图表开始
 * 
 */
var tabContainer1 = document.getElementById('main1');
var tabContainer2= document.getElementById('main2');
var tabContainer3= document.getElementById('main3');
var tabContainer4= document.getElementById('main4');
var tabContainer5= document.getElementById('main5');
var tabContainer6= document.getElementById('main6');
var tabContainer11 = document.getElementById('main11');
var tabContainer22= document.getElementById('main22');
var tabContainer33= document.getElementById('main33');
var tabContainer44= document.getElementById('main44');
var tabContainer55= document.getElementById('main55');
var tabContainer66= document.getElementById('main66');
var tabContainer111 = document.getElementById('main111');
var tabContainer222= document.getElementById('main222');
var tabContainer333= document.getElementById('main333');
var tabContainer444= document.getElementById('main444');
var tabContainer555= document.getElementById('main555');
var tabContainer666= document.getElementById('main666');

//用于使chart自适应高度和宽度,通过窗体高宽计算容器高宽
var resizeContainer = function () {
	if(window.innerWidth<800){
   tabContainer1.style.width = window.innerWidth*0.83+'px';
    tabContainer1.style.height = window.innerHeight*0.28+'px';
    tabContainer2.style.width = window.innerWidth*0.83+'px';
    tabContainer2.style.height = window.innerHeight*0.28+'px';
    tabContainer3.style.width = window.innerWidth*0.83+'px';
    tabContainer3.style.height = window.innerHeight*0.28+'px';
    tabContainer4.style.width = window.innerWidth*0.83+'px';
    tabContainer4.style.height = window.innerHeight*0.28+'px';
    tabContainer5.style.width = window.innerWidth*0.83+'px';
    tabContainer5.style.height = window.innerHeight*0.28+'px';
    tabContainer6.style.width = window.innerWidth*0.83+'px';
    tabContainer6.style.height = window.innerHeight*0.28+'px';
    tabContainer11.style.width = window.innerWidth*0.83+'px';
    tabContainer11.style.height = window.innerHeight*0.28+'px';
    tabContainer22.style.width = window.innerWidth*0.83+'px';
    tabContainer22.style.height = window.innerHeight*0.28+'px';
    tabContainer33.style.width = window.innerWidth*0.83+'px';
    tabContainer33.style.height = window.innerHeight*0.28+'px';
    tabContainer44.style.width = window.innerWidth*0.83+'px';
    tabContainer44.style.height = window.innerHeight*0.28+'px';
    tabContainer55.style.width = window.innerWidth*0.83+'px';
    tabContainer55.style.height = window.innerHeight*0.28+'px';
    tabContainer66.style.width = window.innerWidth*0.83+'px';
    tabContainer66.style.height = window.innerHeight*0.28+'px';
     tabContainer111.style.width = window.innerWidth*0.83+'px';
    tabContainer111.style.height = window.innerHeight*0.28+'px';
    tabContainer222.style.width = window.innerWidth*0.83+'px';
    tabContainer222.style.height = window.innerHeight*0.28+'px';
    tabContainer333.style.width = window.innerWidth*0.83+'px';
    tabContainer333.style.height = window.innerHeight*0.28+'px';
    tabContainer444.style.width = window.innerWidth*0.83+'px';
    tabContainer444.style.height = window.innerHeight*0.28+'px';
    tabContainer555.style.width = window.innerWidth*0.83+'px';
    tabContainer555.style.height = window.innerHeight*0.28+'px';
    tabContainer666.style.width = window.innerWidth*0.83+'px';
    tabContainer666.style.height = window.innerHeight*0.28+'px';
	}else{
//	ulcontainer.removeClass("hide");	
   tabContainer1.style.width = window.innerWidth*0.2+'px';
    tabContainer1.style.height = window.innerHeight*0.28+'px';
    tabContainer2.style.width = window.innerWidth*0.2+'px';
    tabContainer2.style.height = window.innerHeight*0.28+'px';
    tabContainer3.style.width = window.innerWidth*0.2+'px';
    tabContainer3.style.height = window.innerHeight*0.28+'px';
    tabContainer4.style.width = window.innerWidth*0.2+'px';
    tabContainer4.style.height = window.innerHeight*0.28+'px';
    tabContainer5.style.width = window.innerWidth*0.2+'px';
    tabContainer5.style.height = window.innerHeight*0.28+'px';
    tabContainer6.style.width = window.innerWidth*0.2+'px';
    tabContainer6.style.height = window.innerHeight*0.28+'px';
    tabContainer11.style.width = window.innerWidth*0.2+'px';
    tabContainer11.style.height = window.innerHeight*0.28+'px';
    tabContainer22.style.width = window.innerWidth*0.2+'px';
    tabContainer22.style.height = window.innerHeight*0.28+'px';
    tabContainer33.style.width = window.innerWidth*0.2+'px';
    tabContainer33.style.height = window.innerHeight*0.28+'px';
    tabContainer44.style.width = window.innerWidth*0.2+'px';
    tabContainer44.style.height = window.innerHeight*0.28+'px';
    tabContainer55.style.width = window.innerWidth*0.2+'px';
    tabContainer55.style.height = window.innerHeight*0.28+'px';
    tabContainer66.style.width = window.innerWidth*0.2+'px';
    tabContainer66.style.height = window.innerHeight*0.28+'px';
    tabContainer111.style.width = window.innerWidth*0.2+'px';
    tabContainer111.style.height = window.innerHeight*0.28+'px';
    tabContainer222.style.width = window.innerWidth*0.2+'px';
    tabContainer222.style.height = window.innerHeight*0.28+'px';
    tabContainer333.style.width = window.innerWidth*0.2+'px';
    tabContainer333.style.height = window.innerHeight*0.28+'px';
    tabContainer444.style.width = window.innerWidth*0.2+'px';
    tabContainer444.style.height = window.innerHeight*0.28+'px';
    tabContainer555.style.width = window.innerWidth*0.2+'px';
    tabContainer555.style.height = window.innerHeight*0.28+'px';
    tabContainer666.style.width = window.innerWidth*0.2+'px';
    tabContainer666.style.height = window.innerHeight*0.28+'px';
	}
};
//设置容器高宽
resizeContainer();
var myChart1 = echarts.init(tabContainer1);
var myChart2 = echarts.init(tabContainer2);
var myChart3 = echarts.init(tabContainer3);
var myChart4 = echarts.init(tabContainer4);
var myChart5 = echarts.init(tabContainer5);
var myChart6 = echarts.init(tabContainer6);
var myChart11 = echarts.init(tabContainer11);
var myChart22 = echarts.init(tabContainer22);
var myChart33 = echarts.init(tabContainer33);
var myChart44 = echarts.init(tabContainer44);
var myChart55 = echarts.init(tabContainer55);
var myChart66 = echarts.init(tabContainer66);
var myChart111 = echarts.init(tabContainer111);
var myChart222= echarts.init(tabContainer222);
var myChart333 = echarts.init(tabContainer333);
var myChart444 = echarts.init(tabContainer444);
var myChart555 = echarts.init(tabContainer555);
var myChart666 = echarts.init(tabContainer666);

//日数据
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
            		color:'#36E39C',
            		width:'1'
            	}
            },
        boundaryGap: false,
        // data: ['周一','周二','周三','周四','周五','周六','周日']
    },
    yAxis: {
        type: 'value',
        splitLine: {     //网格线
                   show: false
                         },
            	axisLine:{
            	lineStyle:{
            		color:'#36E39C',
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
                            color:'#36E39C'
                                    }
                                },
            // data:[120, 132, 101, 134, 90, 230, 210]
            data:[]
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
            		color:'#3CA5CF',
            		width:'1'
            	}
            },
        boundaryGap: false,
        // data: ['周一','周二','周三','周四','周五','周六','周日']
    },
    yAxis: {
        type: 'value',
        splitLine: {     //网格线
                   show: false
                         },
            	axisLine:{
            	lineStyle:{
            		color:'#3CA5CF',
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
                            color:'#3CA5CF'
                                    }
                                },
            // data:[120, 132, 101, 134, 90, 230, 210]
            data:[]
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
            		color:'#ADEC25 ',
            		width:'1'
            	}
            },
        boundaryGap: false,
        // data: ['周一','周二','周三','周四','周五','周六','周日']
    },
    yAxis: {
        type: 'value',
        splitLine: {     //网格线
                   show: false
                         },
            	axisLine:{
            	lineStyle:{
            		color:'#ADEC25 ',
            		width:'1'
            	}
            },
    },
    series: [
        {
            name:'光照',
            type:'line',
            stack: '总量',
             itemStyle:{
                        normal:{
                            color:'#ADEC25 '
                                    }
                                },
            // data:[120, 132, 101, 134, 90, 230, 210]
            data:[]
        },
    ]
};

var d= {
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
            		color:'#36E39C',
            		width:'1'
            	}
            },
        boundaryGap: false,
        // data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value',
        splitLine: {     //网格线
                   show: false
                         },
        axisLine:{
            	lineStyle:{
            		color:'#36E39C',
            		width:'1'
            	}
            },
    },
    series: [{
        // data: [820, 932, 901, 934, 1290, 1330, 1320],
         itemStyle:{
                        normal:{
                            color:'#36E39C'
                                    }
                                },
        type: 'line',
        areaStyle: {},
        data:[]
    }]
};

var e= {
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
            		color:'#3CA5CF',
            		width:'1'
            	}
            },
        boundaryGap: false,
        // data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value',
        splitLine: {     //网格线
                   show: false
                         },
        axisLine:{
            	lineStyle:{
            		color:'#3CA5CF',
            		width:'1'
            	}
            },
    },
    series: [{
	    data:[],
        // data: [820, 932, 901, 934, 1290, 1330, 1320],
         itemStyle:{
                        normal:{
                            color:'#3CA5CF'
                                    }
                                },
        type: 'line',
        areaStyle: {}
    }]
};

var f= {
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
            		color:'#ADEC25 ',
            		width:'1'
            	}
            },
        boundaryGap: false,
        // data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value',
        splitLine: {     //网格线
                   show: false
                         },
        axisLine:{
            	lineStyle:{
            		color:'#ADEC25 ',
            		width:'1'
            	}
            },
    },
    series: [{
	    data:[],
        // data: [820, 932, 901, 934, 1290, 1330, 1320],
         itemStyle:{
                        normal:{
                            color:'#ADEC25 '
                                    }
                                },
        type: 'line',
        areaStyle: {}
    }]
};

//周数据
var aa={
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
            		color:'#36E39C',
            		width:'1'
            	}
            },
        boundaryGap: false,
        // data: ['周一','周二','周三','周四','周五','周六','周日']
    },
    yAxis: {
        type: 'value',
        splitLine: {     //网格线
                   show: false
                         },
            	axisLine:{
            	lineStyle:{
            		color:'#36E39C',
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
                            color:'#36E39C'
                                    }
                                },
            // data:[120, 132, 101, 134, 90, 230, 210]
            data:[]
        },
    ]
};


var bb = {
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
            		color:'#3CA5CF',
            		width:'1'
            	}
            },
        boundaryGap: false,
        // data: ['周一','周二','周三','周四','周五','周六','周日']
    },
    yAxis: {
        type: 'value',
        splitLine: {     //网格线
                   show: false
                         },
            	axisLine:{
            	lineStyle:{
            		color:'#3CA5CF',
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
                            color:'#3CA5CF'
                                    }
                                },
            // data:[120, 132, 101, 134, 90, 230, 210]
            data:[]
        },
    ]
};

var cc={
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
            		color:'#ADEC25 ',
            		width:'1'
            	}
            },
        boundaryGap: false,
        // data: ['周一','周二','周三','周四','周五','周六','周日']
    },
    yAxis: {
        type: 'value',
        splitLine: {     //网格线
                   show: false
                         },
            	axisLine:{
            	lineStyle:{
            		color:'#ADEC25 ',
            		width:'1'
            	}
            },
    },
    series: [
        {
            name:'光照',
            type:'line',
            stack: '总量',
             itemStyle:{
                        normal:{
                            color:'#ADEC25 '
                                    }
                                },
            data:[]
            // data:[120, 132, 101, 134, 90, 230, 210]
        },
    ]
};

var dd= {
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
            		color:'#36E39C',
            		width:'1'
            	}
            },
        boundaryGap: false,
        // data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value',
        splitLine: {     //网格线
                   show: false
                         },
        axisLine:{
            	lineStyle:{
            		color:'#36E39C',
            		width:'1'
            	}
            },
    },
    series: [{
	    data:[],
        // data: [820, 932, 901, 934, 1290, 1330, 1320],
         itemStyle:{
                        normal:{
                            color:'#36E39C'
                                    }
                                },
        type: 'line',
        areaStyle: {}
    }]
};

var ee= {
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
            		color:'#3CA5CF',
            		width:'1'
            	}
            },
        boundaryGap: false,
        // data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value',
        splitLine: {     //网格线
                   show: false
                         },
        axisLine:{
            	lineStyle:{
            		color:'#3CA5CF',
            		width:'1'
            	}
            },
    },
    series: [{
	    data:[],
        // data: [820, 932, 901, 934, 1290, 1330, 1320],
         itemStyle:{
                        normal:{
                            color:'#3CA5CF'
                                    }
                                },
        type: 'line',
        areaStyle: {}
    }]
};

var ff= {
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
            		color:'#ADEC25 ',
            		width:'1'
            	}
            },
        boundaryGap: false,
        // data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value',
        splitLine: {     //网格线
                   show: false
                         },
        axisLine:{
            	lineStyle:{
            		color:'#ADEC25 ',
            		width:'1'
            	}
            },
    },
    series: [{
	    data:[],
        // data: [820, 932, 901, 934, 1290, 1330, 1320],
         itemStyle:{
                        normal:{
                            color:'#ADEC25 '
                                    }
                                },
        type: 'line',
        areaStyle: {}
    }]
};

//月数据
var aaa={
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
            		color:'#36E39C',
            		width:'1'
            	}
            },
        boundaryGap: false,
        // data: ['周一','周二','周三','周四','周五','周六','周日']
    },
    yAxis: {
        type: 'value',
        splitLine: {     //网格线
                   show: false
                         },
            	axisLine:{
            	lineStyle:{
            		color:'#36E39C',
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
                            color:'#36E39C'
                                    }
                                },
            data:[]
            // data:[120, 132, 101, 134, 90, 230, 210]
        },
    ]
};


var bbb = {
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
            		color:'#3CA5CF',
            		width:'1'
            	}
            },
        boundaryGap: false,
        // data: ['周一','周二','周三','周四','周五','周六','周日']
    },
    yAxis: {
        type: 'value',
        splitLine: {     //网格线
                   show: false
                         },
            	axisLine:{
            	lineStyle:{
            		color:'#3CA5CF',
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
                            color:'#3CA5CF'
                                    }
                                },
            data:[]
            // data:[120, 132, 101, 134, 90, 230, 210]
        },
    ]
};

var ccc={
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
            		color:'#ADEC25  ',
            		width:'1'
            	}
            },
        boundaryGap: false,
        // data: ['周一','周二','周三','周四','周五','周六','周日']
    },
    yAxis: {
        type: 'value',
        splitLine: {     //网格线
                   show: false
                         },
            	axisLine:{
            	lineStyle:{
            		color:'#ADEC25  ',
            		width:'1'
            	}
            },
    },
    series: [
        {
            name:'光照',
            type:'line',
            stack: '总量',
             itemStyle:{
                        normal:{
                            color:'#ADEC25 '
                                    }
                                },
            data:[]
            // data:[120, 132, 101, 134, 90, 230, 210]
        },
    ]
};

var ddd= {
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
            		color:'#36E39C',
            		width:'1'
            	}
            },
        boundaryGap: false,
        // data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value',
        splitLine: {     //网格线
                   show: false
                         },
        axisLine:{
            	lineStyle:{
            		color:'#36E39C',
            		width:'1'
            	}
            },
    },
    series: [{
	    data:[],
        // data: [820, 932, 901, 934, 1290, 1330, 1320],
         itemStyle:{
                        normal:{
                            color:'#36E39C'
                                    }
                                },
        type: 'line',
        areaStyle: {}
    }]
};

var eee= {
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
            		color:'#3CA5CF',
            		width:'1'
            	}
            },
        boundaryGap: false,
        // data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value',
        splitLine: {     //网格线
                   show: false
                         },
        axisLine:{
            	lineStyle:{
            		color:'#3CA5CF',
            		width:'1'
            	}
            },
    },
    series: [{
	    data:[],
        // data: [820, 932, 901, 934, 1290, 1330, 1320],
         itemStyle:{
                        normal:{
                            color:'#3CA5CF'
                                    }
                                },
        type: 'line',
        areaStyle: {}
    }]
};

var fff= {
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
            		color:'#ADEC25 ',
            		width:'1'
            	}
            },
        boundaryGap: false,
        // data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value',
        splitLine: {     //网格线
                   show: false
                         },
        axisLine:{
            	lineStyle:{
            		color:'#ADEC25 ',
            		width:'1'
            	}
            },
    },
    series: [{
        data:[],
        // data: [820, 932, 901, 934, 1290, 1330, 1320],
         itemStyle:{
                        normal:{
                            color:'#ADEC25 '
                                    }
                                },
        type: 'line',
        areaStyle: {}
    }]
};

getdata();
initday();
initweek();
initmonth();

window.addEventListener('resize',function(){
    myChart1.resize();
    myChart2.resize();
    myChart3.resize();
    myChart4.resize();
    myChart5.resize();
    myChart6.resize();
    myChart11.resize();
    myChart22.resize();
    myChart33.resize();
    myChart44.resize();
    myChart55.resize();
    myChart66.resize();
    myChart111.resize();
    myChart222.resize();
    myChart333.resize();
    myChart444.resize();
    myChart555.resize();
    myChart666.resize();
});

//定时从后台读取数据
setInterval(function(){
	getdata();
	},5000);

//ajax技术实现前后台交互
function getdata(){
	$.ajax({
		type:"GET",
		url:"/sendjson",  //这里填入请求地址
		dataType:"json",
		success:function(data){

            //空气成分
            for(i=0;i<8;i++){
                realdata[i].innerHTML=data.Data.shift();
            }
            },
			error:function(){
			}
	})
}

function initday(){
	$.ajax({
		type:"GET",
		url:"/initday",  //这里填入请求地址
		dataType:"json",
		success:function(data){
		    console.log(data);
            a.series[0].data = data.TemperatureDay;
            b.series[0].data = data.HumidityDay;
            c.series[0].data = data.IlluminationDay;
            d.series[0].data = data.DustDay;//灰尘
            e.series[0].data = data.CarbonDioxideDay;//二氧化碳
            f.series[0].data = data.OxygenDay;//氧气

            // //空气成分
            // for(i=0;i<6;i++){
            //     realdata[i].innerHTML=data.Data.shift();
            // }

            myChart1.setOption(a);
            myChart2.setOption(b);
            myChart3.setOption(c);
            myChart4.setOption(d);
            myChart5.setOption(e);
            myChart6.setOption(f);
            },
            error:function(){
            }

	})
}

function initweek(){
	$.ajax({
		type:"GET",
		url:"/initweek",  //这里填入请求地址
		dataType:"json",
		success:function(data){
		    console.log(data);

            aa.series[0].data = data.TemperatureWeek;
            bb.series[0].data = data.HumidityWeek;
            cc.series[0].data = data.IlluminationWeek;
            dd.series[0].data = data.DustWeek;//灰尘
            ee.series[0].data = data.CarbonDioxideWeek;//二氧化碳
            ff.series[0].data = data.OxygenWeek;//氧气

            // aa.series[1].data = data.anchorWeek;//周数据
            // bb.series[1].data = data.anchorWeek;
            // cc.series[1].data = data.anchorWeek;
            // dd.series[1].data = data.anchorWeek;
            // ee.series[1].data = data.anchorWeek;
            // ff.series[1].data = data.anchorWeek;

            myChart11.setOption(aa);
            myChart22.setOption(bb);
            myChart33.setOption(cc);
            myChart44.setOption(dd);
            myChart55.setOption(ee);
            myChart66.setOption(ff);

            },
            error:function(){
            }

	})
}

function initmonth(){
	$.ajax({
		type:"GET",
		url:"/initmonth",  //这里填入请求地址
		dataType:"json",
		success:function(data){
		    console.log(data);

            aaa.series[0].data = data.TemperatureMonth;
            bbb.series[0].data = data.HumidityMonth;
            ccc.series[0].data = data.IlluminationMonth;
            ddd.series[0].data = data.DustMonth;//灰尘
            eee.series[0].data = data.CarbonDioxideMonth;//二氧化碳
            fff.series[0].data = data.OxygenMonth;//氧气

            // aaa.series[1].data = data.anchorMonth;//月数据
            // bbb.series[1].data = data.anchorMonth;
            // ccc.series[1].data = data.anchorMonth;
            // ddd.series[1].data = data.anchorMonth;
            // eee.series[1].data = data.anchorMonth;
            // fff.series[1].data = data.anchorMonth;

            myChart111.setOption(aaa);
            myChart222.setOption(bbb);
            myChart333.setOption(ccc);
            myChart444.setOption(ddd);
            myChart555.setOption(eee);
            myChart666.setOption(fff);
            },
            error:function(){
            }

	})
}