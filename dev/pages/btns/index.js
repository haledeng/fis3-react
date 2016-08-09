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
