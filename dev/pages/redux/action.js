define('pages/redux/action', function(require, exports, module) {

  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
  	value: true
  });
  exports.addTodo = addTodo;
  
  function addTodo(text) {
  	return {
  		type: 'ADD',
  		text: text
  	};
  }

});
