;/*!pages/index/li*/
define('pages/index/li', function(require, exports, module) {

  // require('./li.less');
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
  
  var Li = (function (_Component) {
  	_inherits(Li, _Component);
  
  	function Li() {
  		_classCallCheck(this, Li);
  
  		_get(Object.getPrototypeOf(Li.prototype), 'constructor', this).apply(this, arguments);
  	}
  
  	_createClass(Li, [{
  		key: 'render',
  		value: function render() {
  			return _react2['default'].createElement(
  				'li',
  				null,
  				'name is ',
  				this.props.people.name,
  				', age is ',
  				this.props.people.age
  			);
  		}
  	}]);
  
  	return Li;
  })(_react.Component);
  
  exports['default'] = Li;
  module.exports = exports['default'];

});

;/*!pages/index/ul*/
define('pages/index/ul', function(require, exports, module) {

  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
  	value: true
  });
  
  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
  
  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
  
  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
  
  var _liJsx = require('pages/index/li');
  
  var _liJsx2 = _interopRequireDefault(_liJsx);
  
  var _react = require('node_modules/react/react');
  
  var _react2 = _interopRequireDefault(_react);
  
  // loop item should has key prop
  
  var Ul = (function (_Component) {
  	_inherits(Ul, _Component);
  
  	function Ul() {
  		_classCallCheck(this, Ul);
  
  		_get(Object.getPrototypeOf(Ul.prototype), 'constructor', this).apply(this, arguments);
  	}
  
  	_createClass(Ul, [{
  		key: 'render',
  		value: function render() {
  			return _react2['default'].createElement(
  				'ul',
  				null,
  				this.props.person.map(function (prop, i) {
  					return _react2['default'].createElement(_liJsx2['default'], { people: prop, key: i });
  				})
  			);
  		}
  	}]);
  
  	return Ul;
  })(_react.Component);
  
  exports['default'] = Ul;
  module.exports = exports['default'];

});

;/*!pages/index/dialog*/
define('pages/index/dialog', function(require, exports, module) {

  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
  	value: true
  });
  
  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
  
  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
  
  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
  
  var _react = require('node_modules/react/react');
  
  var _react2 = _interopRequireDefault(_react);
  
  var Dialog = (function (_Component) {
  	_inherits(Dialog, _Component);
  
  	function Dialog() {
  		_classCallCheck(this, Dialog);
  
  		_get(Object.getPrototypeOf(Dialog.prototype), "constructor", this).apply(this, arguments);
  	}
  
  	_createClass(Dialog, [{
  		key: "render",
  		value: function render() {
  			return _react2["default"].createElement(
  				"div",
  				{ "class": "dialog" },
  				_react2["default"].createElement("div", { "class": "dlg-mask" }),
  				_react2["default"].createElement(
  					"div",
  					{ role: "container", "class": "dialog-inner" },
  					_react2["default"].createElement(
  						"div",
  						{ role: "header", "class": "dialog-hd" },
  						_react2["default"].createElement(
  							"div",
  							{ role: "title", "class": "dialog-title" },
  							this.props.title
  						),
  						_react2["default"].createElement(
  							"a",
  							{ role: "close", "class": "dialog-close", href: "javascript:;" },
  							"×"
  						)
  					),
  					_react2["default"].createElement(
  						"div",
  						{ role: "body", "class": "dialog-bd" },
  						_react2["default"].createElement(
  							"div",
  							{ role: "content", "class": "dialog-container" },
  							this.props.content
  						)
  					),
  					_react2["default"].createElement("div", { role: "footer", "class": "dialog-ft" })
  				)
  			);
  		}
  	}]);
  
  	return Dialog;
  })(_react.Component);
  
  exports["default"] = Dialog;
  module.exports = exports["default"];

});

;/*!pages/index/index*/
define('pages/index/index', function(require, exports, module) {

  'use strict';
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _react = require('node_modules/react/react');
  
  var _react2 = _interopRequireDefault(_react);
  
  var _ulJsx = require('pages/index/ul');
  
  var _ulJsx2 = _interopRequireDefault(_ulJsx);
  
  var _dialogJsx = require('pages/index/dialog');
  
  var _dialogJsx2 = _interopRequireDefault(_dialogJsx);
  
  var _reactDom = require('node_modules/react-dom/index');
  
  var person = [{ name: 'helon', age: 26 }, { name: 'lucal', age: 30 }];
  (0, _reactDom.render)(_react2['default'].createElement(_ulJsx2['default'], { person: person }), document.getElementById('container'));

});
