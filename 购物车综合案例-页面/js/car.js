// 数据
var datas = [{
        pName: '牛奶',
        src: './uploads/01.jpg',
        price: 10,
        count: 1
    },
    {
        pName: '三只松鼠',
        src: './uploads/02.jpg',
        price: 30,
        count: 4
    },
    {
        pName: '蓝牙播放器',
        src: './uploads/03.jpg',
        price: 100,
        count: 1
    },
    {
        pName: '大米',
        src: './uploads/04.jpg',
        price: 50,
        count: 10
    },
    {
        pName: '路由器',
        src: './uploads/05.jpg',
        price: 110,
        count: 1
    },
    {
        pName: '罐头',
        src: './uploads/06.jpg',
        price: 20,
        count: 5
    }
];

//动态添加表单元素
for (var i = 0; i < datas.length; i++) {
    var newtr = $('<tr></tr>');
    //两个点是 “~”  Tab按钮 上边的
    newtr.html(`
            <td>
                <input type="checkbox" >
            </td>
            <td>
                <img src=${datas[i].src}>
            <p>${datas[i].pName}</p>
            </td>
            <td>
            ${datas[i].price}￥
            </td>
            <td>
                <div class="count-c clearfix">
                     <a href="javascript:" class="reduce disabled">-</a>
                     <input type="text" value="${datas[i].count}">
                    <a href="javascript:" class="add">+</a>
                 </div>
            </td>
            <td>
            ${datas[i].price*datas[i].count}￥
            </td>
            <td>
                 <a href="javascript:" class="del">删除</a>
            </td>
    `)
    $(".car tbody").append(newtr);
}






//【每行的删除按钮】
function dandel() {
    var bool = confirm("确定要删除吗？");
    if (bool) {
        $(this).parent().parent().remove();
    }

    //计算函数
    fun();
    //如果删除完毕显示 <div class="info">购物车为空</div>
    kongkong();
}
//使用jquery的事件委托
$("tbody").on("click",".del",dandel);

//【therd的全选按钮】
$("thead input[type=checkbox]").click(function () {
    var isbool = $(this).prop("checked");
    console.log(isbool);
    $("tbody").find("input[type=checkbox]").prop("checked", isbool);

    //计算函数
    fun();
})

//tbody的全选按钮
//使用事件委托的方式完成
$("tbody").on("click","input[type=checkbox]",function () {
    //全部选中函数
    allFun();

    //计算函数
    fun();
})

//【加号】
// 封装加号函数
function jiahao() {
    // console.log($(this).prev().val());

    $(this).prev().prev().removeClass("disabled");

    $(this).prev().val(parseInt($(this).prev().val()) + 1);
    $(this).parent().parent().parent().find("input[type=checkbox]").prop("checked", true);

    var eq4 = parseInt($(this).prev().val()) * parseInt($(this).parent().parent().parent().children().eq(2).text());
    // console.log($(this).parent().parent().parent().children().eq(2).text());
    $(this).parent().parent().parent().children().eq(4).text(eq4 + "￥");

    //计算函数
    fun();
    //全部选中函数
    allFun();
}
//使用jquery的事件委托
$("tbody").on("click",".add",jiahao);

//【减号】
// 封装减号函数
function jianhao() {

    $(this).next().val(parseInt($(this).next().val()) - 1);

    if (parseInt($(this).next().val()) <= 0) {
        $(this).addClass("disabled")
        $(this).parent().parent().parent().find("input[type=checkbox]").prop("checked", false);
        $(this).next().val("0");
    }

    var eq4 = parseInt($(this).next().val()) * parseInt($(this).parent().parent().parent().children().eq(2).text());
    // console.log($(this).parent().parent().parent().children().eq(2).text());
    $(this).parent().parent().parent().children().eq(4).text(eq4 + "￥");

    //计算函数
    fun();
    //全部选中函数
    allFun();
}
//使用jquery的事件委托
$("tbody").on("click",".reduce",jianhao)

// 先计算
fun();

// 【删除所选项】
$(".del-all").click(function () {
    var sure = confirm("确定要删除选中项吗？");
    if (sure) {
        if ($("tbody").find("input[type=checkbox]:checked").length == 0) {
            alert("你还未选择所删的商品！");
        } else {
            $("tbody").find("input[type=checkbox]:checked").parent().parent().remove();
        }
    }
    //计算函数
    fun();
    //如果删除完毕显示 <div class="info">购物车为空</div>
    kongkong();
});

//【清理购物车】
$(".clear").click(function () {
    if (confirm("确定要清空购物车吗？")) {
        $("tbody").children().remove();
    }
    //如果删除完毕显示 <div class="info">购物车为空</div>
    kongkong();
})





//封装计算函数
function fun() {
    //选中的数量
    var zonghe = 0;
    // 选中的价格
    var mani = 0;
    //选中的行数
    var xztrs = $("tbody").find("input[type=checkbox]:checked").parent().parent();
    for (var i = 0; i < xztrs.length; i++) {
        zonghe += parseInt(xztrs.eq(i).find("td:eq(3) input").val());
        mani += parseInt(xztrs.eq(i).find("td:eq(4)").text());

    }
    $("#totalCount").text(zonghe);
    $("#totalPrice").text(mani + "￥");

}

// 显示购物车为空的封装函数
function kongkong() {
    //如果删除完毕显示 <div class="info">购物车为空</div>
    if ($("tbody tr").length == 0) {
        $(".info").css("fontSize", "50px").slideDown(500);
    }
}

//全选按钮封装函数
function allFun() {
    var quanbu = $("tbody input[type=checkbox]").length;
    var xuanzhong = $("tbody input[type=checkbox]:checked").length;
    // console.log(quanbu,xuanzhong);
    if (quanbu == xuanzhong) {
        $("thead input[type=checkbox]").prop("checked", true);
    } else {
        $("thead input[type=checkbox]").prop("checked", false);
    }
}