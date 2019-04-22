var taa = document.querySelector("#area");
taa.maxLength = 300; //L 要大写
// console.dir(taa);
var mun = document.querySelector(".useCount");
var maxsp = document.querySelector("#sp");
maxsp.innerText = taa.maxLength;
taa.oninput = function () {
    mun.innerText = this.value.length;
}

//发布
var btn = document.querySelector("#send");

var dongtai = document.querySelector("ul");
// console.log(dongtai);


btn.onclick = function () {
    if (taa.value == "") {
        alert("发布内容不能为空");
    } else {
        //新的li
        var newchild = document.createElement("li");

        //时间
        var time = new Date();
        nian = time.getFullYear();
        yue = time.getMonth() + 1;
        yue = yue < 10 ? "0" + yue : yue;
        rii = time.getDate();
        rii = rii < 10 ? "0" + rii : rii;
        shi = time.getHours();
        shi = shi < 10 ? "0" + shi : shi;
        fen = time.getMinutes();
        fen = fen < 10 ? "0" + fen : fen;
        miao = time.getSeconds();
        miao = miao < 10 ? "0" + miao : miao;
        var shijian = nian + "年" + yue + "月" + rii + "日" + shi + "时" + fen + "分" + miao + "秒";
        console.log(nian);

        //第一个div内容
        var div = document.createElement("div");
        div.className = "info";
        newchild.appendChild(div);

        var img = document.createElement("img");
        img.src = "images/03.jpg";
        var span = document.createElement("span");
        span.innerText = "百里守约"
        var p = document.createElement("p");
        p.innerText = "发布于：" + shijian;
        div.appendChild(img);
        div.appendChild(span);
        div.appendChild(p);

        //第二个div
        var div2 = document.createElement("div");
        div2.className = "content";
        div2.innerText = taa.value;
        newchild.appendChild(div2);
        //文本框内容付给他后，清空
        taa.value = "";
        mun.innerText = "0";

        //往上插入
        var oldchild = dongtai.children[0];

        dongtai.insertBefore(newchild, oldchild);


        //删除按钮
        var del = document.createElement("span");
        del.className = "del";
        del.innerText = "删除";
        div.appendChild(del);
        var ul = document.querySelector("ul");
        ul.onclick = function (e) {
            var ee = e.target;
            if (ee.innerText == "删除") {
                var isok = confirm("确定要删除动态不在好友圈显示吗？")
                if (isok) {
                    this.removeChild(ee.parentNode.parentNode);
                }

            }
        }
    }
}
document.onkeydown = function (e) {
    if (e.keyCode == 13 && e.ctrlKey) {
        btn.onclick();
    }
}