define('pages/index/li.css', function(require, exports, module) {

  (function() {
      var cssContent = 'li {   list-style-type: none;   color: red;   font-size: 20px;   line-height: 30px; } ul {   list-style: none;   margin: 0;   padding: 0; } ';
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
