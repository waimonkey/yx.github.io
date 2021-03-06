var table = layui.table;
var layer = layui.layer;

var form = layui.form;

//监听提交
form.on("submit(formDemo)", function(data) {
  layer.msg(JSON.stringify(data.field));
  return false;
});

//第一个实例
table.render({
  elem: "#demo",
  url: "/data.json", //数据接口
  page: true, //开启分页
  cols: [
    [
      //表头
      { field: "id", title: "登录账户", sort: true },
      { field: "username", title: "姓名", sort: true },
      { field: "sex", title: "固定电话", sort: true },
      { field: "city", title: "手机号码" }
    ]
  ]
});
// 添加

$(".add").on("click", function() {
  layer.open({
    type: 1,
    title: "添加用户信息",
    closeBtn: 0,
    area: "540px",
    // skin: 'layui-layer-nobg', //没有背景色
    shadeClose: true,
    content: $("#add-user-info")
  });
});
// $(".sure").click(function() {
//   layer.close(layer.index);
// });
// $(".cancle").click(function() {
//   layer.close(layer.index);
// });

// 角色授权
$(".role-authorize-btn").on("click", function() {
  layer.open({
    type: 1,
    title: "角色授权",
    closeBtn: 0,
    area: "320px",
    // skin: 'layui-layer-nobg', //没有背景色
    shadeClose: true,
    content: $("#role-authorize")
  });
});
// 功能授权
$(".fun-authorize-btn").on("click", function() {
  layer.open({
    type: 1,
    title: "功能授权",
    closeBtn: 0,
    area: "320px",
    // skin: 'layui-layer-nobg', //没有背景色
    shadeClose: true,
    content: $("#fun-authorize")
  });
});
var json = [
  {
    title: "所有模块",
    value: "all",
    data: [
      {
        title: "遗骸受理",
        checked: true,
        // disabled: true,
        value: "yhsl",
        data: []
      },
      {
        title: "认亲受理",
        value: "rqsl",
        checked: true,
        data: []
      },
      {
        title: "系统管理",
        value: "xtgl",
        checked: true,
        // disabled: true,
        data: []
      }
    ]
  }
];
var xtree1 = new layuiXtree({
  elem: "xtree1", //(必填) 放置xtree的容器，样式参照 .xtree_contianer
  form: form, //(必填) layui 的 from
  data: json //(必填) json数据
});
