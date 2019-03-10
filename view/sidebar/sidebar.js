if (localStorage.getItem("str") == null) {
  localStorage.setItem("str", "yhxx");
  $.ajax({
    type: "get",
    url: "./view/yhxx/yhxx.html",
    // url: "./view/addsygl-info/addsygl-info.html",
    dataType: "text",
    success: function(data) {
      $(".change-content").html(data);
      initBar();
    }
  });
}else {
  $.ajax({
    type: "get",
    url: "./view/" +localStorage.getItem("str") + "/" +localStorage.getItem("str") +".html",
    dataType: "text",
    success: function(data) {
      $(".change-content").html(data);
      initBar();
    }
  });
}

$(".sidebarpage").on("click", ".nav-child a", function() {
  $(this)
    .addClass("active")
    .parent("dd")
    .siblings()
    .find("a")
    .removeClass("active");
  $(this)
    .addClass("active")
    .parents(".nav-item")
    .siblings()
    .find(".nav-child a")
    .removeClass("active");

  var str = $(this).attr("title");
  localStorage.setItem("str", str);
  var toUrl ="./view/" +localStorage.getItem("str") + "/" +localStorage.getItem("str") +".html";
  $.ajax({
    type: "get",
    url: toUrl,
    dataType: "text",
    success: function(data) {
      $(".change-content").html(data);

      initBar();
    }
  });
});

$(".change-bar").click(function() {
  $(this)
    .parent("li")
    .find(".nav-child")
    .toggle();
  $(this)
    .find(".bottom")
    .toggle();
  $(this)
    .find(".top")
    .toggle();
});

$(".nav-child a").each(function () {
  console.log($(this).attr('title'))
  var urste = $(this).attr('title')
  if(urste ===localStorage.getItem("str") ){
    $(this)
    .addClass("active")
    .parent("dd")
    .siblings()
    .find("a")
    .removeClass("active");
  $(this)
    .addClass("active")
    .parents(".nav-item")
    .siblings()
    .find(".nav-child a")
    .removeClass("active");
  }
  });
