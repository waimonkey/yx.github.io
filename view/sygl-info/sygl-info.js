var table = layui.table;
var layer = layui.layer;
layer.photos({
  photos: '#preimg'
  ,anim: 5 //0-6的选择，指定弹出图片动画类型，默认随机（请注意，3.0之前的版本用shift参数）
});



//第一个实例
table.render({
  elem: "#demo",
  url: "/data.json", //数据接口
  page: false, //开启分页
  cols: [
    [
      //表头
      { type: "checkbox" },
      { field: "id", title: "序号",  sort: true },
      { field: "username", title: "基因座", },
      { field: "sex", title: "基因座分型",  sort: true }
    ]
  ]
});


// tiaozhuan sygl
$("#tosygl").click(function () { 
  $.ajax({
    type: "get",
    url: "./view/sygl/sygl.html",
    // url: "./view/addsygl-info/addsygl-info.html",
    dataType: "text",
    success: function(data) {
      $(".change-content").html(data);
      initBar();
    }
  });
 })
