var body=document.getElementsByTagName("body")[0];
var menu=document.getElementById("menu");
var logo=document.getElementById("logo");
var bar=document.getElementById("bar");
var ulcontainer=document.getElementById("ulcontainer");
var left=document.getElementById("left");
var right=document.getElementById("left");
var barul=document.getElementById("barul");
var down=document.getElementById("down");
var even=barul.getElementsByClassName("even");
var odd=barul.getElementsByClassName("odd");
var about=document.getElementById("about");
var solution=document.getElementById("solution");
var solutionbg=document.getElementById("solutionbg");
var dat=document.getElementById("data");
var application=document.getElementById("applicaton");
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
var toright1=document.getElementById("toright1");
var toleft1=document.getElementById("toleft1");
var box3=document.getElementById("box3");
var box33=document.getElementById("box33");
var box333=document.getElementById("box333");
var box4=document.getElementById("box4");
var article2=document.getElementById("article2");

// function datechanged() {
//     var date = '2018-05-18';
//     var type = 'week';
// 	$.ajax({
// 		type:"POST",
// 		url:"/datechanged",  //这里填入请求地址
// 		dataType:"json",
//         data:{'date':date,
//             'type':type},
// 		success:function(data){
// 		    },
//         error:function(){
//         }
// 	})
// }

var realdata = [document.getElementById("Temperature"),document.getElementById("Humidity"),document.getElementById("Illumination"),
    document.getElementById("CarbonDioxide"),document.getElementById("Oxygen"),document.getElementById("Dust")]

logo.onclick=function(){
	for(var i=0;i<4;i++){
	even[i].className="even";
	odd[i].className="odd hide";
	}
	body.className="bgpic";
	lw.className="";
	about1.className="hide";
	solution1.className="hide";
	dat1.className="hide";
	dat2.className="hide";
	application1.className="hide";
}

 $('#shard').show();
 $('#shard').one('click',function(){
                console.log('click ...');
                $('#ulcontainer').css('display','none');
                 $('#bar').css('display','block');
                  $('#toleft1').css('display','block');
                $('#shard').hide();
           });
    $('#bar').on('click',function(){
        $('#ulcontainer').css('display','block');
        $('#toleft1').css('display','none');
        $('#bar').css('display','none');
        $('#shard').off('click');
        $('#shard').hide();
        setTimeout(function(){
            $('#shard').show();
            $('#shard').one('click',function(){
                console.log('click ...');
                $('#ulcontainer').css('display','none');
                 $('#bar').css('display','block');
                  $('#toleft1').css('display','block');
                $('#shard').hide();
            })
        }, 0);
    })
down.onclick=function(){
	for(var i=0;i<4;i++){
	even[i].className="even";
	odd[i].className="odd hide";
	}
	even[0].className="even hide";
	odd[0].className="odd";
	body.className="bgcolorf";
	about1.className="";
	lw.className="hide";
	solution1.className="hide";
	dat1.className="hide";
	dat2.className="hide";
	application1.className="hide";
	}
about.onclick=function(e){
	e.stopPropagation();
	for(var i=0;i<4;i++){
	even[i].className="even";
	odd[i].className="odd hide";
	}
	even[0].className="even hide";
	odd[0].className="odd";
	body.className="bgcolorf";
	lw.className="hide";
	about1.className="";
	solution1.className="hide";
	dat1.className="hide";
	dat2.className="hide";
	application1.className="hide";
};
var wid=window.innerHeight/window.innerWidth/1.22*100+"%";
var topp=(window.innerHeight*0.65-window.innerWidth*0.92)*100/window.innerHeight;
var top1=(window.innerHeight-window.innerWidth*0.92)*100/window.innerHeight;
solution.onclick=function(e){
	e.stopPropagation();
	for(var i=0;i<4;i++){
	even[i].className="even";
	odd[i].className="odd hide";
	}
	solimg.style.width=wid;
	if(window.innerWidth<800){
	solutionbg.style.top=topp+1+"%";
	}else{
		solutionbg.style.top=top1+1+"%";
	}
	even[1].className="even hide";
	odd[1].className="odd";
	body.className="bgcolorf";
	lw.className="hide";
	about1.className="hide";
	solution1.className="";
	dat1.className="hide";
	dat2.className="hide";
	application1.className="hide";
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

var curMonthDays=new Date(year,month,0).getDate();
dat.onclick=function(e){
	    e.stopPropagation();
		for(var i=0;i<4;i++){
	even[i].className="even";
	odd[i].className="odd hide";
	}
	even[2].className="even hide";
	odd[2].className="odd";
		lw.className="hide";
		body.className="bgblue";
		about1.className="hide";
		solution1.className="hide";
		dat1.className="";
		dat2.className="hide";
		application1.className="hide";
	};
	time11.innerHTML=year+'/'+month+'/'+day;
	sl1.onclick=function(){
		sl1.style.background="#92C627";
		sl2.style.background="#759F1F";
		sl3.style.background="#759F1F";
		time11.innerHTML=year+'/'+month+'/'+day;
		box3.className="";
		box33.className="hide";
		box33.className="hide";
	}

	sl2.onclick=function(){
		sl2.style.background="#92C627";
		sl1.style.background="#759F1F";
		sl3.style.background="#759F1F";
		if(day<7){
			if(day==1){
			var monthh1="0"+month-1;
			var monthh=month-1;
			var dayy=curMonthDays-(7-day);
			var dayy1=curMonthDays;
			}else{
			monthh1=month;
			monthh="0"+month-1;
			dayy=curMonthDays-(7-day);
			dayy1="0"+day-1;
			}
		}else{
			monthh1=month;
		    monthh=month;
			dayy=day-7;
			dayy1=day-1;
		}
		box3.className="hide";
		box33.className="";
		box33.className="hide";
		time11.innerHTML=monthh+'/'+dayy+'-'+monthh1+'/'+dayy1;
	}
	sl3.onclick=function(){
		sl3.style.background="#92C627";
		sl1.style.background="#759F1F";
		sl2.style.background="#759F1F";
			if(day==1){
			var dayy1=curMonthDays;
			var monthh1="0"+month-1;
			var monthh="0"+month-1;
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
		box33.className="";
	}
application.onclick=function(e){
	    e.stopPropagation(e);
		for(var i=0;i<4;i++){
	even[i].className="even";
	odd[i].className="odd hide";
	}
	even[3].className="even hide";
	odd[3].className="odd";
		body.className="bgcolorf";
		lw.className="hide";
		about1.className="hide";
		solution1.className="hide";
		dat1.className="hide";
		dat2.className="hide";
		application1.className="";
	};
toright1.onclick=function(){
	body.className="bgblue";
	dat1.className="hide";
	dat2.className="";
}
toleft1.onclick=function(){
	dat1.className="";
	dat2.className="hide";
}


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
    tabContainer11.style.width = window.innerWidth*0.76+'px';
    tabContainer11.style.height = window.innerHeight*0.28+'px';
    tabContainer22.style.width = window.innerWidth*0.76+'px';
    tabContainer22.style.height = window.innerHeight*0.28+'px';
    tabContainer33.style.width = window.innerWidth*0.76+'px';
    tabContainer33.style.height = window.innerHeight*0.28+'px';
    tabContainer44.style.width = window.innerWidth*0.76+'px';
    tabContainer44.style.height = window.innerHeight*0.28+'px';
    tabContainer55.style.width = window.innerWidth*0.76+'px';
    tabContainer55.style.height = window.innerHeight*0.28+'px';
    tabContainer66.style.width = window.innerWidth*0.76+'px';
    tabContainer66.style.height = window.innerHeight*0.28+'px';
     tabContainer111.style.width = window.innerWidth*0.76+'px';
    tabContainer111.style.height = window.innerHeight*0.28+'px';
    tabContainer222.style.width = window.innerWidth*0.76+'px';
    tabContainer222.style.height = window.innerHeight*0.28+'px';
    tabContainer333.style.width = window.innerWidth*0.76+'px';
    tabContainer333.style.height = window.innerHeight*0.28+'px';
    tabContainer444.style.width = window.innerWidth*0.76+'px';
    tabContainer444.style.height = window.innerHeight*0.28+'px';
    tabContainer555.style.width = window.innerWidth*0.76+'px';
    tabContainer555.style.height = window.innerHeight*0.28+'px';
    tabContainer666.style.width = window.innerWidth*0.76+'px';
    tabContainer666.style.height = window.innerHeight*0.28+'px';
	}else{
//	ulcontainer.removeClass("hide");
	tabContainer1.style.width = window.innerWidth*0.25+'px';
    tabContainer1.style.height = window.innerHeight*0.28+'px';
    tabContainer2.style.width = window.innerWidth*0.25+'px';
    tabContainer2.style.height = window.innerHeight*0.28+'px';
    tabContainer3.style.width = window.innerWidth*0.25+'px';
    tabContainer3.style.height = window.innerHeight*0.28+'px';
    tabContainer4.style.width = window.innerWidth*0.25+'px';
    tabContainer4.style.height = window.innerHeight*0.28+'px';
    tabContainer5.style.width = window.innerWidth*0.25+'px';
    tabContainer5.style.height = window.innerHeight*0.28+'px';
    tabContainer6.style.width = window.innerWidth*0.25+'px';
    tabContainer6.style.height = window.innerHeight*0.28+'px';
    tabContainer11.style.width = window.innerWidth*0.25+'px';
    tabContainer11.style.height = window.innerHeight*0.28+'px';
    tabContainer22.style.width = window.innerWidth*0.25+'px';
    tabContainer22.style.height = window.innerHeight*0.28+'px';
    tabContainer33.style.width = window.innerWidth*0.25+'px';
    tabContainer33.style.height = window.innerHeight*0.28+'px';
    tabContainer44.style.width = window.innerWidth*0.25+'px';
    tabContainer44.style.height = window.innerHeight*0.28+'px';
    tabContainer55.style.width = window.innerWidth*0.25+'px';
    tabContainer55.style.height = window.innerHeight*0.28+'px';
    tabContainer66.style.width = window.innerWidth*0.25+'px';
    tabContainer66.style.height = window.innerHeight*0.28+'px';
    tabContainer111.style.width = window.innerWidth*0.25+'px';
    tabContainer111.style.height = window.innerHeight*0.28+'px';
    tabContainer222.style.width = window.innerWidth*0.25+'px';
    tabContainer222.style.height = window.innerHeight*0.28+'px';
    tabContainer333.style.width = window.innerWidth*0.25+'px';
    tabContainer333.style.height = window.innerHeight*0.28+'px';
    tabContainer444.style.width = window.innerWidth*0.25+'px';
    tabContainer444.style.height = window.innerHeight*0.28+'px';
    tabContainer555.style.width = window.innerWidth*0.25+'px';
    tabContainer555.style.height = window.innerHeight*0.28+'px';
    tabContainer666.style.width = window.innerWidth*0.25+'px';
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
var a ={
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
var c ={
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
            name:'光照',
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
var d = {
    tooltip:{
        trigger:'axis'
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
        name:'灰尘',
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
var e = {
    tooltip:{
        trigger:'axis'
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
        name:'二氧化碳',
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
var f = {
    tooltip:{
        trigger:'axis'
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
        // min:function(value)
        // {
        //     return value.min - 0.1;
        // },
        min:0,
        max:30
        // max:function(value)
        // {
        //     return Math.ceil(value.max + 0.15);
        // }
    },
    series: [{
        name:'氧气',
        data: [820, 932, 901, 934, 1290, 1330, 1320],
         itemStyle:{
                        normal:{
                            color:'#ADEC25'
                                    }
                                },
        type: 'line',
        areaStyle: {}////
    }]
};
//周数据
var aa ={
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
var cc ={
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
            name:'光照',
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
var dd = {
    tooltip:{
        trigger:'axis'
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
        name:'灰尘',
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
var ee = {
    tooltip:{
        trigger:'axis'
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
        name:'二氧化碳',
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
var ff = {
    tooltip:{
        trigger:'axis'
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
        // min:function(value)
        // {
        //     return value.min - 0.1;
        // },
        min:0,
        max:30
        // max:function(value)
        // {
        //     return Math.ceil(value.max + 0.15);
        // }
    },
    series: [{
        name:'氧气',
        data: [820, 932, 901, 934, 1290, 1330, 1320],
         itemStyle:{
                        normal:{
                            color:'#ADEC25'
                                    }
                                },
        type: 'line',
        areaStyle: {}////
    }]
};
//月数据
var aaa ={
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
var ccc ={
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
            name:'光照',
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
var ddd = {
    tooltip:{
        trigger:'axis'
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
        name:'灰尘',
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
var eee = {
    tooltip:{
        trigger:'axis'
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
        name:'二氧化碳',
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
var fff = {
    tooltip:{
        trigger:'axis'
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
        // min:function(value)
        // {
        //     return value.min - 0.1;
        // },
        min:0,
        max:30
        // max:function(value)
        // {
        //     return Math.ceil(value.max + 0.15);
        // }
    },
    series: [{
        name:'氧气',
        data: [820, 932, 901, 934, 1290, 1330, 1320],
         itemStyle:{
                        normal:{
                            color:'#ADEC25'
                                    }
                                },
        type: 'line',
        areaStyle: {}////
    }]
};
initdata();

myChart1.setOption(a);
myChart2.setOption(b);
myChart3.setOption(c);
myChart4.setOption(d);
myChart5.setOption(e);
myChart6.setOption(f);
myChart11.setOption(aa);
myChart22.setOption(bb);
myChart33.setOption(cc);
myChart44.setOption(dd);
myChart55.setOption(ee);
myChart66.setOption(ff);
myChart111.setOption(aaa);
myChart222.setOption(bbb);
myChart333.setOption(ccc);
myChart444.setOption(ddd);
myChart555.setOption(eee);
myChart666.setOption(fff);

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
                realdata[i].innerHTML=data.Data.shift();
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
            // console.log(data.Date);
            // console.log(data.Temperature);
            // console.log(data.Humidity);
            // console.log(data.Illumination);
            // console.log(data.CarbonDioxide);
            // console.log(data.Oxygen);
            // console.log(data.Dust);

            a.series[0].data = data.Temperature1;
            b.series[0].data = data.Humidity1;
            c.series[0].data = data.Illumination1;
            d.series[0].data = data.Dust1;//灰尘
            e.series[0].data = data.CarbonDioxide1;//二氧化碳
            f.series[0].data = data.Oxygen1;//氧气

            a.xAxis.data = data.Date1;//日数据
            b.xAxis.data = data.Date1;
            c.xAxis.data = data.Date1;
            d.xAxis.data = data.Date1;
            e.xAxis.data = data.Date1;
            f.xAxis.data = data.Date1;
            aa.xAxis.data = data.Date2;//周数据
            bb.xAxis.data = data.Date2;
            cc.xAxis.data = data.Date2;
            dd.xAxis.data = data.Date2;
            ee.xAxis.data = data.Date2;
            ff.xAxis.data = data.Date2;
            aaa.xAxis.data = data.Date3;//月数据
            bbb.xAxis.data = data.Date3;
            ccc.xAxis.data = data.Date3;
            ddd.xAxis.data = data.Date3;
            eee.xAxis.data = data.Date3;
            fff.xAxis.data = data.Date3;

            //空气成分
            for(i=0;i<6;i++){
                realdata[i].innerHTML=data.Data.shift();
            }

            myChart1.setOption(a);
            myChart2.setOption(b);
            myChart3.setOption(c);
            myChart4.setOption(d);
            myChart5.setOption(e);
            myChart6.setOption(f);

            myChart11.setOption(aa);
            myChart22.setOption(bb);
            myChart33.setOption(cc);
            myChart44.setOption(dd);
            myChart55.setOption(ee);
            myChart66.setOption(ff);

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