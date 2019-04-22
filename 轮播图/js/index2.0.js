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
    index++;
    var v = -index * bannerWidth;
    move(content, v, 100); 
}

leftbtn.onclick = function () {
    index--;
    var v = -index * bannerWidth;
    move(content, v, 100); 
}



for(var i=0;i<lis.length;i++){
    lis[i].num=i;
}

controls.onclick = function (e) {
    if(e.target.nodeName=="LI"){
        var the=e.target;
        index=the.num;
        var v = -index * bannerWidth;
        move(content, v, 100); 
    }
}