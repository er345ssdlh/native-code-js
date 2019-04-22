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
    if(index>3){
        content.style.left =0 + "px";
        index = 0;
    }
    var v = -index * bannerWidth;
    move(content, v, 100);
    lis[index].className = "active";
    //到最后一个图片的时候让第一个lis有样式并且
}

leftbtn.onclick = function () {

    lis[index].className = "";
    index--;
    if (index < 0) {
        content.style.left = 3 * -bannerWidth + "px";
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