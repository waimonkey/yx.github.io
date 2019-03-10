function setNiceScroll(containerClass1, containerClass2) {
  $(containerClass1).niceScroll(containerClass2, {
    cursorcolor: "#dfdfdf",
    autohidemode: true,
    // cursorborderradius: 4,
    background: '#fff',
    cursorminheight: 32,
    disableoutline: true,
    cursorborder: "0px solid #fff",
    cursorwidth: "5px",
    nativeparentscrolling: true,
    preventmultitouchscrolling: true, // 防止多触点事件引发滚动
    disableoutline: true,
    horizrailenabled: false,

  }).show();
  $(containerClass1).niceScroll(containerClass2, {
    cursorcolor: "#dfdfdf",
    autohidemode: true,
    // cursorborderradius: 4,
    background: '#fff',
    cursorminheight: 32,
    disableoutline: true,
    cursorborder: "0px solid #fff",
    cursorwidth: "5px",
    nativeparentscrolling: true,
    preventmultitouchscrolling: true, // 防止多触点事件引发滚动
    disableoutline: true,
    horizrailenabled: false,
  }).resize();
}

function initBar() { 
  setNiceScroll('.yhxx-wrapper','.yhxx-content')
  setNiceScroll('.regsiter-wrapper','.regsiter-content')
  setNiceScroll('.sygl-wrapper','.sygl-content')
  setNiceScroll('.addsygl-info-wrapper','.addsygl-info-content')
  setNiceScroll('.sygl-info-wrapper','.sygl-info-content')
  setNiceScroll('.viewsyrecore-wrapper','.viewsyrecore-content')
  setNiceScroll('.yhxx-info-wrapper','.yhxx-info-content')
  setNiceScroll('.yhxx-edit-wrapper','.yhxx-edit-content')
  setNiceScroll('.zh-contrast-wrapper','.zh-contrast-content')
  setNiceScroll('.zhdb-info-wrapper','.zhdb-info-content')
  setNiceScroll('.zhdb-report-wrapper','.zhdb-report-content')
  setNiceScroll('.usermanage-wrapper','.usermanage-content')
  setNiceScroll('.rolemanage-wrapper','.rolemanage-content')
  
 }

 function contolSidebar() {
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
 }
