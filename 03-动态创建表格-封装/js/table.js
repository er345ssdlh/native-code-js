function tab(box,arrt,arrh){

  var table = document.createElement("table");
  
  var box1 = document.querySelector(box);
  box1.appendChild(table);
  
  // 表头
  var thead = document.createElement("thead");
  table.appendChild(thead);
  var thTr = document.createElement("tr");
  thead.appendChild(thTr);
  for (var i = 0; i < arrt.length; i++) {
      var th=document.createElement("th");
      th.innerText=arrt[i];
      thTr.appendChild(th);
  }
  
  
  // 表体
  var tbody = document.createElement("tbody");
  table.appendChild(tbody);
  //行
  for (var i = 0; i < arrh.length; i++) {
      var tbTr = document.createElement("tr");
      tbody.appendChild(tbTr);
      //每行的各数
      for (var key in arrh[i]) {
          var td = document.createElement("td");
          td.innerText =arrh[i][key];
          tbTr.appendChild(td);
      }
      var del=document.createElement("td");
      del.innerHTML="<a href=\"javascript:\">删除</a>";
      tbTr.appendChild(del);
  }

  var arrs=tbody.querySelectorAll("a");
for(i=0;i<arrs.length;i++){
  arrs[i].onclick=function(){
    var isok=confirm("确定要删除吗");
    if(isok){
      tbody.removeChild( this.parentNode.parentNode);
    }
  };
}
}
