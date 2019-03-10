var form = layui.form;
var layer = layui.layer;
layer.photos({
  photos: '#preimg'
  ,anim: 5 //0-6的选择，指定弹出图片动画类型，默认随机（请注意，3.0之前的版本用shift参数）
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


$("#toedit").click(function() {
  $.ajax({
    type: "get",
    url: "./view/yhxx-edit/yhxx-edit.html",
    dataType: "text",
    success: function(data) {
      $(".change-content").html(data);
      initBar();
    }
  });
});
