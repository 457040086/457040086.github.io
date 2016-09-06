$(function () {
  setInterval("document.getElementById('time').innerHTML = new Date().toLocaleTimeString();", 1000);

  $(".top").css("margin-top","70px");
  $(".wei").css("padding","15px");
  $(".hang").css("line-height","1.5");
$(".ys").css("color","#7D97A5");
$(".kuan").css("width","100%");
$(".btn").css("border-radius","0px");
$(".btn").css("outline","none");
$(".btn").css("backgroundColor","#7D97A5");
$(".y1").css("margin","0px 20px 0px 0px");
$(".left").css("margin-left","-180px");

$(".top1").css("margin-top","20px");
$(".top2").css("margin-top","-20px");
<!--标签部分-->
$(".zy").css("padding","3px")
$(".k1").css("backgroundColor","#303e45");
$(".k2").css("backgroundColor","#3a4b53");
$(".k3").css("backgroundColor","#435761");
$(".k4").css("backgroundColor","#4d636f");
$(".k5").css("backgroundColor","#57707d");
$(".k6").css("backgroundColor","#607d8b");
$(".k7").css("backgroundColor","#7d97a5");
$(".k8").css("backgroundColor","#9eb1bb");
$(".k9").css("backgroundColor","#becbd2");
$(".k10").css("backgroundColor","#dfe5e8");
$(".k11").css("backgroundColor","#f5f7f8");
$(".jian").css("line-height","2");
<!--叉号部分-->
$("#left4").css("backgroundColor","#DFE5E8");
$("#left4").css("border-color","gray");
$(".b1").css("color","black");
<!--搜索部分-->
$(".wei1").css("padding","10px 0px 10px 3px");
$(".jiao").css("border-radius","0px");
$(".y2").css("margin","0px 8px 0px 0px");
$(".ys1").css("backgroundColor","#607D8B");
$(".wei2").css("padding","6px 15px 0px 20px");
<!--头像部分-->
$(".f1").css("float","left");
$(".f2").css("float","right");
$(".zuo").css("margin-left","90px");
<!--时间部分-->
$(".ys3").css("backgroundColor","#DFE5E8");
<!--加朋友部分-->
$(".j1").css("backgroundColor","#93CF96");
$(".j2").css("backgroundColor","#F88E86");
  $(".bg").css("backgroundColor","white");
  $("li").css("border","0px");
<!--爬虫部分-->
$(".pc").css("padding","32px");
$(".big").css("font-size","36px");
<!--页脚部分-->
$(".yj1").css("backgroundColor","#435761");
$(".yj2").css("backgroundColor","#303F45");
$(".yj1,.yj2").css("padding","20px 10px 20px 10px");
<!--导航条部分-->
$(".bg2").css("backgroundColor","#4D636F");
$(".logo").css("backgroundColor","#3A4B53");
$(".width").css("width","150px");
$(".width1").css("width","65px");
$(".width2").css("width","85px");
$(".hz").css("backgroundColor","#4CAF50");
$(".width3").css("width","100px");
$(".b5").css("padding","10px 0px 13px 20px");



  $(".zi").css("color","white");
  $(".a").css('box-shadow',"0px 1px 2px gray");

});
$(".yin1").hide();
xian1_bool=false;
 $(".xian1").click(function(){
        if(xian1_bool) {
            xian1_bool=false;
            $(".yin1").hide();
            $(".xian1").css("backgroundColor","#7D97A5");
        }else {
            xian1_bool=true;
            $(".yin1").show();
            $(".xian1").css("backgroundColor","#57707D");
        }
    });

$(".yin2").hide();
  xian2_bool=false;
 $(".xian2").click(function(){
  if(xian2_bool) {
    xian2_bool=false;
  $(".yin2").hide();
    $(".xian2").css("backgroundColor","#7D97A5");
      }else {
        xian2_bool=true;
    $(".yin2").show();
    $(".xian2").css("backgroundColor","#57707D");
  }
});
  $(".yin3").hide();
    xian3_bool=false;
   $(".xian3").click(function(){
    if(xian3_bool) {
      xian3_bool=false;
  $(".yin3").hide();
  $(".xian3").css("backgroundColor","#7D97A5");
        }else {
        xian3_bool=true;
  $(".yin3").show();
  $(".xian3").css("backgroundColor","#57707D");
}
});

$(".shan").mouseover(function(){
$(this).css('box-shadow',"0px 7px 15px #CCC");
});
$(".shan").mouseout(function(){
$(this).css('box-shadow',"0px 0px 0px gray");
});
<!--叉号按钮-->
$("#left4").click(function(){
  $("#left4").remove();
});

<!--导航条部分-->
$(".bs1").mouseover(function(){
  $(this).css("backgroundColor","white");
  $(".bs1").css("color","black");
});
$(".bs1").mouseout(function(){
  $(this).css("backgroundColor","#4D636F");
  $(".bs1").css("color","white");
});

$(".bs2").mouseover(function(){
  $(this).css("backgroundColor","white");
  $(".bs2").css("color","black");
});
$(".bs2").mouseout(function(){
  $(this).css("backgroundColor","#4D636F");
  $(".bs2").css("color","white");
});

$(".bs3").mouseover(function(){
  $(this).css("backgroundColor","white");
  $(".bs3").css("color","black");
});
$(".bs3").mouseout(function(){
  $(this).css("backgroundColor","#4D636F");
  $(".bs3").css("color","white");
});

$(".b4").mouseover(function(){
  $(this).css("backgroundColor","white");
  $(".bs4").css("color","black");
  $(".menu").show();
});
$(".b4").mouseout(function(){
  $(this).css("backgroundColor","#4D636F");
  $(".bs4").css("color","white");
  $(".menu").hide();
});

$(".b5").mouseover(function(){
  $(this).css("backgroundColor","white");

});
$(".b5").mouseout(function(){
  $(this).css("backgroundColor","#4D636F");

});
<!--
//$(".dx").hide();
  //dy_bool=false;
 //$(".dy").click(function(){
//  if(dy_bool) {
  //  dy_bool=false;
//$(".dx").hide();
  //    }else {
    //  dy_bool=true;

//$(".dx").show();
//}
//});
-->
