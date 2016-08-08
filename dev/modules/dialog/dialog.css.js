define('modules/dialog/dialog.css', function(require, exports, module) {

  (function() {
      var cssContent = '.dialog {   position: relative;   display: inline-block;   vertical-align: middle;   *display: inline;   *zoom: 1; } .dialog a {   text-decoration: none; } .dialog-hd, .dialog-inner {   position: relative; } .dialog-hd .dialog-close, .dialog-hd .maximize, .dialog-hd .minimize, .dialog-hd .recovery {   position: absolute;   display: block; } .dialog-title {   overflow: hidden;   white-space: nowrap;   text-overflow: ellipsis; } .dialog-close {   position: absolute;   display: block; } .dialog-container {   overflow: hidden; } .dialog {   padding: 5px; } .dialog-hd {   height: 34px;   border-bottom: 1px solid; } .mr5 {   margin-right: 5px; } .dialog-title {   font-size: 16px;   line-height: 34px;   padding: 0 40px 0 10px; } .dialog-close {   font-size: 24px;   font-weight: 700;   line-height: 20px;   top: 7px;   right: 7px;   width: 20px;   height: 20px;   text-align: center; } .dialog-ft {   overflow: hidden;   text-align: center; } .dialog {   width: 380px; } .dialog-bd {   padding: 20px; } .dialog-ft {   padding-right: 20px;   padding-bottom: 20px;   padding-left: 20px; } .dialog-mn {   width: 220px; } .dialog-mn .dialog-bd {   padding: 10px; } .dialog-mn .dialog-container {   min-height: 40px; } .dialog-mn .dialog-ft {   padding-bottom: 10px; } .dialog-sm {   width: 300px; } .dialog-sm .dialog-bd {   padding: 10px; } .dialog-sm .dialog-container {   min-height: 80px; } .dialog-sm .dialog-ft {   padding-bottom: 10px; } .dialog-lg {   width: 480px; } .dialog-lg .dialog-container {   min-height: 160px; } .dialog-lgt {   width: 680px; } .dialog-lgt .dialog-bd {   padding: 0 0 20px; } .dialog-lgt .dialog-container {   overflow-y: auto;   height: 550px; } .dialog-notitle .dialog-bd {   padding-top: 30px; } .dialog {   background-color: rgba(0, 0, 0, 0.3) !important;   background-color: #666 \\9; } .dialog-inner {   background-color: #fff; } .dialog-hd {   border-bottom-color: #dfdfdf;   background-color: #fefefe; } .dialog-close {   color: #b6b6b6; } .dialog-close:hover {   color: #a1a1a1; } .dialog-notitle .dialog-inner {   background-color: #fff; } .btn {   display: inline-block;   -webkit-box-sizing: border-box;   -moz-box-sizing: border-box;   box-sizing: border-box;   cursor: pointer;   -webkit-transition: .15s;   -moz-transition: .15s;   transition: .15s;   text-align: center;   vertical-align: middle;   white-space: nowrap;   text-decoration: none;   text-overflow: ellipsis;   color: #656565;   border: 1px solid;   border-color: #e2e2e2;   -webkit-border-radius: 2px;   -moz-border-radius: 2px;   border-radius: 2px;   background-color: #f0f0f0;   -webkit-background-clip: padding-box;   -moz-background-clip: padding;   background-clip: padding-box;   *display: inline;   *zoom: 1;   border-radius: 0;   padding: 4px 24px;   height: 30px;   padding: 4px 19px;   line-height: 20px; } ';
      var injectCssFn = (function (css) {
      var headEl = document.getElementsByTagName('head')[0];
      var styleEl = document.createElement('style');
      headEl.appendChild(styleEl);
      
      if (styleEl.styleSheet) {
          if (!styleEl.styleSheet.disabled) {
              styleEl.styleSheet.cssText = css;
          }
      } else {
          try {
              styleEl.innerHTML = css
          } catch(e) {
              styleEl.innerText = css;
          }
      }
  });
  
      injectCssFn(cssContent);
  })();

});
