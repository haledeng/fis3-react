;/*!pages/btns/button.css*/
define('pages/btns/button.css', function(require, exports, module) {

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
   importStyle(".btn {  font-size: 14px;  font-weight: normal;  line-height: 1.42857143;  display: inline-block;  margin-bottom: 0;  padding: 6px 12px;  cursor: pointer;  -webkit-user-select: none;  -moz-user-select: none;  -ms-user-select: none;  user-select: none;  text-align: center;  vertical-align: middle;  white-space: nowrap;  border: 1px solid transparent;  border-radius: 4px;  background-image: none;  -ms-touch-action: manipulation;  touch-action: manipulation;}.btn:focus,.btn:active:focus,.btn.active:focus,.btn.focus,.btn:active.focus,.btn.active.focus {  outline: thin dotted;  outline: 5px auto -webkit-focus-ring-color;  outline-offset: -2px;}.btn:hover,.btn:focus,.btn.focus {  text-decoration: none;  color: #333;}.btn:active,.btn.active {  outline: 0;  background-image: none;  -webkit-box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);}.btn-default {  color: #333;  border-color: #ccc;  background-color: #fff;}.btn-default:focus,.btn-default.focus {  color: #333;  border-color: #8c8c8c;  background-color: #e6e6e6;}.btn-default:hover {  color: #333;  border-color: #adadad;  background-color: #e6e6e6;}.btn-default:active,.btn-default.active,.open > .dropdown-toggle.btn-default {  color: #333;  border-color: #adadad;  background-color: #e6e6e6;}", "pages/btns/button.css");

});

;/*!pages/btns/button*/
define('pages/btns/button', function(require, exports, module) {

  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
  	value: true
  });
  
  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
  
  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
  
  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
  
  var _classnames = require('node_modules/classnames/index');
  
  var _classnames2 = _interopRequireDefault(_classnames);
  
  var _react = require('node_modules/react/react');
  
  var _react2 = _interopRequireDefault(_react);
  
  require('pages/btns/button.css');
  
  var Button = (function (_Component) {
  	_inherits(Button, _Component);
  
  	function Button() {
  		_classCallCheck(this, Button);
  
  		_get(Object.getPrototypeOf(Button.prototype), 'constructor', this).apply(this, arguments);
  	}
  
  	_createClass(Button, [{
  		key: 'render',
  		value: function render() {
  			var _props = this.props;
  			var onClick = _props.onClick;
  			var children = _props.children;
  
  			return _react2['default'].createElement(
  				'a',
  				{ href: 'javascript:;', className: (0, _classnames2['default'])('btn', 'btn-default'), onClick: onClick },
  				children
  			);
  		}
  	}]);
  
  	return Button;
  })(_react.Component);
  
  exports['default'] = Button;
  module.exports = exports['default'];

});

;/*!pages/btns/index*/
define('pages/btns/index', function(require, exports, module) {

  'use strict';
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _react = require('node_modules/react/react');
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactDom = require('node_modules/react-dom/index');
  
  var _button = require('pages/btns/button');
  
  var _button2 = _interopRequireDefault(_button);
  
  var click = function click() {
  	console.log('click');
  };
  
  (0, _reactDom.render)(_react2['default'].createElement(
  	_button2['default'],
  	{ onClick: click },
  	'click me'
  ), document.getElementById('container'));

});
