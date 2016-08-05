define('pages/redux/index', function(require, exports, module) {

  'use strict';
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _react = require('node_modules/react/react');
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactDom = require('node_modules/react-dom/index');
  
  var _reactRedux = require('node_modules/react-redux/lib/index');
  
  var _store = require('pages/redux/store');
  
  var _store2 = _interopRequireDefault(_store);
  
  var _app = require('pages/redux/app');
  
  var _app2 = _interopRequireDefault(_app);
  
  var store = (0, _store2['default'])();
  (0, _reactDom.render)(_react2['default'].createElement(
  	_reactRedux.Provider,
  	{ store: store },
  	_react2['default'].createElement(_app2['default'], null)
  ), document.getElementById('container'));

});
