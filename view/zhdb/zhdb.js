//注意：选项卡 依赖 element 模块，否则无法进行功能性操作
layui.use("element", function() {
  var element = layui.element;

  //…
});

var table = layui.table;


//第一个实例
table.render({
  elem: "#demo",
  url: "/data.json", //数据接口
  cellMinWidth: 80,
  cols: [
    [
      //表头
      { field: "id", title: "亲属编号",  sort: true },
      { field: "username", title: "比中数", },
      { field: "username", title: "对比结果", },
      { field: "score", title: "对比详情",  sort: true,templet: '#titleTpl',event: 'setSign', },
      
    ]
  ]
});


//监听行单击事件（单击事件为：rowDouble）
table.on('tool(test)', function(obj){
  var data = obj.data;
  if(obj.event === 'setSign'){
    $.ajax({
      type: "GET",
      url: "./view/zhdb-info/zhdb-info.html",
      success: function(data) {
        $(".change-content").html(data);
        initBar()
      }
    })
  }
  //标注选中样式
  obj.tr.addClass('layui-table-click').siblings().removeClass('layui-table-click');
});
