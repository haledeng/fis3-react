
import { combineReducers } from 'redux'
import add from './reducer-add'


// state.add 访问
// reducer返回的值保存在state.add中
const rootReducer = combineReducers({
  add
})

export default rootReducer