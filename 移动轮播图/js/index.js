// 获取轮播图窗口
var banner = document.querySelector(".banner");
var banWid = banner.offsetWidth;
var ul = document.querySelector("ul");
var items = document.querySelectorAll(".item");
// 触摸窗口记录位置sx,因为sx在其他局部作用域里需要使用所以声明在全局变量
var sx;
var index = 1;


var falg=setInterval(function () {
    items[index - 1].className = "item";
    index++;
    if (index == 5) {
        items[0].className = "item active";
    } else {
        items[index - 1].className = "item active";
    }
    var s = -index * banWid;
    ul.style.left = s + "px";
    ul.style.transition = "0.3s";
}, 2000)


banner.addEventListener("touchstart", function (e) {
    clearInterval(falg);
    sx = e.targetTouches[0].clientX;
});


banner.addEventListener("touchend", function (e) {
    var ex = e.changedTouches[0].clientX;
    if (Math.abs(ex - sx) > 100) {
        if (ex < sx) {
            items[index - 1].className = "item";
            index++;
            if (index == 5) {
                items[0].className = "item active";
            } else {
                items[index - 1].className = "item active";
            }
        } else if (ex > sx) {
            items[index - 1].className = "item";
            index--;
            if (index == 0) {
                items[3].className = "item active";
            } else {
                items[index - 1].className = "item active";
            }
        }
    }
    var s = -index * banWid;
    ul.style.left = s + "px";
    ul.style.transition = "0.3s";

    falg=setInterval(function () {
        items[index - 1].className = "item";
        index++;
        if (index == 5) {
            items[0].className = "item active";
        } else {
            items[index - 1].className = "item active";
        }
        var s = -index * banWid;
        ul.style.left = s + "px";
        ul.style.transition = "0.3s";
    }, 2000)
});

banner.addEventListener("touchmove", function (e) {
    var mx = e.targetTouches[0].clientX;
    var s = mx - sx + -index * banWid;
    ul.style.left = s + "px";
});

ul.addEventListener("transitionend", function () {
    if (index >= 5) {
        index = 1;
    }
    if (index <= 0) {
        index = 4;
    }
    var s = -index * banWid;
    ul.style.left = s + "px";
    ul.style.transition = "none";

})

