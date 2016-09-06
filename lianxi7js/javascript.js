<!--导航条部分-->
$(".bg").css("backgroundColor","black");
$(".zi").css("color","white");
$(".left").css("float","left");
$(".right").css("float","right");
$(".jl").css("padding","8px 20px 0px 20px");
$(".btn").css("outline","none");

<!--左边部分-->
$(".top").css("margin-top","30px");
$(".wei").css("padding","15px 0px 0px 0px");
$(".wei1").css("margin","5px 8px 0px 8px");
$(".wei2").css("padding","25px 25px 25px 25px");
$(".wei3").css("margin","15px 0px 0px 0px");
$(".tb").css("color","black");
$(".wei4").css("margin","35px 0px 0px 0px");
$(".bk").css("border","0px");
$(".bk").css("border-radius","0px");
$(".bianju").css("margin","0px");
//$(".bk").css("margin-left","20px");
//$(".p1").css("padding","0px -15px 0px 0px");
$(".zbg").css("backgroundColor","white");
$(".zbg").css("position","fixed");
$("")
<!--右边部分-->

$(".bg1").css("backgroundColor","#F1F1F1");
$(".swidth").css("width","23%");
$(".k1").css("backgroundColor","#F44336");
$(".k2").css("backgroundColor","#2196F3");
$(".k3").css("backgroundColor","#009688");
$(".k4").css("backgroundColor","#FF9800");

$(".fd").css("margin","80px 0px 30px 0px");

<!--图标边框部分-->
$(".user").css("border","1px solid #2196F3");
$(".user").css("backgroundColor","#2196F3");
$(".fp").css("padding","5px");

$(".bell").css("border","1px solid #F44336");
$(".bell").css("backgroundColor","#F44336");

$(".users").css("border","1px solid #FF9800");
$(".users").css("backgroundColor","#FF9800");


$(".fa-comment").css("border","1px solid #F44336");
$(".fa-comment").css("backgroundColor","#F44336");

$(".fa-bookmark").css("border","1px solid #87CEEB");
$(".fa-bookmark").css("backgroundColor","#87CEEB");

$(".fa-laptop").css("border","1px solid #F44336");
$(".fa-laptop").css("backgroundColor","#F44336");

$(".alt").css("border","1px solid #4CAF50");
$(".alt").css("backgroundColor","#4CAF50");



//进度条
$(".jdbg1").css("backgroundColor","#9E9E9E");
$(".jdbg2").css("backgroundColor","#4CAF50");
$(".jdbg3").css("backgroundColor","#FF9800");
$(".jdbg4").css("backgroundColor","#F44336");
<!--按钮-->
$(".an").css("padding","10px");
$(".ag").css("margin-top","5px");
$(".an").mouseover(function(){
$(this).css('box-shadow',"0px 7px 15px #CCC");
});
$(".an").mouseout(function(){
$(this).css('box-shadow',"0px 0px 0px grey");
});
<!--叉号部分-->
$(".ch").css("cursor","pointer");
$(".mar").css("margin-top","5px");
$(".mar1").css("margin-top","10px");
$(".zt").css("font-size","20px");

$(".c1").click(function(){
  $(".m1").remove();
});
$(".c2").click(function(){
  $(".m2").remove();
});
$(".c3").click(function(){
  $(".m3").remove();
});
$("a").css("text-decoration","none");

<!--评论部分-->
$(".pl").css("margin","30px 0px 0px 20px");

<!--灰色背景部分-->
$(".hbg").css("backgroundColor","#616161");
$(".hmar").css("margin","30px 0px 30px 0px");
$(".hxh").css("border-bottom","5px solid #4CAF50");
$(".hxh1").css("border-bottom","5px solid #FF9800");
$(".hxh2").css("border-bottom","5px solid #F44336");



<!--页脚部分-->
$(".yj").css("padding","20px 10px 20px 10px");
$(".juli").css("margin","10px 10px 10px 10px");


<!--图标变色-->
$(".bianse1").mouseover(function(){
  $(this).css("color","#F44336");
})
$(".bianse1").mouseout(function(){
$(this).css("color","black");
});

$(".bianse2").mouseover(function(){
  $(this).css("color","#4CAF50");
})
$(".bianse2").mouseout(function(){
$(this).css("color","black");
});

$(".bianse3").mouseover(function(){
  $(this).css("color","#2196F3");
})
$(".bianse3").mouseout(function(){
$(this).css("color","black");
});


$(".hand,.heng").mouseover(function(){
  $(".heng,.hand").css("color","grey");
})
$(".hand,.heng").mouseout(function(){
$(".heng,.hand").css("color","white");
});


<!--导航条的隐藏-->
//$(".hand").click(function () {
  //  $(".hand1").fadeIn(900);
  //    $(".hand2").css("z-index","-2");
  //$(".visible-lg").removeClass("visible-lg");<!--移除掉大屏幕显示，小屏幕隐藏 这个类-->

//});

var a=0;
 $(".hand").click(function(){
        a++;
        if(a%2==0) {
          $(".hand1").fadeOut(900);
          $(".hand2").css("z-index","-1");
          $(".hand1").addClass("visible-lg-block");
        }else {
          $(".hand1").fadeIn(900);
          $(".hand2").css("z-index","-1");
        $(".visible-lg-block").removeClass("visible-lg-block");

        }
    });
