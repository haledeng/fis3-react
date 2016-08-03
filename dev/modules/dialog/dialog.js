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
