define('pages/redux/reducer', function(require, exports, module) {

  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _redux = require('node_modules/redux/lib/index');
  
  var _reducerAdd = require('pages/redux/reducer-add');
  
  var _reducerAdd2 = _interopRequireDefault(_reducerAdd);
  
  // state.add 访问
  // reducer返回的值保存在state.add中
  var rootReducer = (0, _redux.combineReducers)({
    add: _reducerAdd2['default']
  });
  
  exports['default'] = rootReducer;
  module.exports = exports['default'];

});
