define('pages/extends/index', function(require, exports, module) {

  'use strict';
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _react = require('node_modules/react/react');
  
  var _react2 = _interopRequireDefault(_react);
  
  var _dialog = require('pages/extends/dialog');
  
  var _dialog2 = _interopRequireDefault(_dialog);
  
  var _reactDom = require('node_modules/react-dom/index');
  
  (0, _reactDom.render)(_react2['default'].createElement(_dialog2['default'], null), document.getElementById('container'));

});
