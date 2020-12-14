
import { combineReducers } from 'redux';

import counterReducer from './todoReducer/todo.reducer';

const rootReducer = combineReducers({
  todoList: counterReducer,
});

export default rootReducer;