var rate = layui.rate;
  //基础效果
  rate.render({
    elem: '#start'
  })
  var table = layui.table;


  //第一个实例
  table.render({
    elem: "#demo",
    url: "/data.json", //数据接口
    cellMinWidth: 80,
    cols: [
      [
        //表头
        { field: "id", title: "亲属编号" },
        { field: "username", title: "比中数" },
        { field: "username", title: "对比结果" },
        { field: "score", title: "对比详情" },
        
      ]
    ]
  });
  
  
 $(".screport").click(function () { 
  $.ajax({
    type: "get",
    url: "./view/zhdb-report/zhdb-report.html",
    success: function(data) {
      $(".change-content").html(data);
      initBar()
    }
  })
  })


  $("#tozhdb").click(function () { 
    $.ajax({
      type: "get",
      url: "./view/zhdb/zhdb.html",
      // url: "./view/addsygl-info/addsygl-info.html",
      dataType: "text",
      success: function(data) {
        $(".change-content").html(data);
        initBar();
      }
    });
   })
