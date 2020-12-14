import {
  INCREMENT_COUNTER
} from './auth.types';

export const increment = () => {
  return {
    type: INCREMENT_COUNTER
  };
};

export function incrementAsync() {
  return (dispatch, getState)  => {
    setTimeout(() => {
      // You can invoke sync or async actions with `dispatch`
      dispatch(increment());
    }, 1000);
  };
}