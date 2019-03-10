var laydate = layui.laydate;

//执行一个laydate实例
laydate.render({
  elem: "#yhxxjs",
  range: "~" //指定元素
});
//执行一个laydate实例
laydate.render({
  elem: "#yhxxfj",
  range: "~" //指定元素
});
laydate.render({
  elem: "#xstime"
});
laydate.render({
  elem: "#cytime"
});

var form = layui.form;
//监听提交
form.on("submit(formDemo)", function(data) {
  layer.msg(JSON.stringify(data.field));
  return false;
});

// 切换其他是说
$(".change-btn").click(function() {
  $(".other-options").toggle();
});

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
      { field: "id", title: "遗骸编号" },
      { field: "username", title: "接收时间" },
      { field: "sex", title: "接收人" },
      { field: "city", title: "发掘时间",  },
      { field: "sign", title: "原始发掘地" },
      { field: "experience", title: "样本类型" },
      { field: "score", title: "样本照片", templet: '#titleTpl',event: 'setSign', },
      { field: "classify", title: "实验管理", templet: '#titleTpl1',event: 'addre' },
      { field: "wealth", title: "对比结果", templet:'#titleTpl2',event: 'tozhbd' },
      { field: "wealth", title: "详情信息",event: 'toyhxxinfo',templet:'#titleTpl3' }
    ]
  ]
});




// 添加记录
table.on('tool(test)', function(obj){
  var data = obj.data;
  if(obj.event === 'addre'){
    $.ajax({
      type: "GET",
      url: "./view/addsygl-info/addsygl-info.html",
      success: function(data) {
        $(".change-content").html(data);
        localStorage.setItem("str", 'sygl');
        contolSidebar()
        initBar()
      }
    })
  }else if(obj.event === 'tozhbd'){ 
    // 综合比对
    $.ajax({
      type: "GET",
      url: "./view/zhdb/zhdb.html",
      success: function(data) {
        $(".change-content").html(data);
        localStorage.setItem("str", 'zhdb');
        contolSidebar()
        initBar()
      }
    })
  }else if(obj.event === 'toyhxxinfo'){ 
    // 遗骸信息详情
    $.ajax({
      type: "GET",
      url: "./view/yhxx-info/yhxx-info.html",
      success: function(data) {
        $(".change-content").html(data);
        localStorage.setItem("str", 'yhxx');
        contolSidebar()
        initBar()
      }
    })
  }
  //标注选中样式
  obj.tr.addClass('layui-table-click').siblings().removeClass('layui-table-click');
});
// // 综合比对
// table.on('tool(test)', function(obj){
//   var data = obj.data;
//   if(obj.event === 'tozhbd'){
//     $.ajax({
//       type: "GET",
//       url: "./view/zhdb/zhdb.html",
//       success: function(data) {
//         $(".change-content").html(data);
//         initBar()
//       }
//     })
//   }
//   //标注选中样式
//   obj.tr.addClass('layui-table-click').siblings().removeClass('layui-table-click');
// });
$(".register-btn").click(function () { 
  $.ajax({
    type: "GET",
    url: "./view/registerinfo/registerinfo.html",
    success: function(data) {
      $(".change-content").html(data);
      initBar()
    }
  })
 })
