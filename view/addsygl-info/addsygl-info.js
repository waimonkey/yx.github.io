var upload = layui.upload;
var table = layui.table;

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
        $(".fileimg").on('click',function () {
          // 放大预览图片
          layer.photos({
            photos: '#preimg'
            ,anim: 5 //0-6的选择，指定弹出图片动画类型，默认随机（请注意，3.0之前的版本用shift参数）
          });
      });

    });
  },
  done: function(res) {
    //上传完毕
  }
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
