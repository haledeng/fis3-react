define('pages/index/index', function(require, exports, module) {

  'use strict';
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _react = require('node_modules/react/react');
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactDom = require('node_modules/react-dom/index');
  
  var _container = require('pages/index/container');
  
  var _container2 = _interopRequireDefault(_container);
  
  var buttons = [{
  	text: 'confirm'
  }, {
  	text: 'cancel'
  }];
  
  var confirm = function confirm() {
  	console.log('comfirm');
  };
  
  (0, _reactDom.render)(_react2['default'].createElement(_container2['default'], null), document.getElementById('container'));

});
