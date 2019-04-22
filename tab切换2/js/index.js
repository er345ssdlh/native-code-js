var lis = document.querySelectorAll("li");
var item = document.querySelectorAll(".item");//选择器一定要记得加. #
for (i = 0; i < lis.length; i++) {
    lis[i].abc = i; //目的为的是，把循环出来的有序的i放入事件程序内
    lis[i].onclick = function () {
        for (j = 0; j < lis.length; j++) {
            lis[j].className ="";
            item[j].style.display = "none";
        }
        this.className = "active";
        item[this.abc].style.display = "block";
    }
}