var vue;
var body = document.getElementsByTagName("body")[0];
var bar = document.getElementById("bar");
var articlecontain = document.getElementsByClassName("articlecontain")[0];
var bar1 = document.getElementById("bar1");
var eng = document.getElementById("eng");
var chin = document.getElementById("chin");
var solutionimg = document.getElementById("solutionimg");
var solutionbg = document.getElementById("solutionbg");
var solimg = document.getElementById("solimg");
var teaimg = document.getElementById("teaimg");
var lw = document.getElementById("lw");
var time1 = document.getElementById("time1");
var about1 = document.getElementById("about1");
var teaimg1 = document.getElementById("teaimg1");
var solutionimg = document.getElementById("solutionimg");
var article = document.getElementById("article");
var article1 = document.getElementById("article1");
var dat1 = document.getElementById("dat1");
var dat2 = document.getElementById("dat2");
var application1 = document.getElementById("application1");
var box3 = document.getElementById("box3");
var box33 = document.getElementById("box33");
var box333 = document.getElementById("box333");
var article2 = document.getElementById("article2");
var sl1 = document.getElementById("sl1");
var sl2 = document.getElementById("sl2");
var sl3 = document.getElementById("sl3");
var time11 = document.getElementById("time11");
var green = document.getElementsByClassName("green")[0];
var date = new Date();
var year = date.getFullYear();
var month = date.getMonth() + 1;
var day = date.getDate();
// time1.innerHTML=year+'/'+month+'/'+day;
var curMonthDays = new Date(year, month - 1, 0).getDate();
var timee1 = year + '/' + month + '/' + day;
var timeee = year + '/' + month + '/' + (day - 1);

var chinese = {
  w1: '故事',
  w2: '茶园<br/>实时数据',
  w3: '茶园<br/>历史数据',
  w4: '生态茶园<br/>解决方案',
  w5: '延伸应用',
  w11: '故事',
  w22: '茶园实时数据',
  w221: '实时',
  w222: '历史',
  w33: '茶园历史数据',
  w44: '解决方案',
  w55: '延伸应用',
  article1ww: '北纬30°，东经103°。坐落在四川雅安东北部的蒙顶山，是青藏高原与四川盆地在极度海拔落差之间的产物。山脉由西向东，茶园堆青叠翠，绿浪翻涌。这对在蒙顶山茶区土生土长的老邓来说，是最稀松平常的风景。<br/><br/>' +
    '老邓不老，82年生，是蒙顶山茶区众多茶园主人里比较少见的80后，最爱喝自己茶园里的明前手工甘露，管着分布在1100多米海拔高度的方圆50亩的茶园。</br></br>' +
    '小时候，因为家里有个小规模的老川茶园，父辈们种茶制茶卖茶过活的耳濡目染，老邓对茶多少有些独特的情感。"虽然跟茶结缘早，但长大了还是选择离开，去了城市生活，高山种茶太苦了。"但2013年，城市创业失利，老邓命运般地回到了茶园，开始正经学茶、种茶、制茶，延续着祖辈留下的生活方式。<br/><br/>' +
    '"都说：扬子江心水，蒙山顶上茶。高山种茶海拔高，有机生态的生长环境，茶品质有保障。但同时因为茶园种植密度低，管理成本高，茶树发芽不齐，采茶难度大，导致高山茶产量小，在市场上的价值优势体现不出来。"<br/><br/>' +
    '怎么让消费者深入了解高山茶的有机生长和制茶环境，提升高山茶的价值所在，是老邓这两年一直在思考的问题。机缘巧合，因为认识了上山探茶、为Seeed IoTea智慧生态茶园方案寻找试点茶园的樊老师 <a class="link" href="https://www.seeed.cc/single-post/iotea ">（戳此樊老师上山找茶趣的故事）</a>，这个问题出现转机。<br/><br/>' +
    '双方确定合作意向后，方案细节探讨、原型制作与测试，到方案安装和调试，2018年3月底，高山茶与新科技结合，方案最终成功落地。',
  aabs: '智慧生态茶园方案',
  solutionarticle: ' Seeed IoTea智慧生态茶园方案致力于如何在不破坏原本山茶古旧的种茶－摘茶－制茶生态的基础上，让技术帮助茶农更科学、生理地管理广袤的茶园，同时对消费者开放实时监测茶园的渠道，让大众直观地了解高山茶种茶、制茶的生态。<br/><br/>' +
    '由一系列传感器、节点，网关等组成的智能环境监测系统，可以实时收集种茶过程中的大气温湿度、二氧化碳、氧气、PM、光照，土壤温湿度等影响茶树生长的关键数据。同时收集制茶过程中的房间温湿度、以及杀青温度。各个节点通过Lora协议把采集到的数据传输给网关，然后上传到云端数据库，最终通过可视化工具，把茶叶从茶园到制茶过程的数据以图表清晰呈现。',
  article2: 'Seeed IoT智慧生态方案，通过对大气压、大气温湿度、二氧化碳、氧气、PM、土壤温湿度进行数据监测，通过无线技术传输至云端处理，并在页面上直观显示。从而达到农林业种植、畜牧业养殖的智能化管理，减轻管理的工作量和成本。茶园之外，Seeed IoT智慧生态方案可延伸应用农业、林业、畜牧业。',
  realtitle: '茶园实时数据',
  datacontain1: '空气温度',
  datacontain2: '空气湿度',
  datacontain3: '光照',
  datacontain4: '二氧化碳',
  datacontain5: '氧气',
  datacontain6: '粉尘',
  datacontain7: '土壤温度',
  datacontain8: '土壤湿度',
  sl1: '&nbsp;&nbsp;日',
  sl2: '&nbsp;&nbsp;周',
  sl3: '&nbsp;&nbsp;月',
  src: "../static/img/solution tuz'z'z'z'z-03.png"
};
var english = {
  w1: 'Story',
  w2: 'Real-time<br/>data',
  w3: 'Historical<br/>data',
  w4: 'Solution',
  w5: 'Application',
  w11: 'Story',
  w22: 'Real-time data',
  w221: 'Real-time',
  w222: 'Historical',
  w33: 'Historical data',
  w44: 'Solution',
  w55: 'Application',
  article1ww: 'On Mengding Mountain northeast of Ya’an,\n' +
    'Sichuan, the mountain ridge runs west to east in a\n' +
    'sea of green. This is a most familiar sight for\n' +
    '36-year-old Deng, one of the very few Mengding\n' +
    'tea makers of his generation, with a plantation of\n' +
    '50mu (=3.3 hectares) situated at 1100m above sea\n' +
    'level. Deng comes from a family of tea makers, but\n' +
    'carrying on the family legacy is not an easy task.\n' +
    '“Our teas are grown at high altitude in an organic\n' +
    'environment to ensure its excellent quality. But at the\n' +
    'same time, the growth density is low, cost is high and\n' +
    'budding is uneven, making tea hard to harvest.\n' +
    'That’s why high-mountain teas are normally small\n' +
    'harvests and their values are not reflected on the\n' +
    'market.”' +
    'For the past two years, Deng has been trying to\n' +
    'raise consumer awareness of high-mountain tea to\n' +
    'promote their value. And when he met Fan, who was\n' +
    'looking for a plantation to implement Seeed’s IoTea\n' +
    'technology, a perfect match for a solution was made.',
  aabs: 'IoTea Solution',
  solutionarticle: 'The Seeed IoTea Solution aims to assist tea\n' +
    'farmers better manage plantations without altering\n' +
    'the traditional practices of tea cultivation, and to\n' +
    'present real-time environmental data from the\n' +
    'plantations on an open platform.</br></br>\n' +
    '\n' +
    'Consisting of sensors, nodes, and gateways, IoTea\n' +
    'collects real-time data of factors that may affect the\n' +
    'quality of tea during cultivation and production\n' +
    'processes, including temperature and humidity,\n' +
    'CO2, O2, PM, and light exposure. The data is\n' +
    'collected by the sensors, sent by the nodes to the\n' +
    'gateway and eventually to the cloud, and is made\n' +
    'accessible to end customers on a webpage.\n' +
    '',
  article2: 'The Seeed IoTea Solution collects environmental\n' +
    'data from tea plantations, including temperature and\n' +
    'humidity, CO2, O2, PM, and light exposure, and\n' +
    'sends these data to the cloud through wireless\n' +
    'technology to be shown on a webpage of software\n' +
    'application. This solution helps to increase\n' +
    'management efficiency and reduce cost, and can be\n' +
    'applied in agriculture, forestry and livestock farming.',
  realtitle: 'Real-time data',
  datacontain1: 'Air Temperature',
  datacontain2: 'Air Humidity',
  datacontain3: 'Illumination',
  datacontain4: 'CO2',
  datacontain5: 'O2',
  datacontain6: 'PM',
  datacontain7: 'Soil Temperature',
  datacontain8: 'Soil Humidity',
  sl1: '&nbsp;&nbsp;&nbsp;Day',
  sl2: '&nbsp;&nbsp;Week',
  sl3: '&nbsp;&nbsp;Month',
  src: "../static/img/solution tuz'z'z'z'z-03.png",
};
var startTime = 0, //翻屏起始时间
  endTime = 0,
  now = 0;

$(function() {
  vue = new Vue({
    el: '#app',
    updated: function() {
      this.draw();
    },
    mounted: function() {
      this.draw();
      if ((navigator.userAgent.toLowerCase().indexOf("firefox") != -1)) {
        document.addEventListener("DOMMouseScroll", this.scrollFun, false);
      } else if (document.addEventListener) {
        document.addEventListener("mousewheel", this.scrollFun, false);
      } else if (document.attachEvent) {
        document.attachEvent("onmousewheel", this.scrollFun);
      } else {
        document.onmousewheel = this.scrollFun;
      }
    },
    destroyed: function() {
      document.removeEventListener('scroll', this.handleScroll);
    },
    data: {
      msg: chinese,
      mobile: false,
      load: false,
      lgbtn4aa: false,
      data1: false,
      data2: false,
      box3a: true,
      box33a: false,
      box333a: false,
      eng: true,
      chin: false,
      timee: timeee,
      timee1: timee1,
      green1: true,
      green2: false,
      green3: false,
      green11: true,
      green22: false,
      green33: false,
      a: a,
      b: b,
      c: c,
      d: d,
      e: e,
      f: f,
      g: g,
      h: h,
      aa: aa,
      bb: bb,
      cc: cc,
      dd: dd,
      ee: ee,
      ff: ff,
      gg: gg,
      hh: hh,
      aaa: aaa,
      bbb: bbb,
      ccc: ccc,
      ddd: ddd,
      eee: eee,
      fff: fff,
      ggg: ggg,
      hhh: hhh,
      Temperature: '',
      Humidity: '',
      Illumination: '',
      CarbonDioxide: '',
      Oxygen: '',
      Dust: '',
      SoilTemperature: '',
      SoilMoisture: '',
      menuStatus: 1,
      nextStatus: 1,
      s: 0,
      story: false,
      solution: false,
      app: false,
      data: false,
    },
    created() {
      $("body").css("overflow", "auto");
      let _this = this;
      $(".loading").stop().fadeOut(1000, function() {
        _this.load = true;
      })
    },
    methods: {
      storymove: function() {
        $("#u .bottomline11").css({
          "width": "0",
          "left": "0.75rem",
          "display": "block"
        })
        $("#u .bottomline11").stop().animate({
          "width": "0.28rem",
          "left": "0.6rem"
        }, 400)
      },
      storyleave: function() {
        $("#u .bottomline11").css({
          "width": "0.28rem",
          "left": "0.6rem",
          "display": "block"
        })
        $("#u .bottomline11").stop().animate({
          "width": "0",
          "left": "0.75rem",
          "display": "none"
        }, 400)
      },
      datamove: function() {
        $("#u .bottomline02").css({
          "width": "0",
          "left": "0.75rem",
          "display": "block"
        })
        $("#u .bottomline02").stop().animate({
          "width": "0.28rem",
          "left": "0.6rem"
        }, 400)
      },
      dataleave: function() {
        $("#u .bottomline02").css({
          "width": "0.28rem",
          "left": "0.6rem",
          "display": "block"
        })
        $("#u .bottomline02").stop().animate({
          "width": "0",
          "left": "0.75rem",
          "display": "none"
        }, 400)
      },
      solumove: function() {
        $("#u .bottomline33").css({
          "width": "0",
          "left": "0.75rem",
          "display": "block"
        })
        $("#u .bottomline33").stop().animate({
          "width": "0.28rem",
          "left": "0.6rem"
        }, 400)
      },
      soluleave: function() {
        $("#u .bottomline33").css({
          "width": "0.28rem",
          "left": "0.6rem",
          "display": "block"
        })
        $("#u .bottomline33").stop().animate({
          "width": "0",
          "left": "0.75rem",
          "display": "none"
        }, 400)
      },
      appmove: function() {
        $("#u .bottomline44").css({
          "width": "0",
          "left": "0.75rem",
          "display": "block"
        })
        $("#u .bottomline44").stop().animate({
          "width": "0.28rem",
          "left": "0.6rem"
        }, 400)
      },
      appleave: function() {
        $("#u .bottomline44").css({
          "width": "0.28rem",
          "left": "0.6rem",
          "display": "block"
        })
        $("#u .bottomline44").stop().animate({
          "width": "0",
          "left": "0.75rem",
          "display": "none"
        }, 400)
      },
      dat1move: function() {
        $(".ull .bottomline211").css({
          "width": "0",
          "left": "0.34rem",
          "display": "block"
        })
        $(".ull .bottomline211").stop().animate({
          "width": "0.28rem",
          "left": "0.2rem"
        }, 400)
      },
      dat1leave: function() {
        $(".ull .bottomline211").css({
          "width": "0.28rem",
          "left": "0.2rem",
          "display": "block"
        })
        $(".ull .bottomline211").stop().animate({
          "width": "0",
          "left": "0.34rem",
          "display": "none"
        }, 400)
      },
      dat2move: function() {
        $(".ull .bottomline222").css({
          "width": "0",
          "left": "0.34rem",
          "display": "block"
        })
        $(".ull .bottomline222").stop().animate({
          "width": "0.28rem",
          "left": "0.2rem"
        }, 400)
      },
      dat2leave: function() {
        $(".ull .bottomline222").css({
          "width": "0.28rem",
          "left": "0.2rem",
          "display": "block"
        })
        $(".ull .bottomline222").stop().animate({
          "width": "0",
          "left": "0.34rem",
          "display": "none"
        }, 400)
      },
      chooseChinese: function() {
        this.msg = chinese;
        this.chin = false;
        this.eng = true;
      },
      chooseEnglish: function() {
        this.msg = english;
        this.chin = true;
        this.eng = false;
      },
      nextFn: function() {
        let _this = this;
        if (this.nextStatus == 1) {
          $(".aboutimg1").stop().animate({
            "left": "-3.6rem"
          }, 500, function() {
            _this.nextStatus = 0;
          })
        } else {
          $(".aboutimg1").stop().animate({
            "left": "0rem"
          }, 500, function() {
            _this.nextStatus = 1;
          })
        }
      },
      changeFn: function() {
        $("#lwbox").css("display", 'none');
        $("#aboutbox").css("display", 'none');
        $(".now-all").css("display", 'none');
        $("#dat1box").css("display", 'none');
        $("#dat2box").css("display", 'none');
        $("#solubox").css("display", 'none');
        $("#appbox").css("display", 'none');
        this.story = false;
        this.solution = false;
        this.data = false;
        this.app = false;
        this.data1 = false;
        this.data2 = false;
      },
      iotLogo: function() {
        this.changeFn()
        $("#lwbox").slideDown(400);
      },
      storyclick: function() {
        this.changeFn()
        $("#aboutbox").slideDown(400);
        this.story = true;
      },
      dataclick: function() {
        this.changeFn()
        $(".now-all").css('display', 'block');
        this.data = true;
        $(".ull").css({
          "width": "0rem"
        });
        $(".ull").stop().animate({
          "width": "1.24rem"
        }, 400)
        $("#dat1box").slideDown(400);
        this.data1 = true;
      },
      data1click: function() {
        this.changeFn();
        $(".now-all").css('display', 'block');
        $("#dat1box").slideDown(400);
        this.data = true;
        this.data1 = true;
      },
      data2click: function() {
        this.changeFn();
        $(".now-all").css('display', 'block');
        $("#dat2box").slideDown(400);
        this.data = true;
        this.data2 = true;
      },
      solutionclick: function() {
        this.changeFn()
        $("#solubox").slideDown(400)
        this.solution = true;
      },
      appclick: function() {
        this.changeFn()
        $("#appbox").slideDown(400)
        this.app = true;
      },
      sl1clik: function() {
        this.box3a = true;
        this.box33a = false;
        this.box333a = false;
        this.green1 = true;
        this.green2 = false;
        this.green3 = false;
        this.green11 = true;
        this.green22 = false;
        this.green33 = false;
        this.timee = year + '/' + month + '/' + day;
        if (day == 1) {
          var monthh1 = month - 1;
          var dayy1 = curMonthDays;
        } else {
          monthh1 = month;
          dayy1 = day - 1;
        }
        this.timee = year + '/' + monthh1 + '/' + dayy1;
      },
      sl2clik: function() {
        this.box3a = false;
        this.box33a = true;
        this.box333a = false;
        if (day < 7) {
          if (day == 1) {
            var monthh1 = month - 1;
            var monthh = month - 1;
            var dayy = curMonthDays - (7 - day);
            var dayy1 = curMonthDays;
          } else {
            monthh1 = month;
            monthh = month - 1;
            dayy = curMonthDays - (7 - day);
            dayy1 = day - 1;
          }
        } else {
          monthh1 = month;
          monthh = month;
          dayy = day - 7;
          dayy1 = day - 1;
        }
        this.green1 = false;
        this.green2 = true;
        this.green3 = false;
        this.green11 = false;
        this.green22 = true;
        this.green33 = false;
        this.timee = monthh + '/' + dayy + '-' + monthh1 + '/' + dayy1;
        // this.draw();
      },
      sl3clik: function() {
        this.box3a = false;
        this.box33a = false;
        this.box333a = true;
        if (day == 1) {
          if (month == 3) {
            var dayy1 = curMonthDays;
            var monthh1 = month - 1;
            var monthh = month - 2;
            var dayy = curMonthDays + 2;
          } else {
            var dayy1 = curMonthDays;
            var monthh1 = month - 1;
            var monthh = month - 1;
            var dayy = curMonthDays - 29;
          }
        } else {
          dayy1 = day - 1;
          monthh1 = month;
          monthh = month - 1;
          dayy = curMonthDays - (31 - day);
        }
        this.green1 = false;
        this.green2 = false;
        this.green3 = true;
        this.green11 = false;
        this.green22 = false;
        this.green33 = true;
        this.timee = monthh + '/' + dayy + '-' + monthh1 + '/' + dayy1;
        // this.draw();

      },
      draw: function() {
        var tabContainer1 = document.getElementById('main1');
        var tabContainer2 = document.getElementById('main2');
        var tabContainer3 = document.getElementById('main3');
        var tabContainer4 = document.getElementById('main4');
        var tabContainer5 = document.getElementById('main5');
        var tabContainer6 = document.getElementById('main6');
        var tabContainer7 = document.getElementById('main7');
        var tabContainer8 = document.getElementById('main8');
        var tabContainer11 = document.getElementById('main11');
        var tabContainer22 = document.getElementById('main22');
        var tabContainer33 = document.getElementById('main33');
        var tabContainer44 = document.getElementById('main44');
        var tabContainer55 = document.getElementById('main55');
        var tabContainer66 = document.getElementById('main66');
        var tabContainer77 = document.getElementById('main77');
        var tabContainer88 = document.getElementById('main88');
        var tabContainer111 = document.getElementById('main111');
        var tabContainer222 = document.getElementById('main222');
        var tabContainer333 = document.getElementById('main333');
        var tabContainer444 = document.getElementById('main444');
        var tabContainer555 = document.getElementById('main555');
        var tabContainer666 = document.getElementById('main666');
        var tabContainer777 = document.getElementById('main777');
        var tabContainer888 = document.getElementById('main888');
        var myChart1 = echarts.init(tabContainer1);
        var myChart2 = echarts.init(tabContainer2);
        var myChart3 = echarts.init(tabContainer3);
        var myChart4 = echarts.init(tabContainer4);
        var myChart5 = echarts.init(tabContainer5);
        var myChart6 = echarts.init(tabContainer6);
        var myChart7 = echarts.init(tabContainer7);
        var myChart8 = echarts.init(tabContainer8);
        var myChart11 = echarts.init(tabContainer11);
        var myChart22 = echarts.init(tabContainer22);
        var myChart33 = echarts.init(tabContainer33);
        var myChart44 = echarts.init(tabContainer44);
        var myChart55 = echarts.init(tabContainer55);
        var myChart66 = echarts.init(tabContainer66);
        var myChart77 = echarts.init(tabContainer77);
        var myChart88 = echarts.init(tabContainer88);
        var myChart111 = echarts.init(tabContainer111);
        var myChart222 = echarts.init(tabContainer222);
        var myChart333 = echarts.init(tabContainer333);
        var myChart444 = echarts.init(tabContainer444);
        var myChart555 = echarts.init(tabContainer555);
        var myChart666 = echarts.init(tabContainer666);
        var myChart777 = echarts.init(tabContainer777);
        var myChart888 = echarts.init(tabContainer888);
        myChart1.setOption(this.a);
        myChart2.setOption(this.b);
        myChart3.setOption(this.c);
        myChart4.setOption(this.d);
        myChart5.setOption(this.e);
        myChart6.setOption(this.f);
        myChart7.setOption(this.g);
        myChart8.setOption(this.h);
        myChart11.setOption(this.aa);
        myChart22.setOption(this.bb);
        myChart33.setOption(this.cc);
        myChart44.setOption(this.dd);
        myChart55.setOption(this.ee);
        myChart66.setOption(this.ff);
        myChart77.setOption(this.gg);
        myChart88.setOption(this.hh);
        myChart111.setOption(this.aaa);
        myChart222.setOption(this.bbb);
        myChart333.setOption(this.ccc);
        myChart444.setOption(this.ddd);
        myChart555.setOption(this.eee);
        myChart666.setOption(this.fff);
        myChart777.setOption(this.ggg);
        myChart888.setOption(this.hhh);
        myChart1.resize();
        myChart2.resize();
        myChart3.resize();
        myChart4.resize();
        myChart5.resize();
        myChart6.resize();
        myChart7.resize();
        myChart8.resize();
        myChart11.resize();
        myChart22.resize();
        myChart33.resize();
        myChart44.resize();
        myChart55.resize();
        myChart66.resize();
        myChart77.resize();
        myChart88.resize();
        myChart111.resize();
        myChart222.resize();
        myChart333.resize();
        myChart444.resize();
        myChart555.resize();
        myChart666.resize();
        myChart777.resize();
        myChart888.resize();
      },
    },
  })
})


/*图表开始
 *
 */

var realdata = [document.getElementById("Temperature"), document.getElementById("Humidity"), document.getElementById("Illumination"),
  document.getElementById("CarbonDioxide"), document.getElementById("Oxygen"), document.getElementById("Dust"),
  document.getElementById("SoilTemperature"), document.getElementById("SoilMoisture")
];


var tabContainer1 = document.getElementById('main1');
var tabContainer2 = document.getElementById('main2');
var tabContainer3 = document.getElementById('main3');
var tabContainer4 = document.getElementById('main4');
var tabContainer5 = document.getElementById('main5');
var tabContainer6 = document.getElementById('main6');
var tabContainer7 = document.getElementById('main7');
var tabContainer8 = document.getElementById('main8');
var tabContainer11 = document.getElementById('main11');
var tabContainer22 = document.getElementById('main22');
var tabContainer33 = document.getElementById('main33');
var tabContainer44 = document.getElementById('main44');
var tabContainer55 = document.getElementById('main55');
var tabContainer66 = document.getElementById('main66');
var tabContainer77 = document.getElementById('main77');
var tabContainer88 = document.getElementById('main88');
var tabContainer111 = document.getElementById('main111');
var tabContainer222 = document.getElementById('main222');
var tabContainer333 = document.getElementById('main333');
var tabContainer444 = document.getElementById('main444');
var tabContainer555 = document.getElementById('main555');
var tabContainer666 = document.getElementById('main666');
var tabContainer777 = document.getElementById('main777');
var tabContainer888 = document.getElementById('main888');
//用于使chart自适应高度和宽度,通过窗体高宽计算容器高宽
//var resizeContainer = function () {
////ulcontainer.removeClass("hide");
//  tabContainer1.style.width = window.innerWidth*0.2+'px';
//  tabContainer1.style.height = window.innerHeight*0.2+'px';
//  tabContainer2.style.width = window.innerWidth*0.2+'px';
//  tabContainer2.style.height = window.innerHeight*0.2+'px';
//  tabContainer3.style.width = window.innerWidth*0.2+'px';
//  tabContainer3.style.height = window.innerHeight*0.2+'px';
//  tabContainer4.style.width = window.innerWidth*0.2+'px';
//  tabContainer4.style.height = window.innerHeight*0.2+'px';
//  tabContainer5.style.width = window.innerWidth*0.2+'px';
//  tabContainer5.style.height = window.innerHeight*0.2+'px';
//  tabContainer6.style.width = window.innerWidth*0.2+'px';
//  tabContainer6.style.height = window.innerHeight*0.2+'px';
//  tabContainer7.style.width = window.innerWidth*0.2+'px';
//  tabContainer7.style.height = window.innerHeight*0.2+'px';
//  tabContainer8.style.width = window.innerWidth*0.2+'px';
//  tabContainer8.style.height = window.innerHeight*0.2+'px';
//  tabContainer11.style.width = window.innerWidth*0.2+'px';
//  tabContainer11.style.height = window.innerHeight*0.2+'px';
//  tabContainer22.style.width = window.innerWidth*0.2+'px';
//  tabContainer22.style.height = window.innerHeight*0.2+'px';
//  tabContainer33.style.width = window.innerWidth*0.2+'px';
//  tabContainer33.style.height = window.innerHeight*0.2+'px';
//  tabContainer44.style.width = window.innerWidth*0.2+'px';
//  tabContainer44.style.height = window.innerHeight*0.2+'px';
//  tabContainer55.style.width = window.innerWidth*0.2+'px';
//  tabContainer55.style.height = window.innerHeight*0.2+'px';
//  tabContainer66.style.width = window.innerWidth*0.2+'px';
//  tabContainer66.style.height = window.innerHeight*0.2+'px';
//  tabContainer77.style.width = window.innerWidth*0.2+'px';
//  tabContainer77.style.height = window.innerHeight*0.2+'px';
//  tabContainer88.style.width = window.innerWidth*0.2+'px';
//  tabContainer88.style.height = window.innerHeight*0.2+'px';
//  tabContainer111.style.width = window.innerWidth*0.2+'px';
//  tabContainer111.style.height = window.innerHeight*0.2+'px';
//  tabContainer222.style.width = window.innerWidth*0.2+'px';
//  tabContainer222.style.height = window.innerHeight*0.2+'px';
//  tabContainer333.style.width = window.innerWidth*0.2+'px';
//  tabContainer333.style.height = window.innerHeight*0.2+'px';
//  tabContainer444.style.width = window.innerWidth*0.2+'px';
//  tabContainer444.style.height = window.innerHeight*0.2+'px';
//  tabContainer555.style.width = window.innerWidth*0.2+'px';
//  tabContainer555.style.height = window.innerHeight*0.2+'px';
//  tabContainer666.style.width = window.innerWidth*0.2+'px';
//  tabContainer666.style.height = window.innerHeight*0.2+'px';
//  tabContainer777.style.width = window.innerWidth*0.2+'px';
//  tabContainer777.style.height = window.innerHeight*0.2+'px';
//  tabContainer888.style.width = window.innerWidth*0.2+'px';
//  tabContainer888.style.height = window.innerHeight*0.2+'px';
//	}
//};
//设置容器高宽
//resizeContainer();

//日数据
var a={
    tooltip: {
        trigger: 'axis',
         formatter: function (params) {
            var date = new Date(params[0].data.name);
            return  date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate()+ '  '
            + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds() + '  ' + params[0].data.value[1];
        },
        axisPointer: {
            animation: false
        }
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
        axisLabel :{
            interval: 5,
        },
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
        trigger: 'axis',
         formatter: function (params) {
            var date = new Date(params[0].data.name);
            return  date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate()+ '  '
            + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds() + '  ' + params[0].data.value[1];
        },
        axisPointer: {
            animation: false
        }
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
        axisLabel :{
            interval: 5,
        },
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
        trigger: 'axis',
         formatter: function (params) {
            var date = new Date(params[0].data.name);
            return  date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate()+ '  '
            + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds() + '  ' + params[0].data.value[1];
        },
        axisPointer: {
            animation: false
        }
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
        axisLabel :{
            interval: 5,
        },
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
        trigger: 'axis',
         formatter: function (params) {
            var date = new Date(params[0].data.name);
            return  date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate()+ '  '
            + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds() + '  ' + params[0].data.value[1];
        },
        axisPointer: {
            animation: false
        }
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
        axisLabel :{
            interval: 5,
        },
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
                                                                    name:'粉尘',
        stack: '总量',
        // data: [820, 932, 901, 934, 1290, 1330, 1320],
         itemStyle:{
                        normal:{
                            color:'#36E39C'
                                    }
                                },
        type: 'line',
        // areaStyle: {},
        data:[]
    }]
};

var e= {
    tooltip: {
        trigger: 'axis',
         formatter: function (params) {
            var date = new Date(params[0].data.name);
            return  date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate()+ '  '
            + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds() + '  ' + params[0].data.value[1];
        },
        axisPointer: {
            animation: false
        }
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
        axisLabel :{
            interval: 5,
        },
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
                                                        name:'二氧化碳',
        stack: '总量',
	    data:[],
        // data: [820, 932, 901, 934, 1290, 1330, 1320],
         itemStyle:{
                        normal:{
                            color:'#3CA5CF'
                                    }
                                },
        type: 'line',
        // areaStyle: {}
    }]
};

var f= {
    tooltip: {
        trigger: 'axis',
         formatter: function (params) {
            var date = new Date(params[0].data.name);
            return  date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate()+ '  '
            + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds() + '  ' + params[0].data.value[1];
        },
        axisPointer: {
            animation: false
        }
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
        axisLabel :{
            interval: 5,
        },
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
                                                name:'氧气',
        stack: '总量',
	    data:[],
        // data: [820, 932, 901, 934, 1290, 1330, 1320],
         itemStyle:{
                        normal:{
                            color:'#ADEC25 '
                                    }
                                },
        type: 'line',
        // areaStyle: {}
    }]
};

var g={
    tooltip: {
        trigger: 'axis',
         formatter: function (params) {
            var date = new Date(params[0].data.name);
            return  date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate()+ '  '
            + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds() + '  ' + params[0].data.value[1];
        },
        axisPointer: {
            animation: false
        }
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
        axisLabel :{
            interval: 5,
        },
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
            name:'土壤温度',
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

var h = {
    tooltip: {
        trigger: 'axis',
         formatter: function (params) {
            var date = new Date(params[0].data.name);
            return  date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate()+ '  '
            + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds() + '  ' + params[0].data.value[1];
        },
        axisPointer: {
            animation: false
        }
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
        axisLabel :{
            interval: 5,
        },
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
            name:'土壤湿度',
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

//周数据
var aa={
    tooltip: {
        trigger: 'axis',
         formatter: function (params) {
            var date = new Date(params[0].data.name);
            return  date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate()+ '  '
            + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds() + '  ' + params[0].data.value[1];
        },
        axisPointer: {
            animation: false
        }
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
        axisLabel :{
            interval: 2,
        },
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
        trigger: 'axis',
         formatter: function (params) {
            var date = new Date(params[0].data.name);
            return  date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate()+ '  '
            + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds() + '  ' + params[0].data.value[1];
        },
        axisPointer: {
            animation: false
        }
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
        axisLabel :{
            interval: 2,
        },
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
        trigger: 'axis',
         formatter: function (params) {
            var date = new Date(params[0].data.name);
            return  date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate()+ '  '
            + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds() + '  ' + params[0].data.value[1];
        },
        axisPointer: {
            animation: false
        }
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
        axisLabel :{
            interval: 2,
        },
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
        trigger: 'axis',
         formatter: function (params) {
            var date = new Date(params[0].data.name);
            return  date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate()+ '  '
            + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds() + '  ' + params[0].data.value[1];
        },
        axisPointer: {
            animation: false
        }
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
        axisLabel :{
            interval: 2,
        },
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
                                    name:'粉尘',
        stack: '总量',
	    data:[],
        // data: [820, 932, 901, 934, 1290, 1330, 1320],
         itemStyle:{
                        normal:{
                            color:'#36E39C'
                                    }
                                },
        type: 'line',
        // areaStyle: {}
    }]
};

var ee= {
    tooltip: {
        trigger: 'axis',
         formatter: function (params) {
            var date = new Date(params[0].data.name);
            return  date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate()+ '  '
            + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds() + '  ' + params[0].data.value[1];
        },
        axisPointer: {
            animation: false
        }
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
        axisLabel :{
            interval: 2,
        },
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
                        name:'二氧化碳',
        stack: '总量',
	    data:[],
        // data: [820, 932, 901, 934, 1290, 1330, 1320],
         itemStyle:{
                        normal:{
                            color:'#3CA5CF'
                                    }
                                },
        type: 'line',
        // areaStyle: {}
    }]
};

var ff= {
    tooltip: {
        trigger: 'axis',
         formatter: function (params) {
            var date = new Date(params[0].data.name);
            return  date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate()+ '  '
            + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds() + '  ' + params[0].data.value[1];
        },
        axisPointer: {
            animation: false
        }
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
        axisLabel :{
            interval: 2,
        },
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
                        name:'氧气',
        stack: '总量',
	    data:[],
        // data: [820, 932, 901, 934, 1290, 1330, 1320],
         itemStyle:{
                        normal:{
                            color:'#ADEC25 '
                                    }
                                },
        type: 'line',
        // areaStyle: {}
    }]
};

var gg={
    tooltip: {
        trigger: 'axis',
         formatter: function (params) {
            var date = new Date(params[0].data.name);
            return  date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate()+ '  '
            + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds() + '  ' + params[0].data.value[1];
        },
        axisPointer: {
            animation: false
        }
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
        axisLabel :{
            interval: 2,
        },
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
            name:'土壤温度',
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

var hh = {
    tooltip: {
        trigger: 'axis',
         formatter: function (params) {
            var date = new Date(params[0].data.name);
            return  date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate()+ '  '
            + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds() + '  ' + params[0].data.value[1];
        },
        axisPointer: {
            animation: false
        }
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
        axisLabel :{
            interval: 2,
        },
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
            name:'土壤湿度',
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

//月数据
var aaa={
    tooltip: {
        trigger: 'axis',
         formatter: function (params) {
            var date = new Date(params[0].data.name);
            return  date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate()+ '  '
            + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds() + '  ' + params[0].data.value[1];
        },
        axisPointer: {
            animation: false
        }
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
        axisLabel :{
            interval: 4,
        },
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
        trigger: 'axis',
         formatter: function (params) {
            var date = new Date(params[0].data.name);
            return  date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate()+ '  '
            + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds() + '  ' + params[0].data.value[1];
        },
        axisPointer: {
            animation: false
        }
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
        axisLabel :{
            interval: 4,
        },
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
        trigger: 'axis',
         formatter: function (params) {
            var date = new Date(params[0].data.name);
            return  date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate()+ '  '
            + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds() + '  ' + params[0].data.value[1];
        },
        axisPointer: {
            animation: false
        }
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
        axisLabel :{
            interval: 4,
        },
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
        trigger: 'axis',
         formatter: function (params) {
            var date = new Date(params[0].data.name);
            return  date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate()+ '  '
            + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds() + '  ' + params[0].data.value[1];
        },
        axisPointer: {
            animation: false
        }
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
        axisLabel :{
            interval: 4,
        },
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
            name:'粉尘',
        stack: '总量',
	    data:[],
        // data: [820, 932, 901, 934, 1290, 1330, 1320],
         itemStyle:{
                        normal:{
                            color:'#36E39C'
                                    }
                                },
        type: 'line',
        // areaStyle: {}
    }]
};

var eee= {
    tooltip: {
        trigger: 'axis',
         formatter: function (params) {
            var date = new Date(params[0].data.name);
            return  date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate()+ '  '
            + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds() + '  ' + params[0].data.value[1];
        },
        axisPointer: {
            animation: false
        }
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
        axisLabel :{
            interval: 4,
        },
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
                        name:'二氧化碳',
        stack: '总量',
	    data:[],
        // data: [820, 932, 901, 934, 1290, 1330, 1320],
         itemStyle:{
                        normal:{
                            color:'#3CA5CF'
                                    }
                                },
        type: 'line',
        // areaStyle: {}
    }]
};

var fff= {
    tooltip: {
        trigger: 'axis',
         formatter: function (params) {
            var date = new Date(params[0].data.name);
            return  date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate()+ '  '
            + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds() + '  ' + params[0].data.value[1];
        },
        axisPointer: {
            animation: false
        }
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
        axisLabel :{
            interval: 4,
        },
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
            name:'氧气',
        stack: '总量',
        data:[],
        // data: [820, 932, 901, 934, 1290, 1330, 1320],
         itemStyle:{
                        normal:{
                            color:'#ADEC25 '
                                    }
                                },
        type: 'line',
        // areaStyle: {}
    }]
};

var ggg={
    tooltip: {
        trigger: 'axis',
         formatter: function (params) {
            var date = new Date(params[0].data.name);
            return  date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate()+ '  '
            + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds() + '  ' + params[0].data.value[1];
        },
        axisPointer: {
            animation: false
        }
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
        axisLabel :{
            interval: 4,
        },
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
            name:'土壤温度',
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

var hhh = {
    tooltip: {
        trigger: 'axis',
         formatter: function (params) {
            var date = new Date(params[0].data.name);
            return  date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate()+ '  '
            + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds() + '  ' + params[0].data.value[1];
        },
        axisPointer: {
            animation: false
        }
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
        axisLabel :{
            interval: 4,
        },
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
            name:'土壤湿度',
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





//window.addEventListener('resize',function(){
//  // myChart1.resize();
//  // myChart2.resize();
//  // myChart3.resize();
//  // myChart4.resize();
//  // myChart5.resize();
//  // myChart6.resize();
//  // myChart7.resize();
//  // myChart8.resize();
//  // myChart11.resize();
//  // myChart22.resize();
//  // myChart33.resize();
//  // myChart44.resize();
//  // myChart55.resize();
//  // myChart66.resize();
//  // myChart77.resize();
//  // myChart88.resize();
//  // myChart111.resize();
//  // myChart222.resize();
//  // myChart333.resize();
//  // myChart444.resize();
//  // myChart555.resize();
//  // myChart666.resize();
//  // myChart777.resize();
//  // myChart888.resize();
//});

//初始化数据
setTimeout(function () {
 getdata();
 initday();
 initweek();
 initmonth();
}, 2000);

//定时从后台读取数据
setInterval(function(){
	getdata();
	},8000);

//ajax技术实现前后台交互
function getdata(){
	$.ajax({
		type:"GET",
		url:"/sendjson",  //这里填入请求地址
		dataType:"json",
		success:function(data){
         vue.Temperature = data.Data[0];
         vue.Humidity = data.Data[1];
         vue.Illumination = data.Data[2];
         vue.CarbonDioxide = data.Data[3];
         vue.Oxygen = data.Data[4];
         vue.Dust = data.Data[5];
         vue.SoilTemperature = data.Data[6];
         vue.SoilMoisture = data.Data[7];
         //空气成分
         // for(i=0;i<8;i++){
         //     realdata[i].innerHTML=data.Data.shift();
         // }
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
		    // vue.a.xAxis.data = data
         vue.a.series[0].data = data.TemperatureDay;
         vue.b.series[0].data = data.HumidityDay;
         vue.c.series[0].data = data.IlluminationDay;
         vue.d.series[0].data = data.DustDay;//灰尘
         vue.e.series[0].data = data.CarbonDioxideDay;//二氧化碳
         vue.f.series[0].data = data.OxygenDay;//氧气
         vue.g.series[0].data = data.SoilTempDay;//土壤温度
         vue.h.series[0].data = data.SoilHumDay;//土壤湿度
         // //空气成分
         // for(i=0;i<6;i++){
         //     realdata[i].innerHTML=data.Data.shift();
         // }


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

         vue.aa.series[0].data = data.TemperatureWeek;
         vue.bb.series[0].data = data.HumidityWeek;
         vue.cc.series[0].data = data.IlluminationWeek;
         vue.dd.series[0].data = data.DustWeek;//灰尘
         vue.ee.series[0].data = data.CarbonDioxideWeek;//二氧化碳
         vue.ff.series[0].data = data.OxygenWeek;//氧气
         vue.gg.series[0].data = data.SoilTempWeek;//土壤温度
         vue.hh.series[0].data = data.SoilHumWeek;//土壤湿度
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

         vue.aaa.series[0].data = data.TemperatureMonth;
         vue.bbb.series[0].data = data.HumidityMonth;
         vue.ccc.series[0].data = data.IlluminationMonth;
         vue.ddd.series[0].data = data.DustMonth;//灰尘
         vue.eee.series[0].data = data.CarbonDioxideMonth;//二氧化碳
         vue.fff.series[0].data = data.OxygenMonth;//氧气
         vue.ggg.series[0].data = data.SoilTempMonth;//土壤温度
         vue.hhh.series[0].data = data.SoilHumMonth;//土壤湿度
         },
         error:function(){
         }

	})
}
