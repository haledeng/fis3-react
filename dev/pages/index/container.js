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
