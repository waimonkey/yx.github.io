var table = layui.table;

//第一个实例
table.render({
  elem: "#demo",
  url: "/data.json", //数据接口
  page: true, //开启分页
  cols: [
    [
      //表头
      { type: "checkbox" },
      { field: "id", title: "遗骸编号", width: 40, sort: true },
      { field: "username", title: "遗骸编号", width: 80 },
      { field: "sex", title: "试验方法", width: 80, sort: true },
      { field: "city", title: "实验结果", width: 80 },
      { field: "sign", title: "试验时间" },
      { field: "experience", title: "实验人", width: 80, sort: true },
      { field: "score", title: "实验平台", width: 80, sort: true },
      { field: "classify", title: "实验详情", width: 80,templet: '#titleTpl',event: 'setSign', }
    ]
  ]
});


// tiaozhuan sygl
$("#tosygl").click(function () { 
  $.ajax({
    type: "get",
    url: "./view/sygl/sygl.html",
    dataType: "text",
    success: function(data) {
      $(".change-content").html(data);
      initBar();
    }
  });
 })

 $(".add-sy-btn").click(function () { 
  $.ajax({
    type: "get",
    url: "./view/addsygl-info/addsygl-info.html",
    dataType: "text",
    success: function(data) {
      $(".change-content").html(data);
      initBar();
    }
  });
 })
