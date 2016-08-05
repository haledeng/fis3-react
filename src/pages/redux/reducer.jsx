
import { combineReducers } from 'redux'
import todos from './reducer-add'


// state.add 访问
// reducer返回的值保存在state.add中
const rootReducer = combineReducers({
  todos
})

export default rootReducer