var num = 0;
//封装函数
function auto() {
    $(".controls").children().eq(num).addClass("active").siblings().removeClass("active");
    num++;
    if (num > 7) {
        num = 0;
    }
    $(".controls").children().eq(num).addClass("active").siblings().removeClass("active");
    $("li").eq(num).fadeIn().siblings().fadeOut();
    console.log(num);
}
//设置定时器
var falg = setInterval(function () {
    auto();
}, 1000)

//鼠标进入停止定时器
$(".slider").mouseenter(function () {
    clearInterval(falg);
});

//鼠标离开重新启动定时器
$(".slider").mouseleave(function () {
    falg = setInterval(function () {
        auto();
    }, 1000)
});

// 点击右键执行函数
$(".arrow-right").click(function () {
    auto();
})

// 点击左键执行函数
$(".arrow-left").click(function () {
    $(".controls").children().eq(num).addClass("active").siblings().removeClass("active");
    num--;
    if (num < 0) {
        num = 7;
    }
    $(".controls").children().eq(num).addClass("active").siblings().removeClass("active");
    $("li").eq(num).fadeIn().siblings().fadeOut();
    // console.log(num);
})


//点击小点之形函数
$(".controls").children("a").click(function () {
    $(this).addClass("active").siblings().removeClass();
    $(".slider").find("li").eq($(this).index()).fadeIn().siblings().fadeOut();
    console.log($(this).index());
    num = $(this).index();
})