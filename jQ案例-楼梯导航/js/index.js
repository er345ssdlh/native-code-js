var louceng = $(".louceng").offset().top;

$(window).scroll(function () {
  //显示处理
  if ($(this).scrollTop() >= louceng) {
    $(".subnav").css("display", "block");
  } else {
    $(".subnav").css("display", "none");
  }
  //红色逻辑处理
  // if ($(window).scrollTop() >= $(".jd").eq(3).offset().top) {
  //   $(".subnav li").eq(3).addClass("current").siblings().removeClass();
  // } else
  // if ($(window).scrollTop() >= $(".jd").eq(2).offset().top) {
  //   $(".subnav li").eq(2).addClass("current").siblings().removeClass();
  // } else
  // if ($(window).scrollTop() >= $(".jd").eq(1).offset().top) {
  //   $(".subnav li").eq(1).addClass("current").siblings().removeClass();
  // } else
  // if ($(window).scrollTop() >= $(".jd").eq(0).offset().top) {
  //   $(".subnav li").eq(0).addClass("current").siblings().removeClass();
  // }
  var lis = document.querySelectorAll(".subnav li");
  for (var i = lis.length - 1; i >= 0; i--) {
    if ($(window).scrollTop() >= $(".jd").eq(i).offset().top) {
      $(".subnav li").eq(i).addClass("current").siblings().removeClass();
      break;
    }
  }
})


// 点击侧边栏跳到对应位置
$(".subnav li").click(function () {
  var sy = $(this).index();
  var dydt = $(".louceng .jd").eq(sy).offset().top;
  console.log(dydt);
  $("html,body").animate({
    scrollTop: dydt
  }, 100)
})


//点击返回回到页面顶部

$(".back").click(function () {
  $("html,body").animate({
    scrollTop: 0
  }, 1000)
})