define('pages/redux/store', function(require, exports, module) {

  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
  	value: true
  });
  exports['default'] = create;
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _redux = require('node_modules/redux/lib/index');
  
  var _reducer = require('pages/redux/reducer');
  
  var _reducer2 = _interopRequireDefault(_reducer);
  
  function create(preloadState) {
  	return (0, _redux.createStore)(_reducer2['default'], preloadState);
  }
  
  module.exports = exports['default'];

});
