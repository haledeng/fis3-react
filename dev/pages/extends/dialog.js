define('pages/extends/dialog', function(require, exports, module) {

  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
  	value: true
  });
  
  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
  
  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
  
  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
  
  var _react = require('node_modules/react/react');
  
  var _react2 = _interopRequireDefault(_react);
  
  var _popup = require('pages/extends/popup');
  
  var _popup2 = _interopRequireDefault(_popup);
  
  var Dialog = (function (_Popup) {
  	_inherits(Dialog, _Popup);
  
  	function Dialog(props, context) {
  		_classCallCheck(this, Dialog);
  
  		_get(Object.getPrototypeOf(Dialog.prototype), 'constructor', this).call(this, props, context);
  		this.state = {
  			content: 'from dialog. Will override text from popup'
  		};
  	}
  
  	_createClass(Dialog, [{
  		key: 'render',
  		value: function render() {
  			return _react2['default'].createElement(
  				'div',
  				null,
  				_react2['default'].createElement(
  					'p',
  					{ onClick: this.handleChick.bind(this) },
  					this.state.content
  				)
  			);
  		}
  	}]);
  
  	return Dialog;
  })(_popup2['default']);
  
  exports['default'] = Dialog;
  module.exports = exports['default'];

});
