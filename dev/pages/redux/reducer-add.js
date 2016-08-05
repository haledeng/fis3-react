define('pages/redux/reducer-add', function(require, exports, module) {

  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
  	value: true
  });
  exports['default'] = add;
  
  function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }
  
  function add(state, action) {
  	if (state === undefined) state = [];
  
  	if (action.type === 'ADD') {
  		var _ref;
  
  		return (_ref = [action.text]).concat.apply(_ref, _toConsumableArray(state));
  	}
  	return state;
  }
  
  module.exports = exports['default'];

});
