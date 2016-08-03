;/*!modules/dialog/dialog*/
define('modules/dialog/dialog', function(require, exports, module) {

  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
  	value: true
  });
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  require('modules/dialog/dialog.css');
  
  var _react = require('node_modules/react/react');
  
  var _react2 = _interopRequireDefault(_react);
  
  var Dialog = _react2['default'].createClass({
  	displayName: 'Dialog',
  
  	getInitialState: function getInitialState() {
  		return {
  			isShow: true
  		};
  	},
  	hide: function hide() {
  		this.setState({
  			isShow: false
  		});
  	},
  	comfirm: function comfirm() {
  		this.hide();
  		this.props.comfirm();
  	},
  	render: function render() {
  		var self = this;
  		return _react2['default'].createElement(
  			'div',
  			{ className: 'dialog', style: { display: this.state.isShow ? 'block' : 'none' } },
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
  						{ role: 'close', className: 'dialog-close', href: 'javascript:;', onClick: this.hide },
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
  					this.props.buttons.map(function (button) {
  						return _react2['default'].createElement(
  							'button',
  							{ role: 'button', key: button.text, className: 'btn', onClick: self.comfirm },
  							button.text
  						);
  					})
  				)
  			)
  		);
  	}
  });
  
  exports['default'] = Dialog;
  module.exports = exports['default'];

});

;/*!pages/index/container*/
define('pages/index/container', function(require, exports, module) {

  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
  	value: true
  });
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _react = require('node_modules/react/react');
  
  var _react2 = _interopRequireDefault(_react);
  
  var _modulesDialogDialog = require('modules/dialog/dialog');
  
  var _modulesDialogDialog2 = _interopRequireDefault(_modulesDialogDialog);
  
  var buttons = [{
  	text: 'confirm'
  }, {
  	text: 'cancel'
  }];
  
  var confirm = function confirm() {
  	console.log('comfirm');
  };
  
  var Container = _react2['default'].createClass({
  	displayName: 'Container',
  
  	getInitialState: function getInitialState() {
  		return {
  			showDialog: false,
  			content: ''
  		};
  	},
  
  	toggle: function toggle() {
  		var showDialog = this.state.showDialog;
  
  		this.setState({
  			showDialog: !showDialog,
  			content: showDialog ? 'click button to show' : 'click button to hide'
  		});
  	},
  	render: function render() {
  		var _state = this.state;
  		var showDialog = _state.showDialog;
  		var content = _state.content;
  
  		return _react2['default'].createElement(
  			'div',
  			null,
  			_react2['default'].createElement(
  				'a',
  				{ href: 'javascript:;',
  					style: {
  						marginBottom: "10px"
  					},
  					onClick: this.toggle },
  				' ',
  				showDialog ? 'click to hide' : 'click to show',
  				' '
  			),
  			' ',
  			showDialog ? _react2['default'].createElement(_modulesDialogDialog2['default'], { title: 'dlg title',
  				content: content,
  				buttons: buttons,
  				comfirm: confirm
  			}) : null,
  			' '
  		);
  	}
  });
  
  exports['default'] = Container;
  module.exports = exports['default'];

});

;/*!pages/index/index*/
define('pages/index/index', function(require, exports, module) {

  'use strict';
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _react = require('node_modules/react/react');
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactDom = require('node_modules/react-dom/index');
  
  var _container = require('pages/index/container');
  
  var _container2 = _interopRequireDefault(_container);
  
  var buttons = [{
  	text: 'confirm'
  }, {
  	text: 'cancel'
  }];
  
  var confirm = function confirm() {
  	console.log('comfirm');
  };
  
  (0, _reactDom.render)(_react2['default'].createElement(_container2['default'], null), document.getElementById('container'));

});
