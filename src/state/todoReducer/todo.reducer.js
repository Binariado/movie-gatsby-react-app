import {
  TODO_CREATE,
  TODO_DELETE,
  TODO_UPDATE
} from './todo.types';

const INITIAL_STATE = {
  list: []
};

const getPosition = (state, {title}) =>{
  return state.list.findIndex(element => element.title === title);
}

const getItem = (state, p) =>{
  return state.list[p];
}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TODO_UPDATE:
      const {update, objetive} = action.payload;
      const p = getPosition(state, objetive);
      const i = getItem(state, p);
      state.list[p] = {
        ...i,
        ...update
      }
      return {
        ...state,
        list: state.list,
      }
    case TODO_DELETE:
      state.list.splice(getPosition(state, action.payload), 1)
      return {
        ...state,
        list: state.list,
      }
    case TODO_CREATE:
      state.list.push(action.payload);
      return {
        ...state,
        list: state.list,
      }
    default: return state;
  }
};

export default reducer;