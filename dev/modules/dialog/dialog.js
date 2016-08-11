define('modules/dialog/dialog', function(require, exports, module) {

  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
  	value: true
  });
  
  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
  
  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
  
  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
  
  require('modules/dialog/dialog.less');
  
  var _classnames = require('node_modules/classnames/index');
  
  var _classnames2 = _interopRequireDefault(_classnames);
  
  var _react = require('node_modules/react/react');
  
  var _react2 = _interopRequireDefault(_react);
  
  var Dialog = (function (_Component) {
  	_inherits(Dialog, _Component);
  
  	function Dialog(props, context) {
  		_classCallCheck(this, Dialog);
  
  		_get(Object.getPrototypeOf(Dialog.prototype), 'constructor', this).call(this, props, context);
  	}
  
  	_createClass(Dialog, [{
  		key: 'confirm',
  		value: function confirm() {
  			this.props.confirm();
  		}
  	}, {
  		key: 'render',
  		value: function render() {
  			var self = this;
  			return _react2['default'].createElement(
  				'div',
  				{ className: 'dialog', style: { display: this.props.show ? 'block' : 'none' } },
  				_react2['default'].createElement('div', { className: 'dlg-mask' }),
  				_react2['default'].createElement(
  					'div',
  					{ role: 'container', className: 'dialog-inner' },
  					_react2['default'].createElement(
  						'div',
  						{ role: 'header', className: 'dialog-hd' },
  						_react2['default'].createElement(
  							'div',
  							{ role: 'title', className: 'dialog-title' },
  							this.props.title
  						),
  						_react2['default'].createElement(
  							'a',
  							{ role: 'close', className: 'dialog-close', href: 'javascript:;', onClick: this.confirm.bind(self) },
  							'×'
  						)
  					),
  					_react2['default'].createElement(
  						'div',
  						{ role: 'body', className: 'dialog-bd' },
  						_react2['default'].createElement(
  							'div',
  							{ role: 'content', className: 'dialog-container' },
  							this.props.content
  						)
  					),
  					_react2['default'].createElement(
  						'div',
  						{ role: 'footer', className: 'dialog-ft' },
  						this.props.buttons.map(function (button, index) {
  							return _react2['default'].createElement(
  								'button',
  								{ role: 'button', key: index, className: (0, _classnames2['default'])('btn', 'mr5'), onClick: self.confirm.bind(self) },
  								button.text
  							);
  						})
  					)
  				)
  			);
  		}
  	}]);
  
  	return Dialog;
  })(_react.Component);
  
  exports['default'] = Dialog;
  module.exports = exports['default'];

});
