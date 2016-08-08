define('pages/index/container', function(require, exports, module) {

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
  
  var _modulesDialogDialog = require('modules/dialog/dialog');
  
  var _modulesDialogDialog2 = _interopRequireDefault(_modulesDialogDialog);
  
  var buttons = [{
  	text: 'confirm'
  }, {
  	text: 'cancel'
  }];
  
  var Container = (function (_React$Component) {
  	_inherits(Container, _React$Component);
  
  	function Container(props, context) {
  		_classCallCheck(this, Container);
  
  		_get(Object.getPrototypeOf(Container.prototype), 'constructor', this).call(this, props, context);
  		this.state = {
  			showDialog: false,
  			content: 'click button to show'
  		};
  	}
  
  	_createClass(Container, [{
  		key: 'toggle',
  		value: function toggle() {
  			var showDialog = this.state.showDialog;
  
  			this.setState({
  				showDialog: !showDialog,
  				content: showDialog ? 'click button to show' : 'click button to hide'
  			});
  		}
  	}, {
  		key: 'confirm',
  		value: function confirm() {
  			this.setState(Object.assign({}, this.state, {
  				showDialog: false
  			}));
  		}
  	}, {
  		key: 'render',
  		value: function render() {
  			var _state = this.state;
  			var showDialog = _state.showDialog;
  			var content = _state.content;
  
  			return _react2['default'].createElement(
  				'div',
  				null,
  				_react2['default'].createElement(
  					'a',
  					{ href: 'javascript:;',
  						onClick: this.toggle.bind(this) },
  					' ',
  					showDialog ? 'click to hide' : 'click to show',
  					' '
  				),
  				' ',
  				showDialog ? _react2['default'].createElement(_modulesDialogDialog2['default'], { title: 'dlg title',
  					show: showDialog,
  					content: content,
  					buttons: buttons,
  					confirm: this.confirm.bind(this)
  				}) : null,
  				' '
  			);
  		}
  	}]);
  
  	return Container;
  })(_react2['default'].Component);
  
  ;
  
  exports['default'] = Container;
  module.exports = exports['default'];

});
