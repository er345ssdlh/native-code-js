var rightbtn = document.querySelector(".btn-right");

var leftbtn = document.querySelector(".btn-left");

var controls = document.querySelector(".controls");

var content = document.querySelector(".content");
// content.style.width = "3600px";

var lis = document.querySelectorAll(".controls li");

var bannerCenter = document.querySelector("#bannerCenter");

var bannerWidth = bannerCenter.offsetWidth;
// console.log(bannerWidth);
var index = 0;

rightbtn.onclick = function () {
    lis[index].className = "";
    index++;
    if (index == 4) {
        index = 0;
    }
    lis[index].className = "active";
    var v = -index * bannerWidth;
    move(content, v, 100);
}

leftbtn.onclick = function () {
    lis[index].className = "";
    index--;
    if (index < 0) {
        index = 3;
    }
    lis[index].className = "active";

    var v = -index * bannerWidth;
    move(content, v, 100);
}



for (var i = 0; i < lis.length; i++) {
    lis[i].num = i;
}

controls.onclick = function (e) {
    if (e.target.nodeName == "LI") {
        var the = e.target;
        lis[index].className = "";
        index = the.num;
        lis[index].className = "active";
        var v = -index * bannerWidth;
        move(content, v, 100);
    }
}