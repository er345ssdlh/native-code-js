var leftbtn = document.querySelector(".btn-left");
var rightbtn = document.querySelector(".btn-right");
var content = document.querySelector(".content");
content.style.width = "3600px";
var conterols = document.querySelector(".controls");
var lis = document.querySelectorAll(".controls li");

var banner = document.querySelector(".banenr-center");
var banwid = banner.offsetWidth;
// console.log(banwid);

var index = 0;
var falg;
falg = setInterval(function () {
    rightbtn.click();
}, 2000)

banner.onmouseenter = function () {
    clearInterval(falg);
}

banner.onmouseleave = function () {
    falg = setInterval(function () {
        rightbtn.click();
    }, 2000)
    console.log("出来了");
}


rightbtn.onclick = function () {
    if (index == 0) {
        content.style.left = 0 + "px";
    }

    lis[index].className = "";
    index++;
    var juli = -index * banwid;
    move(content, juli, 130);
    // console.log(juli);

    if (index == 4) {
        index = 0;

    }
    lis[index].className = "active";
}


leftbtn.onclick = function () {
    lis[index].className = "";
    index--;
    if (index < 0) {
        index = 3;
        var v = -4 * banwid;
        content.style.left = v + "px";
    }
    lis[index].className = "active";
    var juli = -index * banwid;
    move(content, juli, 130);
    // console.log(juli);
}

// 点击某一个时先把其他的样式都改为无，然后单独把自己的样式改为active
//可以优化
// conterols.onclick = function (e) {
//     for (var i = 0; i < lis.length; i++) {
//         lis[i].num = i; //遍历每一个li给他添加一个属性，值·为序号
//         lis[i].className=""
//     }
//     var zhege = e.target;
//     if (zhege.nodeName = "LI") {
//         // alert("找到LI啦！");

//         zhege.className = "active";
//         var juli = -zhege.num * banwid;
//         move(content, juli, 130);
//     }
// }

//优化 点击某一个时先上一个的样式改为无，然后把自己的样式改为active
conterols.onclick = function (e) {
    for (var i = 0; i < lis.length; i++) {
        lis[i].num = i; //遍历每一个li给他添加一个属性，值·为序号
    }
    var zhege = e.target;
    if (zhege.nodeName == "LI") {
        // alert("找到LI啦！");
        lis[index].className = "";
        index = zhege.num;
        lis[index].className = "active";
        var juli = -index * banwid;
        move(content, juli, 130);
    }
}