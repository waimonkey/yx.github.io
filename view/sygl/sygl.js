
var laydate = layui.laydate;
var table = layui.table;

//执行一个laydate实例
laydate.render({
  elem: "#sygltime",
  range: "~" //指定元素
});


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


//监听行单击事件（单击事件为：rowDouble）
table.on('tool(test)', function(obj){
  var data = obj.data;
  if(obj.event === 'setSign'){
    $.ajax({
      type: "GET",
      url: "./view/sygl-info/sygl-info.html",
      success: function(data) {
        $(".change-content").html(data);
        initBar()
      }
    })
  }
  //标注选中样式
  obj.tr.addClass('layui-table-click').siblings().removeClass('layui-table-click');
});


$("#add-btn").click(function () { 
  $.ajax({
    type: "GET",
    url: "./view/addsygl-info/addsygl-info.html",
    success: function(data) {
      $(".change-content").html(data);
      initBar()
    }
  })
 })

 $(".view-all-recore-btn").click(function () { 
  $.ajax({
    type: "GET",
    url: "./view/viewsyrecore/viewsyrecore.html",
    success: function(data) {
      $(".change-content").html(data);
      initBar()
    }
  })
 })
