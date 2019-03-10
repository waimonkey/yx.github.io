define(function(require, exports, module) {
  // 引入jq
  var $ = require("jquery");
  var css = require('../../css/header.css')
  var toggleList = function() {
    $(".headerpage").on("click", ".avatat-content", function() {
      $(".avatat-list").toggle();
    });
  };
  exports.toggleList = toggleList;
});
