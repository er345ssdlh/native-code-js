// 左按钮
var leftbtn = document.querySelector(".btn-left");
//右按钮
var rightbtn = document.querySelector(".btn-right");
//轮播内容
var content = document.querySelector(".content");
content.style.width = "3600px";
//轮播窗口
var wds = document.querySelector(".banenr-center");
//小点父亲
var lis = document.querySelector(".controls");
//小点本点
var li = document.querySelectorAll(".controls li");
//动态创建
var item = document.createElement("div");
item.className = "item";
content.appendChild(item);

var a = document.createElement("a");
a.href = "#";
item.appendChild(a);
var img = document.createElement("img");
img.src = "uploads/banner1.png";
a.appendChild(img);


//获取轮播窗口的宽度
var wdswidth = wds.offsetWidth;

//获取索引为0
var index = 0;

// 点击右侧按钮执行程序
rightbtn.onclick = function () {

    // 如果这个索引是0轮播内容距离左边距直接改为为0  不用动画
    if (index == 0) {
        content.style.left = 0 + "px";
    }
    // 小点相应的之前的没有样式
    li[index].className = "";
    //点击索引加一后
    index++;
    //每点一次，内容左边距v等于index个窗口宽度
    var v = -index * wdswidth;
    //动画  content  距离  速度
    move(content, v, 50);
    // 如果到最后一张图片4 把索引改为0用在下一次点击后执行
    if (index == 4) {
        index = 0;
    }
    // 当他是四的时候改为了零 自然li[0]添加样式
    li[index].className = "active";





}

leftbtn.onclick = function () {
    li[index].className = "";
    index--;
    if (index < 0) {
        content.style.left = 4 * -wdswidth + "px";
        index = 3;
    }
    li[index].className = "active";

    var v = -index * wdswidth;
    move(content, v, 50);

}


for (i = 0; i < li.length; i++) {
    li[i].asd = i;
}

lis.onclick = function (e) {
    if (e.target.nodeName == "LI") {
        li[index].className = "";
        console.log(index);
        index = e.target.asd;
        console.log(e.target);
        li[index].className = "active";
        console.log(index);
        var v = index * -wdswidth;
        move(content, v, 50);
    }
}