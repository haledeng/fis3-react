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
          todos: state.add || []
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
