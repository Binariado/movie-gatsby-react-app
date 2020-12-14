import {
  INCREMENT_COUNTER
} from './auth.types';

const INITIAL_STATE = {
  count: 0,
  list: []
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return {
        ...state, 
        count: state.count + 1,
      };
    default: return state;
  }
};

export default reducer;