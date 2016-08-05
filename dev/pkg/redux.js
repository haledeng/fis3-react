;/*!pages/redux/reducer-add*/
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

;/*!pages/redux/reducer*/
define('pages/redux/reducer', function(require, exports, module) {

  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _redux = require('node_modules/redux/lib/index');
  
  var _reducerAdd = require('pages/redux/reducer-add');
  
  var _reducerAdd2 = _interopRequireDefault(_reducerAdd);
  
  // state.add 访问
  // reducer返回的值保存在state.add中
  var rootReducer = (0, _redux.combineReducers)({
    todos: _reducerAdd2['default']
  });
  
  exports['default'] = rootReducer;
  module.exports = exports['default'];

});

;/*!pages/redux/store*/
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

;/*!pages/redux/input*/
define('pages/redux/input', function(require, exports, module) {

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
  
  var Input = (function (_Component) {
  	_inherits(Input, _Component);
  
  	function Input(props, context) {
  		_classCallCheck(this, Input);
  
  		_get(Object.getPrototypeOf(Input.prototype), 'constructor', this).call(this, props, context);
  		this.state = {
  			text: this.props.text || ''
  		};
  	}
  
  	_createClass(Input, [{
  		key: 'handleSubmit',
  		value: function handleSubmit(e) {
  			var text = e.target.value;
  			if (e.which === 13) {
  				this.props.onSubmit(text);
  				this.setState({
  					text: ''
  				});
  			}
  		}
  	}, {
  		key: 'handleChange',
  		value: function handleChange(e) {
  			this.setState({
  				text: e.target.value
  			});
  		}
  	}, {
  		key: 'render',
  		value: function render() {
  			return _react2['default'].createElement('input', { type: 'text',
  				autoFocus: 'true',
  				value: this.state.text,
  				onChange: this.handleChange.bind(this),
  				onKeyUp: this.handleSubmit.bind(this) });
  		}
  	}]);
  
  	return Input;
  })(_react.Component);
  
  exports['default'] = Input;
  module.exports = exports['default'];

});

;/*!pages/redux/action*/
define('pages/redux/action', function(require, exports, module) {

  // action
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

;/*!pages/redux/app*/
define('pages/redux/app', function(require, exports, module) {

  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
      value: true
  });
  
  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
  
  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
  
  function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
  
  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
  
  var _react = require('node_modules/react/react');
  
  var _react2 = _interopRequireDefault(_react);
  
  var _redux = require('node_modules/redux/lib/index');
  
  var _reactRedux = require('node_modules/react-redux/lib/index');
  
  var _input = require('pages/redux/input');
  
  var _input2 = _interopRequireDefault(_input);
  
  var _action = require('pages/redux/action');
  
  var TodoActions = _interopRequireWildcard(_action);
  
  var App = (function (_Component) {
      _inherits(App, _Component);
  
      function App() {
          _classCallCheck(this, App);
  
          _get(Object.getPrototypeOf(App.prototype), 'constructor', this).apply(this, arguments);
      }
  
      _createClass(App, [{
          key: 'render',
          value: function render() {
              return _react2['default'].createElement(
                  'div',
                  null,
                  _react2['default'].createElement(_input2['default'], { onSubmit: this.props.actions.addTodo }),
                  _react2['default'].createElement(
                      'ul',
                      null,
                      this.props.todos.map(function (todo, index) {
                          return _react2['default'].createElement(
                              'li',
                              { key: index },
                              todo
                          );
                      })
                  )
              );
          }
      }]);
  
      return App;
  })(_react.Component);
  
  function mapStateToProps(state) {
      return {
          todos: state.todos || []
      };
  }
  
  function mapDispatchToProps(dispatch) {
      return {
          actions: (0, _redux.bindActionCreators)(TodoActions, dispatch)
      };
  }
  
  App.propTypes = {
      todos: _react.PropTypes.array.isRequired,
      actions: _react.PropTypes.object.isRequired
  };
  
  exports['default'] = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(App);
  module.exports = exports['default'];

});

;/*!pages/redux/index*/
define('pages/redux/index', function(require, exports, module) {

  'use strict';
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _react = require('node_modules/react/react');
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactDom = require('node_modules/react-dom/index');
  
  var _reactRedux = require('node_modules/react-redux/lib/index');
  
  var _store = require('pages/redux/store');
  
  var _store2 = _interopRequireDefault(_store);
  
  var _app = require('pages/redux/app');
  
  var _app2 = _interopRequireDefault(_app);
  
  var store = (0, _store2['default'])();
  (0, _reactDom.render)(_react2['default'].createElement(
  	_reactRedux.Provider,
  	{ store: store },
  	_react2['default'].createElement(_app2['default'], null)
  ), document.getElementById('container'));

});
