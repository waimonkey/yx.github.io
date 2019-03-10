var form = layui.form;

//监听提交
form.on("submit(formDemo)", function(data) {
  layer.msg(JSON.stringify(data.field));
  return false;
});

var laydate = layui.laydate;

//执行一个laydate实例
laydate.render({
  elem: "#rejssj"
});
laydate.render({
  elem: "#resssj"
});
laydate.render({
  elem: "#recysj"
});
laydate.render({
  elem: "#refjsj"
});

var upload = layui.upload;
//多图片上传
upload.render({
  elem: "#uploadimg",
  url: "/upload/",
  multiple: true,
  before: function(obj) {
    //预读本地文件示例，不支持ie8
    obj.preview(function(index, file, result) {
      $("#preimg").append(
        '<img src="' +
          result +
          '" alt="' +
          file.name +
          '" class="layui-upload-img fileimg" >'
      );

      //某图片放大预览
      $(".fileimg").on("click", function() {
        // 放大预览图片
        layer.photos({
          photos: "#preimg",
          anim: 5 //0-6的选择，指定弹出图片动画类型，默认随机（请注意，3.0之前的版本用shift参数）
        });
      });
    });
  },
  done: function(res) {
    //上传完毕
  }
});

$(".save-btn").click(function() {
  layer.open({
    icon: 1,
    title: "提示",
    content: "保存成功！"
  });
});

//  返回遗骸信息

$("#return-yhxx").click(function() {
  $.ajax({
    type: "get",
    url: "./view/yhxx/yhxx.html",
    dataType: "text",
    success: function(data) {
      $(".change-content").html(data);
      initBar();
    }
  });
});
