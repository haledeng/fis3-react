define('modules/common.css', function(require, exports, module) {

  function importStyle(css, id) {
  	var ele = document.createElement('style');
  	ele.id = id;
  	document.getElementsByTagName('head')[0].appendChild(ele);
  	if (ele.styleSheet) {
  		ele.styleSheet.cssText = css;
  	} else {
  		ele.appendChild(document.createTextNode(css));
  	}
  }
   importStyle("html {  font-family: sans-serif;  -webkit-text-size-adjust: 100%;  -ms-text-size-adjust: 100%;}body {  margin: 0;}article,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section,summary {  display: block;}audio,canvas,progress,video {  display: inline-block;  vertical-align: baseline;}audio:not([controls]) {  display: none;  height: 0;}[hidden],template {  display: none;}a {  background-color: transparent;}a:active,a:hover {  outline: 0;}abbr[title] {  border-bottom: 1px dotted;}b,strong {  font-weight: bold;}dfn {  font-style: italic;}h1 {  font-size: 2em;  margin: .67em 0;}mark {  color: #000;  background: #ff0;}small {  font-size: 80%;}sub,sup {  font-size: 75%;  line-height: 0;  position: relative;  vertical-align: baseline;}sup {  top: -0.5em;}sub {  bottom: -0.25em;}img {  border: 0;}svg:not(:root) {  overflow: hidden;}figure {  margin: 1em 40px;}hr {  -webkit-box-sizing: content-box;  -moz-box-sizing: content-box;  box-sizing: content-box;  height: 0;}pre {  overflow: auto;}code,kbd,pre,samp {  font-family: monospace, monospace;  font-size: 1em;}button,input,optgroup,select,textarea {  font: inherit;  margin: 0;  color: inherit;}button {  overflow: visible;}button,select {  text-transform: none;}button,html input[type='button'],input[type='reset'],input[type='submit'] {  cursor: pointer;  -webkit-appearance: button;}button[disabled],html input[disabled] {  cursor: default;}button::-moz-focus-inner,input::-moz-focus-inner {  padding: 0;  border: 0;}input {  line-height: normal;}input[type='checkbox'],input[type='radio'] {  -webkit-box-sizing: border-box;  -moz-box-sizing: border-box;  box-sizing: border-box;  padding: 0;}input[type='number']::-webkit-inner-spin-button,input[type='number']::-webkit-outer-spin-button {  height: auto;}input[type='search'] {  -webkit-box-sizing: content-box;  -moz-box-sizing: content-box;  box-sizing: content-box;  -webkit-appearance: textfield;}input[type='search']::-webkit-search-cancel-button,input[type='search']::-webkit-search-decoration {  -webkit-appearance: none;}fieldset {  margin: 0 2px;  padding: .35em .625em .75em;  border: 1px solid #c0c0c0;}legend {  padding: 0;  border: 0;}textarea {  overflow: auto;}optgroup {  font-weight: bold;}table {  border-spacing: 0;  border-collapse: collapse;}td,th {  padding: 0;}", "modules/common.css");

});
