function move(box, target, sd) {
    clearInterval(box.index);
    box.index = setInterval(function () {
        var v = box.offsetLeft;
        if (Math.abs(target - v) < sd) {
            v = target;
            box.style.left = v + "px";
            clearInterval(box.index); //不再执行下一次
            return; //return防止跑最后一次
        }
        if (target > v) {
            v = v + sd;
        }
        if (target < v) {
            v = v - sd;
        }

        box.style.left = v + "px";
    }, 50);
}