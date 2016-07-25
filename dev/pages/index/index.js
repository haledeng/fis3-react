define('pages/index/index', function(require, exports, module) {

  'use strict';
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _react = require('node_modules/react/react');
  
  var _react2 = _interopRequireDefault(_react);
  
  var _ulJsx = require('pages/index/ul');
  
  var _ulJsx2 = _interopRequireDefault(_ulJsx);
  
  var _dialogJsx = require('pages/index/dialog');
  
  var _dialogJsx2 = _interopRequireDefault(_dialogJsx);
  
  var _reactDom = require('node_modules/react-dom/index');
  
  var person = [{ name: 'helon', age: 26 }, { name: 'lucal', age: 30 }];
  (0, _reactDom.render)(_react2['default'].createElement(_ulJsx2['default'], { person: person }), document.getElementById('container'));

});
